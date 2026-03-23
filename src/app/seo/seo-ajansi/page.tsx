import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateDynamicSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicSeoMetadata({
    title: "SEO Ajansı — Profesyonel & Sonuç Odaklı SEO",
    description:
      "Veri odaklı SEO stratejileri, şeffaf raporlama ve ölçülebilir sonuçlar. Organik trafiğinizi ve gelirlerinizi profesyonel SEO ajansı ile artırın.",
    path: "/seo/seo-ajansi",
  });
}

const processSteps = [
  {
    step: "01",
    title: "SEO Audit & Analiz",
    desc: "Sitenizin teknik altyapısını, içerik yapısını, backlink profilini ve rakip durumunu kapsamlı şekilde analiz ediyoruz.",
  },
  {
    step: "02",
    title: "Strateji & Yol Haritası",
    desc: "Sektörünüze ve hedeflerinize özel, veriye dayalı bir SEO stratejisi ve aylık yol haritası oluşturuyoruz.",
  },
  {
    step: "03",
    title: "Uygulama & Optimizasyon",
    desc: "On-page, teknik SEO, içerik üretimi ve link building çalışmalarını paralel olarak yürütüyoruz.",
  },
  {
    step: "04",
    title: "Ölçümleme & Raporlama",
    desc: "Haftalık ve aylık performans raporlarıyla ilerlemeyi şeffaf bir şekilde takip ediyoruz.",
  },
];

const differentiators = [
  {
    title: "Veri Odaklı Yaklaşım",
    desc: "Her kararımız veriye dayanır. Google Analytics, Search Console ve üçüncü parti araçlarla sürekli ölçümleme yapıyoruz.",
  },
  {
    title: "Şeffaf Raporlama",
    desc: "Ayda bir detaylı performans raporu, haftalık durum güncellemesi ve 7/24 erişilebilir dashboard.",
  },
  {
    title: "ROI Odaklı Strateji",
    desc: "Sadece sıralama değil, gerçek iş sonuçları odaklı çalışıyoruz. Organic revenue ve lead artışı birincil KPI'larımız.",
  },
  {
    title: "Sektörel Deneyim",
    desc: "E-ticaret, SaaS, B2B, sağlık ve finans sektörlerinde kanıtlanmış başarı hikâyeleri.",
  },
  {
    title: "Beyaz Şapka SEO",
    desc: "Google kurallarına %100 uyumlu, sürdürülebilir ve cezalanma riski olmayan yöntemler kullanıyoruz.",
  },
  {
    title: "Özel Ekip Ataması",
    desc: "Her müşteriye özel bir SEO uzmanı, içerik stratejisti ve teknik SEO mühendisi atanır.",
  },
];

const faqItems = [
  { q: "SEO ajansı ne iş yapar?", a: "SEO ajansı, web sitenizin arama motorlarında üst sıralarda yer alması için teknik optimizasyon, içerik stratejisi, link building ve performans takibi gibi kapsamlı hizmetler sunar. Amacımız organik trafiğinizi artırarak reklam maliyetlerinizi düşürmek ve sürdürülebilir büyüme sağlamaktır." },
  { q: "SEO ajansı seçerken nelere dikkat etmeliyim?", a: "Referanslar ve vaka çalışmaları, şeffaf raporlama politikası, sözleşme esnekliği, iletişim kalitesi ve kullandıkları metodolojilere dikkat edin. Garanti sıralama vaat eden ajanslardan uzak durun — SEO'da belirli bir sıralama garanti edilemez." },
  { q: "SEO sonuçları ne kadar sürede görülür?", a: "Sektöre ve rekabet durumuna göre değişmekle birlikte, ilk anlamlı sonuçlar genellikle 3-4 ay içinde görülmeye başlar. Tam kapsamlı sonuçlar ve sürdürülebilir büyüme için 6-12 aylık bir süreç planlanmalıdır." },
  { q: "SEO ajansı ile freelancer arasındaki fark nedir?", a: "Bir SEO ajansı; teknik SEO uzmanı, içerik stratejisti, link building uzmanı ve analiz ekibinden oluşan multidisipliner bir yapı sunar. Freelancer ise genellikle tek kişilik çalışır. Kapsamlı projeler için ajans yapısı daha etkili sonuçlar verir." },
  { q: "SEOROAS'ı diğer SEO ajanslarından ayıran nedir?", a: "Veri odaklı yaklaşımımız, şeffaf raporlama sistemimiz, ROI odaklı strateji anlayışımız ve özel ekip ataması modelimiz bizi farklı kılar. Her müşteriye özel stratejiler geliştiriyoruz ve sonuçları gerçek iş metrikleriyle ölçüyoruz." },
];

export default function SeoAjansiPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "SEOROAS SEO Ajansı",
            description: "Türkiye'nin lider SEO ajansı. Veri odaklı SEO stratejileri ile organik trafik ve gelir artışı.",
            provider: { "@type": "LocalBusiness", name: "SEOROAS" },
            areaServed: { "@type": "Country", name: "TR" },
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
          { name: "SEO Ajansı", url: "/seo/seo-ajansi" },
        ]}
        badge="Güvenilir SEO İş Ortağı"
        title={
          <>
            Türkiye'nin Lider{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              SEO Ajansı.
            </span>
          </>
        }
        subtitle="Veri odaklı stratejiler, şeffaf raporlama ve ölçülebilir sonuçlarla organik büyümenizi hızlandırıyoruz."
        stats={[
          { value: "150+", label: "Aktif Müşteri" },
          { value: "%94", label: "Müşteri Memnuniyeti" },
          { value: "7+", label: "Yıllık Deneyim" },
        ]}
      />

      {/* Process */}
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                Nasıl Çalışıyoruz?
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-light">
              Her projeyi sistematik bir süreçle yöneterek tutarlı ve ölçülebilir sonuçlar elde ediyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div
                key={s.step}
                className="bg-surface-container-lowest border-[0.5px] border-outline-variant/10 p-10 rounded-[2rem] hover:shadow-2xl transition-all duration-500 group"
              >
                <span className="text-6xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                  {s.step}
                </span>
                <h3 className="text-lg font-bold mb-3 text-on-background mt-4">
                  {s.title}
                </h3>
                <p className="text-on-surface-variant font-light text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 md:py-32 px-5 md:px-8 bg-[#0c0e10] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-20 max-w-2xl">
            <h2 className="text-4xl font-black tracking-tight leading-tight mb-4">
              Neden SEOROAS?
            </h2>
            <p className="text-white/60 font-light">
              Rakiplerden ayrılan stratejik yaklaşımımız ve sonuç odaklı çalışma prensibimiz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl"
              >
                <h3 className="text-lg font-bold mb-3">{d.title}</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
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
              SEO ajansı hizmetlerimiz hakkında merak edilenler.
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
              Organik Büyümenize Başlayın.
            </h2>
            <p className="text-on-primary/70 text-xl font-light max-w-2xl mx-auto">
              Ücretsiz SEO analizi ile sitenizin potansiyelini keşfedin ve büyüme yolculuğuna ilk adımı atın.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl"
            >
              Ücretsiz SEO Analizi
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
