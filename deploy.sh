#!/bin/bash

echo "🚀 开始构建 Envis 官网..."

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建是否成功
if [ $? -eq 0 ]; then
    echo "✅ 构建成功!"
    echo "📁 静态文件已生成到 out/ 目录"
    echo ""
    echo "🌐 部署选项:"
    echo "   1. 上传 out/ 目录到任何静态文件服务器"
    echo "   2. 使用 Vercel: vercel --prod"
    echo "   3. 使用 Netlify: 拖拽 out/ 目录到 netlify.com"
    echo ""
else
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi