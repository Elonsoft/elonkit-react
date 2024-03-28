import { PageHGroupStatusProps } from './PageHGroupStatus.types';

import clsx from 'clsx';
import { getPageHGroupStatusUtilityClass } from './PageHGroupStatus.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type PageHGroupStatusOwnerState = {
  classes?: PageHGroupStatusProps['classes'];
};

const useUtilityClasses = (ownerState: PageHGroupStatusOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getPageHGroupStatusUtilityClass, classes);
};

const PageHGroupStatusRoot = styled('div', {
  name: 'ESPageHGroupStatus',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  ...theme.typography.body100,
  color: theme.vars.palette.monoA.A600
}));

export const PageHGroupStatus = (inProps: PageHGroupStatusProps) => {
  const { className, children, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESPageHGroupStatus'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <PageHGroupStatusRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </PageHGroupStatusRoot>
  );
};
