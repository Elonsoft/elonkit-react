import { BannerTitleProps } from './BannerTitle.types';

import clsx from 'clsx';
import { getBannerTitleUtilityClass } from './BannerTitle.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type BannerTitleOwnerState = {
  classes?: BannerTitleProps['classes'];
};

const useUtilityClasses = (ownerState: BannerTitleOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getBannerTitleUtilityClass, classes);
};

const BannerTitleRoot = styled(Typography, {
  name: 'ESBannerTitle',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({}));

export const BannerTitle = (inProps: BannerTitleProps) => {
  const { className, children, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESBannerTitle'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <BannerTitleRoot className={clsx(classes.root, className)} color="inherit" sx={sx} variant="body100Bold">
      {children}
    </BannerTitleRoot>
  );
};
