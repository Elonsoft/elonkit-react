import { Story } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { useDragOver } from './useDragOver';

export const Demo: Story = () => {
  const { isDragOver, ...props } = useDragOver();

  return (
    <Typography
      component="div"
      variant="body100"
      sx={(theme) => ({
        padding: '16px',
        border: `1px dashed ${theme.palette.monoA.A500}`,
        borderRadius: '2px',
        backgroundColor: isDragOver ? theme.palette.monoA.A50 : 'transparent'
      })}
      {...props}
    >
      Drag&apos;n&apos;Drop
    </Typography>
  );
};
