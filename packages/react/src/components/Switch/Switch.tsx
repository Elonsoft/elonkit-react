import React from 'react';

import { SwitchProps } from './Switch.types';

import clsx from 'clsx';
import { getSwitchUtilityClass, switchClasses } from './Switch.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, Theme, useThemeProps } from '@mui/material/styles';
import ButtonBase, { buttonBaseClasses } from '@mui/material/ButtonBase';

import { useControlled } from '../../hooks/useControlled';

type SwitchOwnerState = {
  classes?: SwitchProps['classes'];
  checked?: boolean;
  disabled?: boolean;
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  size: 'medium' | 'small';
};

const useUtilityClasses = (ownerState: SwitchOwnerState) => {
  const { classes, checked, disabled, size } = ownerState;

  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', size && size],
    track: ['track'],
    input: ['input'],
    thumb: ['thumb'],
    button: ['button']
  };

  return composeClasses(slots, getSwitchUtilityClass, classes);
};

const SwitchRoot = styled('div', {
  name: 'ESSwitch',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { disabled, checked, size }
    } = props;
    return [styles.root, disabled && styles.disabled, checked && styles.checked, styles[size]];
  }
})<{ ownerState: SwitchOwnerState; theme: Theme }>(({ ownerState: { color }, theme }) => ({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 0,
  color: theme.vars.palette.monoA.A500,
  [`&.${switchClasses.checked}`]: {
    color: theme.vars.palette[color][300],
    [`& .${switchClasses.input}`]: {
      transform: 'translateX(-12px)'
    },
    [`& .${switchClasses.button}`]: {
      transform: 'translateX(12px)',
      '&:hover': {
        backgroundColor: theme.vars.palette[color].A50,

        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&:active': {
        backgroundColor: theme.vars.palette[color].A150
      },
      [`&.${buttonBaseClasses.focusVisible}`]: {
        backgroundColor: theme.vars.palette[color].A200
      }
    }
  },
  [`&.${switchClasses.disabled}`]: {
    opacity: '0.3',
    cursor: 'not-allowed'
  },
  [`&.${switchClasses.medium}`]: {
    height: '36px',
    width: '48px',
    [`& .${switchClasses.track}`]: {
      width: '32px',
      height: '14px'
    },
    [`& .${switchClasses.input}`]: {
      width: '48px'
    },
    [`& .${switchClasses.thumb}`]: {
      width: '20px',
      height: '20px'
    }
  },
  [`&.${switchClasses.small}`]: {
    height: '32px',
    width: '46px',
    [`& .${switchClasses.track}`]: {
      width: '28px',
      height: '4px'
    },
    [`& .${switchClasses.input}`]: {
      width: '46px'
    },
    [`& .${switchClasses.button}`]: {
      left: '1px'
    },
    [`& .${switchClasses.thumb}`]: {
      width: '16px',
      height: '16px'
    }
  },
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.shortest
  })
}));

const SwitchTrack = styled('div', {
  name: 'ESSwitch',
  slot: 'Track',
  overridesResolver: (props, styles) => styles.track
})(() => ({
  borderRadius: '8px',
  backgroundColor: 'currentColor',
  zIndex: -1
}));

const SwitchThumb = styled('div', {
  name: 'ESSwitch',
  slot: 'Thumb',
  overridesResolver: (_props, styles) => styles.thumb
})<{ theme?: Theme }>(({ theme }) => ({
  backgroundColor: theme.vars.palette.common.switch,
  border: '2px solid currentColor',
  borderRadius: '50%'
}));

const SwitchButton = styled(ButtonBase, {
  name: 'ESSwitch',
  slot: 'Button',
  overridesResolver: (_props, styles) => styles.button
})<{ theme: Theme }>(({ theme }) => ({
  borderRadius: '50%',
  padding: '8px',
  left: 0,
  zIndex: 1,
  position: 'absolute',
  transition: theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    backgroundColor: theme.vars.palette.monoA.A50,
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  '&:active': {
    backgroundColor: theme.vars.palette.monoA.A150
  },
  [`&.${buttonBaseClasses.focusVisible}`]: {
    backgroundColor: theme.vars.palette.monoA.A200
  }
})) as unknown as typeof ButtonBase;

const SwitchInput = styled('input', {
  name: 'ESSwitch',
  slot: 'Input',
  overridesResolver: (props, styles) => styles.input
})(() => ({
  cursor: 'inherit',
  position: 'absolute',
  opacity: 0,
  height: '100%',
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}));

/**
 * Switches toggle the state of a single setting on or off.
 */
export const Switch = (inProps: SwitchProps) => {
  const {
    className,
    checked: checkedProp,
    onChange,
    type = 'checkbox',
    disabled,
    defaultChecked,
    color = 'secondary',
    size = 'medium',
    autoFocus,
    id,
    name,
    readOnly,
    value,
    sx,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSwitch'
  });
  const [checked, setCheckedState] = useControlled(defaultChecked, checkedProp);

  const ownerState = { ...props, disabled, color, checked, size };
  const classes = useUtilityClasses(ownerState);

  const onSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!readOnly) {
      setCheckedState(e.target.checked);

      if (onChange) {
        onChange(e);
      }
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!readOnly && e.key === 'Enter') {
      e.preventDefault();
      setCheckedState(!checked);

      if (onChange) {
        onChange({ target: { name, checked: !checked } } as any);
      }
    }
  };

  return (
    <SwitchRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      <SwitchButton
        disableRipple
        disableTouchRipple
        className={classes.button}
        component="span"
        disabled={disabled}
        tabIndex={-1}
      >
        <SwitchInput
          autoFocus={autoFocus}
          checked={!!checked}
          className={classes.input}
          defaultChecked={defaultChecked}
          disabled={disabled}
          id={id}
          name={name}
          readOnly={readOnly}
          type="checkbox"
          value={value}
          onChange={onSwitchChange}
          onKeyDown={type === 'button' ? onKeyDown : undefined}
        />
        <SwitchThumb className={classes.thumb} />
      </SwitchButton>
      <SwitchTrack className={classes.track} />
    </SwitchRoot>
  );
};
