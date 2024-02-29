import { Meta, StoryObj } from '@storybook/react';

import { Box } from '@mui/material';

import { Avatar } from '.';

import { IconAccountLc } from '../../icons';

const meta: Meta<typeof Avatar> = {
  tags: ['autodocs'],
  component: Avatar,
  parameters: {
    references: ['Avatar']
  },
  argTypes: {
    children: {
      control: {
        type: 'text'
      }
    },
    variant: {
      control: {
        type: 'select'
      }
    },
    size: {
      control: {
        type: 'number'
      }
    },
    sx: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    size: 40,
    variant: 'square'
  }
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Demo: Story = {
  render: ({ children, src, ...args }) => {
    return (
      <Box display="flex" flexDirection="column" gap="10px">
        <Avatar src={src} {...args}>
          {children}
        </Avatar>
        <Avatar src="./swiper/1.png" {...args}>
          {children}
        </Avatar>
        <Avatar {...args}>
          <IconAccountLc size="100%" />
        </Avatar>
      </Box>
    );
  }
};
