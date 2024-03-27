import { MenuItemProps, MenuItemTypeMap } from './MenuItem.types';

import clsx from 'clsx';
import { getMenuItemUtilityClass } from './MenuItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import MuiMenuItem, { menuItemClasses } from '@mui/material/MenuItem';
import { OverridableComponent } from '@mui/material/OverridableComponent';

type MenuItemOwnerState = {
  classes?: MenuItemProps['classes'];
  color?: MenuItemProps['color'];
};

const useUtilityClasses = (ownerState: MenuItemOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getMenuItemUtilityClass, classes);
};

const MenuItemRoot = styled(MuiMenuItem, {
  name: 'ESMenuItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: MenuItemOwnerState }>(({ theme, ownerState }) => ({
  ...(ownerState.color === 'error' && {
    [`&.${menuItemClasses.root}`]: {
      ...theme.mixins.listItem({
        background: 'transparent',
        color: theme.vars.palette.error[300],
        icon: theme.vars.palette.error[300],
        hover: theme.vars.palette.error.A50,
        active: theme.vars.palette.error.A150,
        focus: theme.vars.palette.error.A75
      })
    }
  })
}));

/**
 * Wrapper around MenuItem from MUI with color prop.
 */
export const MenuItem: OverridableComponent<MenuItemTypeMap> = (inProps: MenuItemProps) => {
  const { className, color, ...props } = useThemeProps({
    props: inProps,
    name: 'ESMenuItem'
  });

  const ownerState = { color };
  const classes = useUtilityClasses(ownerState);

  return <MenuItemRoot className={clsx(className, classes.root)} ownerState={ownerState} {...props} />;
};
