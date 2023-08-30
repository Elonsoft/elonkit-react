import { ReactNode } from 'react';

import { AuthLinkClasses } from './AuthLink.classes';

import { SxProps, Theme } from '@mui/material/styles';

import { LinkProps } from '../../Link';

export type AuthLinkProps = {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AuthLinkClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
} & LinkProps;
