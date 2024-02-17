import { isValid, format, differenceInYears } from 'date-fns';

export const dateFormat = (date: Date, formatString = 'yyyy/MM/dd') => format(date, formatString);

export const isValidDate = (date: Date) => isValid(date);

export const getAgeFromDate = (birthDate: Date | null | undefined, targetDate: Date | null | undefined): string => {
  if (!birthDate || !targetDate || !isValid(birthDate) || !isValid(targetDate)) {
    return '';
  }
  if (birthDate > targetDate) {
    return '';
  }
  const duration = differenceInYears(targetDate, birthDate);
  return duration === undefined || duration === null ? '' : `${duration.toString()}歳`;
};
