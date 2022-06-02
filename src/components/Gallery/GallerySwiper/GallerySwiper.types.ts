import { ReactNode } from 'react';

import { GallerySwiperClasses } from './GallerySwiper.classes';

import { SwiperProps } from '../../Swiper';

export interface GallerySwiperProps {
  /** Function to render the item. */
  children: (item: any, index: number) => ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GallerySwiperClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** Props applied to the Swiper element. */
  SwiperProps?: SwiperProps;
}
