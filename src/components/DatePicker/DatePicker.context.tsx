import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface DatePickerContextValue {
  /* */
  weekStart: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /* */
  multiple?: boolean;
  /* */
  range?: boolean;

  year: number;
  setYear: Dispatch<SetStateAction<number>>;

  month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  setMonth: Dispatch<SetStateAction<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>>;

  view: 'year' | 'month' | 'date';
  setView: Dispatch<SetStateAction<'year' | 'month' | 'date'>>;

  value: [Date, Date | null] | null;
  onSelectionChange: (value: [Date, Date | null]) => void;
}

export const DatePickerContext = createContext<DatePickerContextValue | null>(null);

export const useDatePickerContext = () => {
  const value = useContext(DatePickerContext);

  if (value === null) {
    throw new Error('No provider for DatePcikerContext.');
  }

  return value;
};
