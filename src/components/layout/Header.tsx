"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Code,
  Link as LinkIcon,
  MapPin,
  ShoppingCart,
  FileText,
  Globe,
  Store,
  Tag,
  BarChart3,
  MonitorSmartphone,
  Building2,
  Briefcase,
} from "lucide-react";

const seoServices = [
  { name: "On-Page SEO", href: "/seo/on-page-seo", icon: Search },
  { name: "Teknik SEO", href: "/seo/teknik-seo", icon: Code },
  { name: "Link Building", href: "/seo/link-building", icon: LinkIcon },
  { name: "Lokal SEO", href: "/seo/lokal-seo", icon: MapPin },
  { name: "E-ticaret SEO", href: "/seo/e-ticaret-seo", icon: ShoppingCart },
  { name: "İçerik SEO", href: "/seo/icerik-seo", icon: FileText },
  { name: "WordPress SEO", href: "/seo/wordpress-seo", icon: Globe },
  { name: "Shopify SEO", href: "/seo/shopify-seo", icon: Store },
  { name: "Kurumsal SEO", href: "/seo/kurumsal-seo", icon: Building2 },
  { name: "SEO Ajansı", href: "/seo/seo-ajansi", icon: Briefcase },
];

const trackingServices = [
  { name: "Google Tag Manager", href: "/hizmetler/google-tag-manager", icon: Tag },
  { name: "Meta Pixel & CAPI", href: "/hizmetler/meta-pixel-capi", icon: BarChart3 },
  { name: "TikTok Pixel", href: "/hizmetler/tiktok-pixel", icon: MonitorSmartphone },
];

const cities = [
  { name: "İstanbul", href: "/istanbul-seo-ajansi" },
  { name: "Ankara", href: "/ankara-seo-ajansi" },
  { name: "İzmir", href: "/izmir-seo-ajansi" },
  { name: "Bursa", href: "/bursa-seo-ajansi" },
  { name: "Antalya", href: "/antalya-seo-ajansi" },
];

const navLinks = [
  { name: "Danışmanlık", href: "/seo-danismanligi" },
  { name: "Referanslar", href: "/referanslar" },
  { name: "Fiyatlar", href: "/seo-fiyatlari" },
  { name: "Blog", href: "/blog" },
  { name: "Hakkımızda", href: "/hakkimizda" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function isSolutionsActive(pathname: string) {
  return (
    pathname.startsWith("/seo/") ||
    pathname.startsWith("/hizmetler/") ||
    pathname.endsWith("-seo-ajansi")
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCitiesOpen, setMobileCitiesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

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

  const openDropdown = useCallback(() => {
    clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 200);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const linkBase = "tracking-tight text-sm font-medium transition-colors duration-300";
  const linkIdle = "text-zinc-500 hover:text-zinc-900";
  const linkActiveClass = "text-zinc-900 font-semibold border-b-2 border-primary pb-1";

  return (
    <>
      <header className="fixed top-0 w-full z-50 pt-4 px-4">
        <nav
          className={`relative mx-auto max-w-6xl rounded-full border border-zinc-200/20 bg-white/70 backdrop-blur-3xl flex justify-between items-center px-6 lg:px-8 py-3 transition-shadow duration-300 ${
            scrolled
              ? "shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]"
              : "shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]"
          }`}
        >
          <Link href="/" className="text-xl font-bold tracking-tighter text-zinc-900 shrink-0">
            SEOROAS
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Çözümler mega dropdown */}
            <div
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                className={`${linkBase} ${isSolutionsActive(pathname) ? linkActiveClass : linkIdle} flex items-center gap-1`}
                onClick={() => setDropdownOpen((v) => !v)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Çözümler
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Mega menu — positioned relative to <nav> via `relative` on nav */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 transition-all duration-200 ${
                  dropdownOpen
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 -translate-y-2 pointer-events-none"
                }`}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-zinc-200/30 p-5 w-[880px]">
                  <div className="grid grid-cols-4 gap-5">
                    {/* SEO col 1 */}
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-2 mb-2">SEO</div>
                      {seoServices.slice(0, 5).map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-zinc-50 transition-colors"
                        >
                          <s.icon className="h-4 w-4 text-primary/70 shrink-0" />
                          <span className="text-sm font-medium text-zinc-700">{s.name}</span>
                        </Link>
                      ))}
                    </div>

                    {/* SEO col 2 */}
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-2 mb-2">&nbsp;</div>
                      {seoServices.slice(5).map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-zinc-50 transition-colors"
                        >
                          <s.icon className="h-4 w-4 text-primary/70 shrink-0" />
                          <span className="text-sm font-medium text-zinc-700">{s.name}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Takip & Analitik */}
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-2 mb-2">Takip & Analitik</div>
                      {trackingServices.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-zinc-50 transition-colors"
                        >
                          <s.icon className="h-4 w-4 text-primary/70 shrink-0" />
                          <span className="text-sm font-medium text-zinc-700">{s.name}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Bölgeler */}
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-2 mb-2">Bölgeler</div>
                      {cities.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-zinc-50 transition-colors"
                        >
                          <MapPin className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                          <span className="text-sm font-medium text-zinc-700">{c.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/seo-fiyatlari"
                    className="block text-center text-xs font-bold tracking-widest text-primary hover:opacity-70 mt-4 pt-3 border-t border-zinc-200/40 transition-opacity"
                  >
                    Tüm Fiyatları Gör →
                  </Link>
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkBase} ${isActive(pathname, link.href) ? linkActiveClass : linkIdle}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/iletisim"
              className="hidden lg:inline-flex bg-primary text-on-primary px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              Analiz Başlat
            </Link>

            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-zinc-100">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-xl font-bold tracking-tighter text-zinc-900"
            >
              SEOROAS
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2"
              aria-label="Menüyü kapat"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 bg-white overflow-y-auto px-6 py-4 flex flex-col gap-0">
            {/* Çözümler */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between py-4 text-sm font-semibold text-zinc-900 border-b border-zinc-100"
            >
              Çözümler
              <ChevronDown
                className={`h-5 w-5 text-zinc-400 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-3 flex flex-col gap-0 py-2 border-b border-zinc-100">
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 py-2">
                  SEO Hizmetleri
                </div>
                {seoServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2.5 text-sm text-zinc-600 hover:text-primary transition-colors"
                  >
                    <s.icon className="h-4 w-4" />
                    {s.name}
                  </Link>
                ))}
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 py-2 mt-2">
                  Takip & Analitik
                </div>
                {trackingServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2.5 text-sm text-zinc-600 hover:text-primary transition-colors"
                  >
                    <s.icon className="h-4 w-4" />
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Bölgeler */}
            <button
              onClick={() => setMobileCitiesOpen(!mobileCitiesOpen)}
              className="flex items-center justify-between py-4 text-sm font-semibold text-zinc-900 border-b border-zinc-100"
            >
              Bölgeler
              <ChevronDown
                className={`h-5 w-5 text-zinc-400 transition-transform ${mobileCitiesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileCitiesOpen && (
              <div className="pl-3 flex flex-col gap-0 py-2 border-b border-zinc-100">
                {cities.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2.5 text-sm text-zinc-600 hover:text-primary transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    {c.name} SEO Ajansı
                  </Link>
                ))}
              </div>
            )}

            {/* Flat links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-4 text-sm font-semibold border-b border-zinc-100 ${
                  isActive(pathname, link.href) ? "text-primary" : "text-zinc-900"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* İletişim */}
            <Link
              href="/iletisim"
              onClick={() => setMobileOpen(false)}
              className={`py-4 text-sm font-semibold border-b border-zinc-100 ${
                isActive(pathname, "/iletisim") ? "text-primary" : "text-zinc-900"
              }`}
            >
              İletişim
            </Link>

            <div className="mt-auto pt-6">
              <Link
                href="/iletisim"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-primary text-on-primary font-semibold text-sm py-4 rounded-full transition-opacity hover:opacity-90"
              >
                Ücretsiz SEO Analizi
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
