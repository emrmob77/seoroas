import type { Metadata } from "next";
import Link from "next/link";
import { generateDynamicSeoMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { SubpageHero } from "@/components/sections/SubpageHero";
import {
  BarChart3,
  Eye,
  ClipboardCheck,
  Handshake,
  BookOpen,
  Search,
  LineChart,
  ShoppingBag,
  BarChart,
  CheckCircle,
} from "lucide-react";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return generateDynamicSeoMetadata({
    title: "Hakkımızda — SEO Odaklı Büyüme Ekibi",
    description:
      "SEO'yu ölçülebilir yatırım getirisi (ROAS) odaklı büyüme motoruna dönüştüren ekip. Veriye dayalı stratejiler ve mühendislik disiplini.",
    path: "/hakkimizda",
  });
}

const values = [
  {
    icon: BarChart3,
    title: "Veriye Dayalı Kararlar",
    desc: "Varsayımlarla değil, katı veri setleriyle hareket ediyoruz.",
  },
  {
    icon: Eye,
    title: "Tam Şeffaflık",
    desc: "Tüm süreçlerimiz ve raporlarımız açık, anlaşılır ve denetlenebilir.",
  },
  {
    icon: ClipboardCheck,
    title: "Sonuç Sorumluluğu",
    desc: "Aldığımız her aksiyonun sonuçlarının arkasındayız.",
  },
  {
    icon: Handshake,
    title: "Uzun Vadeli Ortaklık",
    desc: "Müşterilerimize bir hizmet sağlayıcı değil, bir çözüm ortağıyız.",
  },
  {
    icon: BookOpen,
    title: "Sürekli Öğrenme",
    desc: "Değişen algoritmaların bir adım önünde olmak için evriliyoruz.",
  },
];

const stats = [
  { value: "2014", label: "Kuruluş Yılımız" },
  { value: "100+", label: "Mutlu Müşteri" },
  { value: "40+", label: "Kurumsal Marka" },
  { value: "%94", label: "Müşteri Memnuniyeti" },
];

const certifications = [
  { icon: BarChart, label: "GA4 Certified" },
  { icon: ShoppingBag, label: "Shopify" },
  { icon: Search, label: "Semrush" },
  { icon: LineChart, label: "Ahrefs" },
  { icon: CheckCircle, label: "KVKK" },
];

export default function HakkimizdaPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Hakkımızda — SEOROAS",
            description:
              "Arama motoru optimizasyonunu ölçülebilir bir yatırım getirisi (ROAS) odaklı büyüme motoruna dönüştürüyoruz.",
            publisher: {
              "@type": "Organization",
              name: "SEOROAS",
              url: "https://seoroas.com",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Emrah Tonlak",
            jobTitle: "SEO Direktörü",
            description:
              "SEOROAS'ın kurucusu. Teknik SEO, e-ticaret SEO'su ve yapay zekâ aramalarında görünürlük üzerine çalışan bir SEO direktörü.",
            url: "https://seoroas.com/hakkimizda",
            worksFor: {
              "@type": "Organization",
              name: "SEOROAS",
              url: "https://seoroas.com",
            },
            knowsAbout: [
              "SEO",
              "Teknik SEO",
              "E-ticaret SEO",
              "Organik büyüme",
              "GEO (Generative Engine Optimization)",
            ],
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Anadolu Üniversitesi",
            },
            sameAs: ["https://www.linkedin.com/in/emrtonlak/"],
          },
        ]}
      />

      <SubpageHero
        breadcrumb={[{ name: "Hakkımızda", url: "/hakkimizda" }]}
        badge="Biz Kimiz"
        title={
          <>
            SEOROAS:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
              Organik Büyüme Ajansı
            </span>
          </>
        }
        subtitle="Arama motoru optimizasyonunu bir pazarlama harcamasından ziyade, ölçülebilir bir yatırım getirisi (ROAS) odaklı büyüme motoruna dönüştürüyoruz."
      />

      {/* Story */}
      <section className="px-6 md:px-8 py-16 md:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-background">
              Neden Kurulduk?
            </h2>
            <div className="space-y-4 md:space-y-6 text-on-surface-variant text-base md:text-lg leading-relaxed font-light">
              <p>
                10 yılı aşkın süredir dijital pazarlamanın en karmaşık
                labirentlerinde yol alıyoruz. SEOROAS, verinin sezgiden daha
                güçlü olduğuna inanan bir mühendislik disipliniyle doğdu.
              </p>
              <p>
                Arama motorlarındaki görünürlüğü sadece trafik olarak değil, iş
                hedeflerinizle doğrudan örtüşen bir &ldquo;Return on Ad
                Spend&rdquo; mantığıyla yönetiyoruz. Bizim için başarı, sadece
                sıralama değil, sürdürülebilir gelirdir.
              </p>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video rounded-xl overflow-hidden shadow-2xl bg-surface-container-high">
            <div className="absolute inset-0 flex items-center justify-center text-on-surface-variant/30">
              <svg
                className="w-24 h-24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="px-6 md:px-8 py-16 md:py-32">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary font-bold tracking-widest text-xs uppercase mb-10 md:mb-14">
            SEOROAS'ın Arkasındaki İsim
          </p>
          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-start">
            <div className="flex md:flex-col items-center md:items-start gap-5 md:gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-black text-4xl md:text-5xl">E</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-on-background leading-tight">
                  Emrah Tonlak
                </h3>
                <p className="text-sm text-on-surface-variant">
                  SEO Direktörü &amp; Kurucu
                </p>
                <a
                  href="https://www.linkedin.com/in/emrtonlak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs font-bold uppercase tracking-widest text-primary hover:underline"
                >
                  LinkedIn Profili →
                </a>
              </div>
            </div>
            <div className="space-y-5 text-on-surface-variant text-base md:text-lg leading-relaxed font-light">
              <p>
                SEOROAS&apos;ı SEO direktörü Emrah Tonlak kurdu. Kariyerine ajans
                tarafında SEO uzmanı olarak başladı; yıllarını arama motorlarının
                markaları neye göre sıraladığını sökmeye ve şirketleri organik
                trafikle büyütmeye ayırdı.
              </p>
              <p>
                Bugün odağında üç alan var:{" "}
                <Link href="/seo/teknik-seo" className="text-primary font-medium hover:underline">
                  teknik SEO
                </Link>
                ,{" "}
                <Link href="/seo/e-ticaret-seo" className="text-primary font-medium hover:underline">
                  e-ticaret SEO&apos;su
                </Link>{" "}
                ve yapay zekâ aramalarında (
                <Link href="/geo" className="text-primary font-medium hover:underline">
                  GEO
                </Link>
                ) görünürlük. Aynı zamanda OrucApp adlı mobil uygulamanın da
                kurucusu; yani SEO&apos;yu yalnızca danışman gözüyle değil, kendi
                ürününü büyüten biri olarak da uyguluyor.
              </p>
              <p>
                Anadolu Üniversitesi İşletme mezunu. SEOROAS&apos;taki içerikleri,
                sahada test ettiği yöntemlerle ve &ldquo;sıralama değil,
                gelir&rdquo; bakışıyla hazırlıyor. Yazdığı rehberlere{" "}
                <Link href="/blog" className="text-primary font-medium hover:underline">
                  blogdan
                </Link>{" "}
                ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-8 py-16 md:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-4 md:gap-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-background max-w-md">
              Değerlerimizi Veri ve Şeffaflık Üzerine İnşa Ettik
            </h2>
            <p className="text-on-surface-variant uppercase tracking-widest text-xs">
              Temel İlkelerimiz
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-px lg:bg-outline-variant/10">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white py-8 lg:py-12 lg:px-6 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary transition-colors">
                  <v.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3 md:mb-4">{v.title}</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-8 py-16 md:py-20 bg-primary text-on-primary overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:flex md:justify-between items-center text-center md:text-left relative z-10">
          {stats.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center md:items-start">
              {i > 0 && (
                <div className="hidden md:block absolute" style={{ left: `${(i / stats.length) * 100}%` }}>
                  <div className="w-px h-12 bg-on-primary/20 -translate-x-1/2" />
                </div>
              )}
              <span className="text-4xl md:text-5xl font-black tracking-tighter mb-2">
                {s.value}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-80">
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dim to-transparent opacity-50" />
      </section>

      {/* Certifications */}
      <section className="px-6 md:px-8 py-16 md:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-12 md:mb-16">
            Çalıştığımız Araçlar ve Standartlar
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 items-center opacity-40">
            {certifications.map((c) => (
              <div
                key={c.label}
                className="flex flex-col items-center gap-2"
              >
                <c.icon className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1} />
                <span className="text-[10px] font-bold tracking-tight uppercase">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-8 py-20 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tighter text-on-background mb-8 md:mb-12">
            Organik Büyüme Yolculuğunuza Başlayalım
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <Link
              href="/iletisim"
              className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-primary text-white rounded-full font-bold tracking-tight hover:bg-primary-dim transition-all hover:scale-[1.02] shadow-xl shadow-primary/20 text-center"
            >
              Ücretsiz Analiz Alın
            </Link>
            <Link
              href="/seo-fiyatlari"
              className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border border-outline-variant/30 text-on-background rounded-full font-bold tracking-tight hover:bg-surface-container-low transition-all text-center"
            >
              Hizmetlerimize Göz Atın
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
