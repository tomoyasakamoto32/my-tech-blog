import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import Link from 'next/link';

type PlainTableOfContentsProps = {
  headings: {
    tagName: string;
    id: string;
    text: string | undefined;
  }[];
};
type TableOfContentsProps = PlainTableOfContentsProps & {
  isMobile?: boolean;
};

const PlainTableOfContents = ({ headings }: PlainTableOfContentsProps) => (
  <Box flexShrink={0} width="200px" style={{ position: 'sticky', top: '16px' }}>
    <VStack spacing={3} alignItems="flex-start">
      <Heading as="p" size="sm">
        目次
      </Heading>
      {headings.map((heading) => (
        <Link href={`#${heading.id}`}>
          {heading.tagName === 'H2' && (
            <Heading as="p" size="xs" color="color.link">
              {heading.text}
            </Heading>
          )}
          {heading.tagName === 'H3' && (
            <Flex gap={1}>
              <Heading as="p" size="xs" color="color.link" ml={3}>
                -
              </Heading>
              <Heading as="p" size="xs" color="color.link">
                {heading.text}
              </Heading>
            </Flex>
          )}
        </Link>
      ))}
    </VStack>
  </Box>
);

const PlainTableOfContentsMobile = ({ headings }: PlainTableOfContentsProps) => (
  <Box>
    <VStack spacing={3} alignItems="flex-start">
      <Heading as="p" size="md" alignSelf="center">
        目次
      </Heading>
      {headings.map((heading) => (
        <Link href={`#${heading.id}`} key={heading.id}>
          {heading.tagName === 'H2' && (
            <Heading as="p" size="md" color="color.link">
              {heading.text}
            </Heading>
          )}
          {heading.tagName === 'H3' && (
            <Flex gap={1}>
              <Heading as="p" size="xs" color="color.link" ml={3}>
                -
              </Heading>
              <Heading as="p" size="xs" color="color.link">
                {heading.text}
              </Heading>
            </Flex>
          )}
        </Link>
      ))}
    </VStack>
  </Box>
);

const TableOfContents = ({ headings, isMobile }: TableOfContentsProps) =>
  isMobile ? <PlainTableOfContentsMobile headings={headings} /> : <PlainTableOfContents headings={headings} />;

export default TableOfContents;
