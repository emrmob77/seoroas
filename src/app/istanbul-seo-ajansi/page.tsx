import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "İstanbul SEO Ajansı",
  description:
    "İstanbul'un en rekabetçi dijital pazarında markanızı öne çıkarıyoruz. Yerel SEO, teknik optimizasyon ve içerik stratejisi ile organik trafiğinizi artırıyoruz.",
  path: "/istanbul-seo-ajansi",
});

const services = [
  {
    title: "Yerel SEO Optimizasyonu",
    desc: "Google Business Profile yönetimi, yerel anahtar kelime stratejisi ve İstanbul'a özel harita sıralaması çalışmaları.",
  },
  {
    title: "İçerik Stratejisi",
    desc: "İstanbul'daki hedef kitlenize özel, arama niyetine uygun yüksek kaliteli içerik üretimi ve blog yönetimi.",
  },
  {
    title: "Teknik SEO",
    desc: "Site hızı, Core Web Vitals, mobil uyumluluk ve crawlability optimizasyonu ile altyapınızı güçlendiriyoruz.",
  },
  {
    title: "Backlink Stratejisi",
    desc: "İstanbul merkezli otoriter sitelerden doğal ve kalıcı backlink profili oluşturma çalışmaları.",
  },
];

const stats = [
  { value: "120+", label: "İstanbul'daki Aktif Müşteri" },
  { value: "%340", label: "Ortalama Organik Trafik Artışı" },
  { value: "Top 3", label: "Yerel Arama Sıralaması" },
];

const faqItems = [
  {
    q: "İstanbul'da SEO ajansı nasıl seçilir?",
    a: "İstanbul'da SEO ajansı seçerken referansları, vaka çalışmalarını ve sektörel deneyimi değerlendirin. Şeffaf raporlama sunan, garanti vaatleri yerine veri odaklı strateji izleyen ajansları tercih edin. SEOROAS olarak her müşterimize özel dashboard ve aylık performans raporu sunuyoruz.",
  },
  {
    q: "İstanbul SEO çalışması ne kadar sürede sonuç verir?",
    a: "İstanbul gibi yoğun rekabetin olduğu bir pazarda ilk sonuçlar genellikle 3-4 ay içinde görülmeye başlar. Kalıcı ve sürdürülebilir sıralama iyileştirmeleri 6-12 ay arasında tam olarak oturur. Rekabet seviyesi ve sektöre göre bu süre değişebilir.",
  },
  {
    q: "İstanbul'da yerel SEO neden önemli?",
    a: "İstanbul 16 milyonu aşkın nüfusuyla Türkiye'nin en büyük ticaret merkezidir. 'Yakınımdaki' aramaları her yıl %30 artmaktadır. Yerel SEO ile Google Haritalar'da üst sıralarda yer alarak fiziksel mağazanıza veya ofisinize yönlendirme trafiğini artırabilirsiniz.",
  },
  {
    q: "İstanbul SEO hizmeti fiyatları nedir?",
    a: "SEO hizmet fiyatları projenin kapsamına, sektörel rekabete ve hedeflere göre değişir. İstanbul'da küçük işletmeler için aylık paketler, kurumsal şirketler için kapsamlı stratejik planlar sunuyoruz. Ücretsiz analiz için bizimle iletişime geçebilirsiniz.",
  },
  {
    q: "İstanbul'daki hangi sektörlere SEO hizmeti veriyorsunuz?",
    a: "E-ticaret, sağlık, hukuk, gayrimenkul, eğitim, finans ve teknoloji başta olmak üzere İstanbul'daki her sektöre SEO hizmeti sunuyoruz. Her sektörün dinamiklerine uygun özelleştirilmiş stratejiler geliştiriyoruz.",
  },
];

export default function IstanbulSeoAjansiPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SEOROAS - İstanbul SEO Ajansı",
            description:
              "İstanbul merkezli profesyonel SEO ajansı. Yerel SEO, teknik optimizasyon ve içerik stratejisi hizmetleri.",
            areaServed: {
              "@type": "City",
              name: "İstanbul",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "İstanbul",
              addressCountry: "TR",
            },
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
            backgroundImage:
              "radial-gradient(#acb3b8 0.5px, transparent 0.5px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-7xl mx-auto space-y-12">
          <Breadcrumb
            items={[{ name: "İstanbul SEO Ajansı", url: "/istanbul-seo-ajansi" }]}
          />
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">
              İstanbul Bölgesi Aktif
            </span>
          </div>
          <h1 className="text-5xl md:text-[5rem] font-extrabold tracking-[-0.06em] leading-[0.95] text-on-surface max-w-4xl">
            İstanbul{" "}
            <span className="text-primary italic">SEO</span> Ajansı.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
            Türkiye&apos;nin ekonomik başkenti İstanbul&apos;da markanızı dijital
            arama sonuçlarının zirvesine taşıyoruz. 16 milyonluk devasa pazarda
            rakiplerinizin önüne geçin.
          </p>
          <div className="flex flex-wrap gap-8 pt-6">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                {i > 0 && (
                  <div className="w-px h-12 bg-outline-variant/20" />
                )}
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-bold tracking-tighter">
                    {s.value}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-on-surface-variant">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                İstanbul SEO Hizmetleri
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                Yerel Hakimiyet.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-light">
              İstanbul&apos;un 39 ilçesinde dijital varlığınızı güçlendiren kapsamlı
              SEO stratejileri.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-surface-container-lowest border-[0.5px] border-outline-variant/10 p-10 rounded-[2rem] hover:shadow-2xl transition-all duration-500"
              >
                <h3 className="text-lg font-bold mb-3 text-on-background">
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

      {/* Stats Dark Section */}
      <section className="py-32 px-8 bg-[#0c0e10] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-24 items-center">
            <div className="md:col-span-1 space-y-6">
              <h2 className="text-4xl font-black tracking-tight leading-tight">
                İstanbul Pazarında Kanıtlanmış Sonuçlar.
              </h2>
              <p className="text-white/60 font-light">
                İstanbul&apos;un en rekabetçi sektörlerinde müşterilerimize
                sağladığımız ölçülebilir büyüme.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl"
                >
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest">
                      Metrik
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-5xl font-black mb-2 tracking-tighter">
                    {s.value}
                  </div>
                  <p className="text-[10px] text-emerald-400 font-bold uppercase">
                    {s.label}
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
              İstanbul SEO hizmetimiz hakkında merak edilenler.
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
                  <svg
                    className="h-5 w-5 shrink-0 text-on-surface-variant transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
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
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-16 md:p-32 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-primary tight-tracking">
              İstanbul&apos;da Dijital Büyümenizi Başlatın.
            </h2>
            <p className="text-on-primary/70 text-xl font-light max-w-2xl mx-auto">
              İstanbul pazarına özel SEO stratejinizi birlikte oluşturalım.
              Ücretsiz analiz ile başlayın.
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
