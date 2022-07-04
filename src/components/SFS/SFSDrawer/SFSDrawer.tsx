import { ISFSDrawerProps } from './SFSDrawer.types';

import Drawer from '@mui/material/Drawer';

export const SFSDrawer = ({ children, open, onClose }: ISFSDrawerProps) => (
  <Drawer anchor="right" open={open} onClose={onClose}>
    {children}
  </Drawer>
);
