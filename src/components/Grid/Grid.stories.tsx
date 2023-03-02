import { Story } from '@storybook/react';

import { Grid } from './Grid';

export const Demo: Story = () => {
  return (
    <Grid container gap={10}>
      <Grid item span={12} tabletXS={6} desktopXS={1} sx={{ border: '1px solid #000' }}>
        span 1
      </Grid>
      <Grid item span={12} tabletXS={6} desktopXS={2} sx={{ border: '1px solid #000' }}>
        span 2
      </Grid>
      <Grid item span={12} tabletXS={6} desktopXS={3} sx={{ border: '1px solid #000' }}>
        span 3
      </Grid>
      <Grid item span={12} tabletXS={6} desktopXS={4} sx={{ border: '1px solid #000' }}>
        span 4
      </Grid>
      <Grid item span={12} tabletXS={6} desktopXS={1} sx={{ border: '1px solid #000' }}>
        span 5
      </Grid>
    </Grid>
  );
};
