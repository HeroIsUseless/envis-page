import { LanguageSwitcher } from './LanguageSwitcher'
import {
  ArrowRight,
  Download,
  FileText,
  ExternalLink,
  Github,
  Layers,
  Package,
  Rocket,
  Shield,
  Star,
  Users,
  Zap,
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
      className="relative w-full h-full bg-white dark:bg-[#030303] text-gray-900 dark:text-white overflow-hidden flex flex-col font-sans selection:bg-blue-500/20 dark:selection:bg-white/20"
      role="main"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-black/[0.02] dark:bg-white/[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <nav className="flex justify-between items-center px-4 py-2 sm:px-6 sm:py-3 z-50 border-b border-gray-200 dark:border-white/5 bg-white/50 dark:bg-[#030303]/50 backdrop-blur-xl sticky top-0" aria-label={locale === 'zh' ? '主导航' : 'Main navigation'}>
        <div className="flex items-center gap-2">
          <img src="/app-icon.png" alt="Envis Logo" className="w-7 h-7 rounded-lg" />
          <span className="font-semibold text-gray-900 dark:text-white">Envis</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">v0.1.0</span>
        </div>
        <div className="flex items-center gap-3">
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

      <main className="flex-1 overflow-y-auto custom-scrollbar flex flex-col items-center relative z-10">
        <div className="w-full max-w-7xl px-8 flex flex-col gap-16">
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
              <img
                src="/Shot.png"
                alt={
                  locale === 'zh'
                    ? 'Envis 环境管理界面截图'
                    : 'Screenshot of Envis environment management interface'
                }
                className="w-full max-w-4xl rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10"
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

          <section className="space-y-6" aria-labelledby="scenarios-title">
            <h2 id="scenarios-title" className="text-sm font-semibold text-gray-500 uppercase tracking-wider px-1">{t.scenarios.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: t.scenarios.rapid.title,
                  description: t.scenarios.rapid.desc,
                  gradient: 'from-orange-500/10 to-red-500/10',
                  iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
                  borderColor: 'group-hover:border-orange-300 dark:group-hover:border-orange-500/30',
                },
                {
                  icon: <Layers className="w-6 h-6" />,
                  title: t.scenarios.switch.title,
                  description: t.scenarios.switch.desc,
                  gradient: 'from-blue-500/10 to-cyan-500/10',
                  iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
                  borderColor: 'group-hover:border-blue-300 dark:group-hover:border-blue-500/30',
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: t.scenarios.team.title,
                  description: t.scenarios.team.desc,
                  gradient: 'from-emerald-500/10 to-teal-500/10',
                  iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
                  borderColor: 'group-hover:border-emerald-300 dark:group-hover:border-emerald-500/30',
                },
              ].map((scenario, index) => (
                <div key={index} className={`relative flex flex-col items-start gap-5 p-7 rounded-2xl border border-gray-200 dark:border-white/5 bg-gradient-to-br ${scenario.gradient} backdrop-blur-sm hover:shadow-xl dark:hover:shadow-2xl hover:-translate-y-1 ${scenario.borderColor} transition-all duration-300 group h-full overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 ${scenario.iconBg} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-300`}></div>

                  <div className={`relative p-3.5 rounded-xl ${scenario.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                    <div className="text-white">{scenario.icon}</div>
                  </div>
                  <div className="relative">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
                      {scenario.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{scenario.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6" aria-labelledby="features-title">
            <h2 id="features-title" className="text-sm font-semibold text-gray-500 uppercase tracking-wider px-1">{t.features.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <Rocket className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
                  title: t.features.oneClickInstall.title,
                  desc: t.features.oneClickInstall.desc,
                },
                {
                  icon: <Layers className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
                  title: t.features.isolation.title,
                  desc: t.features.isolation.desc,
                },
                {
                  icon: <Package className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
                  title: t.features.export.title,
                  desc: t.features.export.desc,
                },
                {
                  icon: <Shield className="w-5 h-5 text-orange-500 dark:text-orange-400" />,
                  title: t.features.secure.title,
                  desc: t.features.secure.desc,
                },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-start gap-4 p-6 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] hover:bg-gray-100 dark:hover:bg-white/[0.05] hover:border-gray-300 dark:hover:border-white/10 transition-all">
                  <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5">{feature.icon}</div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6" aria-labelledby="quickstart-title">
            <h2 id="quickstart-title" className="text-sm font-semibold text-gray-500 uppercase tracking-wider px-1">{t.quickStart.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <Step number="1" title={t.quickStart.step1.title} desc={t.quickStart.step1.desc} />
              <Step number="2" title={t.quickStart.step2.title} desc={t.quickStart.step2.desc} />
              <Step number="3" title={t.quickStart.step3.title} desc={t.quickStart.step3.desc} />
            </div>
          </section>

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

function Step({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center p-5 rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02] hover:bg-gray-100 dark:hover:bg-white/[0.05] hover:border-gray-300 dark:hover:border-white/10 transition-all">
      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-base font-bold text-gray-700 dark:text-white mb-3">
        {number}
      </div>
      <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{title}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">{desc}</div>
    </div>
  )
}
