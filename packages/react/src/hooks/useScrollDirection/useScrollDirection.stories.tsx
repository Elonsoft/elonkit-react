import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import { useScrollDirection } from './useScrollDirection';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useScrollDirection',
  parameters: {
    references: ['useScrollDirection'],
    docs: {
      story: { inline: false }
    }
  }
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const { scrollDirection } = useScrollDirection();

    return (
      <>
        <Typography sx={{ position: 'fixed' }} variant="body100">
          Scroll direction: <b>{scrollDirection ? scrollDirection : `the page hasn't been scrolled`}</b>.
        </Typography>
        <Box sx={{ height: '150vh' }} />
      </>
    );
  }
};
