import { ComponentProps } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react';

import { Button } from '.';

import { IconChevronDownW400 } from '../../icons';

const getText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Button' : 'Кнопка';
};

type Args = ComponentProps<typeof Button> & {
  TouchRipplePropsCenter?: boolean;
  TouchRipplePropsPressGrowDuration?: number;
  TouchRipplePropsMinimumPressDuration?: number;
};

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Button,
  parameters: {
    references: ['Button', 'ButtonBase']
  },
  argTypes: {
    variant: {
      options: ['text', 'outlined', 'contained'],
      control: { type: 'select' }
    },
    color: {
      options: ['primary', 'secondary', 'tertiary', 'error', 'success', 'monoA', 'monoB', 'white', 'black'],
      control: { type: 'select' }
    },
    size: {
      options: ['16', '20', '24', '32', '40', '48', '56'],
      control: { type: 'select' }
    },
    disableTouchRipple: {
      control: {
        type: 'boolean'
      }
    },
    startIcon: {
      table: {
        disable: true
      }
    },
    endIcon: {
      table: {
        disable: true
      }
    },
    fullWidth: {
      table: {
        disable: true
      }
    },
    TouchRippleProps: {
      table: {
        disable: true
      }
    },
    TouchRipplePropsCenter: {
      table: {
        category: 'TouchRippleProps'
      },
      name: 'center',
      control: {
        type: 'boolean'
      }
    },
    TouchRipplePropsPressGrowDuration: {
      table: {
        category: 'TouchRippleProps'
      },
      name: 'pressGrowDuration',
      control: {
        type: 'number'
      }
    },
    TouchRipplePropsMinimumPressDuration: {
      table: {
        category: 'TouchRippleProps'
      },
      name: 'minimumPressDuration',
      control: {
        type: 'number'
      }
    }
  },
  args: {
    variant: 'contained',
    color: 'tertiary',
    TouchRipplePropsPressGrowDuration: 800,
    TouchRipplePropsMinimumPressDuration: 150
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (
    { TouchRipplePropsCenter, TouchRipplePropsPressGrowDuration, TouchRipplePropsMinimumPressDuration, ...args },
    context
  ) => {
    const text = getText(context);
    const icon =
      args.size === '16' ? (
        <IconChevronDownW400 size="12px" />
      ) : args.size === '20' ? (
        <IconChevronDownW400 size="16px" />
      ) : args.size === '24' ? (
        <IconChevronDownW400 size="20px" />
      ) : (
        <IconChevronDownW400 />
      );

    const props = {
      ...args,
      TouchRippleProps: {
        center: TouchRipplePropsCenter,
        pressGrowDuration: TouchRipplePropsPressGrowDuration,
        minimumPressDuration: TouchRipplePropsMinimumPressDuration
      }
    };

    return (
      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridAutoFlow: 'column',
          justifyContent: 'flex-start',
          marginBottom: '16px'
        }}
      >
        <Button {...props}>{text}</Button>
        <Button {...props} endIcon={icon} startIcon={icon}>
          {text}
        </Button>
        <Button {...props}>{icon}</Button>
      </div>
    );
  }
};
