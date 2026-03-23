import type { Metadata } from "next";
import Link from "next/link";
import { generateSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";
import { Star } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = generateSeoMetadata({
  title: "Referanslar — SEO Başarı Hikayeleri & Vaka Analizleri",
  description:
    "E-ticaret, SaaS, sağlık ve gayrimenkul sektörlerinde somut verilerle kanıtlanmış SEO başarı hikayelerini inceleyin.",
  path: "/referanslar",
});

const summaryStats = [
  { value: "500+", label: "Tamamlanan Proje" },
  { value: "94%", label: "Müşteri Sadakati" },
  { value: "3.2X", label: "Ortalama ROI Artışı" },
  { value: "+240%", label: "Organik Trafik İvmesi" },
];

const caseStudies = [
  {
    category: "E-Ticaret",
    title: "Moda Devinde %312 Gelir Artışı",
    desc: "Uluslararası bir moda markasının organik kanal gelirlerini 12 ayda 3 katına çıkardık.",
    metrics: [
      { label: "Trafik", value: "+180%" },
      { label: "Dönüşüm", value: "+45%" },
      { label: "Anahtar K.", value: "12k+" },
    ],
  },
  {
    category: "B2B SaaS",
    title: "Global SaaS Lead Gen Stratejisi",
    desc: "CRM yazılımı için her ay 2.500+ nitelikli demo talebi üreten içerik hunisi mimarisi.",
    metrics: [
      { label: "Demo", value: "+210%" },
      { label: "CPL", value: "-35%" },
      { label: "Global Sıra", value: "#1" },
    ],
  },
  {
    category: "Hukuk",
    title: "Otorite Odaklı Hukuki SEO",
    desc: "Zorlu hukuki terimlerde Google ilk sayfa dominasyonu ve prestij artışı.",
    metrics: [
      { label: "Görünürlük", value: "+125%" },
      { label: "Güven Skoru", value: "92/100" },
      { label: "Tıklama", value: "4.2k" },
    ],
  },
  {
    category: "Sağlık",
    title: "Sağlık Turizminde Dijital Köprü",
    desc: "Avrupa pazarından gelen hasta randevularını 240% artıran çok dilli SEO çalışması.",
    metrics: [
      { label: "Randevu", value: "+240%" },
      { label: "ROI", value: "5.5X" },
      { label: "Diller", value: "4" },
    ],
  },
  {
    category: "Eğitim",
    title: "Üniversite Tercih Dönemi Dominasyonu",
    desc: "3 ayda kritik terimlerde ilk 3 sıra hedefiyle rekor başvuru sayısı.",
    metrics: [
      { label: "Başvuru", value: "+90%" },
      { label: "Erişim", value: "1.2M" },
      { label: "Sıralama", value: "Top 3" },
    ],
  },
  {
    category: "Gayrimenkul",
    title: "Lüks Konut Satışlarında %40 Artış",
    desc: "Niche hedeflerle yüksek bütçeli konut projelerinde nitelikli lead üretimi.",
    metrics: [
      { label: "Satış", value: "+40%" },
      { label: "Lead", value: "1.8k" },
      { label: "CPA", value: "-22%" },
    ],
  },
];

const testimonials = [
  {
    text: "Organik trafiğimizin bir yılda 3 katına çıkması sadece başlangıçtı. Asıl farkı, gelen trafiğin satışa dönme hızında hissettik.",
    name: "Ahmet B.",
    role: "Moda CEO",
  },
  {
    text: "SEO'yu sadece bir teknik iş olarak görüyorduk, SEOROAS bize bunun bir iş stratejisi olduğunu kanıtladı.",
    name: "Selin K.",
    role: "SaaS Pazarlama Müdürü",
  },
  {
    text: "E-ticaret hacmimiz o kadar hızlı büyüdü ki, operasyon merkezimizi büyütmek zorunda kaldık.",
    name: "Murat Y.",
    role: "E-Ticaret Direktörü",
  },
];

export default function ReferanslarPage() {
  return (
    <>
      <SchemaOrg
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Referanslar & Vaka Analizleri — SEOROAS",
          description:
            "Somut verilerle tescillenmiş büyüme grafikleri. Her sektörün dinamiğine özel kurgulanmış SEO mimarisi.",
          publisher: {
            "@type": "Organization",
            name: "SEOROAS",
            url: "https://seoroas.com",
          },
        }}
      />

      <SubpageHero
        breadcrumb={[{ name: "Referanslar", url: "/referanslar" }]}
        badge="Case Studies"
        title={
          <>
            Rakamlarla Anlattığımız{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              Başarı Hikayeleri
            </span>
          </>
        }
        subtitle="Kelimelerin ötesinde, somut verilerle tescillenmiş büyüme grafikleri. Her sektörün dinamiğine özel kurgulanmış SEO mimarisi."
      />

      {/* Summary Stats */}
      <section className="bg-surface-container-low py-16 md:py-24 mb-16 md:mb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {summaryStats.map((s) => (
              <div key={s.label} className="space-y-2">
                <div className="text-4xl md:text-7xl font-extrabold tracking-[-0.04em] text-primary">
                  {s.value}
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-on-surface-variant/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-20 md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="group bg-surface-container-lowest rounded-xl p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 md:mb-6 relative bg-surface-container-high">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">
                  {cs.category}
                </div>
              </div>
              <div className="px-4 md:px-6 pb-6 md:pb-8">
                <h3 className="text-xl md:text-2xl font-bold tracking-[-0.04em] mb-3 md:mb-4 group-hover:text-primary transition-colors">
                  {cs.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 md:mb-8">
                  {cs.desc}
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4 md:pt-6 border-t border-outline-variant/10">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-xs text-on-surface-variant/60 mb-1">
                        {m.label}
                      </div>
                      <div className="text-base md:text-lg font-bold text-primary">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-20 md:mb-40">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.04em] mb-10 md:mb-16 text-center">
          İş Ortaklarımız Ne Diyor?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-surface-container-low p-8 md:p-10 rounded-xl relative ${i === 1 ? "lg:translate-y-12" : ""}`}
            >
              <div className="flex text-primary mb-4 md:mb-6 gap-0.5">
                {[...Array(5)].map((_, si) => (
                  <Star
                    key={si}
                    className="h-4 w-4 fill-primary"
                  />
                ))}
              </div>
              <p className="text-base md:text-lg font-medium leading-relaxed italic mb-6 md:mb-8 text-on-surface">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-wider">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
        <div className="bg-primary rounded-2xl md:rounded-3xl p-8 md:p-24 text-center text-on-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-[-0.04em] mb-6 md:mb-8 leading-none">
              Siz de Bu Başarı Hikayelerinin Parçası Olun
            </h2>
            <p className="text-base md:text-xl opacity-80 max-w-2xl mx-auto mb-8 md:mb-12">
              Markanızın dijital potansiyelini rakamlarla keşfedin. Ücretsiz ön
              analiz raporu için bugün iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Link
                href="/iletisim"
                className="w-full sm:w-auto bg-white text-primary px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold tracking-tight hover:scale-105 transition-transform duration-300 text-center"
              >
                Strateji Toplantısı Planla
              </Link>
              <Link
                href="/seo-fiyatlari"
                className="w-full sm:w-auto bg-primary-container/20 backdrop-blur-md text-white border border-white/20 px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold tracking-tight hover:bg-white/10 transition-colors text-center"
              >
                Hizmetlerimizi İncele
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
