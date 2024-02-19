import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

type Args = ComponentProps<typeof Badge> & { component?: unknown };

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Badge,
  parameters: {
    references: ['Badge']
  },
  argTypes: {
    component: {
      table: {
        disable: true
      }
    },
    size: {
      control: {
        type: 'select'
      }
    },
    color: {
      control: {
        type: 'select'
      }
    },
    children: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    size: '24',
    color: 'monoA'
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args) => {
    return <Badge {...args}></Badge>;
  }
};
