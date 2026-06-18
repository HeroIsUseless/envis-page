import type { Metadata } from 'next'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from '../../../../docs/page.module.css'

export const metadata: Metadata = {
  title: 'CLI Commands | Envis Documentation',
  description: 'Envis command-line usage, including the use, list, and refresh commands.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/en/docs/02_cli/',
    languages: {
      'zh-CN': '/zh/docs/02_cli/',
      'en-US': '/en/docs/02_cli/',
      'x-default': '/zh/docs/02_cli/',
    },
  },
}

async function loadDocContent() {
  const docPath = path.join(process.cwd(), 'docs', '02_cli', 'index.md')
  try {
    return await fs.readFile(docPath, 'utf8')
  } catch {
    return '# Documentation unavailable\n\nThe docs/02_cli/index.md file was not found.'
  }
}

export default async function EnDocs02CliPage() {
  const markdown = await loadDocContent()

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="breadcrumb">
          <a href="/en/docs/">Documentation</a>
          <span> / </span>
          <span>CLI Commands</span>
        </nav>

        <article className={styles.markdown}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </article>
      </div>
    </main>
  )
}
