import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Code,
  Link as LinkIcon,
  MapPin,
  ShoppingCart,
  FileText,
  Globe,
  Store,
  Building2,
  Briefcase,
  Zap,
  Shield,
  TrendingUp,
  BarChart3,
  Brain,
  Target,
  ChevronDown,
} from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "SEO Hizmetleri — Teknik, İçerik & Link Building",
  description:
    "On-page, teknik SEO, link building, lokal, e-ticaret ve içerik SEO dahil 10 uzmanlık alanı. Veri odaklı strateji ile organik trafiğinizi artırın.",
  path: "/seo",
});

const seoServices = [
  {
    name: "On-Page SEO",
    href: "/seo/on-page-seo",
    icon: Search,
    desc: "Başlık etiketleri, meta açıklamalar, içerik optimizasyonu ve sayfa yapılandırması ile organik görünürlüğü maksimize edin.",
  },
  {
    name: "Teknik SEO",
    href: "/seo/teknik-seo",
    icon: Code,
    desc: "Core Web Vitals, site hızı, crawlability ve yapılandırılmış veri optimizasyonu ile teknik altyapınızı güçlendirin.",
  },
  {
    name: "Link Building",
    href: "/seo/link-building",
    icon: LinkIcon,
    desc: "Editöryel kalitede, yüksek otorite backlink'ler ile alan adı otoritenizi ve sıralama gücünüzü artırın.",
  },
  {
    name: "Lokal SEO",
    href: "/seo/lokal-seo",
    icon: MapPin,
    desc: "Google Business Profile optimizasyonu ve yerel arama stratejileri ile bölgesel pazarlarda domine edin.",
  },
  {
    name: "E-ticaret SEO",
    href: "/seo/e-ticaret-seo",
    icon: ShoppingCart,
    desc: "Ürün sayfaları, kategori mimarisi ve schema markup ile e-ticaret gelirlerinizi organik kanaldan büyütün.",
  },
  {
    name: "İçerik SEO",
    href: "/seo/icerik-seo",
    icon: FileText,
    desc: "Semantik analiz ve topikal otorite stratejileri ile arama niyetine uygun içerik ekosistemleri oluşturun.",
  },
  {
    name: "WordPress SEO",
    href: "/seo/wordpress-seo",
    icon: Globe,
    desc: "WordPress altyapısına özel performans, güvenlik ve SEO optimizasyonları ile sitenizi hızlandırın.",
  },
  {
    name: "Shopify SEO",
    href: "/seo/shopify-seo",
    icon: Store,
    desc: "Shopify Liquid şablonları, uygulama optimizasyonu ve teknik SEO ile mağazanızın organik potansiyelini açığa çıkarın.",
  },
  {
    name: "Kurumsal SEO",
    href: "/seo/kurumsal-seo",
    icon: Building2,
    desc: "Büyük ölçekli web siteleri için kurumsal düzeyde SEO stratejisi, otomasyon ve performans yönetimi.",
  },
  {
    name: "SEO Ajansı",
    href: "/seo/seo-ajansi",
    icon: Briefcase,
    desc: "Profesyonel SEO ajansı hizmetleri ile dijital varlığınızı stratejik bir yatırıma dönüştürün.",
  },
];

const pillars = [
  {
    icon: Code,
    title: "Teknik Mühendislik",
    desc: "Crawl optimizasyonu, Core Web Vitals, Entity Schema ve Headless SEO ile algoritmik uyumu matematiksel olarak sağlıyoruz.",
    metrics: [
      { value: "98.4%", label: "İndeksleme Oranı" },
      { value: "4.2x", label: "Crawl Frekansı" },
    ],
  },
  {
    icon: Brain,
    title: "İçerik & Otorite",
    desc: "Topikal haritalar, semantik ağ bağlantıları ve nişe özel içerik ekosistemleri ile tartışılmaz otorite inşa ediyoruz.",
    metrics: [
      { value: "0.82", label: "Semantik Skor" },
      { value: "45+", label: "Pazar" },
    ],
  },
  {
    icon: TrendingUp,
    title: "ROI & Stratejik Büyüme",
    desc: "Trafik-gelir dönüşüm mühendisliği, AI destekli içerik analizi ve prediktif sıralama ile ölçülebilir büyüme sağlıyoruz.",
    metrics: [
      { value: "84%", label: "Tutundurma Artışı" },
      { value: "12.4x", label: "ROI Verimliliği" },
    ],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Teknik Temel",
    desc: "Yapısal borç tasfiyesi, Core Web Vitals optimizasyonu ve mimari denetim.",
    items: ["Mimari Denetim", "Hız Optimizasyonu", "Semantik HTML"],
  },
  {
    num: "02",
    title: "Otorite Motoru",
    desc: "Anahtar kelime kümeleri, pillar içerikler ve topikal baskınlık stratejisi.",
    items: ["Keyword Cluster", "Pillar İçerik", "Topic Salience"],
  },
  {
    num: "03",
    title: "Ölçek & Edinim",
    desc: "Dönüşüm odaklı long-tail genişleme ve global link equity kazanımı.",
    items: ["Dönüşüm Testi", "AI Destekli Ölçek", "Link Equity"],
  },
  {
    num: "04",
    title: "Bileşik Dominasyon",
    desc: "Otoriteden yararlanarak zero-click ve yüksek bariyerli SERP'leri ele geçirme.",
    items: ["Prediktif SERP", "Pazar Dominasyonu", "Stratejik Pivot"],
  },
];

const faqItems = [
  {
    q: "SEO hizmetleriniz neleri kapsıyor?",
    a: "On-page, teknik, link building, lokal, e-ticaret, içerik, platform bazlı (WordPress/Shopify) ve kurumsal SEO dahil olmak üzere kapsamlı bir SEO hizmet yelpazesi sunuyoruz. Her hizmet, veri odaklı strateji ve mimari yaklaşımla sunulur.",
  },
  {
    q: "Sonuçları ne zaman görmeye başlarım?",
    a: "İlk teknik iyileştirmeler 1-2 ay içinde indekslemeye yansır. İçerik ve otorite stratejileri 3-6 ay içinde organik trafik artışı sağlar. 12 aylık bir strateji ile bileşik büyüme etkisi elde edilir.",
  },
  {
    q: "AI ve makine öğrenimi SEO'da nasıl kullanılıyor?",
    a: "Semantik entity analizi, doğal dil anlama (NLU) optimizasyonu ve yapısal veri boşluklarının tespitinde LLM'ler kullanıyoruz. AI, içerik yazmaktan öte; sıralama sinyallerini simüle ederek prediktif SEO stratejisi oluşturmamıza olanak tanır.",
  },
  {
    q: "Raporlama ve şeffaflık nasıl sağlanıyor?",
    a: "Gerçek zamanlı atıf takibi ile her organik gelir dolarını kaynağına kadar izliyoruz. Canlı SERP izleme, yönetici özet katmanı ve CRM/ERP entegrasyonu ile %100 şeffaf raporlama sunuyoruz.",
  },
  {
    q: "Hangi sektörlere hizmet veriyorsunuz?",
    a: "E-ticaret, SaaS, B2B, fintech, hukuk, sağlık, eğitim ve gayrimenkul dahil birçok sektörde deneyimimiz var. Her sektörün kendine özgü arama davranışı ve rekabet dinamiğine göre strateji özelleştiriyoruz.",
  },
];

export default function SeoPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "SEO Hizmetleri",
            description:
              "SEOROAS SEO hizmetleri — teknik altyapıdan içerik stratejisine kapsamlı organik büyüme mühendisliği.",
            provider: { "@type": "LocalBusiness", name: "SEOROAS" },
            url: "https://seoroas.com/seo",
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
        ]}
        badge="Organik Büyüme Mühendisliği"
        title={
          <>
            Mimari Hassasiyetle{" "}
            <span className="text-primary">SEO</span> Mühendisliği.
          </>
        }
        subtitle="Teknik altyapı, semantik içerik ve otorite mühendisliğini bir araya getirerek dijital arama ortamını domine eden yapılar inşa ediyoruz."
        stats={[
          { value: "+340%", label: "Ortalama Trafik Artışı" },
          { value: "4.8x", label: "ROAS İyileştirmesi" },
          { value: "+185%", label: "Lead Büyümesi" },
        ]}
      />

      {/* SEO Services Grid */}
      <section className="px-5 md:px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60 mb-4 block">
              Çözüm Portföyü
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              10 Temel SEO Disiplini
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-light text-lg">
              Her biri uzmanlaşmış ekipler tarafından yürütülen, birlikte çalışarak bileşik organik büyüme yaratan hizmetler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group p-8 bg-surface-container-low rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-transparent hover:border-outline-variant/10"
              >
                <service.icon className="h-7 w-7 text-primary mb-6" />
                <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  {service.desc}
                </p>
                <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                  Detaylı İncele <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="px-5 md:px-8 py-24 md:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60 mb-4 block">
              Mimari Yaklaşım
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              Üç Temel Sütun
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-light text-lg">
              Teknik mühendislik, içerik otoritesi ve stratejik büyüme — birlikte çalışarak sürdürülebilir organik dominasyon sağlar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-3xl p-10 md:p-12 border border-outline-variant/10 shadow-sm"
              >
                <pillar.icon className="h-8 w-8 text-primary mb-8" />
                <h3 className="text-2xl font-bold tracking-tight mb-4">
                  {pillar.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                  {pillar.desc}
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-outline-variant/10">
                  {pillar.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-3xl font-extrabold tracking-tighter text-primary mb-1">
                        {m.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Engineering (dark section) */}
      <section className="mx-4 md:mx-8 my-16 py-24 md:py-32 px-6 md:px-12 bg-zinc-900 text-white rounded-[2rem] md:rounded-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="text-indigo-300 font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">
              Otorite Mühendisliği
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
              Hassas Link Edinimi.
            </h2>
            <p className="text-zinc-400 text-lg font-light mb-12">
              Editöryel kalitede, global otorite alan adlarından stratejik backlink kazanımı. %100 manuel outreach, sıfır otomatik footprint.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-extrabold text-indigo-300 mb-2 tracking-tighter">
                  DR 80+
                </div>
                <div className="text-xs uppercase tracking-widest text-zinc-500">
                  Hedef Alan Adları
                </div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-indigo-300 mb-2 tracking-tighter">
                  %100
                </div>
                <div className="text-xs uppercase tracking-widest text-zinc-500">
                  Manuel Outreach
                </div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-indigo-300 mb-2 tracking-tighter">
                  Topikal
                </div>
                <div className="text-xs uppercase tracking-widest text-zinc-500">
                  Konusal Eşleşme
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
              <h4 className="font-bold mb-2">Dijital PR</h4>
              <p className="text-sm text-zinc-400">
                Endüstri yayınlarında editöryel yerleşimler kazandıran hedefli anlatı oluşturma.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl ml-4 md:ml-8">
              <h4 className="font-bold mb-2">Trust Flow Koruması</h4>
              <p className="text-sm text-zinc-400">
                Link hızı ve sağlığı izleme ile temiz backlink profili koruma.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">
              <h4 className="font-bold mb-2">Entity Bağlantı</h4>
              <p className="text-sm text-zinc-400">
                Her link'in hedef entity kümelerinize doğrudan topikal değer sağlamasını garanti eden grafik haritalama.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12-Month Trajectory */}
      <section className="px-5 md:px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60 mb-4 block">
              Yol Haritası
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              12 Aylık Büyüme Trajektörisi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-6 shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{step.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  {step.desc}
                </p>
                <ul className="space-y-2">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-center text-xs font-medium text-on-surface-variant">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 md:px-8 py-24 md:py-32 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-16 text-center">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-8">
            {faqItems.map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-8 border border-outline-variant/10">
                <h4 className="text-lg font-bold mb-4 tracking-tight">{item.q}</h4>
                <p className="text-on-surface-variant leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-8 py-24">
        <div className="max-w-5xl mx-auto bg-primary rounded-[2rem] md:rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/50 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-6">
              Organik Geleceğinizi
              <br className="hidden md:block" /> Mühendislik Edin.
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-10 font-light">
              Ücretsiz kapsamlı SEO denetimi ile dijital altyapınızdaki boşlukları keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/iletisim"
                className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Ücretsiz SEO Analizi
              </Link>
              <Link
                href="/seo-fiyatlari"
                className="border border-white/30 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Fiyatları İncele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
