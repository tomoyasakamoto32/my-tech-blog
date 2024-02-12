import { Box, Card, Center, Flex, Show } from '@chakra-ui/react';

import { Blogs } from './ui/Blogs';
import { ToggleColorModeButton } from './ui/ToggleColorModeButton';

const Home = () => (
  <main>
    <Box maxWidth="1024px" margin="0 auto" p={4}>
      <Flex justifyContent="right" mt={2}>
        <Center>
          <ToggleColorModeButton />
        </Center>
      </Flex>
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
    </Box>
  </main>
);

export default Home;