import type { Metadata } from "next";
import { Icons } from "@/components/ui/Icons";
import SmartImage from "@/components/ui/SmartImage";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/product/ContactForm";
import { ph } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Questions, styling help or a special request — we'd love to hear from you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        overline="We're here for you"
        title="Contact Us"
        sub="Questions, styling help or a special request — we'd love to hear from you."
        img="CONTACT — woman wearing pearls, editorial portrait"
      />
      <section className="bg-pearl">
        <div className="max-w-wrap mx-auto px-5 py-20 md:py-24 grid lg:grid-cols-2 gap-14">
          <div>
            <ContactForm />
          </div>
          <div>
            <h3 className="font-serif text-[28px] text-charcoal mb-5">Reach us</h3>
            <ul className="space-y-4 text-[15px] text-taupe">
              <li className="flex items-start gap-3">
                <Icons.pin size={20} stroke="#C4A87A" /> SY No. 116, Flat No. 107, Gayatri Nest
                Apartment, Telecom Nagar, Gachibowli, Hyderabad, Serilingampally, Telangana,
                India, 500032
              </li>
              <li className="flex items-center gap-3">
                <Icons.mail size={20} stroke="#C4A87A" /> info@mahidha.com
              </li>
              <li className="flex items-center gap-3">
                <Icons.phone size={20} stroke="#C4A87A" /> +91 72073 61114, +91 72073 61115
              </li>
            </ul>
            <div className="mt-6 flex gap-3 text-charcoal">
              <a
                href="https://www.facebook.com/lovedbymahidha/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                <Icons.fb size={22} />
              </a>
              <a
                href="https://www.instagram.com/lovedbymahidha/"
                aria-label="Instagram @lovedbymahidha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                <Icons.insta size={22} />
              </a>
              <a
                href="https://www.linkedin.com/company/mahidha-global-pvt-ltd"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                <Icons.linkedin size={22} />
              </a>
              <a
                href="https://x.com/Mahidhaofficial"
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                <Icons.xcom size={22} />
              </a>
            </div>
            <div className="mt-8 relative aspect-[16/10] rounded-btn overflow-hidden bg-beige">
              <SmartImage
                src={ph("MAP — Hyderabad store location placeholder")}
                alt="Map placeholder — Hyderabad location"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
