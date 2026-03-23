import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "On-Page SEO Hizmeti — Sayfa İçi Optimizasyon",
  description:
    "Title tag, meta description, heading yapısı, iç linkleme ve içerik optimizasyonu ile her sayfanızın sıralama potansiyelini artırın.",
  path: "/seo/on-page-seo",
});

const services = [
  { title: "Meta Etiketleri", desc: "Title, description ve Open Graph etiketlerini anahtar kelime odaklı optimize ederek tıklanma oranınızı artırıyoruz.", tags: ["Title", "Description", "OG"], large: true },
  { title: "Başlık Yapısı (H1-H6)", desc: "Semantik başlık hiyerarşisi ile içerik sinyallerini güçlendiriyor, arama motorlarının sayfanızı anlamasını kolaylaştırıyoruz.", tags: [] },
  { title: "İç Linkleme", desc: "Stratejik iç link ağı ile link equity dağılımını optimize edip önemli sayfalarınıza otorite aktarıyoruz.", tags: [] },
  { title: "İçerik Optimizasyonu", desc: "TF-IDF ve NLP analiziyle içeriklerinizi rakiplerinizin önüne geçirecek şekilde zenginleştiriyoruz.", tags: [] },
  { title: "Görsel ALT Etiketleri", desc: "Tüm görsellere SEO uyumlu ALT ve title etiketleri ekleyerek görsel arama trafiğinizi artırıyoruz.", tags: [] },
  { title: "URL Yapısı", desc: "Temiz, kısa ve anahtar kelime içeren URL yapıları ile hem kullanıcı hem bot dostu navigasyon sağlıyoruz.", tags: [], wide: true },
];

const dashboardMetrics = [
  { label: "Keyword Coverage", value: "94", unit: "%", status: "Excellent" },
  { label: "Content Score", value: "92", unit: "/100", status: "Top Tier" },
  { label: "Internal Links", value: "847", unit: "", status: "Optimized" },
];

const faqItems = [
  { q: "On-Page SEO nedir?", a: "On-Page SEO, web sayfalarınızın içerik ve HTML kaynak kodunu optimize ederek arama motorlarında daha üst sıralarda yer almanızı sağlayan çalışmalardır. Meta etiketleri, başlık yapısı, içerik kalitesi ve iç linkleme gibi unsurları kapsar." },
  { q: "On-Page SEO ile Off-Page SEO arasındaki fark nedir?", a: "On-Page SEO sitenizin kendi bünyesindeki optimizasyonları kapsarken, Off-Page SEO dış bağlantılar ve sosyal sinyaller gibi site dışı faktörleri içerir. Her iki strateji birbirini tamamlar ve birlikte uygulandığında en iyi sonuçları verir." },
  { q: "Meta etiketleri neden bu kadar önemli?", a: "Meta title ve description etiketleri, arama sonuçlarında kullanıcılara gösterilen ilk bilgilerdir. Doğru optimize edilmiş meta etiketleri tıklanma oranınızı (CTR) doğrudan artırır ve arama motorlarına sayfa içeriğiniz hakkında net sinyal verir." },
  { q: "İç linkleme stratejisi nasıl oluşturulur?", a: "İç linkleme stratejisi, sitenizin en önemli sayfalarını belirleyip bu sayfalara diğer sayfalardan stratejik linkler oluşturmayı içerir. Topic cluster modeli ve silo yapısı kullanarak link equity akışını optimize ediyor, tarama derinliğini azaltıyoruz." },
  { q: "On-Page SEO sonuçları ne zaman görülür?", a: "On-Page SEO değişiklikleri genellikle Google tarafından birkaç gün ile birkaç hafta arasında indekslenir. Ancak sıralama etkilerinin tam olarak hissedilmesi 4-8 hafta sürebilir. Rekabetçi anahtar kelimelerde bu süre daha uzun olabilir." },
];

export default function OnPageSeoPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "On-Page SEO Hizmeti",
            provider: { "@type": "LocalBusiness", name: "SEOROAS" },
            description: "Meta etiketleri, başlık yapısı, iç linkleme ve içerik optimizasyonu.",
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
          { name: "On-Page SEO", url: "/seo/on-page-seo" },
        ]}
        badge="Content Layer: Active"
        title={
          <>
            On-Page{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              SEO
            </span>{" "}
            ile İçeriğinizi Zirveye Taşıyın.
          </>
        }
        subtitle="Sayfalarınızın her detayını arama motorları ve kullanıcılar için optimize ediyor, organik görünürlüğünüzü artırıyoruz."
        stats={[
          { value: "94%", label: "Keyword Coverage" },
          { value: "92/100", label: "Content Score" },
        ]}
      />

      {/* Bento Grid Services */}
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Content Optimization
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                İçerik Spektrumu.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-light">
              Sayfalarınızın her katmanını optimize eden kapsamlı on-page SEO çözümleri.
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
      <section className="py-16 md:py-32 px-5 md:px-8 bg-[#0c0e10] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-24 items-center">
            <div className="md:col-span-1 space-y-6">
              <h2 className="text-4xl font-black tracking-tight leading-tight">
                Ölçülebilir Mükemmellik.
              </h2>
              <p className="text-white/60 font-light">
                İçerik kalitesini ve optimizasyon seviyesini gerçek zamanlı verilerle takip ediyoruz.
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
              On-Page SEO hizmetimiz hakkında merak edilenler.
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
              İçeriğinizi Optimize Edin.
            </h2>
            <p className="text-on-primary/70 text-xl font-light max-w-2xl mx-auto">
              Sayfalarınızı arama motorları için mükemmelleştirin, organik trafiğinizi katlayın.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl"
            >
              Ücretsiz İçerik Analizi
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
