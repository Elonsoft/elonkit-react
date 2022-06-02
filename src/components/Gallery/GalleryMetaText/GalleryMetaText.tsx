import { FC } from 'react';

import { GalleryMetaTextProps } from './GalleryMetaText.types';

import clsx from 'clsx';
import { getGalleryMetaTextUtilityClass } from './GalleryMetaText.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type GalleryMetaTextOwnerState = {
  classes?: GalleryMetaTextProps['classes'];
  primary?: boolean;
  mobile?: boolean;
};

const useUtilityClasses = (ownerState: GalleryMetaTextOwnerState) => {
  const { classes, primary, mobile } = ownerState;

  const slots = {
    root: ['root', primary && 'primary', mobile && 'mobile']
  };

  return composeClasses(slots, getGalleryMetaTextUtilityClass, classes);
};

const GalleryMetaTextRoot = styled(Typography, {
  name: 'ESGalleryMetaText',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { isActive }
    } = props;
    return [styles.root, isActive && styles.active];
  }
})<{ ownerState: GalleryMetaTextOwnerState }>(({ theme, ownerState }) => ({
  color: theme.palette.white.A800,
  alignItems: 'center',
  display: ownerState.mobile ? 'flex' : 'none',
  '&:not(:last-child)': {
    marginBottom: 4
  },
  [theme.breakpoints.up('tabletXS')]: {
    display: 'flex',
    ...(ownerState.primary && {
      color: theme.palette.white[500],
      ...theme.typography.body100
    })
  }
}));

export const GalleryMetaText: FC<GalleryMetaTextProps> = (inProps) => {
  const { className, primary, mobile, children, ...props } = useThemeProps({
    props: inProps,
    name: 'ESGalleryMetaText'
  });

  const ownerState = { primary, mobile, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GalleryMetaTextRoot className={clsx(classes.root, className)} ownerState={ownerState} variant="caption">
      {children}
    </GalleryMetaTextRoot>
  );
};
