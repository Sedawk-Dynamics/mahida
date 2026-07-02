import type { MetadataRoute } from "next";
import { POLICIES } from "@/lib/legal";
import { SITE_URL } from "@/lib/seo";

// Only canonical, indexable pages belong in the sitemap.
// The placeholder /product/* and /collections/* pages are noindex (the real
// catalogue lives on shop.mahidha.com), and /cart is a utility page — all excluded.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Priority tiers by importance.
  const primary = ["/our-story", "/nizam-heritage", "/the-craft"];
  const secondary = [
    "/journal",
    "/shop-by-style",
    "/know-your-pearls",
    "/artisan-story",
    "/gift-guide",
    "/jewellery-care",
    "/faqs",
  ];
  const utility = ["/shipping-and-exchange", "/size-guide", "/contact"];

  const entries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...primary.map((p) => ({
      url: `${SITE_URL}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...secondary.map((p) => ({
      url: `${SITE_URL}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...utility.map((p) => ({
      url: `${SITE_URL}${p}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
    ...POLICIES.map((p) => ({
      url: `${SITE_URL}/policies/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];

  return entries;
}
