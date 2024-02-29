'use client';

import { ChakraBaseProvider } from '@chakra-ui/react';

import { theme } from './lib/theme';

export const Provider = ({ children }: { children: React.ReactNode }) => (
  <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
);
