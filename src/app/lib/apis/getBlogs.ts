import { client } from '../client';

import { BLOGS_ENDPOINT } from '@/app/consts';
import { Blogs } from '@/app/types/blogs';

const GET_BLOG_LIMIT = 100;

const getBlogs = async () => {
  const data = await client.get<Blogs>({
    endpoint: BLOGS_ENDPOINT,
    queries: { limit: GET_BLOG_LIMIT },
  });
  return Blogs.parse(data);
};

export { getBlogs };
