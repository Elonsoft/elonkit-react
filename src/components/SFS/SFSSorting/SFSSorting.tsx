import React, { useEffect, useMemo, useRef, useState } from 'react';

import { IDirection, SFSSortingProps } from './SFSSorting.types';

import clsx from 'clsx';
import { getSFSSortingUtilityClass, sfsSortingClasses } from './SFSSorting.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useTheme, useThemeProps } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import { IconQuestion } from './icons/IconQuestion';
import { nextSortDirection, vibrateDevice } from './SFSSorting.utils';
import { SFSSortingOpenMenuButtonBadge } from './SFSSortingOpenMenuButtonBadge';
import { SFSSortingOption } from './SFSSortingOption';

import { IconSortSmallCustom } from '../../../icons';
import { Kbd } from '../../Kbd';
import { Switch } from '../../Switch';
import { SFSButton, SFSButtonText } from '../SFSButton';

type SFSSortingOwnerState = {
  classes?: SFSSortingProps['classes'];
  isSorting?: boolean;
};

const useUtilityClasses = (ownerState: SFSSortingOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    openSortMenuButton: ['openSortMenuButton'],
    menu: ['menu'],
    menuWrapper: ['menuWrapper'],
    menuItemTooltip: ['menuItemTooltip'],
    changeSortDirectionButton: ['changeSortDirectionButton'],
    menuItem: ['menuItem'],
    menuList: ['menuList'],
    menuTooltip: ['menuTooltip'],
    menuTooltipPC: ['menuTooltipPC'],
    menuTooltipMobile: ['menuTooltipMobile'],
    resetSortButton: ['resetSortButton'],
    sortingCount: ['sortingCount']
  };

  return composeClasses(slots, getSFSSortingUtilityClass, classes);
};

const SFSSortingRoot = styled('div', {
  name: 'ESSFSSorting',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(() => ({}));

const SFSSortingOpenSortMenuButton = styled(SFSButton, {
  name: 'ESSFSSorting',
  slot: 'OpenSortMenuButton',
  overridesResolver: (_, styles) => styles.openSortMenuButton
})(({ theme }) => ({
  [theme.breakpoints.down('tabletXS')]: {
    [`& .${sfsSortingClasses.directionBadge}`]: {
      margin: '0 2px'
    }
  }
}));

const SFSSortingOpenSortMenuButtonIcon = styled(IconSortSmallCustom)<{ ownerState: { isHidden?: boolean } }>(
  ({ ownerState: { isHidden }, theme }) => ({
    [theme.breakpoints.up('tabletXS')]: {
      ...(isHidden && { display: 'none' })
    }
  })
);

const SFSSortingMenu = styled(Popover, {
  name: 'ESSFSSorting',
  slot: 'Menu',
  overridesResolver: (_, styles) => styles.menu
})(({ theme }) => ({
  '& .MuiPopover-paper': {
    marginTop: '4px',
    backgroundColor: theme.palette.surface[400],
    boxShadow: theme.palette.shadow.down[600]
  }
}));

const SFSSortingMenuWrapper = styled('div', {
  name: 'ESSFSSorting',
  slot: 'MenuWrapper',
  overridesResolver: (_, styles) => styles.menuWrapper
})(() => ({
  width: '320px',
  padding: '8px 16px 0 16px'
}));

const SFSSortingMenuItemTooltip = styled(MenuItem, {
  name: 'ESSFSSorting',
  slot: 'MenuItemTooltip',
  overridesResolver: (_, styles) => styles.menuItemTooltip
})<{ ownerState?: { isDivider?: boolean } }>(({ ownerState: { isDivider = false } = { isDivider: false } }) => ({
  '&.MuiMenuItem-root.Mui-disabled': {
    color: 'inherit',
    padding: isDivider ? '0' : '6px 0',
    display: isDivider ? 'block' : 'flex',
    minHeight: isDivider ? '0' : '28px',
    height: isDivider ? 'auto' : '28px',
    opacity: 1
  }
}));

const SFSSortingMenuList = styled(MenuList, {
  name: 'ESSFSSorting',
  slot: 'MenuList',
  overridesResolver: (_, styles) => styles.menuList
})(() => ({
  padding: 0
}));

const SFSSortingMenuItem = styled(MenuItem, {
  name: 'ESSFSSorting',
  slot: 'MenuItem',
  overridesResolver: (_, styles) => styles.menuItem
})<{ ownerState: SFSSortingOwnerState }>(({ ownerState: { isSorting = false }, theme }) => ({
  '&.MuiMenuItem-root': {
    display: 'flex',
    padding: '6px 16px',
    margin: '0 -16px',
    minHeight: '32px',
    height: '32px',

    '&.Mui-focusVisible .MuiTouchRipple-root': {
      backgroundColor: theme.palette.monoA.A75
    },

    ...(isSorting && {
      backgroundColor: theme.palette.secondary.A100,

      '&:hover': {
        backgroundColor: theme.palette.secondary.A100
      }
    })
  }
}));

const SFSSortingChangeSortDirectionButton = styled(Button, {
  name: 'ESSFSSorting',
  slot: 'ChangeSortDirectionButton',
  overridesResolver: (_, styles) => styles.changeSortDirectionButton
})(({ theme }) => ({
  '&.MuiButton-root': {
    textTransform: 'unset',
    borderRadius: 0,
    padding: '0 16px 0 4px',
    marginLeft: 'auto',
    marginRight: '-16px',
    height: '32px',
    ...theme.typography.caption,

    '&.MuiButton-textMonoA': {
      color: theme.palette.monoA.A600,

      '&.Mui-focusVisible': {
        '& .MuiTypography-root': {
          color: theme.palette.monoA.A900
        }
      },
      '&:hover': {
        '& .MuiTouchRipple-root': {
          backgroundColor: 'transparent'
        },

        '& .MuiTypography-root': {
          color: theme.palette.monoA.A900
        }
      }
    }
  }
}));

const SFSSortingMenuToolTip = styled('div', {
  name: 'ESSFSSorting',
  slot: 'MenuTooltip',
  overridesResolver: (_, styles) => styles.menuTooltip
})(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.monoA.A100}`,
  margin: '8px -16px 0 -16px',
  padding: '0 0 0 12px',
  display: 'flex',
  minHeight: '45px',
  alignItems: 'center',

  '& .ESKbd-root:first-of-type': {
    marginRight: '3px'
  },

  '& .ESKbd-root:last-of-type': {
    marginLeft: '3px',
    marginRight: '8px'
  },

  '& .ESSFSSorting-switchWrapper': {
    marginLeft: 'auto',
    marginRight: '3px'
  }
}));

const SFSSortingMenuToolTipPC = styled('div', {
  name: 'ESSFSSorting',
  slot: 'MenuTooltipPC',
  overridesResolver: (_, styles) => styles.menuTooltipPC
})(() => ({
  display: 'flex',
  alignItems: 'center',

  ['@media (hover: none) and (pointer: coarse)']: {
    display: 'none'
  }
}));

const SFSSortingMenuToolTipMobile = styled('div', {
  name: 'ESSFSSorting',
  slot: 'MenuTooltipMobile',
  overridesResolver: (_, styles) => styles.menuTooltipMobile
})(() => ({
  display: 'none',

  ['@media (hover: none) and (pointer: coarse)']: {
    display: 'flex'
  }
}));

const SFSResetSortButton = styled(Button, {
  name: 'ESSFSResetSortButton',
  slot: 'ResetSortButton',
  overridesResolver: (_, styles) => styles.resetSortButton
})(({ theme }) => ({
  textTransform: 'capitalize',
  marginLeft: 'auto',
  pointerEvents: 'auto',

  '&.MuiButton-root': {
    height: '16px',
    position: 'relative',
    padding: 0,
    color: theme.palette.monoA.A500,

    '&:hover': {
      color: theme.palette.monoA.A500,
      textDecoration: 'underline'
    },

    '&:active': {
      textDecorationLine: 'none'
    },

    '&.Mui-focusVisible': {
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '-1px',
        bottom: '-1px',
        left: '-4px',
        right: '-4px',
        border: `2px solid ${theme.palette.monoA.A700}`,
        zIndex: 1
      }
    },

    ...theme.typography.caption
  }
}));

const SFSSortingOptionsCount = styled('div', {
  name: 'ESSFSSorting',
  slot: 'SortingCount',
  overridesResolver: (_, styles) => styles.sortingCount
})(({ theme }) => ({
  textAlign: 'center',
  borderRadius: '50%',
  width: '16px',
  height: '16px',
  backgroundColor: theme.palette.secondary[300],
  color: theme.palette.black.A800,
  ...theme.typography.mini200,

  [theme.breakpoints.down('tabletXS')]: {
    marginLeft: '2px',
    marginRight: '2px'
  }
}));

const SFSSortingMenuDivider = styled(Divider, {
  name: 'ESSFSSorting',
  slot: 'MenuDivider'
})(({ theme }) => ({
  color: theme.palette.monoA.A100,
  margin: '8px -16px!important'
}));

export const SFSSorting = (inProps: SFSSortingProps) => {
  const {
    className,
    sx,
    options,
    value: values,
    onChange,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSFSSorting'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  const [sortingMenuAnchor, setSortingMenuAnchor] = useState<HTMLButtonElement | null>(null);

  const isMultiSelectRef = useRef(false);
  const isControlKeyActiveRef = useRef(false);
  const longTouchHandlerRef = useRef<NodeJS.Timeout | undefined>();
  const touchRippleRef = useRef<HTMLSpanElement | null>(null);
  const indexFocusableMenuItemRef = useRef<string | undefined>();
  const isLastActionChangeSortDirection = useRef(false);
  const isResetMultiSortMode = useRef(false);
  const lastValuesLength = useRef(false);

  const { palette } = useTheme();

  useEffect(() => {
    if (isMultiSelectRef.current && values && (values.length === 1 || values.length === 0)) {
      isMultiSelectRef.current = false;
    }
  }, [sortingMenuAnchor]);

  useEffect(() => {
    lastValuesLength.current = !!values?.length;

    if (
      indexFocusableMenuItemRef.current &&
      (isMultiSelectRef.current || isResetMultiSortMode.current) &&
      !isLastActionChangeSortDirection.current
    ) {
      const elems = document.querySelectorAll('.ESSFSSorting-menuItem') as any;
      for (const elem of elems) {
        if (elem.firstChild.innerText === indexFocusableMenuItemRef.current) {
          elem.focus();
          break;
        }
      }
    }
  }, [values]);

  const sortingOptionsMap = useMemo(() => {
    const sortingOptionsMap = new Map<
      string,
      { value: string; optionsIndex: number; label: string; index: number | undefined; direction: IDirection }
    >();
    const valuesMap = new Map<string, { index: number; direction: IDirection }>();

    (values || []).forEach((value, index) => {
      valuesMap.set(value.value, { index, direction: value.direction });
    });

    options.forEach((option, optionsIndex) => {
      sortingOptionsMap.set(option.value, {
        ...option,
        optionsIndex,
        index: valuesMap.get(option.value)?.index,
        direction: valuesMap.get(option.value)?.direction || null
      });
    });

    return sortingOptionsMap;
  }, [values]);

  const onSortingMenuClose = () => {
    setSortingMenuAnchor(null);
  };

  const onSortingMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSortingMenuAnchor(e.currentTarget);
  };

  const onChangeSortMode = () => {
    const newMode = !isMultiSelectRef.current;
    const oldValues = [...(values || [])];
    const newValues = newMode ? oldValues : oldValues.length === 1 ? oldValues : [];

    isMultiSelectRef.current = newMode;
    onChange(newValues);
  };

  const onResetSort = () => {
    isMultiSelectRef.current = false;
    onChange([]);
  };

  const onLongTouchAction = (cb: () => void) => {
    if (!isMultiSelectRef.current) {
      longTouchHandlerRef.current = setTimeout(() => {
        isMultiSelectRef.current = true;
        vibrateDevice();
        cb();
      }, 500);
    }
  };

  const onLongTouchStartStopSort = (value: string) => () => {
    onLongTouchAction(() => {
      onStartStopSort(value)();
    });
  };

  const onLongTouchActiveMultiSort = () => {
    onLongTouchAction(() => {
      onChange([...(values || [])]);
    });
  };

  const onTouchClearLongTouchHandler = () => {
    if (longTouchHandlerRef.current) {
      clearInterval(longTouchHandlerRef.current);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // metaKey uses for detecting macOS command key
    if (e.ctrlKey || e.metaKey) {
      isControlKeyActiveRef.current = true;
    }
  };

  const onKeyUp = () => {
    isControlKeyActiveRef.current = false;
  };

  const onStartStopSort = (value: string) => (e?: any) => {
    const option = (sortingOptionsMap as any).get(value);
    const newValues: typeof values =
      isControlKeyActiveRef.current || isMultiSelectRef.current ? [...(values || [])] : [];

    isResetMultiSortMode.current = false;

    isLastActionChangeSortDirection.current = false;

    if (!option.direction) {
      newValues.push({ value, direction: 'asc' });
    } else if (isMultiSelectRef.current) {
      newValues.splice(option.index, 1);
      if (newValues.length === 0) {
        isResetMultiSortMode.current = true;
        isMultiSelectRef.current = false;
      }
    }

    if (isControlKeyActiveRef.current && !isResetMultiSortMode.current) {
      isMultiSelectRef.current = true;
    }

    if (e && e.code) {
      indexFocusableMenuItemRef.current = option.label;
    } else {
      indexFocusableMenuItemRef.current = undefined;
    }

    onChange(newValues);
  };

  const onChangeSortDirection = (value: string) => (e: any) => {
    e.stopPropagation();
    const newValues = [...(values as any)];
    const optionIndex = (sortingOptionsMap as any).get(value).index;

    newValues[optionIndex].direction = (nextSortDirection as any).get(newValues[optionIndex].direction);
    isLastActionChangeSortDirection.current = true;

    onChange(newValues);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLButtonElement> | undefined) => {
    touchRippleRef.current = e?.currentTarget.previousSibling?.nextSibling?.nextSibling as HTMLElement | null;
    touchRippleRef.current && (touchRippleRef.current.style.color = palette.monoA.A50);
  };

  const onMouseUp = () => {
    touchRippleRef.current && (touchRippleRef.current.style.color = palette.monoA.A150);
  };

  const onKeyboardSortingHandle = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.code === 'ArrowRight' && (e.target as any).childNodes[1]) {
      (e.target as any).childNodes[1].focus();
    }
  };

  const onKeyboardSortingButtonHandle = (e: any) => {
    if (e.code === 'ArrowLeft') {
      e.target.parentNode.focus();
    } else if (e.code === 'ArrowDown' && (e.target as any).parentNode.nextElementSibling) {
      e.stopPropagation();
      if (e.target.parentNode.nextElementSibling.classList.contains('MuiDivider-root')) {
        e.target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.focus();
      } else {
        e.target.parentNode.nextElementSibling.focus();
      }
    } else if (
      e.code === 'ArrowUp' &&
      e.target.parentNode.previousElementSibling &&
      !e.target.parentNode.previousElementSibling.classList.contains('ESSFSSorting-menuItemTitle')
    ) {
      e.stopPropagation();
      e.target.parentNode.previousElementSibling.focus();
    }
  };

  const isSortingByOneParam = values?.length === 1;
  const autoFocusSortOption = !values?.length;
  const isMultiSortActivated = isMultiSelectRef.current && !!values?.length;
  const isNotAllSortOptionActivated = options.length !== values?.length;

  return (
    <SFSSortingRoot sx={sx} className={clsx(classes.root, className)}>
      <SFSSortingOpenSortMenuButton onClick={onSortingMenuOpen} className={classes.openSortMenuButton}>
        <SFSButtonText>
          {isSortingByOneParam ? (sortingOptionsMap as any).get(values[0].value).label : 'Сортировка'}
        </SFSButtonText>
        <SFSSortingOpenSortMenuButtonIcon ownerState={{ isHidden: !!values?.[0] }} />
        {isSortingByOneParam && <SFSSortingOpenMenuButtonBadge direction={values[0].direction as 'asc' | 'desc'} />}
        {values && values.length > 1 && (
          <SFSSortingOptionsCount className={classes.sortingCount}>{values.length}</SFSSortingOptionsCount>
        )}
      </SFSSortingOpenSortMenuButton>
      <SFSSortingMenu
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        className={classes.menu}
        open={!!sortingMenuAnchor}
        anchorEl={sortingMenuAnchor}
        onClose={onSortingMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <SFSSortingMenuWrapper className={classes.menuWrapper}>
          {isMultiSortActivated && (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore:next-line
            <SFSSortingMenuItemTooltip component="div" disabled className={classes.menuItemTooltip}>
              <Typography color="monoA.A600" variant="caption">
                Порядок сортировки
              </Typography>
              <IconQuestion sx={{ width: '16px', height: '16px', marginLeft: '4px' }} />
              <SFSResetSortButton
                disableRipple
                autoFocus
                className={classes.resetSortButton}
                onClick={onResetSort}
                color="monoA"
                size="24"
              >
                Сбросить
              </SFSResetSortButton>
            </SFSSortingMenuItemTooltip>
          )}
          <SFSSortingMenuList
            className={classes.menuList}
            autoFocusItem={autoFocusSortOption}
            onKeyDown={onKeyboardSortingHandle}
          >
            {isMultiSortActivated &&
              values?.map((value, i) => (
                <SFSSortingMenuItem
                  // tabIndex needs cause MenuList has weird behavior on tabIndex calc
                  tabIndex={i === 0 ? 0 : -1}
                  className={classes.menuItem}
                  key={value.value}
                  ownerState={{ isSorting: !!value.direction }}
                  onClick={onStartStopSort(value.value)}
                >
                  <Typography variant="body100" color="monoA.A900">
                    {(sortingOptionsMap as any).get(value.value).label}
                  </Typography>
                  <SFSSortingChangeSortDirectionButton
                    tabIndex={-1}
                    className={classes.changeSortDirectionButton}
                    disableRipple
                    color="monoA"
                    size="32"
                    onClick={onChangeSortDirection(value.value)}
                    onKeyDown={onKeyboardSortingButtonHandle}
                    onMouseDown={onMouseDown}
                  >
                    <SFSSortingOption count={i + 1} direction={value.direction} />
                  </SFSSortingChangeSortDirectionButton>
                </SFSSortingMenuItem>
              ))}
            {isMultiSortActivated && isNotAllSortOptionActivated && (
              <SFSSortingMenuItemTooltip ownerState={{ isDivider: true }} disabled>
                <SFSSortingMenuDivider />
              </SFSSortingMenuItemTooltip>
            )}
            {isNotAllSortOptionActivated && (
              <SFSSortingMenuItemTooltip disabled className={classes.menuItemTooltip}>
                <Typography color="monoA.A600" variant="caption">
                  Сортировать по свойствам
                </Typography>
                {!isMultiSelectRef.current && !!values?.length && (
                  <SFSResetSortButton
                    disableRipple
                    autoFocus={lastValuesLength.current}
                    className={classes.resetSortButton}
                    onClick={onResetSort}
                    color="monoA"
                    size="24"
                  >
                    Сбросить
                  </SFSResetSortButton>
                )}
              </SFSSortingMenuItemTooltip>
            )}
            {(isMultiSelectRef.current && !!values?.length
              ? options.filter((option) => !(sortingOptionsMap as any).get(option.value).direction)
              : options
            ).map((option) => {
              const direction = sortingOptionsMap?.get(option.value)?.direction || null;

              return (
                <SFSSortingMenuItem
                  className={classes.menuItem}
                  key={option.value}
                  ownerState={{ isSorting: !!direction }}
                  onClick={onStartStopSort(option.value)}
                  onTouchStart={onLongTouchStartStopSort(option.value)}
                  onTouchEnd={onTouchClearLongTouchHandler}
                >
                  <Typography variant="body100" color="monoA.A900">
                    {option.label}
                  </Typography>
                  {!!direction && (
                    <SFSSortingChangeSortDirectionButton
                      disableRipple
                      className={classes.changeSortDirectionButton}
                      tabIndex={-1}
                      onMouseDown={onMouseDown}
                      onMouseUp={onMouseUp}
                      onKeyDown={onKeyboardSortingButtonHandle}
                      onClick={onChangeSortDirection(option.value)}
                      color="monoA"
                      size="32"
                    >
                      <SFSSortingOption direction={direction} />
                    </SFSSortingChangeSortDirectionButton>
                  )}
                </SFSSortingMenuItem>
              );
            })}
          </SFSSortingMenuList>
          <SFSSortingMenuToolTip className={classes.menuTooltip}>
            <SFSSortingMenuToolTipPC className={classes.menuTooltipPC}>
              <Kbd variant="outlined">Ctrl</Kbd>
              <Typography component="span" variant="caption">
                +
              </Typography>
              <Kbd variant="outlined">ЛКМ</Kbd>
              <Typography color="monoA.A600" variant="caption">
                Мультисортировка
              </Typography>
            </SFSSortingMenuToolTipPC>
            <SFSSortingMenuToolTipMobile
              className={classes.menuTooltipMobile}
              {...(!isMultiSelectRef.current && {
                onTouchStart: onLongTouchActiveMultiSort,
                onTouchEnd: onTouchClearLongTouchHandler
              })}
            >
              <Typography color="monoA.A600" variant="caption">
                {isMultiSelectRef.current ? 'Мультисортировка включена' : 'Удерживайте для мультисортировки'}
              </Typography>
            </SFSSortingMenuToolTipMobile>
            <IconQuestion
              sx={{
                width: '16px',
                height: '16px',
                marginLeft: '4px',
                '& path:first-child': { color: 'monoA.A300' },
                '& path:last-child': { color: 'monoA.A400' }
              }}
            />
            <div
              className="ESSFSSorting-switchWrapper"
              {...(!isMultiSelectRef.current && {
                onTouchStart: onLongTouchActiveMultiSort,
                onTouchEnd: onTouchClearLongTouchHandler
              })}
            >
              <Switch checked={isMultiSelectRef.current} type="button" onChange={onChangeSortMode} size="small" />
            </div>
          </SFSSortingMenuToolTip>
        </SFSSortingMenuWrapper>
      </SFSSortingMenu>
    </SFSSortingRoot>
  );
};
