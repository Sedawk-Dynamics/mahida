import SectionHeading from "@/components/ui/SectionHeading";
import EditCard from "@/components/product/EditCard";
import { EDITS } from "@/lib/data";
import { LIVE_SHOP } from "@/lib/links";

export default function StyleEditsHome() {
  return (
    <section className="bg-beige">
      <div className="max-w-wrap mx-auto px-5 py-20 md:py-28">
        <SectionHeading
          overline="Collections by mood"
          title="Style edits for every you"
          sub="Soft details. Strong presence. Curated to mix, styled to express."
        />
        <div className="mt-12 flex lg:grid lg:grid-cols-3 gap-5 overflow-x-auto no-bar -mx-5 px-5 lg:mx-0 lg:px-0 snap-x">
          {EDITS.map(([title, line, img]) => (
            <div key={title} className="snap-start shrink-0 w-[78%] sm:w-[48%] lg:w-auto">
              <EditCard title={title} line={line} img={img} tone="navy" href={LIVE_SHOP} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
