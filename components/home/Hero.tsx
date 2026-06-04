"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import SmartImage from "@/components/ui/SmartImage";
import { F, ph } from "@/lib/images";
import { hrefFor } from "@/lib/utils";

const slides = [
  { img: F.heroLayers, alt: "Woman in navy wearing layered sterling silver and pearls", kicker: "Elevating everyday" },
  { img: F.lifeEvening, alt: "Woman in soft light wearing layered pearl necklaces", kicker: "Worn. Lived in. Loved." },
  { img: F.lifeCeleb, alt: "Woman wearing a pearl choker, celebrating", kicker: "Made for real life" },
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative h-[88vh] min-h-[560px] bg-navy overflow-hidden">
      {slides.map((s, idx) => (
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
      <div className="relative h-full max-w-wrap mx-auto px-5 flex flex-col justify-center items-start text-left">
        <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-5 reveal in">
          {slides[i].kicker}
        </p>
        <h1 className="font-serif text-ivory leading-[1.0] text-[32px] sm:text-[44px] md:text-[58px] max-w-3xl">
          Pearls reimagined for modern everyday wear.
        </h1>
        <p className="mt-6 text-ivory/80 text-[16px] md:text-[19px] leading-relaxed max-w-xl">
          Timeless pearls, sterling silver and thoughtful designs — made to move with your
          every day.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-5">
          <Button variant="light" href={hrefFor("list", { cat: "All Jewellery" })}>
            Explore Collections
          </Button>
          <Link
            href={hrefFor("list", { cat: "New Arrivals" })}
            className="ulink font-sans text-[13px] tracking-nav uppercase text-ivory"
          >
            New In
          </Link>
          <Link
            href={hrefFor("list", { cat: "All Jewellery" })}
            className="ulink font-sans text-[13px] tracking-nav uppercase text-ivory"
          >
            Bestsellers
          </Link>
        </div>
        {/* slide dots */}
        <div className="absolute bottom-7 left-5 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-[3px] rounded-full transition-all ${
                idx === i ? "w-8 bg-gold" : "w-4 bg-ivory/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
