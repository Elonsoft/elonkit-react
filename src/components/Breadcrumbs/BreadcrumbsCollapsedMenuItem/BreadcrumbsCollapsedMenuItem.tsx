import React, { useState } from 'react';

import { BreadcrumbsProps } from '../Breadcrumbs.types';
import { IBreadcrumbsCollapsedMenuItemProps } from './BreadcrumbsCollapsedMenuItem.types';

import { getBreadcrumbsUtilityClass } from '../Breadcrumbs.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem/MenuItem';

import { IconBreadcrumbsCollapsedMenu } from '../../../icons';
import { BreadcrumbsMenu } from '../BreadcrumbsMenu';
import { BreadcrumbsMenuItem } from '../BreadcrumbsMenu/BreadcrumbsMenuItem';

type BreadcrumbsOwnerState = {
  classes?: BreadcrumbsProps['classes'];
};

const useUtilityClasses = (ownerState: BreadcrumbsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    collapsedMenuItem: ['collapsedMenuItem']
  };

  return composeClasses(slots, getBreadcrumbsUtilityClass, classes);
};

const BreadcrumbsCollapsedMenuItemRoot = styled(BreadcrumbsMenuItem, {
  name: 'ESBreadcrumbs',
  slot: 'CollapsedMenuItem',
  overridesResolver: (props, styles) => styles.collapsedMenuItem
})<{ ownerState: { isCollapsedSubmenuOpen?: boolean } }>(({ ownerState, theme }) => ({
  ...(ownerState.isCollapsedSubmenuOpen && {
    backgroundColor: theme.palette.action.hover
  })
})) as unknown as typeof MenuItem;

export const BreadcrumbsCollapsedMenuItem: React.FC<IBreadcrumbsCollapsedMenuItemProps> = ({
  children,
  id = '',
  menu = [],
  LinkComponent = 'li',
  ...props
}) => {
  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  const [isCollapsedSubmenuOpen, setIsCollapsedSubmenuOpen] = useState<null | HTMLElement>(null);

  const onOpenCollapsedSubmenu = (e: React.MouseEvent<HTMLElement>) => {
    setIsCollapsedSubmenuOpen(e.currentTarget);
  };

  const onCloseCollapsedSubmenu = (e: any) => {
    if (e.currentTarget?.getAttribute('data-id') !== e.relatedTarget?.getAttribute('data-id')) {
      setIsCollapsedSubmenuOpen(null);
    }
  };

  const onMenuKeyDown = (e: any) => {
    if (e.currentTarget?.getAttribute('data-nested')) {
      e.stopPropagation();

      if (e.key === 'ArrowLeft') {
        onCloseCollapsedSubmenu(e as any);
      }

      return;
    }

    if (e.currentTarget?.getAttribute('data-id')) {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        onOpenCollapsedSubmenu(e as any);
      }
    }
  };

  return (
    <BreadcrumbsCollapsedMenuItemRoot
      className={classes.collapsedMenuItem}
      data-id={menu.length ? id : ''}
      onKeyDown={onMenuKeyDown}
      ownerState={{ isCollapsedSubmenuOpen: !!isCollapsedSubmenuOpen }}
      onMouseEnter={menu.length ? onOpenCollapsedSubmenu : undefined}
      onMouseLeave={menu.length ? onCloseCollapsedSubmenu : undefined}
      component={menu.length ? 'li' : LinkComponent}
      disableTouchRipple={!!menu.length}
      {...props}
    >
      {children}
      {!!menu.length && (
        <>
          <IconBreadcrumbsCollapsedMenu className="BreadcrumbsHiddenMenuIcon" />
          <BreadcrumbsMenu
            onKeyDown={onMenuKeyDown}
            onClose={onCloseCollapsedSubmenu}
            data-nested="true"
            data-id={menu.length ? id : ''}
            open={!!isCollapsedSubmenuOpen}
            anchorEl={isCollapsedSubmenuOpen}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            nestedMenu
          >
            {menu.map((item: any) => (
              <BreadcrumbsMenuItem key={item.key} {...item.props} />
            ))}
          </BreadcrumbsMenu>
        </>
      )}
    </BreadcrumbsCollapsedMenuItemRoot>
  );
};
