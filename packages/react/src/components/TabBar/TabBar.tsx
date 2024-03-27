import { TabBarProps } from './TabBar.types';

import clsx from 'clsx';
import { getTabBarUtilityClass } from './TabBar.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type TabBarOwnerState = {
  classes?: TabBarProps['classes'];
};

const useUtilityClasses = (ownerState: TabBarOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getTabBarUtilityClass, classes);
};

const TabBarRoot = styled('div', {
  name: 'ESTabBar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  display: 'flex',
  height: '56px',
  padding: '0px 8px',
  backgroundColor: theme.vars.palette.surface[100],
  boxShadow: theme.vars.palette.shadow.up[50]
}));

/**
 * TabBar allows movement between primary destinations in an app.
 */
export const TabBar = (inProps: TabBarProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTabBar'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TabBarRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </TabBarRoot>
  );
};
