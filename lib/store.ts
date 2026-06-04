"use client";

import { useSyncExternalStore } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PRODUCTS } from "./data";
import type { Product } from "./types";

export interface CartLine {
  id: string;
  qty: number;
}

interface StoreState {
  cart: CartLine[];
  wishlist: string[];
  cartOpen: boolean;
  addToCart: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  toggleWish: (id: string) => void;
  setCartOpen: (open: boolean) => void;
}

/* Recreates the original StoreProvider behaviour (cart, wishlist, drawer)
   with localStorage persistence. Routing now lives in Next.js. */
export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      cart: [],
      wishlist: [],
      cartOpen: false,
      addToCart: (id, qty = 1) =>
        set((s) => {
          const ex = s.cart.find((i) => i.id === id);
          const cart = ex
            ? s.cart.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i))
            : [...s.cart, { id, qty }];
          return { cart, cartOpen: true };
        }),
      setQty: (id, qty) =>
        set((s) => ({
          cart:
            qty <= 0
              ? s.cart.filter((i) => i.id !== id)
              : s.cart.map((i) => (i.id === id ? { ...i, qty } : i)),
        })),
      removeFromCart: (id) =>
        set((s) => ({ cart: s.cart.filter((i) => i.id !== id) })),
      toggleWish: (id) =>
        set((s) => ({
          wishlist: s.wishlist.includes(id)
            ? s.wishlist.filter((x) => x !== id)
            : [...s.wishlist, id],
        })),
      setCartOpen: (open) => set({ cartOpen: open }),
    }),
    {
      name: "mahidha-store",
      partialize: (s) => ({ cart: s.cart, wishlist: s.wishlist }),
    },
  ),
);

export type CartItem = Product & { qty: number };

/* Derived cart selectors joined against the product catalogue. */
export function useCart(): { items: CartItem[]; count: number; total: number } {
  const cart = useStore((s) => s.cart);
  const items = cart
    .map((i) => {
      const p = PRODUCTS.find((x) => x.id === i.id);
      return p ? { ...p, qty: i.qty } : null;
    })
    .filter(Boolean) as CartItem[];
  const count = cart.reduce((n, i) => n + i.qty, 0);
  const total = items.reduce((sum, p) => sum + (p.price || 0) * p.qty, 0);
  return { items, count, total };
}

/* Hydration guard so persisted counts don't cause an SSR/client mismatch.
   Returns false on the server + first client render, true thereafter. */
const noop = () => () => {};
export function useHydrated(): boolean {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}
