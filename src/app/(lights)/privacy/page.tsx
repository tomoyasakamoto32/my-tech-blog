import { Box, Heading, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const Page = () => (
  <VStack>
    <Heading as="h2" size="lg">
      プライバシーポリシー
    </Heading>
    <Box fontSize="1rem" mt={16} lineHeight={2}>
      当サイトでは、Googleの提供するアクセス解析ツール「Google Analytics」を使用しています。
      <br />
      Google Analytics
      はトラフィックデータの収集のためにCookieを使用しておりますが、このデータは匿名で収集されており、個人を特定するものではありません。
      <br />
      ユーザーはCookieを無効にすることでデータ収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
      <br />
      この規約に関しての詳細は
      <Link href="https://marketingplatform.google.com/about/analytics/terms/jp/">
        <Box as="span" color="color.link">
          Googleアナリティクスサービス利用規約
        </Box>
      </Link>
      のページや
      <Link href="https://policies.google.com/technologies/ads?hl=ja">
        <Box as="span" color="color.link">
          Googleポリシーと規約
        </Box>
      </Link>
      ページをご覧ください。
    </Box>
  </VStack>
);

export default Page;
