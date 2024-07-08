import { cloneElement, forwardRef } from 'react';

import { ButtonGroupProps } from './ButtonGroup.types';

import clsx from 'clsx';
import buttonGroupClasses, { getButtonGroupUtilityClass } from './ButtonGroup.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material';
import { capitalize } from '@mui/material/utils';
import getValidReactChildren from '@mui/utils/getValidReactChildren';

import { buttonBaseClasses } from '../ButtonBase';
import { Divider, dividerClasses } from '../Divider';

type ButtonGroupOwnerState = {
  classes?: ButtonGroupProps['classes'];
  color: NonNullable<ButtonGroupProps['color']>;
  disabled: ButtonGroupProps['disabled'];
  fullWidth: ButtonGroupProps['fullWidth'];
  variant: NonNullable<ButtonGroupProps['variant']>;
  size: ButtonGroupProps['size'];
};

const useUtilityClasses = (ownerState: ButtonGroupOwnerState) => {
  const { classes, color, disabled, fullWidth, variant, size } = ownerState;

  const slots = {
    root: [
      'root',
      variant,
      fullWidth && 'fullWidth',
      `color${capitalize(color)}`,
      size && `size${capitalize(size)}`,
      disabled && 'disabled',
    ],
    grouped: [
      'grouped',
      `grouped${capitalize(variant)}`,
      `grouped${capitalize(variant)}${capitalize(color)}`,
      disabled && 'disabled',
    ],
    firstButton: ['firstButton'],
    lastButton: ['lastButton'],
    middleButton: ['middleButton'],
    buttonGroupDivider: ['buttonGroupDivider'],
  };

  return composeClasses(slots, getButtonGroupUtilityClass, classes);
};

const ButtonGroupRoot = styled('div', {
  name: 'ESButtonGroup',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [
      { [`& .${buttonGroupClasses.grouped}`]: styles.grouped },
      { [`& .${buttonGroupClasses.grouped}`]: styles[`grouped${capitalize(ownerState.variant)}`] },
      {
        [`& .${buttonGroupClasses.grouped}`]:
          styles[`grouped${capitalize(ownerState.variant)}${capitalize(ownerState.color)}`],
      },
      {
        [`& .${buttonGroupClasses.firstButton}`]: styles.firstButton,
      },
      {
        [`& .${buttonGroupClasses.lastButton}`]: styles.lastButton,
      },
      {
        [`& .${buttonGroupClasses.middleButton}`]: styles.middleButton,
      },
      styles.root,
      styles[ownerState.variant],
      ownerState.fullWidth && styles.fullWidth,
    ];
  },
})(({ theme }) => ({
  display: 'inline-flex',
  width: 'fit-content',
  borderRadius: 4,

  [`&.${buttonGroupClasses.fullWidth}`]: {
    width: '100%',
  },

  [`& .${buttonGroupClasses.firstButton},& .${buttonGroupClasses.middleButton}`]: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  [`& .${buttonGroupClasses.lastButton},& .${buttonGroupClasses.middleButton}`]: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  [`&.${buttonGroupClasses.outlined}`]: {
    boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A200}`,

    [`& .${buttonGroupClasses.firstButton},& .${buttonGroupClasses.middleButton},& .${buttonGroupClasses.lastButton}`]:
      {
        boxShadow: 'none',

        [`&.${buttonBaseClasses.disabled}`]: {
          boxShadow: 'none',
        },
      },

    [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
      color: theme.vars.palette.monoA.A200,
    },

    [`&.${buttonGroupClasses.colorWhite}`]: {
      boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.white.A200}`,

      [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
        color: theme.vars.palette.white.A200,
      },
    },
    [`&.${buttonGroupClasses.colorBlack}`]: {
      boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.black.A200}`,

      [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
        color: theme.vars.palette.black.A200,
      },
    },
    [`&.${buttonGroupClasses.colorMonoB}`]: {
      boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoB.A200}`,

      [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
        color: theme.vars.palette.monoB.A200,
      },
    },
  },

  [`&.${buttonGroupClasses.contained}`]: {
    [`&.${buttonGroupClasses.colorPrimary}`]: {
      [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
        color: theme.vars.palette.primary[300],
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoB.A200}`,
      },

      [`&.${buttonGroupClasses.disabled}`]: {
        [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
          color: theme.vars.palette.monoA.A75,
          boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A100}`,
        },
      },
    },

    [`&.${buttonGroupClasses.colorSecondary}`]: {
      [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
        color: theme.vars.palette.secondary[300],
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.black.A100}`,
      },

      [`&.${buttonGroupClasses.disabled}`]: {
        [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
          color: theme.vars.palette.monoA.A75,
          boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A100}`,
        },
      },
    },

    [`&.${buttonGroupClasses.colorError}`]: {
      [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
        color: theme.vars.palette.error[300],
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoB.A200}`,
      },

      [`&.${buttonGroupClasses.disabled}`]: {
        [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
          color: theme.vars.palette.monoA.A75,
          boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A100}`,
        },
      },
    },

    [`&.${buttonGroupClasses.colorSuccess}`]: {
      [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
        color: theme.vars.palette.success[300],
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoB.A200}`,
      },

      [`&.${buttonGroupClasses.disabled}`]: {
        [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
          color: theme.vars.palette.monoA.A75,
          boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A100}`,
        },
      },
    },

    [`&.${buttonGroupClasses.colorTertiary}`]: {
      [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
        color: theme.vars.palette.monoA.A100,
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A100}`,
      },

      [`&.${buttonGroupClasses.disabled}`]: {
        [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
          color: theme.vars.palette.monoA.A75,
          boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A100}`,
        },
      },
    },

    [`&.${buttonGroupClasses.colorWhite}`]: {
      [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
        color: theme.vars.palette.white[500],
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.black.A100}`,
      },

      [`&.${buttonGroupClasses.disabled}`]: {
        [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
          color: theme.vars.palette.white.A75,
        },
      },
    },

    [`&.${buttonGroupClasses.colorBlack}`]: {
      [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
        color: theme.vars.palette.black[500],
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.white.A200}`,
      },

      [`&.${buttonGroupClasses.disabled}`]: {
        [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
          color: theme.vars.palette.black.A75,
          boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.black.A100}`,
        },
      },
    },

    [`&.${buttonGroupClasses.colorMonoB}`]: {
      [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
        color: theme.vars.palette.monoB[500],
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A100}`,
      },

      [`&.${buttonGroupClasses.disabled}`]: {
        [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
          color: theme.vars.palette.monoB.A75,
        },
      },
    },

    [`&.${buttonGroupClasses.colorMonoA}`]: {
      [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
        color: theme.vars.palette.monoA[500],
        boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoB.A200}`,
      },

      [`&.${buttonGroupClasses.disabled}`]: {
        [`& .${buttonGroupClasses.buttonGroupDivider}`]: {
          color: theme.vars.palette.monoB.A75,
          boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A100}`,
        },
      },
    },
  },
}));

const ButtonGroupDivider = styled(Divider, {
  name: 'ESButtonGroupDivider',
  slot: 'ButtonGroupDivider',
  overridesResolver: (_props, styles) => styles.buttonGroupDivider,
})<{ ownerState: ButtonGroupOwnerState }>(({ ownerState }) => ({
  ...(ownerState.variant === 'outlined' && {
    [`&.${dividerClasses.vertical}.${dividerClasses.flexItem}`]: {
      margin: '1px 0 1px 0',
    },
  }),
}));

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(function ButtonGroup(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'ESButtonGroup' });
  const {
    children,
    className,
    color = 'primary',
    disabled = false,
    disableTouchRipple = false,
    fullWidth = false,
    size = '500',
    variant = 'outlined',
    ...other
  } = props;

  const ownerState = {
    ...props,
    color,
    disabled,
    disableTouchRipple,
    fullWidth,
    size,
    variant,
  };

  const classes = useUtilityClasses(ownerState);

  const validChildren = getValidReactChildren(children);
  const childrenCount = validChildren.length;

  const getButtonPositionClassName = (index: number) => {
    const isFirstButton = index === 0;
    const isLastButton = index === childrenCount - 1;

    if (isFirstButton && isLastButton) {
      return '';
    }

    if (isFirstButton) {
      return classes.firstButton;
    }

    if (isLastButton) {
      return classes.lastButton;
    }

    return classes.middleButton;
  };

  const shouldRenderDivider = (index: number) => {
    return childrenCount > 1 && index < childrenCount - 1 && (childrenCount !== 3 || index < 2);
  };

  return (
    <ButtonGroupRoot ref={ref} className={clsx(classes.root, className)} role="group" {...other}>
      {validChildren.map((child, index) => (
        <>
          {cloneElement(child, {
            className: clsx(classes.grouped, getButtonPositionClassName(index), child.props.className),
            color,
            disabled,
            disableTouchRipple,
            fullWidth,
            size,
            variant,
          })}
          {shouldRenderDivider(index) && (
            <ButtonGroupDivider
              flexItem
              className={classes.buttonGroupDivider}
              orientation="vertical"
              ownerState={ownerState}
            />
          )}
        </>
      ))}
    </ButtonGroupRoot>
  );
});
