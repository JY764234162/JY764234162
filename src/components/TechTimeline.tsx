'use client';

import { useRef, useState, useEffect } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [pathD, setPathD] = useState('');

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const calcPath = () => {
      const container = containerRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();

      const points = nodeRefs.current
        .map((ref) => {
          if (!ref || !ref.isConnected) return null;
          const rect = ref.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) return null;
          return {
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.top + rect.height / 2 - containerRect.top,
          };
        })
        .filter((p): p is { x: number; y: number } => p !== null);

      if (points.length < 2) return;

      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const midY = (prev.y + curr.y) / 2;
        const offset = 12 * (i % 2 === 1 ? 1 : -1);
        d += ` C ${prev.x + offset} ${midY}, ${curr.x + offset} ${midY}, ${curr.x} ${curr.y}`;
      }

      setPathD(d);
    };

    const debouncedCalcPath = () => {
      clearTimeout(timeout);
      timeout = setTimeout(calcPath, 100);
    };

    calcPath();

    const observer = new ResizeObserver(debouncedCalcPath);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener('scroll', debouncedCalcPath, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', debouncedCalcPath);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* SVG curved timeline */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#bd00ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff0080" stopOpacity="0.6" />
          </linearGradient>
          <filter id="lineGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {pathD && (
          <path
            d={pathD}
            stroke="url(#timelineGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
            filter="url(#lineGlow)"
          />
        )}
      </svg>

      <div className="space-y-10 md:space-y-12">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          const Icon = event.icon;

          return (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Desktop: alternating left/right layout */}
              <div className={`hidden md:flex items-start gap-0 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content card */}
                <div className={`w-1/2 ${isLeft ? 'pr-10' : 'pl-10'}`}>
                  <TimelineCard event={event} />
                </div>

                {/* Center icon */}
                <div
                  ref={(el) => { nodeRefs.current[index * 2] = el; }}
                  className="absolute left-1/2 -translate-x-1/2 z-10"
                >
                  <TimelineIcon event={event} Icon={Icon} />
                </div>

                {/* Empty spacer */}
                <div className="w-1/2" />
              </div>

              {/* Mobile: single column layout */}
              <div className="md:hidden flex items-start gap-4">
                {/* Icon column */}
                <div
                  ref={(el) => { nodeRefs.current[index * 2 + 1] = el; }}
                  className="flex-shrink-0 z-10"
                >
                  <TimelineIcon event={event} Icon={Icon} />
                </div>

                {/* Content card */}
                <div className="flex-1 min-w-0 pt-1">
                  <TimelineCard event={event} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function TimelineIcon({ event, Icon }: { event: TimelineEvent; Icon: React.ElementType }) {
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center border-2"
      style={{
        backgroundColor: '#0a0a12',
        borderColor: `${event.color}50`,
        boxShadow: `0 0 20px ${event.color}30, inset 0 0 10px ${event.color}10`,
      }}
    >
      <Icon className="w-5 h-5" style={{ color: event.color }} />
    </div>
  );
}

function TimelineCard({ event }: { event: TimelineEvent }) {
  return (
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
  );
}
