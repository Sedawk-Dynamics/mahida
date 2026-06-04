import type { Metadata } from "next";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import PageHero from "@/components/layout/PageHero";
import { CARE_TIPS } from "@/lib/data";
import { ph } from "@/lib/images";

export const metadata: Metadata = {
  title: "Jewellery Care",
  description:
    "A little care keeps your Mahidha pieces beautiful, timeless and made to be cherished for years.",
  alternates: { canonical: "/jewellery-care" },
};

export default function CarePage() {
  return (
    <>
      <PageHero
        overline="Care"
        title="Jewellery Care"
        sub="A little care keeps your Mahidha pieces beautiful, timeless and made to be cherished for years."
        img="CARE — soft styled pearls and silver on linen, golden light"
      />
      <section className="bg-pearl">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARE_TIPS.map(([ic, t, body], i) => {
              const I = Icons[ic];
              return (
                <Reveal key={t} className="bg-beige rounded-btn p-8">
                  <div className="flex items-center gap-4">
                    <span className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 ring-1 ring-gold/40">
                      <SmartImage
                        src={ph(`${t} — pearl jewellery detail flatlay`)}
                        alt=""
                        ariaHidden
                        fill
                        sizes="56px"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <span className="absolute inset-0 bg-navy/45 flex items-center justify-center text-ivory z-10">
                        <I size={20} stroke="#F8F5F0" />
                      </span>
                    </span>
                    <span className="font-serif text-[28px] text-gold/70">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-serif text-[23px] text-charcoal leading-tight">{t}</h3>
                  <p className="mt-2.5 text-taupe text-[16px] leading-[1.8]">{body}</p>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-14 text-center font-serif text-[26px] md:text-[34px] text-charcoal max-w-2xl mx-auto leading-snug">
            With the right care, your jewellery will stay as radiant as the day you first wore it.
          </p>
        </div>
      </section>
    </>
  );
}
