import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Layers, ShieldCheck, Users } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "TikTok Pixel Kurulumu — TikTok Ads Takip & Ölçüm",
  description:
    "TikTok Pixel ve Events API kurulumu ile reklam performansınızı ölçün. Özel eventler, kitle segmentasyonu ve KVKK uyumlu server-side izleme.",
  path: "/hizmetler/tiktok-pixel",
});

const flowCards = [
  {
    title: "Pixel Kurulumu",
    description:
      "Universal tag dağıtımı, GTM veya doğrudan site entegrasyonu; gerektiğinde sunucu tarafı API ile tamamlayıcı ölçüm.",
    icon: Code2,
  },
  {
    title: "Özel Event Tetikleme",
    description:
      "Standart Purchase ötesinde lead, kayıt, sepet ve mikro-dönüşümlerle algoritmaya zengin sinyal.",
    icon: Layers,
  },
  {
    title: "Kitle Oluşturma",
    description:
      "Davranış ve değer segmentleri; dinamik retargeting ve benzer kitleler için temiz event akışı.",
    icon: Users,
  },
  {
    title: "Veri Gizliliği Uyumu",
    description:
      "GDPR ve KVKK kapsamında onay yönetimi, minimizasyon ve güvenli veri aktarımı pratikleri.",
    icon: ShieldCheck,
  },
];

const stats = [
  { value: "3.4x", label: "ROAS", hint: "Örnek performans senaryosu" },
  { value: "100%", label: "Signal Match", hint: "Kimlik eşleştirme odağı" },
  { value: "24h", label: "Kurulum", hint: "Tipik teknik devreye alma" },
  { value: "0%", label: "Data Leakage", hint: "Hedeflenen sızıntı toleransı" },
];

export default function TikTokPixelPage() {
  return (
    <>
      <SchemaOrg
        schema={serviceSchema(
          "TikTok Pixel Kurulumu",
          "TikTok reklamları için pixel, özel event’ler ve sunucu tarafı ölçüm altyapısının kurulumu.",
          "/hizmetler/tiktok-pixel"
        )}
      />

      <SubpageHero
        breadcrumb={[
          { name: "Hizmetler", url: "/hizmetler" },
          { name: "TikTok Pixel", url: "/hizmetler/tiktok-pixel" },
        ]}
        badge="TikTok Ads · Signals"
        title={
          <>
            TikTok Büyümenizin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              Kilidini Açın
            </span>
          </>
        }
        subtitle="Viral içerik ile ticaret arasında veri altyapısı kuruyoruz. TikTok Pixel ve sunucu tarafı entegrasyonlarla dönüşümleri eksiksiz yakalayın; algoritmanın öğrenmesini hızlandırın ve bütçeyi doğru yerlere yönlendirin."
      />

      {/* Engineering the Flow */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-14 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary block mb-3">
              Akış Mühendisliği
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-on-background">
              Sinyalden sonuca
            </h2>
            <p className="mt-4 text-on-surface-variant font-light text-sm md:text-base leading-relaxed">
              Dört temel blokta TikTok ölçüm yığınınızı kuruyor ve
              sürdürülebilir hale getiriyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {flowCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-[2rem] border border-outline-variant/15 bg-surface-container-lowest p-8 md:p-10 hover:border-primary/25 transition-colors"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-on-background mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-on-surface-variant font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Precision Matters */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary block">
              Hassasiyet Neden Kritik?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-background leading-tight">
              Algoritma, ancak temiz sinyalle optimize olur
            </h2>
            <p className="text-on-surface-variant font-light leading-relaxed">
              TikTok&apos;ta kısa döngülü içerik ve hızlı tüketim, ölçüm
              gecikmesini ve gürültüyü artırır. Event mimarisi net değilse
              kampanyalar yanlış kitlelere bütçe harcar; doğru kurulumda ise
              maliyet ve öğrenme eğrisi hızla iyileşir.
            </p>
            <ul className="space-y-4 pt-2">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <div>
                  <p className="font-semibold text-on-background">
                    Optimize Edilmiş Reklam Harcaması
                  </p>
                  <p className="text-sm text-on-surface-variant font-light mt-1">
                    Gereksiz gösterimleri keserek her TL&apos;yi niyet ve
                    dönüşümle hizalı kanallara yönlendiriyoruz.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <div>
                  <p className="font-semibold text-on-background">
                    Viral Potansiyel Takibi
                  </p>
                  <p className="text-sm text-on-surface-variant font-light mt-1">
                    İçerik patlamalarını satış hunisiyle bağlayan event ve
                    segmentlerle büyümeyi ölçülebilir kılıyoruz.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl md:rounded-3xl border border-outline-variant/15 bg-surface-container-low p-6 md:p-8"
              >
                <p className="text-2xl md:text-4xl font-black tracking-tighter text-primary mb-1">
                  {s.value}
                </p>
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-on-background mb-2">
                  {s.label}
                </p>
                <p className="text-[11px] md:text-xs text-on-surface-variant font-light leading-snug">
                  {s.hint}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-28 px-6 md:px-8">
        <div className="max-w-7xl mx-auto bg-surface-container-low border border-outline-variant/20 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-16 lg:p-20 text-center">
          <div className="max-w-2xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-background tracking-tight">
              Algoritmayı Yönetmeye Hazır mısınız?
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg font-light">
              Pixel altyapınızı kuralım veya mevcut kurulumu sağlamlaştıralım;
              sonuçları birlikte okuyalım.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg hover:opacity-95 transition-opacity shadow-lg w-full sm:w-auto justify-center"
              >
                İletişime Geçin
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
              <Link
                href="/referanslar"
                className="inline-flex items-center gap-2 border-2 border-outline-variant/40 text-on-background px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg hover:border-primary/50 hover:text-primary transition-colors w-full sm:w-auto justify-center"
              >
                Referansları İncele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
