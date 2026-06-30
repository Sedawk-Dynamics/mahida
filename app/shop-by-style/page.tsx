import PageHero from "@/components/layout/PageHero";
import EditCard from "@/components/product/EditCard";
import ProductRail from "@/components/product/ProductRail";
import Reveal from "@/components/ui/Reveal";
import { CATEGORY_INTRO, EDITS, PRODUCTS } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Shop by Style",
  description: CATEGORY_INTRO["Shop by Style"],
  path: "/shop-by-style",
});

export default function StylePage() {
  return (
    <>
      <PageHero
        overline="Shop by Style"
        title="Find your edit"
        sub={CATEGORY_INTRO["Shop by Style"]}
      />
      <section className="max-w-wrap mx-auto px-5 py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EDITS.map(([title, line, img, href]) => (
            <Reveal key={title}>
              <EditCard
                title={title}
                line={line}
                img={img}
                tone="navy"
                href={href}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </section>
      <ProductRail
        overline="Curated"
        title="Pieces to start your edit"
        sub="Curated to mix. Styled to express."
        items={PRODUCTS.slice(0, 4)}
      />
    </>
  );
}
