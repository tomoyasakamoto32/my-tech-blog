import { z, ZodTypeAny } from 'zod';

import { isValidDate } from '../utils/dateUtils';

const invalidTypeError = '値が不正です';
const invalidTypeOptions = { invalid_type_error: invalidTypeError };

export const requiredOptions = { required_error: '必須です' };

// string
export const zString = z.string();
export const zRequireString = z.string().min(1);
export const zNullableString = z.string().nullish();

// number
export const zNumber = z.number();
export const zNullableNUmber = z.number().nullish();

// date
export const zDatetime = z
  .union([z.string(invalidTypeOptions).nullable(), z.date().nullable()])
  .refine((val) => val === null || isValidDate(new Date(val)), {
    message: invalidTypeError,
  })
  .transform((val) => (val === null ? val : new Date(val)));

export const zRequireDatetime = zDatetime
  .refine((val) => val !== null, {
    message: invalidTypeError,
  })
  .transform((val) => val as Date);

// object
export const zObject = <T extends z.ZodRawShape>(o: Parameters<typeof z.object<T>>[0]) => z.object(o, requiredOptions);

// array
export const zArray = <T extends z.ZodTypeAny>(o: Parameters<typeof z.array<T>>[0]) => z.array(o, requiredOptions);

// response
export const ListTaskResponse = <T extends ZodTypeAny>(schema: T) =>
  zObject({
    totalCount: zNumber,
    offset: zNumber,
    limit: zNumber,
    contents: zArray(schema),
  });
