import { GalleryActionsButtonGroupProps } from './GalleryActionsButtonGroup.types';

import clsx from 'clsx';
import { getGalleryActionsButtonGroupUtilityClass } from './GalleryActionsButtonGroup.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { buttonClasses } from '@mui/material';

type GalleryActionsButtonGroupOwnerState = {
  classes?: GalleryActionsButtonGroupProps['classes'];
};

const useUtilityClasses = (ownerState: GalleryActionsButtonGroupOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getGalleryActionsButtonGroupUtilityClass, classes);
};

const GalleryActionsButtonGroupRoot = styled('div', {
  name: 'ESGalleryActionsButtonGroup',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  [`& .${buttonClasses.root}:not(:first-of-type)`]: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0
  },

  [`& .${buttonClasses.root}:not(:last-of-type)`]: {
    borderRight: `1px solid ${theme.vars.palette.white.A200}`,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0
  }
}));

export const GalleryActionsButtonGroup = (inProps: GalleryActionsButtonGroupProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESGalleryActionsButtonGroup'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GalleryActionsButtonGroupRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </GalleryActionsButtonGroupRoot>
  );
};
