import { ReactNode } from 'react';

import { ChipsClasses } from './Chips.classes';

import { SxProps, Theme } from '@mui/material';

export interface ChipsProps {
  /** Content children. */
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<ChipsClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /** Text for the more button label. */
  labelButtonMore?: string;
  /** Text for the tooltip label. */
  labelTooltip?: string;

  /** Icon for the showMore button. */
  iconChevron?: ReactNode;
}
