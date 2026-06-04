"use client";

import { useEffect } from "react";
import { Icons } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import SmartImage from "@/components/ui/SmartImage";
import { ph } from "@/lib/images";
import { inr, hrefFor } from "@/lib/utils";
import { useCart, useStore } from "@/lib/store";

export default function CartDrawer() {
  const cartOpen = useStore((s) => s.cartOpen);
  const setCartOpen = useStore((s) => s.setCartOpen);
  const setQty = useStore((s) => s.setQty);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const { items, total } = useCart();

  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";
  }, [cartOpen]);

  return (
    <div
      className={`fixed inset-0 z-[60] ${cartOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!cartOpen}
    >
      <div
        className={`absolute inset-0 bg-navy/40 transition-opacity duration-300 ${
          cartOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setCartOpen(false)}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-pearl shadow-2xl flex flex-col transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping bag"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-charcoal/10">
          <h3 className="font-serif text-[22px]">Your Bag</h3>
          <button aria-label="Close bag" onClick={() => setCartOpen(false)} className="p-1.5">
            <Icons.close />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <Icons.bag size={40} stroke="#C4A87A" />
            <p className="mt-5 font-serif text-[24px] text-charcoal">Your bag is empty</p>
            <p className="mt-2 text-taupe text-[15px]">
              Discover pearls reimagined for your everyday.
            </p>
            <Button
              className="mt-6"
              onClick={() => {
                setCartOpen(false);
              }}
              href={hrefFor("list", { cat: "All Jewellery" })}
            >
              Explore Collections
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              {items.map((p) => (
                <div key={p.id} className="flex gap-4">
                  <div className="relative w-20 h-24 rounded-btn overflow-hidden shrink-0 bg-beige">
                    <SmartImage
                      src={ph((p.pics && p.pics[0]) || p.img[0])}
                      alt={p.img[0] + " — product"}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between gap-2">
                      <p className="font-serif text-[18px] leading-tight">{p.name}</p>
                      <button
                        aria-label={`Remove ${p.name}`}
                        onClick={() => removeFromCart(p.id)}
                        className="text-taupe hover:text-charcoal"
                      >
                        <Icons.close size={16} />
                      </button>
                    </div>
                    <p className="text-[12px] text-taupe mt-0.5">{p.category}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-charcoal/20 rounded-btn">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => setQty(p.id, p.qty - 1)}
                          className="px-2.5 py-1.5 text-taupe hover:text-charcoal"
                        >
                          <Icons.minus size={14} />
                        </button>
                        <span className="px-3 text-[14px] tabular-nums">{p.qty}</span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => setQty(p.id, p.qty + 1)}
                          className="px-2.5 py-1.5 text-taupe hover:text-charcoal"
                        >
                          <Icons.plus size={14} />
                        </button>
                      </div>
                      <span className="font-sans text-[15px]">
                        {p.price ? inr(p.price * p.qty) : "Enquire"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-charcoal/10 px-6 py-5">
              <div className="flex justify-between mb-1 text-[15px]">
                <span className="text-taupe">Subtotal</span>
                <span className="font-sans">{inr(total)}</span>
              </div>
              <p className="text-[12px] text-taupe mb-4">
                Shipping &amp; taxes calculated at checkout. Free shipping pan-India.
              </p>
              <Button className="w-full" onClick={() => setCartOpen(false)} href={hrefFor("cart")}>
                View Bag &amp; Checkout
              </Button>
              <button
                onClick={() => setCartOpen(false)}
                className="w-full mt-3 font-sans text-[12px] tracking-nav uppercase text-taupe hover:text-charcoal"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
