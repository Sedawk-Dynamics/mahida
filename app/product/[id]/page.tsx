import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PDPView from "@/components/product/PDPView";
import ProductRail from "@/components/product/ProductRail";
import JsonLd from "@/components/ui/JsonLd";
import { PRODUCTS } from "@/lib/data";
import { ph } from "@/lib/images";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo";

type Params = Promise<{ id: string }>;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return { title: "Product not found" };
  const image = ph((p.pics && p.pics[0]) || p.img[0]);
  return {
    title: p.name,
    description: p.desc,
    alternates: { canonical: `/product/${p.id}` },
    openGraph: {
      type: "website",
      title: `${p.name} · MAHIDHA`,
      description: p.desc,
      url: `/product/${p.id}`,
      images: [{ url: image, alt: p.name }],
    },
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { id } = await params;
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) notFound();

  const related = PRODUCTS.filter(
    (x) => x.id !== p.id && (x.style === p.style || x.category === p.category),
  ).slice(0, 4);
  const relatedList = related.length
    ? related
    : PRODUCTS.filter((x) => x.id !== p.id).slice(0, 4);

  return (
    <>
      <JsonLd
        data={[
          productJsonLd(p),
          breadcrumbJsonLd([
            { label: "Home", href: "/" },
            { label: "All Jewellery", href: "/collections/all-jewellery" },
            { label: p.name, href: `/product/${p.id}` },
          ]),
        ]}
      />
      <div className="max-w-wrap mx-auto px-5 py-6 border-b border-charcoal/10">
        <Breadcrumb
          trail={[
            { label: "Home", href: "/" },
            { label: "All Jewellery", href: "/collections/all-jewellery" },
            { label: p.name },
          ]}
        />
      </div>

      <PDPView p={p} />

      <ProductRail
        overline="Style it with"
        title="You may also love"
        sub="Curated to mix. Styled to express."
        items={relatedList}
      />
    </>
  );
}
