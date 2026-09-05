import Link from 'next/link'
import { ArrowRight, CalendarDays, Clock3, TerminalSquare } from 'lucide-react'
import type { Locale } from '../lib/i18n'
import { formatReadTime, getPosts } from '../lib/blog-posts'
import { BlogChrome } from './BlogChrome'

function PostCard({ locale, post }: { locale: Locale; post: ReturnType<typeof getPosts>[number] }) {
  const prefix = locale === 'zh' ? '/zh' : '/en'
  const Icon = post.icon
  return (
    <Link href={`${prefix}/blog/${post.slug}/`} className="group mt-5 flex items-center gap-5 rounded-lg border border-gray-200 bg-white p-5 transition-all hover:border-blue-300 hover:shadow-[0_24px_70px_-38px_rgba(37,99,235,0.5)] sm:p-6 dark:border-white/10 dark:bg-[#0b0b0b] dark:hover:border-blue-500/40">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
        <Icon className="h-7 w-7" strokeWidth={1.5} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /><time dateTime={post.date}>{post.date}</time></span>
          <span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{formatReadTime(post.readMinutes, locale)}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-gray-950 sm:text-xl dark:text-white">{post.title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-gray-600 dark:text-gray-400">{post.description}</p>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-blue-600 transition-transform group-hover:translate-x-1 dark:text-blue-400" />
    </Link>
  )
}

export function BlogIndex({ locale }: { locale: Locale }) {
  const isZh = locale === 'zh'
  const posts = getPosts(locale)
  const sections = [
    { id: 'tutorials', heading: isZh ? '教程' : 'Tutorials', items: posts.filter((p) => p.kind === 'tutorial') },
    { id: 'articles', heading: isZh ? '技术文章' : 'Articles', items: posts.filter((p) => p.kind === 'article') },
  ]

  return (
    <BlogChrome locale={locale}>
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 sm:pt-28">
        <header className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400"><TerminalSquare className="h-4 w-4" />Envis Dev Notes</div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-gray-950 sm:text-6xl dark:text-white">{isZh ? '理解工具，也理解工具背后的系统' : 'Understand the tools and the systems behind them'}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg dark:text-gray-400">{isZh ? '关于开发环境、运行时、包管理器与 Envis 实践的教程与技术文章。' : 'Tutorials and technical notes on development environments, runtimes, package managers, and working with Envis.'}</p>
        </header>

        {sections.map((section) => (
          <section key={section.id} className="mt-16 border-t border-gray-200 pt-8 dark:border-white/10" aria-labelledby={`${section.id}-posts`}>
            <div className="flex items-center justify-between">
              <h2 id={`${section.id}-posts`} className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">{section.heading}</h2>
              <span className="text-xs text-gray-400">{section.items.length} {isZh ? '篇' : section.items.length === 1 ? 'article' : 'articles'}</span>
            </div>
            {section.items.map((post) => (
              <PostCard key={post.slug} locale={locale} post={post} />
            ))}
          </section>
        ))}
      </div>
    </BlogChrome>
  )
}
