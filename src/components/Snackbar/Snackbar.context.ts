import { createContext, useContext } from 'react';

import { CustomSnackbarProps } from './Snackbar.types';

export interface SnackbarContextValue {
  enqueueSnackbar: (message: string, options?: CustomSnackbarProps) => number;
  onCloseSnackbar: (key?: number) => void;
}

export const SnackbarContext = createContext<SnackbarContextValue | null>(null);

export const useSnackbarContext = () => {
  const value = useContext(SnackbarContext);

  if (value === null) {
    throw new Error('No provider for SnackbarContext');
  }

  return value;
};
