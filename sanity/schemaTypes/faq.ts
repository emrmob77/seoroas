import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "SSS",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Soru",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Cevap",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    select: { title: "question" },
  },
});
