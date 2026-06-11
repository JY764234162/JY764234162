'use client';

import { motion } from 'framer-motion';
import {
  Terminal,
  Code2,
  Globe,
  Database,
  Container,
  GitBranch,
  Brain,
  Sparkles,
  Server,
} from 'lucide-react';

interface TechItem {
  name: string;
  icon: React.ElementType;
  category: string;
  level: number;
  color: string;
}

const techs: TechItem[] = [
  { name: 'Go', icon: Terminal, category: '后端', level: 90, color: '#00f0ff' },
  { name: 'Python', icon: Code2, category: '后端/AI', level: 85, color: '#bd00ff' },
  { name: 'React', icon: Globe, category: '前端', level: 90, color: '#00f0ff' },
  { name: 'Next.js', icon: Server, category: '前端', level: 88, color: '#ffffff' },
  { name: 'TypeScript', icon: Code2, category: '前端', level: 85, color: '#00f0ff' },
  { name: 'Tailwind CSS', icon: Sparkles, category: '前端', level: 90, color: '#00f0ff' },
  { name: 'PostgreSQL', icon: Database, category: '数据库', level: 80, color: '#bd00ff' },
  { name: 'Docker', icon: Container, category: '运维', level: 75, color: '#00f0ff' },
  { name: 'Git', icon: GitBranch, category: '工具', level: 90, color: '#ff0080' },
  { name: 'LLM/AI', icon: Brain, category: 'AI', level: 85, color: '#ff0080' },
  { name: 'Node.js', icon: Server, category: '后端', level: 80, color: '#00f0ff' },
  { name: 'Linux', icon: Terminal, category: '系统', level: 85, color: '#bd00ff' },
];

const categories = Array.from(new Set(techs.map((t) => t.category)));

export default function TechStackSection() {
  return (
    <section className="relative py-20 bg-[#0a0a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">技术栈</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            全栈开发的核心武器库，从后端到 AI 应用全覆盖
          </p>
        </motion.div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#00f0ff]/5 text-[#00f0ff] border border-[#00f0ff]/20"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative"
            >
              <div className="bg-[#050508] border border-[#00f0ff]/10 rounded-xl p-4 text-center hover:border-[#00f0ff]/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                <div
                  className="w-10 h-10 mx-auto mb-3 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                  style={{ backgroundColor: `${tech.color}10`, border: `1px solid ${tech.color}30` }}
                >
                  <tech.icon className="w-5 h-5" style={{ color: tech.color }} />
                </div>
                <div className="text-white font-medium text-sm mb-2">{tech.name}</div>

                {/* Progress bar */}
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-1">{tech.level}%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
