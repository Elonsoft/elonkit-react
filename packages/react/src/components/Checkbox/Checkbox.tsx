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
  '& svg': {
    fill: 'none',
    borderRadius: '6px',
    '& rect': { rx: 4 },
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
  [`&:not(.${checkboxClasses.checked}):hover`]: {
    '& svg': {
      '& path': {
        strokeDashoffset: '30px',
        stroke: theme.palette.monoA.A400
      }
    }
  },
  [`&.${checkboxClasses.sizeLarge}`]: {
    '& svg': {
      fontSize: '22px',
      height: '22px !important',
      width: '22px !important'
    }
  },
  [`&.${checkboxClasses.sizeMedium}`]: {
    '& svg': {
      borderRadius: '4px',
      fontSize: '18px',
      height: '18px !important',
      width: '18px !important'
    }
  },
  [`&.${checkboxClasses.sizeSmall}`]: {
    '& svg': {
      borderRadius: '4px',
      fontSize: '14px',
      height: '14px !important',
      width: '14px !important'
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
    [`&.${checkboxClasses.variantContained}, &.${checkboxClasses.variantHybrid}`]: {
      '& svg': {
        '& rect': {
          stroke: 'transparent'
        },
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
    [`&.${checkboxClasses.variantContained}, &.${checkboxClasses.variantHybrid}`]: {
      '& svg': {
        '& rect': {
          stroke: 'transparent'
        }
      }
    },
    [`&.${checkboxClasses.variantOutlined}`]: {
      '& svg': {
        '& rect:first-of-type': {
          fill: 'transparent',
          stroke: 'transparent'
        },
        '& rect:last-of-type': {
          fill: 'currentColor',
          stroke: 'transparent'
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
    cursor: 'not-allowed',
    pointerEvents: 'auto',
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

  [`&.${checkboxClasses.colorMonoB}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      [`&.${checkboxClasses.disabled}`]: {
        '&, &:hover': {
          color: theme.palette.monoB.A500
        }
      },
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.monoB[300],
        hover: theme.palette.monoB.A50,
        focus: theme.palette.monoB.A200,
        active: theme.palette.monoB.A150
      })
    }
  },
  [`&.${checkboxClasses.colorBlack}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      [`&.${checkboxClasses.disabled}`]: {
        '&, &:hover': {
          color: theme.palette.black.A500
        }
      },
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.black[500],
        hover: theme.palette.black.A50,
        focus: theme.palette.black.A200,
        active: theme.palette.black.A150
      })
    },
    [`&.${checkboxClasses.checked}`]: {
      [`&.${checkboxClasses.variantContained}, &.${checkboxClasses.variantHybrid}`]: {
        '& svg': {
          '& path': {
            strokeDashoffset: '30px',
            stroke: theme.palette.white[500]
          }
        }
      }
    }
  },
  [`&.${checkboxClasses.colorWhite}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      [`&.${checkboxClasses.disabled}`]: {
        '&, &:hover': {
          color: theme.palette.white.A500
        }
      },
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.white[500],
        hover: theme.palette.white.A50,
        focus: theme.palette.white.A200,
        active: theme.palette.white.A150
      })
    },
    [`&.${checkboxClasses.checked}`]: {
      [`&.${checkboxClasses.variantContained}, &.${checkboxClasses.variantHybrid}`]: {
        '& svg': {
          '& path': {
            strokeDashoffset: '30px',
            stroke: theme.palette.black[500]
          }
        }
      }
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
    [`&.${checkboxClasses.variantOutlined}`]: {
      '& svg': {
        '& rect': {
          stroke: 'none'
        },
        '& rect:first-of-type': {
          stroke: 'currentColor'
        }
      }
    },
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
    size = 'large',
    className,
    checked,
    disabled,
    variant = 'contained',
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
