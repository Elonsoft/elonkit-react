import { ForwardedRef, forwardRef, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { AutocompleteMenuProps } from './AutocompleteMenu.types';

import clsx from 'clsx';
import { getAutocompleteMenuUtilityClass } from './AutocompleteMenu.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Button, { buttonClasses } from '@mui/material/Button';
import { touchRippleClasses } from '@mui/material/ButtonBase';
import Checkbox from '@mui/material/Checkbox';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import InputAdornment, { inputAdornmentClasses } from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Popper from '@mui/material/Popper';
import TextField from '@mui/material/TextField';
import TrapFocus from '@mui/material/Unstable_TrapFocus';

import { useIntersectionObserver, useLatest, useScrollLock } from '../../hooks';
import { IconCloseW350, IconMagnify2W400 } from '../../icons';
import { SpinnerRing } from '../Spinner';
import { svgIconClasses } from '../SvgIcon';

type AutocompleteMenuOwnerState = {
  classes?: AutocompleteMenuProps<unknown>['classes'];
};

const useUtilityClasses = (ownerState: AutocompleteMenuOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    paper: ['paper'],
    menuList: ['menuList'],
    menuGroup: ['menuGroup'],
    menuItem: ['menuItem'],
    menuItemText: ['menuItemText'],
    sentinel: ['sentinel'],
    emptyState: ['emptyState'],
    search: ['search']
  };

  return composeClasses(slots, getAutocompleteMenuUtilityClass, classes);
};

const AutocompleteMenuRoot = styled(Popper, {
  name: 'ESAutocompleteMenu',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root
})(() => ({
  zIndex: 1300,

  '& *': {
    outline: 'none'
  },

  '& > div': {
    transformOrigin: `50% 0 0`
  }
}));

const AutocompleteMenuPaper = styled('div', {
  name: 'ESAutocompleteMenu',
  slot: 'Paper',
  overridesResolver: (_props, styles) => styles.paper
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.surface[400],
  boxShadow: theme.palette.shadow.down[600],
  borderRadius: '6px',
  userSelect: 'none',
  overflow: 'hidden',
  pointerEvents: 'auto'
}));

const AutocompleteMenuMenuList = styled(MenuList, {
  name: 'ESAutocompleteMenuMenuList',
  slot: 'MenuList',
  overridesResolver: (_props, styles) => styles.menuList
})(({ theme }) => ({
  ...theme.scrollbars.overlayMonoA,
  maxHeight: '228px'
}));

const AutocompleteMenuMenuGroup = styled('div', {
  name: 'ESAutocompleteMenu',
  slot: 'MenuGroup',
  overridesResolver: (_props, styles) => styles.group
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.monoA.A600,
  padding: '8px 16px 4px',

  '&:not(:first-child)': {
    borderTop: `1px solid ${theme.palette.monoA.A100}`,
    paddingTop: '16px',
    marginTop: '8px'
  }
}));

const AutocompleteMenuMenuItem = styled(MenuItem, {
  name: 'ESAutocompleteMenu',
  slot: 'MenuItem',
  overridesResolver: (_props, styles) => styles.menuItem
})(() => ({
  padding: '2px 16px'
}));

const AutocompleteMenuMenuItemText = styled('div', {
  name: 'ESAutocompleteMenu',
  slot: 'MenuItemText',
  overridesResolver: (_props, styles) => styles.menuItemText
})(() => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));

const AutocompleteMenuSentinel = styled(MenuItem, {
  name: 'ESAutocompleteMenu',
  slot: 'Sentinel',
  overridesResolver: (_props, styles) => styles.sentinel
})(() => ({
  padding: 0,
  minHeight: 0
}));

const AutocompleteMenuCheckbox = styled(Checkbox, {
  name: 'ESAutocompleteMenu',
  slot: 'Checkbox',
  overridesResolver: (_props, styles) => styles.checkbox
})(() => ({
  marginLeft: '-9px',
  marginRight: '3px'
}));

const AutocompleteMenuEmptyState = styled('div', {
  name: 'ESAutocompleteMenu',
  slot: 'EmptyState',
  overridesResolver: (_props, styles) => styles.emptyState
})(({ theme }) => ({
  ...theme.typography.caption,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '12px 16px',
  color: theme.palette.monoA.A600
}));

const AutocompleteMenuSearch = styled(TextField, {
  name: 'ESAutocompleteMenu',
  slot: 'Search',
  overridesResolver: (_props, styles) => styles.search
})(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.monoA.A100}`,

  [`& .${outlinedInputClasses.root}.${inputBaseClasses.adornedEnd}`]: {
    paddingRight: '8px'
  },

  [`& .${inputLabelClasses.root}`]: {
    opacity: 0
  },

  [`& .${inputAdornmentClasses.positionStart}`]: {
    color: theme.palette.monoA.A500
  },

  [`&:hover .${inputAdornmentClasses.positionStart} .${svgIconClasses.root}`]: {
    color: theme.palette.monoA.A600
  },

  [`& .${inputAdornmentClasses.positionEnd}`]: {
    marginLeft: '6px',

    [`& .${buttonClasses.root}`]: {
      height: '40px',
      padding: '0 7px',
      flexShrink: 0,

      '&:hover ': {
        [`& .${svgIconClasses.root}`]: {
          color: theme.palette.monoA.A500
        },

        [`& .${touchRippleClasses.root}`]: {
          backgroundColor: 'inherit'
        }
      },

      [`& .${svgIconClasses.root}`]: {
        color: theme.palette.monoA.A400
      },

      '&.Mui-focusVisible': {
        backgroundColor: theme.palette.monoA.A200
      },

      [`&:active .${svgIconClasses.root}`]: {
        color: theme.palette.monoA.A600
      }
    }
  },

  [`& .${outlinedInputClasses.notchedOutline}`]: {
    border: 'none',

    [`&.${inputBaseClasses.adornedEnd}`]: {
      paddingRight: '4px'
    }
  },

  [`& .${outlinedInputClasses.input}`]: {
    ...theme.typography.body100
  }
}));

export const AutocompleteMenu = forwardRef(function AutocompleteMenu(inProps, ref) {
  const {
    paperRef,

    className,
    classes: inClasses,
    sx,
    width,
    offset = [0, 4],

    container = document.body,
    anchorEl,
    open,

    options,
    getOptionValue,
    getOptionLabel,
    getOptionDisabled,
    groupBy,

    loading,

    header,
    footer,

    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disableRestoreFocus,
    disableScrollLock,

    labelNoOptions,
    labelNoMatches,
    labelLoading,
    labelSearch,
    labelSearchClear,

    PopperProps,
    SearchProps,

    transitionDuration,
    TransitionProps: inTransitionProps,

    onClose,
    onLoadMore,

    iconSearch = <IconMagnify2W400 />,
    iconSearchClear = <IconCloseW350 />,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAutocompleteMenu'
  });

  // const paperRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [sentinelRef, setSentinelRef] = useState<HTMLElement | null>(null);

  const onCloseLatest = useLatest(onClose);

  useScrollLock(!disableScrollLock && open, container);

  const valueArray = useMemo(
    () => (props.multiple ? props.value : props.value ? [props.value] : []),
    [props.multiple, props.value]
  );

  const valueMap = useMemo(() => {
    return valueArray.reduce<Record<string | number, boolean>>((acc, v) => {
      acc[getOptionValue(v)] = true;
      return acc;
    }, {});
  }, [valueArray]);

  useIntersectionObserver({ current: sentinelRef }, (entries) => {
    if (onLoadMore && entries[0].isIntersecting) {
      onLoadMore();
    }
  });

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onCloseLatest.current) {
        onCloseLatest.current(e, 'escapeKeyDown');
      }
    };

    if (open && onClose && !disableEscapeKeyDown) {
      document.addEventListener('keydown', onKeyDown);
    }

    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, disableEscapeKeyDown]);

  const onMenuItemClick = useCallback(
    (option: any) => () => {
      if (props.onChange) {
        if (props.multiple) {
          const index = props.value.findIndex((v) => getOptionValue(v) === getOptionValue(option));
          if (index === -1) {
            props.onChange(props.value.concat(option));
          } else {
            props.value.splice(index, 1);
            props.onChange(props.value.slice());
          }
        } else {
          props.onChange(option);
        }
      }
    },
    [props.multiple, props.value, props.onChange]
  );

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

  const groupedOptions: ReactNode[] = [];

  for (let index = 0; index < options.length; index++) {
    const option = options[index];

    const value = getOptionValue(option);
    const label = getOptionLabel(option);

    const selected = !!valueMap[value];
    const disabled = getOptionDisabled ? getOptionDisabled(option) : undefined;
    const group = groupBy?.(option);

    if (!!groupBy && (index === 0 || group !== groupBy(options[index - 1]))) {
      groupedOptions.push(
        <AutocompleteMenuMenuGroup key={`${value}-${group}`} aria-disabled className={classes.menuGroup} tabIndex={-1}>
          {group}
        </AutocompleteMenuMenuGroup>
      );
    }

    groupedOptions.push(
      <AutocompleteMenuMenuItem
        key={value}
        autoFocus={index === 0 && !SearchProps && !disableAutoFocus}
        className={classes.menuItem}
        disabled={disabled}
        selected={selected}
        tabIndex={index === 0 ? 0 : -1}
        onClick={onMenuItemClick(option)}
      >
        {!!props.multiple && <AutocompleteMenuCheckbox readOnly checked={selected} color="secondary" tabIndex={-1} />}
        <AutocompleteMenuMenuItemText className={classes.menuItemText}>{label}</AutocompleteMenuMenuItemText>
      </AutocompleteMenuMenuItem>
    );
  }

  return (
    <AutocompleteMenuRoot
      ref={ref}
      transition
      anchorEl={anchorEl}
      className={clsx(className, classes.root)}
      open={open}
      placement="bottom"
      sx={sx}
      {...PopperProps}
      modifiers={[
        {
          name: 'offset',
          options: {
            offset
          }
        },
        ...(disableScrollLock
          ? []
          : [
              {
                name: 'preventOverflow',
                options: {
                  altAxis: true,
                  padding: { top: 8, bottom: 8 }
                }
              }
            ]),
        ...(PopperProps?.modifiers || [])
      ]}
    >
      {({ TransitionProps }) => (
        <Grow
          in={TransitionProps?.in}
          timeout={transitionDuration}
          {...inTransitionProps}
          onEnter={(...args) => {
            TransitionProps?.onEnter?.();
            inTransitionProps?.onEnter?.(...args);
          }}
          onExited={(...args) => {
            TransitionProps?.onExited?.();
            inTransitionProps?.onExited?.(...args);
          }}
        >
          <div>
            <TrapFocus
              disableAutoFocus={disableAutoFocus}
              disableEnforceFocus={disableEnforceFocus}
              disableRestoreFocus={disableRestoreFocus}
              isEnabled={() => true}
              open={open}
            >
              <div tabIndex={-1}>
                <ClickAwayListener
                  mouseEvent="onMouseDown"
                  onClickAway={(e) => {
                    onClose?.(e, 'clickAway');
                  }}
                >
                  <AutocompleteMenuPaper
                    ref={paperRef}
                    className={classes.paper}
                    style={{ width, maxHeight: disableScrollLock ? undefined : 'calc(100dvh - 16px)' }}
                  >
                    {!!SearchProps && (
                      <AutocompleteMenuSearch
                        fullWidth
                        autoFocus={!disableAutoFocus}
                        className={classes.search}
                        inputRef={searchInputRef}
                        placeholder={labelSearch}
                        size="40"
                        {...SearchProps}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">{iconSearch}</InputAdornment>,
                          endAdornment: !!SearchProps.value && (
                            <InputAdornment position="end">
                              <Button
                                disableFocusRipple
                                disableRipple
                                aria-label={labelSearchClear}
                                color="monoA"
                                size="24"
                                onClick={() => {
                                  if (SearchProps.onChange) {
                                    SearchProps.onChange({ target: { value: '' } } as never);
                                    if (searchInputRef.current) {
                                      searchInputRef.current.focus();
                                    }
                                  }
                                }}
                              >
                                {iconSearchClear}
                              </Button>
                            </InputAdornment>
                          ),
                          ...SearchProps.InputProps
                        }}
                      />
                    )}
                    {header}
                    {loading ? (
                      <AutocompleteMenuEmptyState className={classes.emptyState}>
                        <SpinnerRing color="monoA" size={16} /> {labelLoading}
                      </AutocompleteMenuEmptyState>
                    ) : options.length ? (
                      <AutocompleteMenuMenuList className={classes.menuList}>
                        {groupedOptions}
                        {!!onLoadMore && (
                          <AutocompleteMenuSentinel
                            ref={setSentinelRef}
                            disabled
                            className={classes.sentinel}
                            tabIndex={-1}
                          />
                        )}
                      </AutocompleteMenuMenuList>
                    ) : (
                      <AutocompleteMenuEmptyState className={classes.emptyState}>
                        {SearchProps?.value ? labelNoMatches : labelNoOptions}
                      </AutocompleteMenuEmptyState>
                    )}
                    {footer}
                  </AutocompleteMenuPaper>
                </ClickAwayListener>
              </div>
            </TrapFocus>
          </div>
        </Grow>
      )}
    </AutocompleteMenuRoot>
  );
  // eslint-disable-next-line no-use-before-define
}) as <T>(props: AutocompleteMenuProps<T> & { ref?: ForwardedRef<HTMLDivElement> }) => JSX.Element;
