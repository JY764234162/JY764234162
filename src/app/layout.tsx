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
  title: "JY764234162的技术博客 - 前端开发与技术分享",
  description: "JY764234162的个人技术博客，分享前端开发、React、Next.js、Canvas、Node.js等技术文章和实战经验。",
  keywords: ["江一", "JiangYi", "前端开发", "React", "Next.js", "Canvas", "Node.js", "技术博客", "JavaScript", "TypeScript"],
  authors: [{ name: "JY764234162" }],
  creator: "JY764234162",
  publisher: "JY764234162",
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
    title: "JY764234162的技术博客 - 前端开发与技术分享",
    description: "分享前端开发、React、Next.js、Canvas、Node.js等技术文章和实战经验",
    url: "https://jy764234162.github.io",
    siteName: "JY764234162的技术博客",
    images: [
      {
        url: "https://jy764234162.github.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JY764234162的技术博客",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JY764234162的技术博客 - 前端开发与技术分享",
    description: "分享前端开发、React、Next.js、Canvas、Node.js等技术文章和实战经验",
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
  verification: {
    google: "your-google-verification-code",
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
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="JY764234162博客" />
        <meta name="application-name" content="JY764234162的技术博客" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/icon-192x192.png" />
        <link rel="canonical" href="https://jy764234162.github.io" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "江一 (JY764234162)",
            "alternateName": ["江一", "JiangYi", "JY764234162"],
            "url": "https://jy764234162.github.io",
            "image": "https://jy764234162.github.io/avatar.jpg",
            "description": "前端开发工程师江一，专注于React、Next.js、Canvas和Node.js技术分享",
            "jobTitle": "前端开发工程师",
              "sameAs": [
                "https://github.com/JY764234162",
                "https://jy764234162.github.io"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Canvas",
                "Node.js",
                "前端开发",
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
            "name": "江一的技术博客 (JiangYi's Tech Blog)",
            "alternateName": ["江一博客", "JiangYi Blog", "JY764234162技术博客"],
            "description": "前端开发工程师江一的个人技术博客，分享React、Next.js、Canvas、Node.js等技术文章和实战经验",
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
