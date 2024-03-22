import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { MadeBy } from './MadeBy';

type Args = ComponentProps<typeof MadeBy> & { component?: unknown };

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: MadeBy,
  parameters: {
    references: ['MadeBy']
  },
  argTypes: {
    component: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    },
    text: {
      control: {
        type: 'text'
      }
    }
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args) => {
    return <MadeBy {...args} />;
  }
};
