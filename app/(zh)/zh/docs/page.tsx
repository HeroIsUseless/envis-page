import type { Metadata } from 'next'
import { ClientRedirect } from '../../../components/ClientRedirect'

export const metadata: Metadata = {
  title: 'Envis 文档',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/zh/blog/',
  },
}

export default function ZhDocsRedirect() {
  return <ClientRedirect to="/zh/blog/" note="文档已合并到博客：正在跳转…" />
}
