"use client";

import { Icons } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Stars from "@/components/ui/Stars";
import SmartImage from "@/components/ui/SmartImage";
import { ph } from "@/lib/images";
import { inr } from "@/lib/utils";
import { LIVE_SHOP } from "@/lib/links";
import { useHydrated, useStore } from "@/lib/store";
import type { Product } from "@/lib/types";

export default function ProductCard({ p }: { p: Product }) {
  const toggleWish = useStore((s) => s.toggleWish);
  const wishlist = useStore((s) => s.wishlist);
  const hydrated = useHydrated();
  const sold = p.status === "sold";
  const wished = hydrated && wishlist.includes(p.id);
  const shopHref = p.shopUrl || LIVE_SHOP;
  const discount =
    p.oldPrice && p.price ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-btn bg-beige aspect-[4/5]">
        <a href={shopHref} aria-label={`Shop ${p.name}`}>
          <SmartImage
            src={ph((p.pics && p.pics[0]) || p.img[0])}
            alt={`${p.img[0]} — editorial product shot`}
            fill
            sizes="(max-width: 1024px) 50vw, 33vw"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </a>
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount > 0 && <Badge tone="gold">-{discount}%</Badge>}
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
        {/* Action bar */}
        <div className="absolute inset-x-0 bottom-0 p-3">
          {sold ? (
            <Button variant="light" className="w-full" disabled>
              Sold Out
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button variant="light" className="flex-1 !px-3" href={shopHref}>
                Add to Cart
              </Button>
              <Button
                variant="light"
                className="!px-3"
                href={shopHref}
                aria-label={`Shop ${p.name}`}
              >
                <Icons.arrow size={16} />
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="pt-4 text-center">
        <p className="font-sans text-[11px] tracking-nav uppercase text-gold">{p.category}</p>
        <a
          href={shopHref}
          className="block font-serif text-[21px] leading-tight text-charcoal mt-1 hover:text-taupe transition-colors"
        >
          {p.name}
        </a>
        <p className="mt-1.5 font-sans text-[15px] text-charcoal">
          {p.price ? (
            <>
              {p.oldPrice && (
                <span className="text-taupe line-through mr-2">{inr(p.oldPrice)}</span>
              )}
              {inr(p.price)}
            </>
          ) : (
            <span className="text-taupe">Price on enquiry</span>
          )}
        </p>
      </div>
    </div>
  );
}
