import { createContext, useContext } from 'react';

export interface SidenavContextValue {
  id: string | null;
  open?: boolean;
}

export const SidenavContext = createContext<SidenavContextValue | null>(null);

export const useSidenavContext = () => {
  const value = useContext(SidenavContext);

  if (value === null) {
    throw new Error('No provider for SidenavContext');
  }

  return value;
};
