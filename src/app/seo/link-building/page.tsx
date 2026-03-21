import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "Link Building Hizmeti — Otorite İnşası",
  description:
    "Guest posting, dijital PR, broken link building ve rakip backlink analizi ile domain otoritenizi sürdürülebilir şekilde yükseltiyoruz.",
  path: "/seo/link-building",
});

const services = [
  { title: "Guest Posting", desc: "Sektörünüzle ilgili yüksek otoriteli sitelerde kaliteli misafir yazıları yayımlayarak doğal ve güçlü backlinkler kazanıyoruz.", tags: ["DA 50+", "Dofollow", "Niche"], large: true },
  { title: "Dijital PR", desc: "Haber değeri taşıyan içerikler üreterek ulusal ve sektörel medya kuruluşlarından doğal backlinkler elde ediyoruz.", tags: [] },
  { title: "Broken Link Building", desc: "Rakip sitelerdeki kırık linkleri tespit edip kendi içeriklerinizle değiştirme fırsatlarını yakalıyoruz.", tags: [] },
  { title: "Niche Edits", desc: "Mevcut yüksek otoriteli içeriklere doğal bağlamda link yerleştirme ile hızlı otorite transferi sağlıyoruz.", tags: [] },
  { title: "Rakip Backlink Analizi", desc: "Rakiplerinizin link profilini analiz ederek kaçırdığınız fırsatları ve yeni link kaynaklarını belirliyoruz.", tags: [] },
  { title: "İçerik Odaklı Link Kazanımı", desc: "Linklenebilir varlıklar (infografikler, araştırmalar, araçlar) üreterek organik link çekimi sağlıyoruz.", tags: [], wide: true },
];

const dashboardMetrics = [
  { label: "DA Growth", value: "+34", unit: "", status: "Rising" },
  { label: "Referring Domains", value: "1,247", unit: "", status: "Growing" },
  { label: "Trust Flow", value: "68", unit: "", status: "Strong" },
];

const faqItems = [
  { q: "Link building nedir ve neden önemlidir?", a: "Link building, diğer web sitelerinden kendi sitenize bağlantılar kazanma sürecidir. Google, backlinkleri bir güven oyu olarak değerlendirir; kaliteli ve ilgili sitelerden gelen linkler arama sıralamalarınızı doğrudan iyileştirir." },
  { q: "Doğal link profili nasıl oluşturulur?", a: "Doğal link profili, farklı kaynaklardan çeşitli anchor text dağılımıyla zaman içinde kademeli olarak kazanılan linklerden oluşur. Spam link satın almak yerine editoryal bağlamda kazanılan linkler Google tarafından ödüllendirilir." },
  { q: "Guest posting hâlâ etkili mi?", a: "Evet, kaliteli ve sektörel olarak ilgili sitelerde yapılan guest posting hâlâ en etkili link building yöntemlerinden biridir. Önemli olan düşük kaliteli blog ağlarından kaçınıp gerçek okuyucu kitlesine sahip siteleri hedeflemektir." },
  { q: "Link building sonuçları ne kadar sürede görülür?", a: "Yeni kazanılan backlinklerin sıralama etkisi genellikle 4-12 hafta arasında hissedilir. Sürekli ve tutarlı link building çalışmaları ile domain otoritesindeki artış zamanla hızlanır ve kümülatif etki yaratır." },
  { q: "Zararlı backlinkler nasıl temizlenir?", a: "Google Search Console'daki disavow aracı ile zararlı backlinkleri reddedebilirsiniz. Öncelikle kapsamlı bir backlink denetimi yapıp spam, düşük kaliteli ve ilgisiz siteleri tespit ediyor, ardından disavow dosyası oluşturuyoruz." },
];

export default function LinkBuildingPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Link Building Hizmeti",
            provider: { "@type": "LocalBusiness", name: "SEOROAS" },
            description: "Guest posting, dijital PR, broken link building ve rakip backlink analizi ile domain otorite inşası.",
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
          { name: "SEO Hizmetleri", url: "/seo-fiyatlari" },
          { name: "Link Building", url: "/seo/link-building" },
        ]}
        badge="Authority Engine: Active"
        title={
          <>
            Link Building ile Domain{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              Otoritenizi
            </span>{" "}
            Yükseltin.
          </>
        }
        subtitle="Kaliteli ve sürdürülebilir backlink stratejileri ile sitenizin arama motoru otoritesini inşa ediyoruz."
        stats={[
          { value: "+34", label: "DA Growth" },
          { value: "1,247", label: "Referring Domains" },
        ]}
      />

      {/* Bento Grid Services */}
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Authority Building
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                Link Spektrumu.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-light">
              Sürdürülebilir ve beyaz şapka link building stratejileri ile otorite inşası.
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
                Link profilinizin büyümesini ve otorite artışını gerçek zamanlı verilerle izliyoruz.
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
              Link Building hizmetimiz hakkında merak edilenler.
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
              Otoritenizi İnşa Edin.
            </h2>
            <p className="text-on-primary/70 text-xl font-light max-w-2xl mx-auto">
              Kaliteli backlink stratejileri ile domain otoritenizi rakiplerinizin önüne taşıyın.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl"
            >
              Ücretsiz Backlink Analizi
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
