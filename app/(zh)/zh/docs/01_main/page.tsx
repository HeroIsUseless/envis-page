import type { Metadata } from 'next'
import { ClientRedirect } from '../../../../components/ClientRedirect'

export const metadata: Metadata = {
  title: 'Envis 介绍',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/zh/blog/envis-intro/',
  },
}

export default function ZhDocs01MainRedirect() {
  return <ClientRedirect to="/zh/blog/envis-intro/" note="文档已合并到博客：正在跳转到 Envis 介绍…" />
}
