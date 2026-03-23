import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Sayfa",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Sayfa Başlığı",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "path",
      title: "URL Yolu",
      type: "string",
      description: "Sayfa URL yolu (ör: /seo/teknik-seo). Başında / olmalı.",
      validation: (rule) =>
        rule
          .required()
          .custom((val) =>
            typeof val === "string" && val.startsWith("/")
              ? true
              : "URL / ile başlamalıdır"
          ),
    }),
    defineField({
      name: "body",
      title: "İçerik",
      type: "array",
      description: "Opsiyonel — Landing page içeriği. Boş bırakılırsa koddaki statik içerik kullanılır.",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Metin",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO Ayarları",
      type: "seoFields",
    }),
    defineField({
      name: "isPublished",
      title: "Yayında",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      path: "path",
      isPublished: "isPublished",
    },
    prepare({ title, path, isPublished }) {
      return {
        title: title || path,
        subtitle: `${path || ""} ${isPublished === false ? "⏸ Taslak" : "✓ Yayında"}`,
      };
    },
  },
  orderings: [
    {
      title: "URL Yolu",
      name: "pathAsc",
      by: [{ field: "path", direction: "asc" }],
    },
  ],
});
