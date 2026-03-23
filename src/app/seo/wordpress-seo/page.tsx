import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown, CircleCheck } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "WordPress SEO Hizmeti — WP Sitenizi Optimize Edin",
  description:
    "WordPress sitenizde eklenti ayarlarının ötesine geçin: hız, teknik sertleştirme, içerik kümesi mimarisi ve sorgu optimizasyonu ile tam kapasite SEO.",
  path: "/seo/wordpress-seo",
});

const speedFeatures = [
  "LCP, FID ve CLS optimizasyonu ile Core Web Vitals odaklı deneyim",
  "Object Cache ve Redis ile veritabanı yükünü düşürme",
  "Görsel optimizasyonu ve WebP / modern format dağıtımı",
  "Critical CSS ve gecikmeli JS ile render yolunu kısaltma",
];

const pillarItems = [
  {
    title: "Semantic Authority Engine",
    desc: "Konu kümelerini varlık düzeyinde modelleyerek E-E-A-T sinyallerini güçlendiriyor, arama niyetleriyle hizalı anlamsal otorite inşa ediyoruz.",
    tags: ["Topic Map", "Entity SEO"],
    large: true,
  },
  {
    title: "Internal Linking Architecture",
    desc: "Hub–spoke yapısı, bağlamsal çapa metinleri ve crawl derinliği dengesiyle PageRank akışını kontrollü şekilde yönetiyoruz.",
    tags: ["Link Equity"],
  },
  {
    title: "Dynamic Content Mapping",
    desc: "Şablonlar, özel alanlar ve veri tabanlı içerik akışlarını tek bir haritada birleştirerek ölçeklenebilir üretim sağlıyoruz.",
    tags: ["ACF", "CPT"],
  },
];

const technicalColumns = [
  {
    title: "Yoast & RankMath Calibration",
    desc: "Şema çıktıları, indeks kuralları, canonical ve breadcrumb mantığını tema ve eklenti yığınınıza göre ince ayarlıyoruz; çakışan kuralları tek doğruluk kaynağına indiriyoruz.",
  },
  {
    title: "Technical Hardening",
    desc: "Güvenlik başlıkları, gereksiz endpoint ve REST yüzeylerinin sertleştirilmesi, önbellek katmanları ve CDN entegrasyonu ile hem bot hem kullanıcı için stabil altyapı.",
  },
  {
    title: "Query Optimization",
    desc: "N+1 sorgular, yavaş admin ve ön yüz sorguları, geçici tablolar ve meta sorgu yükünü azaltarak TTFB ve sunucu maliyetini düşürüyoruz.",
  },
];

const faqItems = [
  {
    q: "Yoast SEO mu, Rank Math mı daha iyi?",
    a: "İkisi de güçlü araçlardır; asıl fark, sitenizin teması, eklenti yığını ve iş akışınıza hangisinin daha az çakışmayla temiz şema ve meta ürettiğidir. Doğru kalibrasyon ve tek doğruluk kaynağı (canonical, breadcrumb, şema) ile her iki eklenti de üst düzey sonuç verebilir; seçimi veri ve denetimle yapıyoruz.",
  },
  {
    q: "WordPress’te hız optimizasyonu sıralamayı gerçekten etkiler mi?",
    a: "Evet. Core Web Vitals ve genel sayfa deneyimi, özellikle mobilde hem kullanıcı davranışını hem de arama motorunun sayfayı değerlendirme biçimini etkiler. Önbellek, görsel teslimatı, kritik CSS ve sorgu optimizasyonu birlikte ele alındığında hem skor hem gerçek kullanıcı metrikleri iyileşir.",
  },
  {
    q: "Teknik WordPress SEO kapsamına neler girer?",
    a: "Robots ve indeks kuralları, XML site haritası hiyerarşisi, yapılandırılmış veri, yönlendirme ve canonical zincirleri, hreflang (çok dilli), önbellek ve veritabanı performansı, güvenlik sertleştirmesi ve tema/eklenti kaynaklı çakışmaların giderilmesi teknik WP SEO’nun parçasıdır.",
  },
];

export default function WordPressSeoPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "WordPress SEO Hizmeti",
            provider: { "@type": "LocalBusiness", name: "SEOROAS" },
            description:
              "WordPress siteleri için hız, teknik sertleştirme, içerik kümesi mimarisi, Yoast/Rank Math kalibrasyonu ve sorgu optimizasyonu ile kapsamlı SEO.",
            serviceType: "WordPress SEO",
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
          { name: "SEO", url: "/seo" },
          { name: "WordPress SEO", url: "/seo/wordpress-seo" },
        ]}
        badge="WordPress · Kurumsal SEO"
        title={
          <>
            WordPress Sitenizin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              SEO Potansiyelini
            </span>{" "}
            Tam Kapasite Kullanın
          </>
        }
        subtitle="Standart eklenti ayarlarının ötesine geçin: tema ve eklenti yığınınızı teknik olarak hizalıyor, hız ve içerik mimarisini birlikte optimize ederek organik büyümeyi sürdürülebilir kılıyoruz."
      />

      {/* Hız optimizasyonu */}
      <section className="py-16 md:py-32 px-6 md:px-8 bg-surface-container-low/60 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">
              Performans
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-on-background tracking-[-0.04em] leading-tight">
              98/100 Mobile Score: Gecikmesiz Deneyim
            </h2>
            <p className="text-on-surface-variant font-light leading-relaxed">
              Laboratuvar skorlarını gerçek kullanıcı metrikleriyle birleştiriyor; WordPress özelinde
              önbellek, varlık teslimi ve sunucu tarafı darboğazlarını aynı plan içinde çözüyoruz.
            </p>
            <ul className="space-y-4 pt-2">
              {speedFeatures.map((line) => (
                <li key={line} className="flex gap-3 text-on-background">
                  <CircleCheck className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden />
                  <span className="text-sm md:text-base font-light text-on-surface-variant leading-relaxed">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64">
              <div
                className="absolute inset-0 rounded-full p-3 shadow-xl shadow-primary/10"
                style={{
                  background:
                    "conic-gradient(from -90deg, var(--color-primary) 0deg, var(--color-primary) 352.8deg, var(--color-surface-container) 352.8deg)",
                }}
                aria-hidden
              />
              <div className="absolute inset-3 rounded-full bg-surface-container-lowest border border-outline-variant/10 flex flex-col items-center justify-center text-center">
                <span className="text-4xl md:text-5xl font-black tracking-[-0.04em] text-on-background">
                  98
                </span>
                <span className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                  / 100 Mobile
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İçerik sütunu & küme */}
      <section className="py-16 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                İçerik mimarisi
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-[-0.04em] text-on-background">
                Sütun &amp; Küme Motoru
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-md font-light leading-relaxed">
              Anlamsal otorite, iç bağlantı ve dinamik şablon haritalarını tek bento düzeninde
              birleştirerek ölçeklenebilir WordPress SEO kuruyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
            {pillarItems.map((item) => (
              <div
                key={item.title}
                className={`bg-surface-container-lowest border-[0.5px] border-outline-variant/10 p-8 md:p-10 rounded-[2rem] hover:shadow-2xl transition-all duration-500 ${
                  item.large ? "md:col-span-2 md:row-span-2 flex flex-col justify-end min-h-[280px] md:min-h-[420px]" : "md:col-span-2"
                }`}
              >
                {item.large && <div className="flex-1 md:min-h-[4rem]" />}
                <div>
                  <h3 className={`${item.large ? "text-2xl md:text-3xl" : "text-xl"} font-bold mb-3 text-on-background tracking-[-0.04em]`}>
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant font-light text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  {item.tags.length > 0 && (
                    <div className="flex gap-2 pt-4 flex-wrap">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teknik WP düzeltmeleri */}
      <section className="py-16 md:py-32 px-6 md:px-8 bg-surface-container-low/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16 space-y-4">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">
              Teknik katman
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.04em] text-on-background">
              WordPress Teknik Düzeltmeler
            </h2>
            <p className="text-on-surface-variant font-light leading-relaxed">
              Eklenti markasından bağımsız, yığınınıza göre kalibre edilmiş teknik SEO müdahaleleri.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {technicalColumns.map((col) => (
              <div
                key={col.title}
                className="bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-8 md:p-10 soft-shadow"
              >
                <h3 className="text-lg md:text-xl font-bold text-on-background mb-4 tracking-[-0.04em]">
                  {col.title}
                </h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-16 md:py-32 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 md:mb-20 text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.04em] text-on-background">
              Sık Sorulan Sorular
            </h2>
            <p className="text-on-surface-variant font-light">
              WordPress SEO hizmeti hakkında merak edilenler.
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group bg-surface-container-low rounded-2xl p-6 cursor-pointer border border-outline-variant/10 open:border-primary/20 open:bg-surface-container-high transition-colors"
              >
                <summary className="list-none flex justify-between items-center gap-4 font-bold text-base text-on-background [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-on-surface-variant transition-transform duration-200 group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="mt-4 text-on-surface-variant leading-relaxed font-light text-sm">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-8 md:p-16 lg:p-24 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 30% 20%, var(--color-primary-dim), transparent 55%)",
            }}
          />
          <div className="relative z-10 space-y-8 md:space-y-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-primary tracking-[-0.04em]">
              WordPress SEO Yol Haritanızı Birlikte Çizelim
            </h2>
            <p className="text-on-primary/80 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Hız, teknik sağlık ve içerik mimarisini tek çatı altında ele alarak WP sitenizi arama
              sonuçlarında sürdürülebilir şekilde güçlendirin.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-surface-container-lowest text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-on-primary hover:scale-[1.02] transition-all shadow-2xl shadow-black/10"
            >
              İletişime Geçin
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
