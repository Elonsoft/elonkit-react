import { GalleryMetaProps } from './GalleryMeta.types';

import clsx from 'clsx';
import { getGalleryMetaUtilityClass } from './GalleryMeta.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IconArrowLeft } from '../../../icons';
import { useGalleryContext } from '../Gallery.context';

type GalleryMetaOwnerState = {
  classes?: GalleryMetaProps['classes'];
};

const useUtilityClasses = (ownerState: GalleryMetaOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    content: ['content'],
    progress: ['progress'],
    button: ['button']
  };

  return composeClasses(slots, getGalleryMetaUtilityClass, classes);
};

const GalleryMetaRoot = styled('div', {
  name: 'ESGalleryMeta',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  minWidth: 0,
  padding: 8,
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('tabletXS')]: {
    padding: 16
  }
}));

const GalleryMetaContent = styled('div', {
  name: 'ESGalleryMeta',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})(() => ({
  whiteSpace: 'nowrap',
  '&, & *': {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}));

const GalleryMetaProgress = styled(Typography, {
  name: 'ESGalleryMeta',
  slot: 'Progress',
  overridesResolver: (props, styles) => styles.progress
})(({ theme }) => ({
  color: theme.palette.white[500],
  [theme.breakpoints.up('tabletXS')]: {
    display: 'none'
  }
})) as typeof Typography;

const GalleryMetaButton = styled(Button, {
  name: 'ESGalleryMeta',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})(({ theme }) => ({
  flexShrink: 0,
  marginRight: 8,
  [theme.breakpoints.up('tabletXS')]: {
    display: 'none'
  },
  '&.MuiButton-textInherit': {
    '&, &:hover, &:active': {
      color: theme.palette.white.A700
    },
    '& .MuiTouchRipple-root': {
      color: theme.palette.white.A150
    },
    '&:hover': {
      '& .MuiTouchRipple-root': {
        backgroundColor: theme.palette.white.A50
      }
    },
    '&:focus-visible': {
      '& .MuiTouchRipple-root': {
        color: theme.palette.white.A200
      }
    }
  }
}));

export const GalleryMeta = (inProps: GalleryMetaProps) => {
  const { children, className, showingLabel, ofLabel, ...props } = useThemeProps({
    props: inProps,
    name: 'ESGalleryMeta'
  });

  const { items, item, onClose } = useGalleryContext();

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GalleryMetaRoot className={clsx(classes.root, className)}>
      <GalleryMetaButton className={classes.button} onClick={onClose} color="inherit">
        <IconArrowLeft />
      </GalleryMetaButton>
      <GalleryMetaContent className={classes.content}>
        <GalleryMetaProgress className={classes.progress} component="div" variant="body200">
          {showingLabel} {item + 1} {ofLabel} {items.length}
        </GalleryMetaProgress>
        {children(items[item], item)}
      </GalleryMetaContent>
    </GalleryMetaRoot>
  );
};
