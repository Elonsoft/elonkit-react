/* eslint-disable storybook/default-exports */

import { Story } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { useDragOver } from './useDragOver';

export const Demo: Story = () => {
  const { isDragOver, ...props } = useDragOver();

  return (
    <Typography
      component="div"
      sx={(theme) => ({
        padding: '16px',
        border: `1px dashed ${theme.vars.palette.monoA.A500}`,
        borderRadius: '2px',
        backgroundColor: isDragOver ? theme.vars.palette.monoA.A50 : 'transparent'
      })}
      variant="body100"
      {...props}
    >
      Drag&apos;n&apos;Drop
    </Typography>
  );
};
