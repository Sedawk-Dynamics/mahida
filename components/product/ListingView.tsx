"use client";

import { useMemo, useState } from "react";
import { Icons } from "@/components/ui/Icons";
import ProductGrid from "./ProductGrid";
import EmptyState from "./EmptyState";
import FilterControls, { type Filters } from "./FilterControls";
import { PRODUCTS } from "@/lib/data";
import type { Product } from "@/lib/types";

export default function ListingView({
  cat,
  styleParam,
}: {
  cat: string;
  styleParam?: string;
}) {
  const [filters, setFilters] = useState<Filters>({
    style: styleParam ? [styleParam] : [],
    material: [],
    price: [],
  });
  const [sort, setSort] = useState("featured");
  const [perPage, setPerPage] = useState(12);
  const [sheet, setSheet] = useState(false);

  // Reset filters when the category/style changes (render-time reset pattern,
  // mirrors the original effect that re-initialised filters on cat/style change).
  const navKey = `${cat}|${styleParam ?? ""}`;
  const [lastKey, setLastKey] = useState(navKey);
  if (navKey !== lastKey) {
    setLastKey(navKey);
    setFilters({ style: styleParam ? [styleParam] : [], material: [], price: [] });
  }

  const { items, shown } = useMemo(() => {
    let base: Product[] = PRODUCTS;
    if (cat === "New Arrivals") base = PRODUCTS.filter((p) => p.status === "new");
    else if (cat === "S925") base = PRODUCTS.filter((p) => /S925|Sterling/.test(p.material));

    const priceMatch = (p: Product) => {
      if (!filters.price.length) return true;
      return filters.price.some((b) =>
        b === "u500"
          ? p.price && p.price < 500
          : b === "m"
            ? p.price >= 500 && p.price <= 1500
            : p.price > 1500,
      );
    };

    let list = base.filter(
      (p) =>
        (!filters.style.length || filters.style.includes(p.style)) &&
        (!filters.material.length || filters.material.includes(p.material)) &&
        priceMatch(p),
    );
    if (sort === "low") list = [...list].sort((a, b) => (a.price || 0) - (b.price || 0));
    else if (sort === "high") list = [...list].sort((a, b) => (b.price || 0) - (a.price || 0));
    else if (sort === "rating") list = [...list].sort((a, b) => (b.rating || 0) - (a.rating || 0));

    return { items: list, shown: list.slice(0, perPage) };
  }, [cat, filters, sort, perPage]);

  return (
    <>
      <section className="max-w-wrap mx-auto px-5 py-12 grid lg:grid-cols-[240px_1fr] gap-10">
        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block">
          <h3 className="font-serif text-[24px] mb-2">Filter</h3>
          <FilterControls
            filters={filters}
            setFilters={setFilters}
            sort={sort}
            setSort={setSort}
            count={items.length}
            perPage={perPage}
            setPerPage={setPerPage}
          />
        </aside>

        <div>
          {/* toolbar */}
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <p className="text-taupe text-[14px]">
              {items.length} {items.length === 1 ? "piece" : "pieces"}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSheet(true)}
                className="lg:hidden font-sans text-[12px] tracking-nav uppercase border border-charcoal/20 rounded-btn px-4 py-2.5 flex items-center gap-2"
              >
                <Icons.menu size={15} /> Filter
              </button>
              <div className="hidden sm:flex items-center gap-2">
                <span className="font-sans text-[12px] tracking-nav uppercase text-taupe">
                  Show
                </span>
                {[9, 12, 18, 24].map((n) => (
                  <button
                    key={n}
                    onClick={() => setPerPage(n)}
                    className={`font-sans text-[13px] px-2 ${
                      perPage === n
                        ? "text-charcoal underline underline-offset-4 decoration-gold"
                        : "text-taupe hover:text-charcoal"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort products"
                className="border border-charcoal/20 rounded-btn px-3 py-2.5 bg-pearl text-[13px] font-sans"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {shown.length ? <ProductGrid items={shown} /> : <EmptyState />}
        </div>
      </section>

      {/* Mobile filter sheet (slide-up) */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${sheet ? "" : "pointer-events-none"}`}
        aria-hidden={!sheet}
      >
        <div
          className={`absolute inset-0 bg-navy/40 transition-opacity ${
            sheet ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setSheet(false)}
        />
        <div
          className={`absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto bg-pearl rounded-t-2xl transition-transform duration-300 ${
            sheet ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <FilterControls
            mobile
            onClose={() => setSheet(false)}
            filters={filters}
            setFilters={setFilters}
            sort={sort}
            setSort={setSort}
            count={items.length}
            perPage={perPage}
            setPerPage={setPerPage}
          />
        </div>
      </div>
    </>
  );
}
