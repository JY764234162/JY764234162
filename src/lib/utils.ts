import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';

export function formatDate(dateString: string): string {
  return format(new Date(dateString), 'yyyy年MM月dd日', { locale: zhCN });
}

/**
 * 获取带 basePath 的资源路径
 * 生产环境自动加上 /JY764234162，开发环境保持原样
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/JY764234162' : '';
  return `${basePath}${path}`;
}
