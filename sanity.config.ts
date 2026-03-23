'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'
import type { StructureBuilder } from 'sanity/structure'

function deskStructure(S: StructureBuilder) {
  return S.list()
    .title('SEOROAS')
    .items([
      // ─── YAZILAR ───
      S.listItem()
        .title('Yazılar')
        .icon(() => '📝')
        .child(
          S.list()
            .title('Yazılar')
            .items([
              S.listItem()
                .title('Blog Yazıları')
                .schemaType('post')
                .child(
                  S.documentTypeList('post')
                    .title('Blog Yazıları')
                    .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('Kategoriler')
                .schemaType('category')
                .child(S.documentTypeList('category').title('Kategoriler')),
            ])
        ),

      // ─── SAYFALAR ───
      S.listItem()
        .title('Sayfalar')
        .icon(() => '📄')
        .child(
          S.list()
            .title('Sayfalar')
            .items([
              S.listItem()
                .title('Landing Sayfalar')
                .schemaType('page')
                .child(
                  S.documentTypeList('page')
                    .title('Landing Sayfalar')
                    .defaultOrdering([{ field: 'path', direction: 'asc' }])
                ),
              S.divider(),
              S.listItem()
                .title('Hizmet Sayfaları')
                .schemaType('service')
                .child(S.documentTypeList('service').title('Hizmet Sayfaları')),
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
            ])
        ),

      S.divider(),

      // ─── MENÜ YÖNETİMİ ───
      S.listItem()
        .title('Menü Yönetimi')
        .icon(() => '🧭')
        .child(
          S.document()
            .schemaType('navigation')
            .documentId('navigation')
            .title('Menü Yönetimi')
        ),

      S.divider(),

      // ─── SEO AYARLARI ───
      S.listItem()
        .title('SEO Ayarları')
        .icon(() => '🔍')
        .child(
          S.list()
            .title('SEO Ayarları')
            .items([
              S.listItem()
                .title('Sayfa Meta & SEO')
                .schemaType('pageSeo')
                .child(
                  S.documentTypeList('pageSeo')
                    .title('Sayfa Meta & SEO Yönetimi')
                    .defaultOrdering([{ field: 'pagePath', direction: 'asc' }])
                ),
              S.divider(),
              S.listItem()
                .title('Yönlendirmeler (301/302/410)')
                .schemaType('redirect')
                .child(
                  S.documentTypeList('redirect')
                    .title('Yönlendirmeler')
                    .defaultOrdering([{ field: 'source', direction: 'asc' }])
                ),
              S.divider(),
              S.listItem()
                .title('robots.txt & Sitemap')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                    .title('robots.txt & Sitemap Ayarları')
                ),
              S.listItem()
                .title('Doğrulama Kodları (GSC, Bing, Yandex)')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                    .title('Doğrulama Kodları')
                ),
            ])
        ),

      S.divider(),

      // ─── AYARLAR ───
      S.listItem()
        .title('Ayarlar')
        .icon(() => '⚙️')
        .child(
          S.list()
            .title('Ayarlar')
            .items([
              S.listItem()
                .title('Genel Ayarlar')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                    .title('Genel Ayarlar')
                ),
              S.listItem()
                .title('Sosyal Medya')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                    .title('Sosyal Medya')
                ),
              S.listItem()
                .title('Analytics & Tracking')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                    .title('Analytics & Tracking')
                ),
            ])
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
