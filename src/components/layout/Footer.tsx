import Link from "next/link";
import { Twitter, Linkedin, Youtube, Mail, Phone } from "lucide-react";

const serviceLinks = [
  { name: "On-Page SEO", href: "/seo-hizmetleri/on-page-seo" },
  { name: "Teknik SEO", href: "/seo-hizmetleri/teknik-seo" },
  { name: "Link Building", href: "/seo-hizmetleri/link-building" },
  { name: "Lokal SEO", href: "/seo-hizmetleri/lokal-seo" },
  { name: "E-ticaret SEO", href: "/seo-hizmetleri/e-ticaret-seo" },
  { name: "Fiyatlar", href: "/seo-fiyatlari" },
];

const companyLinks = [
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Blog", href: "/blog" },
  { name: "Vaka Çalışmaları", href: "/vaka-calismalari" },
  { name: "İletişim", href: "/iletisim" },
];

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/seoroas", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/seoroas", icon: Linkedin },
  { name: "YouTube", href: "https://youtube.com/@seoroas", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-dark text-gray-300 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="#1A56DB" />
                <path d="M8 20.5C8 17.5 10 15.5 13 15.5C10.5 15.5 9 13.5 9 11.5C9 9 11 7 14 7H20V11H15C14 11 13.5 11.5 13.5 12.25C13.5 13 14 13.5 15 13.5H20V17.5H14.5C13.25 17.5 12.5 18.25 12.5 19.25C12.5 20.25 13.25 21 14.5 21H20V25H13C10 25 8 23 8 20.5Z" fill="white"/>
              </svg>
              <span className="text-lg font-bold text-white">
                SEO<span className="text-blue-400">ROAS</span>
              </span>
            </Link>
            <p className="text-sm leading-6 mb-6">
              Kanıtlanmış SEO stratejileriyle işletmenizi Google&apos;da
              zirveye taşıyoruz. Veriye dayalı, şeffaf, sonuç odaklı.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Şirket */}
          <div>
            <h3 className="text-white font-semibold mb-4">Şirket</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-white font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@seoroas.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                  <Mail className="h-4 w-4 shrink-0" />
                  info@seoroas.com
                </a>
              </li>
              <li>
                <a href="tel:+902121234567" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                  <Phone className="h-4 w-4 shrink-0" />
                  +90 (212) 123 45 67
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} SEOROAS. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-sartlari" className="hover:text-white transition-colors">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
