import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./contexts/I18nContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://envis.app'),
  title: {
    default: "Envis - 更智能的环境管理工具",
    template: "%s | Envis"
  },
  description: "一款全平台环境管理软件，让开发环境切换像呼吸一样自然。支持一键安装、环境隔离、配置导出，安全可靠。支持 10+ 种开发服务。",
  keywords: ["环境管理", "开发工具", "macOS", "Windows", "Linux", "跨平台", "版本管理", "Node.js", "Python", "Go", "Docker", "开发环境", "环境隔离", "配置管理"],
  authors: [{ name: "Envis Team", url: "https://github.com/xopenbeta/envis-app" }],
  creator: "Envis Team",
  publisher: "Envis Team",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    url: "https://envis.app",
    siteName: "Envis",
    title: "Envis - 更智能的环境管理工具",
    description: "一款全平台环境管理软件，让开发环境切换像呼吸一样自然。支持一键安装、环境隔离、配置导出。",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Envis - 更智能的环境管理",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Envis - 更智能的环境管理工具",
    description: "一款全平台环境管理软件，让开发环境切换像呼吸一样自然",
    images: ["/opengraph-image"],
    creator: "@envis_app",
  },
  alternates: {
    canonical: "https://envis.app",
    languages: {
      'zh-CN': 'https://envis.app',
      'en-US': 'https://envis.app?lang=en',
    },
  },
  category: "technology",
  classification: "Developer Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="theme-color" content="#3B82F6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#030303" media="(prefers-color-scheme: dark)" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SoftwareApplication",
                  "name": "Envis",
                  "description": "一款全平台环境管理软件，让开发环境切换像呼吸一样自然。支持一键安装、环境隔离、配置导出，安全可靠。",
                  "applicationCategory": "DeveloperApplication",
                  "operatingSystem": ["macOS", "Windows", "Linux"],
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                  },
                  "downloadUrl": "https://github.com/xopenbeta/envis-app/releases",
                  "softwareVersion": "0.1.0",
                  "releaseNotes": "https://github.com/xopenbeta/envis-app/releases/tag/v0.1.0",
                  "screenshot": "https://envis.app/opengraph-image",
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "ratingCount": "1",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "featureList": [
                    "一键安装：自动下载、配置、启动服务程序",
                    "环境隔离：多项目环境完全独立，互不干扰",
                    "配置导出：支持一键导出导入环境配置",
                    "安全可靠：本地运行，数据完全掌控"
                  ],
                  "keywords": "环境管理,开发工具,macOS,Windows,Linux,跨平台,版本管理,开发环境",
                  "author": {
                    "@type": "Organization",
                    "name": "Envis Team",
                    "url": "https://github.com/heroisuseless"
                  },
                  "publisher": {
                    "@type": "Organization", 
                    "name": "Envis Team",
                    "url": "https://github.com/heroisuseless"
                  }
                },
                {
                  "@type": "WebSite",
                  "name": "Envis",
                  "alternateName": "Envis - 更智能的环境管理",
                  "description": "一款全平台环境管理软件官方网站",
                  "url": "https://envis.app",
                  "inLanguage": ["zh-CN", "en-US"]
                },
                {
                  "@type": "Organization",
                  "name": "Envis",
                  "url": "https://envis.app",
                  "logo": "https://envis.app/icon",
                  "sameAs": [
                    "https://github.com/xopenbeta/envis-app"
                  ]
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "首页",
                      "item": "https://envis.app"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-inter antialiased`}
      >
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
