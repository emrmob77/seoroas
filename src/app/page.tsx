import type { Metadata } from "next";
import { generateSeoMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "SEOROAS — Türkiye'nin Güvenilir SEO Ajansı",
  description:
    "Kanıtlanmış SEO stratejileriyle organik trafiğinizi artırın. 200+ mutlu müşteri, şeffaf raporlama, sözleşmesiz çalışma. Ücretsiz SEO analizi alın.",
  path: "/",
});

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-primary mb-6">
            Türkiye&apos;nin #1 SEO Ajansı
          </span>
          <h1 className="text-5xl font-bold text-dark leading-tight tracking-tight mb-6 md:text-4xl">
            Google&apos;da Rakiplerinizi
            <br />
            Geride Bırakın
          </h1>
          <p className="text-xl text-gray max-w-2xl mx-auto mb-8">
            Kanıtlanmış SEO stratejileriyle organik trafiğinizi artırın.
            Veriye dayalı, şeffaf ve sonuç odaklı SEO hizmeti.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="url"
              placeholder="Website adresiniz"
              className="flex-1 border border-border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3 rounded-lg transition-colors">
              Ücretsiz Analiz Al
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
