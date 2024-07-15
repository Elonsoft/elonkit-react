import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useCallbackThrottle } from './useCallbackThrottle';

const meta: Meta = {
  tags: ['autodocs'],
  title: 'Hooks/useCallbackThrottle',
  parameters: {
    references: ['useCallbackThrottle'],
  },
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: function Render() {
    const [throttledValue, setThrottledValue] = useState('');

    const onChange = useCallbackThrottle((event: React.ChangeEvent<HTMLInputElement>) => {
      setThrottledValue(event.target.value);
    }, 1000);

    return (
      <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '320px' }}>
          <TextField fullWidth label="Value" size="40" onChange={onChange} />
        </Box>

        <Typography component="div" sx={{ marginTop: '8px' }} variant="body200">
          Throttled value: {throttledValue}
        </Typography>
      </div>
    );
  },
};
