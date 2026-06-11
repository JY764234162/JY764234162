# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 提供在本仓库中工作时的指导说明。

## 项目概览

这是 **江一 (JiangYi)** 的个人技术博客，一位全栈开发者 & AI 爱好者。这是一个静态导出的 Next.js 15 站点，部署在 GitHub Pages 上。

**设计主题：** 赛博朋克 / 霓虹 —— 深色背景 (`#050508`)、霓虹青色 (`#00f0ff`)、紫色 (`#bd00ff`) 和粉色 (`#ff0080`) 点缀，带有发光效果、渐变以及首页的 Three.js 粒子背景。

## 常用命令

- `npm run dev` —— 使用 Turbopack 启动开发服务器
- `npm run build` —— 构建静态站点（导出到 `out/`）
- `npm run lint` —— 运行 ESLint
- `npm run deploy` —— `npm run build` 的别名

未配置测试套件。`package.json` 中没有 `test` 脚本。

## 架构

### 框架与渲染
- **Next.js 15**，使用 App Router 和 React 19
- **静态导出** (`output: 'export'`)。所有页面必须能在构建时静态渲染。
- **Turbopack** 用于开发环境 (`next dev --turbopack`)
- 通过 `@next/mdx` 支持 **MDX**，使用 `mdxRs: true`。MDX 内容通过 `mdx-components.tsx` 和每页动态导入模式渲染：`await import(\`../../../../posts/${slug}.mdx\`)`。

### 路径映射
- 别名 `@/` 解析为 `./src/*`

### 构建约束（关键）
1. **仅静态导出**：`next.config.ts` 中设置了 `output: 'export'`。页面不能使用需要服务器的服务端渲染或 API 路由。路由处理器如 `robots.ts` 和 `sitemap.ts` 必须导出 `dynamic = 'force-static'`。
2. **图片未优化**：`images.unoptimized: true`，因为静态导出不支持 Next.js 图片优化。使用标准 `<img>` 标签（而不是来自 `next/image` 的 `<Image />`）。
3. **GitHub Pages basePath**：生产构建中注入 `basePath: '/JY764234162'`。这会影响资源路径和内部链接。
4. **尾部斜杠**：`trailingSlash: true` 意味着所有路由在导出输出中都有尾部斜杠。

### 内容模型（博客文章）
- 文章以 `.mdx` 文件形式存放在 `posts/` 目录中。
- 前置元数据字段：`title`、`date`（ISO 字符串）、`excerpt`、`tags`（数组）。
- `src/lib/posts.ts` 在构建时使用 Node.js `fs` 读取 `posts/` 目录。它**只能在服务端组件**（页面、`generateStaticParams`、`generateMetadata`）中导入。
- `src/lib/types.ts` 和 `src/lib/utils.ts` 可以安全地从服务端和客户端组件中导入。

### 图标库注意事项
- `lucide-react` 用于 UI 图标，但**不包含品牌图标**（GitHub、Twitter/X 等）。
- 品牌图标在 `src/components/icons.tsx` 中定义为自定义 SVG 组件。需要 GitHub 或 Twitter 图标时，从该文件导入，而不是从 `lucide-react` 导入。

### 样式
- **Tailwind CSS v4**，使用 PostCSS (`@tailwindcss/postcss`)。
- 主题变量和自定义动画（发光、扫描线、滚动条）定义在 `src/app/globals.css` 中。
- MDX 内容的自定义排版样式也在 `globals.css` 的 `.prose` 类下。

### 路由结构
| 路由 | 用途 |
|-------|---------|
| `/` | 首页：Hero（Three.js）、统计、技术栈、最新文章、时间线预览 |
| `/about` | 个人简介、技能矩阵、完整技术时间线 |
| `/projects` | 项目展示卡片 |
| `/tools` | 精选 AI/开发工具推荐 |
| `/tags` | 标签云 |
| `/tags/[tag]` | 按标签筛选的文章 |
| `/posts/[slug]` | 单篇 MDX 博客文章 |
| `/sitemap.xml` | SEO 站点地图（静态） |
| `/robots.txt` | SEO robots（静态） |

### 组件说明
- `HeroSection` 是一个客户端组件（`'use client'`），初始化 Three.js WebGL 场景。在清理时释放渲染器并移除事件监听器。
- 多个组件使用 `framer-motion` 实现滚动触发的入场动画（`whileInView`、`viewport: { once: true }`）。
- `react-type-animation` 在 Hero 区域用于循环显示角色文本。

### SEO
- 每个页面定义自己的 `Metadata` 导出。OpenGraph、Twitter 卡片和 JSON-LD 结构化数据在 `layout.tsx` 中配置。
- `sitemap.ts` 在构建时从文章目录动态生成站点地图。
