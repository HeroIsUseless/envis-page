'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { zh, Translations } from '../locales/zh'
import { en } from '../locales/en'

type Locale = 'zh' | 'en'

interface I18nContextType {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translations: Record<Locale, Translations> = {
  zh,
  en
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  
  // Initialize with default locale to avoid undefined context
  const [locale, setLocaleState] = useState<Locale>(() => {
    // Try to get from URL params during initial render
    const urlLang = searchParams.get('lang')
    if (urlLang === 'en' || urlLang === 'zh') {
      return urlLang
    }
    return 'zh' // default
  })
  
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Priority: URL param > localStorage > browser language > default
    const urlLang = searchParams.get('lang')
    const savedLocale = typeof window !== 'undefined' ? localStorage.getItem('locale') as Locale : null
    
    let initialLocale: Locale = 'zh'
    
    if (urlLang === 'en' || urlLang === 'zh') {
      initialLocale = urlLang
    } else if (savedLocale && (savedLocale === 'zh' || savedLocale === 'en')) {
      initialLocale = savedLocale
    } else if (typeof window !== 'undefined') {
      // Try to detect from browser language
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('en')) {
        initialLocale = 'en'
      }
    }
    
    if (initialLocale !== locale) {
      setLocaleState(initialLocale)
    }
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', initialLocale)
      // Update HTML lang attribute
      document.documentElement.lang = initialLocale === 'zh' ? 'zh-CN' : 'en-US'
    }
  }, [searchParams, locale])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
      // Update HTML lang attribute
      document.documentElement.lang = newLocale === 'zh' ? 'zh-CN' : 'en-US'
    }
    
    // Update URL with language parameter
    const params = new URLSearchParams(searchParams.toString())
    if (newLocale === 'en') {
      params.set('lang', 'en')
    } else {
      params.delete('lang')
    }
    
    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname
    router.replace(newUrl, { scroll: false })
  }

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

