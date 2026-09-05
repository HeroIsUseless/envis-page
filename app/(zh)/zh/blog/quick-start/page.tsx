import type { Metadata } from 'next'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { TutorialArticle } from '../../../../components/TutorialArticle'
import { buildPostMetadata, buildPostStructuredData } from '../../../../lib/blog-posts'

export const metadata: Metadata = buildPostMetadata('quick-start', 'zh')

async function loadMarkdown() {
  try {
    return await fs.readFile(path.join(process.cwd(), 'docs', 'index.md'), 'utf8')
  } catch {
    return '内容暂不可用。'
  }
}

export default async function ZhQuickStartPage() {
  const markdown = await loadMarkdown()
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPostStructuredData('quick-start', 'zh')) }} />
      <TutorialArticle locale="zh" slug="quick-start" markdown={markdown} />
    </>
  )
}
