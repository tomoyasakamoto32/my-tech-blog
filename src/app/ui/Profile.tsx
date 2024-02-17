import { Card, VStack, Heading, Box } from '@chakra-ui/react';
import Image from 'next/image';

import { getProfile } from '../lib/apis/getProfile';
import { getAgeFromDate } from '../utils/dateUtils';

const Profile = async () => {
  const profile = await getProfile();
  return (
    <Card p={3} width="260px">
      <VStack justifyContent="center">
        <Heading as="p" size="sm">
          {profile?.displayName}
        </Heading>
        <Box borderRadius="50%" width="80px" height="80px">
          <Image
            src="/blog_profile_img.png"
            alt="ブログ管理者のペットのトイプードルの写真。超可愛い"
            width={2048}
            height={2730}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Box>
        <Box as="p" whiteSpace="pre-wrap" fontSize="0.9rem">
          {profile?.address}在住の{getAgeFromDate(profile?.birthDate, new Date())}
          <br />
          {profile?.discription}
        </Box>
      </VStack>
    </Card>
  );
};

export default Profile;
