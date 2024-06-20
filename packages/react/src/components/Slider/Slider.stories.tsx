import { Meta, StoryObj } from '@storybook/react';

import { Slider } from '.';

const meta: Meta<typeof Slider> = {
  tags: ['autodocs'],
  component: Slider,
  parameters: {
    references: ['Slider'],
  },
  argTypes: {
    name: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    autoFocus: {
      table: {
        disable: true,
      },
    },
    tabIndex: {
      table: {
        disable: true,
      },
    },
    'aria-label': {
      table: {
        disable: true,
      },
    },
    'aria-labelledby': {
      table: {
        disable: true,
      },
    },
    'aria-valuetext': {
      table: {
        disable: true,
      },
    },
    components: {
      table: {
        disable: true,
      },
    },
    componentsProps: {
      table: {
        disable: true,
      },
    },
    getAriaLabel: {
      table: {
        disable: true,
      },
    },
    getAriaValueText: {
      table: {
        disable: true,
      },
    },
    step: {
      control: { type: 'number' },
    },
    marks: {
      control: { type: 'boolean' },
    },
    defaultValue: {
      control: { type: 'number' },
    },
    value: {
      control: { type: 'number' },
    },
    width: {
      control: { type: 'number' },
    },
  },
  args: {
    value: 50,
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Demo: Story = {
  render: (args) => {
    return <Slider {...args} />;
  },
};
