import type { Metadata } from 'next'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from '../../../docs/page.module.css'

export const metadata: Metadata = {
  title: 'Envis Documentation',
  description: 'Envis product documentation, usage guides, and quick start resources.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/en/docs/',
    languages: {
      'zh-CN': '/zh/docs/',
      'en-US': '/en/docs/',
      'x-default': '/zh/docs/',
    },
  },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://envis.app/en/docs/',
    title: 'Envis Documentation',
    description: 'Envis product documentation and usage guides.',
    images: [
      {
        url: 'https://envis.app/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Envis Documentation',
      },
    ],
  },
}

async function loadDocContent() {
  const docPath = path.join(process.cwd(), 'docs', 'index.md')

  try {
    return await fs.readFile(docPath, 'utf8')
  } catch {
    return '# Documentation unavailable\n\nThe docs/index.md file was not found.'
  }
}

export default async function EnDocsPage() {
  const markdown = await loadDocContent()
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://envis.app/en/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Documentation',
        item: 'https://envis.app/en/docs/',
      },
    ],
  }

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className={styles.container}>
        <h1 className={styles.title}>Documentation</h1>
        <p className={styles.subtitle}>
          Content is driven by markdown files in this repository and can be edited directly.
        </p>

        <article className={styles.markdown}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </article>

        <p className={styles.alert}>docs/index.md</p>
      </div>
    </main>
  )
}
