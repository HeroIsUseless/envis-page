'use client'

import { useI18n } from '../contexts/I18nContext'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  return (
    <button
      onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4" />
      <span>{locale === 'zh' ? 'EN' : '中文'}</span>
    </button>
  )
}
