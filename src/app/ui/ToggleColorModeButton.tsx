'use client';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { memo } from 'react';

export const ToggleColorModeButton = memo(() => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      mb={10}
      aria-label="DarkMode Switch"
      icon={colorMode === 'light' ? <MoonIcon data-testid="moon" /> : <SunIcon data-testid="sun" />}
      onClick={toggleColorMode}
    />
  );
});
