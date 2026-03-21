import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "Ankara SEO Ajansı",
  description:
    "Ankara'da kurumsal ve kamu sektörüne yönelik profesyonel SEO hizmeti. Başkentin dijital pazarında markanızı üst sıralara taşıyoruz.",
  path: "/ankara-seo-ajansi",
});

const services = [
  {
    title: "Kurumsal SEO Stratejisi",
    desc: "Ankara'daki kamu kurumları, STK'lar ve büyük ölçekli işletmelere özel kurumsal SEO danışmanlığı ve strateji geliştirme.",
  },
  {
    title: "Yerel Arama Optimizasyonu",
    desc: "Ankara'nın merkez ilçeleri Çankaya, Kızılay ve Ulus başta olmak üzere yerel arama sonuçlarında üst sıralarda yer alın.",
  },
  {
    title: "B2B SEO",
    desc: "Ankara'nın güçlü B2B ekosisteminde karar vericilere ulaşan anahtar kelime stratejisi ve içerik optimizasyonu.",
  },
  {
    title: "Dijital PR & Link Building",
    desc: "Ankara merkezli haber siteleri, sektörel yayınlar ve otoriter platformlardan güçlü backlink profili oluşturma.",
  },
];

const stats = [
  { value: "85+", label: "Ankara'daki Aktif Müşteri" },
  { value: "%280", label: "Ortalama Organik Trafik Artışı" },
  { value: "1.", label: "Sayfa Sıralama Oranı" },
];

const faqItems = [
  {
    q: "Ankara'da SEO hizmeti neden farklıdır?",
    a: "Ankara, Türkiye'nin başkenti olarak kamu kurumları, savunma sanayi, teknoloji şirketleri ve üniversitelerle benzersiz bir iş ekosistemine sahiptir. SEO stratejileri bu kurumsal yapıya uygun, B2B odaklı ve güvenilirlik temelinde tasarlanmalıdır.",
  },
  {
    q: "Ankara'da SEO çalışması ne kadar sürer?",
    a: "Ankara'daki rekabet İstanbul'a göre daha dar kapsamlı olsa da kurumsal sektörlerde yoğundur. İlk sonuçlar 2-3 ay içinde görülür, kalıcı sıralamalar 4-8 ay arasında stabilize olur.",
  },
  {
    q: "Ankara'da hangi sektörlere SEO hizmeti veriyorsunuz?",
    a: "Savunma sanayi, bilişim teknolojileri, eğitim, sağlık, hukuk, inşaat ve kamu ihaleleri gibi Ankara'nın güçlü sektörlerinde uzmanlaşmış SEO hizmeti sunuyoruz.",
  },
  {
    q: "Ankara SEO ajansı seçerken nelere dikkat edilmeli?",
    a: "Ankara'ya özel sektörel bilgi, kurumsal referanslar, şeffaf raporlama ve ölçülebilir KPI'lar sunan ajansları tercih edin. SEOROAS olarak Ankara'daki 85'ten fazla müşterimizle kanıtlanmış sonuçlar sunuyoruz.",
  },
  {
    q: "Ankara'da yerel SEO'nun işletmelere faydası nedir?",
    a: "Ankara 5.7 milyonluk nüfusuyla Türkiye'nin ikinci büyük şehridir. Yerel SEO ile Google Haritalar ve yerel arama sonuçlarında öne çıkarak Ankara'daki potansiyel müşterilerinize doğrudan ulaşabilirsiniz.",
  },
];

export default function AnkaraSeoAjansiPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SEOROAS - Ankara SEO Ajansı",
            description:
              "Ankara merkezli profesyonel SEO ajansı. Kurumsal SEO, yerel optimizasyon ve B2B stratejisi hizmetleri.",
            areaServed: {
              "@type": "City",
              name: "Ankara",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ankara",
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
            items={[{ name: "Ankara SEO Ajansı", url: "/ankara-seo-ajansi" }]}
          />
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">
              Ankara Bölgesi Aktif
            </span>
          </div>
          <h1 className="text-5xl md:text-[5rem] font-extrabold tracking-[-0.06em] leading-[0.95] text-on-surface max-w-4xl">
            Ankara{" "}
            <span className="text-primary italic">SEO</span> Ajansı.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
            Başkentin kurumsal gücünü dijitale taşıyoruz. Kamu, savunma sanayi
            ve teknoloji sektörlerinde Ankara&apos;nın en güvenilir SEO partneri.
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
                Ankara SEO Hizmetleri
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                Kurumsal Güç.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-light">
              Ankara&apos;nın kurumsal yapısına uygun, veri odaklı SEO stratejileri
              ile dijital varlığınızı büyütüyoruz.
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
                Başkentte Dijital Otorite.
              </h2>
              <p className="text-white/60 font-light">
                Ankara&apos;nın kurumsal sektörlerinde müşterilerimize sağladığımız
                somut büyüme rakamları.
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
              Ankara SEO hizmetimiz hakkında merak edilenler.
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
              Ankara&apos;da Dijital Zirveye Ulaşın.
            </h2>
            <p className="text-on-primary/70 text-xl font-light max-w-2xl mx-auto">
              Başkentin dijital pazarında yerinizi alın. Ücretsiz SEO analizi
              ile stratejinizi keşfedin.
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
