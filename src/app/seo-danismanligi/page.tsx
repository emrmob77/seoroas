import type { Metadata } from "next";
import Link from "next/link";
import { generateDynamicSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import {
  BarChart3,
  KeyRound,
  LineChart,
  Map,
  Target,
  Sparkles,
  FileBarChart,
  CheckCircle,
  ChevronDown,
  Mail,
} from "lucide-react";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicSeoMetadata({
    title: "SEO Danışmanlığı — Veriye Dayalı Özel Strateji",
    description:
      "Markanıza özel, veri mimarisi ve teknik hassasiyetle kurgulanan SEO danışmanlık hizmeti. Trafik değil, gelir odaklı strateji. Ücretsiz ön analiz.",
    path: "/seo-danismanligi",
  });
}

const whenToHire = [
  "Organik trafiğinizde ani veya sürekli düşüş varsa.",
  "Yeni bir web sitesi veya marka lansmanı yapıyorsanız.",
  "Reklam maliyetleriniz (CAC) sürdürülemez seviyeye ulaştıysa.",
  "Sektörünüzdeki rekabet dijitalde agresifleşmeye başladıysa.",
  "Teknik hatalar nedeniyle sayfalarınız indeks almıyorsa.",
  "İçerik üretim sürecinizi ROI odaklı optimize etmek istiyorsanız.",
];

const services = [
  {
    icon: BarChart3,
    title: "Derinlemesine SEO Audit",
    desc: "Sitenizin 200+ teknik kriter üzerinden röntgenini çekiyoruz. Core Web Vitals'tan tarama bütçesine kadar her detay masada.",
    large: true,
  },
  {
    icon: KeyRound,
    title: "Keyword Strategy",
    desc: "Niyet odaklı (Intent-based) kelime analizi ile dönüşüm getirecek terimleri belirliyoruz.",
  },
  {
    icon: LineChart,
    title: "Competitor Analysis",
    desc: "Rakiplerinizin trafik kaynaklarını ve stratejilerini analiz ederek açık noktaları buluyoruz.",
  },
  {
    icon: Map,
    title: "Road Map",
    desc: "Aylık bazda planlanmış, şeffaf ve uygulanabilir teknik/içerik iş planı sunuyoruz.",
  },
  {
    icon: Target,
    title: "KPI Focus",
    desc: "Sadece sıralama değil; trafik kalitesi, hemen çıkma oranı ve lead odaklı metrikler.",
  },
  {
    icon: Sparkles,
    title: "AI Content & Link Building",
    desc: "Yapay zeka destekli otoriter içerik üretimi ve yüksek kaliteli, doğal backlink profili inşası ile otoritenizi artırıyoruz.",
    large: true,
  },
  {
    icon: FileBarChart,
    title: "Monthly Reporting",
    desc: "Veri görselleştirme araçlarıyla (Looker Studio) şeffaf ve anlaşılır performans raporları.",
  },
];

const processSteps = [
  {
    num: "01",
    period: "Hafta 1-2",
    title: "Teşhis ve Strateji",
    desc: "Mevcut durum analizi, teknik hataların tespiti ve sektördeki \"Quick Win\" (hızlı kazanç) noktalarının belirlenmesi.",
  },
  {
    num: "02",
    period: "Ay 1-2",
    title: "Teknik Onarım & İçerik Temeli",
    desc: "Site mimarisinin düzeltilmesi, temel sayfaların optimizasyonu ve yeni içerik takviminin başlatılması.",
  },
  {
    num: "03",
    period: "Ay 3-5",
    title: "Otorite İnşası & Ölçekleme",
    desc: "Off-page SEO çalışmaları, uzun kuyruklu anahtar kelimelerin hedeflenmesi ve kullanıcı deneyimi (UX) optimizasyonu.",
  },
  {
    num: "04",
    period: "Ay 6+",
    title: "Domine Etme & ROI Maksimizasyonu",
    desc: "Hedef kelimelerde ilk 3 pozisyonun korunması, dönüşüm oranlarının artırılması ve yeni pazarlara açılım stratejileri.",
  },
];

const caseMetrics = [
  { label: "Aylık Organik Trafik", before: "12.400", after: "84.200 (+%579)" },
  { label: "İlk Sayfa Kelime Sayısı", before: "45", after: "312 (+%593)" },
  { label: "Lead Dönüşüm Oranı", before: "%0.8", after: "%2.4 (3 Kat Artış)" },
  { label: "Tahmini SEO ROAS", before: "-%", after: "12.4x", highlight: true },
];

const faqItems = [
  {
    q: "SEO çalışmalarının sonuç vermesi ne kadar sürer?",
    a: "SEO orta ve uzun vadeli bir yatırımdır. Genellikle ilk anlamlı değişimler 3-4 ay içerisinde görülürken, gerçek ROI (yatırım getirisi) 6-12 ay arasında netleşir.",
  },
  {
    q: "Garantili sıralama veriyor musunuz?",
    a: "Hiçbir etik SEO ajansı %100 sıralama garantisi vermez. Bizim taahhüdümüz; trafik artışı, teknik mükemmellik ve veriye dayalı performans iyileştirmesidir.",
  },
  {
    q: "Hangi araçları kullanıyorsunuz?",
    a: "Google Search Console, GA4, Semrush, Ahrefs, Screaming Frog, Looker Studio gibi endüstri standartı araçları ve kendi geliştirdiğimiz otomasyon sistemlerini kullanıyoruz.",
  },
  {
    q: "E-ticaret siteleri için özel bir modeliniz var mı?",
    a: "Evet, e-ticaret SEO paketimiz kategori bazlı optimizasyon, ürün sayfası yapılandırması, teknik crawl bütçesi yönetimi ve dönüşüm optimizasyonunu kapsar.",
  },
  {
    q: "Danışmanlık ücretlendirmesi nasıl yapılıyor?",
    a: "Proje bazlı ve aylık retainer modelleri sunuyoruz. Site büyüklüğü, sektör rekabeti ve hedeflere göre kişiye özel fiyatlandırma yapılır.",
  },
];

export default function SeoDanismanligiPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "SEO Danışmanlığı Hizmeti",
            provider: { "@type": "LocalBusiness", name: "SEOROAS" },
            description:
              "Veri mimarisi ve teknik hassasiyetle kurgulanan ROAS odaklı SEO danışmanlık hizmeti.",
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
          { name: "SEO Danışmanlığı", url: "/seo-danismanligi" },
        ]}
        badge="Uzman Danışmanlık"
        title={
          <>
            Markanıza Özel
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              SEO Danışmanlığı
            </span>.
          </>
        }
        subtitle="Veri mimarisi ve teknik hassasiyetle kurgulanan, sadece trafik değil, sürdürülebilir ROAS odaklı büyüme stratejileri."
      />

      {/* What is SEO Consulting */}
      <section className="py-16 md:py-32 px-6 md:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 md:mb-6 block">
              Tanımlama
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] mb-6 md:mb-8 text-on-background">
              SEO Danışmanlığı Nedir?
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Modern SEO, artık sadece anahtar kelime yerleştirmekten ibaret
              değil. Google&apos;ın yapay zeka tabanlı algoritmaları, kullanıcı
              deneyimi (UX), teknik kusursuzluk ve içerik derinliğini bir bütün
              olarak değerlendiriyor. SEOROAS olarak danışmanlık modelimizi bu
              &ldquo;bütünleşik mimari&rdquo; üzerine kuruyoruz.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Ne Zaman SEO Danışmanlığı Almalısınız?
            </h3>
            <ul className="space-y-4">
              {whenToHire.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-on-surface-variant"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service Scope - Bento Grid */}
      <section className="py-16 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.04em] mb-4">
              Hizmet Kapsamımız
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              360 derece SEO ekosistemi ile teknikten içeriğe her noktada
              yanınızdayız.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className={`${s.large ? "md:col-span-2 bg-surface-container-lowest" : "bg-surface-container-low hover:bg-surface-container-lowest"} p-8 md:p-10 rounded-xl transition-all duration-500 ${s.large ? "hover:shadow-2xl" : ""}`}
              >
                <s.icon
                  className={`${s.large ? "h-9 w-9" : "h-7 w-7"} text-primary mb-4 md:mb-6`}
                  strokeWidth={1.5}
                />
                <h3
                  className={`${s.large ? "text-xl md:text-2xl" : "text-lg md:text-xl"} font-bold mb-3 md:mb-4`}
                >
                  {s.title}
                </h3>
                <p
                  className={`${s.large ? "" : "text-sm"} text-on-surface-variant leading-relaxed`}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-32 px-6 md:px-8 bg-zinc-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.04em] mb-6">
              Çalışma Sürecimiz
            </h2>
            <div className="w-24 h-1 bg-primary" />
          </div>
          <div className="space-y-12 md:space-y-24 relative">
            <div className="absolute left-4 top-0 bottom-0 w-[0.5px] bg-white/20 hidden md:block" />
            {processSteps.map((step) => (
              <div key={step.num} className="relative md:pl-12">
                <div className="hidden md:flex absolute left-0 top-2 w-8 h-8 rounded-full bg-primary items-center justify-center -ml-4">
                  <span className="text-xs font-bold">{step.num}</span>
                </div>
                <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12">
                  <h4 className="text-lg md:text-2xl font-light opacity-50 uppercase tracking-widest">
                    {step.period}
                  </h4>
                  <div>
                    <h5 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                      {step.title}
                    </h5>
                    <p className="text-zinc-400 text-base md:text-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 md:gap-20 items-center">
            <div className="bg-surface-container-lowest p-6 md:p-12 rounded-2xl shadow-sm border border-outline-variant/5 overflow-x-auto">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <span className="font-bold tracking-tight text-lg md:text-xl">
                  Vaka Analizi: B2B SaaS Platformu
                </span>
              </div>
              <table className="w-full text-left min-w-[400px]">
                <thead>
                  <tr className="border-b border-outline-variant/10">
                    <th className="py-4 md:py-6 font-bold text-xs md:text-sm uppercase tracking-widest text-on-surface-variant">
                      Metrik
                    </th>
                    <th className="py-4 md:py-6 font-bold text-xs md:text-sm uppercase tracking-widest text-on-surface-variant">
                      Başlangıç
                    </th>
                    <th className="py-4 md:py-6 font-bold text-xs md:text-sm uppercase tracking-widest text-primary">
                      8. Ay Sonucu
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {caseMetrics.map((m) => (
                    <tr key={m.label}>
                      <td className="py-4 md:py-6 font-medium text-sm md:text-base">
                        {m.label}
                      </td>
                      <td className="py-4 md:py-6 text-sm md:text-base">
                        {m.before}
                      </td>
                      <td
                        className={`py-4 md:py-6 font-bold text-sm md:text-base ${m.highlight ? "text-primary" : "text-zinc-900"}`}
                      >
                        {m.after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.04em] mb-6 md:mb-8">
                Rakamlarla Kanıtlanmış Başarı.
              </h2>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-6 md:mb-8">
                Yalnızca grafiklerin yukarı gitmesine değil, bu trafiğin
                şirketinize ne kadar ciro ve müşteri kazandırdığına
                odaklanıyoruz. B2B SaaS örneğimizde, organik trafiği
                ölçeklerken lead maliyetlerini %60 oranında düşürdük.
              </p>
              <Link
                href="/referanslar"
                className="inline-block border-b-2 border-primary pb-1 font-bold text-primary hover:text-primary-dim transition-colors uppercase text-sm tracking-widest"
              >
                Tüm Başarı Hikayelerini Gör
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-32 px-6 md:px-8 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] text-center mb-10 md:mb-16">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-3 md:space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm"
              >
                <summary className="list-none p-5 md:p-6 flex justify-between items-center cursor-pointer font-bold text-sm md:text-base">
                  {item.q}
                  <ChevronDown className="h-5 w-5 text-primary shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-on-surface-variant leading-relaxed text-sm md:text-base">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Form */}
      <section className="py-16 md:py-32 px-6 md:px-8">
        <div className="max-w-5xl mx-auto bg-primary rounded-2xl md:rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden text-on-primary">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-white/5 rounded-full blur-2xl" />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-[-0.04em] mb-4 md:mb-6">
                SEO Danışmanlığı Hizmeti İçin Teklif Alın
              </h2>
              <p className="opacity-80 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                Ücretsiz bir ön analiz ve markanıza özel büyüme projeksiyonu
                için formu doldurun. 24 saat içinde dönüş sağlıyoruz.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm opacity-60">Doğrudan İletişim</div>
                  <div className="font-bold">info@seoroas.com</div>
                </div>
              </div>
            </div>
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
