import { FC, useCallback, useMemo, useRef, useState } from 'react';

import { GalleryProps } from './Gallery.types';

import clsx from 'clsx';
import { getGalleryUtilityClass } from './Gallery.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import { GalleryContext } from './Gallery.context';
import { GalleryPanelsProvider } from './GalleryPanel';
import { GallerySwiperProvider } from './GallerySwiper';
import { GalleryThumbnailsProvider } from './GalleryThumbnails';

import { useDocumentEventListener, useWindowEventListener } from '../../hooks';

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
    backgroundColor: theme.palette.overlay.gallery
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
export const Gallery: FC<GalleryProps> = (inProps) => {
  const {
    className,
    children,
    items,
    open = true,
    onClose,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESGallery'
  });

  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [item, setItem] = useState(0);
  const [isFullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      if (rootRef.current) {
        rootRef.current.requestFullscreen();
      }
    }
  }, [rootRef.current, isFullscreen]);

  useDocumentEventListener('fullscreenchange', () => {
    setFullscreen(!!document.fullscreenElement);
  });

  useDocumentEventListener('keyup', (event) => {
    if (event.key === 'Escape' && !isFullscreen && onClose) {
      onClose();
    }
  });

  const value = useMemo(() => {
    return {
      rootRef,
      items,
      item,
      setItem,
      isFullscreen,
      toggleFullscreen,
      onClose
    };
  }, [rootRef, items, item, setItem, isFullscreen, toggleFullscreen, onClose]);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GalleryContext.Provider value={value}>
      <GallerySwiperProvider>
        <GalleryPanelsProvider>
          <GalleryThumbnailsProvider>
            <GalleryRoot
              className={clsx(classes.root, className)}
              fullScreen
              open={open}
              onClose={onClose}
              ref={rootRef}
            >
              <GalleryContent className={classes.content} ref={contentRef}>
                {children}
              </GalleryContent>
            </GalleryRoot>
          </GalleryThumbnailsProvider>
        </GalleryPanelsProvider>
      </GallerySwiperProvider>
    </GalleryContext.Provider>
  );
};
