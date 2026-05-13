import type { Metadata } from 'next'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from '../../../../docs/page.module.css'

export const metadata: Metadata = {
  title: 'Introduction | Envis Documentation',
  description:
    'Envis is a free and open-source development environment manager that provides unified management for Java, Node.js, MySQL, and more.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/en/docs/01_main/',
    languages: {
      'zh-CN': '/zh/docs/01_main/',
      'en-US': '/en/docs/01_main/',
      'x-default': '/zh/docs/01_main/',
    },
  },
}

async function loadDocContent() {
  const docPath = path.join(process.cwd(), 'docs', '01_main', 'index.md')
  try {
    return await fs.readFile(docPath, 'utf8')
  } catch {
    return '# Documentation unavailable\n\nThe docs/01_main/index.md file was not found.'
  }
}

const IMAGE_BASE = '/docs/01_main'

export default async function EnDocs01MainPage() {
  const markdown = await loadDocContent()

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="breadcrumb">
          <a href="/en/docs/">Documentation</a>
          <span> / </span>
          <span>Introduction</span>
        </nav>

        <article className={styles.markdown}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img({ src, alt }) {
                if (!src) return null
                const resolvedSrc = src.startsWith('./')
                  ? `${IMAGE_BASE}/${src.slice(2)}`
                  : src
                return (
                  <Image
                    src={resolvedSrc}
                    alt={alt ?? ''}
                    width={960}
                    height={540}
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
                    unoptimized
                  />
                )
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
        </article>

        <p className={styles.alert}>docs/01_main/index.md</p>
      </div>
    </main>
  )
}
