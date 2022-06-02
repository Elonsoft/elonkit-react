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
    root: ['root']
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
  maxHeight: '100%',
  maxWidth: '100%',
  borderRadius: '6px',
  boxShadow: theme.palette.shadow.down[900]
}));

export const GallerySwiperImage = (inProps: GallerySwiperImageProps) => {
  const { className, src, alt, ...props } = useThemeProps({
    props: inProps,
    name: 'ESGallerySwiperImage'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GallerySwiperImageRoot className={clsx(classes.root, className)}>
      <GallerySwiperImageImage src={src} alt={alt} />
    </GallerySwiperImageRoot>
  );
};
