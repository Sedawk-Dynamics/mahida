import { F } from "./images";
import type { NavItem, Product } from "./types";

/* =================================================================
   SEED PRODUCT DATA
   ================================================================= */
export const PRODUCTS: Product[] = [
  { id: "lilac-swoon", name: "Lilac Swoon Earring", category: "Cosmic & Celestial", style: "Earrings", material: "Sterling Silver S925", price: 429, rating: 5.0, status: "star",
    desc: "Delicate celestial drops with a soft lilac pearl, made to catch the light as you move.",
    img: ["Lilac Swoon Earring", "Lilac Swoon — on ear"], pics: [F.earrCrystal, F.lifeEvening] },
  { id: "lumi-pearl-wrap", name: "Lumi Pearl Wrap", category: "Boardroom Edit", style: "Necklaces", material: "Freshwater Pearl", price: 1290, rating: 4.8,
    desc: "A fluid pearl wrap necklace that layers effortlessly from boardroom to evening.",
    img: ["Lumi Pearl Wrap", "Lumi Wrap — neckline"], pics: [F.neckLariat, F.heroBlazer] },
  { id: "luxe-office-layer", name: "Luxe Office Layer Necklace", category: "Desk to Dinner", style: "Necklaces", material: "Sterling Silver S925", price: 1490, rating: 4.9, status: "new",
    desc: "A refined layered chain with a single pearl pendant — desk to dinner in one move.",
    img: ["Luxe Office Layer", "Office Layer — styled"], pics: [F.flatGold, F.heroWoman] },
  { id: "noor-luxe", name: "Noor Luxe Necklace", category: "Cosmic & Celestial", style: "Necklaces", material: "South Sea Pearl", price: 2190, rating: 4.9,
    desc: "A luminous statement pearl set against fine silver — quietly commanding.",
    img: ["Noor Luxe Necklace", "Noor Luxe — close up"], pics: [F.neckRope, F.lifeEvening] },
  { id: "royal-muse-choker", name: "Royal Muse Choker", category: "Shop by Style", style: "Necklaces", material: "Freshwater Pearl", price: 429, rating: 4.7, status: "sold",
    desc: "A modern pearl choker inspired by Nizam-era elegance, reimagined for now.",
    img: ["Royal Muse Choker", "Royal Muse — on model"], pics: [F.heroPendant, F.lifeCeleb] },
  { id: "imperial-pearl-ring", name: "Imperial Pearl Ring", category: "All Jewellery", style: "Rings", material: "Sterling Silver S925", price: 899, rating: 4.8,
    desc: "A single cultured pearl crowning a fine silver band — an everyday heirloom.",
    img: ["Imperial Pearl Ring", "Imperial Ring — on hand"], pics: [F.ringDome, F.ringsMirror] },
  { id: "celeste-studs", name: "Celeste Pearl Studs", category: "Everyday Icons", style: "Earrings", material: "Freshwater Pearl", price: 349, rating: 4.9, status: "new",
    desc: "The everyday pearl stud, perfected — lightweight, lustrous, never off-duty.",
    img: ["Celeste Pearl Studs", "Celeste Studs — on ear"], pics: [F.earrDrop, F.heroBlazer] },
  { id: "nizam-pearl-drop", name: "Nizam Pearl Drop", category: "The Nizam Heritage", style: "Earrings", material: "South Sea Pearl", price: 1690, rating: 5.0,
    desc: "Heritage-inspired drop earrings with a graceful pearl, handcrafted by karigars.",
    img: ["Nizam Pearl Drop", "Nizam Drop — detail"], pics: [F.flatCeleb, F.nizamSet] },
  { id: "everyday-layer-set", name: "Everyday Layer Set", category: "Everyday Icons", style: "Necklaces", material: "Sterling Silver S925", price: 1990, rating: 4.8, status: "new",
    desc: "Three curated chains designed to mix — your effortless everyday layering set.",
    img: ["Everyday Layer Set", "Layer Set — styled"], pics: [F.flatSilver, F.heroLayers] },
  { id: "sea-salt-bracelet", name: "Sea & Salt Pearl Bracelet", category: "Vacations", style: "Bracelets", material: "Freshwater Pearl", price: 790, rating: 4.7,
    desc: "A breezy pearl bracelet for sun, sea and salt — lightweight luxury for your escape.",
    img: ["Sea & Salt Bracelet", "Bracelet — on wrist"], pics: [F.braceBloss, F.lifeGreen] },
  { id: "glow-celebration", name: "Glow Celebration Earring", category: "Celebrations", style: "Earrings", material: "Cultured Pearl", price: 1150, rating: 4.9,
    desc: "Festive, refined and full of glow — statement pearls for special moments.",
    img: ["Glow Celebration Earring", "Glow — on ear"], pics: [F.pearlVintage, F.lifeCeleb] },
  { id: "evening-muse-necklace", name: "Evening Muse Necklace", category: "Evening Edit", style: "Necklaces", material: "South Sea Pearl", price: 2490, rating: 5.0, status: "new",
    desc: "Elevated for unforgettable nights — a sculptural pearl statement necklace.",
    img: ["Evening Muse Necklace", "Evening Muse — styled"], pics: [F.gifting, F.lifeEvening] },
];

export const CATEGORY_INTRO: Record<string, string> = {
  "All Jewellery": "Browse the complete Mahidha universe — thoughtfully designed jewellery crafted to complement every moment, mood, and occasion.",
  "New Arrivals": "Discover the latest additions to Mahidha — fresh designs curated for modern women who love timeless elegance with a contemporary edge.",
  S925: "Hallmarked 925 sterling silver, handcrafted to last — gentle on skin and made for everyday wear.",
  "Shop by Style": "Find your edit. Curated by mood and moment, styled to express the many versions of you.",
  "The Nizam Heritage": "Rooted in the rich pearl legacy of Hyderabad and inspired by the elegance of the Nizam era — heritage, reimagined.",
};

/* =================================================================
   NAVIGATION
   ================================================================= */
export const NAV: NavItem[] = [
  { label: "Latest", to: "list", external: "https://shop.mahidha.com/product-category/latest/" },
  { label: "Everyday", to: "list", external: "https://shop.mahidha.com/product-category/everyday/" },
  { label: "Escape", to: "list", external: "https://shop.mahidha.com/product-category/escape/" },
  { label: "Nizam", to: "nizam", external: "https://shop.mahidha.com/product-category/nizam/" },
  { label: "S925", to: "list", external: "https://shop.mahidha.com/product-category/s925/" },
  { label: "All Jewelry", to: "list", external: "https://shop.mahidha.com/product-category/all-jewellery/" },
  { label: "Our story", to: "story", external: "https://mahidha.vercel.app/our-story" },
];

/* =================================================================
   HOME / SHARED CONTENT TABLES
   ================================================================= */
export const CARE_TIPS: [string, string, string][] = [
  ["drop", "Keep Away From Moisture", "Avoid direct contact with water, perfume, lotions and harsh chemicals to maintain shine and longevity."],
  ["box", "Store With Care", "Store pieces separately in a soft pouch or jewellery box to prevent scratches and tangling."],
  ["clock", "Wear Them Last", "Make jewellery the final step while getting ready and the first thing you remove at the end of the day."],
  ["gem", "Handle Pearls Gently", "Pearls are delicate; avoid rubbing against hard surfaces and wipe softly after use."],
  ["moon", "Avoid Sleeping or Working Out in Jewellery", "Remove before sleeping, showering, swimming or exercising to preserve finish and structure."],
  ["feather", "Clean Softly", "Use a soft dry cloth to gently clean after every wear."],
];

export const LIFESTYLE: [string, string, string, string][] = [
  ["Everyday Icons", "Easy-to-wear favorites designed to become part of her daily rotation.", "/img/everyday.jpeg", "All Jewellery"],
  ["The Bride Tribe", "Beautiful keepsakes to thank your bridal team with style.", "/img/Bridesmaid.jpeg", "All Jewellery"],
  ["For Her", "Thoughtful pieces chosen to feel personal, elegant, and unforgettable.", "/img/Collagegirl.jpeg", "All Jewellery"],
  ["Signature Gifts", "Curated treasures designed to be cherished for years.", "/img/Signature.jpeg", "All Jewellery"],
  ["Elegant Finds Under ₹5000", "Beautiful jewellery pieces that feel special without stretching your budget.", "/img/Below5000.jpeg", "All Jewellery"],
];

export const EDITS: [string, string, string][] = [
  ["The Everyday Muse", "Effortless pieces for work, coffee runs, and everyday elegance.", F.heroBlazer],
  ["The Escape", "Inspired jewellery for sunlit days and memorable getaways.", F.styleScarf],
  ["The Nizam Heritage", "Inspired by Hyderabad's pearl legacy and timeless craftsmanship.", F.nizamSet],
  ["The Silver Atelier", "925 sterling silver essentials and contemporary classics.", F.flatSilver],
  ["The Collector's Edition", "Limited quantities, special creations, and statement pieces.", F.flatGold],
  ["The Celebration Edit", "For weddings, festivities, special occasions, and cherished moments.", F.lifeCeleb],
];

export const TRUST6: [string, string, string][] = [
  ["gem", "Real Pearls", "Handpicked for quality & lustre"],
  ["shield", "Sterling Silver", "925 hallmarked"],
  ["hand", "Handcrafted", "By skilled karigars"],
  ["sparkle", "Timeless Designs", "Made for everyday"],
  ["feather", "Lightweight", "Comfortable all-day wear"],
  ["gift", "Thoughtful Packaging", "Beautifully packed"],
];

export const TESTIMONIALS: [string, string, string][] = [
  ['"Lightweight, lustrous and genuinely everyday. I haven\'t taken my Celeste studs off in weeks."', "Ananya R.", "Hyderabad"],
  ['"The pearls feel modern, not old-fashioned. Exactly what I was searching for."', "Meera K.", "Bengaluru"],
  ['"From desk to dinner without a second thought. Mahidha gets the modern woman."', "Sara T.", "Mumbai"],
];

/* =================================================================
   FAQ GROUPS
   ================================================================= */
export const FAQ_GROUPS: [string, [string, string][]][] = [
  ["About Our Jewellery", [
    ["What materials are used in MAHIDHA jewellery?", "Our jewellery is thoughtfully crafted using sterling silver, freshwater pearls, South Sea pearls, cultured pearls and carefully selected natural stones. Every piece is designed to feel timeless, elegant and suitable for everyday wear."],
    ["Are your pearls real?", "Yes. We use real freshwater pearls, cultured pearls and South Sea pearls across our collections. Each pearl carries its own natural beauty, shape and texture, making every piece unique."],
    ["What is the difference between freshwater pearls and South Sea pearls?", "Freshwater pearls are loved for their soft lustre, versatility and everyday elegance. South Sea pearls are rarer, larger in size and known for their rich glow and luxurious appearance."],
    ["Is your jewellery handmade?", "Many of our pieces involve detailed handcrafted work by skilled karigars and artisans who bring every design to life with precision and care."],
    ["Is sterling silver suitable for sensitive skin?", "Yes. Sterling silver is generally skin friendly and suitable for everyday wear. However, we recommend avoiding direct contact with harsh chemicals or moisture for long lasting shine."],
    ["Will my jewellery tarnish over time?", "Sterling silver may naturally oxidise over time when exposed to air, moisture or chemicals. Proper storage and care will help maintain its finish and shine beautifully."],
  ]],
  ["Jewellery Care", [
    ["How should I store my jewellery?", "Store your jewellery separately in a soft pouch or jewellery box to avoid scratches, tangling and moisture exposure."],
    ["Can I wear my jewellery daily?", "Yes. Our jewellery is designed for elevated everyday wear. However, we recommend removing pieces before sleeping, showering, swimming or exercising."],
    ["Can pearls come in contact with perfume or water?", "We recommend keeping pearls away from perfumes, lotions, hairsprays and excessive moisture as pearls are naturally delicate."],
    ["How do I clean my jewellery?", "Use a soft dry cloth to gently wipe your jewellery after every wear. Avoid harsh cleaning chemicals or abrasive materials."],
    ["Why do pearls have slight variations?", "Real pearls are naturally formed and may vary slightly in shape, texture and lustre. These natural variations are what make each piece unique and beautiful."],
  ]],
  ["Orders & Shipping", [
    ["Do you ship across India?", "Yes, we offer pan India shipping."],
    ["How long does shipping take?", "Orders are usually processed within 2 to 5 business days. Delivery timelines may vary depending on your location."],
    ["Will I receive tracking details for my order?", "Yes. Once your order is shipped, tracking details will be shared via email or SMS."],
    ["Do your pieces come in packaging?", "Yes. Every MAHIDHA piece is thoughtfully packaged to make your unboxing experience feel elegant and special."],
  ]],
  ["Returns & Exchanges", [
    ["Do you accept returns or exchanges?", "We currently accept returns or exchanges only for damaged or incorrect products received. Please refer to our Returns Policy for complete details."],
    ["What should I do if I receive a damaged product?", "Please contact us within 48 hours of delivery with clear images and your order details, and our team will assist you further."],
  ]],
  ["Product Information", [
    ["Will the jewellery look exactly like the images?", "We try our best to capture every product as accurately as possible. However, slight variations may occur due to lighting, photography and the natural characteristics of pearls and stones."],
    ["Are your pieces lightweight?", "Most of our designs are created keeping comfort and everyday wearability in mind. Product details and weights are mentioned wherever applicable."],
    ["Can your jewellery be gifted?", "Absolutely. MAHIDHA pieces are designed to feel meaningful and timeless, making them perfect for gifting and special occasions."],
  ]],
  ["Brand & Craftsmanship", [
    ["What inspires MAHIDHA?", "MAHIDHA is inspired by modern women, timeless pearls, celestial beauty and the elegance associated with Hyderabad's rich pearl heritage and craftsmanship."],
    ["What makes MAHIDHA different?", "We focus on creating elevated everyday jewellery that blends modern design, real pearls, sterling silver and thoughtful craftsmanship into pieces that feel timeless, versatile and personal."],
  ]],
  ["Authenticity & Quality", [
    ["Is your jewellery hallmarked?", "Yes. Our sterling silver jewellery is crafted using quality certified materials to ensure authenticity and durability."],
    ["Are the pearls natural?", "Our collections feature real freshwater pearls, cultured pearls and South Sea pearls carefully selected for their beauty and lustre."],
    ["Why do some pearls differ slightly in shape or texture?", "Real pearls are naturally unique and may carry slight variations in shape, texture and size. These characteristics are a part of their beauty and authenticity."],
  ]],
  ["Wearability & Styling", [
    ["Can I style your jewellery for everyday wear?", "Absolutely. MAHIDHA is designed around elevated everyday wear, making our pieces versatile enough for workdays, celebrations, dinners and everyday moments alike."],
    ["Is your jewellery lightweight?", "Most of our pieces are thoughtfully designed to feel comfortable and wearable throughout the day without compromising elegance."],
    ["Can pearls be worn with western outfits?", "Yes. Our collections are designed to blend timeless pearls with contemporary silhouettes, making them effortless to style with both western and Indian wear."],
  ]],
  ["Longevity & Maintenance", [
    ["How long will sterling silver jewellery last?", "With proper care, sterling silver jewellery can last beautifully for years. Regular cleaning and careful storage help preserve its shine and finish."],
    ["Can I shower or swim while wearing the jewellery?", "We recommend removing your jewellery before showering, swimming or exercising to maintain its longevity and shine."],
  ]],
  ["Orders & Customer Confidence", [
    ["Is Cash on Delivery available?", "Yes, Cash on Delivery is available on eligible orders across India."],
    ["Can I cancel or modify my order after placing it?", "Orders can only be modified or cancelled before dispatch. Please contact us as soon as possible for assistance."],
    ["What if my jewellery arrives damaged?", "If you receive a damaged or incorrect product, please contact us within 48 hours of delivery with clear images and order details."],
  ]],
  ["Gifting", [
    ["Is MAHIDHA suitable for gifting?", "Yes. Our jewellery is thoughtfully packaged and designed to feel timeless, meaningful and special for gifting occasions."],
    ["Do you offer gift packaging?", "All MAHIDHA orders are packaged with care to create an elegant unboxing experience."],
  ]],
  ["Brand Trust Building", [
    ["Who is MAHIDHA designed for?", "MAHIDHA is created for modern women who appreciate timeless elegance, everyday wearability and thoughtfully crafted jewellery that feels personal and expressive."],
    ["What inspires your collections?", "Our collections draw inspiration from modern femininity, celestial beauty, timeless pearls and the rich craftsmanship heritage associated with Hyderabad."],
    ["Why is MAHIDHA priced the way it is?", "At MAHIDHA, we focus on quality materials, real pearls, sterling silver and thoughtful craftsmanship instead of mass produced fashion jewellery. Every piece is designed to feel timeless, wearable and made to stay with you beyond trends."],
  ]],
];
