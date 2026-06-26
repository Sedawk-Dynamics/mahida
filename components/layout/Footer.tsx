import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import SmartImage from "@/components/ui/SmartImage";
import { LOGO } from "@/lib/images";
import { hrefFor } from "@/lib/utils";

type LinkDef = [string, string, { cat?: string; style?: string }?];

function Column({ title, links }: { title: string; links: LinkDef[] }) {
  return (
    <div>
      <h4 className="font-sans text-[12px] tracking-nav uppercase text-gold mb-5">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map(([label, to, params]) => (
          <li key={label}>
            <Link
              href={hrefFor(to, params)}
              className="ulink font-sans text-[14px] text-ivory/75 hover:text-ivory"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      {/* Columns */}
      <div className="max-w-wrap mx-auto px-5 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <SmartImage
            src={LOGO}
            alt="MAHIDHA — Elevated Everyday"
            width={704}
            height={264}
            className="h-16 w-auto"
          />
          <p className="mt-4 text-[14px] text-ivory/70 leading-[1.8]">
            Thoughtfully crafted pieces inspired by heritage and designed for
            modern living. Timeless details for everyday moments.
          </p>
          <div className="mt-6 flex gap-3 text-gold">
            <a
              href="https://www.facebook.com/lovedbymahidha/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ivory"
            >
              <Icons.fb size={20} />
            </a>
            <a
              href="https://www.instagram.com/lovedbymahidha/"
              aria-label="Instagram @lovedbymahidha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ivory"
            >
              <Icons.insta size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/mahidha-global-pvt-ltd"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ivory"
            >
              <Icons.linkedin size={20} />
            </a>
            <a
              href="https://x.com/Mahidhaofficial"
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ivory"
            >
              <Icons.xcom size={20} />
            </a>
          </div>
        </div>
        <Column
          title="Discover"
          links={[
            ["Our Story", "story"],
            ["The Craft", "craft"],
            ["Know Your Pearls", "pearls"],
            ["Founders", "story"],
            ["Journal", "contact"],
            ["Contact Us", "contact"],
          ]}

          
        />
        <Column
          title="Shop"
          links={[
            ["New Arrivals", "list", { cat: "New Arrivals" }],
            ["Earrings", "list", { cat: "All Jewellery", style: "Earrings" }],
            ["Necklaces", "list", { cat: "All Jewellery", style: "Necklaces" }],
            ["Bracelets", "list", { cat: "All Jewellery", style: "Bracelets" }],
            ["Rings", "list", { cat: "All Jewellery", style: "Rings" }],
            ["The Nizam Edit", "nizam"],
            ["Workday Edit", "style"],
            ["Shop by Style", "style"],
          ]}
        />
        <Column
          title="Customer Care"
          links={[
            ["Jewellery Care", "care"],
            ["FAQs", "faqs"],
            ["Shipping & Delivery", "shippingPolicy"],
            ["Returns & Refunds", "returns"],
            ["Warranty", "warranty"],
            ["Privacy Policy", "privacy"],
            ["Terms & Conditions", "terms"],
          ]}
        />
      </div>

      {/* Contact strip */}
      <div className="max-w-wrap mx-auto px-5 pb-10 grid sm:grid-cols-3 gap-5 text-[13px] text-ivory/70">
        <p className="flex items-start gap-2">
          <Icons.pin size={16} stroke="#C4A87A" /> SY No. 116, Flat No. 107, Gayatri Nest
          Apartment, Telecom Nagar, Gachibowli, Hyderabad, Serilingampally, Telangana, India,
          500032
        </p>
        <p className="flex items-center gap-2">
          <Icons.mail size={16} stroke="#C4A87A" /> info@mahidha.com
        </p>
        <p className="flex items-center gap-2">
          <Icons.phone size={16} stroke="#C4A87A" /> +91 72073 61114, +91 72073 61115
        </p>
      </div>

      {/* Legal */}
      <div className="border-t border-ivory/10">
        <div className="max-w-wrap mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-ivory/55">
          <div className="flex flex-wrap gap-x-5 gap-y-1 justify-center">
            <Link href={hrefFor("terms")} className="ulink hover:text-ivory">
              Terms &amp; Conditions
            </Link>
            <Link href={hrefFor("privacy")} className="ulink hover:text-ivory">
              Privacy Policy
            </Link>
            <Link href={hrefFor("returns")} className="ulink hover:text-ivory">
              Return &amp; Refund Policy
            </Link>
          </div>
          <p>© 2026 MAHIDHA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
