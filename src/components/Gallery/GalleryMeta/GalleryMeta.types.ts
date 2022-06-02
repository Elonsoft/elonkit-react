import { ReactNode } from 'react';

import { GalleryMetaClasses } from './GalleryMeta.classes';

export interface GalleryMetaProps {
  /** Function to render the content. */
  children: (item: any, index: number) => ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryMetaClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** Customize the "showing" label. */
  showingLabel?: string;
  /** Customize the "of" label. */
  ofLabel?: string;
}
