# 个人技术博客

一个使用 Next.js 15 和 Tailwind CSS 构建的现代化个人博客。

## 功能特性

- ✅ **响应式设计** - 完美适配桌面和移动设备
- ✅ **MDX 支持** - 使用 Markdown + React 组件编写文章
- ✅ **标签系统** - 文章分类和标签管理
- ✅ **阅读时间** - 自动计算文章阅读时间
- ✅ **SEO 优化** - 自动生成元数据和友好的 URL
- ✅ **代码高亮** - 内置代码块语法高亮
- ✅ **快速构建** - 使用 Next.js 15 和 Turbopack

## 技术栈

- **框架**: Next.js 15.4.3
- **样式**: Tailwind CSS 4
- **内容**: MDX (Markdown + JSX)
- **部署**: Vercel
- **语言**: TypeScript

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看博客。

### 3. 构建生产版本

```bash
npm run build
npm start
```

## 如何写博客文章

### 创建新文章

1. 在 `posts/` 目录下创建新的 `.mdx` 文件
2. 使用以下格式作为文章模板：

```markdown
---
title: "文章标题"
date: "2024-07-28"
excerpt: "文章摘要，会显示在文章卡片中"
tags: ["标签1", "标签2", "标签3"]
---

# 文章正文

这里是文章内容，支持 Markdown 和 React 组件。

## 二级标题

- 列表项 1
- 列表项 2

```javascript
// 代码块
console.log('Hello, World!');
```
```

### 文章元数据

- **title**: 文章标题（必填）
- **date**: 发布日期（ISO 格式）
- **excerpt**: 文章摘要（显示在列表页）
- **tags**: 标签数组（用于分类）

## 项目结构

```
src/
├── app/                    # Next.js 应用目录
│   ├── posts/[slug]/      # 文章详情页
│   ├── about/             # 关于页面
│   ├── tags/              # 标签页面
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Header.tsx         # 头部导航
│   ├── Footer.tsx         # 页脚
│   └── PostCard.tsx       # 文章卡片
├── lib/                   # 工具函数
│   └── posts.ts          # 文章数据处理
posts/                    # 博客文章目录
├── 欢迎访问我的博客.mdx
└── nextjs-15-新特性介绍.mdx
```

## 自定义配置

### 修改博客信息

编辑 `src/components/Header.tsx` 和 `src/components/Footer.tsx` 来更新博客名称、社交媒体链接等信息。

### 添加新页面

在 `src/app/` 目录下创建新的文件夹和 `page.tsx` 文件来添加新页面。

### 样式定制

编辑 `src/app/globals.css` 来自定义样式和主题。

## 部署到 Vercel

1. 推送代码到 GitHub
2. 在 [Vercel](https://vercel.com) 上导入项目
3. 部署！

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个博客！
