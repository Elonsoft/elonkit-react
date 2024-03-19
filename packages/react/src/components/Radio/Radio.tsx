import * as React from 'react';

import { RadioProps } from './Radio.types';

import clsx from 'clsx';
import { getRadioUtilityClass, radioClasses } from './Radio.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import { capitalize, createChainedFunction } from '@mui/material';
import SwitchBase from '@mui/material/internal/SwitchBase';

import { IconRadio } from '../../icons';
import useRadioGroup from '../RadioGroup/useRadioGroup';

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

type RadioOwnerState = {
  classes?: RadioProps['classes'];
  color: NonNullable<RadioProps['color']>;
  size: NonNullable<RadioProps['size']>;
  disableRipple?: RadioProps['disableRipple'];
  checked?: RadioProps['checked'];
  disabled?: RadioProps['disabled'];
  variant: NonNullable<RadioProps['variant']>;
};

const useUtilityClasses = (ownerState: RadioOwnerState) => {
  const { classes, color, size, checked, disabled, variant } = ownerState;

  const slots = {
    root: [
      'root',
      checked && 'checked',
      disabled && 'disabled',
      `color${capitalize(color)}`,
      `size${capitalize(size)}`,
      `variant${capitalize(variant)}`
    ]
  };

  const composedClasses = composeClasses(slots, getRadioUtilityClass, classes);

  return {
    ...classes,
    ...composedClasses
  };
};

const rootShouldForwardProp = (prop: string) =>
  prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as' && prop !== 'classes';

const RadioRoot = styled(SwitchBase, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop as string) || prop === 'classes',
  name: 'ESRadio',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      styles.root,
      ownerState.checked && styles.checked,
      ownerState.disabled && styles.disabled,
      styles[`size${capitalize(ownerState.size)}`],
      styles[`color${capitalize(ownerState.color)}`],
      styles[`variant${capitalize(ownerState.variant)}`]
    ];
  }
})<{ ownerState: RadioOwnerState }>(({ theme }) => ({
  '& svg': {
    borderRadius: '50%',
    '& circle': {
      transition: '200ms'
    },
    '& circle:last-of-type': {
      fill: 'transparent'
    }
  },
  [`&:not(.${radioClasses.checked}):not(.${radioClasses.disabled}):hover`]: {
    '& svg': {
      '& circle:last-of-type': {
        fill: theme.palette.monoA.A400
      }
    }
  },

  [`&.${radioClasses.sizeLarge}`]: {
    '& svg': {
      fontSize: '24px',
      height: '24px !important',
      width: '24px !important'
    }
  },
  [`&.${radioClasses.sizeMedium}`]: {
    '& svg': {
      fontSize: '20px',
      height: '20px !important',
      width: '20px !important'
    }
  },
  [`&.${radioClasses.sizeSmall}`]: {
    '& svg': {
      fontSize: '16px',
      height: '16px !important',
      width: '16px !important'
    }
  },
  [`&.${radioClasses.variantContained}`]: {
    '& svg': {
      '& circle:first-of-type': {
        strokeWidth: '2'
      }
    }
  },
  [`&.${radioClasses.checked}`]: {
    [`&.${radioClasses.variantContained}, &.${radioClasses.variantHybrid}`]: {
      '& svg': {
        '& circle:first-of-type': {
          strokeWidth: '12px'
        }
      }
    },
    [`&.${radioClasses.variantOutlined}`]: {
      '& svg': {
        '& circle:first-of-type': {
          stroke: theme.palette.monoA.A600
        },
        '& circle:last-of-type': {
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
  [`&.${radioClasses.disabled}`]: {
    '&, &:hover': {
      color: theme.palette.monoA.A400
    }
  },

  [`&.${radioClasses.colorSuccess}`]: {
    [`&.${radioClasses.checked}`]: {
      [`&.${radioClasses.disabled}`]: {
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

  [`&.${radioClasses.colorMonoA}`]: {
    [`&.${radioClasses.checked}`]: {
      [`&.${radioClasses.disabled}`]: {
        '&, &:hover': {
          color: theme.palette.monoA.A500
        }
      },
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.monoA[500],
        hover: theme.palette.monoA.A50,
        focus: theme.palette.monoA.A200,
        active: theme.palette.monoA.A150
      })
    }
  },
  [`&.${radioClasses.colorMonoB}`]: {
    [`&.${radioClasses.checked}`]: {
      [`&.${radioClasses.disabled}`]: {
        '&, &:hover': {
          color: theme.palette.monoB.A500
        }
      },
      ...theme.mixins.button({
        background: 'transparent',
        color: theme.palette.monoB[500],
        hover: theme.palette.monoB.A50,
        focus: theme.palette.monoB.A200,
        active: theme.palette.monoB.A150
      })
    }
  },
  [`&.${radioClasses.colorBlack}`]: {
    [`&.${radioClasses.checked}`]: {
      [`&.${radioClasses.disabled}`]: {
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
    }
  },
  [`&.${radioClasses.colorWhite}`]: {
    [`&.${radioClasses.checked}`]: {
      [`&.${radioClasses.disabled}`]: {
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
    }
  },
  [`&.${radioClasses.colorPrimary}`]: {
    [`&.${radioClasses.checked}`]: {
      [`&.${radioClasses.disabled}`]: {
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
  [`&.${radioClasses.colorSecondary}`]: {
    [`&.${radioClasses.checked}`]: {
      [`&.${radioClasses.disabled}`]: {
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
  [`&.${radioClasses.colorWarning}`]: {
    [`&.${radioClasses.checked}`]: {
      [`&.${radioClasses.disabled}`]: {
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
  [`&.${radioClasses.colorError}`]: {
    [`&.${radioClasses.variantOutlined}`]: {
      '& svg': {
        '& circle:first-of-type': {
          stroke: 'currentColor'
        }
      }
    },
    [`&.${radioClasses.disabled}`]: {
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
  [`&.${radioClasses.colorInfo}`]: {
    [`&.${radioClasses.checked}`]: {
      [`&.${radioClasses.disabled}`]: {
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

function areEqualValues(a: any, b: any) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }

  // The value could be a number, the DOM will stringify it anyway.
  return String(a) === String(b);
}

const defaultCheckedIcon = <IconRadio />;
const defaultIcon = <IconRadio />;

export const Radio = React.forwardRef<HTMLButtonElement, RadioProps>(function Radio(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'ESRadio' });
  const {
    checkedIcon = defaultCheckedIcon,
    color = 'primary',
    icon: iconProp = defaultIcon,
    inputProps,
    size = 'large',
    className,
    checked: checkedProp,
    disabled,
    variant = 'contained',
    onChange: onChangeProp,
    name: nameProp,
    ...other
  } = props;

  const radioGroup = useRadioGroup();

  let checked = checkedProp;
  const onChange = createChainedFunction(onChangeProp as never, radioGroup?.onChange as never);
  let name = nameProp;

  if (radioGroup) {
    if (typeof checked === 'undefined') {
      checked = areEqualValues(radioGroup.value, props.value);
    }
    if (typeof name === 'undefined') {
      name = radioGroup.name;
    }
  }

  const ownerState = {
    ...props,
    color,
    size,
    checked,
    disabled,
    variant
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <div style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
      <RadioRoot
        ref={ref}
        checked={checked}
        checkedIcon={checkedIcon}
        className={clsx(classes.root, className)}
        classes={classes}
        disabled={disabled}
        icon={iconProp}
        inputProps={{
          ...inputProps
        }}
        name={name}
        ownerState={ownerState}
        type="radio"
        onChange={onChange}
        {...other}
      />
    </div>
  );
});
