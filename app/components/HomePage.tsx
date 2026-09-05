import Image from 'next/image'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ProductStory } from './ProductStory'
import { ThemeToggle } from './ThemeToggle'
import {
  ArrowRight,
  Check,
  Download,
  FileText,
  ExternalLink,
  Github,
  Newspaper,
  Star,
} from 'lucide-react'
import type { Locale } from '../lib/i18n'
import type { Translations } from '../locales/zh'

interface HomePageProps {
  locale: Locale
  t: Translations
}

export function HomePage({ locale, t }: HomePageProps) {
  const docsHref = locale === 'zh' ? '/zh/docs/' : '/en/docs/'
  const blogHref = locale === 'zh' ? '/zh/blog/' : '/en/blog/'

  return (
    <div
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white font-sans text-gray-900 selection:bg-blue-500/20 dark:bg-[#050505] dark:text-white dark:selection:bg-white/20"
      role="main"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/2 top-[-12%] h-125 w-250 -translate-x-1/2 rounded-full bg-blue-100/70 blur-[120px] dark:bg-blue-500/5"></div>
      </div>

      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200/70 bg-white/80 px-4 py-2 backdrop-blur-xl sm:px-6 sm:py-3 dark:border-white/5 dark:bg-[#050505]/80" aria-label={locale === 'zh' ? '主导航' : 'Main navigation'}>
        <div className="flex items-center gap-2">
          <Image src="/app-icon.png" alt="Envis Logo" width={28} height={28} className="h-7 w-7 rounded-lg" />
          <span className="font-semibold text-gray-900 dark:text-white">Envis</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-3">
          <div className="hidden items-center gap-1 lg:flex">
            <a href="#why" className="px-3 py-1.5 text-xs text-gray-600 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white">
              {t.why.title}
            </a>
            <a href="#workflow" className="px-3 py-1.5 text-xs text-gray-600 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white">
              {t.workflow.eyebrow}
            </a>
            <a href="#showcase" className="px-3 py-1.5 text-xs text-gray-600 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white">
              {t.showcase.eyebrow}
            </a>
            <a href="#faq" className="px-3 py-1.5 text-xs text-gray-600 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white">
              {t.faq.eyebrow}
            </a>
          </div>
          <LanguageSwitcher locale={locale} />
          <ThemeToggle locale={locale} />
          <a
            href={blogHref}
            className="flex items-center gap-1.5 p-1.5 text-xs text-gray-600 transition-colors hover:text-gray-900 sm:px-3 dark:text-gray-400 dark:hover:text-white"
            aria-label={t.nav.blog}
          >
            <Newspaper className="h-4 w-4" />
            <span className="hidden sm:inline">{t.nav.blog}</span>
          </a>
          <a
            href={docsHref}
            className="flex items-center gap-1.5 p-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors sm:px-3"
            aria-label={t.nav.docs}
          >
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">{t.nav.docs}</span>
          </a>
          <a
            href="https://github.com/xopenbeta/envis-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 p-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors sm:px-3"
            aria-label={t.nav.github}
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">{t.nav.github}</span>
          </a>
          <a
            href="/Envis_0.1.0_aarch64.dmg"
            download
            className="flex items-center gap-1.5 p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium transition-colors sm:px-3 sm:py-1.5"
            aria-label={t.nav.download}
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">{t.nav.download}</span>
          </a>
        </div>
      </nav>

      <main className="relative z-10 flex flex-1 flex-col items-center">
        <div className="flex w-full max-w-7xl flex-col px-5 sm:px-8">
          <section className="mt-20 space-y-8 text-center sm:mt-28" aria-labelledby="hero-title">
            <div className="w-full flex justify-center">
              <a
                href="https://github.com/xopenbeta/envis-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20 dark:hover:bg-emerald-500/20"
              >
                <Star className="w-4.5 h-4.5" />
                <span className="text-sm">{t.hero.badge}</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </a>
            </div>
            <div className="space-y-6">
              <h1 id="hero-title" className="mx-auto max-w-5xl whitespace-pre-line text-3xl font-semibold leading-[1.08] text-gray-950 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
                {t.hero.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {t.hero.subtitle}
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 pt-4">
              <a
                href="/Envis_0.1.0_aarch64.dmg"
                download
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl md:px-7 md:py-3.5 bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
                aria-label={locale === 'zh' ? '下载 Envis v0.1.0' : 'Download Envis v0.1.0'}
              >
                <Download className="w-5 h-5" />
                <span>{t.hero.downloadBtn}</span>
              </a>
              <a
                href="https://github.com/xopenbeta/envis-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl md:px-7 md:py-3.5 border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white text-sm md:text-base font-medium transition-all"
              >
                <Github className="w-5 h-5" />
                <span>{t.hero.sourceBtn}</span>
                <ExternalLink className="w-4 h-4 opacity-50" />
              </a>
            </div>
            <div className="relative mt-8 w-full overflow-hidden rounded-lg bg-[#f1f5f9] px-4 pb-0 pt-12 sm:px-10 sm:pt-16 dark:bg-[#101214]">
              <div className="ambient-glow absolute left-1/2 top-6 h-48 w-2/3 -translate-x-1/2 rounded-full bg-blue-300/25 blur-3xl dark:bg-blue-500/10" />
              <div className="relative mx-auto mb-8 flex max-w-2xl items-center justify-center gap-3 text-center text-sm text-gray-600 dark:text-gray-300">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-emerald-500 shadow-sm dark:bg-white/10">
                  <Check className="h-4 w-4" />
                </span>
                {t.finalCta.eyebrow}
              </div>
              <div className="product-frame relative mx-auto max-w-200 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.35)]">
                <Image
                  src="/Shot.png"
                  alt={
                    locale === 'zh'
                      ? 'Envis 环境管理界面截图'
                      : 'Screenshot of Envis environment management interface'
                  }
                  width={1800}
                  height={1125}
                  priority
                  sizes="(max-width: 800px) 100vw, 800px"
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 pb-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">10+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">{t.stats.services}</div>
              </div>
              <div className="text-center border-x border-gray-200 dark:border-white/5">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{t.stats.crossPlatform}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">{t.stats.platformSupport}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{t.stats.openSource}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">{t.stats.license}</div>
              </div>
            </div>
          </section>

          <ProductStory t={t} />

          <footer className="border-t border-gray-200 dark:border-white/5 pt-8 pb-12 mt-4" aria-label={locale === 'zh' ? '页脚' : 'Footer'}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-4">
                <span>{t.footer.copyright}</span>
                <span className="hidden sm:inline">•</span>
                <a href="https://github.com/xopenbeta/envis-app" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {t.footer.openSource}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/xopenbeta/envis-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {t.footer.github}
                </a>
                <span>•</span>
                <a
                  href={locale === 'zh' ? '/zh/docs/' : '/en/docs/'}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {t.footer.docs}
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
