import { GalleryMetaTextClasses } from './GalleryMetaText.classes';

export interface GalleryMetaTextProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryMetaTextClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** Whether the text is primary. */
  primary?: boolean;
  /** Whether the text is visible on mobile. */
  mobile?: boolean;
}
