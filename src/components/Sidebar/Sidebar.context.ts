import { createContext, useContext } from 'react';

export interface SidebarContextValue {
  /** Whether the sidebar should be displayed. */
  open?: boolean;
  /** The color of the component. */
  color?: 'default' | 'primary';
}

export const SidebarContext = createContext<SidebarContextValue | null>(null);

export const useSidebarContext = () => {
  const value = useContext(SidebarContext);

  if (value === null) {
    throw new Error('No provider for SidebarContext');
  }

  return value;
};
