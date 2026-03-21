import Link from "next/link";
import {
  Search,
  Code,
  Link as LinkIcon,
  MapPin,
  ShoppingCart,
  FileText,
} from "lucide-react";

const services = [
  {
    title: "Teknik SEO Denetimi",
    description:
      "Web sitenizin altyapısını arama motorları için kusursuz hale getiriyor, tarama bütçesini optimize ediyoruz.",
    icon: Code,
    href: "/seo/teknik-seo",
  },
  {
    title: "İçerik Stratejisi",
    description:
      "Kullanıcı niyetini temel alan, otorite kuran ve dönüşüm odaklı editoryal planlamalar sunuyoruz.",
    icon: FileText,
    href: "/seo/icerik-seo",
  },
  {
    title: "Otorite İnşası",
    description:
      "Yüksek kaliteli backlink profilleri ve PR entegreli bağlantı stratejileri ile domain otoritenizi yükseltiyoruz.",
    icon: LinkIcon,
    href: "/seo/link-building",
  },
  {
    title: "Veri Analitiği",
    description:
      "Tüm SEO süreçlerini ölçülebilir KPI'lar ve gelişmiş raporlama araçlarıyla şeffaf bir şekilde yönetiyoruz.",
    icon: Search,
    href: "/seo/on-page-seo",
  },
  {
    title: "Yerel SEO",
    description:
      "Bölgesel aramalarda zirveye çıkarak fiziksel ve dijital trafik arasındaki köprüyü güçlendiriyoruz.",
    icon: MapPin,
    href: "/seo/lokal-seo",
  },
  {
    title: "E-Ticaret SEO",
    description:
      "Ürün sayfalarınızı satış makinelerine dönüştürüyor, kategori bazlı görünürlük sağlıyoruz.",
    icon: ShoppingCart,
    href: "/seo/e-ticaret-seo",
  },
];

export function Services() {
  return (
    <section className="py-32 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">
              Architectural Services
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tight-tracking text-on-background">
              Büyümeyi Şansa Bırakmayan Çözümler.
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-sm font-light leading-relaxed">
            Her projemiz, teknik mükemmellik ve kullanıcı odaklı içerik
            stratejisi üzerine inşa edilmiş birer dijital yapıdır.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="bg-surface-container-lowest p-12 rounded-2xl border-[0.5px] border-outline-variant/10 hover:shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/5 rounded-full mb-8 group-hover:bg-primary transition-colors duration-500">
                <service.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-on-background">
                {service.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
