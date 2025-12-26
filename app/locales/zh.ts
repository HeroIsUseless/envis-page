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
    download: "下载"
  },
  hero: {
    badge: "如果喜欢 Envis，去 GitHub 点个 Star",
    title: "更智能的环境管理",
    subtitle: "一款全平台环境管理软件，让开发环境切换像呼吸一样自然",
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
  footer: {
    copyright: "© 2025 Envis",
    openSource: "开源项目",
    github: "GitHub",
    docs: "文档"
  }
}

export type Translations = typeof zh
