'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Post } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface PostCardProps {
  post: Post;
  index?: number;
}

export default function PostCard({ post, index = 0 }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/posts/${encodeURIComponent(post.slug)}`}
        className="group block h-full"
      >
        <article className="h-full bg-[#0a0a12] border border-[#00f0ff]/10 rounded-xl p-6 hover:border-[#00f0ff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] relative overflow-hidden">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-[#bd00ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10">
            {/* Meta */}
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f0ff] transition-colors duration-300 line-clamp-2">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed text-sm">
              {post.excerpt}
            </p>

            {/* Footer: Tags + Arrow */}
            <div className="flex items-center justify-between">
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="text-xs text-gray-500">+{post.tags.length - 3}</span>
                  )}
                </div>
              )}
              <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-[#00f0ff] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-2" />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
