import Image from 'next/image'
import Link from 'next/link'
import { Github, Home, Newspaper } from 'lucide-react'
import type { Locale } from '../lib/i18n'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'

export function BlogChrome({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const isZh = locale === 'zh'
  const prefix = isZh ? '/zh' : '/en'

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-gray-900 selection:bg-blue-500/20 dark:bg-[#050505] dark:text-white dark:selection:bg-white/20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.14),transparent_64%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.09),transparent_64%)]" />
      <nav className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl dark:border-white/5 dark:bg-[#050505]/80" aria-label={isZh ? '主导航' : 'Main navigation'}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-8 sm:py-3">
          <Link href={`${prefix}/`} className="flex items-center gap-2" aria-label={isZh ? '返回 Envis 首页' : 'Back to Envis home'}>
            <Image src="/app-icon.png" alt="Envis" width={28} height={28} className="h-7 w-7 rounded-lg" />
            <span className="font-semibold">Envis</span>
            <span className="hidden items-center gap-1 text-xs text-gray-500 sm:flex dark:text-gray-400"><span>/</span><Newspaper className="h-3.5 w-3.5" />{isZh ? '博客' : 'Blog'}</span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-2">
            <LanguageSwitcher locale={locale} />
            <ThemeToggle locale={locale} />
            <a href="https://github.com/xopenbeta/envis-app" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white" title="GitHub" aria-label="GitHub"><Github className="h-4 w-4" /></a>
          </div>
        </div>
      </nav>
      <main className="relative z-10">{children}</main>
      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-3 border-t border-gray-200 px-5 py-8 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 dark:border-white/5 dark:text-gray-400">
        <span>© 2026 Envis</span>
        <Link href={`${prefix}/`} className="inline-flex items-center gap-1.5 transition-colors hover:text-gray-950 dark:hover:text-white"><Home className="h-3.5 w-3.5" />{isZh ? '返回首页' : 'Back to home'}</Link>
      </footer>
    </div>
  )
}
