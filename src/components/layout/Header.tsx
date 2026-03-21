"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search, Code, Link as LinkIcon, MapPin, ShoppingCart, FileText } from "lucide-react";

const services = [
  { name: "On-Page SEO", href: "/seo/on-page-seo", icon: Search },
  { name: "Teknik SEO", href: "/seo/teknik-seo", icon: Code },
  { name: "Link Building", href: "/seo/link-building", icon: LinkIcon },
  { name: "Lokal SEO", href: "/seo/lokal-seo", icon: MapPin },
  { name: "E-ticaret SEO", href: "/seo/e-ticaret-seo", icon: ShoppingCart },
  { name: "İçerik SEO", href: "/seo/icerik-seo", icon: FileText },
];

const navLinks = [
  { name: "Metodoloji", href: "/metodoloji" },
  { name: "Referanslar", href: "/vaka-calismalari" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <nav
        className={`rounded-full border-[0.5px] border-white/20 bg-white/70 backdrop-blur-3xl flex justify-between items-center px-8 py-3 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_20px_50px_rgba(0,0,0,0.08)]" : "shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-[0.2em] uppercase text-slate-900">
          SEOROAS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {/* Hizmetler Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="tracking-[0.1em] font-light text-sm uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-500 flex items-center gap-1"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Çözümler
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-[0.5px] border-outline-variant/20 p-4 grid grid-cols-2 gap-1 w-[420px]">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-container-low transition-colors"
                    >
                      <div className="w-8 h-8 flex items-center justify-center bg-primary/5 rounded-full">
                        <s.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-on-surface">{s.name}</span>
                    </Link>
                  ))}
                  <Link
                    href="/seo"
                    className="col-span-2 text-center text-xs font-bold uppercase tracking-widest text-primary hover:opacity-70 mt-2 pt-3 border-t border-outline-variant/20 transition-opacity"
                  >
                    Tüm Hizmetler →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="tracking-[0.1em] font-light text-sm uppercase text-on-surface-variant hover:text-on-surface transition-colors duration-500"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/iletisim"
            className="hidden md:inline-flex bg-primary text-on-primary px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all duration-200"
          >
            Analiz Başlat
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

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-xl z-40 overflow-y-auto">
          <div className="px-8 py-8 flex flex-col gap-2">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between py-4 text-sm font-bold uppercase tracking-widest text-on-surface"
            >
              Çözümler
              <ChevronDown
                className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-1 mb-4">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-3 text-sm text-on-surface-variant hover:text-primary"
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
                className="py-4 text-sm font-bold uppercase tracking-widest text-on-surface border-t border-outline-variant/20"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/iletisim"
              onClick={() => setMobileOpen(false)}
              className="mt-6 w-full text-center bg-primary text-on-primary font-bold uppercase tracking-widest text-xs py-4 rounded-full transition-opacity hover:opacity-90"
            >
              Analiz Başlat
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
