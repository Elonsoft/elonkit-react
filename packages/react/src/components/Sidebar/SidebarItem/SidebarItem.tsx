import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { SidebarItemProps, SidebarItemTypeMap } from './SidebarItem.types';

import clsx from 'clsx';
import { getSidebarItemUtilityClass, sidebarItemClasses } from './SidebarItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { buttonBaseClasses, touchRippleClasses } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';
import ListItemButton, { listItemButtonClasses } from '@mui/material/ListItemButton';
import ListItemIcon, { listItemIconClasses } from '@mui/material/ListItemIcon';
import ListItemText, { listItemTextClasses } from '@mui/material/ListItemText';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import Typography, { TypographyProps } from '@mui/material/Typography';

import { useResizeObserver } from '../../../hooks';
import { IconChevronLeftW200 } from '../../../icons';
import { svgIconClasses } from '../../SvgIcon';
import { useSidebarContext } from '../Sidebar.context';
import { useSidebarMenuContext } from '../SidebarMenu/SidebarMenu.context';

type SidebarItemOwnerState = {
  classes?: SidebarItemProps['classes'];
  icon?: ReactNode;
  open?: boolean;
  color?: TypographyProps['color'];
  width: number;
  isNestedMenuOpen?: boolean | null;
  behaviour?: 'click' | 'hover';
  children?: React.ReactNode;
};

const useUtilityClasses = (ownerState: SidebarItemOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    wrapper: ['wrapper'],
    button: ['button'],
    tooltip: ['tooltip'],
    tooltipItem: ['tooltipItem'],
    tooltipTitle: ['tooltipTitle'],
    tooltipDivider: ['tooltipDivider'],
    text: ['text'],
    icon: ['icon'],
    nestedMenu: ['nestedMenu'],
    container: ['container'],
    secondaryAction: ['secondaryAction']
  };

  return composeClasses(slots, getSidebarItemUtilityClass, classes);
};

const SidebarItemRoot = styled('div', {
  name: 'ESSidebarItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  margin: '0 8px'
}));

const SidebarItemWrapper = styled('div', {
  name: 'ESSidebarItem',
  slot: 'Wrapper',
  overridesResolver: (props, styles) => styles.wrapper
})(() => ({
  position: 'relative'
}));

const SidebarItemButton = styled(ListItemButton, {
  name: 'ESSidebarItem',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})<{ ownerState: SidebarItemOwnerState }>(({ theme, ownerState }) => ({
  [`&.${listItemButtonClasses.root}`]: {
    borderRadius: '4px',
    width: '100%',
    padding: '6px 8px',
    fontFamily: 'inherit',

    [`&.${buttonBaseClasses.root}`]: {
      [`& .${touchRippleClasses.root}`]: {
        transitionDuration: `${theme.transitions.duration.short}ms`
      }
    },
    ...((ownerState.color === 'default' || ownerState.color === 'secondary') && {
      ...theme.mixins.listItem({
        background: 'transparent',
        color: theme.palette.monoA.A800,
        hover: theme.palette.monoA.A50,
        icon: theme.palette.monoA.A500,
        focus: theme.palette.monoA.A200,
        active: theme.palette.monoA.A150
      }),
      [`&.${listItemButtonClasses.selected}`]: {
        ...theme.mixins.listItem({
          background: theme.palette.monoA.A100,
          hover: theme.palette.monoA.A50,
          icon: theme.palette.monoA.A600,
          focus: theme.palette.monoA.A75,
          active: theme.palette.monoA.A150
        })
      }
    }),
    ...(ownerState.color === 'primary' && {
      ...theme.mixins.listItem({
        background: 'transparent',
        color: theme.palette.monoB.A800,
        icon: theme.palette.monoB.A800,
        hover: theme.palette.monoB.A50,
        focus: theme.palette.monoB.A200,
        active: theme.palette.monoB.A150
      }),
      [`&.${listItemButtonClasses.selected}`]: {
        ...theme.mixins.listItem({
          background: theme.palette.monoB.A100,
          color: theme.palette.monoB[500],
          icon: theme.palette.monoB[500],
          hover: theme.palette.monoB.A50,
          focus: theme.palette.monoB.A75,
          active: theme.palette.monoB.A150
        })
      }
    })
  }
}));

const SidebarItemSecondaryAction = styled(IconButton, {
  name: 'ESSidebarItem',
  slot: 'SecondaryAction',
  overridesResolver: (props, styles) => styles.secondaryAction
})<{ ownerState: SidebarItemOwnerState }>(({ theme, ownerState }) => ({
  [`&.${iconButtonClasses.root}`]: {
    cursor: 'pointer',
    position: 'absolute',
    left: `${ownerState.width}px`,
    top: '8px',
    zIndex: '5',

    ...(ownerState.behaviour === 'hover' && {
      [`&.${iconButtonClasses.disabled}`]: {
        opacity: '1'
      }
    }),

    ...((ownerState.color === 'default' || ownerState.color === 'secondary') && {
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.monoA.A500,
        hover: theme.palette.monoA.A50,
        focus: theme.palette.monoA.A200,
        active: theme.palette.monoA.A150
      })
    }),

    ...(ownerState.color === 'primary' && {
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.monoB.A800,
        hover: theme.palette.monoB.A50,
        focus: theme.palette.monoB.A200,
        active: theme.palette.monoB.A150
      })
    }),

    [`& .${svgIconClasses.root}`]: {
      transform: `${ownerState.isNestedMenuOpen ? 'rotate(270deg)' : 'none'}`
    }
  }
}));

const SidebarItemText = styled(ListItemText, {
  name: 'ESSidebarItem',
  slot: 'Text',
  overridesResolver: (props, styles) => styles.text
})<{ ownerState: SidebarItemOwnerState }>(({ ownerState: { open } }) => ({
  whiteSpace: 'nowrap',
  display: `${open ? 'block' : 'none'}`,

  [`&.${listItemTextClasses.inset}`]: {
    paddingLeft: '36px'
  }
}));

const SidebarItemIcon = styled(ListItemIcon, {
  name: 'ESSidebarItem',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon
})<{ ownerState: SidebarItemOwnerState }>(({ ownerState: { isNestedMenuOpen } }) => ({
  '&:last-of-type': {
    marginLeft: '3.5px'
  },

  [`& .${svgIconClasses.root}`]: {
    transform: `${isNestedMenuOpen ? 'rotate(270deg)' : 'none'}`
  }
}));

const SidebarItemContainer = styled('div', {
  name: 'ESSidebarItem',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})(() => ({
  display: 'flex',
  alignItems: 'center',

  [`& .${listItemIconClasses.root}:first-of-type`]: {
    marginRight: '12px'
  }
}));

const SidebarItemNestedMenu = styled('div', {
  name: 'ESSidebarItem',
  slot: 'NestedMenu',
  overridesResolver: (props, styles) => styles.nestedMenu
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  marginTop: '2px',

  [`& .${sidebarItemClasses.root}`]: {
    margin: '0'
  }
}));

const SidebarItemTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESSidebarItem',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => styles.tooltip
  }
)(({ theme }) => ({
  [`&[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]: {
    padding: '0',
    maxWidth: '288px',
    background: theme.palette.surface[400],
    boxShadow: theme.palette.shadow.down[600],
    marginLeft: '10px !important',
    color: theme.palette.monoA.A900,
    borderRadius: '4px',

    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.surface[400],
      backdropFilter: 'none'
    }
  },
  '&[data-popper-reference-hidden]': {
    pointerEvents: 'none',
    opacity: '0'
  }
}));

const SidebarItemTooltipTitle = styled(MenuList, {
  name: 'ESSidebarItem',
  slot: 'TooltipTitle',
  overridesResolver: (props, styles) => styles.tooltipTitle
})<{ ownerState: SidebarItemOwnerState }>(({ theme, ownerState }) => ({
  maxHeight: '100vh',
  ...theme.scrollbars.overlayMonoA,

  ...(ownerState.children && {
    paddingBottom: '8px'
  })
}));

const SidebarItemTooltipItem = styled(MenuItem, {
  name: 'ESSidebarItem',
  slot: 'TooltipItem',
  overridesResolver: (props, styles) => styles.tooltipItem
})(() => ({
  [`&.${menuItemClasses.root}`]: {
    width: '100%',
    minHeight: '32px',
    padding: '6px 16px',

    '&:first-child': {
      margin: '4px 0'
    },

    [`&.${menuItemClasses.disabled}`]: {
      opacity: '1'
    }
  }
})) as typeof MenuItem;

const SidebarItemTooltipDivider = styled('div', {
  name: 'ESSidebarItem',
  slot: 'TooltipDivider',
  overridesResolver: (props, styles) => styles.tooltipDivider
})(({ theme }) => ({
  height: '1px',
  marginBottom: '8px',
  backgroundColor: theme.palette.monoA.A100
}));

export const SidebarItem: OverridableComponent<SidebarItemTypeMap> = (inProps: SidebarItemProps) => {
  const {
    children,
    className,
    icon,
    iconToggle = <IconChevronLeftW200 container containerSize="16px" />,
    inset,
    onClick,
    onKeyDown,
    onTouchStart,
    labelOpen,
    labelHide,
    sx,
    text,
    id,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSidebarItem'
  });

  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const [width, setWidth] = useState<number>(0);

  const ref = useRef<HTMLDivElement | null>(null);
  const refTooltip = useRef<HTMLUListElement | null>(null);
  const refItem = useRef<HTMLDivElement | null>(null);
  const shouldSkipClick = useRef(false);

  const { color, open } = useSidebarContext();
  const { openedItems, onOpen, behaviour, onClose } = useSidebarMenuContext();

  const isNestedMenuOpen = id ? openedItems.includes(id) : null;

  const component = (props as any).component as React.ElementType;

  useResizeObserver(ref, () => {
    if (ref.current && component) {
      const { clientWidth, offsetLeft } = ref.current;
      setWidth(clientWidth + offsetLeft);
    }
  });

  useEffect(() => {
    setTooltipOpen(false);
  }, [open]);

  const onTooltipOpen = () => {
    if (!open && text) {
      setTooltipOpen(true);
    }
  };

  const onTooltipClose = useCallback(() => {
    setTooltipOpen(false);
  }, []);

  const onTooltipKeyDown = (event: React.KeyboardEvent) => {
    if (children && refItem.current && event.key === 'ArrowLeft') {
      refItem.current.focus();
    }
  };

  const onItemKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (children && refTooltip.current && event.key === 'ArrowRight') {
      let element = refTooltip.current.firstChild as HTMLElement;
      if (element.getAttribute('aria-disabled')) {
        element = element.nextSibling as HTMLElement;
      }
      element.focus();
    }

    onKeyDown?.(event);
  };

  const onNestedMenuHover = (e: React.MouseEvent) => {
    if (behaviour === 'hover' && id) {
      if (e.type === 'mouseenter') {
        onOpen(id);
      } else {
        onClose(id);
      }
    }
  };

  const onNestedMenuClick = (e: React.MouseEvent) => {
    if (children && !isTooltipOpen) {
      e.preventDefault();
    }

    if (open && behaviour === 'click' && id) {
      if (isNestedMenuOpen) {
        onClose(id);
      } else {
        onOpen(id);
      }
    }
  };

  const onItemTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    onTouchStart?.(e);

    if (!open && !isTooltipOpen && children) {
      shouldSkipClick.current = true;
    }
  };

  const onItemClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldSkipClick.current) {
      shouldSkipClick.current = false;
      e.preventDefault();
      return;
    }

    onClick?.(e);
    if (!component) {
      onNestedMenuClick(e);
    }
  };

  const onMouseDown = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const ownerState = { children, icon, open, color, isNestedMenuOpen, width, behaviour, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SidebarItemTooltip
      arrow={!!text}
      className={clsx(classes.tooltip)}
      disableInteractive={!children}
      enterDelay={100}
      enterNextDelay={200}
      enterTouchDelay={0}
      leaveDelay={120}
      leaveTouchDelay={Infinity}
      open={isTooltipOpen}
      placement={children ? 'right-start' : 'right'}
      title={
        <SidebarItemTooltipTitle
          ref={refTooltip}
          disablePadding
          className={clsx(classes.tooltipTitle)}
          ownerState={ownerState}
          onKeyDown={onTooltipKeyDown}
          onMouseDown={onMouseDown}
        >
          <SidebarItemTooltipItem
            className={clsx(classes.tooltipItem)}
            component={component}
            disabled={!onClick}
            tabIndex={-1}
            onClick={onClick}
            {...props}
            selected={false}
          >
            <Typography variant="body100">{text}</Typography>
          </SidebarItemTooltipItem>

          {!!children && <SidebarItemTooltipDivider />}
          {!!children &&
            React.Children.map(children, (child: any, idx: number) => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { text, inset, ...rest } = child.props;

              return (
                <SidebarItemTooltipItem key={idx} className={clsx(classes.tooltipItem)} tabIndex={idx} {...rest}>
                  <Typography variant="body100">{text}</Typography>
                </SidebarItemTooltipItem>
              );
            })}
        </SidebarItemTooltipTitle>
      }
      onClose={onTooltipClose}
      onOpen={onTooltipOpen}
    >
      <SidebarItemRoot
        className={clsx(classes.root, className)}
        sx={sx}
        onMouseEnter={onNestedMenuHover}
        onMouseLeave={onNestedMenuHover}
      >
        <SidebarItemWrapper className={clsx(classes.wrapper)}>
          <SidebarItemButton
            ref={refItem}
            className={clsx(classes.button)}
            ownerState={ownerState}
            onClick={onItemClick}
            onKeyDown={onItemKeyDown}
            onTouchStart={onItemTouchStart}
            {...props}
          >
            <SidebarItemContainer ref={ref} className={clsx(classes.container)}>
              {!!icon && <ListItemIcon>{icon}</ListItemIcon>}

              <SidebarItemText
                className={clsx(classes.text)}
                inset={inset}
                ownerState={ownerState}
                primary={text}
                primaryTypographyProps={{ variant: 'body100' }}
              />
              {children && open && !component && (
                <SidebarItemIcon className={clsx(classes.icon)} ownerState={ownerState}>
                  {iconToggle}
                </SidebarItemIcon>
              )}
            </SidebarItemContainer>
          </SidebarItemButton>

          {children && open && component && (
            <SidebarItemSecondaryAction
              aria-label={isNestedMenuOpen ? labelHide : labelOpen}
              className={clsx(classes.secondaryAction)}
              disabled={behaviour === 'hover'}
              ownerState={ownerState}
              size="24"
              onClick={onNestedMenuClick}
            >
              {iconToggle}
            </SidebarItemSecondaryAction>
          )}
        </SidebarItemWrapper>

        {open && !!children && (
          <Collapse unmountOnExit in={!!isNestedMenuOpen} timeout="auto">
            <SidebarItemNestedMenu className={clsx(classes.nestedMenu)}>{children}</SidebarItemNestedMenu>
          </Collapse>
        )}
      </SidebarItemRoot>
    </SidebarItemTooltip>
  );
};
