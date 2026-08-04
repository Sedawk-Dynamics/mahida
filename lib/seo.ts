import type { Metadata } from "next";
import { F, LOGO, ph } from "./images";
import { FAQ_GROUPS } from "./data";
import { catToSlug } from "./utils";
import type { Product } from "./types";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.mahidha.com";

/** Where the real catalogue lives (separate WooCommerce store). */
export const SHOP_URL = "https://shop.mahidha.com";

/** Default social-share image (1200×630-friendly brand photo). */
export const DEFAULT_OG_IMAGE = "/img/imgi_34_Hom-Category-scaled.png";

const abs = (path: string): string =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

/**
 * Build a complete, SEO-correct Metadata object for a page.
 * Guarantees a self-referencing canonical plus per-page Open Graph + Twitter
 * (title, description, url AND image) — Next merges metadata shallowly, so a
 * page that sets openGraph without these would otherwise drop the inherited image.
 */
export function pageMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
}): Metadata {
  const ogTitle = `${title} · MAHIDHA`;
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "website",
      siteName: "MAHIDHA",
      title: ogTitle,
      description,
      url: path,
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
}

/* Organization + WebSite — homepage */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "MAHIDHA",
    legalName: "Mahidha Global Pvt Ltd",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: abs(LOGO) },
    image: abs(DEFAULT_OG_IMAGE),
    slogan: "Elevated Everyday",
    description:
      "MAHIDHA — modern pearl & sterling silver jewellery. Rooted in Hyderabad's Nizam-era pearl heritage, designed for now.",
    email: "info@mahidha.com",
    telephone: "+91 72073 61114",
    foundingLocation: { "@type": "Place", name: "Hyderabad, India" },
    areaServed: { "@type": "Country", name: "India" },
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
    "@id": `${SITE_URL}/#website`,
    name: "MAHIDHA",
    url: SITE_URL,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SHOP_URL}/?s={search_term_string}&post_type=product`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/* Article — editorial / brand-story pages */
export function articleJsonLd({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: [abs(image)],
    inLanguage: "en-IN",
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": abs(path) },
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
