import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Stars from "@/components/ui/Stars";
import SmartImage from "@/components/ui/SmartImage";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-beige">
      <div className="max-w-wrap mx-auto px-5 py-20 md:py-28">
        <SectionHeading overline="What our clients say" title="Loved in real life" />
        <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
          {TESTIMONIALS.map(([quote, name, img]) => (
            <Reveal
              key={name}
              className="relative h-full bg-pearl rounded-btn p-8 pt-10 text-center flex flex-col items-center"
            >
              <span
                className="absolute top-3 left-5 font-serif text-[54px] leading-none text-gold/30 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <Stars value={5} />
              {/* Real quotes run long, so the type is smaller than the old one-liners
                  and grows to push the customer image + name to a shared baseline. */}
              <p className="mt-5 grow font-serif text-[16px] md:text-[17px] leading-[1.8] text-charcoal">
                {quote}
              </p>
              <div className="mt-6 relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-beige">
                <SmartImage
                  src={img}
                  alt={`${name} wearing MAHIDHA jewellery`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 font-sans text-[12px] tracking-nav uppercase text-taupe">
                {name}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
