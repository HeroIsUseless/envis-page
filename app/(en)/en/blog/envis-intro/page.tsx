import type { Metadata } from 'next'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { TutorialArticle } from '../../../../components/TutorialArticle'
import { buildPostMetadata, buildPostStructuredData } from '../../../../lib/blog-posts'

export const metadata: Metadata = buildPostMetadata('envis-intro', 'en')

async function loadMarkdown() {
  try {
    return await fs.readFile(path.join(process.cwd(), 'docs', '01_main', 'index.md'), 'utf8')
  } catch {
    return 'Content is currently unavailable.'
  }
}

export default async function EnEnvisIntroPage() {
  const markdown = await loadMarkdown()
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPostStructuredData('envis-intro', 'en')) }} />
      <TutorialArticle locale="en" slug="envis-intro" markdown={markdown} imageBase="/docs/01_main" />
    </>
  )
}
