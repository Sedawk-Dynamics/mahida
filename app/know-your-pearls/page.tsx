import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import PageHero from "@/components/layout/PageHero";
import JsonLd from "@/components/ui/JsonLd";
import { F } from "@/lib/images";
import { LIVE_SHOP } from "@/lib/links";
import { hrefFor } from "@/lib/utils";
import { pageMeta, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import {
  INTRO,
  VARIETIES,
  SHAPES_INTRO,
  SHAPES,
  SHAPES_OUTRO,
  SHAPES_TABLE,
  COLOURS_INTRO,
  COLOURS,
  COLOURS_OUTRO,
  COLOURS_TABLE,
  COLOURS_DYK,
  LUSTRE_IMAGES,
  LUSTRE_BODY,
  LUSTRE_TABLE,
  CARE_IMAGES,
  CARE_BODY,
  CARE_TABLE,
  type GalleryImage,
} from "./content";

const SEO = {
  title: "Know Your Pearls",
  description:
    "The complete MAHIDHA pearl guide — freshwater, South Sea, Akoya, Tahitian, baroque, Keshi and Basra-toned pearls, plus pearl shapes, colours, lustre and care.",
  path: "/know-your-pearls",
  image: F.pearlVintage,
};

export const metadata = pageMeta(SEO);

/* Jump links shown under the intro. */
const NAV: { id: string; label: string }[] = [
  { id: "freshwater", label: "Freshwater" },
  { id: "south-sea", label: "South Sea" },
  { id: "akoya", label: "Akoya" },
  { id: "tahitian", label: "Tahitian" },
  { id: "baroque", label: "Baroque" },
  { id: "keshi", label: "Keshi" },
  { id: "basra-toned", label: "Basra-Toned" },
  { id: "shapes", label: "Shapes" },
  { id: "colours", label: "Colours" },
  { id: "lustre", label: "Lustre" },
  { id: "care", label: "Care" },
];

/* ---- Content renderers ------------------------------------------------ */

/* Renders the light-markup body arrays from content.ts:
   "### " → h3, "#### " → h4, "- " → bullet (consecutive items group
   into one list), anything else → paragraph. */
function Prose({ body }: { body: string[] }) {
  const out: ReactNode[] = [];
  let items: string[] = [];

  const flushList = () => {
    if (!items.length) return;
    out.push(
      <ul key={`ul-${out.length}`} className="space-y-2.5 pl-1">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 text-taupe text-[16px] md:text-[17px] leading-[1.8]">
            <span className="mt-[12px] h-[5px] w-[5px] rounded-full bg-gold shrink-0" aria-hidden />
            {it}
          </li>
        ))}
      </ul>,
    );
    items = [];
  };

  for (const line of body) {
    if (line.startsWith("- ")) {
      items.push(line.slice(2));
      continue;
    }
    flushList();
    if (line.startsWith("### ")) {
      out.push(
        <h3 key={`h-${out.length}`} className="font-serif text-[24px] md:text-[28px] leading-tight text-charcoal pt-5">
          {line.slice(4)}
        </h3>,
      );
    } else if (line.startsWith("#### ")) {
      out.push(
        <h4 key={`h-${out.length}`} className="font-serif text-[19px] md:text-[21px] leading-tight text-charcoal pt-2">
          {line.slice(5)}
        </h4>,
      );
    } else {
      out.push(
        <p key={`p-${out.length}`} className="text-taupe text-[16px] md:text-[17px] leading-[1.85]">
          {line}
        </p>,
      );
    }
  }
  flushList();
  return <div className="space-y-4">{out}</div>;
}

/* Three-image strip: first (lifestyle) image goes wide on mobile,
   all three sit side by side from md up. */
function Gallery({ images }: { images: GalleryImage[] }) {
  if (!images.length) return null;
  return (
    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {images.map((im, i) => (
        <Reveal key={im.src} delay={i * 80} className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
          <div
            className={`relative rounded-btn overflow-hidden bg-beige duo ${
              i === 0 ? "aspect-[16/9] md:aspect-square" : "aspect-square"
            }`}
          >
            <SmartImage
              src={im.src}
              alt={im.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function QuickFacts({ facts }: { facts: [string, string][] }) {
  return (
    <div className="rounded-btn bg-white/60 border border-charcoal/10 overflow-hidden h-full">
      <p className="px-6 pt-6 pb-2 font-sans text-[12px] tracking-nav uppercase text-gold">Quick Facts</p>
      <dl className="divide-y divide-charcoal/10">
        {facts.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-4 px-6 py-3.5">
            <dt className="text-charcoal text-[14px] font-medium leading-[1.6]">{k}</dt>
            <dd className="text-taupe text-[14px] leading-[1.7]">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function DidYouKnow({ text }: { text: string }) {
  return (
    <div className="rounded-btn bg-navy text-ivory p-7 md:p-9 h-full">
      <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-4">Did You Know?</p>
      <p className="text-ivory/85 text-[15px] md:text-[16px] leading-[1.9]">{text}</p>
    </div>
  );
}

function GuideTable({ title, head, rows }: { title: string; head: string[]; rows: string[][] }) {
  return (
    <div className="rounded-btn bg-white/60 border border-charcoal/10 overflow-hidden">
      <p className="px-6 pt-6 pb-2 font-sans text-[12px] tracking-nav uppercase text-gold">{title}</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left">
          <thead>
            <tr className="border-b border-charcoal/10">
              {head.map((h) => (
                <th key={h} className="px-6 py-3 font-sans text-[12px] tracking-nav uppercase text-charcoal/60 font-normal">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-charcoal/10">
            {rows.map((r) => (
              <tr key={r[0]}>
                {r.map((c, i) => (
                  <td
                    key={c}
                    className={`px-6 py-3.5 text-[14px] leading-[1.7] align-top ${
                      i === 0 ? "text-charcoal font-medium" : "text-taupe"
                    }`}
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---- Page -------------------------------------------------------------- */

export default function KnowYourPearlsPage() {
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
        overline="The Mahidha Guide"
        title="Know Your Pearls"
        sub="Every pearl tells a different story."
        img={F.flatGold}
      />

      {/* Intro + jump links */}
      <section className="bg-pearl">
        <div className="max-w-3xl mx-auto px-5 py-16 md:py-24 text-center">
          <p className="text-charcoal text-[16px] md:text-[18px] leading-[1.85]">{INTRO}</p>
          <nav aria-label="Guide sections" className="mt-10 flex flex-wrap justify-center gap-2.5">
            {NAV.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="px-4 py-2 rounded-full border border-charcoal/15 text-charcoal/75 font-sans text-[13px] tracking-wide hover:border-gold hover:text-charcoal transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Pearl varieties */}
      {VARIETIES.map((v, i) => (
        <section key={v.id} id={v.id} className={`scroll-mt-24 ${i % 2 === 0 ? "bg-beige" : "bg-pearl"}`}>
          <div className="max-w-wrap mx-auto px-5 py-16 md:py-24">
            <SectionHeading overline="Pearl Varieties" title={v.name} sub={v.tagline} />
            <Gallery images={v.images} />
            <Reveal className="mt-12 max-w-3xl mx-auto">
              <Prose body={v.body} />
            </Reveal>
            <div className="mt-14 max-w-5xl mx-auto grid lg:grid-cols-2 gap-6 items-stretch">
              <Reveal>
                <QuickFacts facts={v.facts} />
              </Reveal>
              <Reveal delay={100}>
                <DidYouKnow text={v.didYouKnow} />
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* Pearl shapes */}
      <section id="shapes" className="scroll-mt-24 bg-pearl">
        <div className="max-w-wrap mx-auto px-5 py-16 md:py-24">
          <SectionHeading overline="A Field Guide" title="Pearl Shapes" sub="Every Shape Tells a Different Story" />
          <Reveal className="mt-10 max-w-3xl mx-auto">
            <Prose body={SHAPES_INTRO} />
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SHAPES.map((s, i) => (
              <Reveal key={s.name} delay={(i % 4) * 70} className="bg-white/60 border border-charcoal/10 rounded-btn overflow-hidden flex flex-col">
                <div className="relative aspect-square bg-beige duo">
                  <SmartImage
                    src={s.img.src}
                    alt={s.img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-[22px] text-charcoal leading-tight">{s.name}</h3>
                  <p className="mt-1 font-sans text-[11px] tracking-nav uppercase text-gold">{s.tagline}</p>
                  <div className="mt-3 space-y-3">
                    {s.paras.map((p) => (
                      <p key={p} className="text-taupe text-[14px] leading-[1.75]">
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-charcoal/10">
                    <p className="font-sans text-[11px] tracking-nav uppercase text-charcoal/60">Best suited for</p>
                    <ul className="mt-2 space-y-1.5">
                      {s.bestFor.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-taupe text-[13.5px] leading-[1.6]">
                          <span className="mt-[9px] h-[4px] w-[4px] rounded-full bg-gold shrink-0" aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 max-w-3xl mx-auto">
            <Prose body={SHAPES_OUTRO} />
          </Reveal>
          <Reveal className="mt-12 max-w-4xl mx-auto">
            <GuideTable title="Quick Guide to Pearl Shapes" head={SHAPES_TABLE.head} rows={SHAPES_TABLE.rows} />
          </Reveal>
        </div>
      </section>

      {/* Pearl colours */}
      <section id="colours" className="scroll-mt-24 bg-beige">
        <div className="max-w-wrap mx-auto px-5 py-16 md:py-24">
          <SectionHeading overline="A Field Guide" title="Pearl Colours" sub="Nature's Most Elegant Palette" />
          <Reveal className="mt-10 max-w-3xl mx-auto">
            <Prose body={COLOURS_INTRO} />
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COLOURS.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 70} className="bg-white/60 border border-charcoal/10 rounded-btn overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] bg-pearl duo">
                  <SmartImage
                    src={c.img.src}
                    alt={c.img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="font-serif text-[22px] text-charcoal leading-tight">{c.name}</h3>
                  <p className="mt-1 font-sans text-[11px] tracking-nav uppercase text-gold">{c.tagline}</p>
                  <div className="mt-3 space-y-3">
                    {c.body.map((p) => (
                      <p key={p} className="text-taupe text-[14px] leading-[1.75]">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 max-w-3xl mx-auto">
            <Prose body={COLOURS_OUTRO} />
          </Reveal>
          <div className="mt-12 max-w-5xl mx-auto space-y-6">
            <Reveal>
              <GuideTable title="Quick Guide to Pearl Colours" head={COLOURS_TABLE.head} rows={COLOURS_TABLE.rows} />
            </Reveal>
            <Reveal>
              <DidYouKnow text={COLOURS_DYK} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pearl lustre */}
      <section id="lustre" className="scroll-mt-24 bg-pearl">
        <div className="max-w-wrap mx-auto px-5 py-16 md:py-24">
          <SectionHeading overline="A Field Guide" title="Pearl Lustre" sub="The Secret Behind a Pearl's Beauty" />
          <Gallery images={LUSTRE_IMAGES} />
          <Reveal className="mt-12 max-w-3xl mx-auto">
            <Prose body={LUSTRE_BODY} />
          </Reveal>
          <Reveal className="mt-12 max-w-4xl mx-auto">
            <GuideTable title="Quick Guide to Pearl Lustre" head={LUSTRE_TABLE.head} rows={LUSTRE_TABLE.rows} />
          </Reveal>
        </div>
      </section>

      {/* Pearl care */}
      <section id="care" className="scroll-mt-24 bg-beige">
        <div className="max-w-wrap mx-auto px-5 py-16 md:py-24">
          <SectionHeading overline="Care" title="Pearl Care Guide" sub="Simple Care for a Lifetime of Beauty" />
          <Gallery images={CARE_IMAGES} />
          <Reveal className="mt-12 max-w-3xl mx-auto">
            <Prose body={CARE_BODY} />
          </Reveal>
          <Reveal className="mt-12 max-w-4xl mx-auto">
            <GuideTable title="Pearl Care Checklist" head={CARE_TABLE.head} rows={CARE_TABLE.rows} />
          </Reveal>
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
