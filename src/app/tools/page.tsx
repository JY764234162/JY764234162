import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Brain,
  Code2,
  Terminal,
  Globe,
  Database,
  Wand2,
  BookOpen,
  Zap,
  Sparkles,
  Layers,
  GitBranch,
  Container,
  Rocket,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI 工具箱 | 江一',
  description: '精选的 AI 开发工具、框架和资源推荐，助力高效开发与创作。',
  openGraph: {
    title: 'AI 工具箱 | 江一',
    description: '精选 AI 开发工具与资源推荐',
  },
};

interface Tool {
  name: string;
  description: string;
  url: string;
  icon: React.ElementType;
  category: string;
  tags: string[];
  color: string;
}

const tools: Tool[] = [
  // AI 开发
  {
    name: 'OpenAI API',
    description: '最强大的大语言模型接口，支持 GPT-4、GPT-3.5 等模型，AI 应用开发的首选。',
    url: 'https://platform.openai.com',
    icon: Brain,
    category: 'AI 开发',
    tags: ['LLM', 'API'],
    color: '#00f0ff',
  },
  {
    name: 'LangChain',
    description: 'Python/JS AI 应用开发框架，简化 LLM 集成、链式调用和 Agent 构建。',
    url: 'https://langchain.com',
    icon: Layers,
    category: 'AI 开发',
    tags: ['框架', 'Python'],
    color: '#00f0ff',
  },
  {
    name: 'Ollama',
    description: '本地运行大语言模型的最佳工具，支持 Llama、Mistral 等开源模型一键部署。',
    url: 'https://ollama.com',
    icon: Zap,
    category: 'AI 开发',
    tags: ['本地部署', '开源'],
    color: '#00f0ff',
  },
  {
    name: 'Vercel AI SDK',
    description: '专为 React/Next.js 设计的 AI 开发工具包，支持流式响应和 UI 组件。',
    url: 'https://sdk.vercel.ai',
    icon: Wand2,
    category: 'AI 开发',
    tags: ['React', '流式响应'],
    color: '#00f0ff',
  },
  // Python 生态
  {
    name: 'FastAPI',
    description: '现代、高性能的 Python Web 框架，自动生成 OpenAPI 文档，完美支持异步。',
    url: 'https://fastapi.tiangolo.com',
    icon: Rocket,
    category: 'Python',
    tags: ['后端', '异步'],
    color: '#bd00ff',
  },
  {
    name: 'Pandas',
    description: 'Python 数据分析和处理的利器，提供强大的 DataFrame 数据结构。',
    url: 'https://pandas.pydata.org',
    icon: Database,
    category: 'Python',
    tags: ['数据处理', '分析'],
    color: '#bd00ff',
  },
  {
    name: 'Poetry',
    description: 'Python 依赖管理和打包工具，比 pip 更优雅，支持 lock 文件确保环境一致。',
    url: 'https://python-poetry.org',
    icon: BookOpen,
    category: 'Python',
    tags: ['包管理'],
    color: '#bd00ff',
  },
  // Go 生态
  {
    name: 'Gin',
    description: 'Go 语言最流行的 Web 框架，高性能、易用，适合构建 RESTful API 服务。',
    url: 'https://gin-gonic.com',
    icon: Globe,
    category: 'Go',
    tags: ['Web框架', 'API'],
    color: '#00f0ff',
  },
  {
    name: 'gRPC',
    description: 'Google 开源的高性能 RPC 框架，基于 Protocol Buffers，适合微服务通信。',
    url: 'https://grpc.io',
    icon: Code2,
    category: 'Go',
    tags: ['RPC', '微服务'],
    color: '#00f0ff',
  },
  // 前端
  {
    name: 'Next.js',
    description: 'React 全栈框架，支持 SSR/SSG、App Router、Server Actions，现代 Web 开发首选。',
    url: 'https://nextjs.org',
    icon: Globe,
    category: '前端',
    tags: ['React', '全栈'],
    color: '#ff0080',
  },
  {
    name: 'Tailwind CSS',
    description: '实用优先的 CSS 框架，无需离开 HTML 即可构建现代界面，开发效率极高。',
    url: 'https://tailwindcss.com',
    icon: Sparkles,
    category: '前端',
    tags: ['CSS', 'UI'],
    color: '#ff0080',
  },
  // 开发工具
  {
    name: 'Docker',
    description: '应用容器化平台，确保开发、测试、生产环境一致，部署从未如此简单。',
    url: 'https://docker.com',
    icon: Container,
    category: '开发工具',
    tags: ['容器', 'DevOps'],
    color: '#bd00ff',
  },
  {
    name: 'Git',
    description: '分布式版本控制系统，团队协作和代码管理的基石，程序员必备技能。',
    url: 'https://git-scm.com',
    icon: GitBranch,
    category: '开发工具',
    tags: ['版本控制'],
    color: '#bd00ff',
  },
  {
    name: 'Cursor',
    description: 'AI 驱动的代码编辑器，内置 GPT-4 辅助编程，大幅提升编码效率。',
    url: 'https://cursor.sh',
    icon: Terminal,
    category: '开发工具',
    tags: ['编辑器', 'AI'],
    color: '#bd00ff',
  },
];

const categories = Array.from(new Set(tools.map((t) => t.category)));

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#050508]">
      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">AI 工具箱</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              精选我在开发中最常使用的工具和框架，助力高效开发与创作
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#00f0ff]/5 text-[#00f0ff] border border-[#00f0ff]/20"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-[#0a0a12] border border-[#00f0ff]/10 rounded-xl p-6 hover:border-[#00f0ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                      style={{
                        backgroundColor: `${tool.color}10`,
                        border: `1px solid ${tool.color}20`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: tool.color }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold group-hover:text-[#00f0ff] transition-colors">
                          {tool.name}
                        </h3>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full border"
                          style={{
                            color: tool.color,
                            borderColor: `${tool.color}30`,
                            backgroundColor: `${tool.color}10`,
                          }}
                        >
                          {tool.category}
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-3">
                        {tool.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {tool.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
