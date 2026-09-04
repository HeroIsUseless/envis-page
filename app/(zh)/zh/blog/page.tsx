import type { Metadata } from 'next'
import { BlogIndex } from '../../../components/BlogIndex'

export const metadata: Metadata = {
  title: '开发者博客',
  description: 'Envis 开发者博客：开发环境、运行时、包管理器与工程实践。',
  alternates: { canonical: '/zh/blog/', languages: { 'zh-CN': '/zh/blog/', 'en-US': '/en/blog/', 'x-default': '/zh/blog/' } },
  openGraph: { type: 'website', locale: 'zh_CN', alternateLocale: ['en_US'], url: 'https://envis.app/zh/blog/', siteName: 'Envis', title: 'Envis 开发者博客', description: '开发环境、运行时、包管理器与工程实践。', images: ['https://envis.app/opengraph-image'] },
  twitter: { card: 'summary_large_image', title: 'Envis 开发者博客', description: '开发环境、运行时、包管理器与工程实践。', images: ['https://envis.app/opengraph-image'] },
}

export default function ZhBlogPage() {
  return <BlogIndex locale="zh" />
}
