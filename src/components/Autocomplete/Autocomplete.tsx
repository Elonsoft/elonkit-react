import { useEffect, useMemo, useState } from 'react';

import { AutocompleteProps } from './Autocomplete.types';

import clsx from 'clsx';
import { getAutocompleteUtilityClass } from './Autocomplete.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { AutocompleteContext, AutocompleteContextValue } from './Autocomplete.context';

import { useDebounce } from '../../hooks';

type AutocompleteOwnerState = {
  classes?: AutocompleteProps<unknown>['classes'];
};

const useUtilityClasses = (ownerState: AutocompleteOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getAutocompleteUtilityClass, classes);
};

const AutocompleteRoot = styled('div', {
  name: 'ESAutocomplete',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  //
}));

export const Autocomplete = <T,>(inProps: AutocompleteProps<T>) => {
  const {
    className,
    sx,
    children,
    debounce = 500,
    value,
    onChange,
    multiple,
    getOptions,
    getOptionValue,
    getOptionLabel,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAutocomplete'
  });

  const [search, setSearch] = useState('');
  const [options, setOptions] = useState<T[]>([]);

  const debouncedSearch = useDebounce(search, debounce);

  useEffect(() => {
    const result = getOptions(debouncedSearch, 0);

    (Array.isArray(result) ? result[0] : result).then((options) => {
      setOptions(options);
    });

    return () => {
      if (Array.isArray(result)) {
        result[1]();
      }
    };
  }, [debouncedSearch]);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  const context = useMemo(() => {
    return {
      value,
      onChange,
      multiple,
      search,
      setSearch,
      options,
      getOptionValue,
      getOptionLabel
    } as AutocompleteContextValue<unknown>;
  }, [value, onChange, multiple, search, setSearch, options]);

  return (
    <AutocompleteContext.Provider value={context}>
      <AutocompleteRoot className={clsx(classes.root, className)} sx={sx}>
        {children}
      </AutocompleteRoot>
    </AutocompleteContext.Provider>
  );
};
