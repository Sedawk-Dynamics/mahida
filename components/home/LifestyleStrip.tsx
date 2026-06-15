import { Icons } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import { ph } from "@/lib/images";
import { LIFESTYLE } from "@/lib/data";

export default function LifestyleStrip() {
  return (
    <section className="bg-pearl">
      <div className="max-w-wrap mx-auto px-5 py-20 md:py-28">
        <SectionHeading
          overline="For her special moments"
          title="Thoughtful gifts chosen to be worn, loved, and cherished."
          sub="Elegant pearl and silver jewellery for everyday wear, special occasions, and meaningful gifting."
        />
        <div className="mt-12 flex lg:grid lg:grid-cols-5 gap-5 overflow-x-auto no-bar -mx-5 px-5 lg:mx-0 lg:px-0 snap-x">
          {LIFESTYLE.map(([title, line, img, href]) => {
            return (
              <div key={title} className="snap-start shrink-0 w-[72%] sm:w-[44%] lg:w-auto">
                <a href={href} className="group block text-left w-full">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-btn bg-beige">
                    <SmartImage
                      src={ph(img)}
                      alt={`${title} — ${line}`}
                      fill
                      sizes="(max-width: 1024px) 72vw, 20vw"
                      className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-4">
                    <h3 className="font-serif text-[21px] md:text-[22px] text-charcoal leading-tight group-hover:text-taupe transition-colors">
                      {title}
                    </h3>
                    <p className="mt-1 text-taupe text-[13px] leading-snug">{line}</p>
                    <span className="mt-2.5 inline-flex items-center gap-1.5 font-sans text-[11px] tracking-nav uppercase text-gold">
                      Shop Now <Icons.arrow size={13} stroke="#C4A87A" />
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
