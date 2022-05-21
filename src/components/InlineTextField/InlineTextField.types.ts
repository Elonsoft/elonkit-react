import { InlineTextFieldClasses } from './InlineTextField.classes';

import { SxProps, Theme } from '@mui/material/styles';
import { TypographyProps } from '@mui/material/Typography';

export interface InlineTextFieldProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<InlineTextFieldClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** The text content when input is hidden. */
  value: React.ReactNode;
  variant?: TypographyProps['variant'];
}
