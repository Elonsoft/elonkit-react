import React, { useMemo, useRef, useState } from 'react';

import { PhoneFieldProps } from './PhoneField.types';

import clsx from 'clsx';
import { getPhoneFieldUtilityClass } from './PhoneField.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Button, { buttonClasses } from '@mui/material/Button';
import InputAdornment, { inputAdornmentClasses } from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { capitalize } from '@mui/material/utils';

import { useControlled } from '../../hooks/useControlled';
import { IconGlobalLineW500, IconMenuDownW300 } from '../../icons';
import { AutocompleteMenu } from '../AutocompleteMenu';
import * as Flags from '../Flags/icons';
import { svgIconClasses } from '../SvgIcon';

import { AsYouType, CountryCode, getCountryCallingCode, validatePhoneNumberLength } from 'libphonenumber-js';
import metadata from 'libphonenumber-js/metadata.min.json';

type PhoneFieldOwnerState = {
  classes?: PhoneFieldProps['classes'];
};

const useUtilityClasses = (ownerState: PhoneFieldOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    startAdornment: ['startAdornment'],
    menuButton: ['menuButton'],
    item: ['item'],
    itemPrimary: ['itemPrimary'],
    countryDisplayName: ['countryDisplayName'],
    countryCallingCode: ['countryCallingCode']
  };

  return composeClasses(slots, getPhoneFieldUtilityClass, classes);
};

const PhoneFieldRoot = styled(TextField, {
  name: 'ESPhoneField',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root
})(() => ({
  [`& .${outlinedInputClasses.root}.${inputBaseClasses.adornedStart}`]: {
    paddingLeft: 0
  }
}));

const PhoneFieldStartAdornment = styled(InputAdornment, {
  name: 'ESPhoneField',
  slot: 'StartAdornment',
  overridesResolver: (_props, styles) => styles.startAdornment
})(() => ({
  [`&.${inputAdornmentClasses.positionStart} `]: {
    marginRight: '4px'
  }
}));

const PhoneFieldMenuButton = styled(Button, {
  name: 'ESPhoneField',
  slot: 'MenuButton',
  overridesResolver: (_props, styles) => styles.menuButton
})(({ theme }) => ({
  [`&.${buttonClasses.root}.${buttonClasses.text}`]: {
    borderRadius: 0,
    paddingLeft: '12px',
    paddingRight: '2px',
    height: '100%',

    '& > *:first-child': {
      marginRight: '2px'
    },

    [`& .${svgIconClasses.root}`]: {
      color: theme.palette.monoA.A500
    }
  }
}));

const PhoneFieldItem = styled('div', {
  name: 'ESPhoneField',
  slot: 'Item',
  overridesResolver: (_props, styles) => styles.item
})(() => ({
  alignItems: 'center',
  display: 'flex',
  gap: '8px',
  justifyContent: 'space-between'
}));

const PhoneFieldItemPrimary = styled('div', {
  name: 'ESPhoneField',
  slot: 'ItemPrimary',
  overridesResolver: (_props, styles) => styles.itemPrimary
})(() => ({
  alignItems: 'center',
  display: 'flex',
  gap: '12px',
  minWidth: 0
}));

const PhoneFieldCountryDisplayName = styled(Typography, {
  name: 'ESPhoneField',
  slot: 'CountryDisplayName',
  overridesResolver: (_props, styles) => styles.countryDisplayName
})({
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}) as typeof Typography;

const PhoneFieldCountryCallingCode = styled(Typography, {
  name: 'ESPhoneField',
  slot: 'CountryCallingCode',
  overridesResolver: (_props, styles) => styles.countryCallingCode
})({}) as typeof Typography;

const regionNames = new (Intl as any).DisplayNames([], { type: 'region' });

export const PhoneField = (inProps: PhoneFieldProps) => {
  const {
    classes: inClasses,
    className,

    countries,
    defaultCountry,

    // eslint-disable-next-line no-use-before-define
    getCountryFlag = (code: CountryCode) => getFlag(code),
    getCountryDisplayName = (code: CountryCode) => regionNames.of(code),

    labelMenu,

    iconMenu = <IconGlobalLineW500 />,
    iconMenuArrow = <IconMenuDownW300 container containerSize="16px" />,

    name,
    value: inValue,

    InputProps,
    onChange,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESPhoneField'
  });

  const getFlag = (country: CountryCode | null) => {
    const FlagComponent = country ? Flags[`Flag${capitalize(country.toLowerCase())}` as keyof typeof Flags] : null;
    return FlagComponent ? <FlagComponent /> : iconMenu;
  };

  const [country, setCountry] = useState<CountryCode | null>(
    countries.length === 1 ? countries[0] : defaultCountry || null
  );
  const [value, setValue] = useControlled('+' + (country ? getCountryCallingCode(country) : ''), inValue as string);

  const [search, setSearch] = useState('');

  const formatted = useRef('+');

  const ref = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const selectionStart = useRef<number | null>(null);
  const backspace = useRef(false);

  const codesRegExp = useMemo(() => {
    const codes = countries.map((country) => getCountryCallingCode(country));

    return RegExp(
      `^\\+(${codes
        .map(
          (code) =>
            `${code
              .split('')
              .map((digit) => `(${digit}|$)`)
              .join('')}`
        )
        .join('|')})`
    );
  }, [countries]);

  const countriesData = useMemo(() => {
    return countries.map((country) => ({
      country,
      displayName: getCountryDisplayName(country),
      callingCode: getCountryCallingCode(country)
    }));
  }, [countries]);

  const countriesOptions = useMemo(() => {
    return countriesData
      .filter((e) => {
        return e.displayName.toLowerCase().includes(search) || e.callingCode.includes(search);
      })
      .map((e) => e.country);
  }, [countriesData, search]);

  const asYouType = useMemo(() => {
    const asYouType = new AsYouType();
    formatted.current = asYouType.input(value || '');
    return asYouType;
  }, []);

  const onValueChange = (value: string) => {
    value = value.replace(/ /g, '');
    const lengthResult = validatePhoneNumberLength(value);

    if (lengthResult === 'TOO_LONG' || lengthResult === 'INVALID_LENGTH') {
      return;
    }

    if (value.length > 1 && !codesRegExp.test(value)) {
      return;
      // if (backspace.current) {
      //   value = '';
      // } else {
      //   return;
      // }
    }

    asYouType.reset();
    formatted.current = asYouType.input(value);

    if (country && getCountryCallingCode(country) !== asYouType.getCallingCode()) {
      if (countries.length === 1) {
        return;
      }

      setCountry(null);
    }

    setValue(value);
    onChange?.({ target: { name, value } } as React.ChangeEvent<HTMLInputElement>);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    selectionStart.current = e.target.selectionStart;

    onValueChange(e.target.value);

    requestAnimationFrame(() => {
      if (inputRef.current && selectionStart.current !== null) {
        if (!backspace.current && formatted.current[selectionStart.current - 1] === ' ') {
          selectionStart.current += 1;
        }

        selectionStart.current = Math.max(selectionStart.current, 1);
        inputRef.current.setSelectionRange(selectionStart.current, selectionStart.current);
      }

      backspace.current = false;
    });
  };

  const onCheckCaretPosition = () => {
    requestAnimationFrame(() => {
      if (inputRef.current && inputRef.current.selectionStart === inputRef.current.selectionEnd) {
        if (inputRef.current.selectionStart !== null && inputRef.current.selectionStart < 2) {
          inputRef.current.setSelectionRange(2, 2);
        }
      }
    });
  };

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const onMenuClick = () => {
    if (ref.current) {
      setAnchorEl(ref.current);
    }
  };

  const onMenuClose = () => {
    setAnchorEl(null);
  };

  const onMenuChange = (country: CountryCode | null) => {
    if (country) {
      onMenuClose();
      setCountry(country);
      onValueChange(`+${getCountryCallingCode(country)}`);

      requestAnimationFrame(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      });
    }
  };

  asYouType.reset();
  formatted.current = asYouType.input(value || '+');

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

  return (
    <>
      <PhoneFieldRoot
        ref={ref}
        InputProps={{
          startAdornment: (
            <PhoneFieldStartAdornment className={classes.startAdornment} position="start">
              <Tooltip arrow enterDelay={200} placement="top-start" title={labelMenu || ''}>
                <PhoneFieldMenuButton
                  className={classes.menuButton}
                  color="tertiary"
                  disabled={countries.length < 2}
                  variant="text"
                  onClick={onMenuClick}
                >
                  {getCountryFlag(
                    asYouType.country ||
                      country ||
                      metadata.country_calling_codes[asYouType.getCallingCode() || '']?.[0] ||
                      null
                  )}
                  {countries.length > 1 && iconMenuArrow}
                </PhoneFieldMenuButton>
              </Tooltip>
            </PhoneFieldStartAdornment>
          ),
          ...InputProps
        }}
        className={clsx(classes.root, className)}
        classes={inClasses}
        inputRef={inputRef}
        label="Номер телефона"
        type="tel"
        value={formatted.current}
        onChange={onInputChange}
        onKeyDown={(e) => {
          backspace.current = e.key === 'Backspace';
          onCheckCaretPosition();
        }}
        onMouseDown={onCheckCaretPosition}
        {...props}
      />
      <AutocompleteMenu
        PopperProps={{
          placement: 'top'
        }}
        SearchProps={{ value: search, onChange: (e) => setSearch(e.target.value) }}
        TransitionProps={{
          onExited: () => {
            setSearch('');
          }
        }}
        anchorEl={ref.current}
        getOptionLabel={(option) => (
          <PhoneFieldItem className={classes.item}>
            <PhoneFieldItemPrimary className={classes.itemPrimary}>
              {getCountryFlag(option)}
              <PhoneFieldCountryDisplayName className={classes.countryDisplayName} component="div" variant="subtitle1">
                {getCountryDisplayName(option)}
              </PhoneFieldCountryDisplayName>
            </PhoneFieldItemPrimary>
            <PhoneFieldCountryCallingCode className={classes.countryCallingCode} color="monoA.A600" variant="caption">
              +{getCountryCallingCode(option)}
            </PhoneFieldCountryCallingCode>
          </PhoneFieldItem>
        )}
        getOptionValue={(option) => option}
        open={!!anchorEl}
        options={countriesOptions}
        value={country || asYouType.country || null}
        width={ref.current?.clientWidth}
        onChange={onMenuChange}
        onClose={onMenuClose}
      />
    </>
  );
};
