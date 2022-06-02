import { FC, useEffect, useMemo, useRef, useState } from 'react';

import { GalleryPanelProps } from './GalleryPanel.types';

import clsx from 'clsx';
import { getGalleryPanelUtilityClass } from './GalleryPanel.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { GalleryPanelContext } from './GalleryPanel.context';
import { useGalleryPanelsContext } from './GalleryPanels.context';

import { useResizeObserver } from '../../../hooks';
import { useGalleryContext } from '../Gallery.context';

type GalleryPanelOwnerState = {
  classes?: GalleryPanelProps['classes'];
  isFullscreen: boolean;
  isVisible: boolean;
};

const useUtilityClasses = (ownerState: GalleryPanelOwnerState) => {
  const { classes, isFullscreen, isVisible } = ownerState;

  const slots = {
    root: ['root', isFullscreen && 'fullscreen'],
    content: ['content', isFullscreen && 'fullscreen', isVisible && 'visible']
  };

  return composeClasses(slots, getGalleryPanelUtilityClass, classes);
};

const GalleryPanelRoot = styled('div', {
  name: 'ESGalleryPanel',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { isFullscreen }
    } = props;
    return [styles.root, isFullscreen && props.rootFullscreen];
  }
})<{ ownerState: GalleryPanelOwnerState }>(({ ownerState }) => ({
  position: 'absolute',
  width: '100%',
  zIndex: 1,
  '@media (min-height: 450px)': {
    position: 'static',
    ...(ownerState.isFullscreen && {
      position: 'absolute'
    })
  }
}));

const GalleryPanelContent = styled('div', {
  name: 'ESGalleryMeta',
  slot: 'Content',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { isFullscreen, isVisible }
    } = props;
    return [styles.content, isFullscreen && styles.contentFullscreen, isVisible && styles.contentVisible];
  }
})<{ ownerState: GalleryPanelOwnerState }>(({ theme, ownerState }) => ({
  display: 'flex',
  transition: `opacity ${theme.transitions.duration.shortest}ms`,
  ...(ownerState.isFullscreen && {
    backdropFilter: 'blur(40px)',
    backgroundColor: theme.palette.black.A700,
    opacity: 0
  }),
  ...(ownerState.isVisible && {
    '&.ESGalleryPanel-content': {
      opacity: 1
    }
  }),
  '@media (max-height: 449px)': {
    backdropFilter: 'blur(40px)',
    backgroundColor: theme.palette.black.A700,
    opacity: 0
  }
}));

export const GalleryPanel: FC<GalleryPanelProps> = (inProps) => {
  const { className, children, position, direction, ...props } = useThemeProps({
    props: inProps,
    name: 'ESGalleryPanel'
  });

  const { isFullscreen } = useGalleryContext();
  const { isVisible, setVisible, setRectTop, setRectBottom } = useGalleryPanelsContext();

  const [isHovered, setHovered] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const [background, setBackground] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setFocused(false);
    }
  };

  useEffect(() => {
    return () => {
      if (position === 'top') {
        setRectTop(null);
      } else {
        setRectBottom(null);
      }
    };
  }, []);

  useEffect(() => {
    setVisible(isHovered || isFocused);
  }, [isHovered, isFocused, setVisible]);

  const onResize = () => {
    if (rootRef.current) {
      const rect = rootRef.current.getBoundingClientRect();
      if (position === 'top') {
        setRectTop(rect);
      } else {
        setRectBottom(rect);
      }
    }
  };

  useResizeObserver(rootRef, () => {
    onResize();
  });

  useEffect(() => {
    onResize();
  }, [isFullscreen]);

  const value = useMemo(() => {
    return { position, background, setBackground };
  }, [background, setBackground, position]);

  const ownerState = { ...props, isFullscreen, isVisible };
  const classes = useUtilityClasses(ownerState);

  return (
    <GalleryPanelContext.Provider value={value}>
      <GalleryPanelRoot
        className={clsx(classes.root, className)}
        ownerState={ownerState}
        style={{ [position]: 0 }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={rootRef}
      >
        <GalleryPanelContent
          className={classes.content}
          ownerState={ownerState}
          style={{ background: background || '', flexDirection: direction }}
        >
          {children}
        </GalleryPanelContent>
      </GalleryPanelRoot>
    </GalleryPanelContext.Provider>
  );
};
