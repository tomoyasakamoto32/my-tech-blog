'use client';

import { IconButton, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';
import { CSSProperties, memo } from 'react';

import Rss from '../../../../public/rss_icon.svg';
import RssWhite from '../../../../public/rss_icon_white.svg';

type RssIcon = {
  iconStyle?: CSSProperties;
};

const RssIcon = memo(({ iconStyle }: RssIcon) => {
  const { colorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Rss Feed"
      icon={
        <Image
          alt="RssのIconです。"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={colorMode === 'light' ? Rss : RssWhite}
          style={{ width: '16px', height: '16px', ...iconStyle }}
        />
      }
    />
  );
});

export default RssIcon;
