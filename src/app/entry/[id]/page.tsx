import { Box, Flex, Heading, Show, Tag, Text, VStack } from '@chakra-ui/react';
import * as cheerio from 'cheerio';
import hljs from 'highlight.js';
import { Metadata, ResolvingMetadata } from 'next';

// import styles from './page.module.css';

import { getBlog } from '@/app/lib/apis/getBlog';
import { Blog } from '@/app/types/blogs';
import TableOfContents from '@/app/ui/TableOfContents';

import 'highlight.js/styles/hybrid.css';

type PlainBlogDetailProps = {
  blog: Blog;
  headings: {
    tagName: string;
    id: string;
    text: string | undefined;
  }[];
};

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const blog = await getBlog(params.id);
  const previousImages = (await parent).openGraph?.images || [];
  const description = `${blog.metaDescription}…`;

  return {
    title: blog.title,
    description,
    twitter: {
      description,
      images: [...previousImages],
    },
    openGraph: {
      images: [...previousImages],
      description,
    },
  };
}

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
      <Box width="100%" dangerouslySetInnerHTML={{ __html: blog.content ?? '' }} />
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
      <Box width="100%" dangerouslySetInnerHTML={{ __html: blog.content ?? '' }} />
    </VStack>
  </Flex>
);

const BlogDetail = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlog(params.id);
  const $ = cheerio.load(blog.content ?? '');
  const headings = $('h2, h3').toArray();
  const toc = headings.map((data) => ({
    text: $(data.children[0]).text(),
    id: data.attribs.id,
    tagName: data.name,
  }));

  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return (
    <>
      <Show below="md">
        <PlainBlogDetailMobile blog={{ ...blog, content: $.html() }} headings={toc} />
      </Show>
      <Show above="md">
        <PlainBlogDetail blog={{ ...blog, content: $.html() }} headings={toc} />
      </Show>
    </>
  );
};

export default BlogDetail;
