import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime: string;
};

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const readingTime = Math.ceil(content.split(' ').length / 200);

      return {
        slug,
        title: data.title || '无标题',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || content.slice(0, 200) + '...',
        content,
        tags: data.tags || [],
        readingTime: `${readingTime} 分钟阅读`,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return allPostsData;
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => fileName.replace(/\.mdx$/, ''));
}

export function getPostData(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const readingTime = Math.ceil(content.split(' ').length / 200);

  return {
    slug,
    title: data.title || '无标题',
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || content.slice(0, 200) + '...',
    content,
    tags: data.tags || [],
    readingTime: `${readingTime} 分钟阅读`,
  };
}

export function formatDate(dateString: string): string {
  return format(new Date(dateString), 'yyyy年MM月dd日', { locale: zhCN });
}