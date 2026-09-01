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
    img: "/img/new2.jpeg",
    mobileImg: "/img/new.jpeg",
    alt: "Pearl jewellery with laddoos and diyas beside Ganesha and Lakshmi idols in warm festive light",
    eyebrow: "The Festive Edit",
    headline: "Celebrate every moment that shines.",
    sub: "Festive sterling silver keepsakes, crafted for the season of light and love.",
    cta: "Shop Collection",
    href: "https://shop.mahidha.com/product-category/gifting/for-her/",
    pos: "md:object-[center_55%]",
  },
  {
    img: "/img/workday2.png",
    mobileImg: "/img/slider2.jpeg",
    alt: "Pearl bracelet on a wrist beside a laptop and coffee — workwear",
    eyebrow: "The Work Edit",
    headline: "Pearls that mean business.",
    sub: "Minimal pearl layers made for ambitious mornings and everything after.",
    cta: "Shop Workwear",
    href: "https://shop.mahidha.com/product-category/everyday/",
  },
  {
    img: "/img/Slider2vacation2026.jpeg",
    mobileImg: "/img/slider3.jpeg",
    alt: "Vacation mood with pearl jewellery in warm light",
    eyebrow: "The Vacation Edit",
    headline: "Pack light. Shine everywhere.",
    sub: "Lightweight pearls and silver, made to move with your escape.",
    cta: "Shop Vacation",
    href: "https://shop.mahidha.com/product-category/all-jewellery/",
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
      className="group relative bg-navy overflow-hidden md:h-[92vh] md:min-h-[640px]"
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
      {/* Image stage — clean image on mobile (text sits below it); fills the hero on md+ */}
      <div className="relative w-full aspect-[4/5] max-h-[72vh] md:absolute md:inset-0 md:aspect-auto md:max-h-none">
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`slide absolute inset-0 overflow-hidden ${idx === i ? "active" : ""}`}
          aria-hidden={idx !== i}
        >
          {s.mobileImg ? (
            (() => {
              const common = { alt: s.alt, fill: true, sizes: "100vw", priority: idx === 0 };
              const { props: desktop } = getImageProps({ ...common, src: ph(s.img) });
              const { props: mobile } = getImageProps({
                ...common,
                src: s.mobileImg,
                className: `w-full h-full object-cover object-center ${s.pos ?? "md:object-[center_30%]"}`,
              });
              return (
                <picture>
                  <source media="(min-width: 768px)" srcSet={desktop.srcSet} sizes="100vw" />
                  {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
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
              className={`w-full h-full object-cover ${s.pos ?? "object-[center_30%]"}`}
            />
          )}
          {/* Readability gradients — same treatment on all viewports */}
          <div className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/35 to-navy/40" />
          <div className="absolute inset-0 bg-linear-to-r from-navy/70 via-navy/30 to-transparent" />
        </div>
      ))}

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
      <div className="absolute bottom-4 right-5 md:right-auto md:left-5 md:bottom-7 flex gap-2">
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
      </div>

      {/* Content — bottom-anchored over the image on mobile (clears the centred
          jewellery); centered overlay on md+ (keyed so it re-fades per slide) */}
      <div className="absolute inset-x-0 bottom-0 px-6 pb-9 sm:px-10 text-left md:relative md:inset-x-auto md:bottom-auto md:h-full md:px-10 lg:px-16 md:pb-0 flex flex-col justify-end md:justify-center items-start">
        <div key={i} className="reveal in max-w-lg">
          <p className="font-sans text-[11px] tracking-nav uppercase text-gold mb-3 flex items-center gap-2.5">
            <span className="inline-block h-px w-7 bg-gold" />
            <Icons.sparkle size={13} stroke="#C4A87A" /> {active.eyebrow}
          </p>
          <h1 className="font-serif text-ivory leading-[1.1] text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px]">
            {active.headline}
          </h1>
          <p className="mt-4 text-ivory/80 text-[14px] md:text-[16px] leading-relaxed max-w-sm">
            {active.sub}
          </p>
          <div className="mt-7">
            <Button variant="light" href={active.href}>
              {active.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
