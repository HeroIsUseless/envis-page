import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 启用实验性功能
  experimental: {
    optimizePackageImports: ['@heroicons/react']
  },
  // SEO 和性能优化
  compress: true,
  poweredByHeader: false,
  // 静态导出配置
  distDir: 'out'
};

export default nextConfig;
