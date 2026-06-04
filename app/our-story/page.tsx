import type { Metadata } from "next";
import { Icons } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import PageHero from "@/components/layout/PageHero";
import { F, ph } from "@/lib/images";
import { hrefFor } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Jewellery designed for women who do it all. Sterling silver. Freshwater pearls. Elevated everyday. The story of two sisters behind MAHIDHA.",
  alternates: { canonical: "/our-story" },
};

const promise: [string, string, string][] = [
  ["shield", "925 Sterling Silver", "Hallmarked, durable and restorable."],
  ["drop", "Freshwater Pearls", "Real pearls, each one unique."],
  ["leaf", "Hypoallergenic", "Gentle on sensitive skin."],
  ["hand", "Handcrafted", "Finished by skilled artisans."],
  ["sparkle", "Everyday Wear", "Lightweight and effortless."],
];

export default function StoryPage() {
  return (
    <>
      <PageHero
        overline="Elevated Everyday"
        title="Our Story"
        sub="Jewellery designed for women who do it all. Sterling silver. Freshwater pearls. Elevated everyday."
        img="OUR STORY — two sisters, brand editorial portrait in soft light"
      />
      <section className="bg-pearl">
        <div className="max-w-3xl mx-auto px-5 py-20 md:py-28 space-y-6 text-charcoal text-[16px] md:text-[18px] leading-[1.85]">
          <p className="font-serif text-[24px] md:text-[30px] leading-[1.35] text-charcoal !mt-0">
            Mahidha was born from a simple question. Why did jewellery always feel like it
            belonged to a different version of us?
          </p>
          <p>
            The version dressed for weddings. The version attending celebrations. The version
            waiting for a special occasion. But what about the woman rushing to work with coffee
            in one hand and her laptop in the other? The woman taking conference calls, school
            runs, flights, weekend brunches and everything in between? She deserved beautiful
            jewellery too. And that is where Mahidha began.
          </p>
          <p className="font-serif text-[20px] md:text-[24px] text-charcoal pt-4">
            Two sisters. Two countries. One dream.
          </p>
          <p>
            Mahidha was founded by sisters Mahima and Medha. For years, we searched for jewellery
            that felt elegant, timeless and easy to wear every day — pieces that could move
            effortlessly from a morning meeting to dinner with friends, that felt luxurious
            without feeling reserved. What we found instead was a market divided: fast fashion
            that didn&apos;t last, or fine jewellery too precious to wear every day. We knew there
            had to be something in between. So we decided to create it ourselves.
          </p>
          <p className="font-serif text-[20px] md:text-[24px] text-charcoal pt-4">
            Jewellery for real life.
          </p>
          <p>
            We believe jewellery should not spend most of its life inside a box. It should travel
            with you. It should collect memories. It should become part of your story — the
            necklace you wear on your first day at a new job, the bracelet you take on a holiday
            you&apos;ll never forget, the earrings you reach for without thinking because they
            simply feel like you. These are the pieces we create. Not for occasions. For life.
          </p>
        </div>
      </section>

      {/* Editorial image band */}
      <section className="relative h-[42vh] min-h-[320px] overflow-hidden duo">
        <SmartImage
          src={ph(F.flatTrip)}
          alt="MAHIDHA collection — handcrafted pearls and sterling silver"
          fill
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/30" />
        <p className="absolute inset-0 flex items-center justify-center text-center px-6 font-serif text-ivory text-[26px] md:text-[40px] leading-tight drop-shadow">
          From our hands to yours — every piece carries a little part of the journey.
        </p>
      </section>

      {/* Why Pearls */}
      <section className="bg-pearl">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-4">
              Why pearls
            </p>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-tight text-charcoal">
              No two pearls are ever the same.
            </h2>
            <p className="mt-5 text-taupe text-[16px] md:text-[18px] leading-[1.85]">
              Each pearl carries its own shape, texture and character. They remind us of women —
              unique, beautiful in their individuality, strong. For centuries pearls have
              symbolised grace and sophistication. We wanted to reinterpret them for the modern
              woman: lighter, more versatile, more effortless. Pearls that work with linen shirts,
              oversized blazers, cotton kurtas and evening dresses alike. Pearls that belong in
              everyday life.
            </p>
          </Reveal>
          <Reveal>
            <div className="relative w-full aspect-[8/7] rounded-btn overflow-hidden">
              <SmartImage
                src={ph("WHY PEARLS — pearl macro detail, soft natural light")}
                alt="Why pearls — pearl detail in soft natural light"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Sterling Silver */}
      <section className="bg-beige">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="relative w-full aspect-[8/7] rounded-btn overflow-hidden">
              <SmartImage
                src={ph("WHY SILVER — sterling silver layering flatlay on marble")}
                alt="Why sterling silver — silver layering on marble"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-4">
              Why sterling silver
            </p>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-tight text-charcoal">
              Everyday jewellery, made to last.
            </h2>
            <p className="mt-5 text-taupe text-[16px] md:text-[18px] leading-[1.85]">
              Every Mahidha piece is crafted using 925 sterling silver and thoughtfully selected
              freshwater pearls and natural gemstones. Sterling silver is durable, timeless,
              hypoallergenic and can be polished and restored for years of wear. It lets us create
              jewellery that feels luxurious without compromising practicality — designed to stay
              with you, not be replaced by the next trend.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Crafted by Artisans */}
      <section className="bg-pearl">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-28 text-center max-w-3xl">
          <Reveal>
            <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-4">
              Crafted by artisans
            </p>
            <h2 className="font-serif text-[30px] md:text-[44px] leading-tight text-charcoal mx-auto max-w-2xl">
              Crafted by hands. Designed with heart.
            </h2>
            <p className="mt-6 text-taupe text-[16px] md:text-[18px] leading-[1.85] mx-auto max-w-2xl">
              Behind every Mahidha piece are skilled artisans who bring generations of
              craftsmanship to life. Their hands shape, polish, string and finish every detail
              with care. We believe luxury is not defined by logos — it is defined by
              craftsmanship, by the time taken to create something meaningful, and by the people
              who make it. Every piece carries a part of their story, and ours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-navy text-ivory">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-24 grid md:grid-cols-2 gap-12">
          <Reveal>
            <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-4">Mission</p>
            <p className="font-serif text-[22px] md:text-[26px] leading-[1.4] text-ivory">
              To celebrate everyday life through timeless design, meaningful craftsmanship and
              thoughtful experiences.
            </p>
          </Reveal>
          <Reveal>
            <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-4">Vision</p>
            <p className="font-serif text-[22px] md:text-[26px] leading-[1.4] text-ivory">
              To become a globally loved lifestyle brand that inspires people to live beautifully,
              intentionally and confidently every day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Promise */}
      <section className="bg-pearl">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-24">
          <SectionHeading overline="Our Promise" title="What every piece is made of" />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10">
            {promise.map(([ic, t, s]) => {
              const I = Icons[ic];
              return (
                <Reveal key={t} className="text-center flex flex-col items-center">
                  <span className="w-14 h-14 rounded-full border border-gold/50 flex items-center justify-center">
                    <I size={24} stroke="#C4A87A" />
                  </span>
                  <p className="mt-4 font-serif text-[20px] text-charcoal leading-tight">{t}</p>
                  <p className="mt-1.5 text-taupe text-[13px] leading-relaxed">{s}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why women choose */}
      <section className="bg-beige">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-28">
          <SectionHeading
            overline="Why women choose MAHIDHA"
            title="Pearls for every version of you"
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {(
              [
                ["Reimagining pearls", "We take a heritage material and make it feel modern, wearable and entirely now."],
                ["Wearable luxury", "Lightweight, versatile pieces designed to move from desk to dinner to celebration."],
                ["Craftsmanship", "Handcrafted by skilled karigars with real pearls and hallmarked sterling silver."],
              ] as [string, string][]
            ).map(([t, s]) => (
              <Reveal key={t} className="bg-pearl rounded-btn p-8">
                <h3 className="font-serif text-[24px] text-charcoal">{t}</h3>
                <p className="mt-3 text-taupe text-[16px] leading-[1.8]">{s}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-pearl">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-24">
          <SectionHeading
            overline="Meet the Founders"
            title="The sisters behind Mahidha"
            sub="Two sisters. Two countries. One dream."
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {(
              [
                ["Mahima", "Co-Founder & Head of Operations", "FOUNDER — Mahima portrait"],
                ["Medha", "Co-Founder & Head of Product & Digital", "FOUNDER — Medha portrait"],
              ] as [string, string, string][]
            ).map(([name, role, img]) => (
              <Reveal key={name} className="text-center">
                <div className="relative aspect-[4/5] overflow-hidden rounded-btn bg-beige">
                  <SmartImage
                    src={ph(img)}
                    alt={img}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-5 font-serif text-[26px] text-charcoal">{name}</p>
                <p className="font-sans text-[12px] tracking-nav uppercase text-gold mt-1">
                  {role}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-center">
        <div className="max-w-wrap mx-auto px-5 py-24">
          <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-5">
            Welcome to Mahidha
          </p>
          <h2 className="font-serif text-[30px] md:text-[48px] leading-[1.15] text-ivory max-w-3xl mx-auto">
            For the meetings, the memories, the milestones and everything in between.
          </h2>
          <Button variant="light" className="mt-9" href={hrefFor("list", { cat: "All Jewellery" })}>
            Shop the Collection
          </Button>
        </div>
      </section>
    </>
  );
}
