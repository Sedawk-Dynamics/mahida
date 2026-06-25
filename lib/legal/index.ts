import { privacy } from "./privacy";
import { terms } from "./terms";
import { shipping } from "./shipping";
import { returns } from "./returns";
import { warranty } from "./warranty";

export interface Policy {
  slug: string;
  title: string;
  description: string;
  content: string;
}

export const POLICIES: Policy[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description:
      "How Mahidha Global Private Limited collects, uses, stores and protects your personal data, in line with the DPDP Act, 2023 and applicable Indian laws.",
    content: privacy,
  },
  {
    slug: "terms-and-conditions",
    title: "Terms & Conditions",
    description:
      "The terms governing your access to and use of the Mahidha website, products and services.",
    content: terms,
  },
  {
    slug: "shipping-and-delivery",
    title: "Shipping & Delivery Policy",
    description:
      "How Mahidha processes, ships and delivers orders across India and internationally.",
    content: shipping,
  },
  {
    slug: "returns-and-refunds",
    title: "Return, Refund & Cancellation Policy",
    description:
      "When cancellations, returns, replacements and refunds may be accepted at Mahidha.",
    content: returns,
  },
  {
    slug: "warranty",
    title: "1-Year Manufacturing Warranty",
    description:
      "Mahidha's one-year limited manufacturing warranty coverage on eligible jewellery.",
    content: warranty,
  },
];

export const getPolicy = (slug: string): Policy | undefined =>
  POLICIES.find((p) => p.slug === slug);
