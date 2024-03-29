/* eslint-disable storybook/default-exports */

import { useState } from 'react';

import { Story } from '@storybook/react';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useValueDebounce } from './useValueDebounce';

export const Demo: Story = () => {
  const [value, setValue] = useState('');
  const [leading, setLeading] = useState(false);
  const [trailing, setTrailing] = useState(true);

  const debouncedValue = useValueDebounce(value, 1000, { leading, trailing });

  return (
    <div>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '320px' }}>
        <TextField fullWidth label="Value" size="40" value={value} onChange={(event) => setValue(event.target.value)} />

        <FormControlLabel
          control={<Checkbox checked={leading} onChange={(event) => setLeading(event.target.checked)} />}
          label="Leading"
        />

        <FormControlLabel
          control={<Checkbox checked={trailing} onChange={(event) => setTrailing(event.target.checked)} />}
          label="Trailing"
        />
      </Box>

      <Typography component="div" sx={{ marginTop: '8px' }} variant="body200">
        Debounced value: {debouncedValue}
      </Typography>
    </div>
  );
};
