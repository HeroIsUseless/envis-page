import type { Metadata } from 'next'
import type { LucideIcon } from 'lucide-react'
import { BookOpen, Rocket, Terminal, TerminalSquare } from 'lucide-react'
import type { Locale } from './i18n'

export type PostKind = 'tutorial' | 'article'

export interface PostMeta {
  slug: string
  kind: PostKind
  date: string
  readMinutes: number
  icon: LucideIcon
}

export interface PostLocalized {
  title: string
  description: string
  lede: string
  keywords: string[]
}

export interface PostEntry {
  meta: PostMeta
  zh: PostLocalized
  en: PostLocalized
}

export const BLOG_POSTS: PostEntry[] = [
  {
    meta: { slug: 'nodejs-versions', kind: 'article', date: '2026-09-04', readMinutes: 12, icon: TerminalSquare },
    zh: {
      title: 'Node.js 版本、npm 与 Corepack 完整指南',
      description: '从 LTS 与 Current 的选择，到各大版本特性、npm registry、全局 prefix 和 Corepack，一次理清 Node.js 环境管理。',
      lede: '理解版本发布节奏、关键运行时能力，以及 npm 包究竟被下载到哪里。',
      keywords: ['Node.js 版本', 'Node.js LTS', 'npm registry', 'npm prefix', 'Corepack', 'Envis'],
    },
    en: {
      title: 'A complete guide to Node.js versions, npm, and Corepack',
      description: 'From choosing LTS or Current to major releases, npm registries, the global prefix, and Corepack: a practical map of Node.js environment management.',
      lede: 'Understand the release cadence, key runtime capabilities, and where npm packages actually go.',
      keywords: ['Node.js versions', 'Node.js LTS', 'npm registry', 'npm prefix', 'Corepack', 'Envis'],
    },
  },
  {
    meta: { slug: 'quick-start', kind: 'tutorial', date: '2026-09-03', readMinutes: 3, icon: Rocket },
    zh: {
      title: 'Envis 快速开始',
      description: '下载安装 Envis，创建第一个环境、添加服务并启动的入门指南。',
      lede: '三步上手 Envis：安装、创建环境、添加并启动服务。',
      keywords: ['Envis 快速开始', 'Envis 教程', '环境管理', '新建环境'],
    },
    en: {
      title: 'Envis Quick Start',
      description: 'A getting-started guide to installing Envis, creating your first environment, and adding services.',
      lede: 'Get started with Envis in three steps: install, create an environment, and add services.',
      keywords: ['Envis quick start', 'Envis tutorial', 'environment management', 'new environment'],
    },
  },
  {
    meta: { slug: 'envis-intro', kind: 'tutorial', date: '2026-09-02', readMinutes: 5, icon: BookOpen },
    zh: {
      title: 'Envis 介绍',
      description: '了解 Envis 是什么、解决什么问题，以及「环境」与「服务」的核心概念。',
      lede: 'Envis 是一款开源免费的开发环境管理器：认识它解决的问题，以及环境、服务与软件源的工作方式。',
      keywords: ['Envis 介绍', 'Envis 教程', '开发环境管理', 'Node.js', 'Java', 'MySQL'],
    },
    en: {
      title: 'Introducing Envis',
      description: 'What Envis is, the problems it solves, and the core concepts of environments and services.',
      lede: 'Envis is a free and open-source development environment manager: learn the problems it solves and how environments, services, and the software source work.',
      keywords: ['Envis introduction', 'Envis tutorial', 'dev environment management', 'Node.js', 'Java', 'MySQL'],
    },
  },
  {
    meta: { slug: 'cli-commands', kind: 'tutorial', date: '2026-09-01', readMinutes: 8, icon: Terminal },
    zh: {
      title: 'Envis CLI 命令',
      description: 'envis use、list、refresh 等命令的完整终端用法、别名与示例。',
      lede: '在图形界面之外，用几条终端命令快速切换和查看 Envis 环境。',
      keywords: ['Envis CLI', 'envis use', 'envis list', 'envis refresh', '终端命令'],
    },
    en: {
      title: 'Envis CLI Commands',
      description: 'Complete terminal usage for envis use, list, refresh, and related commands, with aliases and examples.',
      lede: 'Beyond the GUI, switch and inspect Envis environments with a handful of terminal commands.',
      keywords: ['Envis CLI', 'envis use', 'envis list', 'envis refresh', 'terminal commands'],
    },
  },
]

export function getPosts(locale: Locale) {
  return [...BLOG_POSTS]
    .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1))
    .map(({ meta, zh, en }) => ({ ...meta, ...(locale === 'zh' ? zh : en) }))
}

export function getPost(slug: string, locale: Locale) {
  const entry = BLOG_POSTS.find((p) => p.meta.slug === slug)
  if (!entry) throw new Error(`Unknown blog post slug: ${slug}`)
  return { ...entry.meta, ...(locale === 'zh' ? entry.zh : entry.en) }
}

export function formatReadTime(minutes: number, locale: Locale) {
  return locale === 'zh' ? `约 ${minutes} 分钟` : `${minutes} min read`
}

export function getPostUrl(slug: string, locale: Locale, absolute = false) {
  const path = `/${locale}/blog/${slug}/`
  return absolute ? `https://envis.app${path}` : path
}

export function buildPostMetadata(slug: string, locale: Locale): Metadata {
  const post = getPost(slug, locale)
  const iso = `${post.date}T00:00:00.000Z`
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: 'Envis Team' }],
    alternates: {
      canonical: getPostUrl(slug, locale),
      languages: {
        'zh-CN': getPostUrl(slug, 'zh'),
        'en-US': getPostUrl(slug, 'en'),
        'x-default': getPostUrl(slug, 'zh'),
      },
    },
    openGraph: {
      type: 'article',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: locale === 'zh' ? ['en_US'] : ['zh_CN'],
      url: getPostUrl(slug, locale, true),
      siteName: 'Envis',
      title: post.title,
      description: post.description,
      publishedTime: iso,
      modifiedTime: iso,
      authors: ['Envis Team'],
      tags: post.keywords,
      images: ['https://envis.app/opengraph-image'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['https://envis.app/opengraph-image'],
    },
  }
}

export function buildPostStructuredData(slug: string, locale: Locale) {
  const post = getPost(slug, locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: locale === 'zh' ? 'zh-CN' : 'en-US',
    mainEntityOfPage: getPostUrl(slug, locale, true),
    author: { '@type': 'Organization', name: 'Envis Team', url: 'https://envis.app' },
    publisher: {
      '@type': 'Organization',
      name: 'Envis',
      logo: { '@type': 'ImageObject', url: 'https://envis.app/app-icon.png' },
    },
    image: 'https://envis.app/opengraph-image',
  }
}
