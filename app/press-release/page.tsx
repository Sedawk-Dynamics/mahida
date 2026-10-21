import Link from "next/link";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Press Release",
  description: "Press releases and announcements from MAHIDHA. Yet to be published.",
  path: "/press-release",
  noindex: true,
});

export default function PressReleasePage() {
  return (
    <section className="bg-pearl">
      <div className="max-w-3xl mx-auto px-5 py-24 md:py-32 text-center">
        <p className="font-sans text-[12px] tracking-nav uppercase text-gold mb-4">
          Discover
        </p>
        <h1 className="font-serif text-[40px] md:text-[56px] leading-tight text-charcoal">
          Press Release
        </h1>
        <p className="mt-8 font-serif text-[26px] text-charcoal">
          Yet to be published
        </p>
        <p className="mt-3 text-[16px] leading-relaxed text-taupe">
          Our latest press releases and announcements will appear here. Please check back soon.
        </p>
        <Link href="/" className="ulink inline-block mt-8 text-[14px] text-charcoal hover:text-gold">
          Back to home
        </Link>
      </div>
    </section>
  );
}
