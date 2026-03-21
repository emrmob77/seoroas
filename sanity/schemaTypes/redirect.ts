import { defineField, defineType } from "sanity";

export const redirect = defineType({
  name: "redirect",
  title: "Yönlendirme (301/302)",
  type: "document",
  fields: [
    defineField({
      name: "source",
      title: "Kaynak URL",
      type: "string",
      description: "Eski URL path (ör: /seo-nedir). Başında / olmalı.",
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
      name: "destination",
      title: "Hedef URL",
      type: "string",
      description: "Yeni URL path (ör: /blog/seo-nedir) veya tam URL",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "statusCode",
      title: "HTTP Durum Kodu",
      type: "number",
      options: {
        list: [
          { title: "301 — Kalıcı Yönlendirme", value: 301 },
          { title: "302 — Geçici Yönlendirme", value: 302 },
        ],
      },
      initialValue: 301,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Aktif",
      type: "boolean",
      description: "Pasife alınırsa yönlendirme çalışmaz",
      initialValue: true,
    }),
    defineField({
      name: "note",
      title: "Not",
      type: "string",
      description: "İç kullanım için açıklama (ör: WP migration)",
    }),
  ],
  preview: {
    select: {
      source: "source",
      destination: "destination",
      statusCode: "statusCode",
      isActive: "isActive",
    },
    prepare({ source, destination, statusCode, isActive }) {
      return {
        title: `${source} → ${destination}`,
        subtitle: `${statusCode || 301} ${isActive === false ? "⏸ Pasif" : "✓ Aktif"}`,
      };
    },
  },
  orderings: [
    {
      title: "Kaynak URL",
      name: "sourceAsc",
      by: [{ field: "source", direction: "asc" }],
    },
  ],
});
