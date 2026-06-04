"use client";

import { Icons } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/data";

export interface Filters {
  style: string[];
  material: string[];
  price: string[];
}

function FilterGroup({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (val: string) => void;
}) {
  return (
    <div className="py-5 border-b border-charcoal/10">
      <h4 className="font-sans text-[12px] tracking-nav uppercase text-charcoal mb-3">
        {title}
      </h4>
      <div className="space-y-2">
        {options.map((o) => (
          <label
            key={o}
            className="flex items-center gap-2.5 cursor-pointer text-[14px] text-taupe hover:text-charcoal"
          >
            <input
              type="checkbox"
              checked={selected.includes(o)}
              onChange={() => onToggle(o)}
              className="accent-navy w-4 h-4"
            />
            {o}
          </label>
        ))}
      </div>
    </div>
  );
}

interface FilterControlsProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  sort: string;
  setSort: (s: string) => void;
  count: number;
  perPage: number;
  setPerPage: (n: number) => void;
  mobile?: boolean;
  onClose?: () => void;
}

export default function FilterControls({
  filters,
  setFilters,
  sort,
  setSort,
  count,
  mobile,
  onClose,
}: FilterControlsProps) {
  const allStyles = [...new Set(PRODUCTS.map((p) => p.style))];
  const allMaterials = [...new Set(PRODUCTS.map((p) => p.material))];

  const toggle = (key: keyof Filters, val: string) =>
    setFilters((f) => {
      const set = new Set(f[key]);
      if (set.has(val)) set.delete(val);
      else set.add(val);
      return { ...f, [key]: [...set] };
    });

  return (
    <div className={mobile ? "p-6" : ""}>
      {mobile && (
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-serif text-[22px]">Filter &amp; Sort</h3>
          <button aria-label="Close filters" onClick={onClose}>
            <Icons.close />
          </button>
        </div>
      )}
      <FilterGroup
        title="Style"
        options={allStyles}
        selected={filters.style}
        onToggle={(v) => toggle("style", v)}
      />
      <FilterGroup
        title="Material"
        options={allMaterials}
        selected={filters.material}
        onToggle={(v) => toggle("material", v)}
      />
      <div className="py-5 border-b border-charcoal/10">
        <h4 className="font-sans text-[12px] tracking-nav uppercase text-charcoal mb-3">
          Price
        </h4>
        <div className="space-y-2">
          {([["Under ₹500", "u500"], ["₹500 – ₹1500", "m"], ["₹1500 +", "h"]] as const).map(
            ([label, v]) => (
              <label
                key={v}
                className="flex items-center gap-2.5 cursor-pointer text-[14px] text-taupe hover:text-charcoal"
              >
                <input
                  type="checkbox"
                  checked={filters.price.includes(v)}
                  onChange={() => toggle("price", v)}
                  className="accent-navy w-4 h-4"
                />
                {label}
              </label>
            ),
          )}
        </div>
      </div>
      {mobile && (
        <div className="pt-5">
          <label className="block font-sans text-[12px] tracking-nav uppercase text-charcoal mb-2">
            Sort
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full border border-charcoal/20 rounded-btn px-3 py-2.5 bg-pearl text-[14px]"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
          <Button className="w-full mt-5" onClick={onClose}>
            Show {count} results
          </Button>
        </div>
      )}
    </div>
  );
}
