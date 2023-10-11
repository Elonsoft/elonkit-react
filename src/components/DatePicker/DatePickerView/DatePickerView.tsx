import { useMemo, useState } from 'react';

import { DatePickerViewProps } from './DatePickerView.types';

import clsx from 'clsx';
import { getDatePickerViewUtilityClass } from './DatePickerView.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { IconChevronLeft, IconChevronRight, IconMenuDown, IconMenuUp } from '../../../icons';
import { useDatePickerContext } from '../DatePicker.context';
import { DatePickerCalendar } from '../DatePickerCalendar';

type DatePickerViewOwnerState = {
  classes?: DatePickerViewProps['classes'];
};

const useUtilityClasses = (ownerState: DatePickerViewOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getDatePickerViewUtilityClass, classes);
};

const DatePickerViewRoot = styled('div', {
  name: 'ESDatePickerView',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({}));

const DatePickerViewHead = styled('div', {
  name: 'ESDatePickerView',
  slot: 'Head',
  overridesResolver: (props, styles) => styles.head
})(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '8px'
}));

const DatePickerViewTitle = styled(Typography, {
  name: 'ESDatePickerView',
  slot: 'Title',
  overridesResolver: (props, styles) => styles.title
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: theme.palette.monoA.A900,
  paddingLeft: '8px'
}));

const DatePickerViewIcon = styled('div', {
  name: 'ESDatePickerView',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon
})(({ theme }) => ({
  display: 'flex',
  color: theme.palette.monoA.A600,
  marginLeft: '8px'
}));

const DatePickerViewButtons = styled('div', {
  name: 'ESDatePickerView',
  slot: 'Buttons',
  overridesResolver: (props, styles) => styles.buttons
})(() => ({
  display: 'flex',
  gap: '8px'
}));

const DatePickerViewChips = styled('div', {
  name: 'ESDatePickerView',
  slot: 'Chips',
  overridesResolver: (props, styles) => styles.chips
})(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  rowGap: '24px',
  columnGap: '4px',
  padding: '12px 2px'
}));

const DatePickerViewChip = styled(Typography, {
  name: 'ESDatePickerView',
  slot: 'Chip',
  overridesResolver: (props, styles) => styles.chip
})<{ ownerState: { isSelected: boolean; isCurrent: boolean } }>(({ theme, ownerState }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.monoA.A900,
  height: '32px',
  borderRadius: '133px',

  ...(ownerState.isSelected && {
    backgroundColor: theme.palette.monoA.A50
  }),

  ...(ownerState.isCurrent && {
    backgroundColor: theme.palette.primary[300],
    color: theme.palette.monoB[500]
  })
}));

export const DatePickerView: React.FC<DatePickerViewProps> = (inProps) => {
  const { className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESDatePickerView'
  });

  const { year, setYear, month, setMonth, view, setView, value, weekStart, onSelectionChange } = useDatePickerContext();

  const onPrevYear = () => {
    setYear(year - 1);
  };

  const onNextYear = () => {
    setYear(year + 1);
  };

  const onPrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth((month - 1) as any);
    }
  };

  const onNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth((month + 1) as any);
    }
  };

  const onMenuClick = () => {
    setView(view === 'date' ? 'year' : 'date');
  };

  const onYearClick = (year: number) => () => {
    setYear(year);
    setView('month');
  };

  const onMonthClick = (month: number) => () => {
    setMonth(month as any);
    setView('date');
  };

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <DatePickerViewRoot className={clsx(classes.root, className)} sx={sx}>
      {view === 'year' && (
        <>
          <DatePickerViewHead>
            <DatePickerViewTitle variant="body200Bold" onClick={onMenuClick}>
              2016 – 2035
              <DatePickerViewIcon>
                <IconMenuDown />
              </DatePickerViewIcon>
            </DatePickerViewTitle>
            <DatePickerViewButtons>
              <IconButton aria-label="Предыдущие года">
                <IconChevronLeft />
              </IconButton>
              <IconButton aria-label="Следующие года">
                <IconChevronRight />
              </IconButton>
            </DatePickerViewButtons>
          </DatePickerViewHead>
          <DatePickerViewChips>
            {[
              2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032,
              2033, 2034, 2035
            ].map((y) => (
              <DatePickerViewChip
                key={y}
                ownerState={{ isSelected: y === year, isCurrent: y === new Date().getFullYear() }}
                variant="body100"
                onClick={onYearClick(y)}
              >
                {y}
              </DatePickerViewChip>
            ))}
          </DatePickerViewChips>
        </>
      )}
      {view === 'month' && (
        <>
          <DatePickerViewHead>
            <DatePickerViewTitle variant="body200Bold" onClick={onMenuClick}>
              {year}
              <DatePickerViewIcon>
                <IconMenuUp />
              </DatePickerViewIcon>
            </DatePickerViewTitle>
            <DatePickerViewButtons>
              <IconButton aria-label="Предыдущий год" onClick={onPrevYear}>
                <IconChevronLeft />
              </IconButton>
              <IconButton aria-label="Следующий год" onClick={onNextYear}>
                <IconChevronRight />
              </IconButton>
            </DatePickerViewButtons>
          </DatePickerViewHead>
          <DatePickerViewChips>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((m) => (
              <DatePickerViewChip
                key={m}
                ownerState={{ isSelected: m === month, isCurrent: year === new Date().getFullYear() && month === m }}
                variant="body100"
                onClick={onMonthClick(month)}
              >
                {m}
              </DatePickerViewChip>
            ))}
          </DatePickerViewChips>
        </>
      )}
      {view === 'date' && (
        <>
          <DatePickerViewHead>
            <DatePickerViewTitle variant="body200Bold" onClick={onMenuClick}>
              {month} {year}
              <DatePickerViewIcon>
                <IconMenuDown />
              </DatePickerViewIcon>
            </DatePickerViewTitle>
            <DatePickerViewButtons>
              <IconButton aria-label="Предыдущий месяц" onClick={onPrevMonth}>
                <IconChevronLeft />
              </IconButton>
              <IconButton aria-label="Следующий месяц" onClick={onNextMonth}>
                <IconChevronRight />
              </IconButton>
            </DatePickerViewButtons>
          </DatePickerViewHead>
          <DatePickerCalendar
            month={month}
            selection={value}
            weekStart={weekStart}
            year={year}
            onSelectionChange={onSelectionChange}
          />
        </>
      )}
    </DatePickerViewRoot>
  );
};
