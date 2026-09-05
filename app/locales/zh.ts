export const zh = {
  seo: {
    title: "Envis - 更智能的环境管理工具",
    description: "一款全平台环境管理软件，让开发环境切换像呼吸一样自然。支持一键安装、环境隔离、配置导出，安全可靠。支持 10+ 种开发服务。",
    ogTitle: "Envis - 更智能的环境管理工具",
    ogDescription: "一款全平台环境管理软件，让开发环境切换像呼吸一样自然。支持一键安装、环境隔离、配置导出。",
    keywords: ["环境管理", "开发工具", "macOS", "Windows", "Linux", "跨平台", "版本管理", "Node.js", "Python", "Go", "Docker", "开发环境", "环境隔离", "配置管理"]
  },
  nav: {
    github: "GitHub",
    docs: "文档",
    blog: "博客",
    download: "下载"
  },
  hero: {
    badge: "如果喜欢 Envis，去 GitHub 点个 Star",
    title: "你是否在安装开发环境的时候\n感觉到痛苦？",
    subtitle: "Envis：一款全平台环境管理软件，让开发环境安装/切换像呼吸一样自然",
    downloadBtn: "立即下载",
    sourceBtn: "查看源码"
  },
  stats: {
    services: "支持服务",
    crossPlatform: "跨平台",
    platformSupport: "全平台支持",
    openSource: "开源",
    license: "MIT 协议"
  },
  why: {
    eyebrow: "为什么选择 Envis",
    title: "复杂留在工具里，开发回到代码中",
    description: "Envis 把安装、隔离、切换与共享串成一个完整工作流。即使同时维护多套技术栈，环境依然清晰、可控、随时可复现。",
    items: [
      { title: "装得快", desc: "服务、版本与依赖按需安装，不再翻文档拼命令。", metric: "一键", label: "完成安装" },
      { title: "切得稳", desc: "每个项目独立保存版本组合，旧项目与新技术栈互不干扰。", metric: "0", label: "全局污染" },
      { title: "看得清", desc: "运行状态、系统资源和服务配置集中呈现，问题更容易定位。", metric: "10+", label: "服务统一管理" },
      { title: "带得走", desc: "导出完整环境配置，在新设备或团队成员电脑上快速复现。", metric: "1 份", label: "配置跨设备" }
    ]
  },
  features: {
    title: "核心特性",
    oneClickInstall: {
      title: "一键安装",
      desc: "自动下载、配置、启动服务程序"
    },
    isolation: {
      title: "环境隔离",
      desc: "多项目环境完全独立，互不干扰"
    },
    export: {
      title: "配置导出",
      desc: "支持一键导出导入环境配置"
    },
    secure: {
      title: "安全可靠",
      desc: "本地运行，数据完全掌控"
    }
  },
  quickStart: {
    title: "快速开始",
    step1: {
      title: "创建",
      desc: "新建环境"
    },
    step2: {
      title: "配置",
      desc: "服务配置"
    },
    step3: {
      title: "运行",
      desc: "一键启动"
    }
  },
  scenarios: {
    title: "使用场景",
    rapid: {
      title: "极速环境搭建",
      desc: "开发一个新项目，搭建环境往往是最难的，下载困难，配置繁琐，依赖错误，这时候就可以用envis一键下载安装服务程序，告别繁琐的手动配置与依赖排错，让项目立即进入可运行状态"
    },
    switch: {
      title: "多项目无缝切换",
      desc: "多项目开发时，项目A需要node14，Java8，mysql，而另一个项目需要Node20，Java11，mariadb，每次切换项目开发都要先切换一串环境，比较麻烦，用envis可一键切换环境。轻松切换复杂的项目依赖。"
    },
    team: {
      title: "团队环境标准化",
      desc: "每个电脑都要配置一遍环境，比较麻烦，envis支持导出导入环境配置，一键搭建完全相同环境，让项目稳定运行起来。消除\"在我电脑上能跑\"的困扰，确保所有团队成员拥有一致的开发环境，保障项目在不同设备上的稳定运行。"
    }
  },
  showcase: {
    eyebrow: "从创建到运行",
    title: "一套界面，管好每个项目的开发环境",
    description: "不再在安装器、终端、配置文件和系统设置之间来回切换。Envis 把环境的完整生命周期收进一个清晰的工作区。",
    items: [
      {
        number: "01",
        title: "为项目创建独立环境",
        desc: "用一个名字建立专属工作区。每个项目拥有自己的服务组合与版本，不污染系统，也不影响其他项目。",
        image: "/docs/01_main/2.png",
        alt: "在 Envis 中创建新的隔离开发环境"
      },
      {
        number: "02",
        title: "按需要选择服务与版本",
        desc: "从编程语言、数据库到服务器，按项目真实需求组合服务。已安装版本可以直接复用，缺少的版本随用随下。",
        image: "/docs/01_main/3.png",
        alt: "在 Envis 中选择 Node.js 服务版本"
      },
      {
        number: "03",
        title: "细节配置仍然完全可控",
        desc: "Registry、安装前缀和运行参数都能单独设置。Envis 简化重复工作，但不会藏起开发者真正需要的控制权。",
        image: "/docs/01_main/4.png",
        alt: "在 Envis 中配置 Node.js 环境参数"
      }
    ]
  },
  workflow: {
    eyebrow: "完整工作流",
    title: "环境管理，本来就该这么直接",
    description: "把高频但容易出错的环境操作，变成可看见、可复用、可迁移的四步流程。",
    items: [
      { title: "创建", desc: "按项目建立隔离工作区，不再改乱全局环境。" },
      { title: "组合", desc: "自由添加语言、数据库、服务器和自定义服务。" },
      { title: "切换", desc: "保留多套版本配置，切换项目时一步到位。" },
      { title: "迁移", desc: "导出完整配置，让新设备和团队成员快速复现。" }
    ]
  },
  capabilities: {
    eyebrow: "更多能力",
    title: "为真实开发现场准备的细节",
    description: "从日常切换到团队协作，常用能力都在同一个本地工具里。",
    items: [
      { title: "多版本共存", desc: "同一服务保留多个版本，按环境独立启用。" },
      { title: "服务状态总览", desc: "运行、停止与安装状态一眼可见。" },
      { title: "系统资源监控", desc: "集中查看 CPU、内存、磁盘与网络状态。" },
      { title: "快捷指令", desc: "把项目目录、编辑器和常用命令放进环境。" },
      { title: "自定义服务", desc: "内置列表之外，也能接入自己的工具链。" },
      { title: "Hosts 管理", desc: "项目域名配置随环境一起管理与切换。" },
      { title: "配置导入导出", desc: "复现环境不再依赖零散的口头说明。" },
      { title: "本地优先", desc: "配置与项目数据留在设备中，由你掌控。" }
    ]
  },
  audience: {
    eyebrow: "适合谁",
    title: "一个人更省事，一个团队更一致",
    items: [
      { title: "多项目开发者", desc: "同时维护新旧项目，不再手动切换一长串依赖。" },
      { title: "全栈与独立开发者", desc: "在一个界面组合前端、后端、数据库和本地服务。" },
      { title: "研发团队", desc: "共享可复现的环境配置，减少入职和协作成本。" }
    ]
  },
  faq: {
    eyebrow: "常见问题",
    title: "开始之前，你可能还想知道",
    items: [
      { question: "Envis 是免费的吗？", answer: "是。Envis 是基于 MIT 协议发布的开源项目，你可以免费下载和使用。" },
      { question: "支持哪些操作系统？", answer: "Envis 面向 macOS、Windows 和 Linux 构建。当前页面提供 macOS Apple Silicon 安装包，其他平台版本请关注 GitHub Releases。" },
      { question: "它会修改我的全局环境吗？", answer: "Envis 的核心目标是让不同项目的服务和版本彼此隔离，尽量减少对系统全局环境的影响。" },
      { question: "可以管理哪些服务？", answer: "当前涵盖常见编程语言、数据库、服务器、Hosts 与自定义服务，并会持续扩展。" },
      { question: "团队如何使用 Envis？", answer: "将项目环境配置导出并交给团队成员导入，即可更快建立一致的开发环境。" }
    ]
  },
  finalCta: {
    eyebrow: "开源 · 本地优先 · 跨平台",
    title: "把时间留给代码，不要留给环境配置",
    description: "下载 Envis，创建你的第一个可复用开发环境。",
    download: "下载 macOS 版",
    release: "查看 GitHub Releases"
  },
  footer: {
    copyright: "© 2025 Envis",
    openSource: "开源项目",
    github: "GitHub",
    docs: "文档"
  }
}

export type Translations = typeof zh
