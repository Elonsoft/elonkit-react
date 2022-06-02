import { ReactNode } from 'react';

import { GalleryDescriptionClasses } from './GalleryDescription.classes';

export interface GalleryDescriptionProps {
  /** Function to render the text. */
  children: (item: any, index: number) => ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryDescriptionClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** Position of the description. Inhereted from `GalleryPanel` by default. */
  position?: 'top' | 'bottom';
  /** Customize the collapse button label. */
  collapseLabel?: string;
  /** Customize the expand button label. */
  expandLabel?: string;
}
