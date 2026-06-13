import type { Metadata } from "next";
import { Icons } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import PageHero from "@/components/layout/PageHero";
import { F, ph } from "@/lib/images";
import { LIVE_SHOP } from "@/lib/links";
import { hrefFor } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Know Your Pearls",
  description:
    "The timeless legacy of pearls — their types and origins, their history from the Nizams to today, why they endure, and how to care for them. A MAHIDHA guide.",
  alternates: { canonical: "/know-your-pearls" },
};

const TYPES: { name: string; img: string; body: string }[] = [
  {
    name: "Natural Pearls",
    img: F.pearlVintage,
    body: "The rarest of all — formed entirely without human intervention when an irritant enters a mollusc. Historically found in the Persian Gulf, Red Sea, India and Sri Lanka, and once reserved for royalty.",
  },
  {
    name: "Cultured Pearls",
    img: F.flatGold,
    body: "Formed with gentle human assistance, where a nucleus begins the pearl-forming process. Today they are produced in Japan, China, Australia, Indonesia and French Polynesia.",
  },
  {
    name: "Freshwater Pearls",
    img: F.neckRope,
    body: "Grown in lakes and rivers, most famously in China. Loved for their soft lustre, broad range of shapes and versatility — ideal for everyday and modern designs.",
  },
  {
    name: "Akoya Pearls",
    img: F.flatCeleb,
    body: "Classic saltwater pearls, traditionally cultivated in Japan. Known for their round shape, brilliant reflection and refined white or cream tones — timeless and formal.",
  },
  {
    name: "South Sea Pearls",
    img: F.neckLariat,
    body: "Among the largest and most luxurious in the world, cultivated mainly in Australia, the Philippines and Indonesia. Their white, silver and golden hues feel rich and elevated.",
  },
  {
    name: "Tahitian Pearls",
    img: F.flatCelest,
    body: "Produced in French Polynesia and famous for dramatic darker colours — grey, green, peacock and black. Bold, modern and especially distinctive.",
  },
];

const CARE: string[] = [
  "Wear pearls after applying perfume, lotion and makeup — never before.",
  "Avoid contact with harsh chemicals, cleaning agents and excessive moisture.",
  "Wipe them gently with a soft cloth after wearing.",
  "Store them separately from harder jewellery to prevent scratches.",
  "Keep them in a soft pouch or lined box, not airtight plastic for long periods.",
  "Avoid rough handling, high heat and frequent abrasion.",
  "If strung on thread, have the string checked or restrung periodically.",
];

export default function KnowYourPearlsPage() {
  return (
    <>
      <PageHero
        overline="Know Your Pearls"
        title="The Timeless Legacy of Pearls"
        sub="Long before diamonds became symbols of luxury, there were pearls."
        img={F.flatGold}
      />

      {/* Intro */}
      <section className="bg-pearl">
        <div className="max-w-3xl mx-auto px-5 py-20 md:py-24 space-y-6 text-charcoal text-[16px] md:text-[18px] leading-[1.85]">
          <p>
            Pearls have held a special place in jewellery for centuries because they are unlike
            any other gemstone. Formed inside living molluscs, they carry a natural softness, glow
            and elegance that make them feel both deeply traditional and eternally modern. Their
            beauty has crossed cultures, eras and fashion movements, which is why they remain one
            of the most loved materials in fine jewellery today.
          </p>
          <p className="font-serif text-[24px] md:text-[30px] leading-[1.4] text-charcoal">
            No two pearls are ever exactly alike.
          </p>
        </div>
      </section>

      {/* Types of pearls */}
      <section className="bg-beige">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-28">
          <SectionHeading
            overline="A field guide"
            title="Types of pearls and their origin"
            sub="Pearls are grouped into several major types, each with its own origin and character."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TYPES.map((t) => (
              <Reveal key={t.name} className="bg-pearl rounded-btn overflow-hidden">
                <div className="relative aspect-[4/3] bg-beige duo">
                  <SmartImage
                    src={ph(t.img)}
                    alt={`${t.name} — pearl type`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-[24px] text-charcoal leading-tight">{t.name}</h3>
                  <p className="mt-3 text-taupe text-[15px] leading-[1.8]">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pearl legacy through history */}
      <section className="bg-pearl">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-4">
              Pearl legacy through history
            </p>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-tight text-charcoal">
              The City of Pearls
            </h2>
            <p className="mt-5 text-taupe text-[16px] md:text-[18px] leading-[1.85]">
              Pearls have adorned jewellery for thousands of years. Ancient civilizations — Egypt,
              Rome, Persia, China and India — prized them for their beauty and symbolism, linking
              them to purity, power, wealth and divine favour. European aristocrats and British
              royalty were enchanted by pearls through the Victorian and Edwardian eras, layering
              strands worn by queens, duchesses and noblewomen.
            </p>
            <p className="mt-4 text-taupe text-[16px] md:text-[18px] leading-[1.85]">
              Known historically as the &ldquo;City of Pearls,&rdquo; Hyderabad became one of the
              world&apos;s most important trading centres for fine pearls during the reign of the
              Nizams. Their collections became legendary — layered necklaces, satladas, chokers and
              regal strands that became hallmarks of royal elegance. Today, that heritage continues
              to inspire Mahidha.
            </p>
          </Reveal>
          <Reveal>
            <div className="relative w-full aspect-[4/5] rounded-btn overflow-hidden bg-beige duo">
              <SmartImage
                src="/img/charminar2.png"
                alt="Charminar — Hyderabad, the City of Pearls"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why pearls remain popular */}
      <section className="bg-beige">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="relative w-full aspect-[4/5] rounded-btn overflow-hidden bg-pearl duo">
              <SmartImage
                src={ph(F.heroBlazer)}
                alt="Pearls styled for the modern woman"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-4">
              Why pearls remain popular
            </p>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-tight text-charcoal">
              Grace and simplicity, in equal measure.
            </h2>
            <p className="mt-5 text-taupe text-[16px] md:text-[18px] leading-[1.85]">
              Pearls endure because they are both versatile and emotionally meaningful — beautiful
              with traditional clothing, contemporary fashion, bridal wear and everyday outfits.
              From old Hollywood stars to modern red-carpet icons, pearls have long expressed
              refinement, quiet confidence and timeless taste.
            </p>
            <p className="mt-4 text-taupe text-[16px] md:text-[18px] leading-[1.85]">
              And they feel personal. No two pearls are exactly alike, and that slight variation
              gives each piece a human, organic charm — elegant without being loud, luxurious
              without being inaccessible, classic without ever feeling outdated.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What makes pearls unique */}
      <section className="bg-pearl">
        <div className="max-w-3xl mx-auto px-5 py-20 md:py-24 space-y-6 text-charcoal text-[16px] md:text-[18px] leading-[1.85]">
          <p className="font-sans text-[12px] tracking-nav uppercase text-gold">
            What makes pearls unique
          </p>
          <h2 className="font-serif text-[30px] md:text-[44px] leading-tight text-charcoal !mt-3">
            Made by living organisms — not mined from the earth.
          </h2>
          <p>
            This gives pearls a softer, more organic identity. Their surface has a gentle glow
            rather than sharp brilliance, which is why they are described as luminous instead of
            flashy. They pair beautifully with silver, which adds a cooler, cleaner, contemporary
            edge — elegant yet light, polished yet effortless, and especially suited to daily wear.
          </p>
          <p>
            Pearls are often passed down through families because they are deeply personal. Unlike
            trends that come and go, pearls carry stories — worn during celebrations, milestones,
            weddings and everyday moments that become memories. With proper care, they remain
            beautiful for decades, even generations.
          </p>
          <p className="font-serif text-[22px] md:text-[26px] leading-[1.4] text-charcoal">
            The soft glow of a pearl does not fade with time. Instead, it gathers meaning.
          </p>
        </div>
      </section>

      {/* How to care for pearls */}
      <section className="bg-beige">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-24">
          <SectionHeading
            overline="Care"
            title="How to care for your pearls"
            sub="Pearls are beautiful but delicate — a little thoughtful care preserves their lustre for years."
          />
          <ul className="mt-12 max-w-3xl mx-auto grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {CARE.map((c) => (
              <li key={c} className="flex items-start gap-3 text-taupe text-[16px] leading-[1.7]">
                <span className="mt-1 shrink-0 text-gold">
                  <Icons.sparkle size={16} stroke="#C4A87A" />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing brand band */}
      <section className="bg-navy text-ivory">
        <div className="max-w-3xl mx-auto px-5 py-20 md:py-28 text-center">
          <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-6">
            Elevated by Mahidha
          </p>
          <p className="text-[17px] md:text-[19px] leading-[1.9] text-ivory/85">
            With Mahidha, pearls and silver are not just preserved — they are elevated. We bring
            together the grace of heritage and the clarity of modern design, because we know that
            the most lasting beauty is the kind that moves with the times.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button variant="light" href={LIVE_SHOP}>
              Explore the Collection
            </Button>
            <Button variant="ghostLight" href={hrefFor("story")}>
              Our Story
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
