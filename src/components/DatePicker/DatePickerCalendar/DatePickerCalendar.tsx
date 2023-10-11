import { useMemo, useState } from 'react';

import { DatePickerCalendarProps } from './DatePickerCalendar.types';

import clsx from 'clsx';
import { getDatePickerCalendarUtilityClass } from './DatePickerCalendar.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { useCalendar } from './useCalendar';

type DatePickerCalendarOwnerState = {
  classes?: DatePickerCalendarProps['classes'];
};

const useUtilityClasses = (ownerState: DatePickerCalendarOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getDatePickerCalendarUtilityClass, classes);
};

const isSameDate = (a: Date, b: Date) => {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
};

const isBetweenDates = (start: Date, end: Date, year: number, month: number, date: number) => {
  const startYear = start.getFullYear();
  const startMonth = start.getMonth();
  const startDate = start.getDate();

  const endYear = end.getFullYear();
  const endMonth = end.getMonth();
  const endDate = end.getDate();

  return (
    (year > startYear || (year === startYear && (month > startMonth || (month === startMonth && date >= startDate)))) &&
    (year < endYear || (year === endYear && (month < endMonth || (month === endMonth && date <= endDate))))
  );
};

const DatePickerCalendarRoot = styled('div', {
  name: 'ESDatePickerCalendar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({}));

const DatePickerCalendarGrid = styled('div', {
  name: 'ESDatePickerCalendar',
  slot: 'Grid',
  overridesResolver: (props, styles) => styles.grid
})(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  rowGap: '4px'
}));

const DatePickerCalenderDay = styled(
  Typography,
  {}
)(({ theme }) => ({
  color: theme.palette.monoA.A500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40px'
}));

const DatePickerCalendarSeparator = styled(
  'div',
  {}
)(({ theme }) => ({
  height: '1px',
  backgroundColor: theme.palette.monoA.A100,
  marginTop: '8px',
  marginBottom: '16px',

  '&:nth-child(7n)': {
    marginLeft: '-16px'
  },

  '&:nth-child(7n + 1)': {
    marginRight: '-16px'
  }
}));

const DatePickerCalendarDate = styled(
  'div',
  {}
)<{
  ownerState: {
    isCurrentMonth: boolean;
    isToday: boolean;
    year: number;
    month: number;
    date: number;
    selection: DatePickerCalendarProps['selection'];
    hoverDate?: number | null;
  };
}>(({ theme, ownerState }) => {
  const { selection, year, month, date, hoverDate } = ownerState;
  const d = new Date(year, month, date);

  let isSelectedStart = false;
  let isSelectedEnd = false;
  let isBetween = false;

  if (selection) {
    if (selection[0] && isSameDate(new Date(selection[0]), d)) {
      isSelectedStart = true;
    }

    if (selection[1] && isSameDate(new Date(selection[1]), d)) {
      isSelectedEnd = true;
    }

    if (!selection[1] && hoverDate && isSameDate(new Date(year, month, hoverDate), d)) {
      isSelectedEnd = true;
    }

    if (selection[0] && (selection[1] || hoverDate)) {
      const startDate = new Date(selection[0]);
      const endDate = selection[1] ? new Date(selection[1]) : new Date(year, month, hoverDate!);
      isBetween =
        isBetweenDates(startDate, endDate, year, month, date) || isBetweenDates(endDate, startDate, year, month, date);
    }
  }

  const backgroundColor = selection?.[1] ? theme.palette.secondary.A200 : theme.palette.monoA.A50;

  return {
    ...theme.typography.body100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: ownerState.isCurrentMonth ? theme.palette.monoA.A900 : theme.palette.monoA.A500,

    '&:nth-child(7n)': {
      borderTopRightRadius: '20px',
      borderBottomRightRadius: '20px'
    },

    '&:nth-child(7n + 1)': {
      borderTopLeftRadius: '20px',
      borderBottomLeftRadius: '20px'
    },

    '& > span': {
      width: '36px',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '133px',
      ...(ownerState.isToday && {
        border: `2px solid ${theme.palette.monoA.A500}`
      }),
      ...((isSelectedStart || (isSelectedEnd && selection?.[1])) && {
        backgroundColor: theme.palette.secondary[300],
        color: theme.palette.monoB[500]
      }),
      ...(ownerState.isCurrentMonth &&
        hoverDate === date && {
          backgroundColor: theme.palette.monoA.A100,
          backdropFilter: 'blur(40px)'
        })
    },

    ...(isBetween &&
      (ownerState.selection?.[1] || ownerState.hoverDate) && {
        background: backgroundColor
      }),
    ...(isSelectedStart &&
      (ownerState.selection?.[1] || ownerState.hoverDate) && {
        background: `linear-gradient(to right, transparent 50% , ${backgroundColor} 50%)`
      }),
    ...(isSelectedEnd &&
      (ownerState.selection?.[1] || ownerState.hoverDate) && {
        background: `linear-gradient(to left, transparent 50% , ${backgroundColor} 50%)`
      })
  };
});

export const DatePickerCalendar: React.FC<DatePickerCalendarProps> = (inProps) => {
  const {
    className,
    sx,
    year,
    month,
    weekStart = 1,
    selection,
    onSelectionChange,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESDatePickerCalendar'
  });

  const days = useMemo(() => {
    const names = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    for (let i = 0; i < weekStart; i++) {
      names.push(names.shift() || '');
    }
    return names;
  }, [weekStart]);

  const { dates, prevDates, nextDates } = useCalendar(year, month, weekStart);

  const onDateClick = (date: number) => () => {
    if (onSelectionChange) {
      const d = new Date(year, month, date);
      if (!selection || !selection[0] || selection[1]) {
        onSelectionChange([d, null]);
      } else {
        const s = new Date(selection[0]);
        if (s < d) {
          onSelectionChange([s, d]);
        } else {
          onSelectionChange([d, s]);
        }
      }
    }
  };

  const [hover, setHover] = useState<number | null>(null);

  const onMouseLeave = () => {
    setHover(null);
  };

  const onMouseEnter = (date: number) => () => {
    if (selection && selection[0] && !selection[1]) {
      setHover(date);
    }
  };

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <DatePickerCalendarRoot className={clsx(classes.root, className)} sx={sx}>
      <DatePickerCalendarGrid>
        {days.map((day) => (
          <DatePickerCalenderDay key={day} variant="caption">
            {day}
          </DatePickerCalenderDay>
        ))}
      </DatePickerCalendarGrid>
      <DatePickerCalendarSeparator />
      <DatePickerCalendarGrid onMouseLeave={onMouseLeave}>
        {prevDates.map((date) => (
          <DatePickerCalendarDate
            key={date}
            ownerState={{
              isCurrentMonth: false,
              isToday: false,
              year: new Date(year, month - 1, 1).getFullYear(),
              month: new Date(year, month - 1, 1).getMonth(),
              date,
              selection
            }}
          >
            <span>{date}</span>
          </DatePickerCalendarDate>
        ))}
        {dates.map((date) => (
          <DatePickerCalendarDate
            key={date}
            ownerState={{
              isCurrentMonth: true,
              isToday: isSameDate(new Date(), new Date(year, month, date)),
              year,
              month,
              date,
              selection,
              hoverDate: hover
            }}
            onClick={onDateClick(date)}
            onMouseEnter={onMouseEnter(date)}
          >
            <span>{date}</span>
          </DatePickerCalendarDate>
        ))}
        {nextDates.map((date) => (
          <DatePickerCalendarDate
            key={date}
            ownerState={{
              isCurrentMonth: false,
              isToday: false,
              year: new Date(year, month + 1, 1).getFullYear(),
              month: new Date(year, month + 1, 1).getMonth(),
              date,
              selection
            }}
          >
            <span>{date}</span>
          </DatePickerCalendarDate>
        ))}
      </DatePickerCalendarGrid>
    </DatePickerCalendarRoot>
  );
};
