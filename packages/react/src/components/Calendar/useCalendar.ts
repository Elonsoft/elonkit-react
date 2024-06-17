import { useMemo } from 'react';

const MAX_ROWS_DAYS_AMOUNT = 42;

export const useCalendar = (
  year: number,
  month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
  weekStart: 0 | 1 | 2 | 3 | 4 | 5 | 6,
  isShowMaxRows?: boolean
) => {
  const result = useMemo(() => {
    const dates = [];
    const prevDates: number[] = [];
    const nextDates: number[] = [];

    const date = new Date(year, month, 1);

    const difference = date.getDay() - weekStart;
    date.setDate(1 - (difference >= 0 ? difference : 7 + difference));

    while (date.getDate() !== 1) {
      prevDates.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }

    let i = 1;

    while (date.getMonth() === month) {
      dates.push(i++);
      date.setDate(i);
    }

    i = 1;

    if (isShowMaxRows) {
      const nextDatesLength = MAX_ROWS_DAYS_AMOUNT - prevDates.length - dates.length;

      while (i <= nextDatesLength) {
        nextDates.push(i++);
        date.setDate(i);
      }
    }

    while (date.getDay() !== weekStart) {
      nextDates.push(i++);
      date.setDate(i);
    }

    return { dates, prevDates, nextDates };
  }, [year, month, weekStart]);

  return result;
};
