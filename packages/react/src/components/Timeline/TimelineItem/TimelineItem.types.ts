/* eslint-disable @typescript-eslint/ban-types */
import { ReactNode } from 'react';

import { TimelineItemClasses } from './TimelineItem.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface TimelineItemProps {
  children?: ReactNode;

  /** Override or extend the styles applied to the component. */
  classes?: Partial<TimelineItemClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** The custom opposite content. */
  oppositeContent?: ReactNode;

  /** The custom opposite content.
   * @default 'xs'
   * */
  weight?: 'xs' | 'sm';

  /** The custom header node. */
  header?: ReactNode;

  /** The custom icon node. */
  icon?: ReactNode;
}
