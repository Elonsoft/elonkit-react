import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { LinearProgress } from './LinearProgress';

type Args = ComponentProps<typeof LinearProgress>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  title: 'LinearProgress',
  component: LinearProgress,
  parameters: {
    references: ['LinearProgress']
  },
  argTypes: {
    variant: {
      control: {
        type: 'select'
      }
    },
    color: {
      control: {
        type: 'select'
      }
    },
    valueBuffer: {
      control: {
        type: 'number'
      }
    }
  },
  args: {
    variant: 'indeterminate',
    color: 'primary',
    valueBuffer: 50,
    value: 20
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args) => {
    return <LinearProgress {...args} />;
  }
};
