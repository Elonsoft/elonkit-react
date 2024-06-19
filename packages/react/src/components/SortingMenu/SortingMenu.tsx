import React, { memo, useRef, useState } from 'react';

import { SortingMenuDirection, SortingMenuOptionMap, SortingMenuProps, SortingMenuValue } from './SortingMenu.types';

import clsx from 'clsx';
import { sortingMenuClasses } from '../SortingMenu/SortingMenu.classes';
import { getSortingMenuUtilityClass } from './SortingMenu.classes';

import { styled, useThemeProps } from '@mui/material/styles';
import { unstable_composeClasses, useMediaQuery } from '@mui/material';
import ListItemText, { listItemTextClasses } from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popover from '@mui/material/Popover';
import Typography, { typographyClasses } from '@mui/material/Typography';

import { IconSortAscending, IconSortDescending } from '../../icons';
import { Button, buttonClasses } from '../Button';
import { buttonBaseClasses } from '../ButtonBase';
import { Divider } from '../Divider';
import { Kbd, kbdClasses } from '../Kbd';
import { Link } from '../Link';
import { Switch, switchClasses } from '../Switch';

const isMacintosh = () => {
  return navigator.userAgent.indexOf('Macintosh') > 0;
};

type SortingMenuOwnerState = {
  classes?: SortingMenuProps['classes'];
  isWithValue?: boolean;
};

const useUtilityClasses = (ownerState: SortingMenuOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    menuItem: ['menuItem'],
    menuHeader: ['menuHeader'],
    menuFooter: ['menuFooter'],
    resetButton: ['resetButton'],
    directionButton: ['directionButton'],
    directionButtonBadge: ['directionButtonBadge'],
    plusSign: ['plusSign'],
    caption: ['caption'],
  };

  return unstable_composeClasses(slots, getSortingMenuUtilityClass, classes);
};

const SortingMenuRoot = styled(Popover, {
  name: 'ESSortingMenu',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(({ theme }) => ({
  '& .MuiPopover-paper': {
    ...theme.scrollbars.overlayMonoA,
    marginTop: '4px',
    paddingBottom: '6px',
    backgroundImage: 'none',
    backgroundColor: theme.vars.palette.surface[400],
    boxShadow: theme.vars.palette.shadow.down[600],
    userSelect: 'none',
    overflowX: 'hidden',

    '& .MuiList-root': {
      width: '320px',
      padding: '0 16px',
    },
  },
}));

const SortingMenuHeader = styled('div', {
  name: 'ESSortingMenu',
  slot: 'MenuHeader',
  overridesResolver: (_, styles) => styles.menuHeader,
})(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '14px 16px 6px 16px',
}));

const SortingMenuFooter = styled('div', {
  name: 'ESSortingMenu',
  slot: 'MenuFooter',
  overridesResolver: (_, styles) => styles.menuFooter,
})(({ theme }) => ({
  borderTop: `1px solid ${theme.vars.palette.monoA.A100}`,
  marginTop: '8px',
  padding: '6px 3px 0 12px',
  display: 'flex',
  alignItems: 'center',

  [`& .${kbdClasses.root}:first-of-type`]: {
    marginRight: '3px',
  },

  [`& .${kbdClasses.root}:last-of-type`]: {
    marginLeft: '3px',
    marginRight: '8px',
  },

  [`& .${switchClasses.root}`]: {
    marginLeft: 'auto',
  },
}));

const SortingResetButton = styled(Link, {
  name: 'ESSortingMenu',
  slot: 'ResetButton',
  overridesResolver: (_, styles) => styles.resetButton,
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A500,
})) as typeof Link;

const SortingMenuItem = styled(MenuItem, {
  name: 'ESSortingMenu',
  slot: 'MenuItem',
  overridesResolver: (_, styles) => styles.menuItem,
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
      hover: theme.vars.palette.monoA.A50,
      focus: theme.vars.palette.monoA.A75,
      active: theme.vars.palette.monoA.A150,
    }),
  },
  '&.MuiMenuItem-root.Mui-disabled': {
    color: 'inherit',
    padding: '0 0 6px 0',
    display: 'block',
    minHeight: 0,
    height: 'auto',
    opacity: 1,
    '& .MuiDivider-root': {
      margin: '8px -16px',
    },
  },

  [`& .${listItemTextClasses.root} .${typographyClasses.root}`]: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

const SortingDirectionButton = styled(Button, {
  name: 'ESSortingMenu',
  slot: 'DirectionButton',
  overridesResolver: (_, styles) => styles.directionButton,
})(({ theme }) => ({
  '--icon': theme.vars.palette.monoA.A600,

  [`&.${buttonClasses.root}`]: {
    flexShrink: 0,
    textTransform: 'unset',
    position: 'relative',
    zIndex: 10,
    borderRadius: 0,
    padding: 0,

    [`&.${buttonClasses.size400}`]: {
      '--pressed': 'inherit',
      '--hovered': 'inherit',
    },

    [`& .${buttonBaseClasses.wrapper}`]: {
      gap: '6px',
    },

    '&:focus-visible': {
      '& .MuiTypography-root': {
        color: theme.vars.palette.monoA.A900,
      },
      [`& .${sortingMenuClasses.directionButtonBadge}`]: {
        backgroundColor: theme.vars.palette.secondary.A550,
      },
    },

    '&:hover': {
      [`& .${sortingMenuClasses.directionButtonBadge}`]: {
        backgroundColor: theme.vars.palette.secondary.A550,
      },
      '& .MuiTypography-root:first-of-type': {
        color: theme.vars.palette.monoA.A900,
      },
    },

    '&:active': {
      [`& .${sortingMenuClasses.directionButtonBadge}`]: {
        backgroundColor: theme.vars.palette.secondary.A400,
      },
      '& .MuiTypography-root:first-of-type': {
        color: theme.vars.palette.monoA.A600,
      },
    },
  },
}));

const SortingDirectionButtonBadge = styled('div', {
  name: 'ESSortingMenu',
  slot: 'DirectionButtonBadge',
  overridesResolver: (_, styles) => styles.directionButtonBadge,
})(({ theme }) => ({
  display: 'flex',
  borderRadius: '4px',
  padding: '3px 2px',
  backgroundColor: theme.vars.palette.secondary.A400,
  boxShadow: `inset 0 0 0 1px ${theme.vars.palette.monoA.A25}`,
}));

const SortingPlusSign = styled(Typography, {
  name: 'ESSortingMenu',
  slot: 'PlusSign',
  overridesResolver: (_, styles) => styles.plusSign,
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A900,
})) as typeof Typography;

const SortingCaption = styled(Typography, {
  name: 'ESSortingMenu',
  slot: 'Caption',
  overridesResolver: (_, styles) => styles.caption,
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A600,
})) as typeof Typography;

const getNextItem = (elem: HTMLLIElement): HTMLLIElement | undefined => {
  if (elem.nextElementSibling && (elem.nextElementSibling as HTMLLIElement).getAttribute('aria-disabled')) {
    return (elem.nextElementSibling as HTMLLIElement).nextElementSibling as HTMLLIElement;
  }

  if (elem.nextElementSibling) {
    return elem.nextElementSibling as HTMLLIElement;
  }
};

/**
 * The SortingMenu allow users to sort list of items by one or multiple properties.
 */
export const SortingMenu = memo(function SortingMenu(inProps: SortingMenuProps) {
  const {
    PopoverProps,

    options = [],

    labelAsc,
    labelDesc,
    labelResetButton,
    labelSortOrder,
    labelSortTooltip,
    labelMultisortTitle,
    labelMultisortLMB,
    labelMultisortMobileOn,
    labelMultisortMobileOff,

    iconItemAsc = <IconSortAscending container containerHeight="12px" containerWidth="8px" />,
    iconItemDesc = <IconSortDescending container containerHeight="12px" containerWidth="8px" />,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSortingMenu',
  });

  const values = props.multiple ? props.value : props.value ? [props.value] : [];

  const ownerState = { classes: props.classes, isWithValue: !!values[0] };
  const classes = useUtilityClasses(ownerState);

  const isTouchScreen = useMediaQuery('(hover: none) and (pointer: coarse)');
  const [isMultiple, setMultiple] = useState(props.multiple && values.length > 1);

  const menuListRef = useRef<HTMLUListElement | null>(null);

  const sortMap: Record<string, SortingMenuOptionMap> = {};
  const valuesMap: Record<string, { i: number; direction: SortingMenuDirection }> = {};

  values.forEach((value, i) => {
    valuesMap[value.value] = {
      direction: value.direction,
      i,
    };
  });

  options.forEach((option) => {
    sortMap[option.value] = {
      ...option,
      ...valuesMap[option.value],
    };
  });

  const setFocusOnLastPressedElement = (label: string, e?: React.KeyboardEvent<HTMLLIElement>) => {
    if (!e?.code) {
      return;
    }

    setTimeout(() => {
      let elem = menuListRef?.current?.firstChild as HTMLLIElement;

      do {
        if ((elem.firstChild as HTMLLIElement).innerText === label) {
          elem.focus();
          break;
        }
      } while ((elem = elem.nextElementSibling as HTMLLIElement));
    });
  };

  const onSortChange = (values: SortingMenuValue[]) => {
    if (props.multiple) {
      props.onChange(values);
    } else {
      props.onChange(values[0] ? { ...values[0] } : null);
    }
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
    const newValues: SortingMenuValue[] = values[sortMap[value].i]
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

  const renderItem = (item: SortingMenuValue, i: number, isCalcTabIndex = false) => {
    return (
      <SortingMenuItem
        key={item.value}
        className={classes.menuItem}
        disableTouchRipple={isMultiple}
        selected={!!item.direction}
        tabIndex={isCalcTabIndex ? (i === 0 ? 0 : -1) : -1}
        onClick={onHandleSort(item.value)}
        onKeyDown={onKeyDownControl}
      >
        <ListItemText>{sortMap && sortMap[item.value].label}</ListItemText>
        {!!item.direction && (
          <SortingDirectionButton
            disableTouchRipple
            className={classes.directionButton}
            color="tertiary"
            size="400"
            tabIndex={-1}
            onClick={onChangeSortDirection(item.value)}
            onMouseDown={onStopRipple}
            onTouchStart={onStopRipple}
          >
            <SortingCaption className={classes.caption} variant="caption">
              {item.direction === 'asc' ? labelAsc : labelDesc}
            </SortingCaption>
            <SortingDirectionButtonBadge className={classes.directionButtonBadge}>
              {item.direction === 'asc' ? iconItemAsc : iconItemDesc}
              {isMultiple && <Typography variant="mini100Bold">{i + 1}</Typography>}
            </SortingDirectionButtonBadge>
          </SortingDirectionButton>
        )}
      </SortingMenuItem>
    );
  };

  return (
    <SortingMenuRoot
      {...PopoverProps}
      TransitionProps={{
        ...PopoverProps.TransitionProps,
        onExited: (...args) => {
          if (isMultiple && values.length === 1) {
            setMultiple(false);
          }

          PopoverProps.TransitionProps?.onExited?.(...args);
        },
      }}
      className={clsx(classes.root, PopoverProps.className)}
    >
      <SortingMenuHeader className={classes.menuHeader}>
        <SortingCaption className={classes.caption} variant="caption">
          {isMultiple && !!values.length ? labelSortOrder : labelSortTooltip}
        </SortingCaption>
        {!!values.length && (
          <SortingResetButton
            autoFocus
            className={classes.resetButton}
            component="button"
            underline="hover"
            variant="caption"
            onClick={onResetSort}
          >
            {labelResetButton}
          </SortingResetButton>
        )}
      </SortingMenuHeader>
      <MenuList ref={menuListRef} autoFocusItem={!values.length}>
        {isMultiple && values.map((item, i) => renderItem(sortMap[item.value], i, true))}
        {isMultiple && !!values.length && values.length !== options.length && (
          <SortingMenuItem key="middleSortingDivider" disabled>
            <Divider />
            <SortingCaption className={classes.caption} component="div" marginTop="14px" variant="caption">
              {labelSortTooltip}
            </SortingCaption>
          </SortingMenuItem>
        )}
        {isMultiple &&
          options.filter((v) => !sortMap[v.value].direction).map((o, i) => renderItem(sortMap[o.value], i))}
        {!isMultiple && options.map((option, i) => renderItem(sortMap[option.value], i, true))}
      </MenuList>
      {props.multiple && (
        <SortingMenuFooter className={classes.menuFooter}>
          {isTouchScreen ? (
            <SortingCaption className={classes.caption} variant="caption">
              {isMultiple ? labelMultisortMobileOn : labelMultisortMobileOff}
            </SortingCaption>
          ) : (
            <>
              <Kbd variant="outlined">{isMacintosh() ? '⌘' : 'Ctrl'}</Kbd>
              <SortingPlusSign className={classes.plusSign} component="span" variant="caption">
                +
              </SortingPlusSign>
              <Kbd variant="outlined">{labelMultisortLMB}</Kbd>
              <SortingCaption className={classes.caption} variant="caption">
                {labelMultisortTitle}
              </SortingCaption>
            </>
          )}
          <Switch checked={isMultiple} size="small" type="button" onChange={onChangeSortMode} />
        </SortingMenuFooter>
      )}
    </SortingMenuRoot>
  );
});
