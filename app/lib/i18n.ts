import { en } from '../locales/en'
import { zh, type Translations } from '../locales/zh'

export type Locale = 'zh' | 'en'

export const supportedLocales: Locale[] = ['zh', 'en']

export function isLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale)
}

export function getTranslations(locale: Locale): Translations {
  return locale === 'en' ? en : zh
}

export function getLocaleConfig(locale: Locale) {
  const isZh = locale === 'zh'

  return {
    htmlLang: isZh ? 'zh-CN' : 'en-US',
    ogLocale: isZh ? 'zh_CN' : 'en_US',
    pathPrefix: isZh ? '/zh' : '/en',
  }
}
