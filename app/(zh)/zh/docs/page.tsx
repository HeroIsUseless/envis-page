import type { Metadata } from 'next'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from '../../../docs/page.module.css'

export const metadata: Metadata = {
  title: 'Envis 文档中心',
  description: 'Envis 产品文档、使用说明与快速开始指南。',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/zh/docs/',
    languages: {
      'zh-CN': '/zh/docs/',
      'en-US': '/en/docs/',
      'x-default': '/zh/docs/',
    },
  },
  openGraph: {
    type: 'article',
    locale: 'zh_CN',
    url: 'https://envis.app/zh/docs/',
    title: 'Envis 文档中心',
    description: 'Envis 产品文档与使用说明。',
    images: [
      {
        url: 'https://envis.app/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Envis 文档中心',
      },
    ],
  },
}

async function loadDocContent() {
  const docPath = path.join(process.cwd(), 'docs', 'index.md')

  try {
    return await fs.readFile(docPath, 'utf8')
  } catch {
    return '# 文档暂不可用\n\n未找到 docs/index.md 文件，请先创建文档内容。'
  }
}

export default async function ZhDocsPage() {
  const markdown = await loadDocContent()
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首页',
        item: 'https://envis.app/zh/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '文档',
        item: 'https://envis.app/zh/docs/',
      },
    ],
  }

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className={styles.container}>
        <h1 className={styles.title}>文档中心</h1>
        <p className={styles.subtitle}>内容由项目内 Markdown 文件驱动，支持直接编辑。</p>

        <article className={styles.markdown}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </article>

        <p className={styles.alert}>docs/index.md</p>
      </div>
    </main>
  )
}
