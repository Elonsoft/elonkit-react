import { useMemo } from 'react';

import { CalendarHeadProps } from './CalendarHead.types';

import clsx from 'clsx';
import { getCalendarHeadUtilityClass } from './CalendarHead.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type CalendarHeadOwnerState = {
  classes?: CalendarHeadProps['classes'];
};

const useUtilityClasses = (ownerState: CalendarHeadOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getCalendarHeadUtilityClass, classes);
};

const CalendarHeadRoot = styled('div', {
  name: 'ESCalendarHead',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root
})(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  borderBottom: `1px solid ${theme.vars.palette.monoA.A100}`,
  padding: '0 12px'
}));

const CalenderHeadDay = styled(Typography, {
  name: 'ESCalendarHead',
  slot: 'Day',
  overridesResolver: (_props, styles) => styles.day
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '32px'
}));

/** The days list for the calendar. */
export const CalendarHead = (inProps: CalendarHeadProps) => {
  const {
    className,
    sx,
    weekStart = 1,
    getWeekDays,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESCalendarHead'
  });

  const days = useMemo(() => {
    const names = getWeekDays!();
    for (let i = 0; i < weekStart; i++) {
      names.push(names.shift() || '');
    }
    return names;
  }, [weekStart, getWeekDays]);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <CalendarHeadRoot className={clsx(className, classes.root)} sx={sx}>
      {days.map((day, index) => (
        <CalenderHeadDay key={index} color="monoA.A500" variant="caption">
          {day}
        </CalenderHeadDay>
      ))}
    </CalendarHeadRoot>
  );
};
