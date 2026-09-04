import type { Metadata } from 'next'
import { BlogIndex } from '../../../components/BlogIndex'

export const metadata: Metadata = {
  title: 'Developer Blog',
  description: 'The Envis developer blog: development environments, runtimes, package managers, and engineering practice.',
  alternates: { canonical: '/en/blog/', languages: { 'zh-CN': '/zh/blog/', 'en-US': '/en/blog/', 'x-default': '/zh/blog/' } },
  openGraph: { type: 'website', locale: 'en_US', alternateLocale: ['zh_CN'], url: 'https://envis.app/en/blog/', siteName: 'Envis', title: 'Envis Developer Blog', description: 'Development environments, runtimes, package managers, and engineering practice.', images: ['https://envis.app/opengraph-image'] },
  twitter: { card: 'summary_large_image', title: 'Envis Developer Blog', description: 'Development environments, runtimes, package managers, and engineering practice.', images: ['https://envis.app/opengraph-image'] },
}

export default function EnBlogPage() {
  return <BlogIndex locale="en" />
}
