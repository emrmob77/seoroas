import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "Lokal SEO Hizmeti — Yerel Aramalarda Zirve",
  description:
    "Google My Business, yerel dizin kayıtları, NAP tutarlılığı ve Google Maps optimizasyonu ile bölgenizde görünür olun.",
  path: "/seo/lokal-seo",
});

const services = [
  { title: "Google My Business", desc: "GMB profilinizi tam optimize ederek yerel arama sonuçlarında ve Google Maps'te üst sıralarda yer almanızı sağlıyoruz.", tags: ["GMB", "Maps", "Local Pack"], large: true },
  { title: "Yerel Dizin Kayıtları", desc: "Sektörel ve bölgesel dizinlere tutarlı ve doğru bilgilerle kayıt yaparak yerel otoritenizi güçlendiriyoruz.", tags: [] },
  { title: "NAP Tutarlılığı", desc: "İsim, Adres ve Telefon bilgilerinizi tüm çevrimiçi platformlarda tutarlı hale getirerek güven sinyalleri oluşturuyoruz.", tags: [] },
  { title: "Yerel İçerik Stratejisi", desc: "Bölgenize ve hizmet alanınıza özel içerikler üreterek yerel arama sorgularında görünürlüğünüzü artırıyoruz.", tags: [] },
  { title: "Google Maps Optimizasyonu", desc: "Konum bazlı aramalarda harita paketinde üst sıralarda yer almanız için kapsamlı Maps optimizasyonu uyguluyoruz.", tags: [] },
  { title: "Review Yönetimi", desc: "Müşteri yorumlarını aktif yöneterek puanınızı artırıyor, olumsuz geri bildirimleri profesyonelce ele alıyoruz.", tags: [], wide: true },
];

const dashboardMetrics = [
  { label: "Local Pack Rankings", value: "12", unit: "", status: "Top 3" },
  { label: "GMB Views", value: "+280", unit: "%", status: "Surging" },
  { label: "Local Traffic", value: "+340", unit: "%", status: "Explosive" },
];

const faqItems = [
  { q: "Lokal SEO nedir?", a: "Lokal SEO, işletmenizin belirli bir coğrafi bölgedeki arama sonuçlarında görünürlüğünü artırmaya odaklanan optimizasyon çalışmalarıdır. 'Yakınımdaki' aramalarında ve Google Maps'te üst sıralarda yer almanızı sağlar." },
  { q: "Google My Business profili neden bu kadar önemli?", a: "Google My Business, yerel arama sonuçlarında ve Google Maps'te işletmenizin görünmesini sağlayan temel araçtır. Optimize edilmiş bir GMB profili, yerel 3'lü paket (Local Pack) sonuçlarında yer almanızı ve potansiyel müşterilere ulaşmanızı sağlar." },
  { q: "NAP tutarlılığı ne anlama gelir?", a: "NAP (Name, Address, Phone) tutarlılığı, işletme adınızın, adresinizin ve telefon numaranızın tüm çevrimiçi platformlarda birebir aynı olmasıdır. Google bu tutarlılığı güvenilirlik sinyali olarak değerlendirir ve yerel sıralamalarda önemli bir faktördür." },
  { q: "Müşteri yorumları sıralamayı etkiler mi?", a: "Evet, Google müşteri yorumlarının hem sayısını hem de kalitesini yerel sıralama faktörü olarak kullanır. Düzenli ve yüksek puanlı yorumlar almak yerel arama görünürlüğünüzü doğrudan artırır. Ayrıca yorumlara verilen yanıtlar da etkili bir faktördür." },
  { q: "Lokal SEO sonuçları ne kadar sürede görülür?", a: "GMB optimizasyonu ve yerel dizin kayıtları genellikle 2-4 hafta içinde etkisini göstermeye başlar. Rekabetçi bölgelerde tam sonuçlar 3-6 ay sürebilir. Sürekli review yönetimi ve içerik üretimi ile sonuçlar kalıcı hale gelir." },
];

export default function LokalSeoPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Lokal SEO Hizmeti",
            provider: { "@type": "LocalBusiness", name: "SEOROAS" },
            description: "Google My Business, yerel dizin kayıtları, NAP tutarlılığı ve Google Maps optimizasyonu.",
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
          { name: "Lokal SEO", url: "/seo/lokal-seo" },
        ]}
        badge="Local Radar: Active"
        title={
          <>
            Lokal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              SEO
            </span>{" "}
            ile Bölgenizde Görünür Olun.
          </>
        }
        subtitle="Yerel aramalarda ve Google Maps'te üst sıralarda yer alarak bölgenizdeki potansiyel müşterilere ulaşın."
        stats={[
          { value: "12", label: "Local Pack Rankings" },
          { value: "+280%", label: "GMB Views" },
        ]}
      />

      {/* Bento Grid Services */}
      <section className="py-16 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                Local Dominance
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                Yerel Spektrum.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-light">
              Bölgenizde rakipsiz görünürlük için kapsamlı yerel SEO çözümleri.
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
                Yerel görünürlüğünüzü ve bölgesel performansınızı gerçek zamanlı verilerle takip ediyoruz.
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
              Lokal SEO hizmetimiz hakkında merak edilenler.
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
              Bölgenizde Zirveye Çıkın.
            </h2>
            <p className="text-on-primary/70 text-xl font-light max-w-2xl mx-auto">
              Yerel aramalarda rakiplerinizin önüne geçin, bölgenizdeki müşterilere ulaşın.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl"
            >
              Ücretsiz Yerel SEO Analizi
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
