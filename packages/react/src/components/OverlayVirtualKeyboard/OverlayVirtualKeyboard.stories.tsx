import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Box, OutlinedInput } from '@mui/material';

import { OverlayVirtualKeyboard } from './OverlayVirtualKeyboard';

type Args = ComponentProps<typeof OverlayVirtualKeyboard>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: OverlayVirtualKeyboard,
  parameters: {
    references: ['OverlayVirtualKeyboard'],
  },
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: () => {
    return (
      <OverlayVirtualKeyboard>
        <OutlinedInput />
        <Box sx={{ height: '64px', width: '340px', backgroundColor: 'primary.300', position: 'fixed', bottom: 0 }} />
      </OverlayVirtualKeyboard>
    );
  },
};
