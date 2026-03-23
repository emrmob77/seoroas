import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "Bursa SEO Ajansı — Sanayi & Ticaret SEO Çözümleri",
  description:
    "Bursa'da sanayi ve ticaret odaklı SEO hizmeti. Otomotiv, tekstil ve gıda sektörlerinde dijital görünürlük ve organik trafik artışı.",
  path: "/bursa-seo-ajansi",
});

const services = [
  {
    title: "Sanayi SEO Stratejisi",
    desc: "Bursa'nın otomotiv, makine ve tekstil sanayi ekosistemindeki üreticiler için sektörel SEO optimizasyonu.",
  },
  {
    title: "Google Haritalar Yönetimi",
    desc: "Osmangazi, Nilüfer ve Yıldırım başta olmak üzere Bursa'nın tüm ilçelerinde yerel harita sıralaması.",
  },
  {
    title: "B2B Lead Generation",
    desc: "Bursa'daki sanayi kuruluşları ve tedarikçiler için dijital müşteri kazanım stratejileri ve SEO odaklı lead üretimi.",
  },
  {
    title: "Teknik Altyapı Optimizasyonu",
    desc: "Kurumsal web sitesi ve B2B e-ticaret platformları için site hızı, mobil uyumluluk ve Core Web Vitals iyileştirme.",
  },
];

const stats = [
  { value: "55+", label: "Bursa'daki Aktif Müşteri" },
  { value: "%260", label: "Ortalama Organik Trafik Artışı" },
  { value: "4.8x", label: "Yatırım Getirisi (ROI)" },
];

const faqItems = [
  {
    q: "Bursa'da SEO ajansı ile çalışmak neden önemli?",
    a: "Bursa, Türkiye'nin dördüncü büyük şehri ve en önemli sanayi merkezlerinden biridir. Otomotiv, tekstil ve gıda sektörlerinde yoğun rekabet yaşanmaktadır. Yerel SEO ile Bursa'daki potansiyel müşterilerinize ve iş ortaklarınıza dijital kanallardan ulaşabilirsiniz.",
  },
  {
    q: "Bursa'da hangi sektörler SEO'ya en çok ihtiyaç duyar?",
    a: "Otomotiv yan sanayi, tekstil ve konfeksiyon, gıda üretimi, mobilya, makine imalatı ve turizm sektörleri Bursa'da SEO'dan en yüksek geri dönüşü alan sektörlerdir. Özellikle B2B ihracat yapan firmalar için SEO kritik öneme sahiptir.",
  },
  {
    q: "Bursa SEO hizmeti ne kadara mal olur?",
    a: "Bursa'daki SEO hizmet fiyatları projenin kapsamına ve sektörel rekabet düzeyine bağlıdır. KOBİ'ler için uygun aylık paketler, sanayi kuruluşları için kapsamlı kurumsal planlar sunuyoruz. Ücretsiz ön analiz için bizimle iletişime geçin.",
  },
  {
    q: "Bursa'da SEO çalışması ne zaman sonuç verir?",
    a: "Bursa'daki sanayi sektörlerinde rekabet düzeyi orta-yüksek seviyededir. İlk organik trafik artışları 2-3 ay içinde gözlemlenir. Hedef anahtar kelimelerde kalıcı sıralamalar 4-6 ay arasında elde edilir.",
  },
  {
    q: "Bursa'daki üretici firmalar için SEO neden gerekli?",
    a: "Bursa'daki üretici firmaların %70'i dijital kanallardan yeni müşteri kazanma potansiyeline sahiptir ancak çoğu bu fırsatı değerlendiremiyor. SEO ile 'Bursa otomotiv parça üretici' gibi yüksek ticari değerli aramalarda üst sıralarda yer alabilirsiniz.",
  },
];

export default function BursaSeoAjansiPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SEOROAS - Bursa SEO Ajansı",
            description:
              "Bursa merkezli profesyonel SEO ajansı. Sanayi SEO, yerel optimizasyon ve B2B lead generation hizmetleri.",
            areaServed: {
              "@type": "City",
              name: "Bursa",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bursa",
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
          { name: "Bursa SEO Ajansı", url: "/bursa-seo-ajansi" },
        ]}
        badge="Bursa Bölgesi Aktif"
        title={
          <>
            Bursa{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              SEO
            </span>{" "}
            Ajansı.
          </>
        }
        subtitle="Türkiye'nin sanayi devi Bursa'da üretim gücünüzü dijitale taşıyoruz. Otomotiv, tekstil ve gıda sektörlerinde arama motorlarının zirvesinde yer alın."
        stats={stats}
      />

      {/* Services */}
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Bursa SEO Hizmetleri
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                Sanayi Gücü, Dijital Strateji.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-light">
              Bursa&apos;nın üretim ve ticaret altyapısına özel SEO çözümleri ile
              sektörünüzde fark yaratın.
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
                Marmara&apos;nın Sanayi Merkezinde Sonuçlar.
              </h2>
              <p className="text-white/60 font-light">
                Bursa&apos;daki sanayi ve ticaret müşterilerimizin elde ettiği
                ölçülebilir dijital büyüme.
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
              Bursa SEO hizmetimiz hakkında merak edilenler.
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
              Bursa&apos;da Dijital Dönüşümünüzü Başlatın.
            </h2>
            <p className="text-on-primary/70 text-xl font-light max-w-2xl mx-auto">
              Sanayi gücünüzü dijitale taşıyın. Ücretsiz SEO analizi ile
              potansiyelinizi keşfedin.
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
