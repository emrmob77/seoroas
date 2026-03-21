import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "E-Ticaret SEO Hizmeti — Organik Satış Artışı",
  description:
    "Ürün sayfası optimizasyonu, kategori SEO, schema markup ve dönüşüm optimizasyonu ile e-ticaret sitenizin organik satışlarını artırıyoruz.",
  path: "/seo/e-ticaret-seo",
});

const services = [
  { title: "Ürün Sayfası Optimizasyonu", desc: "Her ürün sayfasını benzersiz meta etiketleri, zengin içerik ve yapılandırılmış veri ile optimize ederek arama görünürlüğünü maksimize ediyoruz.", tags: ["Product Schema", "Rich Snippets", "CTR"], large: true },
  { title: "Kategori SEO", desc: "Kategori sayfalarınızı anahtar kelime odaklı yapılandırarak hem kullanıcı deneyimini hem de arama sıralamalarını iyileştiriyoruz.", tags: [] },
  { title: "Teknik Altyapı", desc: "Faceted navigation, pagination, canonical tag ve crawl budget yönetimi ile e-ticaret sitenizin teknik SEO altyapısını güçlendiriyoruz.", tags: [] },
  { title: "Schema Markup (Product)", desc: "Product, Offer, Review ve Breadcrumb schema'ları ile zengin arama sonuçları elde ederek tıklanma oranınızı artırıyoruz.", tags: [] },
  { title: "Blog & İçerik", desc: "Ürünlerinizle ilgili bilgilendirici blog içerikleri üreterek organik trafik çekiyor ve satın alma hunisine yönlendiriyoruz.", tags: [] },
  { title: "Dönüşüm Optimizasyonu", desc: "Organik trafiği satışa dönüştürmek için CTA, ürün açıklamaları ve sayfa deneyimini sürekli iyileştiriyoruz.", tags: [], wide: true },
];

const dashboardMetrics = [
  { label: "Organic Revenue", value: "+314", unit: "%", status: "Scaling" },
  { label: "Transactions", value: "+184", unit: "%", status: "Growing" },
  { label: "ROAS", value: "8.4", unit: "x", status: "Profitable" },
];

const faqItems = [
  { q: "E-ticaret SEO nedir?", a: "E-ticaret SEO, online mağazanızın ürün ve kategori sayfalarını arama motorlarında üst sıralara taşımak için uygulanan optimizasyon stratejilerinin bütünüdür. Organik arama trafiğini artırarak reklam maliyetlerinizi düşürür ve sürdürülebilir satış büyümesi sağlar." },
  { q: "Ürün sayfaları nasıl optimize edilir?", a: "Her ürün sayfasında benzersiz title ve description etiketleri, SEO uyumlu ürün açıklamaları, optimize edilmiş görseller, Product schema markup ve kullanıcı yorumları olmalıdır. Duplicate content'i önlemek için canonical tag kullanımı da kritik öneme sahiptir." },
  { q: "E-ticaret sitelerinde teknik SEO neden zor?", a: "E-ticaret siteleri genellikle binlerce ürün sayfası, filtreleme parametreleri, sayfalama ve dinamik URL yapıları içerir. Bu karmaşıklık crawl budget sorunlarına, duplicate content'e ve indeksleme problemlerine yol açabilir. Profesyonel teknik SEO yönetimi bu zorlukları aşmanızı sağlar." },
  { q: "Product schema markup ne işe yarar?", a: "Product schema markup, arama sonuçlarında fiyat, stok durumu, puan ve yorum sayısı gibi bilgilerin zengin snippet olarak gösterilmesini sağlar. Bu zengin sonuçlar tıklanma oranınızı %20-30 artırabilir ve rakiplerinizden görsel olarak ayrışmanızı sağlar." },
  { q: "E-ticaret SEO sonuçları ne kadar sürede görülür?", a: "İlk organik trafik artışları genellikle 2-3 ay içinde görülmeye başlar. Tam kapsamlı sonuçlar ve sürdürülebilir gelir artışı 6-12 ay arasında gerçekleşir. Rekabetçi sektörlerde bu süre daha uzun olabilir ancak ROI genellikle çok yüksektir." },
];

export default function ETicaretSeoPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "E-Ticaret SEO Hizmeti",
            provider: { "@type": "LocalBusiness", name: "SEOROAS" },
            description: "Ürün sayfası optimizasyonu, kategori SEO, schema markup ve dönüşüm optimizasyonu ile organik satış artışı.",
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

      {/* Hero */}
      <header className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 -z-10"
          style={{
            backgroundImage: "radial-gradient(#acb3b8 0.5px, transparent 0.5px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-7xl mx-auto space-y-12">
          <Breadcrumb
            items={[
              { name: "SEO Hizmetleri", url: "/seo-fiyatlari" },
              { name: "E-Ticaret SEO", url: "/seo/e-ticaret-seo" },
            ]}
          />
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">
              Revenue Engine: Active
            </span>
          </div>
          <h1 className="text-5xl md:text-[5rem] font-extrabold tracking-[-0.06em] leading-[0.95] text-on-surface max-w-4xl">
            E-Ticaret{" "}
            <span className="text-primary italic">SEO</span> ile Organik Satışlarınızı Artırın.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
            Ürün ve kategori sayfalarınızı optimize ederek organik arama
            trafiğini sürdürülebilir satışa dönüştürüyoruz.
          </p>
          <div className="flex flex-wrap gap-8 pt-6">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold tracking-tighter">+314%</span>
              <span className="text-[11px] uppercase tracking-widest text-on-surface-variant">
                Organic Revenue
              </span>
            </div>
            <div className="w-px h-12 bg-outline-variant/20 self-center" />
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold tracking-tighter">8.4x</span>
              <span className="text-[11px] uppercase tracking-widest text-on-surface-variant">
                ROAS
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Bento Grid Services */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Commerce Optimization
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                E-Ticaret Spektrumu.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-light">
              Online mağazanızın her katmanını optimize eden kapsamlı e-ticaret SEO çözümleri.
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

      {/* Dashboard */}
      <section className="py-32 px-8 bg-[#0c0e10] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-24 items-center">
            <div className="md:col-span-1 space-y-6">
              <h2 className="text-4xl font-black tracking-tight leading-tight">
                Ölçülebilir Mükemmellik.
              </h2>
              <p className="text-white/60 font-light">
                Organik gelir artışını ve dönüşüm performansını gerçek zamanlı verilerle izliyoruz.
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
      <section className="py-32 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-extrabold tight-tracking mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-on-surface-variant font-light">
              E-Ticaret SEO hizmetimiz hakkında merak edilenler.
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
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-16 md:p-32 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-primary tight-tracking">
              Organik Satışlarınızı Katlayın.
            </h2>
            <p className="text-on-primary/70 text-xl font-light max-w-2xl mx-auto">
              E-ticaret sitenizi organik büyüme motoruna dönüştürün, reklam bağımlılığından kurtulun.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl"
            >
              Ücretsiz E-Ticaret SEO Analizi
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
