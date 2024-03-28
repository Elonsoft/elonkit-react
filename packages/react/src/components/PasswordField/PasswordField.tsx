import React from 'react';

import { PasswordFieldProps } from './PasswordField.types';

import clsx from 'clsx';
import { getPasswordFieldUtilityClass } from './PasswordField.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';
import InputAdornment, { inputAdornmentClasses } from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import TextField, { textFieldClasses } from '@mui/material/TextField';

import { useControlled } from '../../hooks';
import { IconEye, IconEyeOff } from '../../icons';

type PasswordFieldOwnerState = {
  classes?: PasswordFieldProps['classes'];
};

const useUtilityClasses = (ownerState: PasswordFieldOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getPasswordFieldUtilityClass, classes);
};

const PasswordFieldRoot = styled(TextField, {
  name: 'ESPasswordFieldRoot',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  [`.${outlinedInputClasses.root}.${inputBaseClasses.adornedEnd}`]: {
    paddingRight: '0px'
  },
  [`&.${textFieldClasses.root}`]: {
    [`& .${inputAdornmentClasses.positionEnd}`]: {
      paddingRight: '7px',

      [`& .${iconButtonClasses.root}`]: {
        color: theme.vars.palette.monoA.A500
      }
    }
  }
}));

/**
 * The PasswordField allows users to input passwords with ability to toggle password visibility.
 */
export const PasswordField = (inProps: PasswordFieldProps) => {
  const {
    classes: inClasses,
    className,

    visible: inVisible,
    onVisibilityChange,

    labelHidePassword,
    labelShowPassword,

    iconHidePassword = <IconEyeOff />,
    iconShowPassword = <IconEye />,

    InputProps,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESPasswordField'
  });

  const [visible, setVisible] = useControlled(false, inVisible);

  const onClick = () => {
    setVisible(!visible);

    if (onVisibilityChange) {
      onVisibilityChange(!visible);
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    // Prevent input from losing focus.
    e.preventDefault();
  };

  const onMouseUp = (e: React.MouseEvent) => {
    // Prevent caret from changing position.
    e.preventDefault();
  };

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

  return (
    <PasswordFieldRoot
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label={visible ? labelHidePassword : labelShowPassword}
              onClick={onClick}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
            >
              {visible ? iconHidePassword : iconShowPassword}
            </IconButton>
          </InputAdornment>
        ),
        ...InputProps
      }}
      className={clsx(classes.root, className)}
      classes={inClasses}
      type={visible ? 'text' : 'password'}
      {...props}
    />
  );
};
