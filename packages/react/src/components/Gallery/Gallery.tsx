import { useMemo, useRef, useState } from 'react';

import { GalleryProps } from './Gallery.types';

import clsx from 'clsx';
import { getGalleryUtilityClass } from './Gallery.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
// TODO: Replace with our Dialog component.
import Dialog from '@mui/material/Dialog';

import { GalleryContext } from './Gallery.context';
import { GalleryPanelsProvider } from './GalleryPanel';
import { GallerySwiperProvider } from './GallerySwiper';
import { GalleryThumbnailsProvider } from './GalleryThumbnails';

import { useDocumentEventListener } from '../../hooks';

type GalleryOwnerState = {
  classes?: GalleryProps['classes'];
};

const useUtilityClasses = (ownerState: GalleryOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    content: ['content']
  };

  return composeClasses(slots, getGalleryUtilityClass, classes);
};

const GalleryRoot = styled(Dialog, {
  name: 'ESGallery',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  '.MuiBackdrop-root': {
    backgroundColor: 'transparent'
  },
  '.MuiDialog-paper': {
    backgroundColor: theme.vars.palette.overlay[900],
    backgroundImage: 'none',
    boxShadow: 'none'
  }
}));

const GalleryContent = styled('div', {
  name: 'ESGallery',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}));

/*
 * `Gallery` is a component for displaying a fullscreen list of images or any other type of content.
 */
export const Gallery = (inProps: GalleryProps) => {
  const {
    className,
    children,
    items,
    open = true,
    onClose,
    BackdropProps,
    TransitionProps,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESGallery'
  });

  const contentRef = useRef<HTMLDivElement>(null);

  const [item, setItem] = useState(0);

  useDocumentEventListener('keyup', (event) => {
    if (event.key === 'Escape' && onClose) {
      onClose();
    }
  });

  const value = useMemo(() => {
    return {
      items,
      item,
      setItem,
      onClose
    };
  }, [items, item, setItem, onClose]);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GalleryContext.Provider value={value}>
      <GallerySwiperProvider>
        <GalleryPanelsProvider>
          <GalleryThumbnailsProvider>
            <GalleryRoot
              fullScreen
              BackdropProps={BackdropProps}
              TransitionProps={TransitionProps}
              className={clsx(classes.root, className)}
              open={open}
              onClose={onClose}
            >
              <GalleryContent ref={contentRef} className={classes.content}>
                {children}
              </GalleryContent>
            </GalleryRoot>
          </GalleryThumbnailsProvider>
        </GalleryPanelsProvider>
      </GallerySwiperProvider>
    </GalleryContext.Provider>
  );
};
