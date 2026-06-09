import { PRODUCTS } from "./data";

/* Currency formatter — ported from the original `inr()`. */
export const inr = (n?: number | null): string | null =>
  n || n === 0 ? "₹" + Number(n).toLocaleString("en-IN") : null;

/* slug helpers for category + product routes */
export const slugify = (s: string): string =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Every category value that can appear as a listing `cat` param.
export const KNOWN_CATEGORIES: string[] = Array.from(
  new Set<string>([
    "All Jewellery",
    "New Arrivals",
    "S925",
    "Everyday Icons",
    "Vacations",
    "Celebrations",
    ...PRODUCTS.map((p) => p.category),
  ]),
);

export const catToSlug = (cat: string): string => slugify(cat);

export const slugToCat = (slug: string): string =>
  KNOWN_CATEGORIES.find((c) => slugify(c) === slug) ?? slug;

/* Map an internal route name + params (the original router shape) to a real URL. */
export function hrefFor(to: string, params: { cat?: string; style?: string; id?: string } = {}): string {
  switch (to) {
    case "home":
      return "/";
    case "list": {
      const base = `/collections/${catToSlug(params.cat || "All Jewellery")}`;
      return params.style ? `${base}?style=${encodeURIComponent(params.style)}` : base;
    }
    case "style":
      return "/shop-by-style";
    case "nizam":
      return "/nizam-heritage";
    case "pdp":
      return `/product/${params.id}`;
    case "story":
      return "/our-story";
    case "craft":
      return "/the-craft";
    case "care":
      return "/jewellery-care";
    case "faqs":
      return "/faqs";
    case "gift":
      return "/gift-guide";
    case "shipping":
      return "/shipping-and-exchange";
    case "size":
      return "/size-guide";
    case "contact":
      return "/contact";
    case "cart":
      return "/cart";
    default:
      return "/";
  }
}
