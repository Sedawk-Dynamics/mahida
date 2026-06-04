import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/data";
import { KNOWN_CATEGORIES, catToSlug } from "@/lib/utils";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/shop-by-style",
    "/nizam-heritage",
    "/our-story",
    "/jewellery-care",
    "/faqs",
    "/gift-guide",
    "/shipping-and-exchange",
    "/size-guide",
    "/contact",
    "/cart",
  ];
  const collections = KNOWN_CATEGORIES.map((c) => `/collections/${catToSlug(c)}`);
  const products = PRODUCTS.map((p) => `/product/${p.id}`);

  return [...staticPaths, ...collections, ...products].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
