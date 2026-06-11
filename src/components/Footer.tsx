'use client';

import Link from 'next/link';
import { Mail, Heart, MessageCircle, Play, BookOpen } from 'lucide-react';
import { GitHubIcon, TwitterIcon } from './icons';
import { socialLinks } from '@/lib/social';

const iconMap: Record<string, React.ReactNode> = {
  github: <GitHubIcon className="w-5 h-5" />,
  twitter: <TwitterIcon className="w-5 h-5" />,
  email: <Mail className="w-5 h-5" />,
  wechat: <MessageCircle className="w-5 h-5" />,
  bilibili: <Play className="w-5 h-5" />,
  zhihu: <BookOpen className="w-5 h-5" />,
};

const footerLinks = [
  { href: '/', label: '首页' },
  { href: '/projects', label: '项目' },
  { href: '/tools', label: '工具' },
  { href: '/about', label: '关于' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a12] border-t border-[#00f0ff]/10">
      {/* Neon top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold gradient-text inline-block mb-4">
              江一.Dev
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              全栈工程师 & AI 开发者<br />
              用代码构建未来
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">导航</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#00f0ff] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">连接</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('mailto') || link.url === '#' ? undefined : '_blank'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#00f0ff]/5 border border-[#00f0ff]/10 text-gray-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300"
                  aria-label={link.label}
                  title={link.label}
                >
                  {iconMap[link.name]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {currentYear} 江一. Made with <Heart className="w-4 h-4 text-[#ff0080] fill-[#ff0080]" /> and Next.js
          </p>
          <p className="text-gray-600 text-xs">
            Powered by React 19 · Tailwind CSS · Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
