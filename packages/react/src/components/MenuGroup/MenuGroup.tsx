import { MenuGroupProps } from './MenuGroup.types';

import clsx from 'clsx';
import { getMenuGroupUtilityClass, menuGroupClasses } from './MenuGroup.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material';

type MenuGroupOwnerState = {
  classes?: MenuGroupProps['classes'];
  size: NonNullable<MenuGroupProps['size']>;
  sticky?: MenuGroupProps['sticky'];
  divider?: MenuGroupProps['divider'];
};

const useUtilityClasses = (ownerState: MenuGroupOwnerState) => {
  const { classes, size, sticky, divider } = ownerState;

  const slots = {
    root: ['root', sticky && 'sticky', divider && 'divider', `size${capitalize(size)}`],
  };

  return composeClasses(slots, getMenuGroupUtilityClass, classes);
};

const MenuGroupRoot = styled('div', {
  name: 'ESMenuGroup',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { size, sticky, divider },
    } = props;

    return [styles.root, sticky && styles.sticky, divider && styles.divider, styles[`size${capitalize(size)}`]];
  },
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.vars.palette.monoA.A600,
  padding: '8px 16px 4px',

  '&:not(:first-child)': {
    borderTop: `1px solid ${theme.vars.palette.monoA.A100}`,
    paddingTop: '16px',
    marginTop: '8px',
  },

  [`&.${menuGroupClasses.size24} `]: {
    paddingBottom: '0px',
  },
  [`&.${menuGroupClasses.size28} `]: {
    paddingBottom: '4px',
    [`&.${menuGroupClasses.divider} `]: {
      borderBottom: `1px solid ${theme.vars.palette.monoA.A100}`,
    },
  },
  [`&.${menuGroupClasses.size32} `]: {
    paddingBottom: '8px',
    [`&.${menuGroupClasses.divider} `]: {
      borderBottom: `1px solid ${theme.vars.palette.monoA.A100}`,
    },
  },

  [`&.${menuGroupClasses.sticky} `]: {
    position: 'sticky',
    top: '-8px',
    background: theme.vars.palette.surface[400],
    zIndex: '1',
  },
}));

export const MenuGroup = (inProps: MenuGroupProps) => {
  const {
    className,
    sx,
    size = '32',
    children,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESMenuGroup',
  });

  const ownerState = { size, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <MenuGroupRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </MenuGroupRoot>
  );
};
