import { Box, Flex, Show } from '@chakra-ui/react';

import { generateRssFeed } from './lib/feed';
import { Blogs } from './ui/Blogs';
import Profile from './ui/Profile';

const Home = async () => {
  await generateRssFeed();
  return (
    <>
      <Show above="md">
        <Flex gap={3}>
          <Blogs />
          <Box flexShrink={0}>
            <Profile />
          </Box>
        </Flex>
      </Show>
      <Show below="md">
        <Flex flexWrap="wrap" justifyContent="center">
          <Blogs />
          <Box mt={16}>
            <Profile />
          </Box>
        </Flex>
      </Show>
    </>
  );
};

export default Home;
