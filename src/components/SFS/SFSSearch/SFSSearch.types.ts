import { SxProps, Theme } from '@mui/material';

export interface SFSSearchProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<any>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /** Callback fired when the value is changed. */
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  /** The value of the input element, required for a controlled component. */
  value: string;
  /** Callback fired when the close button is clicked. If prop is passed close button will appear */
  onCloseButton?: () => void;
}
