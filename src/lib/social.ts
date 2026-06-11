/**
 * 社交链接与联系方式集中配置
 * 修改此处即可同步更新全站所有位置的联系方式
 */

export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/JY764234162',
    label: 'GitHub',
  },
  {
    name: 'email',
    url: 'mailto:jiangyi@example.com',
    label: 'Email',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/jiangyi_dev',
    label: 'Twitter',
  },
  {
    name: 'wechat',
    url: '#',
    label: '微信公众号',
  },
  {
    name: 'bilibili',
    url: 'https://space.bilibili.com',
    label: 'Bilibili',
  },
  {
    name: 'zhihu',
    url: 'https://www.zhihu.com/people',
    label: '知乎',
  },
];

export const contactInfo = {
  name: '江一',
  email: 'jiangyi@example.com',
  github: 'https://github.com/JY764234162',
  twitter: 'https://twitter.com/jiangyi_dev',
  wechatPublic: 'your-wechat-id',
  bilibili: 'https://space.bilibili.com',
  zhihu: 'https://www.zhihu.com/people',
};
