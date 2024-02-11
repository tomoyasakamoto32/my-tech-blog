import { isValid, format } from 'date-fns';

export const dateFormat = (date: Date, formatString = 'yyyy/MM/dd') => format(date, formatString);

export const isValidDate = (date: Date) => isValid(date);
