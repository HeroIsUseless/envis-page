import type { Metadata } from 'next'
import { NodejsArticle } from '../../../../components/NodejsArticle'

const title = 'A complete guide to Node.js versions, npm, and Corepack'
const description = 'Learn about Node.js LTS and Current, key changes from Node.js 14 through 26, npm registries, prefix, PATH, and Corepack.'
const url = 'https://envis.app/en/blog/nodejs-versions/'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Node.js versions', 'Node.js LTS', 'npm registry', 'npm prefix', 'Corepack', 'Envis'],
  authors: [{ name: 'Envis Team' }],
  alternates: { canonical: '/en/blog/nodejs-versions/', languages: { 'zh-CN': '/zh/blog/nodejs-versions/', 'en-US': '/en/blog/nodejs-versions/', 'x-default': '/zh/blog/nodejs-versions/' } },
  openGraph: { type: 'article', locale: 'en_US', alternateLocale: ['zh_CN'], url, siteName: 'Envis', title, description, publishedTime: '2026-09-04T00:00:00.000Z', modifiedTime: '2026-09-04T00:00:00.000Z', authors: ['Envis Team'], tags: ['Node.js', 'npm', 'Corepack'], images: ['https://envis.app/opengraph-image'] },
  twitter: { card: 'summary_large_image', title, description, images: ['https://envis.app/opengraph-image'] },
}

export default function EnNodejsArticlePage() {
  const structuredData = { '@context': 'https://schema.org', '@type': 'TechArticle', headline: title, description, datePublished: '2026-09-04', dateModified: '2026-09-04', inLanguage: 'en-US', mainEntityOfPage: url, author: { '@type': 'Organization', name: 'Envis Team', url: 'https://envis.app' }, publisher: { '@type': 'Organization', name: 'Envis', logo: { '@type': 'ImageObject', url: 'https://envis.app/app-icon.png' } }, image: 'https://envis.app/opengraph-image' }
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><NodejsArticle locale="en" /></>
}
