import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CalendarDays, Clock3 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Locale } from '../lib/i18n'
import { formatReadTime, getPost } from '../lib/blog-posts'
import { BlogChrome } from './BlogChrome'

interface TutorialArticleProps {
  locale: Locale
  slug: string
  markdown: string
  // e.g. '/docs/01_main' — base for relative ./x.png image paths in the markdown
  imageBase?: string
}

export function TutorialArticle({ locale, slug, markdown, imageBase }: TutorialArticleProps) {
  const isZh = locale === 'zh'
  const prefix = isZh ? '/zh' : '/en'
  const post = getPost(slug, locale)
  const Icon = post.icon
  // 剥掉 markdown 自带的 H1，文章标题由头部提供
  const body = markdown.replace(/^\s*#\s+[^\n]*\n?/, '')

  return (
    <BlogChrome locale={locale}>
      <article className="mx-auto max-w-4xl px-5 pb-24 pt-12 sm:px-8 sm:pt-20">
        <Link href={`${prefix}/blog/`} className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          {isZh ? '全部文章' : 'All articles'}
        </Link>
        <header className="mt-10 border-b border-gray-200 pb-10 dark:border-white/10">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
            <Icon className="h-4 w-4" />
            {isZh ? '教程' : 'Tutorial'}
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-gray-950 sm:text-6xl dark:text-white">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">{post.lede}</p>
          <div className="mt-7 flex flex-wrap gap-5 text-xs text-gray-500 dark:text-gray-400">
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /><time dateTime={post.date}>{post.date}</time></span>
            <span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{formatReadTime(post.readMinutes, locale)}</span>
          </div>
        </header>
        <div className="prose-area mt-12 text-base leading-8 text-gray-700 dark:text-gray-300">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img({ src, alt }) {
                if (!src) return null
                // 将 ./1.png 这类相对路径改写为 public 目录下的绝对路径
                const srcStr = src as string
                const resolvedSrc = imageBase && srcStr.startsWith('./') ? `${imageBase}/${srcStr.slice(2)}` : srcStr
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
            {body}
          </ReactMarkdown>
        </div>
      </article>
    </BlogChrome>
  )
}
