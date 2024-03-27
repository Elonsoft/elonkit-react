import { useEffect, useMemo, useRef, useState } from 'react';

import { GalleryPanelProps } from './GalleryPanel.types';

import clsx from 'clsx';
import { galleryPanelClasses, getGalleryPanelUtilityClass } from './GalleryPanel.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material/utils';

import { GalleryPanelContext } from './GalleryPanel.context';
import { useGalleryPanelsContext } from './GalleryPanels.context';

import { useResizeObserver } from '../../../hooks';
import { useGalleryContext } from '../Gallery.context';

type GalleryPanelOwnerState = {
  classes?: GalleryPanelProps['classes'];
  position: GalleryPanelProps['position'];
  isVisible: boolean;
  expanded: boolean;
};

const useUtilityClasses = (ownerState: GalleryPanelOwnerState) => {
  const { classes, isVisible, expanded, position } = ownerState;

  const slots = {
    root: ['root', `position${capitalize(position)}`],
    content: ['content', isVisible && 'contentVisible', expanded && 'contentExpanded']
  };

  return composeClasses(slots, getGalleryPanelUtilityClass, classes);
};

const GalleryPanelRoot = styled('div', {
  name: 'ESGalleryPanel',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { position }
    } = props;
    return [styles.root, styles[`position${capitalize(position)}`]];
  }
})(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  zIndex: 1,

  '@media (min-height: 450px)': {
    position: 'static',

    [theme.breakpoints.up('tabletXS')]: {
      [`&.${galleryPanelClasses.positionBottom}`]: {
        paddingTop: '8px'
      }
    }
  }
}));

const GalleryPanelContent = styled('div', {
  name: 'ESGalleryMeta',
  slot: 'Content',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { isVisible, expanded }
    } = props;
    return [styles.content, isVisible && styles.contentVisible, expanded && styles.expanded];
  }
})<{ ownerState: GalleryPanelOwnerState }>(({ theme }) => ({
  display: 'flex',
  transition: `opacity ${theme.transitions.duration.shortest}ms`,

  [`&.${galleryPanelClasses.content}.${galleryPanelClasses.contentVisible}`]: {
    opacity: 1
  },

  [`&.${galleryPanelClasses.contentExpanded}`]: {
    backgroundColor: theme.vars.palette.overlay[900]
  },

  '@media (max-height: 449px)': {
    backdropFilter: 'blur(40px)',
    backgroundColor: theme.vars.palette.black.A700,
    opacity: 0,

    [`&.${galleryPanelClasses.contentExpanded}`]: {
      backgroundColor: theme.vars.palette.overlay[900]
    }
  }
}));

export const GalleryPanel = (inProps: GalleryPanelProps) => {
  const { children, className, sx, position, direction, ...props } = useThemeProps({
    props: inProps,
    name: 'ESGalleryPanel'
  });

  const { items, item } = useGalleryContext();
  const { isVisible, setVisible, setRectTop, setRectBottom } = useGalleryPanelsContext();

  const [isHovered, setHovered] = useState(false);
  const [isFocused, setFocused] = useState(false);
  const [expanded, setExpanded] = useState(false);
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

  const value = useMemo(() => {
    return { position, expanded, setExpanded };
  }, [expanded, setExpanded, position]);

  const ownerState = { ...props, isVisible, position, expanded };
  const classes = useUtilityClasses(ownerState);

  return (
    <GalleryPanelContext.Provider value={value}>
      <GalleryPanelRoot
        ref={rootRef}
        className={clsx(classes.root, className)}
        style={{ [position]: 0 }}
        sx={sx}
        onBlur={onBlur}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <GalleryPanelContent className={classes.content} ownerState={ownerState} style={{ flexDirection: direction }}>
          {children(items[item], item)}
        </GalleryPanelContent>
      </GalleryPanelRoot>
    </GalleryPanelContext.Provider>
  );
};
