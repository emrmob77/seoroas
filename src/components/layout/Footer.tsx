import Link from "next/link";

const navLinks = [
  { name: "Gizlilik", href: "/gizlilik-politikasi" },
  { name: "Kullanım Şartları", href: "/kullanim-sartlari" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/seoroas" },
  { name: "İletişim", href: "/iletisim" },
];

export function Footer() {
  return (
    <footer className="bg-slate-50 w-full pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-start space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 w-full">
          {/* Brand */}
          <div>
            <div className="text-lg font-black tracking-tighter text-slate-900 mb-8 uppercase">
              SEOROAS
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs uppercase tracking-widest">
              Digital Architecture for the Performance Era.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-bold text-[10px] uppercase tracking-widest text-slate-900 mb-6">
              Hizmetler
            </h5>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/seo/teknik-seo"
                  className="text-xs tracking-widest uppercase text-slate-400 hover:text-primary transition-colors duration-300"
                >
                  Teknik SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/seo/on-page-seo"
                  className="text-xs tracking-widest uppercase text-slate-400 hover:text-primary transition-colors duration-300"
                >
                  On-Page SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/seo/link-building"
                  className="text-xs tracking-widest uppercase text-slate-400 hover:text-primary transition-colors duration-300"
                >
                  Link Building
                </Link>
              </li>
              <li>
                <Link
                  href="/seo/lokal-seo"
                  className="text-xs tracking-widest uppercase text-slate-400 hover:text-primary transition-colors duration-300"
                >
                  Lokal SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-bold text-[10px] uppercase tracking-widest text-slate-900 mb-6">
              Yasal
            </h5>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs tracking-widest uppercase text-slate-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <h5 className="font-bold text-[10px] uppercase tracking-widest text-slate-900 mb-6">
              Bağlantılar
            </h5>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-widest uppercase text-slate-400 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-xs tracking-widest uppercase text-slate-400 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center border-t border-slate-200/30 pt-12 gap-4">
          <div className="text-xs tracking-widest uppercase text-slate-400">
            © {new Date().getFullYear()} SEOROAS. All Rights Reserved.
          </div>
          <div className="flex space-x-4">
            <span className="text-slate-300 text-xs tracking-widest uppercase">
              Istanbul
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
