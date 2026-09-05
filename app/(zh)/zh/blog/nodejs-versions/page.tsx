import type { Metadata } from 'next'
import { NodejsArticle } from '../../../../components/NodejsArticle'
import { buildPostMetadata, buildPostStructuredData } from '../../../../lib/blog-posts'

export const metadata: Metadata = buildPostMetadata('nodejs-versions', 'zh')

export default function ZhNodejsArticlePage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPostStructuredData('nodejs-versions', 'zh')) }} /><NodejsArticle locale="zh" /></>
}
