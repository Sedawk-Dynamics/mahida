/* Festive promotional strip — sits between the trust icons and the gifting
   section. Whole banner links to the shop; offer is applied at checkout. */
export default function FestiveBanner() {
  return (
    <a
      href="https://shop.mahidha.com/product-category/all-jewellery/"
      aria-label="Festive offer — 10% off on all products, applied at checkout"
      className="block bg-navy text-center px-5 py-5 md:py-6 transition-colors hover:bg-[#1D2A44]"
    >
      <p className="font-serif text-ivory text-[20px] md:text-[24px] leading-snug">
        A Little More Love, This Festive Season ✨
      </p>
      <p className="mt-1.5 font-sans text-[11px] md:text-[12px] tracking-nav uppercase text-gold">
        10% OFF on all products &middot; Applied at checkout
      </p>
    </a>
  );
}
