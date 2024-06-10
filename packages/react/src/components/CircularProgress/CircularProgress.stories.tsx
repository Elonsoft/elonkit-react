import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@mui/material';

import { CircularProgress } from '.';

const meta: Meta<typeof CircularProgress> = {
  tags: ['autodocs'],
  component: CircularProgress,
  parameters: {
    references: ['CircularProgress']
  },
  argTypes: {
    variant: {
      options: ['determinate', 'indeterminate'],
      control: {
        type: 'select'
      }
    },
    color: {
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit'],
      control: {
        type: 'select'
      }
    }
  },
  args: {
    variant: 'indeterminate',
    color: 'primary',
    value: 20
  }
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Demo: Story = {
  render: (args) => {
    return (
      <CircularProgress {...args}>
        <Typography
          color="monoA.A700"
          component="div"
          variant="caption"
        >{`${Math.round(args.value ?? 0)}%`}</Typography>
      </CircularProgress>
    );
  }
};
