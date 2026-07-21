import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Stars from "@/components/ui/Stars";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-beige">
      <div className="max-w-wrap mx-auto px-5 py-20 md:py-28">
        <SectionHeading overline="What our clients say" title="Loved in real life" />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(([quote, name]) => (
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
              <Stars value={5} />
              <p className="mt-5 font-serif text-[22px] leading-[1.4] text-charcoal">{quote}</p>
              <p className="mt-5 font-sans text-[12px] tracking-nav uppercase text-taupe">
                {name}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
