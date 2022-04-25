import { AutocompleteOptionsProps } from './AutocompleteOptions.types';

import clsx from 'clsx';
import { getAutocompleteOptionsUtilityClass } from './AutocompleteOptions.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useAutocompleteContext } from '../Autocomplete.context';
import { AutocompleteOption } from '../AutocompleteOption';

type AutocompleteOptionsOwnerState = {
  classes?: AutocompleteOptionsProps<unknown>['classes'];
};

const useUtilityClasses = (ownerState: AutocompleteOptionsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getAutocompleteOptionsUtilityClass, classes);
};

const AutocompleteOptionsRoot = styled('div', {
  name: 'ESAutocompleteOptions',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  //
}));

export const AutocompleteOptions = <T,>(inProps: AutocompleteOptionsProps<T>) => {
  const { className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESAutocompleteOptions'
  });

  const { options, getOptionValue } = useAutocompleteContext<T>();

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AutocompleteOptionsRoot className={clsx(classes.root, className)} sx={sx}>
      {options.map((option) => (
        <AutocompleteOption<T> key={getOptionValue(option)} option={option} />
      ))}
    </AutocompleteOptionsRoot>
  );
};
