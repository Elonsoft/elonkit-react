import { ReactNode } from 'react';

import { GalleryThumbnailsClasses } from './GalleryThumbnails.classes';

import { SwiperProps } from '../../Swiper';

export interface GalleryThumbnailsProps {
  /** Function to render the item. */
  children: (item: any, index: number) => ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryThumbnailsClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** Props applied to the Swiper element. */
  SwiperProps?: SwiperProps;
}
