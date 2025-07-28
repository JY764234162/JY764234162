import { getSortedPostsData } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        name="江一"
        title="全栈开发工程师 & AI爱好者"
        description="热衷于构建优雅的技术解决方案，专注于现代Web开发、人工智能应用和开源项目。在这里分享我的技术探索、项目经验和对未来的思考。"
        socialLinks={{
          github: "https://github.com/JY764234162",
          linkedin: "https://linkedin.com/in/jiangyi",
          twitter: "https://twitter.com/jiangyi_dev",
          email: "mailto:jiangyi@example.com"
        }}
      />

      {/* Blog Posts Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              最新文章
            </h2>
            <p className="text-lg text-gray-600">
              探索技术世界，分享学习心得
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">暂无文章</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
