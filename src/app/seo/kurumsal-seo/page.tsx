import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "Kurumsal SEO Hizmeti — Enterprise SEO Stratejileri",
  description:
    "Büyük ölçekli web siteleri için enterprise SEO çözümleri. Teknik altyapı, içerik stratejisi, uluslararası SEO ve kurumsal raporlama ile organik büyüme.",
  path: "/seo/kurumsal-seo",
});

const services = [
  {
    title: "Enterprise Teknik SEO",
    desc: "Büyük ölçekli sitelerin karmaşık teknik yapılarını optimize ediyoruz. Crawl budget yönetimi, JavaScript rendering, hreflang ve site mimarisi konularında uzmanız.",
    tags: ["Crawl Budget", "JS Rendering", "Hreflang"],
    large: true,
  },
  {
    title: "Kurumsal İçerik Stratejisi",
    desc: "Sektörünüze özel, otorite inşa eden içerik kümeleri ve topical authority stratejileri geliştiriyoruz.",
    tags: [],
  },
  {
    title: "Uluslararası SEO",
    desc: "Çoklu dil ve bölge desteği ile global pazarlarda organik görünürlüğünüzü artırıyoruz.",
    tags: [],
  },
  {
    title: "Marka SERP Yönetimi",
    desc: "Marka aramaları için zengin SERP varlığı oluşturuyor, bilgi panelleri ve site bağlantılarını optimize ediyoruz.",
    tags: [],
  },
  {
    title: "Kurumsal Raporlama",
    desc: "C-level yöneticiler için özelleştirilmiş dashboard ve raporlar, KPI takibi ve ROI analizi sunuyoruz.",
    tags: [],
  },
  {
    title: "Çoklu Ekip Koordinasyonu",
    desc: "Geliştirme, pazarlama ve ürün ekiplerinizle entegre çalışarak SEO'yu kurumsal süreçlere dahil ediyoruz.",
    tags: [],
    wide: true,
  },
];

const dashboardMetrics = [
  { label: "Organic Sessions", value: "+287", unit: "%", status: "Enterprise Scale" },
  { label: "Revenue Impact", value: "4.2", unit: "M₺", status: "Measured ROI" },
  { label: "Pages Optimized", value: "12K", unit: "+", status: "Full Coverage" },
];

const faqItems = [
  { q: "Kurumsal SEO nedir?", a: "Kurumsal SEO, büyük ölçekli web sitelerinin (genellikle 10.000+ sayfa) arama motorlarında performansını artırmak için uygulanan stratejik ve teknik optimizasyon süreçleridir. Standart SEO'dan farklı olarak, karmaşık site mimarisi, çoklu ekip koordinasyonu ve enterprise-level raporlama gerektirir." },
  { q: "Kurumsal SEO standart SEO'dan nasıl farklıdır?", a: "Kurumsal SEO; ölçek (binlerce sayfa), karmaşıklık (birden fazla subdomain, dil ve bölge), organizasyonel zorluklar (çoklu ekip koordinasyonu) ve raporlama gereksinimleri (C-level) açısından standart SEO'dan ayrılır. Teknik çözümler daha sofistike, strateji daha uzun vadeli olmalıdır." },
  { q: "Hangi ölçekteki şirketler kurumsal SEO'ya ihtiyaç duyar?", a: "Genellikle 500+ ürün/sayfa içeren e-ticaret siteleri, çoklu lokasyona sahip markalar, birden fazla dilde hizmet veren şirketler ve yüksek organik trafik hedefleyen kurumlar kurumsal SEO hizmetine ihtiyaç duyar." },
  { q: "Kurumsal SEO projeleri ne kadar sürer?", a: "Kurumsal SEO sürekli bir süreçtir. İlk audit ve strateji oluşturma 4-6 hafta, ilk anlamlı sonuçlar 3-6 ay ve tam optimizasyon 12-18 ay sürer. Sürdürülebilir sonuçlar için devam eden bir çalışma planlanmalıdır." },
  { q: "Kurumsal SEO maliyeti nedir?", a: "Kurumsal SEO, site büyüklüğüne, sektöre ve hedeflere göre özelleştirilmiş bir fiyatlandırma ile sunulur. Standart paketlerden farklı olarak, özel kaynak ataması ve genişletilmiş hizmet kapsamı nedeniyle daha yüksek bütçe gerektirir. Detaylı bilgi için bizimle iletişime geçin." },
];

export default function KurumsalSeoPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Kurumsal SEO Hizmeti",
            provider: { "@type": "LocalBusiness", name: "SEOROAS" },
            description: "Büyük ölçekli web siteleri için enterprise SEO çözümleri.",
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
          { name: "Kurumsal SEO", url: "/seo/kurumsal-seo" },
        ]}
        badge="Enterprise Scale SEO"
        title={
          <>
            Kurumsal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              SEO
            </span>{" "}
            ile Büyük Ölçekte Büyüyün.
          </>
        }
        subtitle="Büyük ölçekli web sitelerinin karmaşık yapılarını optimize ederek enterprise-level organik büyüme sağlıyoruz."
        stats={[
          { value: "+287%", label: "Organic Sessions" },
          { value: "12K+", label: "Optimized Pages" },
        ]}
      />

      {/* Bento Grid Services */}
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Enterprise Solutions
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                Kurumsal SEO Çözümleri.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-light">
              Büyük ölçekli projelerin ihtiyaç duyduğu kapsamlı ve stratejik SEO hizmetleri.
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
                  {s.tags && s.tags.length > 0 && (
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

      {/* Dashboard */}
      <section className="py-16 md:py-32 px-5 md:px-8 bg-[#0c0e10] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-24 items-center">
            <div className="md:col-span-1 space-y-6">
              <h2 className="text-4xl font-black tracking-tight leading-tight">
                Enterprise Performans.
              </h2>
              <p className="text-white/60 font-light">
                Kurumsal projelerde elde ettiğimiz ölçülebilir sonuçlar.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {dashboardMetrics.map((m) => (
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
              Kurumsal SEO hizmetimiz hakkında merak edilenler.
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
              Kurumsal SEO Projenizi Başlatalım.
            </h2>
            <p className="text-on-primary/70 text-xl font-light max-w-2xl mx-auto">
              Enterprise-level SEO stratejisiyle markanızın dijital varlığını güçlendirin.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl"
            >
              Ücretsiz Kurumsal SEO Audit
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
