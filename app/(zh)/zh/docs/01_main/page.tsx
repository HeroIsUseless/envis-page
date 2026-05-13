import type { Metadata } from 'next'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from '../../../../docs/page.module.css'

export const metadata: Metadata = {
  title: 'Envis 介绍 | 文档中心',
  description: 'Envis 是一款开源免费的开发环境管理器，支持 Java、Node.js、MySQL 等开发工具的统一管理。',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/zh/docs/01_main/',
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
    return '# 文档暂不可用\n\n未找到 docs/01_main/index.md 文件。'
  }
}

const IMAGE_BASE = '/docs/01_main'

export default async function ZhDocs01MainPage() {
  const markdown = await loadDocContent()

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="breadcrumb">
          <a href="/zh/docs/">文档中心</a>
          <span> / </span>
          <span>Envis 介绍</span>
        </nav>

        <article className={styles.markdown}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img({ src, alt }) {
                if (!src) return null
                // 将 ./1.png 这类相对路径改写为 public 目录下的绝对路径
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
