import { GalleryThumbnailsImageClasses } from './GalleryThumbnailsImage.classes';

export interface GalleryThumbnailsImageProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryThumbnailsImageClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The `src` attribute for the `img` element. */
  src: string;
  /** The `alt` attribute for the `img` element. */
  alt?: string;
}
