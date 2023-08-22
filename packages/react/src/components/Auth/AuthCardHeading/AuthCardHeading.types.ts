import { ReactNode } from 'react';

import { AuthCardHeadingClasses } from './AuthCardHeading.classes';

import { SxProps, Theme } from '@mui/material/styles';
import { TypographyProps } from '@mui/material/Typography';

export type AuthCardHeadingProps = {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AuthCardHeadingClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
} & TypographyProps;
