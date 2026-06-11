import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TechTimeline from '@/components/TechTimeline';
import { Mail, MapPin, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { GitHubIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: '关于我 | 江一',
  description: '了解江一的技术背景、成长历程和技能栈。全栈工程师 & AI 开发者，专注 Go、Python 和人工智能应用开发。',
  openGraph: {
    title: '关于我 | 江一',
    description: '全栈工程师 & AI 开发者的技术成长历程',
  },
};

const skills = [
  { name: 'Go', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'React / Next.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'AI / LLM 开发', level: 85 },
  { name: 'PostgreSQL', level: 80 },
  { name: 'Docker / K8s', level: 75 },
  { name: 'Linux 系统', level: 85 },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050508]">
      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">关于我</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              一个热爱技术的全栈开发者，在代码的世界里不断探索与创造
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-[#0a0a12] border border-[#00f0ff]/10 rounded-2xl p-8 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00f0ff]/5 to-[#bd00ff]/5 rounded-full blur-3xl" />

            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full p-[2px] bg-gradient-to-r from-[#00f0ff] via-[#bd00ff] to-[#ff0080]">
                  <img
                    src={process.env.NODE_ENV === 'production' ? '/JY764234162/avatar.jpeg' : '/avatar.jpeg'}
                    alt="江一"
                    className="w-full h-full rounded-full bg-[#050508] object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-2">江一</h2>
                <p className="text-[#00f0ff] font-mono mb-4">全栈工程师 & AI 开发者</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-sm text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#bd00ff]" />
                    中国
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-[#00f0ff]" />
                    全栈开发
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#ff0080]" />
                    持续学习
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  热衷于构建优雅的技术解决方案，拥有 5 年以上开发经验。精通 Go、Python 后端开发，
                  熟悉 React / Next.js 现代前端工程，近年深入 AI 应用开发领域，
                  擅长 LLM 接口集成、RAG 架构设计和智能 Agent 开发。
                  相信技术改变世界，代码创造价值。
                </p>

                <div className="flex justify-center md:justify-start gap-3">
                  <a
                    href="https://github.com/JY764234162"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00f0ff]/5 text-[#00f0ff] border border-[#00f0ff]/20 hover:bg-[#00f0ff]/10 transition-all text-sm"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="mailto:jiangyi@example.com"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#bd00ff]/5 text-[#bd00ff] border border-[#bd00ff]/20 hover:bg-[#bd00ff]/10 transition-all text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    联系我
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">技能矩阵</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-[#0a0a12] border border-[#00f0ff]/10 rounded-xl p-5 hover:border-[#00f0ff]/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-[#00f0ff] font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#00f0ff] to-[#bd00ff]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">技术成长时间线</span>
            </h2>
            <TechTimeline />
          </div>

          {/* Interests */}
          <div className="bg-[#0a0a12] border border-[#00f0ff]/10 rounded-2xl p-8 text-center">
            <Heart className="w-8 h-8 text-[#ff0080] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">我的热爱</h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              除了写代码，我还喜欢研究新技术趋势、参与开源社区、阅读技术书籍和分享学习心得。
              我相信保持好奇心是程序员最好的品质，而这个博客就是我记录成长的地方。
              欢迎与我交流技术问题，或者一起探讨 AI 的未来！
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
