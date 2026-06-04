"use client";

import { useState } from "react";
import { Icons } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import { ph } from "@/lib/images";
import { subscribe } from "@/lib/api-client";

const benefits: [string, string][] = [
  ["sparkle", "New Arrivals"],
  ["gift", "Exclusive Offers"],
  ["gem", "Style Inspiration"],
  ["clock", "Early Access"],
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    setError("");
    try {
      await subscribe(email, company);
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-navy text-ivory overflow-hidden">
      <SmartImage
        src={ph("NEWSLETTER — celestial bg, soft pearls in dark light")}
        alt=""
        ariaHidden
        fill
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-navy/70" />
      <Icons.sparkle size={26} stroke="#C4A87A" className="absolute top-12 left-[12%] opacity-40" />
      <Icons.moon size={22} stroke="#C4A87A" className="absolute bottom-16 right-[14%] opacity-40" />
      <Icons.star size={14} stroke="#C4A87A" className="absolute top-1/3 right-1/4 opacity-30" />
      <div className="relative max-w-wrap mx-auto px-5 py-20 md:py-28 text-center">
        <SectionHeading
          light
          overline="Community"
          title="Join the Mahidha world"
          sub="Be the first to know about new arrivals, styling tips and special offers."
        />
        <form
          className="mt-9 max-w-md mx-auto flex border border-ivory/25 rounded-btn overflow-hidden"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="hidden"
            aria-hidden="true"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            aria-label="Email address"
            className="flex-1 bg-transparent px-4 py-3.5 text-[15px] text-ivory placeholder:text-ivory/40 focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            aria-label="Subscribe"
            className="px-6 bg-ivory/10 hover:bg-gold hover:text-navy transition-colors disabled:opacity-60"
          >
            <Icons.arrow size={18} />
          </button>
        </form>
        {done && (
          <p className="mt-3 text-gold text-[13px] font-sans tracking-nav uppercase">
            Welcome to the Mahidha world ✦
          </p>
        )}
        {error && !done && <p className="mt-3 text-ivory/70 text-[13px] font-sans">{error}</p>}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-6 max-w-xl mx-auto">
          {benefits.map(([ic, t]) => {
            const I = Icons[ic];
            return (
              <div key={t} className="flex flex-col items-center gap-2">
                <I size={22} stroke="#C4A87A" />
                <span className="font-sans text-[12px] tracking-nav uppercase text-ivory/85">
                  {t}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
