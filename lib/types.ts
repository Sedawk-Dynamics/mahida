export type ProductStatus = "star" | "new" | "sold";

export interface Product {
  id: string;
  name: string;
  category: string;
  style: string;
  material: string;
  price: number;
  rating: number;
  status?: ProductStatus;
  desc: string;
  img: string[];
  pics?: string[];
}

export interface NavItem {
  label: string;
  to: string;
  params?: { cat?: string; style?: string };
}
