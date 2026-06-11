'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FileText, Code2, Cpu, Layers } from 'lucide-react';

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function StatItem({ icon: Icon, value, label, suffix = '', delay = 0 }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="bg-[#0a0a12] border border-[#00f0ff]/10 rounded-xl p-6 text-center hover:border-[#00f0ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#00f0ff]/10 to-[#bd00ff]/10 border border-[#00f0ff]/20">
          <Icon className="w-6 h-6 text-[#00f0ff]" />
        </div>
        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
          <AnimatedCounter value={value} suffix={suffix} />
        </div>
        <div className="text-gray-400 text-sm">{label}</div>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const stats = [
    { icon: FileText, value: 10, label: '技术文章', suffix: '+' },
    { icon: Code2, value: 15, label: '开源项目', suffix: '+' },
    { icon: Cpu, value: 8, label: '技术栈', suffix: '' },
    { icon: Layers, value: 5, label: '年开发经验', suffix: '+' },
  ];

  return (
    <section className="relative py-20 bg-[#050508]">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bd00ff]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">数据概览</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            用数字记录技术成长的每一步
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} delay={index * 0.1} />
          ))}
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent" />
    </section>
  );
}
