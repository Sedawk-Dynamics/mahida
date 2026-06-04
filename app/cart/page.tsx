import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import CartView from "@/components/product/CartView";

export const metadata: Metadata = {
  title: "Shopping Bag",
  description: "Review the pieces in your Mahidha bag and proceed to checkout.",
  alternates: { canonical: "/cart" },
  robots: { index: false },
};

export default function CartPage() {
  return (
    <>
      <PageHero
        overline="Your Bag"
        title="Shopping Bag"
        img="CART — pearl necklace draped, editorial still life"
      />
      <section className="bg-pearl">
        <div className="max-w-wrap mx-auto px-5 py-16 md:py-20">
          <CartView />
        </div>
      </section>
    </>
  );
}
