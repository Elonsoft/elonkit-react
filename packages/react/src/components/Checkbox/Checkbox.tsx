import * as React from 'react';

import { CheckboxProps } from './Checkbox.types';

import clsx from 'clsx';
import { checkboxClasses, getCheckboxUtilityClass } from './Checkbox.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material';
import SwitchBase from '@mui/material/internal/SwitchBase';

import { IconCheckbox, IconCheckboxChecked, IconCheckboxIndeterminate } from '../../icons';

type CheckboxOwnerState = {
  classes?: CheckboxProps['classes'];
  color: NonNullable<CheckboxProps['color']>;
  indeterminate: CheckboxProps['indeterminate'];
  size: NonNullable<CheckboxProps['size']>;
  disableRipple?: CheckboxProps['disableRipple'];
};

const useUtilityClasses = (ownerState: CheckboxOwnerState) => {
  const { classes, indeterminate, color, size } = ownerState;

  const slots = {
    root: ['root', indeterminate && 'indeterminate', `color${capitalize(color)}`, `size${capitalize(size)}`]
  };

  const composedClasses = composeClasses(slots, getCheckboxUtilityClass, classes);

  return {
    ...classes,
    ...composedClasses
  };
};

const rootShouldForwardProp = (prop: string) =>
  prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as' && prop !== 'classes';

const CheckboxRoot = styled(SwitchBase, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop as string) || prop === 'classes',
  name: 'ESCheckbox',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.indeterminate && styles.indeterminate,
      styles[`size${capitalize(ownerState.size)}`],
      ownerState.color !== 'default' && styles[`color${capitalize(ownerState.color)}`]
    ];
  }
})<{ ownerState: CheckboxOwnerState }>(({ theme }) => ({
  [`&.${checkboxClasses.colorSuccess}`]: {
    ...theme.mixins.button({
      background: theme.palette.monoB[500],
      color: theme.palette.success[300],
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    })
  },

  [`&.${checkboxClasses.colorMonoA}`]: {
    ...theme.mixins.button({
      background: theme.palette.monoB[500],
      color: theme.palette.monoA.A800,
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    })
  },
  [`&.${checkboxClasses.colorPrimary}`]: {
    ...theme.mixins.button({
      background: theme.palette.monoB[500],
      color: theme.palette.primary[300],
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    })
  },
  [`&.${checkboxClasses.colorSecondary}`]: {
    ...theme.mixins.button({
      background: theme.palette.monoB[500],
      color: theme.palette.secondary[300],
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    })
  },
  [`&.${checkboxClasses.colorWarning}`]: {
    ...theme.mixins.button({
      background: theme.palette.monoB[500],
      color: theme.palette.warning[300],
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    })
  },
  [`&.${checkboxClasses.colorError}`]: {
    ...theme.mixins.button({
      background: theme.palette.monoB[500],
      color: theme.palette.error[300],
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    })
  },
  [`&.${checkboxClasses.colorInfo}`]: {
    ...theme.mixins.button({
      background: theme.palette.monoB[500],
      color: theme.palette.info[300],
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    })
  }
}));

const defaultCheckedIcon = <IconCheckboxChecked />;
const defaultIcon = <IconCheckbox />;
const defaultIndeterminateIcon = <IconCheckboxIndeterminate />;

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'MuiCheckbox' });
  const {
    checkedIcon = defaultCheckedIcon,
    color = 'primary',
    icon: iconProp = defaultIcon,
    indeterminate = false,
    indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
    inputProps,
    size = 'medium',
    className,
    ...other
  } = props;

  const icon = indeterminate ? indeterminateIconProp : iconProp;
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;

  const ownerState = {
    ...props,
    color,
    indeterminate,
    size
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <CheckboxRoot
      ref={ref}
      checkedIcon={indeterminateIcon}
      className={clsx(classes.root, className)}
      icon={icon}
      inputProps={{
        // 'data-indeterminate': indeterminate,
        ...inputProps
      }}
      ownerState={ownerState}
      type="checkbox"
      {...other}
      classes={classes}
    />
  );
});
