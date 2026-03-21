import Link from "next/link";

const serviceLinks = [
  { name: "On-Page SEO", href: "/seo/on-page-seo" },
  { name: "Teknik SEO", href: "/seo/teknik-seo" },
  { name: "Link Building", href: "/seo/link-building" },
  { name: "Lokal SEO", href: "/seo/lokal-seo" },
  { name: "E-ticaret SEO", href: "/seo/e-ticaret-seo" },
  { name: "İçerik SEO", href: "/seo/icerik-seo" },
  { name: "WordPress SEO", href: "/seo/wordpress-seo" },
  { name: "Shopify SEO", href: "/seo/shopify-seo" },
  { name: "Kurumsal SEO", href: "/seo/kurumsal-seo" },
  { name: "SEO Ajansı", href: "/seo/seo-ajansi" },
  { name: "SEO Danışmanlığı", href: "/seo-danismanligi" },
  { name: "SEO Fiyatları", href: "/seo-fiyatlari" },
];

const trackingLinks = [
  { name: "Google Tag Manager", href: "/hizmetler/google-tag-manager" },
  { name: "Meta Pixel & CAPI", href: "/hizmetler/meta-pixel-capi" },
  { name: "TikTok Pixel", href: "/hizmetler/tiktok-pixel" },
];

const cityLinks = [
  { name: "İstanbul SEO Ajansı", href: "/istanbul-seo-ajansi" },
  { name: "Ankara SEO Ajansı", href: "/ankara-seo-ajansi" },
  { name: "İzmir SEO Ajansı", href: "/izmir-seo-ajansi" },
  { name: "Bursa SEO Ajansı", href: "/bursa-seo-ajansi" },
  { name: "Antalya SEO Ajansı", href: "/antalya-seo-ajansi" },
];

const companyLinks = [
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Referanslar", href: "/referanslar" },
  { name: "SEO Danışmanlığı", href: "/seo-danismanligi" },
  { name: "Blog", href: "/blog" },
  { name: "İletişim", href: "/iletisim" },
  { name: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { name: "KVKK", href: "/kullanim-sartlari" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/seoroas" },
];

const linkClass = "text-xs tracking-widest uppercase text-slate-400 hover:text-primary transition-colors duration-300";

export function Footer() {
  return (
    <footer className="bg-slate-50 w-full pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-start space-y-24">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 md:gap-8 w-full">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-lg font-black tracking-tighter text-slate-900 mb-8 uppercase">
              SEOROAS
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs uppercase tracking-widest mb-6">
              Digital Architecture for the Performance Era.
            </p>
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Hizmetler */}
          <div>
            <h5 className="font-bold text-[10px] uppercase tracking-widest text-slate-900 mb-6">
              Hizmetler
            </h5>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Takip & Analitik */}
          <div>
            <h5 className="font-bold text-[10px] uppercase tracking-widest text-slate-900 mb-6">
              Takip & Analitik
            </h5>
            <ul className="space-y-4">
              {trackingLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bölgeler */}
          <div>
            <h5 className="font-bold text-[10px] uppercase tracking-widest text-slate-900 mb-6">
              Bölgeler
            </h5>
            <ul className="space-y-4">
              {cityLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Şirket */}
          <div>
            <h5 className="font-bold text-[10px] uppercase tracking-widest text-slate-900 mb-6">
              Şirket
            </h5>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div className="md:text-right">
            <h5 className="font-bold text-[10px] uppercase tracking-widest text-slate-900 mb-6">
              İletişim
            </h5>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@seoroas.com" className={linkClass}>
                  info@seoroas.com
                </a>
              </li>
              <li>
                <Link href="/iletisim" className={linkClass}>
                  Ücretsiz Analiz Al
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center border-t border-slate-200/30 pt-12 gap-4">
          <div className="text-xs tracking-widest uppercase text-slate-400">
            © {new Date().getFullYear()} SEOROAS. Tüm Hakları Saklıdır.
          </div>
          <div className="flex space-x-6">
            {["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya"].map((city) => (
              <span key={city} className="text-slate-300 text-xs tracking-widest uppercase">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
