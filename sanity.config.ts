'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'
import type { StructureBuilder } from 'sanity/structure'

function deskStructure(S: StructureBuilder) {
  return S.list()
    .title('İçerik Yönetimi')
    .items([
      S.listItem()
        .title('Blog Yazıları')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog Yazıları')),

      S.listItem()
        .title('Kategoriler')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Kategoriler')),

      S.divider(),

      S.listItem()
        .title('Hizmetler')
        .schemaType('service')
        .child(S.documentTypeList('service').title('Hizmetler')),

      S.listItem()
        .title('Lokal Sayfalar')
        .schemaType('localPage')
        .child(S.documentTypeList('localPage').title('Lokal Sayfalar')),

      S.listItem()
        .title('Vaka Çalışmaları')
        .schemaType('caseStudy')
        .child(S.documentTypeList('caseStudy').title('Vaka Çalışmaları')),

      S.listItem()
        .title('Referanslar')
        .schemaType('testimonial')
        .child(S.documentTypeList('testimonial').title('Referanslar')),

      S.listItem()
        .title('SSS')
        .schemaType('faq')
        .child(S.documentTypeList('faq').title('Sık Sorulan Sorular')),

      S.divider(),

      S.listItem()
        .title('SEO & Yönlendirmeler')
        .child(
          S.list()
            .title('SEO & Yönlendirmeler')
            .items([
              S.listItem()
                .title('301/302 Yönlendirmeler')
                .schemaType('redirect')
                .child(
                  S.documentTypeList('redirect')
                    .title('Yönlendirmeler')
                    .defaultOrdering([{ field: 'source', direction: 'asc' }])
                ),
            ])
        ),

      S.divider(),

      S.listItem()
        .title('Site Ayarları')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Ayarları')
        ),
    ])
}

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '67vl8x07',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    structureTool({ structure: deskStructure }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
