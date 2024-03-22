import { useCallback, useEffect, useRef, useState } from 'react';

import { SidenavItemProps, SidenavItemTypeMap } from './SidenavItem.types';

import clsx from 'clsx';
import { sidenavClasses } from '../Sidenav.classes';
import { getSidenavItemUtilityClass } from './SidenavItem.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { TypographyProps } from '@mui/material';
import ListItemButton, { listItemButtonClasses } from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

import { useSidebarContext } from '../../Sidebar/Sidebar.context';
import { useSidenavContext } from '../Sidenav.context';

type SidenavItemOwnerState = {
  color?: TypographyProps['color'];
  classes?: SidenavItemProps['classes'];
};

const useUtilityClasses = (ownerState: SidenavItemOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    tooltip: ['tooltip']
  };

  return composeClasses(slots, getSidenavItemUtilityClass, classes);
};

const SidenavItemRoot = styled(ListItemButton, {
  name: 'ESSidenavItem',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: SidenavItemOwnerState }>(({ theme, ownerState }) => ({
  [`&.${listItemButtonClasses.root}`]: {
    borderRadius: '6px',
    padding: '0 4px',
    margin: '0 8px',
    justifyContent: 'center',

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

const SidenavItemTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESidenavItem',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => styles.tooltip
  }
)(({ theme }) => ({
  [`&[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]: {
    padding: '4px 8px',
    marginLeft: '1px !important',
    maxWidth: '288px',

    ...theme.typography.caption
  },
  '&[data-popper-reference-hidden]': {
    pointerEvents: 'none',
    opacity: '0'
  }
}));

export const SidenavItem: OverridableComponent<SidenavItemTypeMap> = (inProps: SidenavItemProps) => {
  const {
    className,
    sx,
    id = null,
    icon,
    text,
    selected,
    onClick,
    onTouchStart,
    onKeyDown,
    onFocus,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSidenavItem'
  });

  const { open, hover, itemId, setHover, setItemId, disableItemHover } = useSidenavContext();
  const { color } = useSidebarContext();

  const [isTooltipOpen, setTooltipOpen] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);
  const shouldSkipClick = useRef(false);

  const onItemTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    onTouchStart?.(event);

    if (id && !open && (!hover || id !== itemId)) {
      shouldSkipClick.current = true;
    }
  };

  const onItemClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (id) {
      setItemId(id);
      if (!open) {
        setHover(true);
      }
    } else {
      setHover(false);
    }

    if (shouldSkipClick.current) {
      shouldSkipClick.current = false;
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    onClick?.(event);
  };

  const onItemFocus = (event: React.FocusEvent<HTMLDivElement>) => {
    onFocus?.(event);

    if (id) {
      setItemId(id);
      if (!open) {
        setHover(true);
      }
    } else {
      setHover(false);
    }
  };

  const onItemKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);

    if (ref.current && event.key === 'ArrowRight') {
      const sidenav = ref.current.closest(`.${sidenavClasses.root}`) as HTMLElement;
      const sidebar = sidenav.querySelector(`.${sidenavClasses.drawer}`) as HTMLElement;
      const element = sidebar.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement | null;

      if (element) {
        element.focus();
      }
    }
  };

  const onTooltipClose = useCallback(() => {
    setTooltipOpen(false);
  }, []);

  const onTooltipOpen = () => {
    if (text && (!id || (id !== itemId && open && disableItemHover))) {
      setTooltipOpen(true);
    }
  };

  useEffect(() => {
    if (isTooltipOpen && id && id === itemId) {
      setTooltipOpen(false);
    }
  }, [isTooltipOpen, id, itemId]);

  const ownerState = { color, open, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SidenavItemTooltip
      disableInteractive
      arrow={!!text}
      className={clsx(classes.tooltip)}
      enterNextDelay={200}
      leaveDelay={120}
      open={isTooltipOpen}
      placement="right"
      title={<>{text}</>}
      onClose={onTooltipClose}
      onOpen={onTooltipOpen}
    >
      <div className="ESSidenavItem-wrapper" data-id={id}>
        <SidenavItemRoot
          ref={ref}
          className={clsx(classes.root, className)}
          data-id={id}
          ownerState={ownerState}
          selected={selected}
          sx={sx}
          onClick={onItemClick}
          onFocus={onItemFocus}
          onKeyDown={onItemKeyDown}
          onTouchStart={onItemTouchStart}
          {...props}
        >
          <ListItemIcon>{icon}</ListItemIcon>
        </SidenavItemRoot>
      </div>
    </SidenavItemTooltip>
  );
};
