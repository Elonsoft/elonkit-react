import { AutocompleteFieldProps } from './AutocompleteField.types';

import clsx from 'clsx';
import { getAutocompleteFieldUtilityClass } from './AutocompleteField.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import { textFieldClasses } from '@mui/material/TextField';
import { unstable_useId as useId } from '@mui/utils';

import { useBoolean } from '../../hooks';
import { Autocomplete } from '../Autocomplete';

type AutocompleteFieldOwnerState = {
  classes?: AutocompleteFieldProps<unknown>['classes'];
};

const useUtilityClasses = (ownerState: AutocompleteFieldOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getAutocompleteFieldUtilityClass, classes);
};

const AutocompleteFieldRoot = styled(FormControl, {
  name: 'ESAutocompleteField',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});

/** The autocomplete is used to choose an item from a collection of options. */
export const AutocompleteField = <T,>(inProps: AutocompleteFieldProps<T>) => {
  const {
    className,
    classes: inClasses,
    sx,

    autoFocus,
    disabled,
    error,
    fullWidth,
    id: inId,
    label,
    required,

    closeAfterSelect,
    helperText,
    size,

    InputProps,
    InputLabelProps,
    FormHelperTextProps,

    onChange,

    ...rest
  } = useThemeProps({
    props: inProps,
    name: 'ESAutocompleteField'
  });

  const [open, toggleOpen] = useBoolean(false);

  const handleChange = (e: T & T[]) => {
    if (onChange) {
      onChange(e);
    }
    if (closeAfterSelect) {
      toggleOpen(false);
    }
  };

  const id = useId(inId);
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const { onClose, onOpen, ...restInputProps } = InputProps || {};

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

  return (
    <AutocompleteFieldRoot
      className={clsx(classes.root, textFieldClasses.root, className)}
      disabled={disabled}
      error={error}
      focused={open || undefined}
      fullWidth={fullWidth}
      required={required}
      size={size}
      sx={sx}
    >
      {label !== null && label !== '' && (
        <InputLabel htmlFor={id} id={inputLabelId} required={required} {...InputLabelProps}>
          {label}
        </InputLabel>
      )}
      <Autocomplete
        aria-describedby={helperTextId}
        autoFocus={autoFocus}
        disabled={disabled}
        fullWidth={fullWidth}
        id={id}
        label={label}
        open={open}
        required={required}
        onChange={handleChange as never}
        onClose={() => {
          onClose?.();
          toggleOpen(false);
        }}
        onOpen={() => {
          onOpen?.();
          toggleOpen(true);
        }}
        {...rest}
        {...restInputProps}
      />
      {!!helperText && (
        <FormHelperText id={helperTextId} {...FormHelperTextProps}>
          {helperText}
        </FormHelperText>
      )}
    </AutocompleteFieldRoot>
  );
};
