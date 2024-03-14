import * as React from 'react';

import { CheckboxProps } from './Checkbox.types';

import clsx from 'clsx';
import { checkboxClasses, getCheckboxUtilityClass } from './Checkbox.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import { capitalize } from '@mui/material';
import SwitchBase from '@mui/material/internal/SwitchBase';

import { IconCheckbox, IconCheckboxIndeterminate } from '../../icons';

const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

type CheckboxOwnerState = {
  classes?: CheckboxProps['classes'];
  color: NonNullable<CheckboxProps['color']>;
  indeterminate: CheckboxProps['indeterminate'];
  size: NonNullable<CheckboxProps['size']>;
  disableRipple?: CheckboxProps['disableRipple'];
  checked?: CheckboxProps['checked'];
  disabled?: CheckboxProps['disabled'];
  variant: NonNullable<CheckboxProps['variant']>;
};

const useUtilityClasses = (ownerState: CheckboxOwnerState) => {
  const { classes, indeterminate, color, size, checked, disabled, variant } = ownerState;

  const slots = {
    root: [
      'root',
      indeterminate && 'indeterminate',
      checked && 'checked',
      disabled && 'disabled',
      `color${capitalize(color)}`,
      `size${capitalize(size)}`,
      `variant${capitalize(variant)}`
    ]
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
      ownerState.checked && styles.checked,
      ownerState.disabled && styles.disabled,
      styles[`size${capitalize(ownerState.size)}`],
      styles[`color${capitalize(ownerState.color)}`],
      styles[`variant${capitalize(ownerState.variant)}`]
    ];
  }
})<{ ownerState: CheckboxOwnerState }>(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    fill: 'none',
    '&.MuiSvgIcon-fontSizeSmall': {
      fontSize: '18px'
    }
  },
  '& svg': {
    borderRadius: '4px',
    '& path': {
      strokeDasharray: '15',
      strokeDashoffset: '18px',
      transitionDelay: '150ms',
      transitionDuration: '200ms'
    },
    '& circle': {
      transition: '200ms'
    }
  },
  [`&.${checkboxClasses.variantOutlined}, &.${checkboxClasses.variantHybrid}`]: {
    '& svg': {
      '& rect': {
        strokeWidth: '1'
      }
    }
  },
  [`&.${checkboxClasses.checked}`]: {
    [`&.${checkboxClasses.variantFilled}, &.${checkboxClasses.variantHybrid}`]: {
      '& svg': {
        '& circle': {
          strokeWidth: '20px',
          stroke: 'currentColor'
        },
        '& path': {
          strokeDashoffset: '30px'
        }
      }
    },
    [`&.${checkboxClasses.variantOutlined}`]: {
      '& svg': {
        '& rect': {
          stroke: theme.palette.monoA.A500
        },
        '& circle': {
          strokeWidth: '20px',
          stroke: 'transparent'
        },
        '& path': {
          strokeDashoffset: '30px',
          stroke: 'currentColor'
        }
      }
    }
  },
  [`&.${checkboxClasses.indeterminate}`]: {
    [`&.${checkboxClasses.variantOutlined}`]: {
      '& svg': {
        '& rect:first-of-type': {
          fill: 'transparent'
        },
        '& rect:last-of-type': {
          fill: 'currentColor'
        }
      }
    }
  },
  '& .MuiTouchRipple-rippleVisible': {
    animationName: `${enterKeyframe} !important`,
    opacity: '1 !important'
  },
  '&.MuiButtonBase-root': {
    '& .MuiTouchRipple-root': {
      transitionDuration: `${theme.transitions.duration.short}ms`
    }
  },
  ...theme.mixins.button({
    background: 'transparent',
    color: theme.palette.monoA.A600,
    hover: theme.palette.monoA.A50,
    focus: theme.palette.monoA.A200,
    active: theme.palette.monoA.A150
  }),
  [`&.${checkboxClasses.disabled}`]: {
    '&, &:hover': {
      color: theme.palette.monoA.A400
    }
  },

  [`&.${checkboxClasses.colorSuccess}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      [`&.${checkboxClasses.disabled}`]: {
        '&, &:hover': {
          color: theme.palette.success.A500
        }
      },
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.success[300],
        hover: theme.palette.success.A50,
        focus: theme.palette.success.A200,
        active: theme.palette.success.A150
      })
    }
  },

  [`&.${checkboxClasses.colorMonoA}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      [`&.${checkboxClasses.disabled}`]: {
        '&, &:hover': {
          color: theme.palette.monoA.A500
        }
      },
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.monoA[300],
        hover: theme.palette.monoA.A50,
        focus: theme.palette.monoA.A200,
        active: theme.palette.monoA.A150
      })
    }
  },
  [`&.${checkboxClasses.colorPrimary}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      [`&.${checkboxClasses.disabled}`]: {
        '&, &:hover': {
          color: theme.palette.primary.A500
        }
      },
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.primary[300],
        hover: theme.palette.primary.A50,
        focus: theme.palette.primary.A200,
        active: theme.palette.primary.A150
      })
    }
  },
  [`&.${checkboxClasses.colorSecondary}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      [`&.${checkboxClasses.disabled}`]: {
        '&, &:hover': {
          color: theme.palette.secondary.A500
        }
      },
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.secondary[300],
        hover: theme.palette.secondary.A50,
        focus: theme.palette.secondary.A200,
        active: theme.palette.secondary.A150
      })
    }
  },
  [`&.${checkboxClasses.colorWarning}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      [`&.${checkboxClasses.disabled}`]: {
        '&, &:hover': {
          color: theme.palette.warning.A500
        }
      },
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.warning[300],
        hover: theme.palette.warning.A50,
        focus: theme.palette.warning.A200,
        active: theme.palette.warning.A150
      })
    }
  },
  [`&.${checkboxClasses.colorError}`]: {
    [`&.${checkboxClasses.disabled}`]: {
      '&, &:hover': {
        color: theme.palette.error.A500
      }
    },
    ...theme.mixins.button({
      background: 'transparent',
      color: theme.palette.error[300],
      hover: theme.palette.error.A50,
      focus: theme.palette.error.A200,
      active: theme.palette.error.A150
    })
  },
  [`&.${checkboxClasses.colorInfo}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      [`&.${checkboxClasses.disabled}`]: {
        '&, &:hover': {
          color: theme.palette.info.A500
        }
      },
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.info[300],
        hover: theme.palette.info.A50,
        focus: theme.palette.info.A200,
        active: theme.palette.info.A150
      })
    }
  }
}));

const defaultCheckedIcon = <IconCheckbox />;
const defaultIcon = <IconCheckbox />;
const defaultIndeterminateIcon = <IconCheckboxIndeterminate />;

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'ESCheckbox' });
  const {
    checkedIcon = defaultCheckedIcon,
    color = 'primary',
    icon: iconProp = defaultIcon,
    indeterminate = false,
    indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
    inputProps,
    size = 'medium',
    className,
    checked,
    disabled,
    variant = 'filled',
    ...other
  } = props;

  const icon = indeterminate ? indeterminateIconProp : iconProp;
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;

  const ownerState = {
    ...props,
    color,
    indeterminate,
    size,
    checked,
    disabled,
    variant
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <CheckboxRoot
      ref={ref}
      checked={checked}
      checkedIcon={indeterminateIcon}
      className={clsx(classes.root, className)}
      disabled={disabled}
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
