import { useCallback, useMemo, useState } from 'react';

import { DatePickerProps } from './DatePicker.types';

import clsx from 'clsx';
import { getDatePickerUtilityClass } from './DatePicker.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { DatePickerContext } from './DatePicker.context';

type DatePickerOwnerState = {
  classes?: DatePickerProps['classes'];
};

const useUtilityClasses = (ownerState: DatePickerOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getDatePickerUtilityClass, classes);
};

const DatePickerRoot = styled('div', {
  name: 'ESDatePicker',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  width: '600px',
  borderRadius: '8px',
  border: `1px solid ${theme.palette.monoA.A50}`,
  boxShadow: theme.palette.shadow.down[50]
}));

export const DatePicker: React.FC<DatePickerProps> = (inProps) => {
  const {
    children,

    className,
    sx,

    weekStart = 1,
    multiple,
    range,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESDatePicker'
  });

  const [value, setValue] = useState<[Date, Date | null] | null>(null);

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11);

  const [view, setView] = useState<'year' | 'month' | 'date'>('date');

  const onSelectionChange = useCallback((value: [Date, Date | null]) => {
    setValue(value);
  }, []);

  const contextValue = useMemo(() => {
    return { weekStart, multiple, range, year, setYear, month, setMonth, view, setView, value, onSelectionChange };
  }, [weekStart, multiple, range, year, setYear, month, setMonth, view, setView, value, onSelectionChange]);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <DatePickerContext.Provider value={contextValue}>
      <DatePickerRoot className={clsx(classes.root, className)} sx={sx}>
        {children && children(contextValue)}
      </DatePickerRoot>
    </DatePickerContext.Provider>
  );
};
