import Hero from "@/components/home/Hero";
import TrustMini from "@/components/home/TrustMini";
import LifestyleStrip from "@/components/home/LifestyleStrip";
import StyleEditsHome from "@/components/home/StyleEditsHome";
import HeritageStrip from "@/components/home/HeritageStrip";
import TrustStrip from "@/components/home/TrustStrip";
import ShopByCategory from "@/components/home/ShopByCategory";
import UGCSection from "@/components/home/UGCSection";
import Testimonials from "@/components/home/Testimonials";
import CarePreview from "@/components/home/CarePreview";
import ProductRail from "@/components/product/ProductRail";
import JsonLd from "@/components/ui/JsonLd";
import { PRODUCTS, BESTSELLERS } from "@/lib/data";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export default function HomePage() {
  const news = PRODUCTS.filter((p) => p.status === "new");
  const best = PRODUCTS.slice(0, 4);
  return (
    <>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      <Hero />
      <TrustMini />
      <LifestyleStrip />
      <ShopByCategory />
      <StyleEditsHome />
      <HeritageStrip />
      <TrustStrip />
      <ProductRail
        overline="New In"
        title="Fresh arrivals"
        sub="The latest additions to Mahidha — timeless elegance with a contemporary edge."
        items={news.length ? news : best}
      />
      <UGCSection />
      <ProductRail
        overline="Bestsellers"
        title="Loved by many"
        sub="Pieces that move with your everyday."
        items={BESTSELLERS}
      />
      <Testimonials />
      <CarePreview />
    </>
  );
}
