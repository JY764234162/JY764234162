import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import { getSortedPostsData } from '@/lib/posts';
import { Tag } from 'lucide-react';

interface Props {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  const allTags = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => allTags.add(tag));
  });

  return Array.from(allTags).map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag: tagParam } = await params;
  const tag = decodeURIComponent(tagParam);

  return {
    title: `标签: ${tag} | 江一`,
    description: `浏览江一关于 "${tag}" 的技术文章`,
    openGraph: {
      title: `标签: ${tag} | 江一`,
      description: `浏览关于 "${tag}" 的文章`,
    },
  };
}

export default async function TagPage({ params }: Props) {
  const { tag: tagParam } = await params;
  const tag = decodeURIComponent(tagParam);
  const posts = getSortedPostsData();
  const filteredPosts = posts.filter((post) =>
    post.tags.includes(tag)
  );

  if (filteredPosts.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050508]">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#bd00ff]/5 border border-[#bd00ff]/20 mb-6">
            <Tag className="w-8 h-8 text-[#bd00ff]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">标签: </span>
            <span className="gradient-text">{tag}</span>
          </h1>
          <p className="text-gray-400">
            共找到 {filteredPosts.length} 篇文章
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
