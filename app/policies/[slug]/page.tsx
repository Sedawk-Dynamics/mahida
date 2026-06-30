import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PageHero from "@/components/layout/PageHero";
import { POLICIES, getPolicy } from "@/lib/legal";
import { pageMeta } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return POLICIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPolicy(slug);
  if (!p) return { title: "Policy not found", robots: { index: false, follow: false } };
  return pageMeta({
    title: p.title,
    description: p.description,
    path: `/policies/${slug}`,
  });
}

export default async function PolicyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const p = getPolicy(slug);
  if (!p) notFound();

  return (
    <>
      <PageHero overline="Legal" title={p.title} img="/img/imgi_110_HOM-2.webp" />
      <section className="bg-pearl">
        <div className="max-w-3xl mx-auto px-5 py-16 md:py-20">
          <article
            className="prose prose-neutral max-w-none
              prose-headings:font-serif prose-headings:font-normal prose-headings:text-charcoal
              prose-h2:text-[24px] md:prose-h2:text-[30px] prose-h2:leading-tight prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-[17px] prose-h3:mt-7 prose-h3:mb-2 prose-h3:tracking-nav prose-h3:uppercase prose-h3:text-gold
              prose-p:text-taupe prose-p:text-[15px] prose-p:leading-[1.85]
              prose-li:text-taupe prose-li:text-[15px] prose-li:my-1 prose-li:marker:text-gold
              prose-strong:text-charcoal prose-strong:font-medium
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline
              prose-table:text-[14px] prose-th:text-charcoal prose-th:bg-beige prose-td:text-taupe
              prose-hr:border-charcoal/10"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{p.content}</ReactMarkdown>
          </article>
        </div>
      </section>
    </>
  );
}
