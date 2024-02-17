import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode } from 'react';

type ClickableTextLinkProps = {
  href: string;
  children: ReactNode;
};

const ClickableTextLink = ({ href, children }: ClickableTextLinkProps) => (
  <Link href={href}>
    <Box textDecoration="underline" _hover={{ opacity: 0.6, transition: '0.5s' }}>
      {children}
    </Box>
  </Link>
);

export default ClickableTextLink;
