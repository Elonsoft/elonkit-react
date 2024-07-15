import { DropzoneCompactClasses } from './DropzoneCompact.classes';

import { SxProps, Theme } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

export interface DropzoneCompactProps {
  /** Prop that allow to set displayed text. */
  children?: string;
  /** Class applied to the root element. */
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<DropzoneCompactClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Prop that should be passed when the drag is over the element. */
  isDragOver?: boolean;
  /** Prop that should be passed when visibleOnDrag="true" to make the component visible. */
  isDragging?: boolean;
  /** Props applied to the transition element when visibleOnDrag="true". */
  TransitionProps?: TransitionProps;
  /** If true, the component will be invisible until the drag start.
   * @default false
   */
  visibleOnDrag?: boolean;
}
