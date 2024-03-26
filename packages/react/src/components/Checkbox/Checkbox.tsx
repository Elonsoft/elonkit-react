import * as React from 'react';

import { CheckboxProps } from './Checkbox.types';

import clsx from 'clsx';
import { checkboxClasses, getCheckboxUtilityClass } from './Checkbox.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import { capitalize } from '@mui/material';
import SwitchBase from '@mui/material/internal/SwitchBase';

import { CheckboxIcon, checkboxIconClasses } from './CheckboxIcon';

import {
  IconCheckLarge,
  IconCheckMedium,
  IconCheckSmall,
  IconIndeterminateLarge,
  IconIndeterminateMedium,
  IconIndeterminateSmall
} from '../../icons';

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
  error?: CheckboxProps['error'];
  disabled?: CheckboxProps['disabled'];
  variant: NonNullable<CheckboxProps['variant']>;
};

const useUtilityClasses = (ownerState: CheckboxOwnerState) => {
  const { classes, indeterminate, color, size, checked, disabled, variant, error } = ownerState;

  const slots = {
    root: [
      'root',
      indeterminate && 'indeterminate',
      checked && 'checked',
      disabled && 'disabled',
      error && 'error',
      `color${capitalize(color)}`,
      `size${capitalize(size)}`,
      `variant${capitalize(variant)}`
    ],
    container: ['container']
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
      ownerState.error && styles.error,
      styles[`size${capitalize(ownerState.size)}`],
      styles[`color${capitalize(ownerState.color)}`],
      styles[`variant${capitalize(ownerState.variant)}`]
    ];
  }
})<{ ownerState: CheckboxOwnerState }>(({ theme }) => ({
  '& svg': {
    borderRadius: '6px',
    '& path': {
      stroke: 'transparent'
    }
  },
  [`&:not(.${checkboxClasses.checked}):not(.${checkboxClasses.disabled}):not(.${checkboxClasses.indeterminate})`]: {
    '&:hover': {
      '& svg': {
        '& path': {
          stroke: theme.palette.monoA.A400
        }
      }
    },
    '&:active': {
      '& svg': {
        '& path': {
          stroke: theme.palette.monoA.A600
        }
      }
    }
  },
  [`&.${checkboxClasses.sizeLarge}`]: {
    [`& .${checkboxIconClasses.root}`]: {
      borderRadius: '6px',
      height: '22px',
      width: '22px'
    },
    '& svg': {
      fontSize: '24px',
      height: '24px !important',
      width: '24px !important'
    }
  },
  [`&.${checkboxClasses.sizeMedium}`]: {
    [`& .${checkboxIconClasses.root}`]: {
      borderRadius: '4px',
      height: '18px',
      width: '18px'
    },
    '& svg': {
      borderRadius: '4px',
      fontSize: '20px',
      height: '20px !important',
      width: '20px !important'
    }
  },
  [`&.${checkboxClasses.sizeSmall}`]: {
    [`& .${checkboxIconClasses.root}`]: {
      borderRadius: '4px',
      height: '14px',
      width: '14px'
    },
    '& svg': {
      borderRadius: '4px',
      fontSize: '16px',
      height: '16px !important',
      width: '16px !important'
    }
  },

  [`&.${checkboxClasses.variantOutlined}, &.${checkboxClasses.variantHybrid}`]: {
    [`& .${checkboxIconClasses.root}`]: {
      boxShadow: `inset 0 0 0 1px ${theme.palette.monoA.A500}`
    }
  },

  [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
    [`&.${checkboxClasses.variantContained}, &.${checkboxClasses.variantHybrid}`]: {
      '& svg': {
        '& path': {
          stroke: theme.palette.monoB[500]
        }
      },
      [`& .${checkboxIconClasses.root}`]: {
        background: 'currentColor',
        boxShadow: 'none'
      }
    },
    [`&.${checkboxClasses.variantOutlined}`]: {
      '& svg': {
        '& path': {
          stroke: 'currentColor'
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
    opacity: '30%'
  },

  [`&.${checkboxClasses.colorSuccess}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.success[300],
        hover: theme.palette.success.A50,
        focus: theme.palette.success.A200,
        active: theme.palette.success.A150
      }),
      '&:focus': {
        backgroundColor: theme.palette.success.A200
      },
      '&:active': {
        backgroundColor: theme.palette.success.A150
      }
    }
  },

  [`&.${checkboxClasses.colorMonoB}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      [`&.${checkboxClasses.variantContained}, &.${checkboxClasses.variantHybrid}`]: {
        '& path': {
          stroke: theme.palette.monoA[500]
        }
      },
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.monoB[500],
        hover: theme.palette.monoB.A50,
        focus: theme.palette.monoB.A200,
        active: theme.palette.monoB.A150
      })
    },
    ...theme.mixins.button({
      background: 'transparent',
      color: theme.palette.monoB.A600,
      hover: theme.palette.monoB.A50,
      focus: theme.palette.monoB.A200,
      active: theme.palette.monoB.A150
    }),
    [`&:not(.${checkboxClasses.checked}):not(.${checkboxClasses.indeterminate})`]: {
      [`&.${checkboxClasses.variantContained}, &.${checkboxClasses.variantHybrid}`]: {
        [`& .${checkboxIconClasses.root}`]: {
          boxShadow: `inset 0 0 0 2px ${theme.palette.monoB.A600}`
        }
      }
    },
    [`&.${checkboxClasses.variantOutlined}`]: {
      [`& .${checkboxIconClasses.root}`]: {
        boxShadow: `inset 0 0 0 1px ${theme.palette.monoB.A600}`
      }
    },
    [`&:not(.${checkboxClasses.checked}):not(.${checkboxClasses.disabled}):not(.${checkboxClasses.indeterminate})`]: {
      '&:hover': {
        '& svg': {
          '& path': {
            stroke: theme.palette.monoB.A400
          }
        }
      },
      '&:active': {
        '& svg': {
          '& path': {
            stroke: theme.palette.monoB.A600
          }
        }
      }
    },
    '&:focus': {
      backgroundColor: theme.palette.monoB.A200
    },
    '&:active': {
      backgroundColor: theme.palette.monoB.A150
    }
  },
  [`&.${checkboxClasses.colorBlack}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.black[500],
        hover: theme.palette.black.A50,
        focus: theme.palette.black.A200,
        active: theme.palette.black.A150
      }),
      [`&.${checkboxClasses.variantContained}, &.${checkboxClasses.variantHybrid}`]: {
        '& svg': {
          '& path': {
            stroke: theme.palette.white[500]
          }
        }
      }
    },
    ...theme.mixins.button({
      background: 'transparent',
      color: theme.palette.black.A600,
      hover: theme.palette.black.A50,
      focus: theme.palette.black.A200,
      active: theme.palette.black.A150
    }),
    [`&:not(.${checkboxClasses.checked}):not(.${checkboxClasses.indeterminate})`]: {
      [`&.${checkboxClasses.variantContained}, &.${checkboxClasses.variantHybrid}`]: {
        [`& .${checkboxIconClasses.root}`]: {
          boxShadow: `inset 0 0 0 2px ${theme.palette.black.A600}`
        }
      }
    },
    [`&.${checkboxClasses.variantOutlined}`]: {
      [`& .${checkboxIconClasses.root}`]: {
        boxShadow: `inset 0 0 0 1px ${theme.palette.black.A600}`
      }
    },
    [`&:not(.${checkboxClasses.checked}):not(.${checkboxClasses.disabled}):not(.${checkboxClasses.indeterminate})`]: {
      '&:hover': {
        '& svg': {
          '& path': {
            stroke: theme.palette.black.A400
          }
        }
      },
      '&:active': {
        '& svg': {
          '& path': {
            stroke: theme.palette.black.A600
          }
        }
      }
    },
    '&:focus': {
      backgroundColor: theme.palette.black.A200
    },
    '&:active': {
      backgroundColor: theme.palette.black.A150
    }
  },
  [`&.${checkboxClasses.colorWhite}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.white[500],
        hover: theme.palette.white.A50,
        focus: theme.palette.white.A200,
        active: theme.palette.white.A150
      }),
      [`&.${checkboxClasses.variantContained}, &.${checkboxClasses.variantHybrid}`]: {
        '& svg': {
          '& path': {
            stroke: theme.palette.black[500]
          }
        }
      }
    },
    [`&:not(.${checkboxClasses.checked}):not(.${checkboxClasses.indeterminate})`]: {
      [`&.${checkboxClasses.variantContained}, &.${checkboxClasses.variantHybrid}`]: {
        [`& .${checkboxIconClasses.root}`]: {
          boxShadow: `inset 0 0 0 2px ${theme.palette.white.A600}`
        }
      }
    },
    [`&.${checkboxClasses.variantOutlined}`]: {
      [`& .${checkboxIconClasses.root}`]: {
        boxShadow: `inset 0 0 0 1px ${theme.palette.white.A600}`
      }
    },
    [`&:not(.${checkboxClasses.checked}):not(.${checkboxClasses.disabled}):not(.${checkboxClasses.indeterminate})`]: {
      '&:hover': {
        '& svg': {
          '& path': {
            stroke: theme.palette.white.A400
          }
        }
      },
      '&:active': {
        '& svg': {
          '& path': {
            stroke: theme.palette.white.A600
          }
        }
      }
    },
    '&:focus': {
      backgroundColor: theme.palette.white.A200
    },
    '&:active': {
      backgroundColor: theme.palette.white.A150
    }
  },
  [`&.${checkboxClasses.colorMonoA}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.monoA[500],
        hover: theme.palette.monoA.A50,
        focus: theme.palette.monoA.A200,
        active: theme.palette.monoA.A150
      })
    },
    [`&:not(.${checkboxClasses.checked}):not(.${checkboxClasses.indeterminate})`]: {
      [`&.${checkboxClasses.variantContained}, &.${checkboxClasses.variantHybrid}`]: {
        [`& .${checkboxIconClasses.root}`]: {
          boxShadow: `inset 0 0 0 2px ${theme.palette.monoA.A600}`
        }
      }
    },
    [`&.${checkboxClasses.variantOutlined}`]: {
      [`& .${checkboxIconClasses.root}`]: {
        boxShadow: `inset 0 0 0 1px ${theme.palette.monoA.A600}`
      }
    }
  },
  [`&.${checkboxClasses.colorPrimary}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.primary[300],
        hover: theme.palette.primary.A50,
        focus: theme.palette.primary.A200,
        active: theme.palette.primary.A150
      }),
      '&:focus': {
        backgroundColor: theme.palette.primary.A200
      },
      '&:active': {
        backgroundColor: theme.palette.primary.A150
      }
    }
  },
  [`&.${checkboxClasses.colorSecondary}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.secondary[300],
        hover: theme.palette.secondary.A50,
        focus: theme.palette.secondary.A200,
        active: theme.palette.secondary.A150
      }),
      '&:focus': {
        backgroundColor: theme.palette.secondary.A200
      },
      '&:active': {
        backgroundColor: theme.palette.secondary.A150
      }
    }
  },
  [`&.${checkboxClasses.colorWarning}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.warning[300],
        hover: theme.palette.warning.A50,
        focus: theme.palette.warning.A200,
        active: theme.palette.warning.A150
      }),
      '&:focus': {
        backgroundColor: theme.palette.warning.A200
      },
      '&:active': {
        backgroundColor: theme.palette.warning.A150
      }
    }
  },
  [`&.${checkboxClasses.colorError}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.error[300],
        hover: theme.palette.error.A50,
        focus: theme.palette.error.A200,
        active: theme.palette.error.A150
      }),
      '&:focus': {
        backgroundColor: theme.palette.error.A200
      },
      '&:active': {
        backgroundColor: theme.palette.error.A150
      }
    }
  },
  [`&.${checkboxClasses.colorInfo}`]: {
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.info[300],
        hover: theme.palette.info.A50,
        focus: theme.palette.info.A200,
        active: theme.palette.info.A150
      }),
      '&:focus': {
        backgroundColor: theme.palette.info.A200
      },
      '&:active': {
        backgroundColor: theme.palette.info.A150
      }
    }
  },
  [`&.${checkboxClasses.error}`]: {
    ...theme.mixins.button({
      background: 'transparent',
      color: theme.palette.error[300],
      hover: theme.palette.error.A50,
      focus: theme.palette.error.A200,
      active: theme.palette.error.A150
    }),
    [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.error[300],
        hover: theme.palette.error.A50,
        focus: theme.palette.error.A200,
        active: theme.palette.error.A150
      }),
      [`&.${checkboxClasses.variantContained}, &.${checkboxClasses.variantHybrid}`]: {
        '& svg': {
          '& path': {
            stroke: theme.palette.monoB[500]
          }
        }
      }
    },
    [`&:not(.${checkboxClasses.checked}):not(.${checkboxClasses.indeterminate})`]: {
      [`&.${checkboxClasses.variantContained}, &.${checkboxClasses.variantHybrid}`]: {
        [`& .${checkboxIconClasses.root}`]: {
          boxShadow: `inset 0 0 0 2px ${theme.palette.error[300]}`
        }
      }
    },
    [`&.${checkboxClasses.variantOutlined}`]: {
      [`& .${checkboxIconClasses.root}`]: {
        boxShadow: `inset 0 0 0 1px ${theme.palette.error[300]}`
      }
    },
    '&:focus': {
      backgroundColor: theme.palette.error.A200
    },
    '&:active': {
      backgroundColor: theme.palette.error.A150
    }
  }
}));

const defaultIcon = {
  large: (
    <CheckboxIcon>
      <IconCheckLarge />
    </CheckboxIcon>
  ),
  medium: (
    <CheckboxIcon>
      <IconCheckMedium />
    </CheckboxIcon>
  ),
  small: (
    <CheckboxIcon>
      <IconCheckSmall />
    </CheckboxIcon>
  )
};

const defaultIndeterminateIcon = {
  large: (
    <CheckboxIcon>
      <IconIndeterminateLarge />
    </CheckboxIcon>
  ),
  medium: (
    <CheckboxIcon>
      <IconIndeterminateMedium />
    </CheckboxIcon>
  ),
  small: (
    <CheckboxIcon>
      <IconIndeterminateSmall />
    </CheckboxIcon>
  )
};

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'ESCheckbox' });
  const {
    size = 'large',
    variant = 'contained',
    color = 'primary',
    checkedIcon = defaultIcon[size],
    icon: iconProp = defaultIcon[size],
    indeterminate = false,
    indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon[size],
    iconMapping = defaultIcon,
    inputProps,
    className,
    checked,
    disabled,
    ...other
  } = props;

  const icon = indeterminate ? indeterminateIconProp : iconProp ?? iconMapping[size];
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon ?? iconMapping[size];

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
    <div style={{ width: 'fit-content', cursor: disabled ? 'not-allowed' : 'pointer' }}>
      <CheckboxRoot
        ref={ref}
        focusRipple
        checked={checked}
        checkedIcon={indeterminateIcon}
        className={clsx(classes.root, className)}
        disabled={disabled}
        icon={icon}
        inputProps={{
          ...{ 'data-indeterminate': indeterminate },
          ...inputProps
        }}
        ownerState={ownerState}
        type="checkbox"
        {...other}
        classes={classes}
      />
    </div>
  );
});
