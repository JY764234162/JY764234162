import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllPostSlugs, getPostData } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: encodeURIComponent(slug),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = getPostData(decodedSlug);

  return {
    title: `${post.title} | 江一`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  };
}

export default async function PostPage({ params }: Props) {
  try {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const post = getPostData(decodedSlug);

    const { default: PostContent } = await import(`../../../../posts/${decodedSlug}.mdx`);

    return (
      <div className="min-h-screen bg-[#050508]">
        <Header />

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-[#00f0ff] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            返回首页
          </Link>

          <header className="mb-10 pb-10 border-b border-[#00f0ff]/10">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#00f0ff]" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#bd00ff]" />
                {post.readingTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {post.title}
            </h1>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${encodeURIComponent(tag)}`}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#00f0ff]/5 text-[#00f0ff] border border-[#00f0ff]/20 hover:bg-[#00f0ff]/10 transition-all"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none">
            <PostContent />
          </div>
        </article>

        <Footer />
      </div>
    );
  } catch {
    notFound();
  }
}
