import { Box, Flex, Heading, Show, Tag, Text, VStack } from '@chakra-ui/react';
import { parse } from 'node-html-parser';

import styles from './page.module.css';

import { getBlog } from '@/app/lib/apis/getBlog';
import { Blog } from '@/app/types/blogs';
import TableOfContents from '@/app/ui/TableOfContents';

type PlainBlogDetailProps = {
  blog: Blog;
  headings: {
    tagName: string;
    id: string;
    text: string | undefined;
  }[];
};

const PlainBlogDetail = ({ blog, headings }: PlainBlogDetailProps) => (
  <Flex gap={3} alignItems="flex-start">
    <VStack alignItems="flex-start" spacing={16} mb={16}>
      <VStack alignItems="flex-start" spacing={4}>
        <Heading as="h1" size="lg">
          {blog.title}
        </Heading>
        <Flex gap={2} flexWrap="wrap">
          {blog.categories?.map((category) => <Tag key={category?.id}>{category?.name}</Tag>)}
        </Flex>
        <Flex gap={8}>
          <Text size="sm" color="color.secoundary">
            {blog.formattedPublishedAt} 公開
          </Text>
          <Text size="sm" color="color.secoundary">
            {blog.formattedUpdatedAt} 更新
          </Text>
        </Flex>
      </VStack>
      <Box width="100%" dangerouslySetInnerHTML={{ __html: blog.content ?? '' }} className={styles.content} />
    </VStack>
    <TableOfContents headings={headings} />
  </Flex>
);

const PlainBlogDetailMobile = ({ blog, headings }: PlainBlogDetailProps) => (
  <Flex gap={3} alignItems="flex-start">
    <VStack alignItems="center" spacing={16} mb={16}>
      <VStack alignItems="flex-start" spacing={4}>
        <Heading as="h1" size="lg">
          {blog.title}
        </Heading>
        <Flex gap={2} flexWrap="wrap">
          {blog.categories?.map((category) => <Tag key={category?.id}>{category?.name}</Tag>)}
        </Flex>
        <Flex gap={4} flexWrap="wrap">
          <Text size="sm" color="color.secoundary">
            {blog.formattedPublishedAt} 公開
          </Text>
          <Text size="sm" color="color.secoundary">
            {blog.formattedUpdatedAt} 更新
          </Text>
        </Flex>
      </VStack>
      <TableOfContents headings={headings} isMobile />
      <Box width="100%" dangerouslySetInnerHTML={{ __html: blog.content ?? '' }} className={styles.content} />
    </VStack>
  </Flex>
);

const BlogDetail = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlog(params.id);
  const persed = parse(blog.content ?? '');
  const headings = persed.querySelectorAll('h2, h3').map((heading) => ({
    tagName: heading.tagName,
    id: heading.id,
    text: heading.firstChild?.innerText,
  }));
  return (
    <>
      <Show below="md">
        <PlainBlogDetailMobile blog={blog} headings={headings} />
      </Show>
      <Show above="md">
        <PlainBlogDetail blog={blog} headings={headings} />
      </Show>
    </>
  );
};

export default BlogDetail;
