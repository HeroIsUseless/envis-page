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
        <p className={styles.subtitle}>Envis 使用说明与教程文档。</p>

        <div className={styles.docList}>
          <a href="/zh/docs/01_main/" className={styles.docItem}>
            <h2>Envis 介绍</h2>
            <p>了解 Envis 是什么、解决什么问题以及如何使用。</p>
          </a>
          <a href="/zh/docs/02_cli/" className={styles.docItem}>
            <h2>CLI 命令</h2>
            <p>查看 envis use、list、refresh 等命令的终端用法。</p>
          </a>
        </div>

        <article className={styles.markdown}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </article>
      </div>
    </main>
  )
}
