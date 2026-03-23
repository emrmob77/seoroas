import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Code,
  BarChart3,
  MapPin,
  Globe,
  MonitorSmartphone,
  Tag,
  ShoppingCart,
  CheckCircle,
  XCircle,
  Zap,
} from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "Dijital Pazarlama Hizmetleri — SEO & Analitik",
  description:
    "SEO danışmanlığı, teknik optimizasyon, performans pazarlama, lokal SEO ve takip altyapısı. Tek çatı altında dijital büyüme stratejileri.",
  path: "/hizmetler",
});

const allServices = [
  {
    icon: Search,
    title: "SEO Danışmanlığı & Strateji",
    desc: "Uzun vadeli organik değer için mimari planlar. Rekabet boşluk analizi ve pazar volatilitesine dayalı ROI modelleri oluşturuyoruz.",
    tags: ["Keyword Planlaması", "Rekabet Arbitrajı", "ROI Modellemesi"],
    href: "/seo",
  },
  {
    icon: Code,
    title: "Teknik SEO Mühendisliği",
    desc: "Site performansı için donanım düzeyinde mühendislik. Crawl sürtünmesini elimine edip Core Web Vitals'ı sunucu seviyesinde optimize ediyoruz.",
    tags: ["Core Web Vitals", "Crawl Budget", "Log Analizi"],
    href: "/seo/teknik-seo",
  },
  {
    icon: BarChart3,
    title: "Google Ads & Performans",
    desc: "Hassas hedefli edinim. Arama, görüntülü reklam ve remarketing'i dengeleyerek marka bütünlüğünden ödün vermeden ROAS'ı maksimize ediyoruz.",
    tags: ["Semantik Hedefleme", "Remarketing", "ROAS Optimizasyonu"],
    href: "/iletisim",
  },
  {
    icon: MapPin,
    title: "Lokal SEO & Bölgesel Hakimiyet",
    desc: "Yakınlık tabanlı görünürlük protokolleri. GBP optimizasyonu ve sistematik coğrafi hedefleme ile yerel pazarlarda domine edin.",
    tags: ["GBP Optimizasyonu", "Citation Yönetimi", "Yerel Landing Page"],
    href: "/seo/lokal-seo",
  },
  {
    icon: Globe,
    title: "Platform Uzmanlığı",
    desc: "WordPress ve Shopify için uzmanlaşmış çerçeveler. Liquid şablonları ve eklenti konfigürasyonlarını optimize ediyoruz.",
    tags: ["WordPress Güçlendirme", "Shopify Optimizasyonu", "Plugin Çakışma"],
    href: "/seo/wordpress-seo",
  },
  {
    icon: MonitorSmartphone,
    title: "Takip & Analitik",
    desc: "Ölçüm altyapısı. GTM kurulumundan Server-Side takibe kadar her atıfın hassas ve eyleme dönüştürülebilir olmasını sağlıyoruz.",
    tags: ["Server-Side GTM", "Event Schema", "Cross-Domain"],
    href: "/hizmetler/google-tag-manager",
  },
];

const caseStudies = [
  {
    sector: "E-Ticaret & Perakende",
    title: "Global Moda Markası",
    desc: "Shopify Plus mimarisinin Liquid optimizasyonu ve semantik içerik modelleme ile sistematik ölçeklenmesi.",
    metrics: [
      { value: "+340%", label: "Trafik" },
      { value: "+285%", label: "Satış" },
    ],
  },
  {
    sector: "B2B & SaaS",
    title: "Kurumsal Fintech SaaS",
    desc: "Ücretli ve organik veri akışlarını entegre ederek birleşik edinim hunisi ve atıf modeli oluşturma.",
    metrics: [
      { value: "+210%", label: "Lead" },
      { value: "4.2x", label: "ROAS" },
    ],
  },
  {
    sector: "Hukuk Hizmetleri",
    title: "Çok Şehirli Hukuk Bürosu",
    desc: "Citation yapısal bütünlüğü ve hiperlokal coğrafi hedefleme ile yerel arama ortamında hakimiyet.",
    metrics: [
      { value: "+420%", label: "Lokal Trafik" },
      { value: "+310%", label: "Form" },
    ],
  },
];

const standardApproach = [
  { title: "Keyword Doldurma", desc: "Niyet ve finansal dönüşüm yerine hacme öncelik verme." },
  { title: "Yüzeysel Denetimler", desc: "Manuel kod veya log analizi olmadan otomatik araç kullanımı." },
  { title: "İzole Kanallar", desc: "SEO ve reklam kanallarını ayrı, rakip silolar olarak ele alma." },
];

const seoroasApproach = [
  { title: "Niyet Analizi", desc: "Semantik olarak ilgili düğümleri yüksek değerli dönüşüm yollarına haritalama." },
  { title: "Mühendislik Titizliği", desc: "Doğrudan sunucu tarafı optimizasyonu ve yapısal veri mimarisi." },
  { title: "Omnichannel Sinerji", desc: "Organik içgörüleri ücretli performans verileriyle çapraz etkileşime sokma." },
];

const processPhases = [
  { num: "01", title: "Keşif & Derin Denetim", desc: "Mevcut altyapınızın ve rekabet ortamınızın tam teknik kazısı." },
  { num: "02", title: "Mimari Strateji", desc: "Önümüzdeki 12 ay için anahtar kelime taksonomisi ve teknik yol haritası." },
  { num: "03", title: "Sistem Uygulaması", desc: "Kod düzeyinde optimizasyonlar, içerik üretimi ve reklam dağıtımları." },
  { num: "04", title: "Büyüme Kalibrasyonu", desc: "Gerçek dünya arama davranışı ve ROI'ye dayalı sürekli veri odaklı iyileştirme." },
];

const faqItems = [
  {
    q: "Mimari SEO, geleneksel SEO'dan nasıl farklıdır?",
    a: "Geleneksel SEO genellikle anahtar kelimelerle algoritmaları 'kandırmaya' odaklanır. Mimari yaklaşımımız site yapısı, erişilebilirlik ve ilgililik üzerine yoğunlaşır. Algoritma güncellemelerinden bağımsız olarak sağlam kalan teknik bir temel inşa ediyoruz.",
  },
  {
    q: "Takip altyapısı neden hizmetlerinizin zorunlu parçası?",
    a: "Ölçüm, büyümenin pusulasıdır. Hassas takip (Server-Side, GTM) olmadan hangi kanalların gerçekten gelir sağladığını belirleyemeyiz. Karanlıkta çalışmıyoruz.",
  },
  {
    q: "WordPress ve Shopify'da uzmanlaşıyor musunuz?",
    a: "Her iki platformda da. Her platformun kendine özgü yapısal sınırlamaları vardır. WordPress hizmetimiz performans ve çekirdek güvenliğe, Shopify hizmetimiz ise Liquid kodu ve uygulama kaynaklı şişkinliği optimize etmeye odaklanır.",
  },
  {
    q: "SEO ve Google Ads birlikte çalışabilir mi?",
    a: "Kesinlikle. Ücretli arama verilerini kullanarak yüksek dönüşümlü anahtar kelimeleri hızla belirler, ardından bunları uzun vadeli organik içerik stratejimize aktarırız. Bu, verimlilik geri besleme döngüsü oluşturur.",
  },
];

export default function HizmetlerPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Tüm Hizmetlerimiz",
            description:
              "SEOROAS dijital büyüme hizmetleri — SEO, performans pazarlama, takip altyapısı ve platform optimizasyonu.",
            provider: { "@type": "LocalBusiness", name: "SEOROAS" },
            url: "https://seoroas.com/hizmetler",
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
          { name: "Hizmetler", url: "/hizmetler" },
        ]}
        badge="Bütünsel Dijital Mimari"
        title={
          <>
            Hepsi Bir Arada Dijital{" "}
            <span className="text-primary italic font-light">Büyüme</span> Mimarisi.
          </>
        }
        subtitle="SEOROAS, dijital hakimiyete modüler bir yaklaşım mühendislik etti. Arama görünürlüğünü mimari hassasiyet ve çapraz kanal sinerjisi gerektiren yapısal bir meydan okuma olarak ele alıyoruz."
        stats={[
          { value: "+240%", label: "Ort. Trafik Artışı" },
          { value: "4.8x", label: "ROAS İyileştirmesi" },
          { value: "+185%", label: "Lead Büyümesi" },
        ]}
      />

      {/* Main Services Grid */}
      <section className="px-5 md:px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-10 bg-surface-container-low rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.04)]"
              >
                <service.icon className="h-8 w-8 text-primary mb-8" />
                <h3 className="text-2xl font-bold tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-5 md:px-8 py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-primary/60 mb-4 block">
              Ampirik Kanıt
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              Yapısal Başarı{" "}
              <span className="text-primary italic font-light">Hikayeleri</span>.
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-light text-lg">
              Mimari arama mühendisliği ve titiz teknik uygulama ile elde edilen ölçülebilir sonuçlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="group p-10 md:p-12 bg-surface-container-low/50 backdrop-blur-xl rounded-3xl border border-outline-variant/10 transition-transform duration-700 hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                    {cs.sector}
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-6">{cs.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-10">
                  {cs.desc}
                </p>
                <div className="space-y-4">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="flex items-end gap-3">
                      <span className="text-3xl font-extrabold tracking-tighter text-on-surface">
                        {m.value}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-on-surface-variant pb-1.5">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="px-5 md:px-8 py-24 md:py-32 bg-surface-container-low">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
              Mimari Fark
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              Yüksek büyüme firmaları neden standart ajanslardan yapısal mühendisliğe geçiyor?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 rounded-xl overflow-hidden shadow-2xl shadow-slate-200/50">
            <div className="bg-white p-10 md:p-12">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-8">
                Standart Yaklaşım
              </h4>
              <ul className="space-y-6">
                {standardApproach.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <XCircle className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold text-sm">{item.title}</p>
                      <p className="text-xs text-on-surface-variant">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-10 md:p-12 border-l border-outline-variant/10">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8">
                SEOROAS Mimarisi
              </h4>
              <ul className="space-y-6">
                {seoroasApproach.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold text-sm">{item.title}</p>
                      <p className="text-xs text-on-surface-variant">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-5 md:px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
                Uygulama Çerçevesi
              </h2>
              <p className="text-on-surface-variant">
                Metodolojimiz doğrusal, şeffaf ve ölçek için tasarlanmıştır. Tahmin yok, yalnızca mühendislik.
              </p>
            </div>
            <div className="text-5xl md:text-6xl font-light text-surface-container-highest tracking-tighter hidden md:block">
              01—04
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {processPhases.map((phase) => (
              <div key={phase.num} className="relative">
                <span className="text-xs font-bold text-primary mb-4 block">
                  FAZE {phase.num}
                </span>
                <h4 className="text-lg font-bold mb-4">{phase.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Reliability */}
      <section className="px-5 md:px-8 mb-16">
        <div className="max-w-7xl mx-auto bg-primary rounded-[2rem] p-12 md:p-20 text-white flex flex-col md:flex-row gap-12 md:items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              Kanıtlanmış Güvenilirlik.
            </h2>
            <p className="text-white/70 text-lg font-light">
              Başarımızı bilançonuzda yarattığımız farkla ölçüyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-2">
                +240%
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-70">
                Ort. Trafik Artışı
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-2">
                4.8x
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-70">
                ROAS İyileştirmesi
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-2">
                +185%
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-70">
                Lead Büyümesi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 md:px-8 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-16 text-center">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-8">
            {faqItems.map((item) => (
              <div key={item.q} className="bg-surface-container-low rounded-2xl p-8">
                <h4 className="text-lg font-bold mb-4">{item.q}</h4>
                <p className="text-on-surface-variant leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-8 pb-24">
        <div className="max-w-4xl mx-auto p-12 md:p-20 bg-surface-container rounded-3xl relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 relative z-10">
            Büyümenizi Mühendislik Etmeye Hazır mısınız?
          </h2>
          <p className="text-on-surface-variant mb-10 max-w-md mx-auto relative z-10">
            Dijital altyapınızın ücretsiz kapsamlı denetimini talep edin ve mevcut mimarinizdeki boşlukları keşfedin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Link
              href="/iletisim"
              className="bg-primary text-white font-bold py-4 px-10 rounded-full hover:opacity-90 transition-opacity"
            >
              Ücretsiz Denetim Al
            </Link>
            <Link
              href="/seo-fiyatlari"
              className="border border-outline-variant/30 text-on-surface font-bold py-4 px-10 rounded-full hover:bg-surface-container-low transition-colors"
            >
              Fiyatları İncele
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
