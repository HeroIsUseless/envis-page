'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'
import type { Locale } from '../lib/i18n'

interface LanguageSwitcherProps {
  locale: Locale
}

function switchLocalePath(pathname: string, targetLocale: Locale) {
  const segments = pathname.split('/').filter(Boolean)

  if (segments[0] === 'zh' || segments[0] === 'en') {
    segments[0] = targetLocale
    return `/${segments.join('/')}${pathname.endsWith('/') ? '/' : ''}`
  }

  return targetLocale === 'zh' ? '/zh/' : '/en/'
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const newLocale: Locale = locale === 'zh' ? 'en' : 'zh'
  const targetPath = switchLocalePath(pathname, newLocale)

  return (
    <Link
      href={targetPath}
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
      aria-label={locale === 'zh' ? '切换到英文 (Switch to English)' : '切换到中文 (Switch to Chinese)'}
      title={locale === 'zh' ? '切换到英文' : 'Switch to Chinese'}
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">{locale === 'zh' ? 'EN' : '中文'}</span>
    </Link>
  )
}
