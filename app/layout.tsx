import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Envis - macOS 环境管理工具",
  description: "Envis 是一个专为 macOS 设计的现代环境管理工具，帮助开发者轻松管理多个开发环境、版本控制和依赖项。支持 Node.js、Python、Go 等多种编程语言环境。",
  keywords: "环境管理,macOS,开发工具,版本管理,Node.js,Python,Go,开发环境",
  authors: [{ name: "Envis Team" }],
  creator: "Envis Team",
  publisher: "Envis Team",
  robots: "index, follow",
  openGraph: {
    title: "Envis - macOS 环境管理工具",
    description: "专为 macOS 设计的现代环境管理工具，轻松管理多个开发环境",
    type: "website",
    locale: "zh_CN",
    siteName: "Envis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Envis - macOS 环境管理工具",
    description: "专为 macOS 设计的现代环境管理工具，轻松管理多个开发环境",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="canonical" href="https://envis.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "Envis",
                "description": "专为 macOS 设计的现代环境管理工具，帮助开发者轻松管理多个开发环境、版本控制和依赖项。支持 Node.js、Python、Go 等多种编程语言环境。",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "macOS",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "downloadUrl": "https://github.com/envis/envis/releases",
                "softwareVersion": "1.0.0",
                "requirements": "macOS 12.0 或更高版本",
                "keywords": "环境管理,macOS,开发工具,版本管理,Node.js,Python,Go,开发环境",
                "author": {
                  "@type": "Organization",
                  "name": "Envis Team"
                },
                "publisher": {
                  "@type": "Organization", 
                  "name": "Envis Team"
                }
              }
            ])
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
