import { createContext, useContext } from 'react';

export interface BottomSheetContextValue {
  isCollapsed: boolean;
  isScrollVisible: boolean;
  isFullHeight: boolean;
}

export const BottomSheetContext = createContext<BottomSheetContextValue | null>(null);

export const useBottomSheetContext = () => {
  const value = useContext(BottomSheetContext);

  if (value === null) {
    throw new Error('No provider for BottomSheetContext.');
  }

  return value;
};
