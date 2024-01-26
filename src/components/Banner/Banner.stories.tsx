import { ComponentProps } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Banner, BannerActions, BannerTitle } from '.';

import { IconCloseW600 } from '../../icons';

const getText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'This is an alert' : 'Это предупреждение';
};

const getButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Button' : 'Кнопка';
};

const getCancelButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Cancel' : 'Отмена';
};

type Args = ComponentProps<typeof Banner> & { title?: string; text?: string; actions?: boolean };

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Banner,
  parameters: {
    references: ['Banner', 'BannerActions', 'BannerTitle']
  },
  argTypes: {
    color: {
      control: { type: 'select' }
    },
    severity: {
      control: { type: 'select' }
    },
    variant: {
      control: { type: 'select' }
    },
    icon: {
      defaultValue: true,
      control: {
        type: 'boolean'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    },
    text: {
      control: {
        type: 'text'
      }
    },
    breakpoint: {
      control: {
        type: 'number'
      }
    },
    action: {
      control: {
        type: 'boolean'
      }
    },
    actions: {
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    icon: true,
    action: false,
    actions: false
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args, context) => {
    return (
      <Box margin="-1rem">
        <Banner
          action={
            args.action ? (
              <Button color={args.variant === 'monoB' || args.color === 'monoA' ? 'tertiary' : 'white'} size="32">
                <IconCloseW600
                  sx={{ color: args.variant === 'monoB' || args.color === 'monoA' ? 'monoA.A500' : 'inherit' }}
                />
              </Button>
            ) : null
          }
          actions={
            args.actions ? (
              <BannerActions>
                <Button
                  color={args.variant === 'monoB' || args.color === 'monoA' ? 'tertiary' : 'white'}
                  size="32"
                  sx={{ mr: '8px' }}
                  variant="contained"
                >
                  {getButtonText(context)}
                </Button>
                <Button
                  color={args.variant === 'monoB' || args.color === 'monoA' ? 'tertiary' : 'white'}
                  size="32"
                  variant="text"
                >
                  {getCancelButtonText(context)}
                </Button>
              </BannerActions>
            ) : null
          }
          breakpoint={args.breakpoint}
          color={args.color}
          icon={args.icon ? undefined : false}
          severity={args.severity}
          variant={args.variant}
        >
          {!!args.title && <BannerTitle>{args.title}</BannerTitle>}
          {args.text || getText(context)}
        </Banner>
      </Box>
    );
  }
};
