import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "SEO Fiyatları 2026 — Güncel Paketler & Karşılaştırma",
  description:
    "2026 güncel SEO fiyatları. Başlangıç, Profesyonel ve Kurumsal paket karşılaştırması ile bütçenize uygun organik büyüme planını seçin.",
  path: "/seo-fiyatlari",
});

const packages = [
  {
    name: "Başlangıç",
    price: "15.000",
    description: "Organik büyümeye ilk adım atan küçük işletmeler için.",
    popular: false,
    features: [
      "Teknik SEO denetimi",
      "10 keyword hedefleme",
      "On-page optimizasyon",
      "Google Search Console kurulumu",
      "Aylık performans raporu",
      "E-posta destek",
    ],
  },
  {
    name: "Profesyonel",
    price: "30.000",
    description: "Rekabetçi pazarlarda ciddi büyüme hedefleyen firmalar için.",
    popular: true,
    features: [
      "Başlangıç paketindeki her şey",
      "30 keyword hedefleme",
      "İçerik stratejisi ve üretimi (4 blog/ay)",
      "Link building (10 backlink/ay)",
      "Rakip analizi ve izleme",
      "Haftalık raporlama",
      "Özel Slack kanalı",
    ],
  },
  {
    name: "Kurumsal",
    price: "60.000",
    description: "Pazar liderliği hedefleyen büyük ölçekli işletmeler için.",
    popular: false,
    features: [
      "Profesyonel paketindeki her şey",
      "Sınırsız keyword hedefleme",
      "Özel SEO danışmanı",
      "E-ticaret SEO optimizasyonu",
      "Lokal SEO (çoklu lokasyon)",
      "Günlük raporlama",
      "Öncelikli destek (SLA 4 saat)",
    ],
  },
];

const faqItems = [
  {
    q: "SEO fiyatları neye göre belirlenir?",
    a: "SEO fiyatları projenin kapsamına, hedeflenen keyword sayısına, sektör rekabetine ve mevcut sitenin teknik durumuna göre belirlenir. Ücretsiz analiz sonrası size en uygun paketi öneriyoruz.",
  },
  {
    q: "En uygun SEO paketi hangisi?",
    a: "Küçük işletmeler ve yeni web siteleri için Başlangıç paketi idealdir. Rekabetçi sektörlerde hızlı büyüme hedefliyorsanız Profesyonel paket, pazar liderliği için Kurumsal paket öneriyoruz.",
  },
  {
    q: "SEO çalışması aylık mı yoksa tek seferlik mi?",
    a: "SEO sürekli bir süreçtir. Algoritmalar değişir, rakipler güncellenir ve içerik taze tutulmalıdır. Aylık bazda çalışıyoruz ancak sözleşme zorunluluğumuz yoktur.",
  },
  {
    q: "SEO yatırımının geri dönüşü ne kadar sürer?",
    a: "Genellikle 3-6 ay içinde somut sonuçlar görülür. 6. aydan sonra edinim maliyeti düşer ve organik trafik üstel büyümeye geçer. Müşterilerimizde ortalama ROI %340'tır.",
  },
  {
    q: "Sözleşme zorunlu mu?",
    a: "Hayır. Aylık bazda çalışır, istediğiniz zaman sonlandırabilirsiniz. Müşterilerimizin %98'i sonuçlardan memnun kalarak devam eder.",
  },
  {
    q: "Fiyatlara KDV dahil mi?",
    a: "Belirtilen fiyatlar KDV hariçtir. Fatura kesimi aylık olarak yapılır.",
  },
  {
    q: "Paket yükseltme veya düşürme yapabilir miyim?",
    a: "Evet, istediğiniz ay paket değişikliği yapabilirsiniz. Mevcut çalışmalar kesintisiz devam eder.",
  },
  {
    q: "İçerik üretimi fiyata dahil mi?",
    a: "Profesyonel ve Kurumsal paketlerde aylık blog içeriği dahildir. Başlangıç paketinde içerik stratejisi sunulur ancak üretim ayrıca faturalandırılır.",
  },
  {
    q: "Link building neden bu kadar önemli?",
    a: "Backlink'ler Google'ın en güçlü sıralama faktörlerinden biridir. Kaliteli backlinkler alan adınızın otoritesini artırarak tüm sayfalarınızın sıralamasını yükseltir.",
  },
  {
    q: "E-ticaret siteleri için ek maliyet var mı?",
    a: "Kurumsal pakette e-ticaret SEO dahildir. Diğer paketlerde ürün sayısı ve karmaşıklığa göre ek optimizasyon teklifi sunuyoruz.",
  },
  {
    q: "SEO garantisi veriyor musunuz?",
    a: "Google sıralama garantisi veren ajanslardan uzak durun. Biz performans garantisi sunuyoruz: ilk 30 günde memnun kalmazsanız para iade.",
  },
  {
    q: "Lokal SEO ayrı mı faturalandırılır?",
    a: "Kurumsal pakette lokal SEO dahildir. Diğer paketlerde Google My Business optimizasyonu ek hizmet olarak sunulur.",
  },
  {
    q: "Ödeme yöntemleri nelerdir?",
    a: "Banka havalesi, kredi kartı ve otomatik ödeme talimatı ile ödeme yapabilirsiniz.",
  },
  {
    q: "Rakiplerime göre hangi paketi seçmeliyim?",
    a: "Ücretsiz SEO analizinde rakip durumunuzu değerlendiriyor ve en uygun paketi öneriyoruz. Genellikle rekabetçi sektörlerde Profesyonel veya Kurumsal paket gerekir.",
  },
  {
    q: "Para iade politikanız nedir?",
    a: "İlk 30 gün içinde çalışmamızdan memnun kalmazsanız ödemenizi eksiksiz iade ediyoruz. Hiçbir soru sorulmaz.",
  },
];

function buildSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    ...packages.map((pkg) => ({
      "@context": "https://schema.org",
      "@type": "Offer",
      name: `SEOROAS ${pkg.name} SEO Paketi`,
      price: pkg.price.replace(".", ""),
      priceCurrency: "TRY",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: pkg.price.replace(".", ""),
        priceCurrency: "TRY",
        unitText: "MONTH",
      },
    })),
  ];
}

export default function FiyatlarPage() {
  return (
    <>
      <SchemaOrg schema={buildSchemas()} />

      <SubpageHero
        breadcrumb={[{ name: "SEO Fiyatları", url: "/seo-fiyatlari" }]}
        badge="Transparent Pricing"
        title={
          <>
            SEO Fiyatları{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              2026
            </span>
          </>
        }
        subtitle="Şeffaf fiyatlandırma, sözleşmesiz çalışma. İşletmenizin büyüklüğüne ve hedeflerine uygun paketi seçin."
      />

      {/* Packages */}
      <section className="py-12 md:py-20 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-[2rem] p-10 flex flex-col transition-all duration-500 ${
                  pkg.popular
                    ? "bg-primary text-on-primary shadow-2xl shadow-primary/20 scale-[1.02]"
                    : "bg-surface-container-lowest border-[0.5px] border-outline-variant/10 hover:shadow-xl"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white text-primary text-[10px] font-bold uppercase tracking-widest">
                    En Popüler
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <p
                    className={`text-sm font-light ${
                      pkg.popular ? "text-on-primary/70" : "text-on-surface-variant"
                    }`}
                  >
                    {pkg.description}
                  </p>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-black tracking-tighter">
                    ₺{pkg.price}
                  </span>
                  <span
                    className={`text-sm font-light ml-1 ${
                      pkg.popular ? "text-on-primary/60" : "text-on-surface-variant"
                    }`}
                  >
                    /ay
                  </span>
                </div>
                <ul className="space-y-3 mb-10 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`h-4 w-4 mt-0.5 shrink-0 ${
                          pkg.popular ? "text-on-primary/80" : "text-primary"
                        }`}
                      />
                      <span className={pkg.popular ? "text-on-primary/90" : ""}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/iletisim"
                  className={`w-full text-center py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:-translate-y-0.5 ${
                    pkg.popular
                      ? "bg-white text-primary hover:shadow-lg"
                      : "bg-primary text-on-primary hover:shadow-lg hover:shadow-primary/20"
                  }`}
                >
                  Paketi Seç
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 px-5 md:px-8 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 md:mb-20 text-center">
            <h2 className="text-4xl font-extrabold tight-tracking mb-4 text-on-background">
              Sık Sorulan Sorular
            </h2>
            <p className="text-on-surface-variant font-light">
              SEO fiyatlandırması hakkında merak ettikleriniz.
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group bg-surface-container-lowest rounded-2xl p-6 cursor-pointer open:bg-surface-container-high transition-colors"
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-8 md:p-16 lg:p-24 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold tight-tracking text-on-primary">
              Size Özel Teklif Alın
            </h2>
            <p className="text-on-primary/70 max-w-xl mx-auto font-light leading-relaxed">
              İşletmenizin ihtiyaçlarına özel SEO stratejisi ve fiyat teklifi
              için ücretsiz analiz başlatın.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl"
            >
              Ücretsiz Analiz Başlat
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
      </section>
    </>
  );
}
