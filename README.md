# MAHIDHA — Next.js storefront

Modern pearl & sterling-silver jewellery storefront for **MAHIDHA**, re-platformed
from a single-file HTML build to a maintainable, SEO-ready stack with **zero visual change**.

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first `@theme` in `app/globals.css`) |
| Fonts | `next/font/google` — Cormorant Garamond (serif) + Inter (sans) |
| State | Zustand (+ `persist`) for cart, wishlist, cart-drawer |
| Images | `next/image` via `SmartImage`, with the original `ph()` resolver + branded SVG fallback |
| Forms → email | Next.js Route Handlers + Nodemailer over SMTP (`runtime = "nodejs"`) |
| Validation | Zod (server-side) + honeypot + basic rate limiting |
| SEO | Metadata API, `sitemap.ts`, `robots.ts`, JSON-LD (Organization/WebSite, Product, BreadcrumbList, FAQPage) |

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in SMTP credentials (see below)
npm run dev                  # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

`npm run lint` passes clean.

## Environment variables

See [.env.example](.env.example). Copy it to `.env.local` and fill in:

| Var | Purpose |
|---|---|
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | SMTP transport (port 465 = TLS, 587 = STARTTLS) |
| `CONTACT_TO` | inbox that receives form submissions |
| `SMTP_FROM` | verified sender identity |
| `NEXT_PUBLIC_SITE_URL` | public origin for canonical URLs, sitemap, OG, JSON-LD |

> **Local dev without SMTP:** if `SMTP_*` are unset the mail handler no-ops with a
> console warning, so the form success UI still works while developing. Set the vars
> to actually deliver mail.

## Routes

| URL | Page |
|---|---|
| `/` | Home |
| `/collections/[cat]` (`?style=`) | Listing (filters/sort/pagination) |
| `/product/[id]` | Product detail (SSG) |
| `/shop-by-style` · `/nizam-heritage` · `/our-story` | Editorial pages |
| `/jewellery-care` · `/faqs` · `/gift-guide` · `/shipping-and-exchange` · `/size-guide` · `/contact` | Customer-care pages |
| `/cart` | Shopping bag |
| `/api/contact` · `/api/newsletter` | SMTP mail handlers |

## Architecture notes

- **Server-first.** Pages are Server Components for SSG + SEO; only interactive leaves
  (`Header`, `CartDrawer`, `ProductCard`, `PDPView`, `ListingView`, `Hero`, `Reveal`,
  `UtilityBar`, forms) are `'use client'`.
- **`lib/`** holds the data (`data.ts`), the image resolver (`images.ts`), the Zustand
  store (`store.ts`), helpers (`utils.ts`) and JSON-LD/SEO builders (`seo.ts`).
- **`SmartImage`** wraps `next/image` and reproduces the original global `<img>` error
  fallback (swaps a failed load to a branded gradient SVG, guarded against loops).
- **Design tokens** from the old `tailwind.config` live as CSS-first `@theme` variables, so
  every original utility class (`bg-pearl`, `text-gold`, `tracking-nav`, `rounded-btn`,
  `max-w-wrap`, …) renders identical CSS. Tailwind v4 gradient classes use the new
  `bg-linear-to-*` names to produce the same result.

## Deployment

The contact/newsletter handlers send SMTP mail and therefore **must** run server-side —
SMTP credentials can never be exposed in the browser. They run as serverless functions, so
deploy to **Vercel** or **Netlify** (no server or database to operate). The project is **not**
a pure static export because of these handlers.

**Fully static alternative (not enabled):** to drop all server code, swap the Route Handlers
for a form-to-email service (Web3Forms, Resend, Formspree) and post to their endpoint instead;
the site can then be statically exported. The Nodemailer/SMTP approach is the default here.

---

The original single-file reference build is preserved under [`_ref/`](_ref/) for visual comparison.
