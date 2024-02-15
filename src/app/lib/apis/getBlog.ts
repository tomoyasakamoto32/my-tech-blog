import { client } from '../client';

import { BLOGS_ENDPOINT } from '@/app/consts';
import { Blog } from '@/app/types/blogs';

const getBlog = async (id: string) => {
  const data = await client.get<Blog>({
    endpoint: BLOGS_ENDPOINT,
    contentId: id,
  });
  return Blog.parse(data);
};

export { getBlog };
