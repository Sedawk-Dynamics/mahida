import PageHero from "@/components/layout/PageHero";
import B2BForm from "@/components/product/B2BForm";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Business Enquiries",
  description:
    "Partner with Mahidha — wholesale, boutique partnerships, corporate gifting, collaborations and custom opportunities.",
  path: "/business-enquiries",
});

export default function BusinessEnquiriesPage() {
  return (
    <>
      <PageHero
        overline="Partner with us"
        title="Business Enquiries"
        sub="Whether you're looking to stock Mahidha, explore a collaboration, source jewellery for your business, or discuss a custom opportunity — we'd love to hear from you."
        img="B2B — pearl jewellery flatlay, elegant partnership"
      />
      <section className="bg-pearl">
        <div className="max-w-3xl mx-auto px-5 py-20 md:py-24">
          <B2BForm />
        </div>
      </section>
    </>
  );
}
