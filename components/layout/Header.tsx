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
          aria-label="MAHIDHA — home"
          className="lg:flex-none absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex items-center"
        >
          <SmartImage
            src={LOGO}
            alt="MAHIDHA — Elevated Everyday"
            width={704}
            height={264}
            priority
            className="block h-11 md:h-14 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => {
            const ext = n.external;
            const cls =
              "ulink font-sans text-[13px] tracking-nav uppercase text-charcoal hover:text-charcoal";
            if (n.label === "All Jewelry") {
              return (
                <div key={n.label} className="relative group/aj">
                  <a href={ext} className={`${cls} inline-flex items-center gap-1.5`}>
                    {n.label}
                    <span className="inline-block rotate-90 text-gold">
                      <Icons.chevron size={11} />
                    </span>
                  </a>
                  <div className="absolute left-0 top-full pt-4 hidden group-hover/aj:block group-focus-within/aj:block z-50">
                    <div className="bg-pearl shadow-2xl rounded-btn border border-charcoal/10 p-7 grid grid-cols-4 gap-8 w-[780px]">
                      {ALL_JEWELRY_MEGA.map((g) => (
                        <div key={g.title}>
                          <a
                            href={g.href}
                            className="ulink block font-sans text-[11px] tracking-nav uppercase text-gold mb-3"
                          >
                            {g.title}
                          </a>
                          <ul className="space-y-2.5">
                            {g.items.map((it) => (
                              <li key={it.label}>
                                <a
                                  href={it.href}
                                  className="ulink font-sans text-[14px] text-charcoal/80 hover:text-charcoal"
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

        {/* Right icons */}
        <div className="flex items-center gap-1 md:gap-2">
          <IconBtn label="Search" href="https://shop.mahidha.com/">
            <Icons.search size={20} />
          </IconBtn>
          <IconBtn label="Cart" href="https://shop.mahidha.com/cart/" badge={hydrated ? count : 0}>
            <Icons.bag size={20} />
          </IconBtn>
          <IconBtn label="Compare" href="https://shop.mahidha.com/compare/">
            <Icons.compare size={20} />
          </IconBtn>
          <IconBtn
            label="Wishlist"
            href="https://shop.mahidha.com/wishlist/"
            badge={hydrated ? wishlist.length : 0}
          >
            <Icons.heart size={20} />
          </IconBtn>
          <IconBtn label="Account" href="https://shop.mahidha.com/my-account/?action=register">
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
              className="h-10 w-auto"
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
              if (n.label === "All Jewelry") {
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
