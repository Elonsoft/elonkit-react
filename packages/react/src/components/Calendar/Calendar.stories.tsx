import { useCallback, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { Calendar, CalendarHead } from '.';

import { useDateAdapterContext } from '../DateAdapter';

const useRangeDatePicker = () => {
  const [selection, setSelection] = useState<[Date, Date | null] | null>(null);
  const [hover, setHover] = useState<Date | null>(null);

  const onSelectionChange = useCallback(
    (date: Date) => {
      if (!selection || !selection[0] || selection[1]) {
        setSelection([date, null]);
      } else {
        const s = new Date(selection[0]);
        setHover(null);
        if (s < date) {
          setSelection([s, date]);
        } else {
          setSelection([date, s]);
        }
      }
    },
    [selection]
  );

  const onHover = (hover: Date | null) => {
    if (selection && selection[0] && !selection[1]) {
      setHover(hover);
    }
  };

  const onHoverDelete = () => {
    setHover(null);
  };

  return { selection, hover, onSelectionChange, onHover, onHoverDelete };
};

const meta: Meta<typeof Calendar> = {
  tags: ['autodocs'],
  component: Calendar,
  parameters: {
    references: ['Calendar', 'CalendarButton', 'CalendarHead']
  },
  argTypes: {
    selection: {
      table: {
        disable: true
      }
    },
    hover: {
      table: {
        disable: true
      }
    },
    getButtonDisabled: {
      table: {
        disable: true
      }
    },
    getButtonTooltipProps: {
      table: {
        disable: true
      }
    }
  },
  args: {
    year: 2024,
    month: 1,
    weekStart: 1
  }
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Demo: Story = {
  render: function Render(args) {
    const [selection, setSelection] = useState<[Date, Date | null] | null>(null);

    const onSelectionChange = useCallback(
      (date: Date) => {
        setSelection([date, null]);
      },
      [selection]
    );

    return (
      <Box sx={(theme) => ({ borderRadius: '8px', boxShadow: theme.palette.shadow.down[600], maxWidth: '400px' })}>
        <CalendarHead weekStart={args.weekStart} />
        <Calendar
          month={args.month}
          rows={args.rows}
          selection={selection}
          showNextMonth={args.showNextMonth}
          showPrevMonth={args.showPrevMonth}
          weekStart={args.weekStart}
          year={args.year}
          onSelectionChange={onSelectionChange}
        />
      </Box>
    );
  }
};

/** We can select a range of dates. */
export const Range: Story = {
  render: function Render(args) {
    const { selection, hover, onSelectionChange, onHover, onHoverDelete } = useRangeDatePicker();

    return (
      <Box
        sx={(theme) => ({ borderRadius: '8px', boxShadow: theme.palette.shadow.down[600], maxWidth: '400px' })}
        onMouseLeave={onHoverDelete}
      >
        <CalendarHead weekStart={args.weekStart} />
        <Calendar
          hover={hover}
          month={args.month}
          rows={args.rows}
          selection={selection}
          showNextMonth={args.showNextMonth}
          showPrevMonth={args.showPrevMonth}
          weekStart={args.weekStart}
          year={args.year}
          onHover={onHover}
          onSelectionChange={onSelectionChange}
        />
      </Box>
    );
  }
};

/** We can use multiple calendars side-by-side. */
export const DualRange: Story = {
  render: function Render(args) {
    const { selection, hover, onSelectionChange, onHover, onHoverDelete } = useRangeDatePicker();

    return (
      <Box
        sx={(theme) => ({
          borderRadius: '8px',
          boxShadow: theme.palette.shadow.down[600],
          maxWidth: '800px',
          display: 'flex'
        })}
        onMouseLeave={onHoverDelete}
      >
        <Box flex="1" sx={(theme) => ({ borderRight: `1px solid ${theme.palette.monoA.A100}` })}>
          <CalendarHead weekStart={args.weekStart} />
          <Calendar
            showPrevMonth
            hover={hover}
            month={1}
            rows={args.rows}
            selection={selection}
            weekStart={args.weekStart}
            year={2024}
            onHover={onHover}
            onSelectionChange={onSelectionChange}
          />
        </Box>
        <Box flex="1">
          <CalendarHead weekStart={args.weekStart} />
          <Calendar
            showNextMonth
            hover={hover}
            month={2}
            rows={args.rows}
            selection={selection}
            weekStart={args.weekStart}
            year={2024}
            onHover={onHover}
            onSelectionChange={onSelectionChange}
          />
        </Box>
      </Box>
    );
  }
};

/** We can disable certain dates and show tooltips. */
export const DisabledAndTooltips: Story = {
  render: function Render(args, context) {
    const locale = (context.globals.locale || 'en') as 'en' | 'ru';

    const { adapter } = useDateAdapterContext();
    const { selection, hover, onSelectionChange, onHover, onHoverDelete } = useRangeDatePicker();

    return (
      <Box
        sx={(theme) => ({ borderRadius: '8px', boxShadow: theme.palette.shadow.down[600], maxWidth: '400px' })}
        onMouseLeave={onHoverDelete}
      >
        <CalendarHead weekStart={args.weekStart} />
        <Calendar
          getButtonDisabled={(date) => {
            if (
              (date.getFullYear() === 2024 && date.getMonth() === 1 && date.getDate() === 9) ||
              (date.getFullYear() === 2024 && date.getMonth() === 0 && date.getDate() === 30)
            ) {
              return true;
            }
            return false;
          }}
          getButtonTooltipProps={(date) => {
            if (
              (date.getFullYear() === 2024 && date.getMonth() === 1 && date.getDate() === 9) ||
              (date.getFullYear() === 2024 && date.getMonth() === 0 && date.getDate() === 30)
            ) {
              return {
                title: locale === 'ru' ? 'Дата уже забронирована' : 'The date is already booked'
              };
            }
            if (selection && selection[0] && !selection[1] && hover && adapter?.isSameDay(date, hover)) {
              return {
                title: locale === 'ru' ? 'N суток' : 'N days'
              };
            }
            return {};
          }}
          hover={hover}
          month={args.month}
          rows={args.rows}
          selection={selection}
          showNextMonth={args.showNextMonth}
          showPrevMonth={args.showPrevMonth}
          weekStart={args.weekStart}
          year={args.year}
          onHover={onHover}
          onSelectionChange={onSelectionChange}
        />
      </Box>
    );
  }
};
