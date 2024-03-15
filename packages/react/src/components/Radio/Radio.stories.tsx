import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Radio } from './Radio';

type Args = ComponentProps<typeof Radio>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Radio,
  parameters: {
    references: ['Radio']
  },
  argTypes: {
    checkedIcon: {
      control: {
        type: '-'
      }
    },
    icon: {
      control: {
        type: '-'
      }
    },
    inputProps: {
      control: {
        type: '-'
      }
    },
    inputRef: {
      control: {
        type: '-'
      }
    },
    value: {
      control: {
        type: '-'
      }
    }
  },
  args: {
    color: 'primary'
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args) => {
    return <Radio {...args}></Radio>;
  }
};
