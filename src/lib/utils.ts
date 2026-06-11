import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';

export function formatDate(dateString: string): string {
  return format(new Date(dateString), 'yyyy年MM月dd日', { locale: zhCN });
}
