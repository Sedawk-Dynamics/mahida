/* =================================================================
   CENTRAL IMAGE SYSTEM  (local /public/img assets)
   -----------------------------------------------------------------
   Real MAHIDHA photography lives in /public/img. Every image resolves
   through ph(): pass a direct "/img/..." path for precise control, or
   a descriptive label that the resolver maps to the best-fit asset (by
   what each photo actually depicts). SmartImage swaps any missing file
   for a branded gradient SVG, so nothing ever renders as a blank box.

   Ported verbatim from the original single-file implementation; only
   the asset prefix changed from "img/" to "/img/" for Next's /public.
   ================================================================= */
const A = "/img/";

export const F = {
  heroWoman: A + "imgi_179_Hom-Slider-mobile-1.png", // woman, navy suit + pearls, navy bg
  heroPendant: A + "imgi_180_Hom-Slider-mobile-2.webp", // pearl + gold star pendant, navy
  heroBlazer: A + "imgi_11_HOM-19.webp", // woman white blazer, pearl earrings + lariat
  heroLayers: A + "imgi_34_Hom-Category-scaled.png", // woman navy, layered silver (wide)
  lifeStreet: A + "imgi_26_Hom-Categories.png", // woman walking, city street (wide)
  lifeEvening: A + "imgi_34_Hom-Categories-1.png", // woman seated, navy velvet, layered necklaces
  lifeCeleb: A + "imgi_26_Hom-Categories-6.png", // woman laughing, pearl choker, ornate room
  lifeGreen: A + "imgi_26_Hom-Categories-7.png", // woman in green, pearl necklace, cozy
  flatCelest: A + "imgi_66_HOM-1.webp", // celestial flatlay, navy velvet
  flatGold: A + "imgi_110_HOM-2.webp", // gold celestial flatlay, ivory linen
  flatTrip: A + "imgi_129_HOM-3.png", // triptych flatlay (tall)
  flatSilver: A + "imgi_135_HOM-7.webp", // sterling silver layering flatlay, marble
  flatCeleb: A + "imgi_117_HOM-14.webp", // gold + pearl drop earrings, stones, marble
  flatGoldWide: A + "imgi_23_imgi_1_photo-1515562141207-7a88fb7ce338-2048x1365.jpg", // gold jewellery flatlay (wide)
  nizamSet: A + "imgi_123_HOM-6.webp", // Nizam kundan set, green velvet
  gifting: A + "imgi_12_Untitled-design-2026-04-21T162041.939.webp", // gifting flatlay, navy ring box
  neckLariat: A + "imgi_91_HOM-9.webp", // pearl lariat necklace on bust
  neckRope: A + "imgi_78_HOM-11.webp", // pearl rope necklace on bust
  braceSilver: A + "imgi_54_HOM-10.webp", // sterling silver pearl bracelet, wooden box
  braceBloss: A + "imgi_84_HOM-12.webp", // freshwater pearl bracelet, cherry blossom
  earrDrop: A + "imgi_60_HOM-18.webp", // sterling silver lapis + pearl drop earrings
  giftPeony: A + "imgi_18_jewellery-blog-img-1.jpg", // peonies + box of pearls
  earrCrystal: A + "imgi_20_jewellery-blog-img-2.jpg", // crystal drop earrings, lace
  giftPink: A + "imgi_21_jewellery-blog-img-3.jpg", // hand holding pink gift box, pearl set
  pearlVintage: A + "imgi_22_jewellery-blog-img-4.jpg", // vintage pearl + gold jewellery
  editFeminist: A + "imgi_23_jewellery-blog-img-5.jpg", // magazine + silver necklace + gold rings
  styleScarf: A + "imgi_25_jewellery-blog-img-6.jpg", // sunglasses, scarf, statement earrings
  ringDome: A + "imgi_26_jewellery-blog-img-7.jpg", // gold dome ring, dried flowers
  ringsMirror: A + "imgi_24_jewellery-blog-img-9.jpg", // gold rings on a mirror, sunlight
  // Real client photography for the homepage hero + The Craft page
  workwear: A + "workwear_in_office.jpeg", // pearl bracelet beside laptop & coffee
  vacation: A + "vaccation.jpeg", // vacation mood with pearl jewellery
  coffeeCafe: A + "coffee_in_cafe.jpeg", // two women in a café wearing pearls
  nizamPhoto: A + "nizam_heritage.jpeg", // pearl & amethyst choker, ivory saree
  karigar: A + "karigar.jpeg", // a karigar's hands crafting a pearl bracelet
} as const;

export const LOGO = A + "mahidalogo.png";

// Subject pools for descriptive-label fallback (deterministic by label).
const POOL = {
  women: [F.heroWoman, F.heroBlazer, F.heroLayers, F.lifeStreet, F.lifeEvening, F.lifeCeleb, F.lifeGreen],
  jewelry: [F.flatGold, F.flatSilver, F.flatCeleb, F.pearlVintage, F.flatGoldWide, F.ringsMirror, F.neckLariat, F.earrDrop],
  gift: [F.giftPink, F.giftPeony, F.gifting, F.pearlVintage, F.flatCeleb, F.ringDome, F.neckLariat],
  edit: [F.flatCelest, F.styleScarf, F.lifeCeleb, F.lifeEvening, F.nizamSet, F.flatSilver],
};

export function hashStr(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export const pick = (arr: readonly string[], key?: string): string =>
  arr[hashStr(key || "x") % arr.length];

// Branded gradient + gold celestial motif — the never-blank safety net.
export function brandSVG(label?: string, w = 800, h = 1000): string {
  const t = (label || "MAHIDHA").replace(/—.*$/, "").trim().slice(0, 26);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 800 1000'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#EFE8DF'/><stop offset='1' stop-color='#162033'/></linearGradient></defs><rect width='800' height='1000' fill='url(#g)'/><g fill='none' stroke='#C4A87A' stroke-width='2.4' opacity='0.9'><path d='M430 470a64 64 0 1 1-34-56 48 48 0 0 0 34 56z'/><path d='M330 600l7 22 22 7-22 7-7 22-7-22-22-7 22-7z'/></g><text x='400' y='800' fill='#7A746C' font-family='Georgia,serif' font-size='30' letter-spacing='3' text-anchor='middle'>${t}</text></svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

// Resolve a direct path or descriptive label to a local asset.
// (Trailing sizing args in the original were always ignored; omitted here.)
export function ph(label?: string): string {
  if (typeof label !== "string") return brandSVG("MAHIDHA");
  if (label.startsWith("/img/") || label.startsWith("img/") || label.startsWith("http") || label.startsWith("data:")) return label;
  const L = label.toLowerCase();
  // named / page slots
  if (L.includes("medha")) return F.lifeEvening;
  if (L.includes("mahima")) return F.lifeGreen;
  if (L.includes("campaign")) return F.heroLayers;
  if (L.includes("newsletter") || L.includes("celestial bg")) return F.flatCelest;
  if (L.startsWith("map")) return F.lifeStreet;
  if (L.includes("hyderabad")) return F.lifeCeleb;
  if (L.includes("nizam") || L.includes("heritage")) return F.nizamSet;
  if (L.includes("our story") || L.includes("story")) return F.editFeminist;
  if (L.includes("care")) return F.pearlVintage;
  if (L.includes("faq")) return F.flatGold;
  if (L.includes("shipping") || L.includes("packaging")) return F.giftPink;
  if (L.includes("size")) return F.braceSilver;
  if (L.includes("contact")) return F.heroBlazer;
  if (L.startsWith("cart")) return F.neckLariat;
  if (L.startsWith("gift")) return pick(POOL.gift, label);
  // category circles
  if (L.includes("category")) {
    if (L.includes("earring")) return F.earrCrystal;
    if (L.includes("ring")) return F.ringDome;
    if (L.includes("bracelet")) return F.braceSilver;
    return F.neckRope;
  }
  // people / lifestyle / UGC
  if (/lifestyle|ugc|on model|on her|wearing|woman|portrait|neckline/.test(L)) return pick(POOL.women, label);
  if (/vacation|travel|beach|escape/.test(L)) return pick([F.styleScarf, F.lifeGreen, F.lifeCeleb], label);
  if (/edit —|edit-|evening|celebration|cosmic|celestial/.test(L)) return pick(POOL.edit, label);
  // jewellery shots
  if (/earring|stud/.test(L)) return /on ear|on model|styled|lifestyle/.test(L) ? pick(POOL.women, label) : F.earrDrop;
  if (/necklace|choker|wrap|lariat/.test(L)) return /on model|styled|neckline/.test(L) ? pick(POOL.women, label) : pick([F.neckLariat, F.neckRope], label);
  if (/bracelet|wrist/.test(L)) return F.braceSilver;
  if (/\bring\b/.test(L)) return F.ringDome;
  if (/pearl|jewel|product|detail|macro|flatlay|silver|gold|layer/.test(L)) return pick(POOL.jewelry, label);
  return pick(POOL.edit, label);
}

export { POOL };
