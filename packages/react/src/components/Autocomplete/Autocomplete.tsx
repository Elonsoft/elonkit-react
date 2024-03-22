import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { AutocompleteProps } from './Autocomplete.types';

import clsx from 'clsx';
import { autocompleteClasses, getAutocompleteUtilityClass } from './Autocomplete.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useForkRef } from '@mui/material/utils';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';

import { useControlled, usePreviousValue } from '../../hooks';
import { AutocompleteMenu as ESAutocompleteMenu } from '../AutocompleteMenu';

type AutocompleteOwnerState = {
  classes?: AutocompleteProps<unknown>['classes'];
  inlineSearch?: boolean;
};

const useUtilityClasses = (ownerState: AutocompleteOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    input: ['input'],
    menu: ['menu'],
    displayValue: ['displayValue'],
    inputPlaceholder: ['inputPlaceholder']
  };

  return composeClasses(slots, getAutocompleteUtilityClass, classes);
};

const AutocompleteRoot = styled(OutlinedInput, {
  name: 'ESAutocomplete',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root
})(() => ({
  cursor: 'pointer',

  [`& .${autocompleteClasses.input}`]: {
    width: '100%',
    outline: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'inline-flex',
    alignItems: 'center'
  }
}));

const AutocompleteMenu = styled(ESAutocompleteMenu, {
  name: 'ESAutocomplete',
  slot: 'Menu',
  overridesResolver: (_props, styles) => styles.menu
})<{ ownerState: AutocompleteOwnerState }>(({ ownerState }) => ({
  pointerEvents: ownerState.inlineSearch ? 'none' : 'auto'
})) as unknown as typeof ESAutocompleteMenu;

const AutocompleteInputDisplayValue = styled('div', {
  name: 'ESAutocomplete',
  slot: 'DisplayValue',
  overridesResolver: (_props, styles) => styles.displayValue
})(() => ({
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));

const AutocompleteInputPlaceholder = styled('div', {
  name: 'ESAutocomplete',
  slot: 'InputPlaceholder',
  overridesResolver: (_props, styles) => styles.inputPlaceholder
})(({ theme }) => ({
  color: theme.palette.monoA.A400,
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));

/** The autocomplete is used to choose an item from a collection of options. */
export const Autocomplete = <T,>(inProps: AutocompleteProps<T>) => {
  const {
    className,
    classes: inClasses,
    sx,

    id,
    inputRef: inInputRef,
    label,
    name,
    placeholder,
    'aria-describedby': ariaDescribedby,

    startAdornment,
    endAdornment,

    options,
    getOptionValue,
    getOptionLabel,
    getOptionDisabled,
    groupBy,

    loading,
    inlineSearch,

    header,
    footer,

    MenuProps,
    SearchProps,

    open: inOpen,
    onOpen,
    onClose,
    onLoadMore,
    onBlur,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAutocomplete'
  });

  const formControl = useFormControl();

  if (!formControl) {
    throw new Error('No provider for FormControlContext.');
  }

  const ref = useRef<HTMLDivElement | null>(null);

  const paperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLDivElement | null>(null);
  const inputNodeRef = useForkRef(inputRef, inInputRef);

  const isInputFocusRequested = useRef(false);

  const [open, setOpen] = useControlled(false, inOpen);
  const [menuWidthState, setMenuWidthState] = useState(0);

  const previousFocused = usePreviousValue(formControl.focused);

  const valueArray = useMemo(
    () => (props.multiple ? props.value : props.value ? [props.value] : []),
    [props.multiple, props.value]
  );

  const valueDisplay = useMemo(() => {
    if (props.getDisplayValue) {
      return props.multiple ? props.getDisplayValue(props.value) : props.getDisplayValue(props.value);
    }
    return valueArray.map((v) => getOptionLabel(v)).join(', ');
  }, [props.value, valueArray]);

  useEnhancedEffect(() => {
    if (valueArray.length) {
      formControl.onFilled();
    } else {
      formControl.onEmpty();
    }
  }, [valueArray, formControl.onEmpty, formControl.onFilled, formControl.filled]);

  useEffect(() => {
    if (onBlur && !formControl.focused && previousFocused) {
      if (isInputFocusRequested.current) {
        isInputFocusRequested.current = false;
      } else {
        onBlur({ target: { name } });
      }
    }
  }, [formControl.focused, previousFocused]);

  useEnhancedEffect(() => {
    // FIXME: Wrong typing in MUI.
    (formControl as any).setAdornedStart(!!startAdornment);
  }, [!!startAdornment]);

  const onMenuOpen = useCallback((disableAutoFocus?: boolean) => {
    if (ref.current) {
      setMenuWidthState(ref.current.clientWidth);
      setOpen(true);
      onOpen?.();

      if (!disableAutoFocus) {
        setTimeout(() => {
          if (paperRef.current) {
            const element = paperRef.current.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            ) as HTMLElement | null;
            if (element) {
              element.focus();
            }
          }
        }, 0);
      }
    }
  }, []);

  const onMenuClose = useCallback((event: unknown, reason: 'escapeKeyDown' | 'clickAway') => {
    if (reason === 'escapeKeyDown') {
      isInputFocusRequested.current = true;

      requestAnimationFrame(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      });
    }

    if (reason === 'clickAway' && ref.current?.contains((event as any).target)) {
      return;
    }

    setOpen(false);
    onClose?.();
  }, []);

  // eslint-disable-next-line
  // @ts-ignore
  const onMenuChange = (value) => {
    if (props.onChange) {
      props.onChange(value);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (
      (inlineSearch ? ['ArrowUp', 'ArrowDown', 'Enter'] : [' ', 'ArrowUp', 'ArrowDown', 'Enter']).indexOf(event.key) !==
      -1
    ) {
      event.preventDefault();
      onMenuOpen();
    }

    if (['Escape', 'Tab'].indexOf(event.key) !== -1) {
      setOpen(false);
      onClose?.();
    }
  };

  const onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    if (formControl.disabled || event.button !== 0) {
      return;
    }

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    });

    onMenuOpen(!!inlineSearch);
  };

  const notched = formControl.filled || formControl.focused || !!startAdornment || !!open;

  const ownerState = { classes: inClasses, inlineSearch };
  const classes = useUtilityClasses(ownerState);

  return (
    <>
      <AutocompleteRoot
        ref={ref}
        autoComplete={inlineSearch ? 'off' : undefined}
        autoFocus={inlineSearch ? formControl.focused : false}
        className={clsx(className, classes.root)}
        disabled={formControl.disabled}
        endAdornment={endAdornment}
        error={formControl.error}
        fullWidth={props.fullWidth}
        id={id}
        inputComponent={inlineSearch && formControl.focused ? 'input' : ('div' as never)}
        inputProps={{
          children:
            inlineSearch && formControl.focused ? null : valueDisplay ? (
              <AutocompleteInputDisplayValue className={classes.displayValue}>
                {valueDisplay}
              </AutocompleteInputDisplayValue>
            ) : (
              (notched || !label) && (
                <AutocompleteInputPlaceholder className={classes.inputPlaceholder}>
                  {placeholder}
                </AutocompleteInputPlaceholder>
              )
            ),
          className: classes.input,
          role: inlineSearch ? 'input' : 'button',
          tabIndex: formControl.disabled ? -1 : 0,
          onBlur: () => {
            formControl.onBlur();
          },
          onFocus: formControl.onFocus,
          onKeyDown,
          'aria-describedby': ariaDescribedby,
          ...props.inputProps
        }}
        inputRef={inputNodeRef}
        label={label}
        name={name}
        notched={notched}
        placeholder={inlineSearch ? placeholder : undefined}
        required={formControl.required}
        startAdornment={startAdornment}
        sx={sx}
        value={inlineSearch && formControl.focused ? SearchProps?.value : null}
        onChange={
          inlineSearch && formControl.focused
            ? (e) => {
                SearchProps?.onChange?.(e);
                onMenuOpen(true);
              }
            : undefined
        }
        onMouseDown={onMouseDown}
      >
        {inlineSearch ? null : valueDisplay}
      </AutocompleteRoot>
      <AutocompleteMenu
        {...({ value: props.value, multiple: props.multiple } as
          | {
              multiple?: false;
              value: T | null;
            }
          | {
              multiple: true;
              value: T[];
            })}
        disableRestoreFocus
        SearchProps={inlineSearch ? undefined : SearchProps}
        anchorEl={ref.current}
        className={classes.menu}
        disableAutoFocus={!!inlineSearch}
        disableScrollLock={!!inlineSearch}
        footer={footer}
        getOptionDisabled={getOptionDisabled}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        groupBy={groupBy}
        header={header}
        loading={loading}
        open={!!open}
        options={options}
        paperRef={paperRef}
        width={menuWidthState}
        onChange={onMenuChange}
        onClose={onMenuClose}
        onLoadMore={onLoadMore}
        {...MenuProps}
        {...{ ownerState }}
      />
    </>
  );
};
