import React, { memo, useRef, useState } from 'react';

import { SFSSortingDirection, SFSSortingOptionMap, SFSSortingProps, SFSSortingValue } from './SFSSorting.types';

import clsx from 'clsx';
import { getSFSSortingUtilityClass, sfsSortingClasses } from './SFSSorting.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { ListItemText, useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import {
  IconSortAscending,
  IconSortAscending2,
  IconSortDescending,
  IconSortDescending2,
  IconSortOff
} from '../../../icons';
import { Kbd, kbdClasses } from '../../Kbd';
import { Link } from '../../Link';
import { svgIconClasses } from '../../SvgIcon';
import { Switch, switchClasses } from '../../Switch';
import { SFSButton } from '../SFSButton';

type SFSSortingOwnerState = {
  classes?: SFSSortingProps['classes'];
  isWithValue?: boolean;
};

const useUtilityClasses = (ownerState: SFSSortingOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    menuButton: ['menuButton'],
    menuButtonBadge: ['menuButtonBadge'],
    menu: ['menu'],
    menuItem: ['menuItem'],
    menuHeader: ['menuHeader'],
    menuFooter: ['menuFooter'],
    resetButton: ['resetButton'],
    directionButton: ['directionButton'],
    directionButtonBadge: ['directionButtonBadge'],
    directionButtonBadgeText: ['directionButtonBadgeOrder'],
    plusSign: ['plusSign'],
    caption: ['caption']
  };

  return composeClasses(slots, getSFSSortingUtilityClass, classes);
};

const SFSSortingRoot = styled('div', {
  name: 'ESSFSSorting',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(() => ({}));

const SFSSortingMenuButton = styled(SFSButton, {
  name: 'ESSFSSorting',
  slot: 'MenuButton',
  overridesResolver: (_, styles) => styles.menuButton
})<{ ownerState: SFSSortingOwnerState }>(({ ownerState, theme }) => ({
  gap: '4px',

  [`&:hover .${sfsSortingClasses.menuButtonBadge}, &:focus-visible .${sfsSortingClasses.menuButtonBadge},, & .${sfsSortingClasses.menuButtonBadge}`]:
    {
      [`&.MuiTypography-root, & .${svgIconClasses.root}`]: {
        color: `${theme.palette.black.A800}`
      }
    },
  [theme.breakpoints.up('tabletXS')]: {
    [`& > .${svgIconClasses.root}`]: {
      display: ownerState.isWithValue && 'none'
    }
  },
  [theme.breakpoints.down('tabletXS')]: {
    gap: '2px',
    '& > .MuiTypography-root:first-of-type': {
      display: 'none'
    }
  }
}));

const SFSSortingMenuButtonBadge = styled(Typography, {
  name: 'ESSFSSorting',
  slot: 'MenuButtonBadge',
  overridesResolver: (_, styles) => styles.menuButtonBadge
})(({ theme }) => ({
  width: '16px',
  height: '16px',
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.secondary[300]
})) as typeof Typography;

const SFSSortingMenu = styled(Popover, {
  name: 'ESSFSSorting',
  slot: 'Menu',
  overridesResolver: (_, styles) => styles.menu
})(({ theme }) => ({
  '& .MuiPopover-paper': {
    ...theme.scrollbars.overlayMonoA,
    marginTop: '4px',
    paddingBottom: '6px',
    backgroundImage: 'none',
    backgroundColor: theme.palette.surface[400],
    boxShadow: theme.palette.shadow.down[600],
    userSelect: 'none',
    overflowX: 'hidden',

    '& .MuiList-root': {
      minWidth: '320px',
      maxWidth: '100%',
      padding: '0 16px'
    }
  }
}));

const SFSSortingMenuHeader = styled('div', {
  name: 'ESSFSSorting',
  slot: 'MenuHeader',
  overridesResolver: (_, styles) => styles.menuHeader
})(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '14px 16px 6px 16px'
}));

const SFSSortingMenuFooter = styled('div', {
  name: 'ESSFSSorting',
  slot: 'MenuFooter',
  overridesResolver: (_, styles) => styles.menuFooter
})(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.monoA.A100}`,
  marginTop: '8px',
  padding: '6px 3px 0 12px',
  display: 'flex',
  alignItems: 'center',

  [`& .${kbdClasses.root}:first-of-type`]: {
    marginRight: '3px'
  },

  [`& .${kbdClasses.root}:last-of-type`]: {
    marginLeft: '3px',
    marginRight: '8px'
  },

  [`& .${switchClasses.root}`]: {
    marginLeft: 'auto'
  }
}));

const SFSSortingResetButton = styled(Link, {
  name: 'ESSFSSorting',
  slot: 'ResetButton',
  overridesResolver: (_, styles) => styles.resetButton
})(({ theme }) => ({
  color: theme.palette.monoA.A500
})) as typeof Link;

const SFSSortingMenuItem = styled(MenuItem, {
  name: 'ESSFSSorting',
  slot: 'MenuItem',
  overridesResolver: (_, styles) => styles.menuItem
})(({ theme }) => ({
  '&.MuiMenuItem-root.MuiButtonBase-root:not(.Mui-disabled)': {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px 16px',
    margin: '0 -16px',
    minHeight: '32px',
    height: '32px',
    ...theme.mixins.listItem({
      background: '',
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A75,
      active: theme.palette.monoA.A150
    })
  },
  '&.MuiMenuItem-root.Mui-disabled': {
    color: 'inherit',
    padding: '0 0 6px 0',
    display: 'block',
    minHeight: 0,
    height: 'auto',
    opacity: 1,
    '& .MuiDivider-root': {
      margin: '8px -16px'
    }
  }
}));

const SFSSortingDirectionButton = styled(Button, {
  name: 'ESSFSSorting',
  slot: 'DirectionButton',
  overridesResolver: (_, styles) => styles.directionButton
})(({ theme }) => ({
  '&.MuiButton-root': {
    textTransform: 'unset',
    position: 'relative',
    zIndex: 10,
    borderRadius: 0,
    gap: '6px',
    padding: 0,
    color: theme.palette.monoA.A600,
    '&.Mui-focusVisible': {
      '& .MuiTypography-root': {
        color: theme.palette.monoA.A900
      },
      [`& .${sfsSortingClasses.directionButtonBadge}`]: {
        backgroundColor: theme.palette.secondary.A550
      }
    },
    '&:hover': {
      '& .MuiTouchRipple-root': {
        backgroundColor: 'transparent'
      },
      [`& .${sfsSortingClasses.directionButtonBadge}`]: {
        backgroundColor: theme.palette.secondary.A550
      },
      '& .MuiTypography-root:first-of-type': {
        color: theme.palette.monoA.A900
      }
    },
    '&:active': {
      [`& .${sfsSortingClasses.directionButtonBadge}`]: {
        backgroundColor: theme.palette.secondary.A400
      },
      '& .MuiTypography-root:first-of-type': {
        color: theme.palette.monoA.A600
      }
    }
  }
}));

const SFSSortingDirectionButtonBadge = styled('div', {
  name: 'ESSFSSorting',
  slot: 'DirectionButtonBadge',
  overridesResolver: (_, styles) => styles.directionButtonBadge
})(({ theme }) => ({
  display: 'flex',
  borderRadius: '4px',
  padding: '3px 2px',
  backgroundColor: theme.palette.secondary.A400,
  boxShadow: `inset 0 0 0 1px ${theme.palette.monoA.A25}`
}));

const SFSSortingPlusSign = styled(Typography, {
  name: 'ESSFSSorting',
  slot: 'PlusSign',
  overridesResolver: (_, styles) => styles.plusSign
})(({ theme }) => ({
  color: theme.palette.monoA.A900
})) as typeof Typography;

const SFSSortingCaption = styled(Typography, {
  name: 'ESSFSSorting',
  slot: 'Caption',
  overridesResolver: (_, styles) => styles.caption
})(({ theme }) => ({
  color: theme.palette.monoA.A600
})) as typeof Typography;

const getNextItem = (elem: HTMLLIElement): HTMLLIElement | undefined => {
  if (elem.nextElementSibling && (elem.nextElementSibling as HTMLLIElement).getAttribute('aria-disabled')) {
    return (elem.nextElementSibling as HTMLLIElement).nextElementSibling as HTMLLIElement;
  }

  if (elem.nextElementSibling) {
    return elem.nextElementSibling as HTMLLIElement;
  }
};

export const SFSSorting = memo(function SFSSorting(inProps: SFSSortingProps) {
  const {
    button,

    className,
    sx,
    options,

    labelAsc,
    labelDesc,
    labelResetButton,
    labelButton,
    labelSortOrder,
    labelSortTooltip,
    labelMultisortTitle,
    labelMultisortLMB,
    labelMultisortMobileOn,
    labelMultisortMobileOff,

    iconSort = <IconSortOff />,
    iconAsc = <IconSortAscending2 container containerSize="16px" />,
    iconDesc = <IconSortDescending2 container containerSize="16px" />,
    iconItemAsc = <IconSortAscending container containerHeight="12px" containerWidth="8px" />,
    iconItemDesc = <IconSortDescending container containerHeight="12px" containerWidth="8px" />,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSFSSorting'
  });

  const values = props.multiple ? props.value : props.value ? [props.value] : [];

  const ownerState = { classes: props.classes, isWithValue: !!values[0] };
  const classes = useUtilityClasses(ownerState);

  const isTouchScreen = useMediaQuery('(hover: none) and (pointer: coarse)');

  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const [isMultiple, setMultiple] = useState(props.multiple && props.value.length > 1);

  const menuListRef = useRef<HTMLUListElement | null>(null);

  const sortMap: Record<string, SFSSortingOptionMap> = {};
  const valuesMap: Record<string, { i: number; direction: SFSSortingDirection }> = {};

  values.forEach((value, i) => {
    valuesMap[value.value] = {
      direction: value.direction,
      i
    };
  });

  options.forEach((option) => {
    sortMap[option.value] = {
      ...option,
      ...valuesMap[option.value]
    };
  });

  const onSortChange = (values: SFSSortingValue[]) => {
    if (props.multiple) {
      props.onChange(values);
    } else {
      props.onChange(values[0] ? { ...values[0] } : null);
    }
  };

  const setFocusOnLastPressedElement = (label: string, e?: React.KeyboardEvent<HTMLLIElement>) => {
    if (!e?.code) {
      return;
    }
    setTimeout(() => {
      let elem = menuListRef.current?.firstChild as HTMLLIElement;
      do {
        if ((elem.firstChild as HTMLLIElement).innerText === label) {
          elem.focus();
          break;
        }
      } while ((elem = elem.nextElementSibling as HTMLLIElement));
    });
  };

  const onMenuClose = () => {
    setMenuAnchor(null);
  };

  const onMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(e.currentTarget);
  };

  const onChangeSortMode = () => {
    onSortChange(!isMultiple || values.length === 1 ? [...values] : []);
    setMultiple(!isMultiple);
  };

  const onResetSort = () => {
    setMultiple(false);
    onSortChange([]);
  };

  const toggleMultiSort = (value: string) => {
    const newValues: SFSSortingValue[] = values[sortMap[value].i]
      ? values.filter(({ value: v }) => v !== value || !isMultiple)
      : [...values, { value, direction: 'asc' }];

    setMultiple(!!newValues.length);
    onSortChange(newValues);
  };

  const onHandleSort =
    (value: string) => (e?: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>) => {
      const isMultipleSort = props.multiple && (isMultiple || e?.metaKey || e?.ctrlKey);

      if (isMultipleSort) {
        toggleMultiSort(value);
      } else {
        onSortChange(values[sortMap[value].i] ? [] : [{ value, direction: 'asc' }]);
      }

      setFocusOnLastPressedElement(sortMap[value].label, e as React.KeyboardEvent<HTMLLIElement>);
    };

  const onChangeSortDirection = (value: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const newValues = [...values];
    newValues[sortMap[value].i].direction = newValues[sortMap[value].i].direction === 'asc' ? 'desc' : 'asc';
    onSortChange(newValues);
  };

  const onKeyDownControl = (e: React.KeyboardEvent<HTMLLIElement | HTMLButtonElement>) => {
    if ((e.target as HTMLButtonElement).type === 'button') {
      switch (e.code) {
        case 'ArrowLeft':
          ((e.target as HTMLLIElement).parentNode as HTMLLIElement).focus();
          break;
        case 'ArrowUp':
          const prevElement = ((e.target as HTMLButtonElement).parentElement as HTMLLIElement).previousElementSibling;
          if (prevElement) {
            e.stopPropagation();
            (prevElement as HTMLLIElement).focus();
          }
          break;
        case 'ArrowDown':
          const nextElement = getNextItem((e.target as HTMLButtonElement).parentElement as HTMLLIElement);
          if (nextElement) {
            e.stopPropagation();
            nextElement.focus();
          }
          break;
      }
    } else if (e.code === 'ArrowRight' && (e.target as any).childNodes[1]) {
      ((e.target as HTMLLIElement).childNodes[1] as HTMLButtonElement).focus();
    }
  };

  const onStopRipple = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const renderItem = (item: SFSSortingValue, i: number, isCalcTabIndex = false) => (
    <SFSSortingMenuItem
      key={item.value}
      className={classes.menuItem}
      disableTouchRipple={isMultiple}
      selected={!!item.direction}
      tabIndex={isCalcTabIndex ? (i === 0 ? 0 : -1) : -1}
      onClick={onHandleSort(item.value)}
      onKeyDown={onKeyDownControl}
    >
      <ListItemText>{sortMap[item.value].label}</ListItemText>
      {!!item.direction && (
        <SFSSortingDirectionButton
          disableRipple
          className={classes.directionButton}
          color="tertiary"
          size="32"
          tabIndex={-1}
          onClick={onChangeSortDirection(item.value)}
          onMouseDown={onStopRipple}
          onTouchStart={onStopRipple}
        >
          <SFSSortingCaption className={classes.caption} variant="caption">
            {item.direction === 'asc' ? labelAsc : labelDesc}
          </SFSSortingCaption>
          <SFSSortingDirectionButtonBadge className={classes.directionButtonBadge}>
            {item.direction === 'asc' ? iconItemAsc : iconItemDesc}
            {isMultiple && <Typography variant="mini100Bold">{i + 1}</Typography>}
          </SFSSortingDirectionButtonBadge>
        </SFSSortingDirectionButton>
      )}
    </SFSSortingMenuItem>
  );

  return (
    <SFSSortingRoot className={clsx(classes.root, className)} sx={sx}>
      {button ? (
        button({ anchorEl: menuAnchor, setAnchorEl: setMenuAnchor })
      ) : (
        <SFSSortingMenuButton className={classes.menuButton} ownerState={ownerState} onClick={onMenuOpen}>
          <Typography component="div" variant="body100">
            {values.length === 1 ? sortMap[values[0].value].label : labelButton}
          </Typography>
          {iconSort}
          {values.length === 1 && (
            <SFSSortingMenuButtonBadge className={classes.menuButtonBadge} component="div">
              {values[0].direction === 'asc' ? iconAsc : iconDesc}
            </SFSSortingMenuButtonBadge>
          )}
          {values.length > 1 && (
            <SFSSortingMenuButtonBadge className={classes.menuButtonBadge} component="div" variant="mini200">
              {values.length}
            </SFSSortingMenuButtonBadge>
          )}
        </SFSSortingMenuButton>
      )}
      <SFSSortingMenu
        TransitionProps={{
          onExited: () => isMultiple && values.length === 1 && setMultiple(false)
        }}
        anchorEl={menuAnchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        className={classes.menu}
        open={!!menuAnchor}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        onClose={onMenuClose}
      >
        <SFSSortingMenuHeader className={classes.menuHeader}>
          <SFSSortingCaption className={classes.caption} variant="caption">
            {isMultiple && !!values.length ? labelSortOrder : labelSortTooltip}
          </SFSSortingCaption>
          {!!values.length && (
            <SFSSortingResetButton
              autoFocus
              className={classes.resetButton}
              component="button"
              underline="hover"
              variant="caption"
              onClick={onResetSort}
            >
              {labelResetButton}
            </SFSSortingResetButton>
          )}
        </SFSSortingMenuHeader>
        <MenuList ref={menuListRef} autoFocusItem={!values.length}>
          {isMultiple && values.map((item, i) => renderItem(sortMap[item.value], i, true))}
          {isMultiple && !!values.length && values.length !== options.length && (
            <SFSSortingMenuItem key="middleSortingDivider" disabled>
              <Divider />
              <SFSSortingCaption className={classes.caption} component="div" marginTop="14px" variant="caption">
                {labelSortTooltip}
              </SFSSortingCaption>
            </SFSSortingMenuItem>
          )}
          {isMultiple &&
            options.filter((v) => !sortMap[v.value].direction).map((o, i) => renderItem(sortMap[o.value], i))}
          {!isMultiple && options.map((option, i) => renderItem(sortMap[option.value], i, true))}
        </MenuList>
        {props.multiple && (
          <SFSSortingMenuFooter className={classes.menuFooter}>
            {isTouchScreen ? (
              <SFSSortingCaption className={classes.caption} variant="caption">
                {isMultiple ? labelMultisortMobileOn : labelMultisortMobileOff}
              </SFSSortingCaption>
            ) : (
              <>
                <Kbd variant="outlined">Ctrl</Kbd>
                <SFSSortingPlusSign className={classes.plusSign} component="span" variant="caption">
                  +
                </SFSSortingPlusSign>
                <Kbd variant="outlined">{labelMultisortLMB}</Kbd>
                <SFSSortingCaption className={classes.caption} variant="caption">
                  {labelMultisortTitle}
                </SFSSortingCaption>
              </>
            )}
            <Switch checked={isMultiple} size="small" type="button" onChange={onChangeSortMode} />
          </SFSSortingMenuFooter>
        )}
      </SFSSortingMenu>
    </SFSSortingRoot>
  );
});
