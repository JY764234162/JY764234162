import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '关于我',
  description: '了解我的博客和技术背景',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">关于我</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              你好！我是一名热爱技术的开发者，专注于前端开发和全栈工程。
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">技术栈</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li><strong>前端:</strong> React, Next.js, TypeScript, Tailwind CSS</li>
              <li><strong>后端:</strong> Node.js, Express, PostgreSQL</li>
              <li><strong>工具:</strong> Git, Docker, Vercel, AWS</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">联系方式</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>邮箱:</strong> your-email@example.com</p>
              <p><strong>GitHub:</strong> <a href="https://github.com/your-github-username" className="text-blue-600 hover:text-blue-800">your-github-username</a></p>
              <p><strong>位置:</strong> 中国</p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">关于这个博客</h2>
            <p className="text-gray-700">
              这个博客使用 Next.js 15 构建，采用 MDX 作为内容格式，部署在 Vercel 上。
              我会在这里分享技术文章、学习心得和开发经验，希望能帮助到更多的开发者。
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}