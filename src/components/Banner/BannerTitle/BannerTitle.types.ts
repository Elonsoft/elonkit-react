import { ReactNode } from 'react';

import { BannerTitleClasses } from './BannerTitle.classes';

import { SxProps, Theme } from '@mui/material';

export interface BannerTitleProps {
  children?: ReactNode;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<BannerTitleClasses>;
  /** Class applied to the root element. */
  className?: string;
}
