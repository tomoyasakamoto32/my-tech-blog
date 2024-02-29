import { Box, Flex, Show } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const Blogs = dynamic(() => import('./ui/Blogs'));
const Profile = dynamic(() => import('./ui/Profile'));

const Home = () => (
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

export default Home;
