import type { Metadata } from 'next'
import { NodejsArticle } from '../../../../components/NodejsArticle'

const title = 'Node.js 版本、npm 与 Corepack 完整指南'
const description = '了解 Node.js LTS 与 Current、Node.js 14 至 26 的关键变化，以及 npm registry、prefix、PATH 和 Corepack。'
const url = 'https://envis.app/zh/blog/nodejs-versions/'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Node.js 版本', 'Node.js LTS', 'npm registry', 'npm prefix', 'Corepack', 'Envis'],
  authors: [{ name: 'Envis Team' }],
  alternates: { canonical: '/zh/blog/nodejs-versions/', languages: { 'zh-CN': '/zh/blog/nodejs-versions/', 'en-US': '/en/blog/nodejs-versions/', 'x-default': '/zh/blog/nodejs-versions/' } },
  openGraph: { type: 'article', locale: 'zh_CN', alternateLocale: ['en_US'], url, siteName: 'Envis', title, description, publishedTime: '2026-09-04T00:00:00.000Z', modifiedTime: '2026-09-04T00:00:00.000Z', authors: ['Envis Team'], tags: ['Node.js', 'npm', 'Corepack'], images: ['https://envis.app/opengraph-image'] },
  twitter: { card: 'summary_large_image', title, description, images: ['https://envis.app/opengraph-image'] },
}

export default function ZhNodejsArticlePage() {
  const structuredData = { '@context': 'https://schema.org', '@type': 'TechArticle', headline: title, description, datePublished: '2026-09-04', dateModified: '2026-09-04', inLanguage: 'zh-CN', mainEntityOfPage: url, author: { '@type': 'Organization', name: 'Envis Team', url: 'https://envis.app' }, publisher: { '@type': 'Organization', name: 'Envis', logo: { '@type': 'ImageObject', url: 'https://envis.app/app-icon.png' } }, image: 'https://envis.app/opengraph-image' }
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><NodejsArticle locale="zh" /></>
}
