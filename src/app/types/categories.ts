import { z } from 'zod';

import { zNullableString, zObject, zRequireDatetime, zString } from './customZod';

export const Category = zObject({
  id: zString,
  createdAt: zRequireDatetime,
  updatedAt: zRequireDatetime,
  publishedAt: zRequireDatetime,
  revisedAt: zRequireDatetime,
  name: zNullableString,
}).nullable();

export type Category = z.infer<typeof Category>;
