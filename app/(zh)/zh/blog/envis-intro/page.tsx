import type { Metadata } from 'next'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { TutorialArticle } from '../../../../components/TutorialArticle'
import { buildPostMetadata, buildPostStructuredData } from '../../../../lib/blog-posts'

export const metadata: Metadata = buildPostMetadata('envis-intro', 'zh')

async function loadMarkdown() {
  try {
    return await fs.readFile(path.join(process.cwd(), 'docs', '01_main', 'index.md'), 'utf8')
  } catch {
    return '内容暂不可用。'
  }
}

export default async function ZhEnvisIntroPage() {
  const markdown = await loadMarkdown()
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPostStructuredData('envis-intro', 'zh')) }} />
      <TutorialArticle locale="zh" slug="envis-intro" markdown={markdown} imageBase="/docs/01_main" />
    </>
  )
}
