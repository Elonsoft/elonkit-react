import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { RibbonBadge } from './RibbonBadge';

type Args = ComponentProps<typeof RibbonBadge> & { component?: unknown };

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: RibbonBadge,
  parameters: {
    references: ['RibbonBadge']
  },
  argTypes: {
    component: {
      table: {
        disable: true
      }
    },
    orientation: {
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
    orientation: 'left',
    color: 'success',
    children: 'text'
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: (args) => {
    return (
      <Box margin="-1rem">
        <RibbonBadge {...args}></RibbonBadge>
        <Box height="10vh" />
      </Box>
    );
  }
};
