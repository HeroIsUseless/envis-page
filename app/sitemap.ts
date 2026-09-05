import { MetadataRoute } from 'next'
import { BLOG_POSTS } from './lib/blog-posts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://envis.app'
  const currentDate = new Date().toISOString()

  return [
    {
      url: `${baseUrl}/zh/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/zh/blog/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/blog/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...BLOG_POSTS.flatMap((p) =>
      (['zh', 'en'] as const).map((locale) => ({
        url: `${baseUrl}/${locale}/blog/${p.meta.slug}/`,
        lastModified: p.meta.date,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    ),
  ]
}
