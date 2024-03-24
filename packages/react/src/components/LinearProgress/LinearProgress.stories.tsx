import { Meta, StoryObj } from '@storybook/react';

import { LinearProgress } from '.';

const meta: Meta<typeof LinearProgress> = {
  tags: ['autodocs'],
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
type Story = StoryObj<typeof LinearProgress>;

export const Demo: Story = {
  render: (args) => {
    return <LinearProgress {...args} />;
  }
};
