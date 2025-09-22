import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string | Date) {
  return dayjs(dateString).format('MMMM DD, YYYY');
}

export function formatDateShort(
  dateString: string | Date,
  opts?: { lower: boolean }
) {
  if (opts?.lower)
    return dayjs(dateString).format('MMM DD, YYYY').toLowerCase();

  return dayjs(dateString).format('MMM DD, YYYY');
}

export function formatDateMonthOnly(
  dateString: string | Date,
  opts?: { lower: boolean }
) {
  if (opts?.lower) return dayjs(dateString).format('MMM YYYY').toLowerCase();

  return dayjs(dateString).format('MMM YYYY');
}

export function formatDateRange(
  dates: [string | Date, (string | Date) | 'Present'] | [string | Date],
  opts?: { lower: boolean }
) {
  const defaultOpts = { lower: false, ...opts };
  if (dates.length === 1) {
    return formatDateMonthOnly(dates[0], { lower: defaultOpts.lower });
  }

  if (dates[1] === 'Present') {
    return (
      formatDateMonthOnly(dates[0], { lower: defaultOpts.lower }) + ' - Present'
    );
  }

  return (
    formatDateMonthOnly(dates[0], { lower: defaultOpts.lower }) +
    ' - ' +
    formatDateMonthOnly(dates[1], { lower: defaultOpts.lower })
  );
}

export function formatDateRangeWithDuration(
  dates: [string | Date, (string | Date) | 'Present'] | [string | Date],
  opts?: { lower: boolean }
) {
  const defaultOpts = { lower: false, ...opts };

  // 1. Calculate duration.
  const duration = (() => {
    if (dates.length === 1) {
      return 1;
    }

    if (dates[1] === 'Present') {
      return Math.ceil(dayjs().diff(dayjs(dates[0]), 'month', true));
    }

    return Math.ceil(dayjs(dates[1]).diff(dayjs(dates[0]), 'month', true));
  })();

  return (
    formatDateRange(dates, { lower: defaultOpts.lower }) +
    ` (${duration} mo${duration > 1 ? 's' : ''})`
  );
}

/**
 * A generic compare function for sorting order and date.
 *
 * This only works if the order and date are in the first level
 * of the object. (e.g. not nested like "first.deeper.order")
 */
export const byOrderAndDate = <T>(
  orderPropertyName: keyof T,
  datePropertyName: keyof T
) => {
  return (first: T, second: T) => {
    // If both no feature order, compare by date.
    if (!first[orderPropertyName] && !second[orderPropertyName]) {
      // Return 1, to get latest date as first priority.
      if (
        dayjs(second[datePropertyName] as string).isAfter(
          dayjs(first[datePropertyName] as string)
        )
      )
        return 1;
      return -1;
    }

    // Here, either items have `order`
    if (!first[orderPropertyName] || !second[orderPropertyName]) {
      return 1;
    }

    // Lastly, here, lesser `order` have priority. 1 is first.
    if (first[orderPropertyName]! < second[orderPropertyName]!) return -1;

    return 1;
  };
};