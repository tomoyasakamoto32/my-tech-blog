import fs from 'fs';

import { Feed } from 'feed';

import { getBlogs } from './apis/getBlogs';

export const generateRssFeed = async () => {
  const baseUrl = 'https://www.saka-techblog.com';
  const feed = new Feed({
    title: 'ゆるめのテックブログ',
    description: 'sakamotoによるゆるめの技術ブログです。気ままに更新します。',
    id: baseUrl,
    link: baseUrl,
    language: 'ja',
    copyright: '© 2024',
    updated: new Date(),
    feed: `${baseUrl}/feed`,
    author: {
      name: 'sakamoto',
    },
  });

  const blogs = await getBlogs();

  blogs.contents.forEach((blog) => {
    feed.addItem({
      title: blog.title ?? '',
      id: `${baseUrl}/${blog.id}`,
      link: `${baseUrl}/${blog.id}`,
      description: `${blog.metaDescription}…`,
      content: blog.content ?? '',
      date: blog.updatedAt,
    });
  });

  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
};
