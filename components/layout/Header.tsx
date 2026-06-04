"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { Icons } from "@/components/ui/Icons";
import SmartImage from "@/components/ui/SmartImage";
import { NAV } from "@/lib/data";
import { LOGO } from "@/lib/images";
import { hrefFor } from "@/lib/utils";
import { useCart, useHydrated, useStore } from "@/lib/store";

function IconBtn({
  label,
  onClick,
  href,
  children,
  badge,
}: {
  label: string;
  onClick?: () => void;
  href?: string;
  children: ReactNode;
  badge?: number;
}) {
  const inner = (
    <>
      {children}
      {badge !== undefined && badge > 0 && (
        <span className="absolute -top-1 -right-1 bg-navy text-pearl text-[10px] font-sans rounded-full w-[18px] h-[18px] flex items-center justify-center">
          {badge}
        </span>
      )}
    </>
  );
  const cls =
    "relative p-1.5 text-charcoal hover:text-gold transition-colors inline-flex";
  if (href) {
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
  const setCartOpen = useStore((s) => s.setCartOpen);
  const wishlist = useStore((s) => s.wishlist);
  const { count } = useCart();
  const hydrated = useHydrated();
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);

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
          ? "bg-pearl/95 backdrop-blur shadow-[0_1px_0_rgba(43,43,43,0.06)]"
          : "bg-pearl"
      }`}
    >
      <div className="max-w-wrap mx-auto px-5 flex items-center justify-between h-16 md:h-20">
        {/* Left: hamburger (mobile) */}
        <button
          className="lg:hidden p-1.5 text-charcoal"
          aria-label="Open menu"
          onClick={() => setDrawer(true)}
        >
          <Icons.menu />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="lg:flex-none absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
        >
          <SmartImage
            src={LOGO}
            alt="MAHIDHA — Elevated Everyday"
            width={2048}
            height={804}
            priority
            className="h-11 md:h-14 w-auto"
            style={{ filter: "brightness(0.62) saturate(1.5)" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={hrefFor(n.to, n.params)}
              className={`ulink font-sans text-[13px] tracking-nav uppercase text-charcoal hover:text-charcoal ${
                isActive(n.to, n.params) ? "active" : ""
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-1 md:gap-2">
          <IconBtn label="Search" href={hrefFor("list", { cat: "All Jewellery" })}>
            <Icons.search size={20} />
          </IconBtn>
          <IconBtn label="Account" href={hrefFor("contact")}>
            <Icons.account size={20} />
          </IconBtn>
          <IconBtn
            label="Wishlist"
            href={hrefFor("list", { cat: "All Jewellery" })}
            badge={hydrated ? wishlist.length : 0}
          >
            <Icons.heart size={20} />
          </IconBtn>
          <IconBtn label="Cart" onClick={() => setCartOpen(true)} badge={hydrated ? count : 0}>
            <Icons.bag size={20} />
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
              width={2048}
              height={804}
              className="h-10 w-auto"
              style={{ filter: "brightness(0.62) saturate(1.5)" }}
            />
            <button aria-label="Close menu" onClick={() => setDrawer(false)} className="p-1.5">
              <Icons.close />
            </button>
          </div>
          <nav className="px-5 py-6 flex flex-col">
            {NAV.map((n) => (
              <Link
                key={n.label}
                href={hrefFor(n.to, n.params)}
                onClick={() => setDrawer(false)}
                className="py-3.5 border-b border-charcoal/5 font-sans text-[14px] tracking-nav uppercase text-charcoal flex items-center justify-between"
              >
                {n.label} <Icons.chevron size={16} stroke="#C4A87A" />
              </Link>
            ))}
            <Link
              href={hrefFor("gift")}
              onClick={() => setDrawer(false)}
              className="py-3.5 border-b border-charcoal/5 font-sans text-[14px] tracking-nav uppercase text-charcoal"
            >
              Gift Guide
            </Link>
            <Link
              href={hrefFor("contact")}
              onClick={() => setDrawer(false)}
              className="py-3.5 font-sans text-[14px] tracking-nav uppercase text-charcoal"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
