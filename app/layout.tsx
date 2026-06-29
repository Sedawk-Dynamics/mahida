import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import MobileTabBar from "@/components/layout/MobileTabBar";
import { SITE_URL } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MAHIDHA — Pearls reimagined for modern everyday wear",
    template: "%s · MAHIDHA",
  },
  description:
    "MAHIDHA — modern pearl & sterling silver jewellery. Rooted in Hyderabad's Nizam-era pearl heritage, designed for now. Elevating everyday.",
  applicationName: "MAHIDHA",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "MAHIDHA",
    title: "MAHIDHA — Pearls reimagined for modern everyday wear",
    description:
      "Modern pearl & sterling silver jewellery, rooted in Hyderabad's Nizam-era heritage. Elevating everyday.",
    url: SITE_URL,
    locale: "en_IN",
    images: [{ url: "/img/imgi_34_Hom-Category-scaled.png", width: 1200, height: 630, alt: "MAHIDHA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAHIDHA — Pearls reimagined for modern everyday wear",
    description:
      "Modern pearl & sterling silver jewellery, rooted in Hyderabad's Nizam-era heritage.",
    images: ["/img/imgi_34_Hom-Category-scaled.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#162033",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <div className="min-h-screen flex flex-col bg-pearl pb-[60px] lg:pb-0">
          <UtilityBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <MobileTabBar />
        </div>
      </body>
    </html>
  );
}
