"use client";

import Link from "next/link";
import { useState } from "react";
import { Icons } from "@/components/ui/Icons";
import SmartImage from "@/components/ui/SmartImage";
import { LOGO } from "@/lib/images";
import { hrefFor } from "@/lib/utils";
import { subscribe } from "@/lib/api-client";

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
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    setError("");
    try {
      await subscribe(email, company);
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-navy text-ivory">

      {/* Columns */}
      <div className="max-w-wrap mx-auto px-5 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <SmartImage
            src={LOGO}
            alt="MAHIDHA — Elevated Everyday"
            width={2048}
            height={804}
            className="h-16 w-auto"
          />
          <p className="mt-4 text-[14px] text-ivory/70 leading-[1.8]">
            Thoughtfully crafted pieces inspired by heritage and designed for
            modern living. Timeless details for everyday moments.
          </p>
          <div className="mt-6 flex gap-3 text-gold">
            <a
              href="#"
              aria-label="Instagram @lovedbymahidha"
              className="hover:text-ivory"
            >
              <Icons.insta size={20} />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-ivory">
              <Icons.pinterest size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-ivory">
              <Icons.linkedin size={20} />
            </a>
          </div>
        </div>
        <Column
          title="Discover"
          links={[
            ["Our Story", "story"],
            ["The Craft", "craft"],
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
            ["Gift Guide", "gift"],
            ["Track Order", "contact"],
            ["Shipping & Returns", "shipping"],
            ["Privacy Policy", "contact"],
            ["Terms & Conditions", "contact"],
          ]}
        />
      </div>

      {/* Contact strip */}
      <div className="max-w-wrap mx-auto px-5 pb-10 grid sm:grid-cols-3 gap-5 text-[13px] text-ivory/70">
        <p className="flex items-start gap-2">
          <Icons.pin size={16} stroke="#C4A87A" /> Flat No. 602, Block I, Aparna
          Sarovar Grande, Hyderabad, Telangana 500019
        </p>
        <p className="flex items-center gap-2">
          <Icons.mail size={16} stroke="#C4A87A" /> hello@mahidha.com
        </p>
        <p className="flex items-center gap-2">
          <Icons.phone size={16} stroke="#C4A87A" /> +91 72073 61114
        </p>
      </div>

      {/* Legal */}
      <div className="border-t border-ivory/10">
        <div className="max-w-wrap mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-ivory/55">
          <div className="flex flex-wrap gap-x-5 gap-y-1 justify-center">
            <a href="#" className="ulink hover:text-ivory">
              Terms &amp; Conditions
            </a>
            <a href="#" className="ulink hover:text-ivory">
              Privacy Policy
            </a>
            <a href="#" className="ulink hover:text-ivory">
              Return &amp; Refund Policy
            </a>
          </div>
          <p>© 2026 MAHIDHA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
