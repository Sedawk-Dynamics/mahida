import type { Metadata } from "next";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import SmartImage from "@/components/ui/SmartImage";
import EditCard from "@/components/product/EditCard";
import { ph } from "@/lib/images";
import { LIVE_SHOP } from "@/lib/links";

export const metadata: Metadata = {
  title: "Gift Guide",
  description:
    "Celebrate milestones, birthdays and everyday wins with jewellery designed to be cherished.",
  alternates: { canonical: "/gift-guide" },
};

const tiles: [string, string][] = [
  ["Gifts For Her", "GIFT — for her"],
  ["Birthday Gifting", "GIFT — birthday"],
  ["Bridesmaid Gifts", "GIFT — bridesmaid"],
  ["Everyday Staples", "GIFT — everyday"],
  ["Timeless Pearls", "GIFT — pearls"],
  ["Under ₹5000", "GIFT — under 5000"],
  ["Modern Minimal Pieces", "GIFT — minimal"],
];

export default function GiftPage() {
  return (
    <>
      <section className="relative bg-navy text-ivory overflow-hidden">
        <SmartImage
          src={ph("GIFT — editorial, gift box with pearls, warm glow")}
          alt="Gift guide editorial — gift box with pearls in warm glow"
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
                  href={LIVE_SHOP}
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
