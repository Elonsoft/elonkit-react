import { GalleryThumbnailsItemProps } from './GalleryThumbnailsItem.types';

import clsx from 'clsx';
import { getGalleryThumbnailsItemUtilityClass } from './GalleryThumbnailsItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import ButtonBase from '@mui/material/ButtonBase';

const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

type GalleryThumbnailsItemOwnerState = {
  classes?: GalleryThumbnailsItemProps['classes'];
  isActive?: boolean;
};

const useUtilityClasses = (ownerState: GalleryThumbnailsItemOwnerState) => {
  const { classes, isActive } = ownerState;

  const slots = {
    root: ['root', isActive && 'active']
  };

  return composeClasses(slots, getGalleryThumbnailsItemUtilityClass, classes);
};

const GalleryThumbnailsItemRoot = styled(ButtonBase, {
  name: 'ESGalleryThumbnailsItem',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { isActive }
    } = props;
    return [styles.root, isActive && styles.active];
  }
})<{ ownerState: GalleryThumbnailsItemOwnerState }>(({ theme, ownerState }) => ({
  padding: 0,
  borderRadius: 6,
  height: 56,
  width: 56,
  position: 'relative',

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 6,

    ...(ownerState.isActive && {
      boxShadow: `inset 0 0 0 2px ${theme.vars.palette.white.A800}`
    }),
    ...(!ownerState.isActive && {
      backgroundColor: theme.vars.palette.black.A500
    })
  },

  '&:hover::after': {
    backgroundColor: 'transparent'
  },
  '&:focus-visible::after': {
    boxShadow: `inset 0 0 0 3px ${theme.vars.palette.white[500]}`
  },

  '& .MuiTouchRipple-root': {
    transitionDuration: `${theme.transitions.duration.short}ms`,
    color: theme.vars.palette.black.A150
  },
  '& .MuiTouchRipple-rippleVisible': {
    animationName: `${enterKeyframe} !important`,
    opacity: '1 !important'
  }
}));

export const GalleryThumbnailsItem = (inProps: GalleryThumbnailsItemProps) => {
  const { className, sx, isActive, onClick, children, ...props } = useThemeProps({
    props: inProps,
    name: 'ESGalleryThumbnailsItem'
  });

  const ownerState = { isActive, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GalleryThumbnailsItemRoot
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      sx={sx}
      onClick={onClick}
    >
      {children}
    </GalleryThumbnailsItemRoot>
  );
};
