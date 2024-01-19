import { createContext, useContext } from 'react';

import type { ToggleButtonGroupProps } from './ToggleButtonGroup.types';

export interface ToggleButtonGroupContextType {
  className?: string;
  onChange?: ToggleButtonGroupProps['onChange'];
  value?: ToggleButtonGroupProps['value'];
  disabled?: ToggleButtonGroupProps['disabled'];
  size?: ToggleButtonGroupProps['size'];
  fullWidth?: ToggleButtonGroupProps['fullWidth'];
}

export const ToggleButtonGroupContext = createContext<ToggleButtonGroupContextType>({});

export const useToggleButtonGroupContext = () => {
  const value = useContext(ToggleButtonGroupContext);

  if (value === null) {
    throw new Error('Not provider for ToggleButtonGroupContext.');
  }

  return value;
};
