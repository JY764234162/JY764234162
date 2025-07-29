import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export const metadata = {
  title: '标签',
  description: '按标签浏览博客文章',
};

export default function TagsPage() {
  const posts = getSortedPostsData();
  
  // 获取所有标签及其对应的文章数量
  const tagCounts = posts.reduce((acc, post) => {
    post.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const sortedTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .map(([tag, count]) => ({ tag, count }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            文章标签
          </h1>
          <p className="text-lg text-gray-600">
            通过标签浏览相关主题的文章
          </p>
        </div>

        {sortedTags.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">暂无标签</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center">
            {sortedTags.map(({ tag, count }) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
              >
                {tag}
                <span className="ml-2 text-xs bg-blue-200 text-blue-900 px-2 py-0.5 rounded-full">
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