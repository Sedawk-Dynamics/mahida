import Accordion from "@/components/ui/Accordion";
import PageHero from "@/components/layout/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { FAQ_GROUPS } from "@/lib/data";
import { faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Frequently Asked Questions",
  description:
    "Everything you need to know about Mahidha — materials, care, orders and more.",
  path: "/faqs",
});

const anchor = (title: string) => `faq-${title.replace(/\W+/g, "-").toLowerCase()}`;

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <PageHero
        overline="Support"
        title="Frequently Asked Questions"
        sub="Everything you need to know about Mahidha — materials, care, orders and more."
        img="FAQ — pearl jewellery flatlay on ivory, editorial"
      />
      <section className="bg-pearl">
        <div className="max-w-wrap mx-auto px-5 py-16 md:py-24 grid lg:grid-cols-[230px_1fr] gap-12">
          {/* anchor nav */}
          <aside className="hidden lg:block sticky top-24 self-start">
            <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-4">Jump to</p>
            <ul className="space-y-2.5">
              {FAQ_GROUPS.map(([title]) => (
                <li key={title}>
                  <a
                    href={`#${anchor(title)}`}
                    className="ulink text-[14px] text-taupe hover:text-charcoal"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
          <div className="space-y-14">
            {FAQ_GROUPS.map(([title, qs]) => (
              <div key={title} id={anchor(title)} className="scroll-mt-28">
                <h2 className="font-serif text-[28px] md:text-[34px] text-charcoal mb-5">
                  {title}
                </h2>
                <Accordion items={qs.map(([q, a]) => ({ q, a }))} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
