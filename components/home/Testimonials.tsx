"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Stars from "@/components/ui/Stars";
import SmartImage from "@/components/ui/SmartImage";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="reviews-section relative overflow-hidden" aria-label="Client reviews">
      <div className="max-w-wrap mx-auto px-5 py-12 md:py-16">
        <SectionHeading overline="What our clients say" title="Loved in real life" />
        <div className="mt-5 flex justify-center">
          <SmartImage
            src="/img/google-review-logo.png"
            alt="Google Reviews"
            width={3840}
            height={2160}
            sizes="160px"
            className="h-auto w-36 md:w-40 object-contain"
          />
        </div>
        <div className="reviews-window mt-3 overflow-x-auto py-5" tabIndex={0} aria-label="Customer reviews; hover or focus to pause, scroll to explore">
          <div className="reviews-track" style={{ animationPlayState: expanded !== null ? "paused" : undefined }}>
            {[0, 1].map((copy) => (
              <div key={copy} className="reviews-group" aria-hidden={copy === 1 ? true : undefined}>
                {TESTIMONIALS.map(([quote, name, img]) => (
                  <article key={name} className="review-card relative p-5 md:p-6 text-left flex flex-col items-start">
                    <span className="absolute top-5 right-7 font-serif text-[90px] leading-none text-gold/20 select-none" aria-hidden="true">&ldquo;</span>
                    <div className="relative rounded-full border border-gold/20 bg-white/60 px-3 py-2"><Stars value={5} size={16} /></div>
                    <p id={`review-${copy}-${name.replaceAll(" ", "-")}`} className={`mt-4 whitespace-pre-line font-serif text-[15px] leading-6 text-charcoal ${expanded === name ? "" : "line-clamp-4 h-24"}`}>{quote}</p>
                    <button type="button" tabIndex={copy === 1 ? -1 : 0} aria-expanded={expanded === name} aria-controls={`review-${copy}-${name.replaceAll(" ", "-")}`} onClick={() => setExpanded(expanded === name ? null : name)} className="min-h-11 text-xs text-taupe underline underline-offset-4 hover:text-charcoal">{expanded === name ? "Read less" : "Read more"}</button>
                    <div className="mt-auto flex w-full items-center gap-3 border-t border-gold/20 pt-4">
                    <div className="review-avatar relative h-10 w-10 shrink-0 overflow-hidden rounded-full flex items-center justify-center">
                      {img ? (
                        <SmartImage src={img} alt={`${name} wearing MAHIDHA jewellery`} fill sizes="40px" className="object-cover" />
                      ) : (
                        <span className="font-serif text-lg text-ivory" aria-hidden="true">{name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span>
                      )}
                    </div>
                    <div><p className="font-sans text-[13px] font-medium text-charcoal">{name}</p><p className="mt-1 text-[10px] tracking-[0.16em] uppercase text-taupe">The Mahidha community</p></div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
