import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import ProductRail from "@/components/product/ProductRail";
import JsonLd from "@/components/ui/JsonLd";
import { CATEGORY_INTRO, PRODUCTS } from "@/lib/data";
import { F, ph } from "@/lib/images";
import { pageMeta, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const SEO = {
  title: "The Nizam Heritage",
  description: CATEGORY_INTRO["The Nizam Heritage"],
  path: "/nizam-heritage",
  image: F.nizamSet,
};

export const metadata = pageMeta(SEO);

export default function NizamPage() {
  const items = PRODUCTS.filter(
    (p) => p.category === "The Nizam Heritage" || p.material.includes("South Sea"),
  ).slice(0, 6);
  const list = items.length ? items : PRODUCTS.slice(0, 4);
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
      <section className="relative bg-navy text-ivory overflow-hidden">
        <SmartImage
          src={ph("NIZAM — heritage editorial, ornate pearl, deep navy & gold")}
          alt="Nizam heritage editorial — ornate pearl on deep navy"
          fill
          sizes="100vw"
          priority
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="relative max-w-wrap mx-auto px-5 py-28 md:py-40 text-center">
          <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-4">
            The Nizam Heritage
          </p>
          <h1 className="font-serif text-[40px] md:text-[68px] leading-[1.02] text-ivory max-w-3xl mx-auto">
            Heritage. Culture. Craftsmanship.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-ivory/80 text-[17px] md:text-[19px] leading-[1.7]">
            {CATEGORY_INTRO["The Nizam Heritage"]}
          </p>
        </div>
      </section>
      <section className="bg-pearl">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative w-full aspect-[8/7] rounded-btn overflow-hidden">
              <SmartImage
                src={ph("NIZAM — Hyderabad pearl legacy, archival mood")}
                alt="Hyderabad pearl legacy — archival editorial"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <h2 className="font-serif text-[32px] md:text-[44px] leading-tight text-charcoal">
              The city of pearls, reimagined
            </h2>
            <p className="mt-5 text-taupe text-[17px] leading-[1.8]">
              Hyderabad has been the heart of India&apos;s pearl trade since the Nizam era — a
              legacy of lustre, artistry and quiet opulence. Mahidha carries that heritage
              forward, pairing time-honoured karigari with a modern, wearable design language.
            </p>
            <p className="mt-4 text-taupe text-[17px] leading-[1.8]">
              Every piece in this edit is handcrafted with real pearls and hallmarked sterling
              silver — heritage you can wear every day.
            </p>
          </Reveal>
        </div>
      </section>
      <ProductRail
        overline="The Nizam Edit"
        title="Heritage you can wear"
        sub="Handcrafted with real pearls and hallmarked sterling silver."
        items={list}
      />
    </>
  );
}
