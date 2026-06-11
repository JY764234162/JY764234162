import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: '项目作品 | 江一',
  description: '江一的开源项目和技术作品展示，涵盖 Go、Python、AI 应用和全栈 Web 开发。',
  openGraph: {
    title: '项目作品 | 江一',
    description: '全栈工程师的开源项目与技术作品',
  },
};

const projects: Project[] = [
  {
    title: 'AI Chat 智能助手',
    description: '基于 Next.js 和 OpenAI API 构建的 AI 聊天应用，支持多轮对话、上下文记忆和流式响应。使用 Go 构建高性能后端网关。',
    image: '',
    tags: ['Next.js', 'Go', 'OpenAI', 'Tailwind CSS'],
    githubUrl: 'https://github.com/JY764234162',
    demoUrl: 'https://jy764234162.github.io',
    category: 'AI应用',
  },
  {
    title: 'Go 微服务脚手架',
    description: '一套完整的 Go 微服务开发模板，集成 gRPC、ETCD、Prometheus 监控和分布式追踪，帮助团队快速启动新项目。',
    image: '',
    tags: ['Go', 'gRPC', 'Docker', 'K8s'],
    githubUrl: 'https://github.com/JY764234162',
    category: '后端',
  },
  {
    title: 'Python 数据分析平台',
    description: '基于 Python + FastAPI 的数据处理与可视化平台，支持多种数据源接入和自定义报表生成，集成 LLM 智能分析功能。',
    image: '',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'AI'],
    githubUrl: 'https://github.com/JY764234162',
    category: '全栈',
  },
  {
    title: '个人技术博客',
    description: '使用 Next.js 15 + MDX 构建的现代化技术博客，支持 Three.js 3D 背景、深色模式和完整 SEO 优化。',
    image: '',
    tags: ['Next.js', 'React', 'Three.js', 'MDX'],
    githubUrl: 'https://github.com/JY764234162',
    demoUrl: 'https://jy764234162.github.io',
    category: 'Web',
  },
  {
    title: 'LLM Agent 开发框架',
    description: '一个轻量级的 Python 框架，用于快速构建基于大语言模型的智能 Agent，支持工具调用、记忆管理和多 Agent 协作。',
    image: '',
    tags: ['Python', 'LLM', 'LangChain', 'OpenAI'],
    githubUrl: 'https://github.com/JY764234162',
    category: 'AI应用',
  },
  {
    title: '实时协作编辑器',
    description: '支持多人实时协作的 Markdown 编辑器，使用 WebSocket 实现实时同步，Go 后端处理并发冲突解决。',
    image: '',
    tags: ['Go', 'WebSocket', 'React', 'PostgreSQL'],
    githubUrl: 'https://github.com/JY764234162',
    category: '全栈',
  },
];

// const categories = ['全部', 'AI应用', '全栈', '后端', 'Web'];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#050508]">
      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">项目作品</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              从全栈 Web 应用到 AI 智能系统，每个项目都是对技术的探索与实践
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-4">更多项目正在开发中...</p>
            <a
              href="https://github.com/JY764234162"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00f0ff]/5 text-[#00f0ff] border border-[#00f0ff]/20 hover:bg-[#00f0ff]/10 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.069-.729.069-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 3.848-2.339 4.695-4.566 4.943.359.372.837 1.102.837 2.212v3.293c0 .378.279.686.623.598 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              在 GitHub 上查看全部
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
