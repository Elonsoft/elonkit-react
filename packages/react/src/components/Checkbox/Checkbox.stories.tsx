import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

type Args = ComponentProps<typeof Checkbox>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Checkbox,
  parameters: {
    references: ['Checkbox']
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
    indeterminateIcon: {
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
    return <Checkbox {...args}></Checkbox>;
  }
};
