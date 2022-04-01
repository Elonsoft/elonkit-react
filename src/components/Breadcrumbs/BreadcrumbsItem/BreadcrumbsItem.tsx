import React, { useState } from 'react';

import { BreadcrumbsItemProps } from './BreadcrumbsItem.types';

import clsx from 'clsx';
import { getBreadcrumbsItemUtilityClass } from './BreadcrumbsItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { IconBreadcrumbsMenu } from '../../../icons';
import { BreadcrumbsButton } from '../BreadcrumbsButton';
import { BreadcrumbsCollapsedMenuItem } from '../BreadcrumbsCollapsedMenuItem';
import { BreadcrumbsMenu } from '../BreadcrumbsMenu';

type BreadcrumbsItemOwnerState = {
  classes?: BreadcrumbsItemProps['classes'];
  menu?: BreadcrumbsItemProps['menu'];
  disabled?: boolean;
  submenu?: boolean;
  collapseFirst?: boolean;
  collapseLast?: boolean;
};

const useUtilityClasses = (ownerState: BreadcrumbsItemOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getBreadcrumbsItemUtilityClass, classes);
};

const BreadcrumbsItemRoot = styled('li', {
  name: 'ESBreadcrumbsItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: BreadcrumbsItemOwnerState }>(({ ownerState }) => ({
  display: 'flex',
  alignItems: 'center',
  '&:last-child': {
    minWidth: ownerState.menu?.length ? '60px' : '40px',
    width: ownerState.collapseLast ? (ownerState.menu?.length ? '60px' : '40px') : ''
  },
  ...(ownerState.disabled && { cursor: 'not-allowed' }),
  ...(ownerState.collapseFirst && {
    '&:first-child': {
      minWidth: ownerState.menu?.length ? '60px' : '40px'
    }
  })
}));

const BreadcrumbsButtonWrapper = styled(
  BreadcrumbsButton,
  {}
)<{ ownerState: BreadcrumbsItemOwnerState }>(({ theme }) => ({
  '&.MuiButton-root': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'block',
    lineHeight: '24px',
    '&.Mui-disabled': {
      color: theme.palette.monoA.A500
    }
  }
}));

const BreadcrumbsSubmenuButton = styled(
  BreadcrumbsButton,
  {}
)<{ ownerState: BreadcrumbsItemOwnerState }>(({ ownerState, theme }) => ({
  '&.MuiButton-root': {
    marginLeft: '-4px',
    flexShrink: 0,
    height: 'auto',
    '& .MuiSvgIcon-root': {
      color: theme.palette.monoA.A500,
      transform: !ownerState.submenu ? 'rotate(0deg)' : 'rotate(180deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    ...(ownerState.submenu && { backgroundColor: theme.palette.monoA.A50 })
  }
}));

export const BreadcrumbsItem: React.FC<BreadcrumbsItemProps> = (inProps) => {
  const {
    children,
    className,
    menu = [],
    disabled,
    collapseFirst,
    collapseLast,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESBreadcrumbsItem'
  });
  const ownerState = { ...props, menu, disabled, collapseFirst, collapseLast };
  const classes = useUtilityClasses(ownerState);

  const [subMenu, setSubMenu] = useState<null | HTMLButtonElement>(null);

  const onOpenSubmenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSubMenu(event.currentTarget);
  };

  const onCloseSubmenu = () => {
    setSubMenu(null);
  };

  return (
    <BreadcrumbsItemRoot ownerState={{ ...ownerState, submenu: !!subMenu }} className={clsx(classes.root, className)}>
      <BreadcrumbsButtonWrapper {...props} ownerState={ownerState} disabled={disabled}>
        {children}
      </BreadcrumbsButtonWrapper>
      {!!menu.length && (
        <>
          <BreadcrumbsSubmenuButton onClick={onOpenSubmenu} ownerState={{ submenu: !!subMenu }}>
            <IconBreadcrumbsMenu />
          </BreadcrumbsSubmenuButton>
          <BreadcrumbsMenu
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            onClose={onCloseSubmenu}
            open={!!subMenu}
            anchorEl={subMenu}
          >
            {menu.map((item: any, i) => (
              <BreadcrumbsCollapsedMenuItem id={i} key={item.key} {...item.props} />
            ))}
          </BreadcrumbsMenu>
        </>
      )}
    </BreadcrumbsItemRoot>
  );
};
