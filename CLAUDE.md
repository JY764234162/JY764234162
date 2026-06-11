# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal tech blog for **江一 (JiangYi)**, a full-stack developer & AI enthusiast. It is a statically-exported Next.js 15 site deployed to GitHub Pages.

**Design Theme:** Cyberpunk / Neon — dark backgrounds (`#050508`), neon cyan (`#00f0ff`), purple (`#bd00ff`), and pink (`#ff0080`) accents with glow effects, gradients, and a Three.js particle background on the homepage.

## Common Commands

- `npm run dev` — Start development server with Turbopack
- `npm run build` — Build static site (exports to `out/`)
- `npm run lint` — Run ESLint
- `npm run deploy` — Alias for `npm run build`

No test suite is configured. There is no `test` script in `package.json`.

## Architecture

### Framework & Rendering
- **Next.js 15** with App Router and React 19
- **Static export** (`output: 'export'`). All pages must be statically renderable at build time.
- **Turbopack** is used in development (`next dev --turbopack`)
- **MDX** support via `@next/mdx` with `mdxRs: true`. MDX content is rendered through `mdx-components.tsx` and the per-page dynamic import pattern: `await import(\`../../../../posts/${slug}.mdx\`)`.

### Path Mapping
- Alias `@/` resolves to `./src/*`

### Build Constraints (Critical)
1. **Static export only**: `output: 'export'` is set in `next.config.ts`. Pages cannot use server-side rendering or API routes that require a server. Route handlers like `robots.ts` and `sitemap.ts` must export `dynamic = 'force-static'`.
2. **Images are unoptimized**: `images.unoptimized: true` because static export does not support Next.js Image Optimization. Use standard `<img>` tags (not `<Image />` from `next/image`).
3. **GitHub Pages basePath**: `basePath: '/JY764234162'` is injected in production builds. This affects asset paths and internal links.
4. **Trailing slashes**: `trailingSlash: true` means all routes have a trailing slash in the exported output.

### Content Model (Blog Posts)
- Posts live in the `posts/` directory as `.mdx` files.
- Frontmatter fields: `title`, `date` (ISO string), `excerpt`, `tags` (array).
- `src/lib/posts.ts` reads the `posts/` directory at build time using Node.js `fs`. It **must only be imported in server components** (pages, `generateStaticParams`, `generateMetadata`).
- `src/lib/types.ts` and `src/lib/utils.ts` are safe to import from both server and client components.

### Icon Library Gotcha
- `lucide-react` is used for UI icons, but it **does not include brand icons** (GitHub, Twitter/X, etc.).
- Brand icons are defined as custom SVG components in `src/components/icons.tsx`. Import from there instead of `lucide-react` when you need GitHub or Twitter icons.

### Styling
- **Tailwind CSS v4** with PostCSS (`@tailwindcss/postcss`).
- Theme variables and custom animations (glow, scanlines, scrollbar) are defined in `src/app/globals.css`.
- Custom prose styles for MDX content are also in `globals.css` under the `.prose` class.

### Route Structure
| Route | Purpose |
|-------|---------|
| `/` | Home: Hero (Three.js), stats, tech stack, latest posts, timeline preview |
| `/about` | Profile, skills matrix, full tech timeline |
| `/projects` | Project showcase cards |
| `/tools` | Curated AI/dev tool recommendations |
| `/tags` | Tag cloud |
| `/tags/[tag]` | Posts filtered by tag |
| `/posts/[slug]` | Individual MDX blog post |
| `/sitemap.xml` | SEO sitemap (static) |
| `/robots.txt` | SEO robots (static) |

### Component Notes
- `HeroSection` is a client component (`'use client'`) that initializes a Three.js WebGL scene. It disposes the renderer and removes event listeners in cleanup.
- Several components use `framer-motion` for scroll-triggered entrance animations (`whileInView`, `viewport: { once: true }`).
- `react-type-animation` is used in the Hero for the cycling role text.

### SEO
- Each page defines its own `Metadata` export. OpenGraph, Twitter card, and JSON-LD structured data are configured in `layout.tsx`.
- `sitemap.ts` generates the sitemap dynamically from the posts directory at build time.
