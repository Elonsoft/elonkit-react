import { useMemo } from 'react';

import { AutocompleteFooterProps } from './AutocompleteFooter.types';

import clsx from 'clsx';
import { getAutocompleteFooterUtilityClass } from './AutocompleteFooter.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useAutocompleteContext } from '../Autocomplete.context';

type AutocompleteFooterOwnerState = {
  classes?: AutocompleteFooterProps['classes'];
};

const useUtilityClasses = (ownerState: AutocompleteFooterOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getAutocompleteFooterUtilityClass, classes);
};

const AutocompleteFooterRoot = styled('div', {
  name: 'ESAutocompleteFooter',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  //
}));

export const AutocompleteFooter = (inProps: AutocompleteFooterProps) => {
  const { className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESAutocompleteFooter'
  });

  const context = useAutocompleteContext<unknown>();

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AutocompleteFooterRoot className={clsx(classes.root, className)} sx={sx}>
      Найдено: {context.options.length}
      {!!context.multiple && <span>Выбрано: {context.value.length}</span>}
    </AutocompleteFooterRoot>
  );
};
