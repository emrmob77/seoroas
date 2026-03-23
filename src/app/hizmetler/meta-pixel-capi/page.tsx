import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Link2,
  Target,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "Meta Pixel & CAPI Kurulumu — Reklam Performans Optimizasyonu",
  description:
    "Meta Pixel ve Conversions API (CAPI) kurulumu ile attribution, dönüşüm eşleştirmesi ve retargeting doğruluğunu artırın. Domain doğrulama ve event mimarisi dahil uçtan uca kurulum.",
  path: "/hizmetler/meta-pixel-capi",
});

const benefits = [
  {
    title: "Gelişmiş Eşleştirme",
    description:
      "Tarayıcı ve sunucu tarafı sinyalleri birleştirerek dönüşümleri daha tutarlı raporluyor, modellemeyi güçlendiriyoruz.",
    icon: Link2,
  },
  {
    title: "Düşük CPA",
    description:
      "Doğru event ve parametre yapısı ile algoritmanın öğrenme hızını artırıp maliyet verimliliğini iyileştiriyoruz.",
    icon: TrendingDown,
  },
  {
    title: "Doğru Retargeting",
    description:
      "Standart ve özel event’lerle kitle kalitesini yükseltiyor, boşa harcanan gösterimleri azaltıyoruz.",
    icon: Target,
  },
];

const implementationSteps = [
  {
    title: "Pixel Oluşturma & Hijyen",
    description:
      "Tekil pixel yapısı, çift yüklenme ve çakışan tag’lerin temizlenmesi; veri katmanı ve GTM/shop entegrasyonu.",
  },
  {
    title: "Event Eşleştirme",
    description:
      "Purchase, Lead, AddToCart ve özel dönüşümler için parametre standardizasyonu ve kalite kontrolleri.",
  },
  {
    title: "CAPI Entegrasyonu",
    description:
      "Sunucu tarafı olay gönderimi, deduplikasyon ve kullanıcı verisi hash’leme ile güvenli, eksiksiz sinyal.",
  },
  {
    title: "Domain Doğrulama",
    description:
      "Top-level domain ve alt alan politikaları, Aggregated Event Measurement ve öncelik sıralaması optimizasyonu.",
  },
];

export default function MetaPixelCapiPage() {
  return (
    <>
      <SchemaOrg
        schema={serviceSchema(
          "Meta Pixel & CAPI Kurulumu",
          "Meta Pixel ve Conversions API ile reklam ölçümü, attribution ve retargeting altyapısının kurulumu ve optimizasyonu.",
          "/hizmetler/meta-pixel-capi"
        )}
      />

      <SubpageHero
        breadcrumb={[
          { name: "Hizmetler", url: "/hizmetler" },
          { name: "Meta Pixel & CAPI", url: "/hizmetler/meta-pixel-capi" },
        ]}
        badge="Meta Ads · Measurement"
        title={
          <>
            Reklam{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              Performansınızı
            </span>{" "}
            Kontrol Altına Alın
          </>
        }
        subtitle="Meta Pixel ve Conversions API (CAPI) ile tarayıcı ve sunucu sinyallerini birleştiriyoruz. Attribution boşluklarını kapatır, dönüşüm verisini güvenilir hale getirir ve kampanya optimizasyonunu hızlandırırız."
      />

      {/* Benefits */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-14 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary block mb-3">
              Neden Önemli?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-background">
              Ölçüm netleşince bütçe verimli çalışır
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-outline-variant/15 bg-surface-container-lowest p-8 md:p-10 hover:border-primary/20 transition-colors"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-on-background mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-on-surface-variant font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Path */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary block mb-3">
                Uygulama Yolu
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-on-background">
                Kurulumdan doğrulamaya
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-md font-light text-sm md:text-base">
              Her adımda teknik hijyen, event kalitesi ve politika uyumu birlikte
              ele alınır.
            </p>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {implementationSteps.map((step, index) => (
              <li
                key={step.title}
                className="relative flex gap-5 md:gap-6 rounded-[2rem] border border-outline-variant/15 bg-surface-container-lowest p-8 md:p-10"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-on-primary text-lg font-black"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-on-background mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] bg-[#0c0e10] text-white p-8 md:p-14 lg:p-16 relative overflow-hidden border border-white/10">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/50">
                  Vaka özeti
                </span>
                <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
                  Kayıp Attribution Verisinin %34&apos;ünü Geri Kazandık
                </h2>
                <p className="text-white/65 font-light leading-relaxed text-sm md:text-base">
                  CAPI devreye alındıktan sonra raporlanan dönüşümler ile gerçek
                  iş sonuçları hizalandı; kampanya öğrenmesi ve bütçe dağılımı
                  yeniden dengelendi.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2">
                    <TrendingUp className="h-5 w-5" aria-hidden />
                    <span className="text-[10px] uppercase font-bold tracking-widest">
                      ROAS
                    </span>
                  </div>
                  <p className="text-4xl md:text-5xl font-black tracking-tighter">
                    +118%
                  </p>
                  <p className="text-xs text-white/50 mt-2 font-light">
                    Raporlanan verimlilik iyileşmesi
                  </p>
                </div>
                <div className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-sky-300 mb-2">
                    <TrendingDown className="h-5 w-5" aria-hidden />
                    <span className="text-[10px] uppercase font-bold tracking-widest">
                      CPA
                    </span>
                  </div>
                  <p className="text-4xl md:text-5xl font-black tracking-tighter">
                    -22%
                  </p>
                  <p className="text-xs text-white/50 mt-2 font-light">
                    Daha isabetli hedefleme ve öğrenme
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-28 px-6 md:px-8">
        <div className="max-w-7xl mx-auto bg-primary rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-16 lg:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-6 md:space-y-8 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-primary tracking-tight">
              Ölçeklemeye Hazır mısınız?
            </h2>
            <p className="text-on-primary/75 text-base md:text-lg font-light">
              Pixel ve CAPI altyapınızı birlikte kuralım; ölçümü netleştirip
              büyümeyi hızlandıralım.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg hover:scale-[1.02] transition-transform shadow-xl"
            >
              Bize Ulaşın
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
