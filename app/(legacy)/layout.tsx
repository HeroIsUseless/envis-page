import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://envis.app'),
  title: {
    default: 'Envis',
    template: '%s | Envis',
  },
  description: 'Envis routing migration entry pages.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function LegacyRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-inter antialiased`}>{children}</body>
    </html>
  )
}
