import type { Metadata } from 'next'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from '../../../../docs/page.module.css'

export const metadata: Metadata = {
  title: 'CLI 命令 | 文档中心',
  description: 'Envis 命令行使用说明，包含 use、list、refresh 等常用命令。',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/zh/docs/02_cli/',
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
    return '# 文档暂不可用\n\n未找到 docs/02_cli/index.md 文件。'
  }
}

export default async function ZhDocs02CliPage() {
  const markdown = await loadDocContent()

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="breadcrumb">
          <a href="/zh/docs/">文档中心</a>
          <span> / </span>
          <span>CLI 命令</span>
        </nav>

        <article className={styles.markdown}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </article>
      </div>
    </main>
  )
}
