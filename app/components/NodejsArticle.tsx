import Link from 'next/link'
import { ArrowLeft, CalendarDays, Clock3, Info, TerminalSquare } from 'lucide-react'
import type { Locale } from '../lib/i18n'
import { formatReadTime, getPost } from '../lib/blog-posts'
import { BlogChrome } from './BlogChrome'

const releasesZh = [
  ['v14.0.0', '2020 年 4 月', '支持可选链（?.）和空值合并（??）运算符；ES 模块支持显著改进，不再需要 --experimental-modules 标志。'],
  ['v16.0.0', '2021 年 4 月', '提供官方 Apple Silicon 构建；引入 Corepack，用来管理 Yarn、pnpm 等包管理器。'],
  ['v18.0.0', '2022 年 4 月', '内置基于 Undici 的 Fetch API，并支持 Web Streams API；推荐使用 node: 协议引入内置模块；OpenSSL 升级至 3.0。'],
  ['v20.0.0', '2023 年 4 月', 'Test Runner 进入稳定状态；支持 Single Executable Applications（SEA）；Fetch API 和 WASI 默认启用。'],
  ['v22.0.0', '2024 年 4 月', '支持 require() 加载同步 ESM 模块；Watch Mode（--watch）进入稳定状态；加入 WebSocket 客户端；V8 升级至 12.4。'],
  ['v24.0.0', '2025 年 5 月', '内置 OpenSSL 3.5；支持 JSON 模块的 import attributes 语法；Test Runner 继续增强；V8 升级至 13.x。'],
  ['v26.0.0', '2026 年 5 月', '带来新一代 V8 与 JavaScript 语言能力，并继续移除废弃 API。具体特性和稳定性状态应以 Node.js 官方发布说明为准。'],
]

const releasesEn = [
  ['v14.0.0', 'April 2020', 'Added optional chaining (?.) and nullish coalescing (??), with substantially improved ES module support and no need for the --experimental-modules flag.'],
  ['v16.0.0', 'April 2021', 'Added official Apple Silicon builds and introduced Corepack for managing package managers such as Yarn and pnpm.'],
  ['v18.0.0', 'April 2022', 'Included the Undici-based Fetch API and Web Streams API, encouraged the node: protocol for built-ins, and moved to OpenSSL 3.0.'],
  ['v20.0.0', 'April 2023', 'Stabilized the test runner, added Single Executable Applications (SEA), and enabled Fetch and WASI by default.'],
  ['v22.0.0', 'April 2024', 'Added support for require() of synchronous ESM, stabilized Watch Mode (--watch), introduced a WebSocket client, and upgraded to V8 12.4.'],
  ['v24.0.0', 'May 2025', 'Included OpenSSL 3.5, supported import attributes for JSON modules, expanded the test runner, and upgraded to V8 13.x.'],
  ['v26.0.0', 'May 2026', 'Continued with a newer V8 generation and JavaScript language features while removing deprecated APIs. Consult the official release notes for exact features and stability levels.'],
]

function Code({ children }: { children: React.ReactNode }) {
  return <code className="rounded-md border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-[0.88em] text-gray-800 dark:border-white/10 dark:bg-white/10 dark:text-gray-200">{children}</code>
}

export function NodejsArticle({ locale }: { locale: Locale }) {
  const isZh = locale === 'zh'
  const prefix = isZh ? '/zh' : '/en'
  const releases = isZh ? releasesZh : releasesEn
  const post = getPost('nodejs-versions', locale)

  return (
    <BlogChrome locale={locale}>
      <article className="mx-auto max-w-4xl px-5 pb-24 pt-12 sm:px-8 sm:pt-20">
        <Link href={`${prefix}/blog/`} className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"><ArrowLeft className="h-4 w-4" />{isZh ? '全部文章' : 'All articles'}</Link>
        <header className="mt-10 border-b border-gray-200 pb-10 dark:border-white/10">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400"><TerminalSquare className="h-4 w-4" />Node.js</div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-gray-950 sm:text-6xl dark:text-white">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">{post.lede}</p>
          <div className="mt-7 flex flex-wrap gap-5 text-xs text-gray-500 dark:text-gray-400"><span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /><time dateTime={post.date}>{post.date}</time></span><span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" />{formatReadTime(post.readMinutes, locale)}</span></div>
        </header>

        <div className="prose-area mt-12 space-y-12 text-base leading-8 text-gray-700 dark:text-gray-300">
          <section>
            <h2>{isZh ? 'Node.js 与版本通道' : 'Node.js and its release lines'}</h2>
            <p>{isZh ? 'Node.js 是基于 Chrome V8 引擎的 JavaScript 运行时，广泛用于 Web 工具链、服务端应用和自动化任务。官网通常同时提供 LTS 与 Current 两条发布线。' : 'Node.js is a JavaScript runtime built on Chrome’s V8 engine. It is widely used for web tooling, server applications, and automation. The official site normally offers both LTS and Current release lines.'}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/10"><h3 className="text-base font-semibold text-emerald-800 dark:text-emerald-300">LTS</h3><p className="mt-2 text-sm leading-6">{isZh ? 'Long Term Support，即长期支持版本，重点是稳定性和安全更新，适合生产环境。Envis 只提供 LTS 版本。' : 'Long Term Support releases prioritize stability and security updates and are the recommended choice for production. Envis only provides LTS releases.'}</p></div>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-5 dark:border-blue-500/20 dark:bg-blue-500/10"><h3 className="text-base font-semibold text-blue-800 dark:text-blue-300">Current</h3><p className="mt-2 text-sm leading-6">{isZh ? '包含最新功能，更新更频繁、生命周期更短，也更可能遇到兼容性问题，适合体验与测试。' : 'Current delivers new features sooner, updates more frequently, has a shorter lifetime, and may require more compatibility work. It is best for evaluation and testing.'}</p></div>
            </div>
            <aside className="mt-6 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200"><Info className="mt-0.5 h-5 w-5 shrink-0" /><p>{isZh ? 'Node.js 的发布计划可能调整。选择版本时，请以官方 Releases 页面标注的 LTS 状态和维护期限为准，而不要只依赖奇偶版本号。' : 'The Node.js release schedule can change. Choose releases by the LTS status and maintenance dates on the official Releases page rather than relying on version-number parity alone.'}</p></aside>
            <p>{isZh ? '按照已公布的规划，从 Node.js 27 开始将不再用奇偶大版本区分 Current 与 LTS，并改为每年 4 月发布一个大版本；版本号与年份对齐，例如 Node.js 27 对应 2027 年、Node.js 28 对应 2028 年。实际发布状态仍应以官方计划为准。' : 'Under the announced plan, Node.js 27 ends the odd/even distinction between Current and LTS. One major release is planned each April, with major numbers aligned to years: Node.js 27 in 2027, Node.js 28 in 2028, and so on. Always confirm the final status against the official schedule.'}</p>
          </section>

          <section>
            <h2>{isZh ? '从 Node.js 14 到 26' : 'From Node.js 14 to 26'}</h2>
            <p>{isZh ? 'Envis 提供 Node.js 14 至最新受支持的 LTS 版本；更早版本由于使用量较少不再提供。下面是各大版本最值得关注的能力。' : 'Envis provides Node.js 14 through the latest supported LTS release. Older releases are omitted because of low usage. These are the notable capabilities in each major line.'}</p>
            <div className="mt-7 border-l border-gray-200 dark:border-white/10">
              {releases.map(([version, date, detail]) => <div key={version} className="relative pb-8 pl-7 last:pb-0"><span className="absolute -left-1.5 top-2 h-3 w-3 rounded-full border-2 border-white bg-blue-500 dark:border-[#050505]" /><div className="flex flex-wrap items-baseline gap-x-3"><h3 className="text-lg font-semibold text-gray-950 dark:text-white">{version}</h3><span className="text-xs text-gray-500">{date}</span></div><p className="mt-2 text-sm leading-7">{detail}</p></div>)}
            </div>
            <div className="mt-7 rounded-lg border border-gray-200 bg-gray-50 p-5 dark:border-white/10 dark:bg-white/5"><h3 className="text-base font-semibold text-gray-950 dark:text-white">{isZh ? 'Node.js 14 与 Apple Silicon' : 'Node.js 14 on Apple Silicon'}</h3><p className="mt-3 text-sm leading-7">{isZh ? 'Node.js 14 没有官方 macOS ARM64 构建，Envis 提供的也是 x64 版本。在 Apple Silicon Mac 上需要通过 Rosetta 2 运行 x64 终端：打开“访达 → 应用程序 → 实用工具”，选择“终端”并打开“显示简介”，勾选“使用 Rosetta 打开”，再重新启动终端。Envis 在检测到这种组合时会显示兼容性警告。' : 'Node.js 14 has no official macOS ARM64 build, so Envis provides the x64 build. On an Apple Silicon Mac, run an x64 Terminal through Rosetta 2: open Finder → Applications → Utilities, open Get Info for Terminal, enable “Open using Rosetta,” and relaunch Terminal. Envis displays a compatibility warning when it detects this combination.'}</p></div>
          </section>

          <section>
            <h2>{isZh ? 'npm registry：包从哪里下载' : 'npm registry: where packages come from'}</h2>
            <p>{isZh ? 'npm 是 Node.js 的默认包管理器，并随 Node.js 一起安装。npm registry 是集中存储和分发 JavaScript 包的平台。执行 ' : 'npm is the default package manager installed with Node.js. The npm registry is a central service for distributing JavaScript packages. When you run '}{!isZh && <Code>npm install &lt;package&gt;</Code>}{isZh && <><Code>npm install &lt;package&gt;</Code>，客户端会从当前配置的 registry 下载包。</>}</p>
            <ul>
              <li>{isZh ? '官方 registry：' : 'Official registry: '}<a href="https://registry.npmjs.org" target="_blank" rel="noopener noreferrer">https://registry.npmjs.org</a></li>
              <li>{isZh ? 'npmmirror 镜像：' : 'npmmirror: '}<a href="https://registry.npmmirror.com" target="_blank" rel="noopener noreferrer">https://registry.npmmirror.com</a></li>
              <li>{isZh ? '腾讯云镜像：' : 'Tencent Cloud mirror: '}<a href="https://mirrors.cloud.tencent.com/npm/" target="_blank" rel="noopener noreferrer">https://mirrors.cloud.tencent.com/npm/</a></li>
            </ul>
            <p>{isZh ? '环境变量 ' : 'The environment variable '}<Code>NPM_CONFIG_REGISTRY</Code>{isZh ? ' 可以临时指定 registry；写入终端配置文件后会持续影响后续命令。Envis 使用这个变量实现可视化的一键换源。' : ' temporarily selects a registry. Setting it in your shell profile makes it apply to later commands. Envis uses this variable to provide one-click registry switching.'}</p>
          </section>

          <section>
            <h2>{isZh ? '本地包、全局包与模块解析' : 'Local packages, global packages, and module resolution'}</h2>
            <p>{isZh ? '项目依赖安装在当前项目的 ' : 'Project dependencies are installed in the current project’s '}<Code>node_modules/</Code>{isZh ? '。使用 ' : '. Packages installed with '}<Code>npm install -g &lt;package&gt;</Code>{isZh ? ' 安装的全局包，其位置由 npm 的 prefix 配置决定。' : ' go to a global location determined by npm’s prefix setting.'}</p>
            <ul>
              <li>{isZh ? 'macOS / Linux 常见位置：' : 'Common macOS/Linux location: '}<Code>/usr/local/lib/node_modules/</Code></li>
              <li>{isZh ? 'Windows 常见位置：' : 'Common Windows location: '}<Code>%APPDATA%\npm\node_modules\</Code></li>
              <li>{isZh ? '使用 nvm 时：' : 'With nvm: '}<Code>~/.nvm/versions/node/&lt;version&gt;/lib/node_modules/</Code></li>
            </ul>
            <aside className="mt-6 flex gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-900 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200"><Info className="mt-0.5 h-5 w-5 shrink-0" /><p>{isZh ? '不要混淆 npm 安装位置与 Node.js 模块解析。普通 import/require 会从当前目录的 node_modules 开始逐级向父目录查找，但不会默认搜索全局 node_modules。全局安装更适合提供命令行工具。' : 'Do not confuse npm installation locations with Node.js module resolution. A normal import/require searches node_modules from the current directory upward through parent directories, but it does not search global node_modules by default. Global installs are mainly useful for command-line tools.'}</p></aside>
          </section>

          <section>
            <h2>{isZh ? 'NPM_CONFIG_PREFIX 与 PATH' : 'NPM_CONFIG_PREFIX and PATH'}</h2>
            <p>{isZh ? '环境变量 ' : 'The environment variable '}<Code>NPM_CONFIG_PREFIX</Code>{isZh ? ' 可以临时指定 npm 全局安装所使用的 prefix。macOS/Linux 的包通常位于 ' : ' temporarily changes the prefix used for global npm installs. On macOS/Linux, packages normally go under '}<Code>&lt;prefix&gt;/lib/node_modules/</Code>{isZh ? '，可执行文件链接位于 ' : ' and executable links go under '}<Code>&lt;prefix&gt;/bin/</Code>{isZh ? '；Windows 的包位于 ' : '. On Windows, packages go under '}<Code>&lt;prefix&gt;\node_modules\</Code>{isZh ? '，可执行文件位于 ' : ' and executables go directly under '}<Code>&lt;prefix&gt;\</Code>。</p>
            <p>{isZh ? '改变 prefix 不会迁移 Node.js 本体。为了直接在终端调用全局包提供的命令，macOS/Linux 需要把 ' : 'Changing the prefix does not move the Node.js runtime. To invoke globally installed commands directly, add '}<Code>&lt;prefix&gt;/bin</Code>{isZh ? ' 加入 PATH；Windows 则把 ' : ' to PATH on macOS/Linux, or add '}<Code>&lt;prefix&gt;</Code>{isZh ? ' 加入 PATH。通过 Envis 修改 prefix 时，这项 PATH 配置会自动完成。' : ' on Windows. Envis updates PATH automatically when you change the prefix visually.'}</p>
          </section>

          <section>
            <h2>Corepack</h2>
            <p>{isZh ? 'Corepack 是随部分 Node.js 版本分发的包管理器代理工具，从 Node.js 16.9.0 开始引入。它让项目通过 package.json 的 packageManager 字段声明 Yarn 或 pnpm 及其版本，再按需准备正确版本，无需手动全局安装。不同 Node.js 版本对 Corepack 的捆绑和默认启用状态可能不同，使用前可运行 ' : 'Corepack is a package-manager proxy distributed with some Node.js releases and was introduced in Node.js 16.9.0. A project can declare Yarn or pnpm and its version through the packageManager field in package.json, and Corepack prepares that version without a manual global install. Bundling and default activation vary by Node.js release, so check it with '}<Code>corepack --version</Code>{isZh ? ' 检查。' : ' before relying on it.'}</p>
          </section>
        </div>
      </article>
    </BlogChrome>
  )
}
