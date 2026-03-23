import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { localBusinessSchema, webSiteSchema } from "@/lib/schema";
import "./globals.css";

export const dynamic = "force-dynamic";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-manrope",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: "SEOROAS — Türkiye'nin Güvenilir SEO Ajansı",
    template: "%s | SEOROAS",
  },
  description:
    "Kanıtlanmış SEO stratejileriyle organik trafiğinizi artırın. 200+ mutlu müşteri, şeffaf raporlama, sözleşmesiz çalışma. Ücretsiz SEO analizi alın.",
  metadataBase: new URL("https://seoroas.com"),
  alternates: {
    canonical: "/",
    languages: { tr: "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "SEOROAS",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4d4ad5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <SchemaOrg schema={[localBusinessSchema(), webSiteSchema()]} />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-on-surface">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
