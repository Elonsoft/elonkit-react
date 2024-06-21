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
    defaultValue: 50,
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Demo: Story = {
  render: (args) => {
    return (
      <div style={{ height: '200px' }}>
        <Slider {...args} />
      </div>
    );
  },
};

export const Range: Story = {
  render: (args) => {
    return (
      <div style={{ height: '200px' }}>
        <Slider {...args} defaultValue={[10, 50]} />
      </div>
    );
  },
  argTypes: {
    defaultValue: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};
