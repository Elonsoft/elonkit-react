import { AutocompleteSearchClasses } from './AutocompleteSearch.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface AutocompleteSearchProps<T> {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AutocompleteSearchClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
}
