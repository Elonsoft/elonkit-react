import { AutocompleteMenuHeaderProps } from './AutocompleteMenuHeader.types';

import clsx from 'clsx';
import { getAutocompleteMenuHeaderUtilityClass } from './AutocompleteMenuHeader.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
type AutocompleteMenuHeaderOwnerState = {
  classes?: AutocompleteMenuHeaderProps['classes'];
};

const useUtilityClasses = (ownerState: AutocompleteMenuHeaderOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getAutocompleteMenuHeaderUtilityClass, classes);
};

const AutocompleteMenuHeaderRoot = styled('div', {
  name: 'ESAutocompleteMenuHeader',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.vars.palette.monoA.A600,
  padding: '6px 16px 5px',
  borderBottom: `1px solid ${theme.vars.palette.monoA.A100}`
}));

export const AutocompleteMenuHeader = (inProps: AutocompleteMenuHeaderProps) => {
  const {
    className,
    sx,

    children,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAutocompleteMenuHeader'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AutocompleteMenuHeaderRoot className={clsx(classes.root, className)} sx={sx}>
      {children}
    </AutocompleteMenuHeaderRoot>
  );
};
