import { GalleryMetaTextProps } from './GalleryMetaText.types';

import clsx from 'clsx';
import { galleryMetaTextClasses, getGalleryMetaTextUtilityClass } from './GalleryMetaText.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type GalleryMetaTextOwnerState = {
  classes?: GalleryMetaTextProps['classes'];
  primary?: boolean;
};

const useUtilityClasses = (ownerState: GalleryMetaTextOwnerState) => {
  const { classes, primary } = ownerState;

  const slots = {
    root: ['root', primary && 'primary']
  };

  return composeClasses(slots, getGalleryMetaTextUtilityClass, classes);
};

const GalleryMetaTextRoot = styled(Typography, {
  name: 'ESGalleryMetaText',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { primary }
    } = props;
    return [styles.root, primary && styles.primary];
  }
})<{ ownerState: GalleryMetaTextOwnerState }>(({ theme }) => ({
  color: theme.vars.palette.white.A800,
  display: 'flex',
  alignItems: 'center',

  [`&.${galleryMetaTextClasses.primary}`]: {
    ...theme.typography.body200,
    color: theme.vars.palette.white[500],

    [theme.breakpoints.up('tabletXS')]: {
      ...theme.typography.body100,

      '&:not(:last-child)': {
        marginBottom: 4
      }
    }
  }
}));

export const GalleryMetaText = (inProps: GalleryMetaTextProps) => {
  const { children, className, sx, primary, ...props } = useThemeProps({
    props: inProps,
    name: 'ESGalleryMetaText'
  });

  const ownerState = { primary, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GalleryMetaTextRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx} variant="caption">
      {children}
    </GalleryMetaTextRoot>
  );
};
