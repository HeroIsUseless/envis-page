import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 启用实验性功能
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'lucide-react']
  },
  // SEO 和性能优化
  compress: true,
  poweredByHeader: false,
  // 生成 sitemap 和 robots.txt
  generateBuildId: async () => {
    return 'envis-build-' + Date.now()
  },
};

export default nextConfig;
