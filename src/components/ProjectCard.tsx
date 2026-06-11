'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import { GitHubIcon } from './icons';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-[#0a0a12] border border-[#00f0ff]/10 rounded-xl overflow-hidden hover:border-[#00f0ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/20 to-[#bd00ff]/20 flex items-center justify-center">
            <Layers className="w-16 h-16 text-[#00f0ff]/20" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] to-transparent opacity-60" />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-[#00f0ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#050508]/80 text-white hover:text-[#00f0ff] border border-white/10 hover:border-[#00f0ff]/30 transition-all"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#050508]/80 text-white hover:text-[#00f0ff] border border-white/10 hover:border-[#00f0ff]/30 transition-all"
                aria-label="Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#bd00ff]/10 text-[#bd00ff] border border-[#bd00ff]/20">
              {project.category}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-xs font-medium bg-[#00f0ff]/5 text-[#00f0ff] border border-[#00f0ff]/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
