import { useMemo } from 'react';

import { AutocompleteOptionProps } from './AutocompleteOption.types';

import clsx from 'clsx';
import { getAutocompleteOptionUtilityClass } from './AutocompleteOption.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useAutocompleteContext } from '../Autocomplete.context';

type AutocompleteOptionOwnerState = {
  classes?: AutocompleteOptionProps<unknown>['classes'];
};

const useUtilityClasses = (ownerState: AutocompleteOptionOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getAutocompleteOptionUtilityClass, classes);
};

const AutocompleteOptionRoot = styled('div', {
  name: 'ESAutocompleteOption',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  border: '1px solid black',
  padding: '2px 4px',
  cursor: 'pointer'
}));

export const AutocompleteOption = <T,>(inProps: AutocompleteOptionProps<T>) => {
  const { className, sx, option, ...props } = useThemeProps({
    props: inProps,
    name: 'ESAutocompleteOption'
  });

  const context = useAutocompleteContext<T>();

  const onClick = () => {
    if (context.onChange) {
      if (context.multiple) {
        const index = context.value.findIndex((v) => context.getOptionValue(v) === context.getOptionValue(option));
        if (index === -1) {
          context.onChange(context.value.concat(option));
        } else {
          context.value.splice(index, 1);
          context.onChange(context.value.slice());
        }
      } else {
        context.onChange(option);
      }
    }
  };

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AutocompleteOptionRoot className={clsx(classes.root, className)} sx={sx} onClick={onClick}>
      {!!context.multiple && (
        <input
          type="checkbox"
          checked={!!context.value.find((v) => context.getOptionValue(v) === context.getOptionValue(option))}
        />
      )}
      {context.getOptionLabel(option)}
    </AutocompleteOptionRoot>
  );
};
