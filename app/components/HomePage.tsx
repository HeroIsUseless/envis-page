import Image from 'next/image'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ProductStory } from './ProductStory'
import {
  ArrowRight,
  Download,
  FileText,
  ExternalLink,
  Github,
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

  return (
    <div
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white font-sans text-gray-900 selection:bg-blue-500/20 dark:bg-[#030303] dark:text-white dark:selection:bg-white/20"
      role="main"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-black/[0.02] dark:bg-white/[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <nav className="flex justify-between items-center px-4 py-2 sm:px-6 sm:py-3 z-50 border-b border-gray-200 dark:border-white/5 bg-white/50 dark:bg-[#030303]/50 backdrop-blur-xl sticky top-0" aria-label={locale === 'zh' ? '主导航' : 'Main navigation'}>
        <div className="flex items-center gap-2">
          <Image src="/app-icon.png" alt="Envis Logo" width={28} height={28} className="h-7 w-7 rounded-lg" />
          <span className="font-semibold text-gray-900 dark:text-white">Envis</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">v0.1.0</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 lg:flex">
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
          <a
            href={docsHref}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>{t.nav.docs}</span>
          </a>
          <a
            href="https://github.com/xopenbeta/envis-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>{t.nav.github}</span>
          </a>
          <a
            href="/Envis_0.1.0_aarch64.dmg"
            download
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>{t.nav.download}</span>
          </a>
        </div>
      </nav>

      <main className="relative z-10 flex flex-1 flex-col items-center">
        <div className="flex w-full max-w-7xl flex-col gap-12 px-5 sm:px-8">
          <section className="text-center space-y-8 mt-20" aria-labelledby="hero-title">
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
              <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
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
            <div className="w-full flex justify-center pt-8">
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
                sizes="(max-width: 1024px) 100vw, 896px"
                className="h-auto w-full max-w-4xl rounded-lg border border-gray-200 shadow-2xl dark:border-white/10"
              />
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
