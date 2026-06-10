import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import { F, ph } from "@/lib/images";
import { LIVE_SHOP } from "@/lib/links";

const cats: [string, string][] = [
  ["Necklace", F.neckRope],
  ["Earrings", F.earrDrop],
  ["Choker", F.heroPendant],
  ["Bracelets", F.braceSilver],
  ["Rings", F.ringDome],
  ["Accessories", F.flatCeleb],
];

export default function ShopByCategory() {
  return (
    <section className="bg-beige">
      <div className="max-w-wrap mx-auto px-5 py-20 md:py-24">
        <SectionHeading
          overline="Shop by category"
          title="Choose your signature sparkle"
          sub="Everyday elegance, reimagined."
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {cats.map(([style, img]) => (
            <a key={style} href={LIVE_SHOP} className="group text-center">
              <div className="relative aspect-square overflow-hidden rounded-full bg-pearl mx-auto max-w-[220px]">
                <SmartImage
                  src={ph(img)}
                  alt={`${style} — product category`}
                  fill
                  sizes="220px"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 font-serif text-[22px] text-charcoal">{style}</p>
              <span className="ulink font-sans text-[12px] tracking-nav uppercase text-gold">
                Shop {style}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
