import type { Metadata } from 'next'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { TutorialArticle } from '../../../../components/TutorialArticle'
import { buildPostMetadata, buildPostStructuredData } from '../../../../lib/blog-posts'

export const metadata: Metadata = buildPostMetadata('cli-commands', 'en')

async function loadMarkdown() {
  try {
    return await fs.readFile(path.join(process.cwd(), 'docs', '02_cli', 'index.md'), 'utf8')
  } catch {
    return 'Content is currently unavailable.'
  }
}

export default async function EnCliCommandsPage() {
  const markdown = await loadMarkdown()
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPostStructuredData('cli-commands', 'en')) }} />
      <TutorialArticle locale="en" slug="cli-commands" markdown={markdown} />
    </>
  )
}
