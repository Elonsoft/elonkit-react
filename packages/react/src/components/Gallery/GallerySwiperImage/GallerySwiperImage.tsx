import { GallerySwiperImageProps } from './GallerySwiperImage.types';

import clsx from 'clsx';
import { getGallerySwiperImageUtilityClass } from './GallerySwiperImage.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type GallerySwiperImageOwnerState = {
  classes?: GallerySwiperImageProps['classes'];
};

const useUtilityClasses = (ownerState: GallerySwiperImageOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    image: ['image']
  };

  return composeClasses(slots, getGallerySwiperImageUtilityClass, classes);
};

const GallerySwiperImageRoot = styled('div', {
  name: 'ESGallerySwiperImage',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  minHeight: 0
}));

const GallerySwiperImageImage = styled('img', {
  name: 'ESGallerySwiperImage',
  slot: 'Image',
  overridesResolver: (props, styles) => styles.image
})(({ theme }) => ({
  display: 'block',
  maxHeight: 'calc(100% - 16px)',
  maxWidth: 'calc(100% - 16px)',
  borderRadius: '6px',
  boxShadow: theme.vars.palette.shadow.down[900],

  [theme.breakpoints.up('tabletXS')]: {
    maxWidth: 'calc(100% - 32px)'
  },

  '@media (min-height: 450px)': {
    maxHeight: '100%'
  }
}));

export const GallerySwiperImage = (inProps: GallerySwiperImageProps) => {
  const { className, sx, src, alt, ...props } = useThemeProps({
    props: inProps,
    name: 'ESGallerySwiperImage'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GallerySwiperImageRoot className={clsx(classes.root, className)} sx={sx}>
      <GallerySwiperImageImage alt={alt} className={classes.image} src={src} />
    </GallerySwiperImageRoot>
  );
};
