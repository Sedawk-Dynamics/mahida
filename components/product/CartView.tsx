"use client";

import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import SmartImage from "@/components/ui/SmartImage";
import { ph } from "@/lib/images";
import { inr, hrefFor } from "@/lib/utils";
import { useCart, useStore } from "@/lib/store";

export default function CartView() {
  const setQty = useStore((s) => s.setQty);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const { items, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <Icons.bag size={44} stroke="#C4A87A" />
        <p className="mt-5 font-serif text-[30px] text-charcoal">Your bag is empty</p>
        <p className="mt-2 text-taupe">Discover pearls reimagined for your everyday.</p>
        <Button className="mt-7" href={hrefFor("list", { cat: "All Jewellery" })}>
          Explore Collections
        </Button>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-[1fr_360px] gap-12">
      <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
        {items.map((p) => (
          <div key={p.id} className="flex gap-5 py-6">
            <div className="relative w-24 h-28 rounded-btn overflow-hidden shrink-0 bg-beige">
              <SmartImage
                src={ph((p.pics && p.pics[0]) || p.img[0])}
                alt={`${p.img[0]} — product`}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between gap-3">
                <div>
                  <Link
                    href={hrefFor("pdp", { id: p.id })}
                    className="font-serif text-[22px] text-charcoal text-left hover:text-taupe block"
                  >
                    {p.name}
                  </Link>
                  <p className="text-[12px] tracking-nav uppercase text-gold mt-0.5">
                    {p.category}
                  </p>
                </div>
                <button
                  aria-label={`Remove ${p.name}`}
                  onClick={() => removeFromCart(p.id)}
                  className="text-taupe hover:text-charcoal h-fit"
                >
                  <Icons.close size={18} />
                </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center border border-charcoal/20 rounded-btn">
                  <button
                    aria-label="Decrease"
                    onClick={() => setQty(p.id, p.qty - 1)}
                    className="px-3 py-2 text-taupe hover:text-charcoal"
                  >
                    <Icons.minus size={14} />
                  </button>
                  <span className="px-3.5 text-[15px] tabular-nums">{p.qty}</span>
                  <button
                    aria-label="Increase"
                    onClick={() => setQty(p.id, p.qty + 1)}
                    className="px-3 py-2 text-taupe hover:text-charcoal"
                  >
                    <Icons.plus size={14} />
                  </button>
                </div>
                <span className="font-sans text-[16px]">
                  {p.price ? inr(p.price * p.qty) : "Enquire"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <aside className="bg-beige rounded-btn p-7 h-fit">
        <h3 className="font-serif text-[24px] text-charcoal">Order Summary</h3>
        <div className="mt-5 space-y-3 text-[15px]">
          <div className="flex justify-between">
            <span className="text-taupe">Subtotal</span>
            <span className="font-sans">{inr(total)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-taupe">Shipping</span>
            <span className="font-sans text-gold">Free</span>
          </div>
          <div className="flex justify-between border-t border-charcoal/15 pt-3 mt-3">
            <span className="font-serif text-[20px]">Total</span>
            <span className="font-sans text-[18px]">{inr(total)}</span>
          </div>
        </div>
        <Button className="w-full mt-6">Proceed to Checkout</Button>
        <p className="mt-3 text-center text-[12px] text-taupe">
          Cash on Delivery available · Free shipping pan-India
        </p>
        <Link
          href={hrefFor("list", { cat: "All Jewellery" })}
          className="block w-full mt-4 text-center font-sans text-[12px] tracking-nav uppercase text-taupe hover:text-charcoal"
        >
          Continue Shopping
        </Link>
      </aside>
    </div>
  );
}
