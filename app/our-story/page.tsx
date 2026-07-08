import { Icons } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import PageHero from "@/components/layout/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { hrefFor } from "@/lib/utils";
import { pageMeta, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const SEO = {
  title: "Our Story",
  description:
    "Mahidha did not begin with a business plan — it began with a childhood. The story of two sisters, Mahima and Medha, and jewellery designed to be worn, loved and lived in every single day.",
  path: "/our-story",
  image: "/img/twosis.jpeg",
};

export const metadata = pageMeta(SEO);

/* Alternating image + text chapters (in narrative order). */
const CHAPTERS: { title: string; img: string; body: string[] }[] = [
  {
    title: "Where It All Began",
    img: "/img/mahimaandmahidha.jpeg",
    body: [
      "We are Mahima and Medha. Born and raised in Ghaziabad, our childhood was filled with the simple joys only sisters truly understand — borrowing each other's clothes, arguing over little things, laughing moments later, and always finding comfort in each other's company.",
      "One place we loved more than anywhere else was our mother's wardrobe. We would drape her sarees around ourselves, layer necklaces that almost reached our waists, stack bangles until they slipped off our tiny wrists, and stand in front of the mirror imagining the women we would one day become.",
      "Those afternoons felt magical — not because the jewellery was valuable, but because of how it made us feel. Graceful. Confident. Grown up.",
      "Looking back, those childhood moments taught us that jewellery has never been about decoration. It is about emotion. It carries memories, celebrates milestones, reflects confidence, and quietly becomes part of a woman's story.",
    ],
  },
  {
    title: "The Woman Who Inspired It All",
    img: "/img/inspired.jpeg",
    body: [
      "Our mother probably never imagined she would one day inspire a jewellery brand. Yet, in many ways, Mahidha began with her.",
      "Every morning, we watched her choose jewellery that reflected who she was — elegant, understated and effortless. Pieces she could wear while teaching, moving through a busy day, and returning home without ever feeling overdressed.",
      "Finding those pieces, however, was never easy. What she found was often either too traditional for everyday wear or too casual to feel truly special. She was looking for something timeless, refined, and versatile enough to become part of her everyday life.",
      "Years later, as we stepped into our own careers and busy routines, we found ourselves searching for exactly the same thing. That simple question became the beginning of Mahidha.",
    ],
  },
  {
    title: "Growing Up Together",
    img: "/img/growup.jpeg",
    body: [
      "As children, we believed growing up meant becoming completely different people. Life had other plans. Over the years, we followed different paths, built our own careers, and discovered our individual strengths.",
      "While our personalities evolved, the values we were raised with never changed. Kindness, curiosity, family, and an appreciation for beauty that is quiet rather than loud have always been at the heart of who we are.",
      "Those same values became the foundation of Mahidha. They influence every decision we make and every piece we bring to life. We believe true elegance doesn't seek attention — it is timeless, effortless and deeply personal, just like the women we design for.",
    ],
  },
  {
    title: "Two Sisters. Two Countries. One Dream.",
    img: "/img/twosis.jpeg",
    body: [
      "Life eventually took us in different directions. Mahima built her home in Hyderabad, while Medha began a new chapter in Ireland. Today, thousands of kilometres separate us — different time zones, different seasons, two very different worlds. Yet our bond has remained exactly the same.",
      "The conversations never stopped. What began as late-night phone calls soon became discussions about ideas, creativity, craftsmanship and the kind of jewellery we wished existed. We exchanged inspiration across continents, shared sketches over video calls, and celebrated every small milestone together.",
      "Building Mahidha from two different countries was never the easiest path, but it became one of our greatest strengths. Distance taught us that relationships don't grow weaker when they stretch across continents — they become more intentional. Two sisters, two countries, one dream.",
    ],
  },
  {
    title: "A Promise Between Sisters",
    img: "/img/peomice.jpeg",
    body: [
      "Some promises never need to be spoken more than once. Ours has always been simple: no matter where life takes us, we will always make time for one trip that belongs only to us — just two sisters exploring a new place, sharing long conversations, and creating memories that stay with us long after the journey ends.",
      "Those trips have become our tradition. It is often during these journeys that our best ideas are born — wandering through local markets, admiring architecture, discovering artisanal craftsmanship, or simply watching people embrace beauty in their own unique ways.",
      "These experiences have quietly found their way into Mahidha. They remind us that jewellery is far more than an accessory — it travels with you through life's most meaningful moments, becoming part of the memories you create.",
    ],
  },
  {
    title: "Jewellery That Travels With You",
    img: "/img/jewelsthattravel.jpeg",
    body: [
      "The jewellery we remember most is rarely the most expensive. More often, it is the piece that quietly becomes part of our everyday lives — the necklace worn on your first international trip, the bracelet gifted before your first day at a new job, the earrings that find their way into every holiday suitcase because they go with everything.",
      "Over time, jewellery becomes more than something we wear. It absorbs emotions, marks milestones, and carries stories that only the wearer truly understands. Years later, a single piece can instantly transport us back to a place, a person, or a moment we never want to forget.",
      "That is the kind of jewellery we set out to create with Mahidha — pieces that don't spend their lives tucked away in a box, but become part of your daily rituals, your travels, your celebrations and your quiet moments alike.",
    ],
  },
  {
    title: "Why We Created Mahidha",
    img: "/img/whywe.jpeg",
    body: [
      "Mahidha wasn't created overnight. It was built one journey at a time. Long before our first collection came to life, we travelled across cities in search of something we couldn't find in one place — beautiful craftsmanship, skilled artisans, and jewellery that felt timeless rather than trendy.",
      "Our journey took us through the bustling lanes of Chandni Chowk, the colourful workshops of Jaipur, the karigars of Hyderabad, and the timeless streets of Varanasi. Every city taught us something different. Every artisan shared a story. Every workshop reminded us that true craftsmanship cannot be rushed.",
      "Those journeys taught us to value quality over quantity, craftsmanship over mass production, and timeless design over fleeting trends. Today, Mahidha is a celebration of Indian craftsmanship interpreted for the modern woman.",
    ],
  },
  {
    title: "Why Pearls",
    img: "/img/whypearl.jpeg",
    body: [
      "Some materials follow trends. Pearls transcend them. For centuries, pearls have been treasured not only for their beauty, but for what they represent — grace, strength, wisdom and timeless elegance.",
      "Unlike gemstones cut and polished into perfection, every freshwater pearl is naturally formed, carrying its own unique shape, lustre, texture and character. No two pearls are ever exactly alike. In a world that celebrates perfection, they remind us that individuality is what makes something truly beautiful.",
      "We also wanted to redefine the way pearls are worn — with a crisp linen shirt on a workday, paired with denim for a weekend brunch, layered over a cotton dress on holiday, or complementing a saree at a family celebration. To us, pearls are not reserved for a moment. They become part of every moment.",
    ],
  },
  {
    title: "Why Sterling Silver",
    img: "/img/stirsilver.jpeg",
    body: [
      "We believe jewellery should be more than beautiful — it should be made to last. That is why every Mahidha piece is handcrafted using 925 sterling silver, a precious metal valued for its strength, quality and timeless appeal.",
      "Beyond its beauty, sterling silver is naturally durable, hypoallergenic and comfortable for everyday wear — an ideal choice for women who want jewellery they never have to think twice about.",
      "When paired with thoughtfully selected freshwater pearls and handcrafted by skilled artisans, it becomes jewellery that balances elegance with practicality and luxury with everyday comfort. Because true luxury isn't something you wear only on special occasions — it's something you can wear, love and pass on for years to come.",
    ],
  },
  {
    title: "Crafted by Hands. Designed with Heart.",
    img: "/img/handcraft.jpeg",
    body: [
      "Every Mahidha piece begins long before it reaches our collections. It begins in the hands of skilled artisans — masters of their craft whose knowledge has been nurtured and passed down through generations.",
      "From carefully selecting each freshwater pearl to shaping, setting, polishing and finishing every detail, no step is rushed. Every piece is handcrafted with intention, ensuring it not only looks beautiful but feels exceptional to wear.",
      "At Mahidha, luxury is not defined by a logo or a price tag. It is defined by craftsmanship, by the time invested in every piece, and by the people who pour their skill and passion into creating something that will become part of someone else's story.",
    ],
  },
];

const promise: [string, string, string][] = [
  ["shield", "925 Sterling Silver", "Hallmarked, durable and restorable."],
  ["drop", "Freshwater Pearls", "Real pearls, each one unique."],
  ["leaf", "Hypoallergenic", "Gentle on sensitive skin."],
  ["hand", "Handcrafted", "Finished by skilled artisans."],
  ["sparkle", "Everyday Wear", "Lightweight and effortless."],
];

const FOUNDERS: { name: string; role: string; img: string; body: string[] }[] = [
  {
    name: "Mahima Sharma",
    role: "Co-Founder & Chief Operating Officer",
    img: "/img/mahima.jpeg",
    body: [
      "Mahima believes that every exceptional brand begins with understanding people. With over two decades of experience in market research and project management, she has built her career around listening, analysing and transforming insights into meaningful experiences.",
      "A fearless entrepreneur and natural multitasker, she thrives where creativity meets execution. As Chief Operating Officer, she leads product sourcing, operations, business strategy and customer experience — ensuring every Mahidha creation reflects the brand's promise of timeless craftsmanship and uncompromising quality.",
    ],
  },
  {
    name: "Medha Sharma",
    role: "Co-Founder & Chief Product & Digital Officer",
    img: "/img/medha.jpeg",
    body: [
      "Medha is the quiet force behind Mahidha's creative soul. With experience spanning technology, legal, and digital innovation, she brings analytical thinking and creative vision to every decision. As Mahidha's Chief Product & Digital Officer, she leads product design, digital strategy, and brand storytelling, ensuring every collection reflects timeless craftsmanship and thoughtful detail. Working closely with artisans and partners, she builds lasting relationships while upholding exceptional quality, authenticity, and elegance.",
    ],
  },
];

export default function StoryPage() {
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
      <PageHero
        overline="Elevated Everyday"
        title="Our Story"
        sub="Jewellery designed for women who do it all. Handcrafted in sterling silver and freshwater pearls. Elevated Everyday."
        img="/img/twosis.jpeg"
      />

      {/* Opening manifesto */}
      <section className="bg-pearl">
        <div className="max-w-3xl mx-auto px-5 py-20 md:py-28 space-y-6 text-charcoal text-[16px] md:text-[18px] leading-[1.85]">
          <p className="font-serif text-[24px] md:text-[32px] leading-[1.3] text-charcoal !mt-0">
            Mahidha did not begin with a business plan. It began with a childhood.
          </p>
          <p>
            Long before we understood design, craftsmanship or entrepreneurship, we were simply
            two sisters growing up in Ghaziabad — sharing a room, sharing dreams, and unknowingly
            collecting memories that would one day shape our brand.
          </p>
          <p>
            Some of our earliest memories are not of jewellery itself, but of watching our mother
            get ready every morning. She is a yoga teacher, and before leaving for school she
            followed the same quiet ritual. A neatly draped saree. A touch of kajal. Her watch. A
            simple chain. Sometimes a pair of earrings. Sometimes pearls.
          </p>
          <p>
            There was nothing extravagant about those moments. Yet to us, they felt beautiful. Only
            years later did we realise we weren&apos;t just watching someone get dressed — we were
            watching confidence, grace and self-respect become part of a woman&apos;s everyday life.
          </p>
          <p className="font-serif text-[22px] md:text-[28px] leading-[1.4] text-charcoal pt-4">
            Why should beautiful jewellery be reserved only for special occasions?
          </p>
          <p>
            We believed women deserved jewellery that felt luxurious yet effortless — pieces they
            could wear from morning meetings to evening celebrations, while travelling, at work, or
            simply during life&apos;s ordinary moments. That belief became Mahidha.
          </p>
          <p>
            Our inspiration has always been the modern woman — the woman who leads, nurtures,
            creates, celebrates and dreams. She doesn&apos;t need jewellery to make a statement. She
            chooses jewellery that reflects who she already is.
          </p>
          <p className="font-serif text-[20px] md:text-[24px] leading-[1.45] text-taupe pt-4">
            Because the most beautiful moments in life aren&apos;t always the grandest ones.
            They&apos;re the everyday moments — and they deserve to be elevated.
          </p>
        </div>
      </section>

      {/* Narrative chapters — alternating image + text */}
      {CHAPTERS.map((c, i) => (
        <section key={c.title} className={i % 2 === 0 ? "bg-beige" : "bg-pearl"}>
          <div className="max-w-wrap mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <Reveal className={i % 2 === 0 ? "md:order-1" : "md:order-2"}>
              <div className="relative w-full aspect-[4/5] rounded-btn overflow-hidden bg-pearl">
                <SmartImage
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal className={i % 2 === 0 ? "md:order-2" : "md:order-1"}>
              <h2 className="font-serif text-[28px] md:text-[42px] leading-[1.1] text-charcoal">
                {c.title}
              </h2>
              <div className="mt-6 space-y-4 text-taupe text-[15px] md:text-[17px] leading-[1.85]">
                {c.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Our Promise */}
      <section className="bg-navy text-ivory">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-24">
          <p className="text-center font-sans text-[12px] tracking-nav uppercase text-gold mb-4">
            Our Promise
          </p>
          <h2 className="text-center font-serif text-[30px] md:text-[44px] leading-tight text-ivory">
            What every piece is made of
          </h2>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10">
            {promise.map(([ic, t, s]) => {
              const I = Icons[ic];
              return (
                <Reveal key={t} className="text-center flex flex-col items-center">
                  <span className="w-14 h-14 rounded-full border border-gold/50 flex items-center justify-center">
                    <I size={24} stroke="#C4A87A" />
                  </span>
                  <p className="mt-4 font-serif text-[20px] text-ivory leading-tight">{t}</p>
                  <p className="mt-1.5 text-ivory/70 text-[13px] leading-relaxed">{s}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="bg-pearl">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-28">
          <SectionHeading
            overline="Meet the Founders"
            title="The sisters behind Mahidha"
            sub="Two different personalities, one shared vision — balancing creativity with strategy, intuition with execution, and tradition with modern design."
          />
          <div className="mt-14 grid md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto">
            {FOUNDERS.map((f) => (
              <Reveal key={f.name}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-btn bg-beige">
                  <SmartImage
                    src={f.img}
                    alt={`${f.name} — Co-Founder of MAHIDHA`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <p className="mt-6 font-serif text-[26px] text-charcoal">{f.name}</p>
                <p className="font-sans text-[12px] tracking-nav uppercase text-gold mt-1">
                  {f.role}
                </p>
                <div className="mt-4 space-y-3 text-taupe text-[15px] leading-[1.8]">
                  {f.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* From Our Story to Yours */}
      <section className="bg-beige">
        <div className="max-w-3xl mx-auto px-5 py-20 md:py-28 text-center">
          <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-5">
            From Our Story to Yours
          </p>
          <div className="space-y-6 text-charcoal text-[16px] md:text-[18px] leading-[1.9]">
            <p>
              Every Mahidha piece begins with a story. It carries the quiet mornings spent
              watching our mother get ready, late-night conversations between two sisters thousands
              of kilometres apart, and our journeys through the streets of Jaipur, the ghats of
              Banaras, the workshops of Hyderabad and the lanes of Chandni Chowk.
            </p>
            <p>
              But once a Mahidha piece leaves our hands, its story is no longer ours. It becomes
              yours. We hope it accompanies you through life&apos;s beautiful moments — your first
              promotion, quiet mornings, family celebrations, spontaneous journeys, weddings,
              anniversaries and every chapter in between.
            </p>
            <p className="font-serif text-[22px] md:text-[26px] leading-[1.4] text-charcoal">
              Because the most meaningful jewellery is never remembered for the day it was bought.
              It is remembered for the life it lived alongside the woman who wore it.
            </p>
            <p>Thank you for letting Mahidha become a small part of your story.</p>
          </div>
          <p className="mt-8 font-serif text-[24px] text-charcoal">With love,</p>
          <p className="font-serif text-[22px] text-charcoal">Mahima &amp; Medha</p>
          <p className="font-sans text-[12px] tracking-nav uppercase text-gold mt-1">
            Founders, Mahidha
          </p>
        </div>
      </section>

      {/* CTA */}
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
