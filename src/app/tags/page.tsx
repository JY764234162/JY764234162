import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: '文章标签 | 江一',
  description: '按标签浏览江一的技术博客文章，涵盖 Go、Python、AI 开发等主题。',
  openGraph: {
    title: '文章标签 | 江一',
    description: '按标签浏览技术文章',
  },
};

export default function TagsPage() {
  const posts = getSortedPostsData();

  const tagCounts = posts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const sortedTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .map(([tag, count]) => ({ tag, count }));

  return (
    <div className="min-h-screen bg-[#050508]">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#00f0ff]/5 border border-[#00f0ff]/20 mb-6">
            <Tag className="w-8 h-8 text-[#00f0ff]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">文章标签</span>
          </h1>
          <p className="text-gray-400 text-lg">
            通过标签浏览相关主题的文章
          </p>
        </div>

        {sortedTags.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">暂无标签</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 justify-center">
            {sortedTags.map(({ tag, count }) => (
              <Link
                key={tag}
                href={`/tags/${encodeURIComponent(tag)}`}
                className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-medium bg-[#00f0ff]/5 text-[#00f0ff] border border-[#00f0ff]/20 hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-300"
              >
                {tag}
                <span className="ml-2 text-xs bg-[#00f0ff]/10 text-[#00f0ff] px-2 py-0.5 rounded-full border border-[#00f0ff]/20">
                  {count}
                </span>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
