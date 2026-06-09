"use client";

import { useState } from "react";
import { Icons } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Stars from "@/components/ui/Stars";
import Accordion from "@/components/ui/Accordion";
import SmartImage from "@/components/ui/SmartImage";
import { POOL, pick, ph } from "@/lib/images";
import { inr } from "@/lib/utils";
import { useHydrated, useStore } from "@/lib/store";
import type { Product } from "@/lib/types";

export default function PDPView({ p }: { p: Product }) {
  const addToCart = useStore((s) => s.addToCart);
  const toggleWish = useStore((s) => s.toggleWish);
  const wishlist = useStore((s) => s.wishlist);
  const hydrated = useHydrated();
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);

  const gallery = [
    (p.pics && p.pics[0]) || p.img[0],
    (p.pics && p.pics[1]) || p.img[1] || p.img[0],
    pick(POOL.jewelry, p.id + "-detail"),
    pick(POOL.women, p.id + "-styled"),
  ];
  const wished = hydrated && wishlist.includes(p.id);
  const sold = p.status === "sold";

  return (
    <section className="max-w-wrap mx-auto px-5 py-12 grid lg:grid-cols-2 gap-12">
      {/* Gallery */}
      <div className="flex flex-col-reverse sm:flex-row gap-4">
        <div className="flex sm:flex-col gap-3 overflow-x-auto no-bar">
          {gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative shrink-0 w-16 h-20 rounded-btn overflow-hidden border ${
                active === i ? "border-gold" : "border-transparent"
              }`}
            >
              <SmartImage
                src={ph(g)}
                alt={`${p.name} — view ${i + 1}`}
                fill
                sizes="64px"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
        <div className="flex-1 group relative overflow-hidden rounded-btn bg-beige aspect-[4/5]">
          <SmartImage
            src={ph(gallery[active])}
            alt={`${p.name} — editorial product shot (hover to zoom)`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Details */}
      <div>
        <p className="font-sans text-[12px] tracking-nav uppercase text-gold">{p.category}</p>
        <h1 className="font-serif text-[36px] md:text-[46px] leading-tight text-charcoal mt-2">
          {p.name}
        </h1>
        <div className="mt-3 flex items-center gap-4">
          <Stars value={p.rating || 4.8} />
          {p.status === "new" && <Badge tone="gold">New</Badge>}
          {sold && <Badge tone="sold">Sold out</Badge>}
        </div>
        <p className="mt-5 font-sans text-[24px] text-charcoal">
          {p.price ? inr(p.price) : "Price on enquiry"}
        </p>
        <p className="mt-5 text-taupe text-[17px] leading-[1.8]">
          {p.desc} Soft yet powerful, minimal yet memorable — made to move with your everyday.
        </p>

        {/* qty + actions */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center border border-charcoal/20 rounded-btn">
            <button
              aria-label="Decrease quantity"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="px-3.5 py-3 text-taupe hover:text-charcoal"
            >
              <Icons.minus size={16} />
            </button>
            <span className="px-4 text-[16px] tabular-nums">{qty}</span>
            <button
              aria-label="Increase quantity"
              onClick={() => setQty((q) => q + 1)}
              className="px-3.5 py-3 text-taupe hover:text-charcoal"
            >
              <Icons.plus size={16} />
            </button>
          </div>
          <Button
            className="flex-1 min-w-[180px]"
            onClick={() => !sold && addToCart(p.id, qty)}
            disabled={sold}
          >
            {sold ? "Sold Out" : "Add to Cart"}
          </Button>
        </div>
        <button
          onClick={() => toggleWish(p.id)}
          className={`mt-4 inline-flex items-center gap-2 font-sans text-[12px] tracking-nav uppercase ${
            wished ? "text-gold" : "text-charcoal hover:text-gold"
          }`}
        >
          <Icons.heart size={16} fill={wished ? "#C4A87A" : "none"} />{" "}
          {wished ? "Saved to Wishlist" : "Add to Wishlist"}
        </button>

        {/* trust badges */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-y-4 border-y border-charcoal/10 py-5">
          {(
            [
              ["gem", "Real Pearls"],
              ["shield", "S925 Hallmarked"],
              ["feather", "Lightweight"],
              ["gift", "Gift Packed"],
            ] as [string, string][]
          ).map(([ic, t]) => {
            const I = Icons[ic];
            return (
              <div key={t} className="flex items-center gap-2 text-charcoal">
                <I size={18} stroke="#C4A87A" />
                <span className="font-sans text-[11px] tracking-nav uppercase">{t}</span>
              </div>
            );
          })}
        </div>

        {/* accordions */}
        <div className="mt-8">
          <Accordion
            defaultOpen={[0]}
            items={[
              {
                q: "Description",
                a: (
                  <>
                    {p.desc} Each Mahidha piece is designed with intention — blending timeless
                    elegance with modern femininity and everyday wearability.
                  </>
                ),
              },
              {
                q: "Materials & Care",
                a: (
                  <>
                    Crafted with {p.material.toLowerCase()} and real pearls. Keep away from
                    moisture, perfume and chemicals; store separately in a soft pouch; wear last
                    and remove first; clean gently with a soft dry cloth.
                  </>
                ),
              },
              {
                q: "Shipping & Returns",
                a: (
                  <>
                    Free shipping pan-India. Cash on Delivery available on eligible orders.
                    Processing 2–5 business days. Returns/exchanges only for damaged or incorrect
                    items — contact us within 48 hours of delivery with images and order details.
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
