'use client'

import { useI18n } from '../contexts/I18nContext'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  const handleToggle = () => {
    const newLocale = locale === 'zh' ? 'en' : 'zh'
    setLocale(newLocale)
    
    // Announce language change for screen readers
    const message = newLocale === 'zh' ? '已切换到中文' : 'Switched to English'
    const announcement = document.createElement('div')
    announcement.setAttribute('role', 'status')
    announcement.setAttribute('aria-live', 'polite')
    announcement.className = 'sr-only'
    announcement.textContent = message
    document.body.appendChild(announcement)
    setTimeout(() => document.body.removeChild(announcement), 1000)
  }

  return (
    <button
      onClick={handleToggle}
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
      aria-label={locale === 'zh' ? '切换到英文 (Switch to English)' : '切换到中文 (Switch to Chinese)'}
      title={locale === 'zh' ? '切换到英文' : 'Switch to Chinese'}
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">{locale === 'zh' ? 'EN' : '中文'}</span>
    </button>
  )
}
