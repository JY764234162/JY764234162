import { getSortedPostsData } from '@/lib/posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import TechStackSection from '@/components/TechStackSection';
import PostCard from '@/components/PostCard';
import TechTimeline from '@/components/TechTimeline';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const posts = getSortedPostsData().slice(0, 6);

  return (
    <div className="min-h-screen bg-[#050508]">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Latest Posts */}
      <section className="relative py-20 bg-[#050508]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bd00ff]/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="gradient-text">最新文章</span>
              </h2>
              <p className="text-gray-400">探索技术世界，分享学习心得</p>
            </div>
            <Link
              href="/tags"
              className="hidden sm:flex items-center gap-2 text-[#00f0ff] hover:text-[#bd00ff] transition-colors group"
            >
              查看全部
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">暂无文章</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <PostCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent" />
      </section>

      {/* Timeline Preview */}
      <section className="relative py-20 bg-[#0a0a12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">成长历程</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              从编程新手到全栈工程师，再到 AI 开发者的技术蜕变之路
            </p>
          </div>

          <TechTimeline />

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00f0ff]/5 text-[#00f0ff] border border-[#00f0ff]/20 hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/40 transition-all duration-300"
            >
              了解更多关于我
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
