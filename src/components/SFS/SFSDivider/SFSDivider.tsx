import { SFSDividerProps } from './SFSDivider.types';

import clsx from 'clsx';
import { getSFSDividerUtilityClass } from './SFSDivider.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

type SFSDividerOwnerState = {
  classes?: SFSDividerProps['classes'];
  hideOnTabletXSBreakpoint?: boolean;
};

const useUtilityClasses = (ownerState: SFSDividerOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getSFSDividerUtilityClass, classes);
};

const SFSDividerRoot = styled(Divider, {
  name: 'ESSFSDivider',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})<{ ownerState: SFSDividerOwnerState }>(({ theme, ownerState: { hideOnTabletXSBreakpoint } }) => ({
  margin: '8px 2px',

  ...(hideOnTabletXSBreakpoint && {
    [theme.breakpoints.down('tabletXS')]: {
      display: 'none'
    }
  })
}));

export const SFSDivider = (inProps: SFSDividerProps) => {
  const { className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSFSDivider'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SFSDividerRoot
      ownerState={ownerState}
      orientation="vertical"
      flexItem
      className={clsx(classes.root, className)}
      sx={sx}
    />
  );
};
