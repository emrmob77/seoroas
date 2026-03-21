import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "Antalya SEO Ajansı",
  description:
    "Antalya'nın turizm ve hizmet sektöründe dijital görünürlüğünüzü artırıyoruz. Otelcilik, sağlık turizmi ve gayrimenkul odaklı SEO hizmeti.",
  path: "/antalya-seo-ajansi",
});

const services = [
  {
    title: "Turizm SEO Stratejisi",
    desc: "Otel, tatil köyü ve tur operatörleri için çok dilli arama motoru optimizasyonu. İngilizce, Almanca ve Rusça hedefleme.",
  },
  {
    title: "Sağlık Turizmi SEO",
    desc: "Antalya'nın büyüyen sağlık turizmi sektörü için uluslararası anahtar kelime stratejisi ve dönüşüm optimizasyonu.",
  },
  {
    title: "Gayrimenkul SEO",
    desc: "Antalya'da yabancı yatırımcılara yönelik gayrimenkul arama sıralaması ve çok dilli landing page optimizasyonu.",
  },
  {
    title: "Yerel İşletme SEO",
    desc: "Restoranlar, cafeler ve yerel hizmet sağlayıcılar için Google Haritalar sıralaması ve yerel arama optimizasyonu.",
  },
];

const stats = [
  { value: "45+", label: "Antalya'daki Aktif Müşteri" },
  { value: "%380", label: "Turizm Sezonu Trafik Artışı" },
  { value: "12+", label: "Dil ve Pazar Hedeflemesi" },
];

const faqItems = [
  {
    q: "Antalya'da SEO neden turizm odaklı olmalı?",
    a: "Antalya, yılda 15 milyondan fazla turist ağırlayan Türkiye'nin turizm başkentidir. Otelcilik, sağlık turizmi, gayrimenkul ve eğlence sektörleri dijital aramalardan büyük pay almaktadır. SEO stratejisi bu uluslararası talebe uygun çok dilli ve sezonsal olarak optimize edilmelidir.",
  },
  {
    q: "Antalya'da çok dilli SEO nasıl yapılır?",
    a: "Antalya'nın turist profili Almanya, Rusya, İngiltere ve Orta Doğu ağırlıklıdır. Her dil için ayrı URL yapısı, hreflang etiketleri ve yerelleştirilmiş içerik stratejisi uygulanır. SEOROAS olarak 12'den fazla dilde SEO optimizasyonu sunuyoruz.",
  },
  {
    q: "Antalya SEO hizmeti fiyatları nedir?",
    a: "Antalya'daki SEO hizmet fiyatları hedef pazara, dil sayısına ve sektörel rekabete göre değişir. Turizm sezonu öncesi erken başlayan kampanyalar daha maliyet-etkin sonuçlar verir. Detaylı fiyatlandırma için ücretsiz analiz talep edin.",
  },
  {
    q: "Antalya'da sağlık turizmi SEO'su nasıl çalışır?",
    a: "Sağlık turizmi SEO'su, 'dental implant Turkey', 'hair transplant Antalya' gibi yüksek ticari değerli uluslararası anahtar kelimeleri hedefler. Güven sinyalleri, hasta yorumları ve before-after içerikleri ile dönüşüm oranı optimize edilir.",
  },
  {
    q: "Antalya'da SEO sonuçları sezona göre değişir mi?",
    a: "Evet, Antalya'da turizm sektöründe sezonsal arama hacmi değişimi %300'e kadar çıkabilir. Kış aylarında sağlık turizmi ve gayrimenkul aramaları artarken, yaz aylarında otel ve tatil aramaları zirve yapar. SEO stratejisi bu sezonsal dinamiklere göre planlanmalıdır.",
  },
];

export default function AntalyaSeoAjansiPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SEOROAS - Antalya SEO Ajansı",
            description:
              "Antalya merkezli profesyonel SEO ajansı. Turizm SEO, sağlık turizmi optimizasyonu ve çok dilli strateji hizmetleri.",
            areaServed: {
              "@type": "City",
              name: "Antalya",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Antalya",
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
      <header className="relative pt-28 md:pt-36 pb-12 md:pb-20 px-5 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 -z-10"
          style={{
            backgroundImage:
              "radial-gradient(#acb3b8 0.5px, transparent 0.5px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-10">
          <Breadcrumb
            items={[{ name: "Antalya SEO Ajansı", url: "/antalya-seo-ajansi" }]}
          />
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">
              Antalya Bölgesi Aktif
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-[4.5rem] font-extrabold tracking-[-0.06em] leading-[0.95] text-on-surface max-w-4xl">
            Antalya{" "}
            <span className="text-primary italic">SEO</span> Ajansı.
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
            Türkiye&apos;nin turizm başkenti Antalya&apos;da uluslararası
            görünürlüğünüzü maksimize ediyoruz. Turizm, sağlık turizmi ve
            gayrimenkul sektörlerinde çok dilli SEO stratejileri.
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
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Antalya SEO Hizmetleri
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                Akdeniz&apos;in Dijital Vitrini.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-light">
              Antalya&apos;nın uluslararası turizm pazarına uygun çok dilli ve
              sezonsal SEO stratejileri.
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
      <section className="py-16 md:py-32 px-5 md:px-8 bg-[#0c0e10] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-24 items-center">
            <div className="md:col-span-1 space-y-6">
              <h2 className="text-4xl font-black tracking-tight leading-tight">
                Uluslararası Pazarda Dijital Hakimiyet.
              </h2>
              <p className="text-white/60 font-light">
                Antalya&apos;nın turizm ve hizmet sektöründeki müşterilerimizin
                elde ettiği uluslararası sonuçlar.
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
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 md:mb-20 text-center">
            <h2 className="text-4xl font-extrabold tight-tracking mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-on-surface-variant font-light">
              Antalya SEO hizmetimiz hakkında merak edilenler.
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
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-8 md:p-16 lg:p-32 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-primary tight-tracking">
              Antalya&apos;da Uluslararası Görünürlüğünüzü Artırın.
            </h2>
            <p className="text-on-primary/70 text-xl font-light max-w-2xl mx-auto">
              Turizm ve hizmet sektörüne özel çok dilli SEO stratejinizi
              birlikte oluşturalım.
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
