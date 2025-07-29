import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  date?: string;
  tags?: string[];
  image?: string;
  type?: 'article' | 'website';
  canonicalUrl?: string;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  author = "JY764234162",
  date,
  tags = [],
  image = "https://jy764234162.github.io/og-image.jpg",
  type = "website",
  canonicalUrl,
}: SEOProps): Metadata {
  const allKeywords = ["江一", "JiangYi", ...keywords, ...tags, "前端开发", "React", "Next.js", "技术博客"].filter(Boolean);
  
  return {
    title,
    description,
    keywords: allKeywords,
    authors: [{ name: author }],
    creator: author,
    publisher: author,
    ...(date && {
      openGraph: {
        title,
        description,
        type: type as 'article' | 'website',
        publishedTime: date,
        ...(type === 'article' && { modifiedTime: date }),
        url: canonicalUrl,
        siteName: "JY764234162的技术博客",
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
        locale: "zh_CN",
        tags: tags,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
        creator: "@JY764234162",
      },
    }),
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
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
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  slug: string;
}

export function generateArticleSchema({
  title,
  description,
  date,
  author,
  image,
  tags,
  slug,
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": date,
    "dateModified": date,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://jy764234162.github.io"
    },
    "publisher": {
      "@type": "Person",
      "name": "JY764234162",
      "url": "https://jy764234162.github.io"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jy764234162.github.io/posts/${slug}/`
    },
    "keywords": tags.join(", "),
    "articleSection": "技术文章",
    "wordCount": 1000,
    "url": `https://jy764234162.github.io/posts/${slug}/`
  };
}