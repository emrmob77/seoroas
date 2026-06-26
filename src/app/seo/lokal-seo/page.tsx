import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { generateDynamicSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicSeoMetadata({
    title: "Lokal SEO Hizmeti — Google Haritalar & Yerel Arama",
    description:
      "Google Business Profile, yerel dizin yönetimi, NAP tutarlılığı ve bölgesel içerik stratejisi ile yakın çevrenizdeki müşterilere ulaşın.",
    path: "/seo/lokal-seo",
  });
}

const services = [
  { title: "Google Business Profile", desc: "Sıralamada en hızlı etki yaratan alan burası. Profili eksiksiz doldurmak yetmez; her hafta yeni fotoğraf, konum içeren güncelleme ve Q&A ile aktif tutmak gerekir. Pasif (dormant) profiller geriler, aktif ve zengin olanlar hem haritada hem Google'ın AI özetlerinde öne çıkar.", tags: ["GBP", "Maps", "Yerel Paket"], large: true },
  { title: "Yerel Dizin Kayıtları", desc: "Kalite niceliği yener: 50 sağlam yerel atıf (Yelp, sektörel dizinler, ticaret odası), 200 junk kayıttan daha güçlüdür. Müşterilerin gerçekten kullandığı dizinlere, tutarlı NAP ile kayıt yaparız.", tags: [] },
  { title: "NAP Tutarlılığı", desc: "İsim, adres ve telefon her platformda birebir aynı olmalı — format dahil. Eski sahipten kalan adres ya da tutarsız bilgiler Google'ın güvenini ve harita sıralamanı düşürür; hepsini tek doğru bilgiye hizalarız.", tags: [] },
  { title: "Konum Sayfaları & Yerel İçerik", desc: "Hedeflediğin her şehir için ayrı bir konum sayfası şart. Başlık, URL ve metada 'hizmet + şehir' kullanır, GBP kategorinle sayfayı eşleştiririz — 'nasıl yapılır' değil, doğrudan satın alma niyetli aramalar.", tags: [] },
  { title: "Google Maps Optimizasyonu", desc: "Harita sıralamasında üç şey belirleyici: yakınlık, kategori/sayfa uyumu ve itibar (yorum + aktivite). Bazı sektörlerde harita paketi organikten bile kritiktir; sinyalleri buna göre kurarız.", tags: [] },
  { title: "Review (Yorum) Yönetimi", desc: "Artık toplam yorum sayısı değil, tazelik (velocity) kazandırıyor: 90 günlük boşluk 'uyku' sinyali sayılıyor. Rakibin haftada 3-5 yorum alıyorsa sen de almalısın. Her müşteriden yorum ister, olumsuzlara 24 saatte profesyonelce cevap veririz.", tags: [], wide: true },
];

const dashboardMetrics = [
  { label: "Yerel Pakette", value: "12", unit: "", status: "İlk 3" },
  { label: "GBP Görüntülenme", value: "+280", unit: "%", status: "Yükseliyor" },
  { label: "Yerel Trafik", value: "+340", unit: "%", status: "Patlama" },
];

const faqItems = [
  { q: "Lokal SEO nedir?", a: "Lokal SEO, işletmenizin belirli bir coğrafi bölgedeki arama sonuçlarında görünürlüğünü artırmaya odaklanan optimizasyon çalışmalarıdır. 'Yakınımdaki' aramalarında ve Google Maps'te üst sıralarda yer almanızı sağlar." },
  { q: "Google Business Profile (GMB) neden bu kadar önemli?", a: "Yerel aramada ve haritada görünmenizi sağlayan temel araçtır; sıralamada en hızlı etki yaratan alandır. Profili eksiksiz doldurmak yetmez, her hafta fotoğraf ve konum içeren güncellemelerle aktif tutmak gerekir. Pasif profiller geriler; aktif ve zengin profiller hem haritada hem Google'ın AI özetlerinde öne çıkar." },
  { q: "Müşteri yorumları sıralamayı etkiler mi?", a: "Evet — ve artık toplam sayıdan çok tazelik (velocity) belirleyici. 2026'da 90 günlük yorum boşluğu 'uyku' sinyali sayılıyor. Rakiplerinizden daha çok ve daha düzenli yorum almak, her yoruma 24 saat içinde cevap vermek yerel sıralamayı doğrudan etkiler. Ani sahte yorum spike'larından ise kaçınmak gerekir; spam filtresini tetikler." },
  { q: "NAP tutarlılığı ne anlama gelir?", a: "NAP (Name, Address, Phone); işletme adınızın, adresinizin ve telefonunuzun tüm platformlarda birebir aynı olmasıdır — format dahil. Google bunu güven sinyali olarak okur. Eski sahipten kalan adres ya da tutarsız bilgiler hem harita sıralamasını hem AI özetlerindeki görünürlüğü düşürür." },
  { q: "Google işletme profilim neden askıya alınabilir?", a: "En sık nedenler: çok hızlı veya çok fazla değişiklik, yanıltıcı bilgi (sahte adres/isim), ani yorum spike'ları ve kural dışı kategori/içerik. Profili kararlı tutmak, gerçek bilgi kullanmak ve değişiklikleri ölçülü yapmak askıdan korur. Askıya alınmışsa doğru belgelerle itiraz sürecini biz yönetiriz." },
  { q: "Birden çok şehirde hizmet veriyorum, ne yapmalıyım?", a: "Her hedef şehir için ayrı bir konum sayfası açmak en etkili yöntemdir. Sayfa başlığı ve URL'inde 'hizmet + şehir' kullanır, GBP'nizi ilgili sayfaya linkler ve adresinizi footer'a koyarız. Böylece her bölgede ayrı ayrı görünür olursunuz." },
  { q: "Lokal SEO sonuçları ne kadar sürede görülür?", a: "GBP optimizasyonu, dizin kayıtları ve NAP düzeltmeleri genellikle 2-4 hafta içinde erken etkisini gösterir. Review velocity, içerik ve linklerle gerçek Local Pack hakimiyeti 3-6 ayda oturur; rekabetçi bölgelerde daha uzun sürer. Sürekli aktivite şarttır — duran profiller geriler." },
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
          { name: "SEO", url: "/seo" },
          { name: "Lokal SEO", url: "/seo/lokal-seo" },
        ]}
        badge="Lokal Radar: Aktif"
        title={
          <>
            Lokal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              SEO
            </span>{" "}
            ile Bölgenizde Görünür Olun.
          </>
        }
        subtitle="Biri telefonuna 'yakınımdaki [işiniz]' yazdığında çıkan ilk 3 işletmeden biri siz misiniz, yoksa rakipleriniz mi? Google Business Profile, yorumlar ve konum sayfalarıyla sizi yerel aramada ve haritada öne çıkarıyoruz."
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
                Yerel Hakimiyet
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-background">
                Yerel Spektrum.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-light">
              Google Business Profile&apos;dan konum sayfalarına kadar uçtan uca yerel SEO. Profili sıfırdan kurmak için{" "}
              <Link href="/blog/google-benim-isletmem-rehberi" className="text-primary font-medium hover:underline">
                Google Benim İşletmem rehberimize
              </Link>
              , şehre özel çalışma için{" "}
              <Link href="/istanbul-seo-ajansi" className="text-primary font-medium hover:underline">
                İstanbul
              </Link>{" "}
              ve{" "}
              <Link href="/ankara-seo-ajansi" className="text-primary font-medium hover:underline">
                Ankara
              </Link>{" "}
              sayfalarımıza bakabilirsiniz.
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
                {s.large && (
                  <div className="mb-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 p-5 max-w-sm">
                    <div className="flex items-center gap-1.5 mb-2">
                      <MapPin className="h-4 w-4 text-primary" aria-hidden />
                      <span className="text-[10px] font-bold uppercase tracking-wide text-primary">
                        Yerel Paket · İlk 3
                      </span>
                    </div>
                    <div className="text-base font-bold text-on-background leading-snug mb-1">
                      İşletmeniz
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-on-surface-variant">
                      <span className="text-amber-500 tracking-tight">★★★★★</span>
                      <span>4,9 (327 yorum) · 450 m · Açık</span>
                    </div>
                  </div>
                )}
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
