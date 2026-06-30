import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PageHero from "@/components/layout/PageHero";
import ListingView from "@/components/product/ListingView";
import JsonLd from "@/components/ui/JsonLd";
import { CATEGORY_INTRO } from "@/lib/data";
import { KNOWN_CATEGORIES, catToSlug, slugToCat } from "@/lib/utils";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

type Params = Promise<{ cat: string }>;
type Search = Promise<{ [k: string]: string | string[] | undefined }>;

export function generateStaticParams() {
  return KNOWN_CATEGORIES.map((c) => ({ cat: catToSlug(c) }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { cat: slug } = await params;
  const cat = slugToCat(slug);
  const description = CATEGORY_INTRO[cat] || `Shop ${cat} — pearls reimagined at MAHIDHA.`;
  // Placeholder listings — the real catalogue is on shop.mahidha.com, so noindex.
  return pageMeta({
    title: cat,
    description,
    path: `/collections/${slug}`,
    noindex: true,
  });
}

export default async function CollectionsPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: Search;
}) {
  const { cat: slug } = await params;
  const sp = await searchParams;
  const cat = slugToCat(slug);
  const style = typeof sp.style === "string" ? sp.style : undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { label: "Home", href: "/" },
          { label: cat, href: `/collections/${slug}` },
        ])}
      />
      <PageHero
        overline="Collection"
        title={cat}
        sub={CATEGORY_INTRO[cat] || ""}
        img={`${cat} — woman wearing pearls, editorial header`}
      />
      <div className="max-w-wrap mx-auto px-5 py-6 border-b border-charcoal/10">
        <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: cat }]} />
      </div>
      <ListingView cat={cat} styleParam={style} />
    </>
  );
}
