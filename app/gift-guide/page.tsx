import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import EditCard from "@/components/product/EditCard";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Gift Guide",
  description:
    "Celebrate milestones, birthdays and everyday wins with jewellery designed to be cherished.",
  path: "/gift-guide",
});

// Every "Shop Now" on the gift guide points to the live gifting shop.
const GIFT_SHOP = "https://shop.mahidha.com/product-category/gifting/signature-gifts/";

// [title, image]
const tiles: [string, string][] = [
  ["Gifts For Her", "/img/rakhi.jpeg"],
  ["Birthday Gifting", "/img/Collagegirl.jpeg"],
  ["Bridesmaid Gifts", "/img/Bridesmaid.jpeg"],
  ["Everyday Staples", "/img/everyday.jpeg"],
  ["Timeless Pearls", "/img/whypearl.jpeg"],
  ["Under ₹5000", "/img/Below5000.jpeg"],
  ["Modern Minimal Pieces", "/img/stirsilver.jpeg"],
];

export default function GiftPage() {
  return (
    <>
      <section className="relative bg-navy text-ivory overflow-hidden">
        <SmartImage
          src="/img/Signature.jpeg"
          alt="Gift guide editorial — MAHIDHA jewellery, thoughtfully packed for gifting"
          fill
          sizes="100vw"
          priority
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="relative max-w-wrap mx-auto px-5 py-28 md:py-36 text-center">
          <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-4">
            Gift Guide
          </p>
          <h1 className="font-serif text-[38px] md:text-[60px] leading-tight text-ivory max-w-3xl mx-auto">
            Moments worth gifting
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-ivory/80 text-[17px] md:text-[19px] leading-[1.7]">
            Celebrate milestones, birthdays and everyday wins with jewellery designed to be
            cherished.
          </p>
        </div>
      </section>
      <section className="bg-pearl">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-28">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {tiles.map(([t, img]) => (
              <Reveal key={t}>
                <EditCard
                  title={t}
                  line="Thoughtfully packed for gifting"
                  img={img}
                  tone="navy"
                  href={GIFT_SHOP}
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 bg-beige rounded-btn p-8 md:p-10 flex items-center gap-5 max-w-2xl mx-auto">
            <Icons.gift size={36} stroke="#C4A87A" />
            <p className="text-taupe text-[16px] leading-[1.8]">
              Every Mahidha order arrives in{" "}
              <span className="text-charcoal">thoughtful, beautiful packaging</span> — ready to
              gift, no wrapping required.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
