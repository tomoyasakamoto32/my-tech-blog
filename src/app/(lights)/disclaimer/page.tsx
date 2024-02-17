import { Box, Heading, VStack } from '@chakra-ui/react';

const Page = () => (
  <VStack>
    <Heading as="h2" size="lg">
      免責事項
    </Heading>
    <Box fontSize="1rem" mt={16} lineHeight={2}>
      当サイトからのリンクやバナー等で移動したサイト先で提供される情報、サービス等について一切の責任を負いません。
      <br />
      また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、完全性、正確性、安全性を保証するものではありません。
      <br />
      当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
    </Box>
  </VStack>
);

export default Page;
