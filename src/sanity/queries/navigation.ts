import { sanityFetch } from "../client";

export interface NavLink {
  title: string;
  url: string;
}

export interface MegaMenuLink extends NavLink {
  icon?: string;
}

export interface MegaMenuGroup {
  groupTitle: string;
  links: MegaMenuLink[];
}

export interface FooterLink extends NavLink {
  isExternal?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface NavigationData {
  megaMenuTitle: string;
  mainLinks: NavLink[];
  ctaButton: NavLink;
  megaMenuGroups: MegaMenuGroup[];
  megaMenuBottomLinks: NavLink[];
  footerTagline: string;
  footerColumns: FooterColumn[];
  footerBottomCities: string[];
}

const NAVIGATION_QUERY = `*[_type == "navigation"][0]{
  megaMenuTitle,
  mainLinks[]{ title, url },
  ctaButton{ title, url },
  megaMenuGroups[]{ groupTitle, links[]{ title, url, icon } },
  megaMenuBottomLinks[]{ title, url },
  footerTagline,
  footerColumns[]{ title, links[]{ title, url, isExternal } },
  footerBottomCities
}`;

export async function fetchNavigation(): Promise<NavigationData | null> {
  const data = await sanityFetch<NavigationData | null>(NAVIGATION_QUERY);
  if (!data || !data.mainLinks) return null;
  return data;
}
