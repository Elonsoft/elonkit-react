import { ReactNode } from 'react';

import { AutocompleteClasses } from './Autocomplete.classes';

import { SxProps, Theme } from '@mui/material/styles';
import { OutlinedInputProps, TextFieldProps } from '@mui/material';

import { AutocompleteMenuProps } from '../AutocompleteMenu';

export type AutocompleteProps<T> = {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AutocompleteClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** If true, it is possible to enter a search string in the input itself. */
  inlineSearch?: boolean;

  /** If true, the popper is opened. */
  open?: boolean;
  /** Callback fired when the menu requests to be opened. */
  onOpen?: () => void;
  /** Callback fired when the menu requests to be closed. */
  onClose?: () => void;

  /** Callback fired when the input loses focus. */
  onBlur?: (event: { target: { name?: string } }) => void;

  /** Props applied to the menu component. */
  MenuProps?: Partial<
    Omit<
      AutocompleteMenuProps<T>,
      | 'value'
      | 'onChange'
      | 'multiple'
      | 'getDisplayValue'
      | 'options'
      | 'getOptionLabel'
      | 'getOptionValue'
      | 'getOptionDisabled'
      | 'groupBy'
    >
  >;
  /** Props applied to the search field component. If present, shows the component. */
  SearchProps?: Partial<TextFieldProps>;
} & (
  | {
      multiple?: false;
      value: T | null;
      onChange?: (value: T | null) => void;
      getDisplayValue?: (value: T | null) => ReactNode;
    }
  | {
      multiple: true;
      value: T[];
      onChange?: (value: T[]) => void;
      getDisplayValue?: (value: T[]) => ReactNode;
    }
) &
  Pick<
    AutocompleteMenuProps<T>,
    | 'options'
    | 'getOptionLabel'
    | 'getOptionValue'
    | 'getOptionDisabled'
    | 'groupBy'
    | 'loading'
    | 'header'
    | 'footer'
    | 'onLoadMore'
  > &
  Pick<
    OutlinedInputProps,
    | 'aria-describedby'
    | 'autoFocus'
    | 'disabled'
    | 'endAdornment'
    | 'error'
    | 'fullWidth'
    | 'id'
    | 'inputProps'
    | 'inputRef'
    | 'label'
    | 'name'
    | 'placeholder'
    | 'required'
    | 'size'
    | 'startAdornment'
  >;
