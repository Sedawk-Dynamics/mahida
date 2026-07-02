export type ProductStatus = "star" | "new" | "sold";

export interface Product {
  id: string;
  name: string;
  category: string;
  style: string;
  material: string;
  price: number;
  /** Original (pre-discount) price — when set, shown struck-through with a sale badge. */
  oldPrice?: number;
  rating: number;
  status?: ProductStatus;
  desc: string;
  img: string[];
  pics?: string[];
  /** Absolute link to the live product page on shop.mahidha.com (overrides the default shop link). */
  shopUrl?: string;
}

export interface NavItem {
  label: string;
  to: string;
  params?: { cat?: string; style?: string };
  /** Absolute external URL — when set, the nav item links here instead of an internal route. */
  external?: string;
}
