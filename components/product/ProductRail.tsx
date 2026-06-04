import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types";

interface ProductRailProps {
  title: string;
  overline?: string;
  items: Product[];
  sub?: string;
}

export default function ProductRail({ title, overline, items, sub }: ProductRailProps) {
  return (
    <section className="bg-pearl">
      <div className="max-w-wrap mx-auto px-5 py-20 md:py-28">
        <SectionHeading overline={overline} title={title} sub={sub} />
        <div className="mt-12 flex md:grid md:grid-cols-4 gap-x-6 gap-y-12 overflow-x-auto no-bar -mx-5 px-5 md:mx-0 md:px-0 snap-x">
          {items.map((p) => (
            <div key={p.id} className="snap-start shrink-0 w-[70%] sm:w-[44%] md:w-auto">
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
