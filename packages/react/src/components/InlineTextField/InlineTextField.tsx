import { InlineTextFieldProps } from './InlineTextField.types';

import clsx from 'clsx';
import { getInlineTextFieldUtilityClass } from './InlineTextField.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled } from '@mui/material/styles';
import { inputBaseClasses, TextField, TextFieldClasses, TypographyProps } from '@mui/material';

type InlineTextFieldOwnerState = {
  classes?: Partial<TextFieldClasses>;
};

const useUtilityClasses = (ownerState: InlineTextFieldOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getInlineTextFieldUtilityClass, classes);
};

const InlineTextFieldRoot = styled(TextField, {
  name: 'ESInlineTextField',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})<{
  ownerState: { typography: Exclude<TypographyProps['variant'], 'inherit' | undefined> };
}>(({ theme, ownerState }) => ({
  '.MuiInput-root:not(.Mui-error)::before': {
    borderBottom: '1px solid transparent'
  },

  '.MuiInput-root.Mui-disabled::before': {
    borderBottom: `1px dotted ${theme.vars.palette.monoA.A200}`
  },

  '.MuiInput-root:hover:not(.Mui-disabled, .Mui-error)::before': {
    borderBottom: `1px solid ${theme.vars.palette.monoA.A200}`
  },

  [`& .${inputBaseClasses.root}`]: {
    padding: 0
  },

  [`& .${inputBaseClasses.input}`]: {
    ...theme.typography[ownerState.typography],
    padding: '5px 0',

    '&::placeholder': {
      color: theme.vars.palette.monoA.A400,
      opacity: 1
    },

    '&, &:disabled': {
      color: theme.vars.palette.monoA.A900,
      WebkitTextFillColor: 'unset'
    }
  }
}));

export const InlineTextField = ({
  typography = 'body200',
  placeholder,
  classes: inClasses,
  className,
  ...props
}: InlineTextFieldProps) => {
  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);
  return (
    <InlineTextFieldRoot
      multiline
      className={clsx(classes.root, className)}
      classes={inClasses}
      ownerState={{ typography }}
      placeholder={placeholder ?? '-'}
      variant="standard"
      {...props}
    />
  );
};
