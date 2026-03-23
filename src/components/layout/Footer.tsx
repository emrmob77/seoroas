import Link from "next/link";
import type { NavigationData, FooterColumn } from "@/sanity/queries/navigation";

const defaultFooterColumns: FooterColumn[] = [
  {
    title: "Hizmetler",
    links: [
      { title: "On-Page SEO", url: "/seo/on-page-seo" },
      { title: "Teknik SEO", url: "/seo/teknik-seo" },
      { title: "Link Building", url: "/seo/link-building" },
      { title: "Lokal SEO", url: "/seo/lokal-seo" },
      { title: "E-ticaret SEO", url: "/seo/e-ticaret-seo" },
      { title: "İçerik SEO", url: "/seo/icerik-seo" },
      { title: "WordPress SEO", url: "/seo/wordpress-seo" },
      { title: "Shopify SEO", url: "/seo/shopify-seo" },
      { title: "Kurumsal SEO", url: "/seo/kurumsal-seo" },
      { title: "SEO Ajansı", url: "/seo/seo-ajansi" },
      { title: "SEO Danışmanlığı", url: "/seo-danismanligi" },
      { title: "SEO Fiyatları", url: "/seo-fiyatlari" },
    ],
  },
  {
    title: "Takip & Analitik",
    links: [
      { title: "Google Tag Manager", url: "/hizmetler/google-tag-manager" },
      { title: "Meta Pixel & CAPI", url: "/hizmetler/meta-pixel-capi" },
      { title: "TikTok Pixel", url: "/hizmetler/tiktok-pixel" },
    ],
  },
  {
    title: "Bölgeler",
    links: [
      { title: "İstanbul SEO Ajansı", url: "/istanbul-seo-ajansi" },
      { title: "Ankara SEO Ajansı", url: "/ankara-seo-ajansi" },
      { title: "İzmir SEO Ajansı", url: "/izmir-seo-ajansi" },
      { title: "Bursa SEO Ajansı", url: "/bursa-seo-ajansi" },
      { title: "Antalya SEO Ajansı", url: "/antalya-seo-ajansi" },
    ],
  },
  {
    title: "Şirket",
    links: [
      { title: "Hakkımızda", url: "/hakkimizda" },
      { title: "Referanslar", url: "/referanslar" },
      { title: "SEO Danışmanlığı", url: "/seo-danismanligi" },
      { title: "Blog", url: "/blog" },
      { title: "İletişim", url: "/iletisim" },
      { title: "Gizlilik Politikası", url: "/gizlilik-politikasi" },
      { title: "KVKK", url: "/kullanim-sartlari" },
    ],
  },
  {
    title: "İletişim",
    links: [
      { title: "info@seoroas.com", url: "mailto:info@seoroas.com" },
      { title: "Ücretsiz Analiz Al", url: "/iletisim" },
    ],
  },
];

const defaultTagline = "Performans Odaklı Dijital Mimari.";
const defaultCities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya"];

const linkClass =
  "text-xs tracking-widest uppercase text-slate-500 hover:text-primary transition-colors duration-300";

interface FooterProps {
  navigation?: NavigationData | null;
}

export function Footer({ navigation }: FooterProps) {
  const hidden = new Set(navigation?.hiddenPaths ?? []);
  const isVisible = (url: string) => !hidden.has(url);

  const rawColumns = navigation?.footerColumns?.length
    ? navigation.footerColumns
    : defaultFooterColumns;
  const footerColumns = rawColumns
    .map((col) => ({ ...col, links: col.links.filter((l) => isVisible(l.url)) }))
    .filter((col) => col.links.length > 0);
  const tagline = navigation?.footerTagline || defaultTagline;
  const cities = navigation?.footerBottomCities?.length
    ? navigation.footerBottomCities
    : defaultCities;

  return (
    <footer className="bg-slate-50 w-full pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-start space-y-24">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 md:gap-8 w-full">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-lg font-black tracking-tighter text-slate-900 mb-8 uppercase">
              SEOROAS
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs uppercase tracking-widest mb-6">
              {tagline}
            </p>
            <a
              href="https://linkedin.com/company/seoroas"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>
          </div>

          {/* Dynamic columns */}
          {footerColumns.map((col, ci) => (
            <div key={ci} className={ci === footerColumns.length - 1 ? "md:text-right" : ""}>
              <div
                className="font-bold text-[10px] uppercase tracking-widest text-slate-900 mb-6"
                role="heading"
                aria-level={2}
              >
                {col.title}
              </div>
              <ul className="space-y-4">
                {col.links.map((link, li) => {
                  const isExternal =
                    link.isExternal ||
                    link.url.startsWith("mailto:") ||
                    link.url.startsWith("http");

                  if (isExternal) {
                    return (
                      <li key={li}>
                        <a
                          href={link.url}
                          target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                          rel={
                            link.url.startsWith("mailto:")
                              ? undefined
                              : "noopener noreferrer"
                          }
                          className={linkClass}
                        >
                          {link.title}
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li key={li}>
                      <Link href={link.url} className={linkClass}>
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center border-t border-slate-200/30 pt-12 gap-4">
          <div className="text-xs tracking-widest uppercase text-slate-500">
            © {new Date().getFullYear()} SEOROAS. Tüm Hakları Saklıdır.
          </div>
          <div className="flex space-x-6">
            {cities.map((city) => (
              <span
                key={city}
                className="text-slate-500 text-xs tracking-widest uppercase"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
