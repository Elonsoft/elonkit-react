import { GalleryThumbnailsItemClasses } from './GalleryThumbnailsItem.classes';

export interface GalleryThumbnailsItemProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryThumbnailsItemClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** Whether the item is active. */
  isActive?: boolean;
  /** Callback fired when user clicks on the element. */
  onClick?: () => void;
}
