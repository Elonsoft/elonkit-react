import { Args, ReactFramework, Story, StoryContext } from '@storybook/react';

import Box from '@mui/material/Box';

import { DatePicker, DatePickerFooter, DatePickerPresets, DatePickerView } from '.';

export const Demo: Story = (args, context) => {
  return (
    <DatePicker {...args} weekStart={+args.weekStart || 1}>
      {(value) => (
        <>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '184px 1fr'
            }}
          >
            <Box
              sx={(theme) => ({
                padding: '8px',
                borderRight: `1px solid ${theme.palette.monoA.A100}`
              })}
            >
              <DatePickerPresets />
            </Box>
            <Box
              sx={{
                padding: '16px',
                position: 'relative'
              }}
            >
              <DatePickerView />
            </Box>
          </Box>
          <DatePickerFooter />
        </>
      )}
    </DatePicker>
  );
};
