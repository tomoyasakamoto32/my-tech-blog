import { Heading, StackDivider, VStack, Text, Flex, Tag } from '@chakra-ui/react';
import Link from 'next/link';

import { getBlogs } from '../lib/apis/getBlogs';

const Blogs = async () => {
  const data = await getBlogs();
  return (
    <VStack divider={<StackDivider borderColor="border.main" />} spacing={4} align="stretch">
      {data.contents.map((blog) => (
        <Link href={`/entry/${blog.id}`} key={blog.id}>
          <VStack align="stretch" role="group">
            <Heading as="h2" size="md" _groupHover={{ opacity: 0.6, transition: '0.5s' }}>
              {blog.title ?? ''}
            </Heading>
            <Flex gap={4}>
              <Text size="sm" color="color.secoundary">
                {blog.formattedPublishedAt} 公開
              </Text>
              <Text size="sm" color="color.secoundary">
                {blog.formattedUpdatedAt} 更新
              </Text>
            </Flex>
            <Text size="sm">{blog.summary}...</Text>
            <Flex gap={2} flexWrap="wrap">
              {blog.categories?.map((category) => <Tag key={category?.id}>{category?.name}</Tag>)}
            </Flex>
          </VStack>
        </Link>
      ))}
    </VStack>
  );
};

export default Blogs;
