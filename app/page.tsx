'use client'

import { CopyButton } from './components/interactive'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 bg-neutral-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">E</span>
              </div>
              <span className="text-neutral-900 font-semibold text-lg">Envis</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">功能特性</a>
              <a href="#testimonials" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">用户评价</a>
              <a href="#download" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">下载</a>
              <a href="#documentation" className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors">文档</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-neutral-900 rounded-2xl mx-auto mb-8 flex items-center justify-center">
                <span className="text-white font-semibold text-2xl">E</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light text-neutral-900 mb-8 tracking-tight leading-[1.1]">
              简化你的
              <br />
              <span className="font-semibold">开发环境</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              Envis 让环境管理变得简单优雅。一个工具，管理所有开发环境。
            </p>
            
            {/* CTA按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <a
                href="#download"
                className="bg-neutral-900 text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-neutral-800 transition-all duration-200 shadow-sm"
              >
                立即下载
              </a>
              <a
                href="#documentation"
                className="border border-neutral-300 text-neutral-700 px-8 py-4 rounded-xl font-medium text-lg hover:border-neutral-400 hover:text-neutral-900 transition-all duration-200"
              >
                查看文档
              </a>
            </div>

            {/* 系统要求 */}
            <div className="inline-flex items-center space-x-2 bg-neutral-100 rounded-full px-4 py-2 text-sm">
              <span className="text-neutral-500">支持</span>
              <span className="text-neutral-700 font-medium">macOS 12.0+</span>
            </div>
          </div>
        </div>
      </section>

      {/* 功能特性 */}
      <section id="features" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
              为现代开发者
              <span className="block font-semibold">量身打造</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light">
              简化复杂的环境管理，让你专注于真正重要的事情——代码
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-neutral-100 rounded-2xl mx-auto mb-8 flex items-center justify-center group-hover:bg-neutral-900 transition-colors duration-300">
                <svg className="w-8 h-8 text-neutral-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">简单易用</h3>
              <p className="text-neutral-600 leading-relaxed">
                直观的命令行界面和图形化配置，无需复杂设置即可快速上手
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-neutral-100 rounded-2xl mx-auto mb-8 flex items-center justify-center group-hover:bg-neutral-900 transition-colors duration-300">
                <svg className="w-8 h-8 text-neutral-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">极致性能</h3>
              <p className="text-neutral-600 leading-relaxed">
                基于 Rust 构建，提供极速的环境切换和资源管理能力
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-neutral-100 rounded-2xl mx-auto mb-8 flex items-center justify-center group-hover:bg-neutral-900 transition-colors duration-300">
                <svg className="w-8 h-8 text-neutral-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">全栈支持</h3>
              <p className="text-neutral-600 leading-relaxed">
                支持 Node.js、Python、Go、Ruby、Java 等主流编程语言环境管理
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 客户评价 */}
      <section id="testimonials" className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
              开发者的
              <span className="block font-semibold">真实反馈</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-neutral-200">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                "Envis 彻底改变了我的开发工作流。以前需要手动切换各种环境变量，现在一个命令就搞定了。"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">张</span>
                </div>
                <div>
                  <div className="font-medium text-neutral-900">张伟</div>
                  <div className="text-sm text-neutral-500">全栈开发工程师</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-neutral-200">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                "团队协作变得无比顺畅。每个人都能快速同步到相同的开发环境，大大减少了环境配置的时间。"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">李</span>
                </div>
                <div>
                  <div className="font-medium text-neutral-900">李小红</div>
                  <div className="text-sm text-neutral-500">技术总监</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-neutral-200">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                "性能表现令人惊艳！切换环境几乎是瞬时的，再也不用等待漫长的环境初始化过程了。"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">王</span>
                </div>
                <div>
                  <div className="font-medium text-neutral-900">王明</div>
                  <div className="text-sm text-neutral-500">资深开发者</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 下载区域 */}
      <section id="download" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            开始使用
            <span className="block font-semibold">Envis</span>
          </h2>
          <p className="text-xl text-neutral-600 mb-16 font-light">
            选择适合您的安装方式
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Homebrew 安装 */}
            <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Homebrew</h3>
              <p className="text-neutral-600 mb-6">推荐的安装方式</p>
              <div className="bg-neutral-900 rounded-2xl p-6 mb-6">
                <code className="text-green-400 font-mono text-lg">brew install envis</code>
              </div>
              <CopyButton text="brew install envis">
                复制命令
              </CopyButton>
            </div>

            {/* 直接下载 */}
            <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">直接下载</h3>
              <p className="text-neutral-600 mb-6">下载预编译的二进制文件</p>
              <div className="space-y-3 mb-6">
                <div className="text-neutral-700">
                  <span className="font-medium">最新版本:</span> v1.0.0
                </div>
                <div className="text-neutral-700">
                  <span className="font-medium">文件大小:</span> 8.5 MB
                </div>
              </div>
              <a
                href="/Envis_0.1.0_aarch64.dmg"
                className="bg-neutral-900 text-white px-6 py-3 rounded-xl inline-block font-medium hover:bg-neutral-800 transition-colors duration-200"
              >
                下载 macOS .dmg
              </a>
            </div>
          </div>

          {/* 快速开始 */}
          <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-8">快速开始</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-neutral-900 font-semibold text-lg mb-3">1. 安装</div>
                <code className="text-sm text-neutral-700 font-mono bg-neutral-200 px-3 py-2 rounded-lg inline-block">
                  brew install envis
                </code>
              </div>
              <div className="text-center">
                <div className="text-neutral-900 font-semibold text-lg mb-3">2. 初始化</div>
                <code className="text-sm text-neutral-700 font-mono bg-neutral-200 px-3 py-2 rounded-lg inline-block">
                  envis init
                </code>
              </div>
              <div className="text-center">
                <div className="text-neutral-900 font-semibold text-lg mb-3">3. 使用</div>
                <code className="text-sm text-neutral-700 font-mono bg-neutral-200 px-3 py-2 rounded-lg inline-block">
                  envis use node@18
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-neutral-100 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">E</span>
              </div>
              <span className="text-neutral-900 font-semibold text-lg">Envis</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#features" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">功能特性</a>
              <a href="#testimonials" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">用户评价</a>
              <a href="#download" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">下载</a>
              <a href="#documentation" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">文档</a>
              <a href="https://github.com" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">GitHub</a>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 text-center">
            <p className="text-neutral-500 text-sm">
              &copy; 2024 Envis. 专为 macOS 开发者打造的现代环境管理工具
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
