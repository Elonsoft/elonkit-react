import { AutocompleteMenuFooterProps } from './AutocompleteMenuFooter.types';

import clsx from 'clsx';
import { getAutocompleteMenuFooterUtilityClass } from './AutocompleteMenuFooter.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type AutocompleteMenuFooterOwnerState = {
  classes?: AutocompleteMenuFooterProps['classes'];
};

const useUtilityClasses = (ownerState: AutocompleteMenuFooterOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getAutocompleteMenuFooterUtilityClass, classes);
};

const AutocompleteMenuFooterRoot = styled('div', {
  name: 'ESAutocompleteMenuFooter',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.vars.palette.monoA.A600,
  padding: '5px 16px 6px',
  borderTop: `1px solid ${theme.vars.palette.monoA.A100}`
}));

export const AutocompleteMenuFooter = (inProps: AutocompleteMenuFooterProps) => {
  const {
    className,
    sx,

    children,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAutocompleteMenuFooter'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AutocompleteMenuFooterRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </AutocompleteMenuFooterRoot>
  );
};
