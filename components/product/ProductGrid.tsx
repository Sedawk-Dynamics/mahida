import Reveal from "@/components/ui/Reveal";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types";

export default function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
      {items.map((p) => (
        <Reveal key={p.id}>
          <ProductCard p={p} />
        </Reveal>
      ))}
    </div>
  );
}
