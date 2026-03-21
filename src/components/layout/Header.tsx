"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search, Code, Link as LinkIcon, MapPin, ShoppingCart, FileText } from "lucide-react";

const services = [
  { name: "On-Page SEO", href: "/seo-hizmetleri/on-page-seo", icon: Search },
  { name: "Teknik SEO", href: "/seo-hizmetleri/teknik-seo", icon: Code },
  { name: "Link Building", href: "/seo-hizmetleri/link-building", icon: LinkIcon },
  { name: "Lokal SEO", href: "/seo-hizmetleri/lokal-seo", icon: MapPin },
  { name: "E-ticaret SEO", href: "/seo-hizmetleri/e-ticaret-seo", icon: ShoppingCart },
  { name: "İçerik SEO", href: "/seo-hizmetleri/icerik-seo", icon: FileText },
];

const navLinks = [
  { name: "Blog", href: "/blog" },
  { name: "Fiyatlar", href: "/seo-fiyatlari" },
  { name: "Hakkımızda", href: "/hakkimizda" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <nav className="flex items-center justify-between h-[72px] md:h-[56px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="8" fill="#1A56DB" />
              <path d="M8 20.5C8 17.5 10 15.5 13 15.5C10.5 15.5 9 13.5 9 11.5C9 9 11 7 14 7H20V11H15C14 11 13.5 11.5 13.5 12.25C13.5 13 14 13.5 15 13.5H20V17.5H14.5C13.25 17.5 12.5 18.25 12.5 19.25C12.5 20.25 13.25 21 14.5 21H20V25H13C10 25 8 23 8 20.5Z" fill="white"/>
            </svg>
            <span className="text-xl font-bold text-dark">
              SEO<span className="text-primary">ROAS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* Hizmetler Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-dark hover:text-primary transition-colors"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Hizmetler
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="bg-white rounded-xl shadow-lg border border-border p-4 grid grid-cols-2 gap-1 w-[420px]">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-light transition-colors"
                      >
                        <s.icon className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm font-medium text-dark">{s.name}</span>
                      </Link>
                    ))}
                    <Link
                      href="/seo-hizmetleri"
                      className="col-span-2 text-center text-sm font-medium text-primary hover:underline mt-2 pt-2 border-t border-border"
                    >
                      Tüm Hizmetleri Gör →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-dark hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/iletisim"
              className="hidden md:inline-flex items-center bg-accent hover:bg-accent-dark text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
            >
              Ücretsiz SEO Analizi
            </Link>

            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[56px] bg-white z-40 overflow-y-auto">
          <div className="px-6 py-6 flex flex-col gap-2">
            {/* Hizmetler */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between py-3 text-base font-medium text-dark"
            >
              Hizmetler
              <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-1 mb-2">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2.5 text-sm text-gray hover:text-primary"
                  >
                    <s.icon className="h-4 w-4" />
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-base font-medium text-dark border-t border-border"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/iletisim"
              onClick={() => setMobileOpen(false)}
              className="mt-4 w-full text-center bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-lg transition-colors"
            >
              Ücretsiz SEO Analizi
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
