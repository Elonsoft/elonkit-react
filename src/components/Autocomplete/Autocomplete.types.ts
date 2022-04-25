import React from 'react';

import { AutocompleteClasses } from './Autocomplete.classes';

import { SxProps, Theme } from '@mui/material/styles';

export type AutocompleteProps<T> = {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AutocompleteClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  children: React.ReactNode;

  debounce?: number;

  getOptions: (search: string, skip: number) => Promise<T[]> | [Promise<T[]>, () => void];
  getOptionValue: (option: T) => number | string;
  getOptionLabel: (option: T) => number | string;

  id?: string;
  name?: string;
} & (
  | {
      value: T | null;
      onChange?: (value: T) => void;
      multiple?: false;
    }
  | {
      value: T[];
      onChange?: (value: T[]) => void;
      multiple: true;
    }
);
