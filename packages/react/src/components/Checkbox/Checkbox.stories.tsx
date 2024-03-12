import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { Checkbox } from './Checkbox';

type Args = ComponentProps<typeof Checkbox>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Checkbox,
  parameters: {
    references: ['Checkbox']
  },
  argTypes: {
    color: {
      control: {
        type: 'select'
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
    return (
      <Box margin="-1rem">
        <Checkbox {...args}></Checkbox>
        <Box height="10vh" />
      </Box>
    );
  }
};
