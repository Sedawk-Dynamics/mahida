import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types";

interface ProductRailProps {
  title: string;
  overline?: string;
  items: Product[];
  sub?: string;
  badge?: string;
}

export default function ProductRail({ title, overline, items, sub, badge }: ProductRailProps) {
  return (
    <section className="bg-pearl">
      <div className="max-w-wrap mx-auto px-5 py-20 md:py-28">
        <SectionHeading overline={overline} title={title} sub={sub} />
        <div className="mt-10 md:mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {items.map((p) => (
            <div key={p.id}>
              <ProductCard p={p} badge={badge} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
