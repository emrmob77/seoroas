import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateDynamicSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicSeoMetadata({
    title: "Teknik SEO Hizmeti — Site Hızı & Altyapı Optimizasyonu",
    description:
      "Core Web Vitals, crawl budget, site mimarisi, schema markup ve JS rendering optimizasyonu. Teknik altyapınızı arama motorlarına hazırlayın.",
    path: "/seo/teknik-seo",
  });
}

const services = [
  { title: "Core Web Vitals", desc: "LCP, INP ve CLS optimizasyonu ile hem kullanıcı deneyimini hem algoritmik tercihi güçlendiriyoruz.", tags: ["LCP", "INP", "CLS"], large: true },
  { title: "Crawlability", desc: "Robots.txt mantığı ve XML sitemap hiyerarşisi ile derin indeksleme sağlıyoruz.", tags: [] },
  { title: "Site Mimarisi", desc: "Düz site yapısı ve iç linkleme silolama ile link equity dağılımını koruyoruz.", tags: [] },
  { title: "Schema Markup", desc: "JSON-LD ile zengin arama sonuçları için varlık ilişkilerini tanımlıyoruz.", tags: [] },
  { title: "JS Rendering", desc: "SSR/ISR ile yüksek performanslı JavaScript uygulamaları için dinamik render çözümleri.", tags: [] },
  { title: "Hreflang", desc: "Çok bölgeli hedefleme ve dil çapraz referanslama mantığı ile uluslararası SEO.", tags: [], wide: true },
];

const cwvMetrics = [
  { label: "LCP", value: "0.8", unit: "s", status: "Optimal" },
  { label: "INP", value: "42", unit: "ms", status: "Instant" },
  { label: "CLS", value: "0.02", unit: "", status: "Stable" },
];

const faqItems = [
  { q: "Teknik SEO nedir?", a: "Teknik SEO, web sitenizin arama motorları tarafından taranabilirliğini, indekslenebilirliğini ve renderlanabilirliğini optimize eden altyapısal çalışmalar bütünüdür. Site hızı, mobil uyumluluk, yapılandırılmış veri ve güvenlik gibi faktörleri kapsar." },
  { q: "Single Page Application (SPA) siteler nasıl optimize edilir?", a: "React, Vue veya Angular ile oluşturulmuş SPA sitelerde bot user-agent'ları için server-side rendering (SSR) veya dinamik rendering uyguluyoruz. Bu sayede client-side render gecikmesi olmadan içerik indekslenir." },
  { q: "Teknik SEO denetimi neleri kapsar?", a: "Site hızı analizi, crawl budget optimizasyonu, broken link taraması, redirect chain düzeltmesi, schema markup doğrulama, mobile-first indeksleme kontrolü, Core Web Vitals ölçümü ve log file analizi dahildir." },
  { q: "Core Web Vitals neden önemli?", a: "Google 2021'den bu yana Core Web Vitals'ı sıralama faktörü olarak kullanıyor. LCP, INP ve CLS metrikleri hem kullanıcı deneyimini hem de arama sıralamanızı doğrudan etkiler." },
  { q: "Teknik SEO ne kadar sürer?", a: "İlk teknik denetim 1-2 hafta içinde tamamlanır. Kritik düzeltmeler ilk ay, kapsamlı optimizasyonlar 2-3 ay içinde uygulanır. Sürekli izleme ve iyileştirme devam eder." },
];

export default function TeknikSeoPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Teknik SEO Hizmeti",
            provider: { "@type": "LocalBusiness", name: "SEOROAS" },
            description: "Core Web Vitals, site hızı, crawlability ve yapılandırılmış veri optimizasyonu.",
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
          { name: "Teknik SEO", url: "/seo/teknik-seo" },
        ]}
        badge="Sistem Durumu: Optimize"
        title={
          <>
            Teknik{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              SEO
            </span>{" "}
            ile Güçlü Temeller.
          </>
        }
        subtitle="Web sitenizin altyapısını arama motorları için kusursuz hale getiriyor, tarama bütçesini optimize ediyoruz."
        stats={[
          { value: "99.9%", label: "İndeksleme Başarısı" },
          { value: "< 100ms", label: "Render Yanıtı" },
        ]}
      />

      {/* Bento Grid Services */}
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Precision Audit
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                Teknik Spektrum.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-light">
              Modern crawl ekosisteminin her vektörünü kapsayan kapsamlı altyapı optimizasyonu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className={`bg-surface-container-lowest border-[0.5px] border-outline-variant/10 p-10 rounded-[2rem] hover:shadow-2xl transition-all duration-500 ${
                  s.large ? "md:col-span-2 md:row-span-2" : ""
                } ${s.wide ? "md:col-span-2 flex items-center gap-8" : ""}`}
              >
                {s.large && <div className="pt-32" />}
                <div>
                  <h3 className={`${s.large ? "text-2xl" : "text-lg"} font-bold mb-3 text-on-background`}>
                    {s.title}
                  </h3>
                  <p className="text-on-surface-variant font-light text-sm leading-relaxed">
                    {s.desc}
                  </p>
                  {s.tags.length > 0 && (
                    <div className="flex gap-2 pt-4 flex-wrap">
                      {s.tags.map((tag) => (
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

      {/* Core Web Vitals Dashboard */}
      <section className="py-16 md:py-32 px-5 md:px-8 bg-[#0c0e10] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-24 items-center">
            <div className="md:col-span-1 space-y-6">
              <h2 className="text-4xl font-black tracking-tight leading-tight">
                Ölçülebilir Mükemmellik.
              </h2>
              <p className="text-white/60 font-light">
                Sitenizin sağlığını gerçek zamanlı izliyor, sıralamayı doğrudan etkileyen metrikleri ölçüyoruz.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {cwvMetrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl"
                >
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest">
                      {m.label}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-5xl font-black mb-2 tracking-tighter">
                    {m.value}
                    {m.unit && (
                      <span className="text-xl font-normal opacity-50 ml-1">
                        {m.unit}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-emerald-400 font-bold uppercase">
                    {m.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 md:mb-20 text-center">
            <h2 className="text-4xl font-extrabold tight-tracking mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-on-surface-variant font-light">
              Teknik SEO hizmetimiz hakkında merak edilenler.
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group bg-surface-container-low rounded-2xl p-6 cursor-pointer open:bg-surface-container-high transition-colors"
              >
                <summary className="list-none flex justify-between items-center font-bold text-base text-on-background [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <svg className="h-5 w-5 shrink-0 text-on-surface-variant transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-on-surface-variant leading-relaxed font-light text-sm">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-8 md:p-16 lg:p-32 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-primary tight-tracking">
              Altyapınızı Optimize Edin.
            </h2>
            <p className="text-on-primary/70 text-xl font-light max-w-2xl mx-auto">
              Dijital altyapınızı yüksek performanslı bir arama varlığına dönüştürün.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl"
            >
              Ücretsiz Teknik Denetim
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
