import { BreadcrumbsProps } from '../Breadcrumbs.types';
import { IBreadcrumbsMenuProps } from './BreadcrumbsMenu.types';

import { getBreadcrumbsUtilityClass } from '../Breadcrumbs.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';

type BreadcrumbsOwnerState = {
  classes?: BreadcrumbsProps['classes'];
  nestedMenu?: boolean;
};

const useUtilityClasses = (ownerState: BreadcrumbsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    menu: ['menu']
  };

  return composeClasses(slots, getBreadcrumbsUtilityClass, classes);
};

const BreadcrumbsMenuRoot = styled(Menu, {
  name: 'ESBreadcrumbs',
  slot: 'Menu',
  overridesResolver: (props, styles) => styles.menu
})<{ ownerState: BreadcrumbsOwnerState }>(({ ownerState: { nestedMenu } }) => ({
  pointerEvents: nestedMenu ? 'none' : 'auto',
  margin: nestedMenu ? '-4px 0 0 -4px' : '4px 0 0 0',
  '& .MuiPaper-root': {
    pointerEvents: 'auto'
  },
  '& .MuiMenu-list': {
    padding: '4px 0'
  }
}));

export const BreadcrumbsMenu: React.FC<IBreadcrumbsMenuProps> = ({ nestedMenu, children, ...props }) => {
  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <BreadcrumbsMenuRoot className={classes.menu} ownerState={{ nestedMenu }} {...props}>
      {children}
    </BreadcrumbsMenuRoot>
  );
};
