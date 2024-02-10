import { useCallback, useMemo } from 'react';

import { ToggleButtonGroupProps } from './ToggleButtonGroup.types';

import clsx from 'clsx';
import { toggleButtonClasses } from './ToggleButton/ToggleButton.classes';
import { getToggleButtonGroupUtilityClass, toggleButtonGroupClasses } from './ToggleButtonGroup.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { Breakpoint, styled, useThemeProps } from '@mui/material/styles';
import { buttonClasses } from '@mui/material';

import { ToggleButtonGroupContext } from './ToggleButtonGroup.context';

type ToggleButtonGroupOwnerState = {
  classes?: ToggleButtonGroupProps['classes'];
  breakpoint: number | Breakpoint;
  orientation?: 'horizontal' | 'vertical';
};

const useUtilityClasses = (ownerState: ToggleButtonGroupOwnerState) => {
  const { classes, orientation } = ownerState;

  const slots = {
    root: ['root', orientation]
  };

  return composeClasses(slots, getToggleButtonGroupUtilityClass, classes);
};

const ToggleButtonGroupRoot = styled('div', {
  name: 'ESToggleButtonGroup',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { orientation }
    } = props;
    return [styles.root, styles[orientation]];
  }
})<{ ownerState: ToggleButtonGroupOwnerState }>(({ ownerState, theme }) => ({
  display: 'flex',

  [`& .${toggleButtonClasses.root}.${buttonClasses.disabled}`]: {
    border: `1px solid ${theme.palette.monoA.A200}`
  },
  [`& .${toggleButtonClasses.root}`]: {
    boxShadow: 'none',
    border: `1px solid ${theme.palette.monoA.A200}`
  },
  [`& .${toggleButtonClasses.root}:not(:last-child)`]: {
    borderRadius: '0',
    boxShadow: 'none',
    borderLeft: 'none'
  },
  [`& .${toggleButtonClasses.root}:not(:last-child).${buttonClasses.contained}:not(:last-child)`]: {
    borderRadius: '0',
    boxShadow: 'none',
    border: `1px solid ${theme.palette.monoA.A200}`,
    borderLeft: 'none'
  },
  [`& .${toggleButtonClasses.root}:last-child`]: {
    borderRadius: '0 3px 3px 0',
    boxShadow: 'none',
    borderLeft: 'none'
  },
  [`& .${toggleButtonClasses.root}:first-child, .${toggleButtonClasses.root}:first-child.${buttonClasses.contained}:first-child`]:
    {
      borderRadius: '3px 0 0 3px',
      borderLeft: `1px solid ${theme.palette.monoA.A200}`
    },
  [`&.${toggleButtonGroupClasses.horizontal}`]: {
    flexDirection: 'column',
    [theme.breakpoints.up(ownerState.breakpoint)]: {
      flexDirection: 'row',
      gap: 0
    }
  },
  [`&.${toggleButtonGroupClasses.vertical}`]: {
    flexDirection: 'column'
  }
}));

export const ToggleButtonGroup = (inProps: ToggleButtonGroupProps) => {
  const {
    className,
    children,
    breakpoint = 'tabletXS',
    orientation = 'horizontal',
    exclusive = false,
    disabled = false,
    onChange,
    sx,
    value,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESToggleButtonGroup'
  });

  const ownerState = { breakpoint, disabled, orientation, value, ...props };
  const classes = useUtilityClasses(ownerState);
  const handleChange = useCallback(
    (event, buttonValue) => {
      if (!onChange) {
        return;
      }
      const index = value && value.indexOf(buttonValue);
      let newValue: string;
      if (value && index >= 0) {
        newValue = value.slice();
        if (Array.isArray(newValue)) {
          newValue.splice(index, 1);
        }
      } else {
        newValue = value ? value.concat(buttonValue) : [buttonValue];
      }

      onChange(event, newValue);
    },

    [onChange, value]
  );
  const handleExclusiveChange = useCallback(
    (event, buttonValue) => {
      if (!onChange) {
        return;
      }

      onChange(event, value === buttonValue ? null : buttonValue);
    },

    [onChange, value]
  );
  const context = useMemo(
    () => ({
      onChange: exclusive ? handleExclusiveChange : handleChange,
      disabled,
      value
    }),
    [exclusive, handleExclusiveChange, handleChange, value, disabled]
  );

  return (
    <ToggleButtonGroupRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      <ToggleButtonGroupContext.Provider value={context}>{children}</ToggleButtonGroupContext.Provider>
    </ToggleButtonGroupRoot>
  );
};
