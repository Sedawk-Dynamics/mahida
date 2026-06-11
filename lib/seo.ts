import { F, LOGO, ph } from "./images";
import { FAQ_GROUPS } from "./data";
import { catToSlug } from "./utils";
import type { Product } from "./types";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.mahidha.com";

const abs = (path: string): string =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

/* Organization + WebSite — homepage */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MAHIDHA",
    url: SITE_URL,
    logo: abs(LOGO),
    description:
      "MAHIDHA — modern pearl & sterling silver jewellery. Rooted in Hyderabad's Nizam-era pearl heritage, designed for now.",
    email: "info@mahidha.com",
    telephone: "+91 72073 61114",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "SY No. 116, Flat No. 107, Gayatri Nest Apartment, Telecom Nagar, Gachibowli",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500032",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 72073 61114",
      email: "info@mahidha.com",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.facebook.com/lovedbymahidha/",
      "https://www.instagram.com/lovedbymahidha/",
      "https://www.linkedin.com/company/mahidha-global-pvt-ltd",
      "https://x.com/Mahidhaofficial",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MAHIDHA",
    url: SITE_URL,
  };
}

/* Product — PDP */
export function productJsonLd(p: Product) {
  const image = abs(ph((p.pics && p.pics[0]) || p.img[0]));
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    image: [image],
    description: p.desc,
    sku: p.id,
    category: p.category,
    material: p.material,
    brand: { "@type": "Brand", name: "MAHIDHA" },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: p.price,
      url: `${SITE_URL}/product/${p.id}`,
      availability:
        p.status === "sold"
          ? "https://schema.org/OutOfStock"
          : "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: p.rating,
      reviewCount: 1,
      bestRating: 5,
    },
  };
}

/* BreadcrumbList */
export function breadcrumbJsonLd(trail: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.label,
      ...(t.href ? { item: abs(t.href) } : {}),
    })),
  };
}

/* FAQPage — /faqs */
export function faqJsonLd() {
  const all = FAQ_GROUPS.flatMap(([, qs]) => qs);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: all.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function collectionUrl(cat: string): string {
  return `${SITE_URL}/collections/${catToSlug(cat)}`;
}

export { F };
