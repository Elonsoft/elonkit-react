import { MouseEvent, useContext } from 'react';

import { ToggleButtonProps } from './ToggleButton.types';

import clsx from 'clsx';
import { getToggleButtonUtilityClass } from './ToggleButton.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { Button } from '../../Button';
import isValueSelected from '../isValueSelected';
import { ToggleButtonGroupContext } from '../ToggleButtonGroup.context';

type ToggleButtonOwnerState = {
  classes?: ToggleButtonProps['classes'];
};

const useUtilityClasses = (ownerState: ToggleButtonOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getToggleButtonUtilityClass, classes);
};

const ToggleButtonRoot = styled(Button, {
  name: 'ESToggleButton',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(({}) => ({
  display: 'flex',
  alignItems: 'center',
  textTransform: 'none',
}));

export const ToggleButton = (inProps: ToggleButtonProps) => {
  const {
    value: contextValue,
    onChange,
    disabled: groupDisabled,
    fullWidth: groupFullWidth,
    ...contextProps
  } = useContext(ToggleButtonGroupContext);
  const {
    className,
    children,
    sx,
    value,
    selected = isValueSelected(inProps.value, contextValue),
    disabled = groupDisabled,
    size,
    fullWidth = groupFullWidth,
    onClick,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESToggleButton',
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  const handleChange = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event, value);

      if (event.defaultPrevented) {
        return;
      }
    }

    if (onChange) {
      onChange(event, value);
    }
  };

  return (
    <ToggleButtonRoot
      aria-label={value}
      className={clsx(contextProps.className, classes.root, className)}
      color="tertiary"
      disabled={disabled}
      fullWidth={fullWidth}
      size={size}
      sx={sx}
      value={value}
      variant={selected ? 'contained' : 'outlined'}
      onClick={handleChange}
    >
      {children}
    </ToggleButtonRoot>
  );
};
