import './globals.css';
import { Box, Center, Flex, Heading, VStack } from '@chakra-ui/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import { Provider } from './Providers';
import ClickableTextLink from './ui/ClickableTextLink';
import { ToggleColorModeButton } from './ui/ToggleColorModeButton';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ゆるめのテックブログ',
  description: 'sakamotoによるゆるめの技術ブログです。気ままに更新します。',
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={inter.className}>
      <Provider>
        <Flex as="header" borderBottom="1px solid" borderColor="border.deep" height="60px">
          <Box p="4" width="860px" margin="0 auto">
            <Link href="/">
              <Heading as="h1" size="md" _hover={{ opacity: 0.6, transition: '0.5s' }}>
                ゆるめの TECH BLOG
              </Heading>
            </Link>
          </Box>
        </Flex>
        <main>
          <Box maxWidth="1024px" margin="0 auto" p={4} minHeight="calc(100vh - 190px)">
            <Flex justifyContent="right" mt={2}>
              <Center>
                <ToggleColorModeButton />
              </Center>
            </Flex>
            {children}
          </Box>
        </main>
        <VStack
          as="footer"
          px={16}
          borderTop="1px solid"
          borderColor="border.deep"
          height="90px"
          justifyContent="center"
          marginTop="40px"
        >
          <Flex gap={4}>
            <ClickableTextLink href="/disclaimer">免責事項</ClickableTextLink>
            <ClickableTextLink href="/privacy">プライバシーポリシー</ClickableTextLink>
          </Flex>
          <Box>©︎ {new Date().getFullYear()}</Box>
        </VStack>
      </Provider>
      <SpeedInsights />
    </body>
    <GoogleAnalytics gaId={GA_ID} />
  </html>
);

export default RootLayout;
