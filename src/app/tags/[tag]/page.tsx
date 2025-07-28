import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import { getSortedPostsData } from '@/lib/posts';

interface Props {
  params: {
    tag: string;
  };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  const allTags = new Set<string>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => allTags.add(tag));
  });

  return Array.from(allTags).map(tag => ({
    tag: encodeURIComponent(tag),
  }));
}

export async function generateMetadata({ params }: Props) {
  const tag = decodeURIComponent(params.tag);
  
  return {
    title: `标签: ${tag}`,
    description: `浏览关于 "${tag}" 的文章`,
  };
}

export default async function TagPage({ params }: Props) {
  const tag = decodeURIComponent(params.tag);
  const posts = getSortedPostsData();
  const filteredPosts = posts.filter(post => 
    post.tags.includes(tag)
  );

  if (filteredPosts.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            标签: {tag}
          </h1>
          <p className="text-lg text-gray-600">
            共找到 {filteredPosts.length} 篇文章
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}