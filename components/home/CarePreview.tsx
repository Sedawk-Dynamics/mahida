import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { CARE_TIPS } from "@/lib/data";
import { hrefFor } from "@/lib/utils";

export default function CarePreview() {
  return (
    <section className="bg-beige">
      <div className="max-w-wrap mx-auto px-5 py-20 md:py-28">
        <SectionHeading
          overline="Care"
          title="Loved for longer"
          sub="A little care keeps your Mahidha pieces beautiful, timeless and made to be cherished."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-9">
          {CARE_TIPS.map(([ic, t]) => {
            const I = Icons[ic];
            return (
              <Reveal key={t} className="text-center flex flex-col items-center">
                <span className="w-14 h-14 rounded-full border border-gold/50 flex items-center justify-center text-gold">
                  <I size={22} stroke="#C4A87A" />
                </span>
                <p className="mt-3 font-sans text-[12px] tracking-nav uppercase text-charcoal leading-snug">
                  {t}
                </p>
              </Reveal>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link
            href={hrefFor("care")}
            className="ulink font-sans text-[13px] tracking-nav uppercase text-charcoal inline-flex items-center gap-2"
          >
            View detailed jewellery care guide <Icons.arrow size={16} stroke="#C4A87A" />
          </Link>
        </div>
      </div>
    </section>
  );
}
