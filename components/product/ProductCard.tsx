"use client";

import Link from "next/link";
import { useState } from "react";
import { Icons } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Stars from "@/components/ui/Stars";
import SmartImage from "@/components/ui/SmartImage";
import { ph } from "@/lib/images";
import { inr, hrefFor } from "@/lib/utils";
import { LIVE_SHOP } from "@/lib/links";
import { useHydrated, useStore } from "@/lib/store";
import type { Product } from "@/lib/types";

export default function ProductCard({ p }: { p: Product }) {
  const toggleWish = useStore((s) => s.toggleWish);
  const wishlist = useStore((s) => s.wishlist);
  const hydrated = useHydrated();
  const [hover, setHover] = useState(false);
  const sold = p.status === "sold";
  const wished = hydrated && wishlist.includes(p.id);
  const href = hrefFor("pdp", { id: p.id });

  return (
    <div
      className="group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden rounded-btn bg-beige aspect-[4/5]">
        <Link href={href} aria-label={`View ${p.name}`}>
          <SmartImage
            src={ph((p.pics && p.pics[0]) || p.img[0])}
            alt={`${p.img[0]} — editorial product shot`}
            fill
            sizes="(max-width: 1024px) 50vw, 33vw"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              hover ? "opacity-0" : "opacity-100"
            }`}
          />
          <SmartImage
            src={ph((p.pics && p.pics[1]) || (p.pics && p.pics[0]) || p.img[1] || p.img[0])}
            alt={`${p.img[1] || p.name} — lifestyle / second angle`}
            fill
            sizes="(max-width: 1024px) 50vw, 33vw"
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ${
              hover ? "opacity-100 scale-105" : "opacity-0"
            }`}
          />
        </Link>
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {p.status === "new" && <Badge tone="gold">New</Badge>}
          {sold && <Badge tone="sold">Sold out</Badge>}
          {p.status === "star" && (
            <span className="bg-pearl/90 px-2 py-1 rounded-btn">
              <Stars value={p.rating} size={12} />
            </span>
          )}
        </div>
        <button
          aria-label={wished ? `Remove ${p.name} from wishlist` : `Add ${p.name} to wishlist`}
          onClick={() => toggleWish(p.id)}
          className={`absolute top-3 right-3 p-2 rounded-full bg-pearl/85 transition-colors ${
            wished ? "text-gold" : "text-charcoal hover:text-gold"
          }`}
        >
          <Icons.heart size={16} fill={wished ? "#C4A87A" : "none"} />
        </button>
        {/* Hover action bar */}
        <div
          className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
            hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {sold ? (
            <Button variant="light" className="w-full" disabled>
              Sold Out
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="light" className="flex-1 !px-3" href={LIVE_SHOP}>
                Add to Cart
              </Button>
              <Button
                variant="light"
                className="!px-3"
                href={href}
                aria-label={`View ${p.name}`}
              >
                <Icons.arrow size={16} />
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="pt-4 text-center">
        <p className="font-sans text-[11px] tracking-nav uppercase text-gold">{p.category}</p>
        <Link
          href={href}
          className="block font-serif text-[21px] leading-tight text-charcoal mt-1 hover:text-taupe transition-colors"
        >
          {p.name}
        </Link>
        <p className="mt-1.5 font-sans text-[15px] text-charcoal">
          {p.price ? inr(p.price) : <span className="text-taupe">Price on enquiry</span>}
        </p>
      </div>
    </div>
  );
}
