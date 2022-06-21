import React, { ReactNode, TouchEvent, useState } from 'react';
import { useCallback } from 'react';

import { SidebarItemProps, SidebarItemTypeMap } from './SidebarItem.types';

import clsx from 'clsx';
import { getSidebarItemUtilityClass } from './SidebarItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import { TypographyProps } from '@mui/material/Typography';

import { IconChevronLeft } from '../../../icons';
import { useSidebarContext } from '../Sidebar.context';
import { useSidebarMenuContext } from '../SidebarMenu/SidebarMenu.context';

type SidebarItemOwnerState = {
  icon?: ReactNode;
  open?: boolean;
  color?: TypographyProps['color'];
  classes?: SidebarItemProps['classes'];
};

const useUtilityClasses = (ownerState: SidebarItemOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    itemTooltip: ['itemTooltip'],
    itemMenuItem: ['itemMenuItem']
  };

  return composeClasses(slots, getSidebarItemUtilityClass, classes);
};
const SidebarItemRoot = styled(ListItemButton, {
  name: 'ESSidebarItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.itemButton
})<{ ownerState: SidebarItemOwnerState }>(({ ownerState, theme }) => ({
  borderRadius: '6px',
  padding: '1px 4px',
  margin: '0 8px',

  ...(!ownerState.open && {
    textAlign: 'center',
    justifyContent: 'center'
  }),
  ...(ownerState.color === 'primary' && {
    '& .MuiListItemIcon-root, .MuiListItemText-root': {
      color: `${theme.palette.monoB[500]}`,

      '&:hover': {
        color: `${theme.palette.monoB[500]}`
      }
    }
  }),
  ...(ownerState.color === 'default' && {
    '& .MuiListItemIcon-root, .MuiListItemText-root': {
      color: `${theme.palette.monoA.A800}`,

      '&:hover': {
        color: `${theme.palette.monoA.A800}`
      }
    }
  })
}));
const SidebarItemTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESidebarItem',
    slot: 'ItemTooltip',
    overridesResolver: (props, styles) => styles.itemTooltip
  }
)(() => ({
  '&[data-popper-placement*="right"] .MuiTooltip-tooltip': {
    padding: '0',
    maxWidth: '288px'
  }
}));
const SidebarItemTooltipTitle = styled(MenuList, {
  name: 'ESSidebarItem',
  slot: 'ItemTooltipTitle',
  overridesResolver: (props, styles) => styles.itemMenuItem
})(({ theme }) => ({
  maxHeight: '200px',
  ...theme.scrollbars.overlay
}));
const SidebarItemMenuItem = styled(MenuItem, {
  name: 'ESSidebarItem',
  slot: 'ItemMenuItem',
  overridesResolver: (props, styles) => styles.itemMenuItem
})(({ theme }) => ({
  minHeight: '24px',
  color: theme.palette.monoB[500]
}));
export const SidebarItem: OverridableComponent<SidebarItemTypeMap> = (inProps: SidebarItemProps) => {
  const { className, children, icon, onClick, onTouchStart, sx, text, id, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSidebarItem'
  });

  const [isOpen, setOpen] = useState(false);

  const { color, open } = useSidebarContext();
  const { openItems, onOpen, behaviour, onClose } = useSidebarMenuContext();

  const isNestedMenuOpen = id ? openItems.includes(id) : null;

  const onNestedMenuToggle = () => {
    if (open && id) {
      children && isNestedMenuOpen ? onClose(id) : onOpen(id);
    }
  };

  const onNestedMenuHover = () => {
    if (behaviour === 'hover') {
      onNestedMenuToggle();
    }
  };

  const onNestedMenuClick = () => {
    if (behaviour === 'click') {
      onNestedMenuToggle();
    }
  };

  const onTooltipOpen = () => {
    if (!open) {
      setOpen(true);
    }
  };

  const onTooltipClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onSidebarItemClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }

    if (children && !isOpen) {
      e.preventDefault();
    }

    onNestedMenuClick();
  };

  const onSidebarItemTouchStart = (e: TouchEvent) => {
    if (onTouchStart) {
      onTouchStart();
    }

    if (children) {
      e.preventDefault();
      onTooltipOpen();
    }
  };

  const ownerState = { children, icon, open, color, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <>
      <SidebarItemTooltip
        className={clsx(classes.itemTooltip)}
        open={isOpen}
        onClose={onTooltipClose}
        onOpen={onTooltipOpen}
        disableTouchListener
        arrow
        title={
          !open && (
            <SidebarItemTooltipTitle disablePadding>
              <SidebarItemMenuItem className={clsx(classes.itemMenuItem)} onClick={onClick}>
                <Typography variant="caption">{text}</Typography>
              </SidebarItemMenuItem>

              {children && (
                <div>
                  <Divider sx={{ '&.MuiDivider-fullWidth': { m: 0 } }} />

                  {React.Children.map(children, (child: any, idx: number) => (
                    <SidebarItemMenuItem className={clsx(classes.itemMenuItem)} key={idx} {...child.props}>
                      <Typography variant="caption">{child.props.text}</Typography>
                    </SidebarItemMenuItem>
                  ))}
                </div>
              )}
            </SidebarItemTooltipTitle>
          )
        }
        placement="right-end"
      >
        <div onMouseLeave={onNestedMenuHover} onMouseEnter={onNestedMenuHover}>
          <div>
            <SidebarItemRoot
              className={clsx(classes.root, className)}
              ownerState={ownerState}
              sx={sx}
              {...props}
              onTouchStart={onSidebarItemTouchStart}
              onClick={onSidebarItemClick}
            >
              {!icon ? (
                <ListItemText>{!open ? text?.toString()[0] : text}</ListItemText>
              ) : !open ? (
                <ListItemIcon>{icon}</ListItemIcon>
              ) : (
                <>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{text}</ListItemText>
                </>
              )}

              {children && open && (
                <ListItemIcon>
                  <IconChevronLeft
                    sx={{
                      width: '20px',
                      height: '20px',
                      transform: `rotate(${isNestedMenuOpen && '270'}deg)`
                    }}
                  />
                </ListItemIcon>
              )}
            </SidebarItemRoot>

            {open && (
              <Collapse in={!!isNestedMenuOpen} timeout="auto" unmountOnExit>
                <MenuList component="div" disablePadding>
                  {children}
                </MenuList>
              </Collapse>
            )}
          </div>
        </div>
      </SidebarItemTooltip>
    </>
  );
};
