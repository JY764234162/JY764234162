'use client';

import { motion } from 'framer-motion';
import { Terminal, Code2, Globe, Brain, Zap } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  tags: string[];
}

const events: TimelineEvent[] = [
  {
    year: '2020',
    title: '编程启蒙',
    description: '开始学习 Python，探索编程世界的无限可能，完成了第一个自动化脚本项目。',
    icon: Terminal,
    color: '#00f0ff',
    tags: ['Python', '编程入门'],
  },
  {
    year: '2021',
    title: '深入后端',
    description: '转向 Go 语言开发，学习高并发编程，开始接触微服务架构和云原生技术。',
    icon: Code2,
    color: '#bd00ff',
    tags: ['Go', '微服务', 'Docker'],
  },
  {
    year: '2022',
    title: '全栈探索',
    description: '深入学习 React 生态和 Next.js，掌握现代前端工程化，开始全栈项目开发。',
    icon: Globe,
    color: '#ff0080',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    year: '2023',
    title: 'AI 浪潮',
    description: '深入 AI 应用开发，学习 LLM 接口集成、RAG 架构和智能 Agent 开发。',
    icon: Brain,
    color: '#00f0ff',
    tags: ['LLM', 'OpenAI', 'LangChain'],
  },
  {
    year: '2024',
    title: '融合创新',
    description: '将全栈技术与 AI 深度融合，打造智能应用产品，持续输出技术内容。',
    icon: Zap,
    color: '#bd00ff',
    tags: ['AI应用', '全栈', '开源'],
  },
];

export default function TechTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f0ff]/50 via-[#bd00ff]/50 to-[#ff0080]/50 md:-translate-x-px" />

      <div className="space-y-12">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          const Icon = event.icon;

          return (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-start gap-6 md:gap-0 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content card */}
              <div className={`flex-1 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-[#0a0a12] border border-[#00f0ff]/10 rounded-xl p-5 hover:border-[#00f0ff]/20 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: event.color }}
                    >
                      {event.year}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-xs font-medium border"
                        style={{
                          backgroundColor: `${event.color}10`,
                          color: event.color,
                          borderColor: `${event.color}30`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center icon - mobile left, desktop center */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                  style={{
                    backgroundColor: `${event.color}15`,
                    borderColor: `${event.color}50`,
                    boxShadow: `0 0 20px ${event.color}20`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: event.color }} />
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
