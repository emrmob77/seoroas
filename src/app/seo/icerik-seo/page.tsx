import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateDynamicSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicSeoMetadata({
    title: "İçerik SEO Hizmeti — Topic Cluster & İçerik Stratejisi",
    description:
      "Anahtar kelime araştırması, topic cluster, content gap analizi ve topikal otorite stratejisi ile organik trafiğinizi içerikle büyütün.",
    path: "/seo/icerik-seo",
  });
}

const services = [
  { title: "Keyword Araştırması", desc: "Arama hacmi, rekabet ve kullanıcı niyetini analiz ederek en yüksek ROI potansiyeline sahip anahtar kelimeleri belirliyoruz.", tags: ["Search Intent", "Volume", "KD"], large: true },
  { title: "İçerik Takvimi", desc: "Düzenli ve stratejik yayın planı oluşturarak organik büyümenizi sistematik hale getiriyoruz.", tags: [] },
  { title: "SEO Uyumlu Yazım", desc: "NLP optimizasyonu, semantik zenginlik ve okunabilirlik standartlarına uygun içerikler üretiyoruz.", tags: [] },
  { title: "Topic Cluster", desc: "Pillar page ve cluster content modeli ile topical authority inşa ederek geniş anahtar kelime gruplarında sıralama elde ediyoruz.", tags: [] },
  { title: "Content Gap Analizi", desc: "Rakiplerinizin sıralandığı ama sizin hedeflemediğiniz anahtar kelimeleri tespit ederek fırsatları yakalıyoruz.", tags: [] },
  { title: "İçerik Güncelleme", desc: "Mevcut içeriklerinizi güncel veri, yeni anahtar kelimeler ve geliştirilmiş yapıyla yenileyerek sıralama kaybını önlüyoruz.", tags: [], wide: true },
];

const dashboardMetrics = [
  { label: "Published Content", value: "240", unit: "+", status: "Scaling" },
  { label: "Avg. Position", value: "4.2", unit: "", status: "Top 5" },
  { label: "Organic Sessions", value: "+520", unit: "%", status: "Explosive" },
];

const faqItems = [
  { q: "İçerik SEO nedir?", a: "İçerik SEO, arama motorlarında üst sıralara çıkmak ve organik trafik çekmek amacıyla stratejik içerik üretimi ve optimizasyonu yapma sürecidir. Keyword araştırması, kullanıcı niyeti analizi ve semantik içerik zenginliği bu sürecin temel bileşenleridir." },
  { q: "Topic cluster modeli nasıl çalışır?", a: "Topic cluster modelinde, geniş bir konuyu kapsayan bir pillar page (ana sayfa) ve bu konunun alt başlıklarını detaylandıran cluster (küme) içerikleri oluşturulur. İç linklerle birbirine bağlanan bu yapı, Google'a topical authority sinyali verir ve tüm kümedeki sayfaların sıralamasını yükseltir." },
  { q: "Content gap analizi ne işe yarar?", a: "Content gap analizi, rakiplerinizin sıralandığı ancak sizin henüz hedeflemediğiniz anahtar kelimeleri ve konuları ortaya çıkarır. Bu analiz sayesinde kaçırdığınız trafik fırsatlarını yakalayabilir ve içerik stratejinizi veri odaklı şekillendirebilirsiniz." },
  { q: "Mevcut içerikler ne sıklıkla güncellenmelidir?", a: "Yüksek performanslı içerikler yılda en az 1-2 kez güncellenmelidir. Hızla değişen sektörlerde bu süre daha kısa olabilir. İçerik güncellemesi, sıralama kaybını önler, taze sinyal verir ve mevcut trafiği koruyarak artırır." },
  { q: "İçerik SEO sonuçları ne kadar sürede görülür?", a: "Yeni yayımlanan içerikler genellikle 2-6 ay içinde hedef anahtar kelimelerinde sıralanmaya başlar. Düzenli içerik üretimi ve güncelleme ile organik trafik kümülatif olarak büyür. İlk 6 aydan sonra büyüme hızı belirgin şekilde artar." },
];

export default function IcerikSeoPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "İçerik SEO Hizmeti",
            provider: { "@type": "LocalBusiness", name: "SEOROAS" },
            description: "Keyword araştırması, içerik takvimi, topic cluster ve content gap analizi ile stratejik içerik üretimi.",
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
          { name: "İçerik SEO", url: "/seo/icerik-seo" },
        ]}
        badge="İçerik Motoru: Aktif"
        title={
          <>
            İçerik{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              SEO
            </span>{" "}
            ile Organik Trafiğinizi Büyütün.
          </>
        }
        subtitle="Veri odaklı içerik stratejileri ile arama motorlarında görünürlüğünüzü artırıyor, sürdürülebilir organik büyüme sağlıyoruz."
        stats={[
          { value: "240+", label: "Published Content" },
          { value: "+520%", label: "Organic Sessions" },
        ]}
      />

      {/* Bento Grid Services */}
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Strategic Content
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                İçerik Spektrumu.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-light">
              Her aşamada veri odaklı kararlarla şekillendirilen kapsamlı içerik SEO çözümleri.
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
                İçerik performansını ve organik büyüme trendlerini gerçek zamanlı verilerle takip ediyoruz.
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
              İçerik SEO hizmetimiz hakkında merak edilenler.
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
              İçerik Stratejinizi Oluşturun.
            </h2>
            <p className="text-on-primary/70 text-xl font-light max-w-2xl mx-auto">
              Veri odaklı içerik stratejileri ile organik trafiğinizi sürdürülebilir şekilde büyütün.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl"
            >
              Ücretsiz İçerik Stratejisi
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
