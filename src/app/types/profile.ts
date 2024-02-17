import { z } from 'zod';

import { zObject, zRequireDatetime, zRequireString } from './customZod';

export const Profile = zObject({
  displayName: zRequireString,
  discription: zRequireString,
  address: zRequireString,
  birthDate: zRequireDatetime,
  createdAt: zRequireDatetime,
  updatedAt: zRequireDatetime,
  publishedAt: zRequireDatetime,
  revisedAt: zRequireDatetime,
}).nullable();

export type Profile = z.infer<typeof Profile>;
