"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { Icons } from "@/components/ui/Icons";
import SmartImage from "@/components/ui/SmartImage";
import { NAV, ALL_JEWELRY_MEGA } from "@/lib/data";
import { LOGO } from "@/lib/images";
import { hrefFor } from "@/lib/utils";
import { useCart, useHydrated, useStore } from "@/lib/store";

function IconBtn({
  label,
  onClick,
  href,
  children,
  badge,
  className = "inline-flex",
}: {
  label: string;
  onClick?: () => void;
  href?: string;
  children: ReactNode;
  badge?: number;
  className?: string;
}) {
  const inner = (
    <>
      {children}
      {badge !== undefined && badge > 0 && (
        <span className="absolute -top-1 -right-1 bg-navy text-pearl text-[10px] font-sans font-medium rounded-full w-[18px] h-[18px] flex items-center justify-center">
          {badge}
        </span>
      )}
    </>
  );
  const cls = `relative p-1.5 text-[#2E2A28] hover:text-gold transition-colors ${className}`;
  if (href) {
    const external = /^https?:\/\//.test(href);
    if (external) {
      return (
        <a href={href} aria-label={label} className={cls}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} aria-label={label} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button aria-label={label} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

export default function Header() {
  const pathname = usePathname();
  const wishlist = useStore((s) => s.wishlist);
  const { count } = useCart();
  const hydrated = useHydrated();
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [ajOpen, setAjOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
  }, [drawer]);

  const isActive = (to: string, params?: { cat?: string; style?: string }) =>
    pathname === hrefFor(to, params).split("?")[0];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-pearl shadow-[0_1px_0_rgba(43,43,43,0.06)]"
          : "bg-pearl"
      }`}
    >
      <div className="w-[95%] mx-auto px-[15px] grid grid-cols-[1fr_auto_1fr] items-stretch h-16 md:h-20">
        {/* Left column — hamburger + MENU (mobile) · logo (desktop) */}
        <div className="flex items-center justify-start">
          <button
            className="lg:hidden flex items-center gap-2 p-1.5 text-charcoal font-sans text-[12px] tracking-nav uppercase"
            aria-label="Open menu"
            onClick={() => setDrawer(true)}
          >
            <Icons.menu />
            <span>Menu</span>
          </button>
          <Link
            href="/"
            aria-label="MAHIDHA — home"
            className="hidden lg:flex items-center"
          >
            <SmartImage
              src={LOGO}
              alt="MAHIDHA — Elevated Everyday"
              width={704}
              height={264}
              priority
              className="block h-12 w-auto brightness-[0.62] saturate-150"
            />
          </Link>
        </div>

        {/* Center column — logo (mobile, centered) · nav (desktop, centered) */}
        <div className="flex items-center justify-center">
          <Link
            href="/"
            aria-label="MAHIDHA — home"
            className="lg:hidden flex items-center"
          >
            <SmartImage
              src={LOGO}
              alt="MAHIDHA — Elevated Everyday"
              width={704}
              height={264}
              priority
              className="block h-12 w-auto brightness-[0.62] saturate-150"
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-5 h-full">
          {NAV.map((n) => {
            const ext = n.external;
            const cls =
              "ulink font-sans text-[13px] tracking-nav uppercase text-[#2E2A28] hover:text-gold";
            if (n.label === "All Jewellery") {
              return (
                <div key={n.label} className="group/aj flex items-center h-full">
                  <a href={ext} className={`${cls} inline-flex items-center gap-1.5`}>
                    {n.label}
                    <span className="inline-block rotate-90 text-gold">
                      <Icons.chevron size={11} />
                    </span>
                  </a>
                  {/* Full-width mega — spans header, content constrained to the container (matches live wd-design-full-width) */}
                  <div className="absolute left-0 right-0 top-full hidden group-hover/aj:block group-focus-within/aj:block z-50">
                    <div className="bg-[#F5F0E8] border-t border-charcoal/10 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                      <div className="w-[95%] mx-auto px-[15px] py-8.5">
                        <div className="flex gap-14">
                          {ALL_JEWELRY_MEGA.map((g) => (
                            <div key={g.title}>
                              <a
                                href={g.href}
                                className="ulink block font-sans text-[12px] tracking-nav uppercase text-[#B8985C] mb-3"
                              >
                                {g.title}
                              </a>
                              <ul className="space-y-2.5">
                                {g.items.map((it) => (
                                  <li key={it.label}>
                                    <a
                                      href={it.href}
                                      className="ulink font-sans text-[16px] text-[#33302B] hover:text-[#B8985C] whitespace-nowrap"
                                    >
                                      {it.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            if (ext) {
              return (
                <a key={n.label} href={ext} className={cls}>
                  {n.label}
                </a>
              );
            }
            return (
              <Link
                key={n.label}
                href={hrefFor(n.to, n.params)}
                className={`${cls} ${isActive(n.to, n.params) ? "active" : ""}`}
              >
                {n.label}
              </Link>
            );
          })}
          </nav>
        </div>

        {/* Right column — Cart only on mobile; full set from desktop up */}
        <div className="flex items-center justify-end gap-1 md:gap-2">
          <IconBtn
            label="Search"
            href="https://shop.mahidha.com/"
            className="hidden lg:inline-flex"
          >
            <Icons.search size={20} />
          </IconBtn>
          <IconBtn label="Cart" href="https://shop.mahidha.com/cart/" badge={hydrated ? count : 0}>
            <Icons.bag size={20} />
          </IconBtn>
          <IconBtn
            label="Compare"
            href="https://shop.mahidha.com/compare/"
            className="hidden lg:inline-flex"
          >
            <Icons.compare size={20} />
          </IconBtn>
          <IconBtn
            label="Wishlist"
            href="https://shop.mahidha.com/wishlist/"
            badge={hydrated ? wishlist.length : 0}
            className="hidden lg:inline-flex"
          >
            <Icons.heart size={20} />
          </IconBtn>
          <IconBtn
            label="Account"
            href="https://shop.mahidha.com/my-account/?action=register"
            className="hidden lg:inline-flex"
          >
            <Icons.account size={20} />
          </IconBtn>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${drawer ? "" : "pointer-events-none"}`}
        aria-hidden={!drawer}
      >
        <div
          className={`absolute inset-0 bg-navy/40 transition-opacity duration-300 ${
            drawer ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setDrawer(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-[82%] max-w-sm bg-pearl shadow-xl transition-transform duration-300 ${
            drawer ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-charcoal/10">
            <SmartImage
              src={LOGO}
              alt="MAHIDHA — Elevated Everyday"
              width={704}
              height={264}
              className="h-12 w-auto brightness-[0.62] saturate-150"
            />
            <button aria-label="Close menu" onClick={() => setDrawer(false)} className="p-1.5">
              <Icons.close />
            </button>
          </div>
          <nav className="px-5 py-6 flex flex-col">
            {NAV.map((n) => {
              const ext = n.external;
              const cls =
                "py-3.5 border-b border-charcoal/5 font-sans text-[14px] tracking-nav uppercase text-charcoal flex items-center justify-between";
              if (n.label === "All Jewellery") {
                return (
                  <div key={n.label} className="border-b border-charcoal/5">
                    <button
                      onClick={() => setAjOpen((o) => !o)}
                      aria-expanded={ajOpen}
                      className="w-full py-3.5 font-sans text-[14px] tracking-nav uppercase text-charcoal flex items-center justify-between"
                    >
                      {n.label}
                      <span
                        className={`text-gold transition-transform duration-300 ${ajOpen ? "rotate-45" : ""}`}
                      >
                        <Icons.plus size={16} />
                      </span>
                    </button>
                    {ajOpen && (
                      <div className="pb-4 pl-1 space-y-4">
                        {ALL_JEWELRY_MEGA.map((g) => (
                          <div key={g.title}>
                            <a
                              href={g.href}
                              onClick={() => setDrawer(false)}
                              className="block font-sans text-[11px] tracking-nav uppercase text-gold mb-1.5"
                            >
                              {g.title}
                            </a>
                            <ul className="space-y-1.5">
                              {g.items.map((it) => (
                                <li key={it.label}>
                                  <a
                                    href={it.href}
                                    onClick={() => setDrawer(false)}
                                    className="text-[14px] text-charcoal/80"
                                  >
                                    {it.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (ext) {
                return (
                  <a
                    key={n.label}
                    href={ext}
                    onClick={() => setDrawer(false)}
                    className={cls}
                  >
                    {n.label} <Icons.chevron size={16} stroke="#C4A87A" />
                  </a>
                );
              }
              return (
                <Link
                  key={n.label}
                  href={hrefFor(n.to, n.params)}
                  onClick={() => setDrawer(false)}
                  className={cls}
                >
                  {n.label} <Icons.chevron size={16} stroke="#C4A87A" />
                </Link>
              );
            })}

            {/* Tool items — collapse into the mobile menu (mirrors WordPress) */}
            {[
              { label: "Wishlist", href: "https://shop.mahidha.com/cart/", icon: "heart" },
              { label: "Compare", href: "https://shop.mahidha.com/compare/", icon: "compare" },
              {
                label: "Login / Register",
                href: "https://shop.mahidha.com/my-account/?action=register",
                icon: "account",
              },
            ].map((t) => {
              const I = Icons[t.icon];
              return (
                <a
                  key={t.label}
                  href={t.href}
                  onClick={() => setDrawer(false)}
                  className="py-3.5 border-b border-charcoal/5 font-sans text-[14px] tracking-nav uppercase text-charcoal flex items-center gap-3"
                >
                  <I size={18} /> {t.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
