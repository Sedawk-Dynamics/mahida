import { Icons } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import JsonLd from "@/components/ui/JsonLd";
import { F, ph } from "@/lib/images";
import { LIVE_SHOP } from "@/lib/links";
import { pageMeta, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const SEO = {
  title: "Artisan Story",
  description:
    "Born in the hands of skilled karigars. How every MAHIDHA piece travels from idea to refined adornment — designed with care, crafted with intention, inspected with honesty.",
  path: "/artisan-story",
  image: F.karigar,
};

export const metadata = pageMeta(SEO);

const stages: { n: string; title: string; body: string; img: string }[] = [
  {
    n: "01",
    title: "The Idea",
    img: F.editFeminist,
    body: "Every design begins long before it is visible as jewellery. It starts as an idea — a thought shaped with intention, a form imagined for a woman who values elegance, meaning, and wearability in equal measure. From that first spark, the process moves through careful planning, sketching, refinement, and meticulous handwork, with every stage guided by patience and precision.",
  },
  {
    n: "02",
    title: "The Making",
    img: F.karigar,
    body: "Once a design is finalised, the journey of each piece enters its first physical stage. The materials are selected with care, keeping in mind not only beauty but also longevity and comfort. The karigars then begin the detailed work of shaping the piece, balancing proportion, finish, and durability. Whether it is a delicate necklace, a refined pair of earrings, or a statement ring, every item is crafted with steady hands and an eye for detail. In these local workspaces, jewellery is not mass-produced — it is thoughtfully made, one piece at a time, with hours of labour hidden behind its effortless appearance.",
  },
  {
    n: "03",
    title: "The Finishing",
    img: F.flatSilver,
    body: "The next stage is where refinement begins to reveal itself. Each piece is checked, adjusted, and polished so that its final form feels seamless and complete. The finishing process is especially important, because true luxury is often found in what is not immediately seen: the smoothness of a clasp, the symmetry of a setting, the balance of a silhouette, the comfort of the wear. This is where MAHIDHA pays close attention to the details that matter most, ensuring that every creation is as practical and lasting as it is beautiful.",
  },
  {
    n: "04",
    title: "The Quality Promise",
    img: F.flatCeleb,
    body: "After finishing comes a thorough quality check. Every MAHIDHA piece is examined carefully for craftsmanship, strength, finish, and longevity. We believe jewellery should not only look exquisite on the day you receive it, but continue to serve you beautifully over time. That is why quality control is not a final formality for us — it is an essential promise. Each piece is reviewed to make sure it meets the standards we would expect for something meant to be cherished, worn often, and passed through the rhythms of everyday life.",
  },
  {
    n: "05",
    title: "Ready For You",
    img: F.gifting,
    body: "Before a piece is handed over to you, it is prepared with the same care that went into making it. It is cleaned, inspected once more, and presented in a way that reflects the thought behind its creation. This final stage is about honouring the journey it has taken — from concept to craft, from raw material to refined adornment. By the time it reaches you, the piece has already passed through many hands, many checks, and many quiet hours of labour, all dedicated to one purpose: to create something beautiful, enduring, and meaningful.",
  },
];

export default function ArtisanStoryPage() {
  return (
    <>
      <JsonLd
        data={[
          articleJsonLd(SEO),
          breadcrumbJsonLd([
            { label: "Home", href: "/" },
            { label: SEO.title, href: SEO.path },
          ]),
        ]}
      />
      {/* Hero band */}
      <section className="relative h-[62vh] min-h-[420px] bg-navy text-ivory overflow-hidden">
        <SmartImage
          src={ph(F.karigar)}
          alt="A karigar's hands crafting a pearl bracelet"
          fill
          sizes="100vw"
          priority
          className="absolute inset-0 w-full h-full object-cover opacity-[0.55]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-navy/40" />
        <div className="relative h-full max-w-wrap mx-auto px-5 flex flex-col justify-center items-center text-center">
          <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-4 flex items-center justify-center gap-2">
            <Icons.sparkle size={14} stroke="#C4A87A" /> Made by Hand
          </p>
          <h1 className="font-serif leading-[1.02] text-[40px] md:text-[64px] text-ivory">
            The Artisan Story
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] md:text-[18px] leading-[1.7] text-ivory/80">
            Born in the hands of skilled karigars — one thoughtful piece at a time.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-pearl">
        <div className="max-w-3xl mx-auto px-5 py-20 md:py-24 text-center">
          <p className="font-serif text-[22px] md:text-[28px] leading-[1.45] text-charcoal">
            MAHIDHA handpicked pearls and silver jewellery is born in the hands of skilled
            karigars in local kaarkhaanas, where tradition, craftsmanship, and quiet dedication
            come together to create pieces that feel both timeless and personal.
          </p>
        </div>
      </section>

      {/* Stages — alternating image / text */}
      {stages.map((s, idx) => {
        const reverse = idx % 2 === 1;
        return (
          <section key={s.n} className={idx % 2 === 0 ? "bg-pearl" : "bg-beige"}>
            <div className="max-w-wrap mx-auto px-5 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <Reveal className={reverse ? "lg:order-2" : "lg:order-1"}>
                <div className="relative w-full aspect-[4/3] rounded-btn overflow-hidden bg-beige duo">
                  <SmartImage
                    src={ph(s.img)}
                    alt={`${s.title} — MAHIDHA craftsmanship`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal className={reverse ? "lg:order-1" : "lg:order-2"}>
                <span className="font-serif text-[44px] md:text-[56px] text-gold/40 leading-none">
                  {s.n}
                </span>
                <span className="block mt-4 h-px w-12 bg-gold/60" />
                <h2 className="mt-5 font-serif text-[30px] md:text-[40px] leading-tight text-charcoal">
                  {s.title}
                </h2>
                <p className="mt-5 text-taupe text-[16px] md:text-[18px] leading-[1.85]">
                  {s.body}
                </p>
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* Closing brand promise */}
      <section className="bg-navy text-ivory">
        <div className="max-w-3xl mx-auto px-5 py-20 md:py-28 text-center">
          <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-6">
            Our Promise
          </p>
          <p className="text-[17px] md:text-[19px] leading-[1.9] text-ivory/85">
            At MAHIDHA, we want every piece to feel like more than jewellery. We want it to feel
            like a companion to your moments, a reflection of your style, and a lasting investment
            that grows with you over time. That is why we design with care, craft with intention,
            and inspect with honesty. When you receive a MAHIDHA piece, you are not just receiving
            an accessory — you are receiving the result of thoughtful design, skilled
            craftsmanship, and a deep commitment to quality that endures well beyond the moment of
            purchase.
          </p>
          <Button variant="light" className="mt-10" href={LIVE_SHOP}>
            Explore the Collection
          </Button>
        </div>
      </section>
    </>
  );
}
