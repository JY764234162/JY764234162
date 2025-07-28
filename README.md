# 个人博客 - Next.js & MDX

基于Next.js 15和MDX的现代化个人博客，支持中文文件名、炫酷3D粒子动画背景。

## ✨ 特性

- 🚀 **Next.js 15** - 最新版本，支持App Router
- 📝 **MDX支持** - 使用Markdown编写文章，支持React组件
- 🎨 **3D粒子背景** - Three.js驱动的炫酷动画效果
- 🌏 **中文支持** - 完美支持中文文件名和路由
- 📱 **响应式设计** - 适配所有设备
- 🎯 **TypeScript** - 类型安全开发
- 🎭 **打字机效果** - 动态文字展示

## 🚀 快速开始

### 本地开发

```bash
# 克隆仓库
git clone <your-repo-url>
cd personal-blog-mdx

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 部署到GitHub Pages

1. **创建GitHub仓库**
   - 在GitHub上创建一个新的公开仓库
   - 命名为 `personal-blog-mdx` 或其他你喜欢的名称

2. **配置GitHub Pages**
   - 进入仓库设置 → Pages
   - 选择 "GitHub Actions" 作为部署源

3. **推送代码**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/personal-blog-mdx.git
   git branch -M main
   git push -u origin main
   ```

4. **自动部署**
   - 推送代码后，GitHub Actions会自动构建并部署
   - 部署完成后，访问 `https://YOUR_USERNAME.github.io/personal-blog-mdx`

## 📝 添加新文章

在 `posts/` 目录下创建新的 `.mdx` 文件：

```markdown
---
title: "文章标题"
date: "2024-01-01"
tags: ["技术", "前端"]
---

# 文章内容

使用标准Markdown语法编写...
```

## 🛠️ 技术栈

- **框架**: Next.js 15
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **3D动画**: Three.js
- **构建**: MDX, Remark, Rehype
- **部署**: GitHub Pages

## 📁 项目结构

```
├── posts/              # 博客文章
├── src/
│   ├── app/           # Next.js App Router
│   ├── components/    # React组件
│   │   ├── HeroSection.tsx    # 3D主页
│   │   ├── PostCard.tsx       # 文章卡片
│   │   └── Typewriter.tsx     # 打字机效果
│   └── lib/           # 工具函数
└── public/            # 静态资源
```

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📄 许可证

MIT License
