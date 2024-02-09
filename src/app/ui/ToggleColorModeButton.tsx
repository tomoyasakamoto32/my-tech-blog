'use client';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { memo } from 'react';

export const ToggleColorModeButton = memo(() => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      // _focus={{_focus: "none"}} //周りの青いアウトラインが気になる場合に消す方法
      mb={10}
      aria-label="DarkMode Switch"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
});
