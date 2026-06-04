import type { Metadata } from "next";
import { Icons } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Shipping & Exchange",
  description:
    "Thoughtfully packed, carefully shipped, and supported every step of the way.",
  alternates: { canonical: "/shipping-and-exchange" },
};

const blocks: [string, string, string][] = [
  ["truck", "Pan-India Shipping", "We ship across India, with free shipping on all orders."],
  ["clock", "Processing Time", "Orders are processed within 2–5 business days before dispatch."],
  ["box", "Order Tracking", "You'll receive tracking details via email and SMS once your order ships."],
  ["shield", "Cash on Delivery", "COD is available on eligible orders across India."],
  ["feather", "Returns & Exchanges", "Offered only for damaged or incorrect items — we want every piece to arrive perfect."],
  ["chat", "Damaged or Incorrect?", "Contact us within 48 hours of delivery with images and your order details and we'll assist promptly."],
];

export default function ShippingPage() {
  return (
    <>
      <PageHero
        overline="Customer Care"
        title="Shipping & Exchange"
        sub="Thoughtfully packed, carefully shipped, and supported every step of the way."
        img="SHIPPING — pearl jewellery in gift packaging, warm tones"
      />
      <section className="bg-pearl">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blocks.map(([ic, t, s]) => {
              const I = Icons[ic];
              return (
                <Reveal key={t} className="bg-beige rounded-btn p-8">
                  <span className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold">
                    <I size={22} stroke="#C4A87A" />
                  </span>
                  <h3 className="mt-5 font-serif text-[23px] text-charcoal">{t}</h3>
                  <p className="mt-2 text-taupe text-[16px] leading-[1.8]">{s}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
