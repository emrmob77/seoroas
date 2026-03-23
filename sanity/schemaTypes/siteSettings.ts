import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Ayarları",
  type: "document",
  groups: [
    { name: "general", title: "Genel", default: true },
    { name: "seo", title: "SEO & Doğrulama" },
    { name: "robots", title: "robots.txt" },
    { name: "sitemap", title: "Sitemap" },
    { name: "social", title: "Sosyal Medya" },
    { name: "analytics", title: "Analytics & Tracking" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Site Başlığı",
      type: "string",
      group: "general",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Site Açıklaması",
      type: "text",
      rows: 3,
      group: "general",
    }),
    defineField({
      name: "phone",
      title: "Telefon",
      type: "string",
      group: "general",
    }),
    defineField({
      name: "email",
      title: "E-posta",
      type: "string",
      group: "general",
    }),
    defineField({
      name: "address",
      title: "Adres",
      type: "text",
      rows: 2,
      group: "general",
    }),

    defineField({
      name: "defaultOgImage",
      title: "Varsayılan OG Görseli",
      type: "image",
      description: "Sosyal paylaşımlarda kullanılacak varsayılan görsel (1200x630px)",
      options: { hotspot: true },
      group: "seo",
    }),
    defineField({
      name: "googleVerification",
      title: "Google Search Console Doğrulama",
      type: "string",
      description: "google-site-verification meta etiketinin content değeri",
      group: "seo",
    }),
    defineField({
      name: "bingVerification",
      title: "Bing Webmaster Doğrulama",
      type: "string",
      description: "msvalidate.01 meta etiketinin content değeri",
      group: "seo",
    }),
    defineField({
      name: "yandexVerification",
      title: "Yandex Webmaster Doğrulama",
      type: "string",
      description: "yandex-verification meta etiketinin content değeri",
      group: "seo",
    }),

    // robots.txt
    defineField({
      name: "robotsDisallow",
      title: "Engellenecek Yollar",
      type: "array",
      description: "robots.txt'de engellenmesini istediğiniz URL yolları (ör: /admin/, /api/)",
      of: [{ type: "string" }],
      group: "robots",
    }),
    defineField({
      name: "robotsCustomRules",
      title: "Özel robots.txt Kuralları",
      type: "text",
      rows: 8,
      description: "Varsa ek robots.txt kuralları (satır satır yazın). Boş bırakılırsa varsayılan kurallar kullanılır.",
      group: "robots",
    }),

    // Sitemap
    defineField({
      name: "sitemapExclude",
      title: "Sitemap'ten Hariç Tutulacak Yollar",
      type: "array",
      description: "Sitemap'e dahil edilmemesini istediğiniz URL yolları (ör: /tesekkurler)",
      of: [{ type: "string" }],
      group: "sitemap",
    }),
    defineField({
      name: "sitemapChangeFrequency",
      title: "Varsayılan Güncelleme Sıklığı",
      type: "string",
      options: {
        list: [
          { title: "Her zaman", value: "always" },
          { title: "Saatlik", value: "hourly" },
          { title: "Günlük", value: "daily" },
          { title: "Haftalık", value: "weekly" },
          { title: "Aylık", value: "monthly" },
          { title: "Yıllık", value: "yearly" },
        ],
      },
      initialValue: "weekly",
      group: "sitemap",
    }),

    defineField({
      name: "googleAnalyticsId",
      title: "Google Analytics 4 (Measurement ID)",
      type: "string",
      description: "Ör: G-XXXXXXXXXX",
      group: "analytics",
    }),
    defineField({
      name: "googleTagManagerId",
      title: "Google Tag Manager (Container ID)",
      type: "string",
      description: "Ör: GTM-XXXXXXX",
      group: "analytics",
    }),

    defineField({
      name: "socialProfiles",
      title: "Sosyal Medya Profilleri",
      type: "object",
      group: "social",
      fields: [
        defineField({
          name: "twitter",
          title: "Twitter / X",
          type: "url",
        }),
        defineField({
          name: "linkedin",
          title: "LinkedIn",
          type: "url",
        }),
        defineField({
          name: "instagram",
          title: "Instagram",
          type: "url",
        }),
        defineField({
          name: "youtube",
          title: "YouTube",
          type: "url",
        }),
        defineField({
          name: "facebook",
          title: "Facebook",
          type: "url",
        }),
      ],
      options: { collapsible: true, collapsed: true },
    }),
  ],
});
