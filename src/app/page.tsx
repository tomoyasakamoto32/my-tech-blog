import { Box, Card, Flex, Show } from '@chakra-ui/react';

import { Blogs } from './ui/Blogs';

const Home = () => (
  <>
    <Show above="md">
      <Flex gap={3}>
        <Blogs />
        <Box flexShrink={0}>
          <Card p={8}>プロフィール的な何か</Card>
        </Box>
      </Flex>
    </Show>
    <Show below="md">
      <Flex gap={3} flexWrap="wrap">
        <Blogs />
        <Box flexShrink={0}>
          <Card p={8}>プロフィール的な何か</Card>
        </Box>
      </Flex>
    </Show>
  </>
);

export default Home;
