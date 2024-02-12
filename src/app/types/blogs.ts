import { z } from 'zod';

import { dateFormat } from '../utils/dateUtils';

import { Category } from './categories';
import { ListTaskResponse, zArray, zNullableString, zNumber, zObject, zRequireDatetime, zString } from './customZod';

const Eyecatch = z
  .object({
    url: zString,
    height: zNumber,
    width: zNumber,
  })
  .nullish();

type Eyecatch = z.infer<typeof Eyecatch>;

const Blog = zObject({
  id: zString,
  createdAt: zRequireDatetime,
  updatedAt: zRequireDatetime,
  publishedAt: zRequireDatetime,
  revisedAt: zRequireDatetime,
  title: zNullableString,
  content: zNullableString,
  eyecatch: Eyecatch,
  categories: zArray(Category).nullish(),
  summary: zNullableString,
}).transform((args) => ({
  ...args,
  formattedCreatedAt: dateFormat(args.createdAt, 'yyyy年MM月dd日'),
  formattedUpdatedAt: dateFormat(args.updatedAt, 'yyyy年MM月dd日'),
  formattedPublishedAt: dateFormat(args.publishedAt, 'yyyy年MM月dd日'),
  formattedRevisedAt: dateFormat(args.revisedAt, 'yyyy年MM月dd日'),
}));

export const Blogs = ListTaskResponse(Blog);

export type Blog = z.infer<typeof Blog>;

export type Blogs = z.infer<typeof Blogs>;
