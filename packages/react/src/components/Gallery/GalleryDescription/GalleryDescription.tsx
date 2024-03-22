import { useEffect, useRef, useState } from 'react';

import { GalleryDescriptionProps } from './GalleryDescription.types';

import clsx from 'clsx';
import { getGalleryDescriptionUtilityClass } from './GalleryDescription.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useTheme, useThemeProps } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useWindowEventListener } from '../../../hooks';
import { IconCloseW350 } from '../../../icons';
import { SvgIcon, SvgIconProps } from '../../SvgIcon';
import { useGalleryPanelContext, useGalleryPanelsContext } from '../GalleryPanel';

type GalleryDescriptionOwnerState = {
  classes?: GalleryDescriptionProps['classes'];
  position: GalleryDescriptionProps['position'];
  isExpanded: boolean;
};

const useUtilityClasses = (ownerState: GalleryDescriptionOwnerState) => {
  const { classes, position, isExpanded } = ownerState;

  const slots = {
    root: ['root', position],
    content: ['content', position, isExpanded && 'expanded'],
    text: ['text', isExpanded && 'expanded'],
    button: ['button']
  };

  return composeClasses(slots, getGalleryDescriptionUtilityClass, classes);
};

const GalleryDescriptionRoot = styled(Typography, {
  name: 'ESGalleryDescription',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  height: '32px',
  position: 'relative'
})) as typeof Typography;

const GalleryDescriptionContent = styled('div', {
  name: 'ESGalleryDescription',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})<{ ownerState: GalleryDescriptionOwnerState }>(({ theme, ownerState }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexGrow: 1,
  minWidth: 0,
  overflowY: 'auto',
  padding: 4,
  paddingLeft: 16,
  paddingRight: 8,

  ...(ownerState.isExpanded && {
    position: 'absolute',
    left: 0,
    right: 0,
    ...(ownerState.position === 'top' && {
      top: 0
    }),
    ...(ownerState.position === 'bottom' && {
      bottom: 0
    }),
    background: `linear-gradient(to ${ownerState.position}, ${theme.palette.overlay[900]} calc(100% - 32px), transparent calc(100% - 32px))`
  })
}));

const GalleryDescriptionText = styled('div', {
  name: 'ESGalleryDescription',
  slot: 'Text',
  overridesResolver: (props, styles) => styles.text
})<{ ownerState: GalleryDescriptionOwnerState }>(({ theme, ownerState }) => ({
  color: theme.palette.white.A800,
  overflow: 'hidden',
  flexGrow: 1,
  minWidth: 0,
  marginRight: 4,
  padding: '4px 0',
  textAlign: 'left',

  ...(!ownerState.isExpanded && {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    textAlign: 'center'
  })
}));

const GalleryDescriptionButton = styled(Button, {
  name: 'ESGalleryDescription',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})<{ ownerState: GalleryDescriptionOwnerState }>(({ theme, ownerState }) => ({
  flexShrink: 0,
  position: 'sticky',
  top: 0,
  width: 24,
  '&.MuiButton-root': {
    ...theme.mixins.button({
      background: 'transparent',
      color: theme.palette.white.A500,
      hover: theme.palette.white.A50,
      focus: theme.palette.white.A200,
      active: theme.palette.white.A150
    })
  },
  ...(ownerState.position === 'top' && {
    transform: 'scaleY(-1)'
  })
}));

const IconDoubleChevronUp = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} size="16" viewBox="0 0 16 16">
      <path
        clipRule="evenodd"
        d="M8.53039 3.46978L8.00006 2.93945L7.46973 3.46978L3.46973 7.46978L4.53039 8.53044L8.00006 5.06077L11.4697 8.53044L12.5304 7.46978L8.53039 3.46978ZM8.53131 8.46967L8.00098 7.93934L7.47065 8.46967L3.47065 12.4697L4.53131 13.5303L8.00098 10.0607L11.4706 13.5303L12.5313 12.4697L8.53131 8.46967Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};

export const GalleryDescription = (inProps: GalleryDescriptionProps) => {
  const galleryPanelContext = useGalleryPanelContext();

  const {
    children,
    className,
    sx,
    position = galleryPanelContext?.position || 'bottom',
    labelCollapse,
    labelExpand,
    iconCollapse = <IconCloseW350 />,
    iconExpand = <IconDoubleChevronUp />,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESGalleryDescription'
  });

  const { rectTop, rectBottom } = useGalleryPanelsContext();

  const theme = useTheme();

  const rootRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setExpanded] = useState(false);
  const [isTruncated, setTruncated] = useState(false);
  const [maxHeight, setMaxHeight] = useState(32);

  const onClick = () => {
    if (isTruncated) {
      setExpanded(!isExpanded);
    }
  };

  useEffect(() => {
    if (galleryPanelContext) {
      galleryPanelContext.setExpanded(isExpanded);
    }
  }, [theme, isExpanded]);

  useEffect(() => {
    if (rootRef.current) {
      const rect = rootRef.current.getBoundingClientRect();
      if (position === 'bottom') {
        if (rectTop) {
          setMaxHeight(rect.bottom - rectTop.bottom);
        } else {
          //
        }
      } else if (rectBottom) {
        setMaxHeight(rectBottom.top - rect.top);
      } else {
        //
      }
    }
  }, [position, rectTop, rectBottom]);

  const onResize = () => {
    if (textRef.current) {
      const isTruncated = textRef.current.scrollWidth > textRef.current.clientWidth;
      setTruncated(isTruncated);
      if (isExpanded && !isTruncated) {
        setExpanded(false);
      }
    }
  };

  useWindowEventListener('resize', () => {
    onResize();
  });

  useEffect(() => {
    onResize();
  }, [textRef.current, children]);

  const ownerState = { position, isExpanded, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GalleryDescriptionRoot
      ref={rootRef}
      className={clsx(classes.root, className)}
      component="div"
      sx={sx}
      variant="caption"
      onClick={onClick}
    >
      <GalleryDescriptionContent
        className={classes.content}
        ownerState={ownerState}
        style={{ maxHeight: `${maxHeight}px` }}
      >
        <GalleryDescriptionText ref={textRef} className={classes.text} ownerState={ownerState}>
          {children}
        </GalleryDescriptionText>
        <GalleryDescriptionButton
          aria-label={isExpanded ? labelCollapse : labelExpand}
          className={classes.button}
          ownerState={ownerState}
          size="24"
          style={!isExpanded && !isTruncated ? { display: 'none' } : {}}
        >
          {isExpanded ? iconCollapse : iconExpand}
        </GalleryDescriptionButton>
      </GalleryDescriptionContent>
    </GalleryDescriptionRoot>
  );
};
