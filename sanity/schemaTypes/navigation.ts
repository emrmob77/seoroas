import { defineField, defineType } from "sanity";

const iconOptions = [
  { title: "Search", value: "Search" },
  { title: "Code", value: "Code" },
  { title: "Link", value: "Link" },
  { title: "MapPin", value: "MapPin" },
  { title: "ShoppingCart", value: "ShoppingCart" },
  { title: "FileText", value: "FileText" },
  { title: "Globe", value: "Globe" },
  { title: "Store", value: "Store" },
  { title: "Tag", value: "Tag" },
  { title: "BarChart3", value: "BarChart3" },
  { title: "MonitorSmartphone", value: "MonitorSmartphone" },
  { title: "Building2", value: "Building2" },
  { title: "Briefcase", value: "Briefcase" },
  { title: "Users", value: "Users" },
  { title: "Shield", value: "Shield" },
  { title: "Zap", value: "Zap" },
  { title: "Target", value: "Target" },
  { title: "TrendingUp", value: "TrendingUp" },
  { title: "Mail", value: "Mail" },
  { title: "Phone", value: "Phone" },
  { title: "Settings", value: "Settings" },
  { title: "Star", value: "Star" },
  { title: "Heart", value: "Heart" },
  { title: "Home", value: "Home" },
  { title: "Layers", value: "Layers" },
];

export const navigation = defineType({
  name: "navigation",
  title: "Menü Yönetimi",
  type: "document",
  groups: [
    { name: "header", title: "Üst Menü (Header)", default: true },
    { name: "megaMenu", title: "Mega Menü (Dropdown)" },
    { name: "footer", title: "Alt Menü (Footer)" },
  ],
  fields: [
    // ─── HEADER ───
    defineField({
      name: "megaMenuTitle",
      title: "Mega Menü Buton Başlığı",
      type: "string",
      description: 'Dropdown tetikleyen butonun adı (ör: "Çözümler")',
      group: "header",
      initialValue: "Çözümler",
    }),
    defineField({
      name: "mainLinks",
      title: "Header Ana Linkler",
      description: "Mega menünün sağındaki düz linkler (Danışmanlık, Blog vb.)",
      type: "array",
      group: "header",
      of: [
        {
          type: "object",
          name: "mainLink",
          title: "Link",
          fields: [
            defineField({
              name: "title",
              title: "Başlık",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "string",
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "url" },
          },
        },
      ],
    }),
    defineField({
      name: "ctaButton",
      title: "CTA Butonu",
      description: "Header'ın sağ köşesindeki aksiyon butonu",
      type: "object",
      group: "header",
      fields: [
        defineField({ name: "title", title: "Buton Metni", type: "string" }),
        defineField({ name: "url", title: "URL", type: "string" }),
      ],
    }),

    // ─── MEGA MENU ───
    defineField({
      name: "megaMenuGroups",
      title: "Mega Menü Grupları",
      description:
        "Dropdown içindeki sütunlar. Her grup bir sütun olarak görünür.",
      type: "array",
      group: "megaMenu",
      of: [
        {
          type: "object",
          name: "menuGroup",
          title: "Menü Grubu",
          fields: [
            defineField({
              name: "groupTitle",
              title: "Grup Başlığı",
              type: "string",
              description: 'Sütun üst başlığı (ör: "SEO", "Takip & Analitik", "Bölgeler")',
            }),
            defineField({
              name: "links",
              title: "Linkler",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "megaLink",
                  title: "Link",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Başlık",
                      type: "string",
                      validation: (r) => r.required(),
                    }),
                    defineField({
                      name: "url",
                      title: "URL",
                      type: "string",
                      validation: (r) => r.required(),
                    }),
                    defineField({
                      name: "icon",
                      title: "İkon",
                      type: "string",
                      description: "Lucide ikon adı",
                      options: { list: iconOptions },
                    }),
                  ],
                  preview: {
                    select: { title: "title", subtitle: "url" },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: { title: "groupTitle" },
            prepare({ title }) {
              return { title: title || "Grup" };
            },
          },
        },
      ],
    }),
    defineField({
      name: "megaMenuBottomLinks",
      title: "Mega Menü Alt Linkler",
      description: 'Dropdown altındaki linkler (ör: "Tüm SEO Hizmetleri →")',
      type: "array",
      group: "megaMenu",
      of: [
        {
          type: "object",
          name: "bottomLink",
          title: "Link",
          fields: [
            defineField({
              name: "title",
              title: "Başlık",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "string",
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "url" },
          },
        },
      ],
    }),

    // ─── FOOTER ───
    defineField({
      name: "footerTagline",
      title: "Footer Slogan",
      type: "string",
      group: "footer",
      initialValue: "Digital Architecture for the Performance Era.",
    }),
    defineField({
      name: "footerColumns",
      title: "Footer Sütunları",
      description: "Her sütunda bir başlık ve linkler. Sırayı sürükleyerek değiştirebilirsiniz.",
      type: "array",
      group: "footer",
      of: [
        {
          type: "object",
          name: "footerColumn",
          title: "Sütun",
          fields: [
            defineField({
              name: "title",
              title: "Sütun Başlığı",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "links",
              title: "Linkler",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "footerLink",
                  title: "Link",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Başlık",
                      type: "string",
                      validation: (r) => r.required(),
                    }),
                    defineField({
                      name: "url",
                      title: "URL",
                      type: "string",
                      validation: (r) => r.required(),
                    }),
                    defineField({
                      name: "isExternal",
                      title: "Yeni sekmede aç",
                      type: "boolean",
                      initialValue: false,
                    }),
                  ],
                  preview: {
                    select: { title: "title", subtitle: "url" },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),
    defineField({
      name: "footerBottomCities",
      title: "Footer Alt Şehirler",
      description: "Footer alt barındaki şehir isimleri",
      type: "array",
      group: "footer",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Menü Yönetimi" };
    },
  },
});
