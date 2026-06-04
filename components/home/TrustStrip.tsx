import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { TRUST6 } from "@/lib/data";

export default function TrustStrip() {
  return (
    <section className="bg-pearl">
      <div className="max-w-wrap mx-auto px-5 py-20 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
          {TRUST6.map(([ic, t, s]) => {
            const I = Icons[ic];
            return (
              <Reveal key={t} className="text-center flex flex-col items-center">
                <span className="w-14 h-14 rounded-full border border-gold/50 flex items-center justify-center">
                  <I size={24} stroke="#C4A87A" />
                </span>
                <p className="mt-4 font-serif text-[20px] text-charcoal leading-tight">{t}</p>
                <p className="mt-1 text-taupe text-[13px] leading-snug">{s}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
