import { Children, cloneElement, CSSProperties, Fragment, isValidElement, useRef, useState } from 'react';

import { BreadcrumbsProps } from './Breadcrumbs.types';

import clsx from 'clsx';
import { breadcrumbClasses } from './Breadcrumb/Breadcrumb.classes';
import { breadcrumbsClasses, getBreadcrumbsUtilityClass } from './Breadcrumbs.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { buttonBaseClasses, paperClasses } from '@mui/material';
import Menu, { menuClasses } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';

import { Breadcrumb } from './Breadcrumb/Breadcrumb';

import { useResizeObserver } from '../../hooks';
import { IconDotsHorizontal2W300 } from '../../icons';
import { TooltipEllipsis, TooltipEllipsisProps } from '../TooltipEllipsis';

type BreadcrumbsOwnerState = {
  classes?: BreadcrumbsProps['classes'];
  open?: boolean;
};

const useUtilityClasses = (ownerState: BreadcrumbsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    list: ['list'],
    buttonMore: ['buttonMore'],
    menu: ['menu'],
    menuItem: ['menuItem'],
    tooltip: ['tooltip']
  };

  return composeClasses(slots, getBreadcrumbsUtilityClass, classes);
};

const BreadcrumbsRoot = styled(Typography, {
  name: 'ESBreadcrumbs',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({})) as typeof Typography;

const BreadcrumbsList = styled('ol', {
  name: 'ESBreadcrumbs',
  slot: 'List',
  overridesResolver: (props, styles) => styles.list
})<{ ownerState: BreadcrumbsOwnerState }>(({ theme, ownerState }) => ({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  padding: 0,
  margin: 0,

  ...(ownerState.open && {
    [`.${breadcrumbsClasses.buttonMore}`]: {
      [`.${buttonBaseClasses.root}.${breadcrumbClasses.content}`]: {
        backgroundColor: theme.palette.monoA.A50
      }
    }
  })
}));

const BreadcrumbsMenu = styled(Menu, {
  name: 'ESBreadcrumbs',
  slot: 'Menu',
  overridesResolver: (props, styles) => styles.menu
})(() => ({
  [`& .${menuClasses.list}`]: {
    padding: '4px 0',
    maxWidth: '240px'
  },

  [`.${paperClasses.root}`]: {
    marginTop: '4px'
  }
})) as typeof Menu;

const BreadcrumbsTooltip = styled(
  ({ className, ...props }: TooltipEllipsisProps) => <TooltipEllipsis {...props} classes={{ popper: className }} />,
  {
    name: 'ESBreadcrumbs',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => styles.tooltip
  }
)(() => ({
  [`&[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]: {
    marginLeft: '10px !important'
  },
  [`&[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]: {
    marginRight: '10px !important'
  }
}));

const BreadcrumbsMenuItem = styled(MenuItem, {
  name: 'ESBreadcrumbs',
  slot: 'MenuItem',
  overridesResolver: (props, styles) => styles.menuItem
})(({ theme }) => ({
  minHeight: '32px',
  padding: '8px 12px',
  width: '100%',

  ...theme.typography.caption
})) as typeof MenuItem;

/**
 * Breadcrumbs consist of a list of links that help a user visualize a page's location
 * within the hierarchical structure of a website, and allow navigation up to any of its "ancestors".
 */
export const Breadcrumbs = (inProps: BreadcrumbsProps) => {
  const {
    children,
    className,
    iconButtonMore = <IconDotsHorizontal2W300 />,
    labelButtonMore,
    sx,
    ...props
  } = useThemeProps({ props: inProps, name: 'ESBreadcrumbs' });

  const [lastIndex, setLastIndex] = useState(Children.count(children) - 1);

  useEnhancedEffect(() => {
    setLastIndex(0);
  }, []);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const ref = useRef<HTMLOListElement | null>(null);

  const onOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseMenu = () => {
    setAnchorEl(null);
  };

  useResizeObserver(ref, () => {
    if (typeof window !== 'undefined' && ref.current) {
      let width = 0;
      const nodes = ref.current.querySelectorAll(`.${breadcrumbClasses.root}:not(.${breadcrumbsClasses.buttonMore})`);
      const button = ref.current.querySelector(`.${breadcrumbsClasses.buttonMore}`);

      nodes.forEach((item) => {
        (item as HTMLElement).style.display = 'flex';
        width += (item as HTMLElement).offsetWidth;
      });

      if (width > ref.current.offsetWidth) {
        width += (button as HTMLElement).offsetWidth;
      }

      let i = 1;
      while (width > ref.current.offsetWidth && i < nodes.length - 1) {
        width -= (nodes[i] as HTMLElement).offsetWidth;
        i++;
      }

      for (let j = 1; j < i; j++) {
        (nodes[j] as HTMLElement).style.display = 'none';
      }

      onCloseMenu();
      setLastIndex(i);
    }
  });

  const ownerState = { open, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <BreadcrumbsRoot className={clsx(classes.root, className)} component="nav" sx={sx} {...props}>
      <BreadcrumbsList
        ref={ref}
        itemScope
        className={clsx(classes.list)}
        itemType="https://schema.org/BreadcrumbList"
        ownerState={ownerState}
      >
        {Children.map(children, (child, idx) => {
          if (!isValidElement(child)) {
            return null;
          }

          const item = cloneElement(child, {
            position: (idx + 1).toString(),
            shouldFirstShrink: lastIndex >= Children.count(children) - 1,
            style: { display: idx > 0 && idx < lastIndex ? 'none' : 'flex' }
          } as { position: string; shouldFirstShrink: boolean; style: CSSProperties });

          return (
            <Fragment key={idx}>
              {item}

              {idx === 0 && (
                <Breadcrumb
                  aria-label={labelButtonMore}
                  className={clsx(classes.buttonMore)}
                  style={{ display: lastIndex > 1 ? 'flex' : 'none' }}
                  onClick={onOpenMenu}
                >
                  {iconButtonMore}
                </Breadcrumb>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbsList>

      <BreadcrumbsMenu anchorEl={anchorEl} className={clsx(classes.menu)} open={open} onClose={onCloseMenu}>
        {Children.map(children, (child, idx) => {
          if (!isValidElement(child)) {
            return null;
          }
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { children, ...rest } = child.props;

          if (idx >= 1 && idx < lastIndex) {
            return (
              <BreadcrumbsTooltip
                arrow
                disableInteractive
                className={clsx(classes.tooltip)}
                title={<Typography variant="caption">{children}</Typography>}
              >
                {({ ref, childrenRef }) => (
                  <BreadcrumbsMenuItem ref={ref} className={clsx(classes.menuItem)} {...rest}>
                    <Typography ref={childrenRef} noWrap>
                      {children}
                    </Typography>
                  </BreadcrumbsMenuItem>
                )}
              </BreadcrumbsTooltip>
            );
          }

          return null;
        })}
      </BreadcrumbsMenu>
    </BreadcrumbsRoot>
  );
};
