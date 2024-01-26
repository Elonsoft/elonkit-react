import { BannerActionsProps } from './BannerActions.types';

import clsx from 'clsx';
import { getBannerActionsUtilityClass } from './BannerActions.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type BannerActionsOwnerState = {
  classes?: BannerActionsProps['classes'];
};

const useUtilityClasses = (ownerState: BannerActionsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getBannerActionsUtilityClass, classes);
};

const BannerActionsRoot = styled('div', {
  name: 'ESBannerActions',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  padding: '4px 0',
  flexShrink: 0
}));

export const BannerActions = (inProps: BannerActionsProps) => {
  const { className, children, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESBannerActions'
  });
  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);
  return (
    <BannerActionsRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </BannerActionsRoot>
  );
};
