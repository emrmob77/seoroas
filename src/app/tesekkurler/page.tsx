import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSeoMetadata({
  title: "Teşekkürler — Talebiniz Alındı",
  description:
    "SEO analiz talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.",
  path: "/tesekkurler",
  noIndex: true,
});

export default function TesekkurlerPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="h-10 w-10 text-green-500" strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-[-0.04em] text-on-background mb-4">
          Talebiniz Alındı!
        </h1>

        <p className="text-on-surface-variant text-lg leading-relaxed mb-4">
          SEO analiz talebiniz ekibimize iletildi. <strong>24 saat</strong> içinde
          sizinle iletişime geçeceğiz.
        </p>

        <p className="text-on-surface-variant/70 text-sm mb-12">
          Bu süreçte blogumuzdaki güncel SEO rehberlerine göz atabilirsiniz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-[0.15em] text-xs hover:bg-primary-dim transition-all"
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/blog"
            className="bg-surface-container-low text-on-surface px-8 py-4 rounded-full font-bold uppercase tracking-[0.15em] text-xs hover:bg-surface-container-high transition-all flex items-center justify-center gap-2 group"
          >
            Blog Yazıları
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
