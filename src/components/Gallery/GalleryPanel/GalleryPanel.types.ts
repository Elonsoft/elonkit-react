import { GalleryPanelClasses } from './GalleryPanel.classes';

export interface GalleryPanelProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryPanelClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** Position of the panel. */
  position: 'top' | 'bottom';
  /** Layout direction inside of the panel. */
  direction: 'row' | 'column';
}
