# MAHIDHA — Luxury Pearl & Sterling-Silver Jewellery (Front-End)

A polished, mobile-first, editorial e-commerce front-end for **MAHIDHA**.
Built as a **single self-contained `index.html`** — React + Tailwind + Babel via CDN,
**no build step, no install**.

## Run it

Just open the file:

```
index.html  →  double-click, or "Open with" your browser
```

> The CDN scripts (React, Tailwind, Babel) and the warm placeholder images
> (`placehold.co`) require an internet connection on first load.
> For the smoothest local experience you can also serve it:
> `npx serve .` then visit the printed URL.

## What's inside

- **15 pages**, all routed from the header + footer (client-side, React state only —
  no localStorage/sessionStorage):
  Home · All Jewellery · New Arrivals · Shop by Style · S925 · The Nizam Heritage ·
  Our Story · Product Detail · Jewellery Care · FAQs · Gift Guide · Shipping & Exchange ·
  Size Guide · Contact Us · Cart (slide-over drawer **and** full page).
- **Design tokens** defined once in the Tailwind config (`tailwind.config` in `<head>`)
  and referenced everywhere: `pearl / navy / beige / charcoal / taupe / ivory / gold / silver`.
- **Fonts:** Cormorant Garamond (headings) + Inter (body/UI), weights kept light per brief.
- **Motion:** reveal-on-scroll, hero cross-fade, product image swap on hover, gold underline
  grow, smooth cart drawer & accordions — all disabled under `prefers-reduced-motion`.
- **Accessibility:** semantic landmarks, alt text, focus rings, aria-labels on icon buttons,
  keyboard-navigable.

## Imagery system

The site now runs entirely on the **real MAHIDHA photography in `./img`** — no external image
CDN. All imagery flows through one central system:

- **`F`** (top of the script) is the central asset map: a readable key → local `img/...` file,
  with a comment noting what each photo depicts.
- **`POOL`** groups assets by subject (women / jewelry / gift / edit) for descriptive-label fallback.
- Each product carries an explicit **`pics: [primary, secondary]`** so product cards, the PDP gallery,
  and the cart all show the right piece (and a lifestyle shot on hover).
- Every `<img>` resolves through **`ph()`**: pass a direct `"img/..."` path (or an `F.key`) for exact
  control, or a descriptive label that the resolver maps to the best-fit asset by what it depicts.
- **Safety net:** a global capture-phase `onError` handler swaps any missing file for a branded
  gradient SVG (ivory→navy + gold motif), so nothing ever renders as a blank box.
- A faint **paper-grain texture**, **duotone wash** (`.duo`) and navy scrims keep the mixed
  photography reading as one cohesive editorial campaign with legible text-on-image.

> **To swap/extend photos:** drop files in `./img` and edit the `F` map (and a product's `pics`)
> at the top of the script. Nothing else needs to change.

### Where each image is used
Heroes/UGC/testimonials/lifestyle edits → the model & lifestyle shots (Slider, HOM-19, Hom-Category,
Hom-Categories 1/6/7). Product cards/PDP → the piece shots (HOM-9/10/11/12/18, blog earrings & rings,
flatlays HOM-1/2/7/14). Nizam/heritage → the kundan set (HOM-6). Gift guide/shipping → gift-box shots
(blog-img-1/3, Untitled-design). Story → editorial + the triptych (HOM-3). Founders → portrait shots.

## Motion

Ken-burns zoom on the hero, scroll-reveal fade/slide-up, image zoom on card hover, gold underline
grow, soft card lift, bento UGC collage, smooth cart drawer & accordions — all disabled under
`prefers-reduced-motion`.

## Replacing content

- **Products:** edit the `PRODUCTS` array near the top of the `<script type="text/babel">` block.
- **Copy / FAQs:** `CATEGORY_INTRO`, `CARE_TIPS`, `FAQ_GROUPS`, `EDITS`, `LIFESTYLE`, etc.
- **Colors / fonts / spacing:** the `tailwind.config` block in `<head>`.

## Verified

Transpiles clean (Babel) and passes a headless-Chrome smoke test: all 15 routes render,
every nav/footer link is wired, add-to-cart updates the bag, with **no console errors**.
