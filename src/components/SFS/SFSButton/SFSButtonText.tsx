import { ReactNode } from 'react';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const SFSButtonTextRoot = styled(Typography)(({ theme }) => ({
  marginRight: '4px',

  [theme.breakpoints.down('tabletXS')]: {
    display: 'none'
  }
}));

export const SFSButtonText = ({ children }: { children: ReactNode }) => (
  <SFSButtonTextRoot color="monoA.A550" variant="body100">
    {children}
  </SFSButtonTextRoot>
);
