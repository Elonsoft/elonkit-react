import { GalleryClasses } from './Gallery.classes';

export interface GalleryProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** Array of items of any shape to be rendered inside of the gallery. */
  items: any[];
  /** Whether the `Gallery` is open. */
  open?: boolean;
  /** Callback fired when the component requests to be closed. */
  onClose?: () => void;
}
