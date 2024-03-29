'use client';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './lib/theme';

export const Provider = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
