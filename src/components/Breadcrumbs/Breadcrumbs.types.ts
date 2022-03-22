import { ElementType } from 'react';

import { BreadcrumbsClasses } from './Breadcrumbs.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface BreadcrumbsProps {
  /**
   * Custom separator node.
   * @default 'ChevronLeftSeparatorIcon'
   */
  separator?: Node;

  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /**
   * Component used for the root node.
   * @default 'nav'
   */
  component?: ElementType<any>;

  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<BreadcrumbsClasses>;
}
