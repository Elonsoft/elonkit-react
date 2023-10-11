import { useMemo } from 'react';

import { DatePickerPresetsProps } from './DatePickerPresets.types';

import clsx from 'clsx';
import { getDatePickerPresetsUtilityClass } from './DatePickerPresets.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { useDatePickerContext } from '../DatePicker.context';

type DatePickerPresetsOwnerState = {
  classes?: DatePickerPresetsProps['classes'];
};

const useUtilityClasses = (ownerState: DatePickerPresetsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getDatePickerPresetsUtilityClass, classes);
};

const DatePickerPresetsRoot = styled('div', {
  name: 'ESDatePickerPresets',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column'
}));

const DatePickerPresetsButton = styled(Typography, {
  name: 'ESDatePickerPresets',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})(({ theme }) => ({
  display: 'flex',
  padding: '14px 16px',
  color: theme.palette.monoA.A700
}));

const PRESETS: Array<{
  name: string;
  getDates: (data: { weekStart: 0 | 1 | 2 | 3 | 4 | 5 | 6 }) => [Date, Date | null];
}> = [
  {
    name: 'Yesterday',
    getDates: () => {
      const date = new Date();
      date.setDate(date.getDate() - 1);
      return [date, null];
    }
  },
  {
    name: 'Today',
    getDates: () => {
      return [new Date(), null];
    }
  },
  {
    name: 'Tomorrow',
    getDates: () => {
      const date = new Date();
      date.setDate(date.getDate() + 1);
      return [date, null];
    }
  },
  {
    name: 'PrevWeek',
    getDates: ({ weekStart }) => {
      const startDate = new Date();
      const difference = startDate.getDay() - weekStart;
      startDate.setDate(startDate.getDate() - (difference >= 0 ? difference : 7 + difference) - 7);
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 6);
      return [startDate, endDate];
    }
  },
  {
    name: 'Week',
    getDates: ({ weekStart }) => {
      const startDate = new Date();
      const difference = startDate.getDay() - weekStart;
      startDate.setDate(startDate.getDate() - (difference >= 0 ? difference : 7 + difference));
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 6);
      return [startDate, endDate];
    }
  },
  {
    name: 'NextWeek',
    getDates: ({ weekStart }) => {
      const startDate = new Date();
      const difference = startDate.getDay() - weekStart;
      startDate.setDate(startDate.getDate() - (difference >= 0 ? difference : 7 + difference) + 7);
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 6);
      return [startDate, endDate];
    }
  },
  {
    name: 'PrevMonth',
    getDates: () => {
      const startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 1);
      startDate.setDate(1);
      const endDate = new Date();
      endDate.setDate(0);
      return [startDate, endDate];
    }
  },
  {
    name: 'Month',
    getDates: () => {
      const startDate = new Date();
      startDate.setDate(1);
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + 1);
      endDate.setDate(0);
      return [startDate, endDate];
    }
  },
  {
    name: 'NextMonth',
    getDates: () => {
      const startDate = new Date();
      startDate.setMonth(startDate.getMonth() + 1);
      startDate.setDate(1);
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + 2);
      endDate.setDate(0);
      return [startDate, endDate];
    }
  },
  {
    name: 'Year',
    getDates: () => {
      const startDate = new Date();
      startDate.setMonth(0);
      startDate.setDate(1);
      const endDate = new Date();
      endDate.setMonth(11);
      endDate.setDate(31);
      return [startDate, endDate];
    }
  }
];

export const DatePickerPresets: React.FC<DatePickerPresetsProps> = (inProps) => {
  const {
    className,
    sx,

    labelManual,
    labelYesterday,
    labelToday,
    labelTomorrow,
    labelPrevWeek,
    labelWeek,
    labelNextWeek,
    labelPrevMonth,
    labelMonth,
    labelNextMonth,
    labelYear,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESDatePickerPresets'
  });

  const labels = {
    labelManual,
    labelYesterday,
    labelToday,
    labelTomorrow,
    labelPrevWeek,
    labelWeek,
    labelNextWeek,
    labelPrevMonth,
    labelMonth,
    labelNextMonth,
    labelYear
  };

  const { weekStart, onSelectionChange } = useDatePickerContext();

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <DatePickerPresetsRoot className={clsx(classes.root, className)} sx={sx}>
      {PRESETS.map((preset) => (
        <DatePickerPresetsButton key={preset.name} onClick={() => onSelectionChange(preset.getDates({ weekStart }))}>
          {labels[`label${preset.name}` as keyof typeof labels]}
        </DatePickerPresetsButton>
      ))}
    </DatePickerPresetsRoot>
  );
};
