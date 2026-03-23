import type { Metadata } from "next";
import Link from "next/link";
import { generateDynamicSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";
import {
  LayoutDashboard,
  Zap,
  BarChart3,
  ChevronDown,
  ArrowRight,
  Box,
  Layers,
  Tags,
  GitBranch,
  Bug,
} from "lucide-react";

export const dynamic = "force-dynamic";

const description =
  "Google Tag Manager ile data layer, tetikleyici ve etiket mimarisini tek merkezden yönetin; GA4, reklam pikselleri ve özel olayları hassas ve ölçülebilir şekilde kurgulayın.";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicSeoMetadata({
    title: "Google Tag Manager Kurulumu — GTM Entegrasyonu",
    description,
    path: "/hizmetler/google-tag-manager",
  });
}

const faqItems = [
  {
    q: "GTM siteyi yavaşlatır mı?",
    a: "Doğru kurulduğunda GTM, tek bir asenkron konteyner yükü ile çalışır; ağır senkron script yığınlarının aksine sayfa performansını korumanıza yardımcı olur. Etiketleri tekilleştirme, yükleme önceliği ve lazy tetikleme ile Core Web Vitals dostu bir yapı kuruyoruz.",
  },
  {
    q: "Kurulum ne kadar sürer?",
    a: "Standart kurulum ve temel GA4 / dönüşüm etiketleri çoğu projede 3–7 iş günü içinde tamamlanır. Çoklu domain, karmaşık data layer veya özel SPA senaryolarında süre, keşif ve test kapsamına göre uzayabilir.",
  },
  {
    q: "SPA uyumlu mu?",
    a: "Evet. Next.js, React ve benzeri SPA / hibrit yapılarda History Change, Custom Event ve dataLayer.push akışlarıyla sayfa görüntülemeleri ve funnel adımlarını doğru şekilde ölçecek tetikleyici mimarisi kuruyoruz.",
  },
];

const protocolSteps = [
  {
    num: "01",
    title: "Container Kurulumu",
    desc: "Üretim ve test ortamları için GTM konteyner yapısı, izinler ve sürümleme disiplini; gerekiyorsa server-side veya çoklu konteyner stratejisi.",
    icon: Box,
  },
  {
    num: "02",
    title: "Data Layer Mühendisliği",
    desc: "E-ticaret, lead formları ve içerik etkileşimleri için tutarlı, dokümante edilmiş data layer şeması; geliştirici ekibinizle uyumlu isimlendirme ve tip güvenliği.",
    icon: Layers,
  },
  {
    num: "03",
    title: "Tag Konfigürasyonu",
    desc: "GA4, Google Ads, Meta, LinkedIn ve özel piksellerin tekilleştirilmiş kurulumu; çift sayım ve parametre kaybını önleyen standartlar.",
    icon: Tags,
  },
  {
    num: "04",
    title: "Trigger Mantığı",
    desc: "Sayfa, tıklama, scroll, form ve SPA gezinmesi için koşullu tetikleyiciler; consent mode ve kullanıcı onayı senaryolarına uyumlu filtreler.",
    icon: GitBranch,
  },
  {
    num: "05",
    title: "Test & Debugging",
    desc: "Preview mode, Tag Assistant, GTM debug ve GA4 DebugView ile doğrulama; yayın öncesi kontrol listesi ve canlı ortam izleme önerileri.",
    icon: Bug,
  },
];

export default function GoogleTagManagerPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Google Tag Manager Kurulumu",
            provider: { "@type": "LocalBusiness", name: "SEOROAS" },
            description:
              "Google Tag Manager ile merkezi etiket yönetimi, data layer tasarımı, tetikleyici mantığı ve test süreçleri dahil profesyonel kurulum hizmeti.",
            serviceType: "GTM Setup",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]}
      />

      <SubpageHero
        breadcrumb={[
          { name: "Hizmetler", url: "/hizmetler" },
          {
            name: "Google Tag Manager",
            url: "/hizmetler/google-tag-manager",
          },
        ]}
        badge="Google Tag Manager"
        title={
          <>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              Hassas Takip
            </span>{" "}
            Altyapısı
          </>
        }
        subtitle="Google Tag Manager ile ölçüm yığınınızı tek merkezde toplayın; data layer ve tetikleyici mimarisiyle her etkinliği doğru zamanda, doğru bağlamda yakalayın."
      >
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-bold text-on-primary transition-opacity hover:opacity-90"
          >
            Teklif Al
            <ArrowRight className="h-5 w-5" strokeWidth={2} />
          </Link>
          <Link
            href="#uygulama-protokolu"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-outline-variant/40 bg-surface-container-low px-8 py-4 font-bold text-on-background transition-colors hover:bg-surface-container-lowest"
          >
            Uygulama Protokolü
          </Link>
        </div>
      </SubpageHero>

      {/* Benefits Bento */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] text-on-background mb-4">
              Neden GTM?
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Pazarlama ve ürün ekiplerinin kod değişikliği beklemeden güvenle
              iterasyon yapabilmesi için tasarlanmış üç temel kazanım.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-2xl bg-surface-container-lowest border border-outline-variant/10 p-8 md:p-10">
              <LayoutDashboard
                className="h-8 w-8 text-primary mb-5"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-bold text-on-background mb-3">
                Merkezi Yönetim
              </h3>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                Tüm piksel ve analitik etiketlerini tek konteynerde
                versiyonlayın; yayın akışını şeffaf ve geri alınabilir tutun.
              </p>
            </div>
            <div className="rounded-2xl bg-primary text-on-primary p-8 md:p-10 shadow-lg shadow-primary/20">
              <Zap className="h-8 w-8 mb-5 opacity-95" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3">Hızlı Sayfa Yükleme</h3>
              <p className="text-on-primary/85 text-sm md:text-base leading-relaxed">
                Asenkron yükleme ve gereksiz tekrarları keserek script
                maliyetini düşürün; vitals dostu bir etiket sırası kurun.
              </p>
            </div>
            <div className="rounded-2xl bg-surface-container-lowest border border-outline-variant/10 p-8 md:p-10">
              <BarChart3
                className="h-8 w-8 text-primary mb-5"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-bold text-on-background mb-3">
                Doğru Veri
              </h3>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                Standart data layer ile parametre kaybını önleyin; raporlarda
                güvenilir funnel ve gelir eşlemesi elde edin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Protocol */}
      <section
        id="uygulama-protokolu"
        className="py-16 md:py-32 px-6 md:px-8 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
                Yol Haritası
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] text-on-background mb-4">
                Uygulama Protokolü
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                Keşiften canlıya kadar her adımda ölçüm kalitesini ve
                geliştirici verimliliğini birlikte ele alıyoruz.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-0">
            {protocolSteps.map((step) => (
              <div
                key={step.num}
                className="border-l-2 border-outline-variant/30 pl-6 md:pl-10 pb-12 md:pb-16 last:pb-0 relative"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-bold tracking-widest text-primary">
                    {step.num}
                  </span>
                  <step.icon
                    className="h-5 w-5 text-on-surface-variant"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-on-background mb-3">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-sm md:text-base max-w-2xl">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 px-6 md:px-8 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] text-center mb-10 md:mb-16 text-on-background">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-3 md:space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/10 shadow-sm"
              >
                <summary className="list-none p-5 md:p-6 flex justify-between items-center cursor-pointer font-bold text-sm md:text-base text-on-background [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown className="h-5 w-5 text-primary shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-on-surface-variant leading-relaxed text-sm md:text-base border-t border-outline-variant/10 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.04em] text-on-background mb-4 md:mb-6">
            Hassas Takibe Hazır mısınız?
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto">
            Projeniz için GTM mimarisi ve kurulum kapsamını birlikte netleştirelim.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-4 md:py-5 font-bold text-on-primary text-lg transition-transform hover:scale-[1.02] shadow-lg shadow-primary/25"
          >
            İletişime Geç
            <ArrowRight className="h-5 w-5" strokeWidth={2} />
          </Link>
        </div>
      </section>
    </>
  );
}
