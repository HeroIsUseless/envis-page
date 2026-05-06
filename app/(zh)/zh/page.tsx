import type { Metadata } from 'next'
import { HomePage } from '../../components/HomePage'
import { generateStructuredData } from '../../lib/structured-data'
import { getTranslations } from '../../lib/i18n'

const locale = 'zh' as const
const t = getTranslations(locale)

export const metadata: Metadata = {
  title: t.seo.title,
  description: t.seo.description,
  keywords: t.seo.keywords,
  alternates: {
    canonical: '/zh/',
    languages: {
      'zh-CN': '/zh/',
      'en-US': '/en/',
      'x-default': '/zh/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: ['en_US'],
    url: 'https://envis.app/zh/',
    siteName: 'Envis',
    title: t.seo.ogTitle,
    description: t.seo.ogDescription,
    images: [
      {
        url: 'https://envis.app/opengraph-image',
        width: 1200,
        height: 630,
        alt: t.seo.ogTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: t.seo.ogTitle,
    description: t.seo.ogDescription,
    images: ['https://envis.app/opengraph-image'],
  },
}

export default function ZhHomePage() {
  const structuredData = generateStructuredData({ locale })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <HomePage locale={locale} t={t} />
    </>
  )
}
