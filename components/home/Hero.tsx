"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import SmartImage from "@/components/ui/SmartImage";
import { Icons } from "@/components/ui/Icons";
import { F, ph } from "@/lib/images";
import { LIVE_SHOP } from "@/lib/links";

interface Slide {
  img: string;
  alt: string;
  eyebrow: string;
  headline: string;
  sub: string;
  cta: string;
  href: string;
}

const SLIDES: Slide[] = [
  {
    img: "/img/workday2.png",
    alt: "Pearl bracelet on a wrist beside a laptop and coffee — workwear",
    eyebrow: "The Work Edit",
    headline: "Pearls that mean business.",
    sub: "Minimal pearl layers made for ambitious mornings and everything after.",
    cta: "Shop Workwear",
    href: LIVE_SHOP,
  },
  {
    img: "/img/Slider2vacation2026.jpeg",
    alt: "Vacation mood with pearl jewellery in warm light",
    eyebrow: "The Vacation Edit",
    headline: "Pack light. Shine everywhere.",
    sub: "Lightweight pearls and silver, made to move with your escape.",
    cta: "Shop Vacation",
    href: LIVE_SHOP,
  },
  {
    img: F.coffeeCafe,
    alt: "Two women in a café wearing pearls, coffee in hand",
    eyebrow: "Everyday Moments",
    headline: "For slow mornings and fast lives.",
    sub: "Everyday pieces that turn a coffee run into a moment worth keeping.",
    cta: "Shop Everyday",
    href: LIVE_SHOP,
  },
  {
    img: F.nizamPhoto,
    alt: "Pearl and amethyst choker on a model in an ivory saree — Nizam heritage",
    eyebrow: "The Nizam Heritage",
    headline: "Inspired by the Nizam. Designed for now.",
    sub: "Hyderabad's timeless pearl legacy, reimagined for the modern woman.",
    cta: "Explore Heritage",
    href: LIVE_SHOP,
  },
  {
    img: "/img/KarigarhandPM.png",
    alt: "A karigar's hands crafting a pearl bracelet",
    eyebrow: "Made by Hand",
    headline: "Born in the hands of skilled karigars.",
    sub: "Every piece is thoughtfully made, one at a time — never mass-produced.",
    cta: "Learn More",
    href: LIVE_SHOP,
  },
];

const DURATION = 3000;

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
      className="group relative h-[92vh] min-h-[600px] md:min-h-[640px] bg-navy overflow-hidden"
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
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`slide absolute inset-0 overflow-hidden ${idx === i ? "active" : ""}`}
          aria-hidden={idx !== i}
        >
          <SmartImage
            src={ph(s.img)}
            alt={s.alt}
            fill
            sizes="100vw"
            priority={idx === 0}
            className={`w-full h-full object-cover ${idx === i ? "kenburns" : ""}`}
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/35 to-navy/40" />
          <div className="absolute inset-0 bg-linear-to-r from-navy/55 to-transparent" />
        </div>
      ))}

      {/* Content overlay (keyed so it re-fades per slide) */}
      <div className="relative h-full max-w-wrap mx-auto px-5 flex flex-col justify-center items-start text-left">
        <div key={i} className="reveal in max-w-2xl">
          <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-4 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-gold" />
            <Icons.sparkle size={14} stroke="#C4A87A" /> {active.eyebrow}
          </p>
          <h1 className="font-serif text-ivory leading-[0.95] text-[42px] sm:text-[56px] md:text-[72px] lg:text-[80px]">
            {active.headline}
          </h1>
          <p className="mt-6 text-ivory/80 text-[16px] md:text-[20px] leading-relaxed max-w-xl">
            {active.sub}
          </p>
          <div className="mt-9">
            <Button variant="light" href={active.href}>
              {active.cta}
            </Button>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 p-2 text-ivory/80 hover:text-gold opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
      >
        <span className="inline-block rotate-180">
          <Icons.arrow size={26} />
        </span>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 p-2 text-ivory/80 hover:text-gold opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
      >
        <Icons.arrow size={26} />
      </button>

      {/* Dot / line indicators */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((s, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to slide ${idx + 1}: ${s.eyebrow}`}
            aria-current={idx === i}
            onClick={() => goTo(idx)}
            className={`h-[3px] rounded-full transition-all ${
              idx === i ? "w-9 bg-gold" : "w-4 bg-ivory/40 hover:bg-ivory/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
