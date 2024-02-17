import { client } from '../client';

import { PROFILE_ENDPOINT } from '@/app/consts';
import { Profile } from '@/app/types/profile';

const getProfile = async () => {
  const data = await client.get<Profile>({
    endpoint: PROFILE_ENDPOINT,
  });
  return Profile.parse(data);
};

export { getProfile };
