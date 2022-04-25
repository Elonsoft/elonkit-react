import React, { useMemo } from 'react';

import { AutocompleteSearchProps } from './AutocompleteSearch.types';

import clsx from 'clsx';
import { getAutocompleteSearchUtilityClass } from './AutocompleteSearch.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useAutocompleteContext } from '../Autocomplete.context';

type AutocompleteSearchOwnerState = {
  classes?: AutocompleteSearchProps<unknown>['classes'];
};

const useUtilityClasses = (ownerState: AutocompleteSearchOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getAutocompleteSearchUtilityClass, classes);
};

const AutocompleteSearchRoot = styled('div', {
  name: 'ESAutocompleteSearch',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  //
}));

export const AutocompleteSearch = <T,>(inProps: AutocompleteSearchProps<T>) => {
  const { className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESAutocompleteSearch'
  });

  const { search, setSearch } = useAutocompleteContext<unknown>();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AutocompleteSearchRoot className={clsx(classes.root, className)} sx={sx}>
      <input value={search} onChange={onChange} />
    </AutocompleteSearchRoot>
  );
};
