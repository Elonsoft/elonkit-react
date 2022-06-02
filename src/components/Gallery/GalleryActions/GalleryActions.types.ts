import { ReactElement } from 'react';

import { GalleryActionsClasses } from './GalleryActions.classes';

export interface GalleryActionsAction {
  /** Action icon. */
  icon?: ReactElement;
  /** Action text. */
  text: string;
  /** Callback fired when user clicks the action button. */
  onClick?: (item: number) => () => void;
}

export interface GalleryActionsProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<GalleryActionsClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** List of the primary actions to render. */
  primary?: GalleryActionsAction[];
  /** List of the secondary actions to render. */
  secondary?: GalleryActionsAction[];
  /** Customize the close button label. */
  closeLabel?: string;
  /** Customize the fullscreen button label. */
  fullscreenLabel?: string;
  /** Customize the more button label. */
  moreLabel?: string;
}
