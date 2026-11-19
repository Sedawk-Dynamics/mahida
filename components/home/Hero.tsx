"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getImageProps } from "next/image";
import Button from "@/components/ui/Button";
import SmartImage from "@/components/ui/SmartImage";
import { Icons } from "@/components/ui/Icons";
import { F, ph } from "@/lib/images";

interface Slide {
  img: string;
  /* 4:5 portrait crop served below md — phones show the full frame instead
     of a zoomed band of the landscape shot */
  mobileImg?: string;
  alt: string;
  eyebrow: string;
  headline: string;
  sub: string;
  cta: string;
  href: string;
  /* object-position overrides; with a mobileImg present only the md: part
     matters (mobile renders the portrait crop at center) */
  pos?: string;
}

const SLIDES: Slide[] = [
  {
    "img": "/img/hero-pearl-layers.jpeg",
    "mobileImg": "/img/hero-pearl-layers-mobile.jpeg",
    "alt": "Model in an ivory saree wearing layered pastel pearl necklaces and pearl drop earrings",
    "eyebrow": "THE MAHIDHA SIGNATURE",
    "headline": "Pearls, with a personality of their own.",
    "sub": "Pearls with character. Elegance without occasion.",
    "cta": "DISCOVER THE SIGNATURE",
    "href": "https://shop.mahidha.com/product-category/gifting/signature-gifts/",
    "pos": "object-center"
  },
  {
    "img": "/img/hero-day-to-evening.jpeg",
    "mobileImg": "/img/hero-day-to-evening-mobile.jpeg",
    "alt": "A red pendant styled with a cream blazer by day and a burgundy dress by evening",
    "eyebrow": "THE EVERYDAY EDIT",
    "headline": "Made for every moment.",
    "sub": "Effortless elegance that moves with you, from everyday rituals to unplanned evenings.",
    "cta": "Explore Collection",
    "href": "https://shop.mahidha.com/product-category/gifting/everyday-icon/",
    "pos": "object-center"
  },
  {
    "img": "/img/hero-festive-pearls.jpeg",
    "mobileImg": "/img/hero-festive-pearls-mobile.jpeg",
    "alt": "Model in a yellow saree wearing a pearl and green stone choker among marigold flowers",
    "eyebrow": "THE WEDDING EDIT",
    "headline": "For moments that last a lifetime.",
    "sub": "Timeless adornments crafted to make every celebration unforgettable.",
    "cta": "Explore Collection",
    "href": "https://shop.mahidha.com/product-category/gifting/bridal-tribe/",
    "pos": "object-center"
  },
  {
    img: F.nizamPhoto,
    mobileImg: "/img/slider4.jpeg",
    alt: "Pearl and amethyst choker on a model in an ivory saree — Nizam heritage",
    eyebrow: "The Nizam Heritage",
    headline: "Inspired by the Nizam. Designed for now.",
    sub: "Hyderabad's timeless pearl legacy, reimagined for the modern woman.",
    cta: "Explore Heritage",
    href: "https://shop.mahidha.com/product-category/by-mood-edit/the-nizam-heritage/",
  },
  {
    img: "/img/KarigarhandPM.png",
    mobileImg: "/img/slider5.jpeg",
    alt: "A karigar's hands crafting a pearl bracelet",
    eyebrow: "Made by Hand",
    headline: "Born in the hands of skilled karigars.",
    sub: "Every piece is thoughtfully made, one at a time — never mass-produced.",
    cta: "Learn More",
    href: "https://www.mahidha.com/artisan-story",
  },
];

const DURATION = 6000;

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);
  const touchX = useRef<number | null>(null);

  const goTo = useCallback((n: number) => setI((n + SLIDES.length) % SLIDES.length), []);
  const next = useCallback(() => goTo(i + 1), [goTo, i]);
  const prev = useCallback(() => goTo(i - 1), [goTo, i]);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reduced.current) return;
    const t = setInterval(() => setI((x) => (x + 1) % SLIDES.length), DURATION);
    return () => clearInterval(t);
  }, [paused, i]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 45) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  const active = SLIDES[i];

  return (
    <section
      className="group relative bg-navy overflow-hidden md:aspect-video"
      aria-roledescription="carousel"
      aria-label="MAHIDHA editorial highlights"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Portrait framing on mobile; wide framing on desktop. */}
      <div className="relative w-full aspect-[4/5] md:absolute md:inset-0 md:aspect-auto">
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`slide absolute inset-0 overflow-hidden ${idx === i ? "active" : ""}`}
          aria-hidden={idx !== i}
        >
          {s.mobileImg ? (
            (() => {
              const common = { alt: s.alt, fill: true, sizes: "100vw", loading: idx === 0 ? "eager" as const : "lazy" as const, fetchPriority: idx === 0 ? "high" as const : "auto" as const };
              const { props: desktop } = getImageProps({ ...common, src: ph(s.img) });
              const { props: mobile } = getImageProps({
                ...common,
                src: s.mobileImg,
                className: `w-full h-full object-contain ${s.pos ?? "object-center"}`,
              });
              return (
                <picture>
                  <source media="(min-width: 768px)" srcSet={desktop.srcSet} sizes="100vw" />
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img {...mobile} />
                </picture>
              );
            })()
          ) : (
            <SmartImage
              src={ph(s.img)}
              alt={s.alt}
              fill
              sizes="100vw"
              priority={idx === 0}
              className={`w-full h-full object-contain ${s.pos ?? "object-center"}`}
            />
          )}
          {/* Shade the lower image for the mobile text overlay. */}
          <div className="absolute inset-0 bg-linear-to-t from-navy/95 via-navy/25 to-transparent md:from-navy/85 md:via-navy/35 md:to-navy/40" />
          <div className="absolute inset-0 hidden md:block bg-linear-to-r from-navy/70 via-navy/30 to-transparent" />
        </div>
      ))}

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute z-20 left-3 md:left-5 top-1/2 -translate-y-1/2 min-h-11 min-w-11 rounded-full bg-navy/40 p-2 text-ivory hover:text-gold transition-colors"
      >
        <span className="inline-block rotate-180">
          <Icons.arrow size={26} />
        </span>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute z-20 right-3 md:right-5 top-1/2 -translate-y-1/2 min-h-11 min-w-11 rounded-full bg-navy/40 p-2 text-ivory hover:text-gold transition-colors"
      >
        <Icons.arrow size={26} />
      </button>

      {/* Dot / line indicators */}
      <div className="absolute z-20 bottom-2 right-5 md:right-auto md:left-5 md:bottom-7 flex gap-2">
        {SLIDES.map((s, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to slide ${idx + 1}: ${s.eyebrow}`}
            aria-current={idx === i}
            onClick={() => goTo(idx)}
            className={`h-11 flex items-center rounded-full after:content-[''] after:h-[3px] after:w-full after:rounded-full ${
              idx === i ? "w-11 after:bg-gold" : "w-11 after:bg-ivory/40 hover:after:bg-ivory/70"
            }`}
          />
        ))}
      </div>
      </div>

      {/* Copy overlays the lower image on mobile and is centered on desktop. */}
      <div className="pointer-events-none absolute z-10 inset-x-0 bottom-0 px-5 pb-14 sm:px-10 text-left md:inset-0 md:px-10 lg:px-16 md:pb-0 flex flex-col justify-end md:justify-center items-start">
        <div key={i} className="reveal in max-w-lg">
          <p className="font-sans text-[10px] md:text-[11px] tracking-nav uppercase text-gold mb-2 md:mb-3 flex items-center gap-2.5">
            <span className="inline-block h-px w-7 bg-gold" />
            <Icons.sparkle size={13} stroke="#C4A87A" /> {active.eyebrow}
          </p>
          <h1 className="font-serif text-ivory leading-[1.1] text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px]">
            {active.headline}
          </h1>
          <p className="mt-3 md:mt-4 text-ivory/90 md:text-ivory/80 text-[13px] md:text-[16px] leading-relaxed max-w-sm">
            {active.sub}
          </p>
          <div className="pointer-events-auto mt-5 md:mt-7">
            <Button variant="light" href={active.href}>
              {active.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
