import { createContext, useContext } from 'react';

export interface SidebarMenuContextValue {
  /** The array of open items. */
  openItems: string[];
  /** How item should be opened. */
  behaviour?: 'click' | 'hover';
  /** Callback fired when nested menu is close. */
  onOpen: (id: string) => void;
  /** Callback fired when nested menu is open. */
  onClose: (id: string) => void;
}

export const SidebarMenuContext = createContext<SidebarMenuContextValue | null>(null);

export const useSidebarMenuContext = () => {
  const value = useContext(SidebarMenuContext);

  if (value === null) {
    throw new Error('No provider for SidebarMenuContext');
  }

  return value;
};
