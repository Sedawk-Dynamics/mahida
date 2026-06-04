import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import { ph } from "@/lib/images";
import { hrefFor } from "@/lib/utils";

const cats: [string, string][] = [
  ["Necklaces", "CATEGORY — necklace"],
  ["Earrings", "CATEGORY — earrings"],
  ["Rings", "CATEGORY — ring"],
  ["Bracelets", "CATEGORY — bracelet"],
];

export default function ShopByCategory() {
  return (
    <section className="bg-beige">
      <div className="max-w-wrap mx-auto px-5 py-20 md:py-24">
        <SectionHeading
          overline="Shop by category"
          title="Find your everyday icon"
          sub="Everyday elegance, reimagined."
        />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {cats.map(([style, img]) => (
            <Link
              key={style}
              href={hrefFor("list", { cat: "All Jewellery", style })}
              className="group text-center"
            >
              <div className="relative aspect-square overflow-hidden rounded-full bg-pearl mx-auto max-w-[220px]">
                <SmartImage
                  src={ph(img)}
                  alt={`${img} — product category`}
                  fill
                  sizes="220px"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 font-serif text-[22px] text-charcoal">{style}</p>
              <span className="ulink font-sans text-[12px] tracking-nav uppercase text-gold">
                Shop {style}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
