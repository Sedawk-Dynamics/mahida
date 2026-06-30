import { Icons } from "@/components/ui/Icons";
import PageHero from "@/components/layout/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Size Guide",
  description: "A simple guide to finding your perfect fit at MAHIDHA.",
  path: "/size-guide",
});

const tables: [string, string[], string[][]][] = [
  ["Ring Sizes", ["Size", "Diameter (mm)", "Circumference (mm)"], [["6", "16.5", "51.9"], ["8", "18.1", "57.0"], ["10", "19.8", "62.1"], ["12", "21.4", "67.2"]]],
  ["Bracelet Sizes", ["Size", "Wrist (cm)", "Length (cm)"], [["S", "14–15", "16.5"], ["M", "15–16", "17.5"], ["L", "16–17", "18.5"]]],
  ["Necklace Lengths", ["Style", "Length (in)", "Sits at"], [["Choker", "14–16", "Base of neck"], ["Princess", "17–19", "Collarbone"], ["Matinee", "20–24", "Top of bust"]]],
];

export default function SizePage() {
  return (
    <>
      <PageHero
        overline="Customer Care"
        title="Size Guide"
        sub="A simple guide to finding your perfect fit. Placeholder values — replace with finalised measurements."
        img="SIZE GUIDE — bracelet and ring on wrist, soft daylight"
      />
      <section className="bg-pearl">
        <div className="max-w-3xl mx-auto px-5 py-20 md:py-24 space-y-14">
          {tables.map(([title, head, rows]) => (
            <div key={title}>
              <h2 className="font-serif text-[28px] md:text-[34px] text-charcoal mb-5 flex items-center gap-3">
                <Icons.ruler size={24} stroke="#C4A87A" /> {title}
              </h2>
              <div className="overflow-x-auto rounded-btn border border-charcoal/10">
                <table className="w-full text-left text-[15px]">
                  <thead className="bg-beige">
                    <tr>
                      {head.map((h) => (
                        <th
                          key={h}
                          className="font-sans text-[12px] tracking-nav uppercase text-charcoal px-5 py-3.5"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/10">
                    {rows.map((r, i) => (
                      <tr key={i} className="text-taupe">
                        {r.map((c, j) => (
                          <td key={j} className="px-5 py-3.5">
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          <div className="bg-beige rounded-btn p-8">
            <h3 className="font-serif text-[24px] text-charcoal">How to measure</h3>
            <p className="mt-2 text-taupe text-[16px] leading-[1.8]">
              Wrap a thin strip of paper around your finger or wrist, mark where it overlaps, then
              measure the length in millimetres against a ruler. For necklaces, measure an existing
              chain that sits where you&apos;d like, lying flat. When in doubt, size up — or write
              to us and we&apos;ll help.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
