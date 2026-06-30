import SectionHeading from "@/components/ui/SectionHeading";
import EditCard from "@/components/product/EditCard";
import { EDITS } from "@/lib/data";

export default function StyleEditsHome() {
  return (
    <section className="bg-beige">
      <div className="max-w-wrap mx-auto px-5 py-20 md:py-28">
        <SectionHeading
          overline="Collections by mood"
          title="Style edits for every you"
          sub="Soft details. Strong presence. Curated to mix, styled to express."
        />
        <div className="mt-10 md:mt-12 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-5 lg:grid-cols-3">
          {EDITS.map(([title, line, img, href]) => (
            <div key={title}>
              <EditCard title={title} line={line} img={img} tone="navy" href={href} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
