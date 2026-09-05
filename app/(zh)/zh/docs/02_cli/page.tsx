import type { Metadata } from 'next'
import { ClientRedirect } from '../../../../components/ClientRedirect'

export const metadata: Metadata = {
  title: 'CLI 命令',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/zh/blog/cli-commands/',
  },
}

export default function ZhDocs02CliRedirect() {
  return <ClientRedirect to="/zh/blog/cli-commands/" note="文档已合并到博客：正在跳转到 CLI 命令…" />
}
