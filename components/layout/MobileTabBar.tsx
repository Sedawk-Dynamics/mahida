"use client";

import { Icons } from "@/components/ui/Icons";
import { useCart, useHydrated } from "@/lib/store";

const TABS: { label: string; href: string; icon: string; badge?: boolean }[] = [
  { label: "Home", href: "https://mahidha.vercel.app/", icon: "home" },
  { label: "Wishlist", href: "https://shop.mahidha.com/wishlist/", icon: "heart" },
  { label: "Cart", href: "https://shop.mahidha.com/cart/", icon: "bag", badge: true },
  {
    label: "Account",
    href: "https://shop.mahidha.com/my-account/?action=register",
    icon: "account",
  },
];

export default function MobileTabBar() {
  const { count } = useCart();
  const hydrated = useHydrated();
  return (
    <nav
      aria-label="Quick navigation"
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-pearl/95 backdrop-blur border-t border-charcoal/10"
    >
      <ul className="grid grid-cols-4">
        {TABS.map((t) => {
          const I = Icons[t.icon];
          return (
            <li key={t.label}>
              <a
                href={t.href}
                aria-label={t.label}
                className="flex flex-col items-center justify-center gap-1 py-2.5 text-charcoal hover:text-gold transition-colors"
              >
                <span className="relative">
                  <I size={22} />
                  {t.badge && hydrated && count > 0 && (
                    <span className="absolute -top-1.5 -right-2.5 bg-navy text-pearl text-[10px] font-sans rounded-full w-[16px] h-[16px] flex items-center justify-center">
                      {count}
                    </span>
                  )}
                </span>
                <span className="font-sans text-[10px] tracking-nav uppercase">
                  {t.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
