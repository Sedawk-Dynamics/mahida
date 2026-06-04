import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Stars from "@/components/ui/Stars";
import SmartImage from "@/components/ui/SmartImage";
import { ph } from "@/lib/images";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-beige">
      <div className="max-w-wrap mx-auto px-5 py-20 md:py-28">
        <SectionHeading overline="What our clients say" title="Loved in real life" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(([quote, name, city]) => (
            <Reveal
              key={name}
              className="relative bg-pearl rounded-btn p-8 pt-10 text-center flex flex-col items-center"
            >
              <span
                className="absolute top-3 left-5 font-serif text-[54px] leading-none text-gold/30 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 ring-1 ring-gold/40">
                <SmartImage
                  src={ph(`${name} — customer portrait, woman in soft light`)}
                  alt={`${name} — customer portrait`}
                  fill
                  sizes="64px"
                  className="w-full h-full object-cover"
                />
              </div>
              <Stars value={5} />
              <p className="mt-5 font-serif text-[22px] leading-[1.4] text-charcoal">{quote}</p>
              <p className="mt-5 font-sans text-[12px] tracking-nav uppercase text-taupe">
                {name} · {city}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
