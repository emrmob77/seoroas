import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { localBusinessSchema, webSiteSchema } from "@/lib/schema";
import "./globals.css";

export const dynamic = "force-dynamic";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
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
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A56DB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <SchemaOrg schema={[localBusinessSchema(), webSiteSchema()]} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
