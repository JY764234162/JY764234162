import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostData } from '@/lib/posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { formatDate } from '@/lib/posts';
import Link from 'next/link';

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

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = getPostData(decodedSlug);
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  try {
    const { slug } = await params;
    // 解码URL中的中文slug
    const decodedSlug = decodeURIComponent(slug);
    const post = getPostData(decodedSlug);

    // Import the MDX file dynamically
    const { default: PostContent } = await import(`../../../../posts/${decodedSlug}.mdx`);

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </Link>

          <header className="mb-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="mx-2">•</span>
              <span>{post.readingTime}</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
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