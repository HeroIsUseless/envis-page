import Link from 'next/link'
import { ArrowRight, CalendarDays, Clock3, TerminalSquare } from 'lucide-react'
import type { Locale } from '../lib/i18n'
import { BlogChrome } from './BlogChrome'

export function BlogIndex({ locale }: { locale: Locale }) {
  const isZh = locale === 'zh'
  const prefix = isZh ? '/zh' : '/en'

  return (
    <BlogChrome locale={locale}>
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 sm:pt-28">
        <header className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400"><TerminalSquare className="h-4 w-4" />Envis Dev Notes</div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-gray-950 sm:text-6xl dark:text-white">{isZh ? '理解工具，也理解工具背后的系统' : 'Understand the tools and the systems behind them'}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg dark:text-gray-400">{isZh ? '关于开发环境、运行时、包管理器与 Envis 实践的技术文章。' : 'Technical notes on development environments, runtimes, package managers, and working with Envis.'}</p>
        </header>

        <section className="mt-16 border-t border-gray-200 pt-8 dark:border-white/10" aria-labelledby="latest-posts">
          <div className="flex items-center justify-between">
            <h2 id="latest-posts" className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">{isZh ? '最新文章' : 'Latest'}</h2>
            <span className="text-xs text-gray-400">1 {isZh ? '篇' : 'article'}</span>
          </div>
          <Link href={`${prefix}/blog/nodejs-versions/`} className="group mt-6 grid overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:border-blue-300 hover:shadow-[0_24px_70px_-38px_rgba(37,99,235,0.5)] md:grid-cols-[0.72fr_1.28fr] dark:border-white/10 dark:bg-[#0b0b0b] dark:hover:border-blue-500/40">
            <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-[#eef5ff] dark:bg-[#09121f]">
              <div className="absolute h-48 w-48 rounded-full border border-blue-300/50 dark:border-blue-500/20" />
              <div className="absolute h-32 w-32 rounded-full border border-emerald-300/60 dark:border-emerald-500/20" />
              <TerminalSquare className="relative h-16 w-16 text-blue-600 transition-transform duration-500 group-hover:scale-110 dark:text-blue-400" strokeWidth={1.2} />
            </div>
            <article className="flex flex-col justify-center p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400"><span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" />2026-09-04</span><span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{isZh ? '约 12 分钟' : '12 min read'}</span></div>
              <h3 className="mt-5 text-2xl font-semibold text-gray-950 sm:text-3xl dark:text-white">{isZh ? 'Node.js 版本、npm 与 Corepack 完整指南' : 'A complete guide to Node.js versions, npm, and Corepack'}</h3>
              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400">{isZh ? '从 LTS 与 Current 的选择，到各大版本特性、npm registry、全局 prefix 和 Corepack，一次理清 Node.js 环境管理。' : 'From choosing LTS or Current to major releases, npm registries, the global prefix, and Corepack: a practical map of Node.js environment management.'}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">{isZh ? '阅读全文' : 'Read article'}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </article>
          </Link>
        </section>
      </div>
    </BlogChrome>
  )
}
