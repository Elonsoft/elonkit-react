import { TextFieldProps, TypographyProps } from '@mui/material';

export type InlineTextFieldProps = Omit<TextFieldProps, 'ownerState'> & {
  typography?: Exclude<TypographyProps['variant'], 'inherit'>;
};
