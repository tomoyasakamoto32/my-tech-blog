import { Heading, StackDivider, VStack, Text, Flex, Tag } from '@chakra-ui/react';
import Link from 'next/link';

export const Posts = () => (
  <VStack divider={<StackDivider borderColor="border.main" />} spacing={4} align="stretch">
    <Link href="./">
      <VStack align="stretch" role="group">
        <Heading as="h1" size="md" _groupHover={{ opacity: 0.6, transition: '0.5s' }}>
          タイトルですタイトル1
        </Heading>
        <Text size="sm" color="color.secoundary">
          2024/02/09
        </Text>
        <Text size="sm">
          内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です
          内容です内容です 内容です内容です 内容です内容です 内容です内容です 内容です内容です 内容です内容です 内容です内容です
          内容です内容です
        </Text>
        <Flex gap={2}>
          <Tag>React</Tag>
          <Tag>TypeScript</Tag>
        </Flex>
      </VStack>
    </Link>
    <Link href="./">
      <VStack align="stretch" role="group">
        <Heading as="h1" size="md" _groupHover={{ opacity: 0.6, transition: '0.5s' }}>
          タイトルですタイトル2
        </Heading>
        <Text size="sm" color="color.secoundary">
          2024/01/26
        </Text>
        <Text size="sm">
          内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です内容です
          内容です内容です 内容です内容です 内容です内容です 内容です内容です 内容です内容です 内容です内容です 内容です内容です
          内容です内容です
        </Text>
        <Flex gap={2}>
          <Tag>Node.js</Tag>
          <Tag>TypeScript</Tag>
        </Flex>
      </VStack>
    </Link>
  </VStack>
);
