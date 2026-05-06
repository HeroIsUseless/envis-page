type Locale = 'zh' | 'en'

interface StructuredDataConfig {
  locale: Locale
}

export function generateStructuredData({ locale }: StructuredDataConfig) {
  const isZh = locale === 'zh'
  
  const baseUrl = 'https://envis.app'
  const localeUrl = isZh ? `${baseUrl}/zh/` : `${baseUrl}/en/`
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${baseUrl}/#software`,
        "name": "Envis",
        "description": isZh 
          ? "一款全平台环境管理软件，让开发环境切换像呼吸一样自然。支持一键安装、环境隔离、配置导出，安全可靠。"
          : "A cross-platform environment management tool that makes switching development environments as natural as breathing. Supports one-click installation, environment isolation, config export, reliable and secure.",
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
        "screenshot": `${baseUrl}/opengraph-image`,
        "featureList": isZh ? [
          "一键安装：自动下载、配置、启动服务程序",
          "环境隔离：多项目环境完全独立，互不干扰",
          "配置导出：支持一键导出导入环境配置",
          "安全可靠：本地运行，数据完全掌控"
        ] : [
          "One-Click Install: Automatically download, configure, and start services",
          "Environment Isolation: Complete isolation between projects, no interference",
          "Config Export: One-click export and import of environment configurations",
          "Secure & Reliable: Runs locally, full control of your data"
        ],
        "keywords": isZh 
          ? "环境管理,开发工具,macOS,Windows,Linux,跨平台,版本管理,开发环境"
          : "environment management,development tools,macOS,Windows,Linux,cross-platform,version management,dev environment",
        "inLanguage": isZh ? "zh-CN" : "en-US",
        "author": {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          "name": "Envis Team",
          "url": "https://github.com/xopenbeta/envis-app"
        },
        "publisher": {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`
        }
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Envis",
        "alternateName": isZh ? "Envis - 更智能的环境管理" : "Envis - Smarter Environment Management",
        "description": isZh 
          ? "一款全平台环境管理软件官方网站" 
          : "Official website of Envis, a cross-platform environment management tool",
        "inLanguage": isZh ? "zh-CN" : "en-US",
        "publisher": {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`
        }
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Envis",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/app-icon.png`,
          "width": 32,
          "height": 32
        },
        "sameAs": [
          "https://github.com/xopenbeta/envis-app"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": isZh ? "首页" : "Home",
            "item": localeUrl
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${localeUrl}/#webpage`,
        "url": localeUrl,
        "name": isZh ? "Envis - 更智能的环境管理工具" : "Envis - Smarter Environment Management Tool",
        "description": isZh 
          ? "一款全平台环境管理软件，让开发环境切换像呼吸一样自然。支持一键安装、环境隔离、配置导出，安全可靠。支持 10+ 种开发服务。"
          : "A cross-platform environment management tool that makes switching development environments as natural as breathing. Supports one-click installation, environment isolation, config export. Reliable and secure. 10+ services supported.",
        "inLanguage": isZh ? "zh-CN" : "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`
        },
        "about": {
          "@type": "SoftwareApplication",
          "@id": `${baseUrl}/#software`
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "@id": `${baseUrl}/#breadcrumb`
        }
      }
    ]
  }
}
