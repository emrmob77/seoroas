import { post } from "./post";
import { page } from "./page";
import { service } from "./service";
import { caseStudy } from "./caseStudy";
import { localPage } from "./localPage";
import { faq } from "./faq";
import { testimonial } from "./testimonial";
import { siteSettings } from "./siteSettings";
import { seoFields } from "./seoFields";
import { redirect } from "./redirect";
import { category } from "./category";
import { navigation } from "./navigation";
import { pageSeo } from "./pageSeo";

export const schemaTypes = [
  seoFields,
  post,
  page,
  pageSeo,
  service,
  caseStudy,
  localPage,
  faq,
  testimonial,
  category,
  redirect,
  siteSettings,
  navigation,
];
