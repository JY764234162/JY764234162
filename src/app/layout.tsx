import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "江一 | 全栈工程师 & AI 开发者",
  description: "江一的个人技术博客，专注 Go、Python 后端开发，React/Next.js 前端工程，以及 AI 应用开发。分享技术文章、项目经验与开发心得。",
  keywords: ["江一", "全栈工程师", "Go", "Python", "AI 开发", "React", "Next.js", "技术博客", "人工智能", "LLM"],
  authors: [{ name: "江一" }],
  creator: "江一",
  publisher: "江一",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jy764234162.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "江一 | 全栈工程师 & AI 开发者",
    description: "专注 Go、Python、AI 应用开发的技术博客，分享全栈技术与人工智能实战经验",
    url: "https://jy764234162.github.io",
    siteName: "江一的技术博客",
    images: [
      {
        url: "https://jy764234162.github.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "江一的技术博客",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "江一 | 全栈工程师 & AI 开发者",
    description: "专注 Go、Python、AI 应用开发的技术博客",
    images: ["https://jy764234162.github.io/twitter-image.jpg"],
    creator: "@JY764234162",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#050508" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="江一的博客" />
        <meta name="application-name" content="江一的技术博客" />
        <meta name="msapplication-TileColor" content="#050508" />
        <meta name="msapplication-TileImage" content="/icon-192x192.png" />
        <link rel="canonical" href="https://jy764234162.github.io" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050508] text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "江一",
              "alternateName": ["江一", "JiangYi", "JY764234162"],
              "url": "https://jy764234162.github.io",
              "image": "https://jy764234162.github.io/JY764234162/avatar.jpeg",
              "description": "全栈工程师 & AI 开发者，专注于 Go、Python、React、Next.js 和人工智能应用开发",
              "jobTitle": "全栈工程师",
              "sameAs": [
                "https://github.com/JY764234162",
                "https://jy764234162.github.io"
              ],
              "knowsAbout": [
                "Go",
                "Python",
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "人工智能",
                "LLM",
                "全栈开发",
                "Web开发"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "江一的技术博客",
              "alternateName": ["江一博客", "JiangYi Blog"],
              "description": "全栈工程师江一的个人技术博客，分享 Go、Python、AI 开发等技术文章和实战经验",
              "url": "https://jy764234162.github.io",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://jy764234162.github.io/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
