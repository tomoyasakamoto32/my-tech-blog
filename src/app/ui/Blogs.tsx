import { Heading, StackDivider, VStack, Text, Flex, Tag } from '@chakra-ui/react';
import Link from 'next/link';

import { getBlogs } from '../lib/apis/getBlogs';

export const Blogs = async () => {
  const data = await getBlogs();
  return (
    <VStack divider={<StackDivider borderColor="border.main" />} spacing={4} align="stretch">
      {data.contents.map((blog) => (
        <Link href={`./items/${blog.id}`} key={blog.id}>
          <VStack align="stretch" role="group">
            <Heading as="h2" size="md" _groupHover={{ opacity: 0.6, transition: '0.5s' }}>
              {blog.title ?? ''}
            </Heading>
            <Flex gap={8}>
              <Text size="sm" color="color.secoundary">
                {blog.formattedPublishedAt} 公開
              </Text>
              <Text size="sm" color="color.secoundary">
                {blog.formattedUpdatedAt} 更新
              </Text>
            </Flex>
            <Text
              size="sm"
              css={{
                overflow: 'hidden',
                display: '-webkit-box',
                textOverflow: 'ellipsis',
                '-webkit-box-orient': 'vertical',
                '-webkit-line-clamp': '3',
              }}
            >
              {blog.summary}
            </Text>
            <Flex gap={2} flexWrap="wrap">
              {blog.categories?.map((category) => <Tag>{category?.name}</Tag>)}
            </Flex>
          </VStack>
        </Link>
      ))}
    </VStack>
  );
};
