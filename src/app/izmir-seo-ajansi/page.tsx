import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "İzmir SEO Ajansı — Ege'nin Dijital Büyüme Ortağı",
  description:
    "İzmir'de profesyonel SEO hizmeti. E-ticaret, turizm ve ihracat sektörlerinde uzmanlaşmış organik büyüme stratejileri.",
  path: "/izmir-seo-ajansi",
});

const services = [
  {
    title: "E-Ticaret SEO",
    desc: "İzmir'in güçlü ihracat ve ticaret altyapısına uygun e-ticaret SEO stratejileri. Ürün sayfası optimizasyonu ve kategori mimarisi.",
  },
  {
    title: "Yerel Harita SEO",
    desc: "Alsancak, Konak, Bornova ve Karşıyaka başta olmak üzere İzmir'in tüm ilçelerinde Google Haritalar sıralaması.",
  },
  {
    title: "Çok Dilli SEO",
    desc: "İzmir'in uluslararası ticaret yapısına uygun Türkçe, İngilizce ve Almanca çok dilli SEO optimizasyonu.",
  },
  {
    title: "İçerik Pazarlama",
    desc: "İzmir'in turizm, gıda ve tekstil sektörlerine özel arama niyetine uygun içerik üretimi ve dağıtımı.",
  },
];

const stats = [
  { value: "70+", label: "İzmir'deki Aktif Müşteri" },
  { value: "%310", label: "Ortalama Organik Trafik Artışı" },
  { value: "2.5x", label: "Dönüşüm Oranı İyileştirme" },
];

const faqItems = [
  {
    q: "İzmir'de SEO ajansı ile çalışmanın avantajı nedir?",
    a: "İzmir'deki bir SEO ajansı yerel pazar dinamiklerini, Ege bölgesinin tüketici davranışlarını ve sektörel rekabeti yakından bilir. SEOROAS olarak İzmir'in ihracat odaklı iş yapısına uygun çok dilli ve yerel SEO stratejileri geliştiriyoruz.",
  },
  {
    q: "İzmir'de hangi sektörler SEO'dan en çok faydalanır?",
    a: "Turizm ve otelcilik, gıda ve tarım ürünleri, tekstil ve konfeksiyon, ihracat şirketleri, gayrimenkul ve eğitim sektörleri İzmir'de SEO'dan en yüksek getiriyi elde eden sektörlerdir.",
  },
  {
    q: "İzmir SEO hizmeti fiyatlandırması nasıl yapılır?",
    a: "Fiyatlandırma sektörel rekabet, hedef anahtar kelime sayısı ve projenin kapsamına göre belirlenir. İzmir'deki KOBİ'ler için uygun aylık paketlerimiz mevcuttur. Detaylı fiyat bilgisi için ücretsiz analiz talep edin.",
  },
  {
    q: "İzmir'de SEO sonuçları ne zaman görülür?",
    a: "İzmir pazarında orta düzey rekabet gösteren anahtar kelimelerde 2-3 ayda ilk sonuçlar alınır. Yüksek rekabetli ticari anahtar kelimelerde 4-6 ay içinde kalıcı sıralamalar elde edilir.",
  },
  {
    q: "İzmir'de e-ticaret sitesi için SEO gerekli mi?",
    a: "İzmir, Türkiye'nin üçüncü büyük e-ticaret pazarıdır. Ege bölgesindeki online alışveriş hacmi her yıl %25 büyümektedir. E-ticaret SEO ile ürünlerinizin arama sonuçlarında üst sıralarda görünmesini sağlıyoruz.",
  },
];

export default function IzmirSeoAjansiPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SEOROAS - İzmir SEO Ajansı",
            description:
              "İzmir merkezli profesyonel SEO ajansı. E-ticaret SEO, yerel optimizasyon ve çok dilli strateji hizmetleri.",
            areaServed: {
              "@type": "City",
              name: "İzmir",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "İzmir",
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

      <SubpageHero
        breadcrumb={[
          { name: "İzmir SEO Ajansı", url: "/izmir-seo-ajansi" },
        ]}
        badge="İzmir Bölgesi Aktif"
        title={
          <>
            İzmir{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              SEO
            </span>{" "}
            Ajansı.
          </>
        }
        subtitle="Ege'nin ticaret başkenti İzmir'de dijital görünürlüğünüzü maksimize ediyoruz. İhracat, turizm ve e-ticaret odaklı SEO stratejileri ile büyüyün."
        stats={stats}
      />

      {/* Services */}
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                İzmir SEO Hizmetleri
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                Ege&apos;nin Dijital Gücü.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-light">
              İzmir&apos;in uluslararası ticaret yapısına uygun, ihracat ve turizm
              odaklı SEO çözümleri.
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
                Ege Pazarında Kanıtlanmış Başarı.
              </h2>
              <p className="text-white/60 font-light">
                İzmir ve Ege bölgesindeki müşterilerimizin elde ettiği somut
                dijital büyüme sonuçları.
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
              İzmir SEO hizmetimiz hakkında merak edilenler.
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
              İzmir&apos;de Dijital Ticaretinizi Büyütün.
            </h2>
            <p className="text-on-primary/70 text-xl font-light max-w-2xl mx-auto">
              Ege pazarına özel SEO stratejinizi birlikte oluşturalım. Ücretsiz
              analiz ile başlayın.
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
