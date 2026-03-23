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
  Users,
  Shield,
  Zap,
  Target,
  TrendingUp,
  Mail,
  Phone,
  Settings,
  Star,
  Heart,
  Home,
  Layers,
  type LucideIcon,
} from "lucide-react";
import type {
  NavigationData,
  MegaMenuGroup,
  NavLink,
} from "@/sanity/queries/navigation";

const iconMap: Record<string, LucideIcon> = {
  Search, Code, Link: LinkIcon, MapPin, ShoppingCart, FileText, Globe, Store,
  Tag, BarChart3, MonitorSmartphone, Building2, Briefcase, Users, Shield, Zap,
  Target, TrendingUp, Mail, Phone, Settings, Star, Heart, Home, Layers,
};

// ─── DEFAULTS (Sanity'de veri yoksa kullanılır) ───

const defaultMegaMenuGroups: MegaMenuGroup[] = [
  {
    groupTitle: "SEO",
    links: [
      { title: "On-Page SEO", url: "/seo/on-page-seo", icon: "Search" },
      { title: "Teknik SEO", url: "/seo/teknik-seo", icon: "Code" },
      { title: "Link Building", url: "/seo/link-building", icon: "Link" },
      { title: "Lokal SEO", url: "/seo/lokal-seo", icon: "MapPin" },
      { title: "E-ticaret SEO", url: "/seo/e-ticaret-seo", icon: "ShoppingCart" },
      { title: "İçerik SEO", url: "/seo/icerik-seo", icon: "FileText" },
      { title: "WordPress SEO", url: "/seo/wordpress-seo", icon: "Globe" },
      { title: "Shopify SEO", url: "/seo/shopify-seo", icon: "Store" },
      { title: "Kurumsal SEO", url: "/seo/kurumsal-seo", icon: "Building2" },
      { title: "SEO Ajansı", url: "/seo/seo-ajansi", icon: "Briefcase" },
    ],
  },
  {
    groupTitle: "Takip & Analitik",
    links: [
      { title: "Google Tag Manager", url: "/hizmetler/google-tag-manager", icon: "Tag" },
      { title: "Meta Pixel & CAPI", url: "/hizmetler/meta-pixel-capi", icon: "BarChart3" },
      { title: "TikTok Pixel", url: "/hizmetler/tiktok-pixel", icon: "MonitorSmartphone" },
    ],
  },
  {
    groupTitle: "Bölgeler",
    links: [
      { title: "İstanbul", url: "/istanbul-seo-ajansi", icon: "MapPin" },
      { title: "Ankara", url: "/ankara-seo-ajansi", icon: "MapPin" },
      { title: "İzmir", url: "/izmir-seo-ajansi", icon: "MapPin" },
      { title: "Bursa", url: "/bursa-seo-ajansi", icon: "MapPin" },
      { title: "Antalya", url: "/antalya-seo-ajansi", icon: "MapPin" },
    ],
  },
];

const defaultMainLinks: NavLink[] = [
  { title: "Danışmanlık", url: "/seo-danismanligi" },
  { title: "Referanslar", url: "/referanslar" },
  { title: "Fiyatlar", url: "/seo-fiyatlari" },
  { title: "Blog", url: "/blog" },
  { title: "Hakkımızda", url: "/hakkimizda" },
];

const defaultCtaButton: NavLink = { title: "Analiz Başlat", url: "/iletisim" };
const defaultMegaMenuTitle = "Çözümler";

const defaultMegaMenuBottomLinks: NavLink[] = [
  { title: "Tüm SEO Hizmetleri →", url: "/seo" },
  { title: "Tüm Hizmetler →", url: "/hizmetler" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function isSolutionsActive(pathname: string) {
  return (
    pathname === "/seo" ||
    pathname.startsWith("/seo/") ||
    pathname === "/hizmetler" ||
    pathname.startsWith("/hizmetler/") ||
    pathname.endsWith("-seo-ajansi")
  );
}

function getIcon(name?: string) {
  if (!name) return null;
  return iconMap[name] || null;
}

interface HeaderProps {
  navigation?: NavigationData | null;
}

export function Header({ navigation }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const megaMenuTitle = navigation?.megaMenuTitle || defaultMegaMenuTitle;
  const megaMenuGroups = navigation?.megaMenuGroups?.length ? navigation.megaMenuGroups : defaultMegaMenuGroups;
  const mainLinks = navigation?.mainLinks?.length ? navigation.mainLinks : defaultMainLinks;
  const ctaButton = navigation?.ctaButton?.title ? navigation.ctaButton : defaultCtaButton;
  const megaMenuBottomLinks = navigation?.megaMenuBottomLinks?.length
    ? navigation.megaMenuBottomLinks
    : defaultMegaMenuBottomLinks;

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

  const colCount = megaMenuGroups.length <= 4 ? megaMenuGroups.length : 4;
  const gridCols = colCount === 2 ? "grid-cols-2" : colCount === 3 ? "grid-cols-3" : "grid-cols-4";
  const megaWidth = colCount <= 2 ? "w-[520px]" : colCount === 3 ? "w-[680px]" : "w-[880px]";

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
            {/* Mega dropdown */}
            <div onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
              <button
                className={`${linkBase} ${isSolutionsActive(pathname) ? linkActiveClass : linkIdle} flex items-center gap-1`}
                onClick={() => setDropdownOpen((v) => !v)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                {megaMenuTitle}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 transition-all duration-200 ${
                  dropdownOpen
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 -translate-y-2 pointer-events-none"
                }`}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <div className={`bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-zinc-200/30 p-5 ${megaWidth}`}>
                  <div className={`grid ${gridCols} gap-5`}>
                    {megaMenuGroups.map((group, gi) => {
                      const isLargeGroup = group.links.length > 6;
                      if (isLargeGroup) {
                        const mid = Math.ceil(group.links.length / 2);
                        const col1 = group.links.slice(0, mid);
                        const col2 = group.links.slice(mid);
                        return (
                          <div key={gi} className="col-span-2 grid grid-cols-2 gap-5">
                            <div>
                              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-2 mb-2">
                                {group.groupTitle}
                              </div>
                              {col1.map((link) => {
                                const Icon = getIcon(link.icon);
                                return (
                                  <Link
                                    key={link.url}
                                    href={link.url}
                                    className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-zinc-50 transition-colors"
                                  >
                                    {Icon && <Icon className="h-4 w-4 text-primary/70 shrink-0" />}
                                    <span className="text-sm font-medium text-zinc-700">{link.title}</span>
                                  </Link>
                                );
                              })}
                            </div>
                            <div>
                              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-2 mb-2">&nbsp;</div>
                              {col2.map((link) => {
                                const Icon = getIcon(link.icon);
                                return (
                                  <Link
                                    key={link.url}
                                    href={link.url}
                                    className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-zinc-50 transition-colors"
                                  >
                                    {Icon && <Icon className="h-4 w-4 text-primary/70 shrink-0" />}
                                    <span className="text-sm font-medium text-zinc-700">{link.title}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div key={gi}>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-2 mb-2">
                            {group.groupTitle}
                          </div>
                          {group.links.map((link) => {
                            const Icon = getIcon(link.icon);
                            return (
                              <Link
                                key={link.url}
                                href={link.url}
                                className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-zinc-50 transition-colors"
                              >
                                {Icon && <Icon className="h-4 w-4 text-primary/70 shrink-0" />}
                                <span className="text-sm font-medium text-zinc-700">{link.title}</span>
                              </Link>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>

                  {megaMenuBottomLinks.length > 0 && (
                    <div className="flex items-center justify-center gap-6 mt-4 pt-3 border-t border-zinc-200/40">
                      {megaMenuBottomLinks.map((link) => (
                        <Link
                          key={link.url}
                          href={link.url}
                          className="text-xs font-bold tracking-widest text-primary hover:opacity-70 transition-opacity"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {mainLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className={`${linkBase} ${isActive(pathname, link.url) ? linkActiveClass : linkIdle}`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href={ctaButton.url}
              className="hidden lg:inline-flex bg-primary text-on-primary px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              {ctaButton.title}
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
            {/* Mega menu mobile */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between py-4 text-sm font-semibold text-zinc-900 border-b border-zinc-100"
            >
              {megaMenuTitle}
              <ChevronDown
                className={`h-5 w-5 text-zinc-400 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-3 flex flex-col gap-0 py-2 border-b border-zinc-100">
                {megaMenuGroups.map((group, gi) => (
                  <div key={gi}>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 py-2 mt-2">
                      {group.groupTitle}
                    </div>
                    {group.links.map((link) => {
                      const Icon = getIcon(link.icon);
                      return (
                        <Link
                          key={link.url}
                          href={link.url}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 py-2.5 text-sm text-zinc-600 hover:text-primary transition-colors"
                        >
                          {Icon && <Icon className="h-4 w-4" />}
                          {link.title}
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}

            {/* Main links */}
            {mainLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                onClick={() => setMobileOpen(false)}
                className={`py-4 text-sm font-semibold border-b border-zinc-100 ${
                  isActive(pathname, link.url) ? "text-primary" : "text-zinc-900"
                }`}
              >
                {link.title}
              </Link>
            ))}

            {/* İletişim */}
            <Link
              href={ctaButton.url}
              onClick={() => setMobileOpen(false)}
              className={`py-4 text-sm font-semibold border-b border-zinc-100 ${
                isActive(pathname, ctaButton.url) ? "text-primary" : "text-zinc-900"
              }`}
            >
              İletişim
            </Link>

            <div className="mt-auto pt-6">
              <Link
                href={ctaButton.url}
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
