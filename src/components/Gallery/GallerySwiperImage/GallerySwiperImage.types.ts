import { GallerySwiperImageClasses } from './GallerySwiperImage.classes';

export interface GallerySwiperImageProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GallerySwiperImageClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The `src` attribute for the `img` element. */
  src: string;
  /** The `alt` attribute for the `img` element. */
  alt?: string;
}
