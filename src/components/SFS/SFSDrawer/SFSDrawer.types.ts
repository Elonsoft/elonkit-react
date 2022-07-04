import { ReactNode } from 'react';

export interface ISFSDrawerProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}
