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
  description: 'Cross-platform environment management tool for developers.',
  authors: [{ name: 'Envis Team', url: 'https://github.com/xopenbeta/envis-app' }],
  creator: 'Envis Team',
  publisher: 'Envis Team',
  robots: {
    index: true,
    follow: true,
  },
}

export default function ZhRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#3B82F6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#030303" media="(prefers-color-scheme: dark)" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-inter antialiased`}>{children}</body>
    </html>
  )
}
