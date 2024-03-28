import { forwardRef } from 'react';

import { ExtendButtonBase } from '../ButtonBase/ButtonBase.types';
import { ButtonOwnProps, ButtonTypeMap } from './Button.types';

import clsx from 'clsx';
import { buttonClasses, getButtonUtilityClass } from './Button.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material/utils';

import { ButtonBase, buttonBaseClasses } from '../ButtonBase';
import { svgIconClasses } from '../SvgIcon';

type ButtonOwnerState = {
  classes: ButtonOwnProps['classes'];
  fullWidth: ButtonOwnProps['fullWidth'];

  color: NonNullable<ButtonOwnProps['color']>;
  size: NonNullable<ButtonOwnProps['size']>;
  variant: NonNullable<ButtonOwnProps['variant']>;
};

const useUtilityClasses = (ownerState: ButtonOwnerState) => {
  const { classes, fullWidth, color, size, variant } = ownerState;

  const slots = {
    root: [
      'root',
      fullWidth && 'fullWidth',
      `color${capitalize(color)}`,
      `size${capitalize(size)}`,
      `variant${capitalize(variant)}`
    ],
    startIcon: ['icon', 'startIcon'],
    endIcon: ['icon', 'endIcon']
  };

  return composeClasses(slots, getButtonUtilityClass, classes);
};

const ButtonRoot = styled(ButtonBase, {
  name: 'ESButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { fullWidth, color, size, variant }
    } = props;

    return [
      styles.root,
      fullWidth && styles.fullWidth,
      styles[`color${capitalize(color)}`],
      styles[`size${capitalize(size)}`],
      styles[`variant${capitalize(variant)}`]
    ];
  }
})(({ theme }) => ({
  ...theme.typography.button,
  borderRadius: '4px',
  textTransform: 'uppercase',
  '--icon': 'var(--text)',

  [`&.${buttonClasses.fullWidth}`]: {
    '--text': theme.palette.monoA.A400
  },

  [`&.${buttonBaseClasses.disabled}`]: {
    cursor: 'not-allowed'
  },

  [`&.${buttonClasses.variantContained}`]: {
    '--hovered': theme.palette.monoB.A50,
    '--focused': theme.palette.monoB.A200,
    '--pressed': theme.palette.monoB.A150,

    [`&.${buttonClasses.colorTertiary}`]: {
      '--background': theme.palette.monoA.A100,
      '--text': theme.palette.monoA.A800,
      '--hovered': theme.palette.monoA.A50,
      '--focused': theme.palette.monoA.A200,
      '--pressed': theme.palette.monoA.A150
    },
    [`&.${buttonClasses.colorPrimary}`]: {
      '--background': theme.palette.primary[300],
      '--text': theme.palette.monoB[500],
      '--hovered': theme.palette.monoB.A50,
      '--focused': theme.palette.monoB.A200,
      '--pressed': theme.palette.monoB.A150
    },
    [`&.${buttonClasses.colorSecondary}`]: {
      '--background': theme.palette.secondary[300],
      '--text': theme.palette.black[500],
      '--hovered': theme.palette.black.A50,
      '--focused': theme.palette.black.A200,
      '--pressed': theme.palette.black.A150
    },
    [`&.${buttonClasses.colorError}`]: {
      '--background': theme.palette.error[300],
      '--text': theme.palette.monoB[500],
      '--hovered': theme.palette.monoB.A50,
      '--focused': theme.palette.monoB.A200,
      '--pressed': theme.palette.monoB.A150
    },
    [`&.${buttonClasses.colorSuccess}`]: {
      '--background': theme.palette.success[300],
      '--text': theme.palette.monoB[500],
      '--hovered': theme.palette.monoB.A50,
      '--focused': theme.palette.monoB.A200,
      '--pressed': theme.palette.monoB.A150
    },
    [`&.${buttonClasses.colorMonoA}`]: {
      '--background': theme.palette.monoA[500],
      '--text': theme.palette.monoB[500],
      '--hovered': theme.palette.monoB.A50,
      '--focused': theme.palette.monoB.A200,
      '--pressed': theme.palette.monoB.A150
    },
    [`&.${buttonClasses.colorMonoB}`]: {
      '--background': theme.palette.monoB[500],
      '--text': theme.palette.monoA[500],
      '--hovered': theme.palette.monoA.A50,
      '--focused': theme.palette.monoA.A200,
      '--pressed': theme.palette.monoA.A150,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--background': theme.palette.monoB.A75,
        '--text': theme.palette.monoA.A400,
        '--icon': theme.palette.monoA.A400
      }
    },
    [`&.${buttonClasses.colorWhite}`]: {
      '--background': theme.palette.white[500],
      '--text': theme.palette.black[500],
      '--hovered': theme.palette.black.A50,
      '--focused': theme.palette.black.A200,
      '--pressed': theme.palette.black.A150,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--background': theme.palette.white.A75,
        '--text': theme.palette.black.A400,
        '--icon': theme.palette.black.A400
      }
    },
    [`&.${buttonClasses.colorBlack}`]: {
      '--background': theme.palette.black[500],
      '--text': theme.palette.white[500],
      '--hovered': theme.palette.white.A50,
      '--focused': theme.palette.white.A200,
      '--pressed': theme.palette.white.A150,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--background': theme.palette.black.A75,
        '--text': theme.palette.black.A400,
        '--icon': theme.palette.black.A400
      }
    },

    [`&.${buttonBaseClasses.disabled}`]: {
      '--background': theme.palette.monoA.A75,
      '--text': theme.palette.monoA.A400,
      '--icon': theme.palette.monoA.A400
    }
  },

  [`&.${buttonClasses.variantOutlined}`]: {
    '--background': 'transparent',
    boxShadow: `inset 0px 0px 0px 1px ${theme.palette.monoA.A200}`,

    [`&.${buttonClasses.colorPrimary}`]: {
      '--text': theme.palette.primary[300],
      '--hovered': theme.palette.primary.A50,
      '--focused': theme.palette.primary.A200,
      '--pressed': theme.palette.primary.A150
    },
    [`&.${buttonClasses.colorSecondary}`]: {
      '--text': theme.palette.secondary[400],
      '--hovered': theme.palette.secondary.A50,
      '--focused': theme.palette.secondary.A200,
      '--pressed': theme.palette.secondary.A150
    },
    [`&.${buttonClasses.colorTertiary}`]: {
      '--text': theme.palette.monoA.A700,
      '--hovered': theme.palette.monoA.A50,
      '--focused': theme.palette.monoA.A200,
      '--pressed': theme.palette.monoA.A150
    },
    [`&.${buttonClasses.colorError}`]: {
      '--text': theme.palette.error[300],
      '--hovered': theme.palette.error.A50,
      '--focused': theme.palette.error.A200,
      '--pressed': theme.palette.error.A150
    },
    [`&.${buttonClasses.colorSuccess}`]: {
      '--text': theme.palette.success[300],
      '--hovered': theme.palette.success.A50,
      '--focused': theme.palette.success.A200,
      '--pressed': theme.palette.success.A150
    },
    [`&.${buttonClasses.colorMonoA}`]: {
      '--text': theme.palette.monoA[500],
      '--hovered': theme.palette.monoA.A50,
      '--focused': theme.palette.monoA.A200,
      '--pressed': theme.palette.monoA.A150
    },
    [`&.${buttonClasses.colorMonoB}`]: {
      '--text': theme.palette.monoB[500],
      '--hovered': theme.palette.monoB.A50,
      '--focused': theme.palette.monoB.A200,
      '--pressed': theme.palette.monoB.A150,
      boxShadow: `inset 0px 0px 0px 1px ${theme.palette.monoB.A200}`,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--text': theme.palette.monoB.A400,
        '--icon': theme.palette.monoB.A400,
        boxShadow: `inset 0px 0px 0px 1px ${theme.palette.monoB.A150}`
      }
    },
    [`&.${buttonClasses.colorWhite}`]: {
      '--text': theme.palette.white[500],
      '--hovered': theme.palette.white.A50,
      '--focused': theme.palette.white.A200,
      '--pressed': theme.palette.white.A150,
      boxShadow: `inset 0px 0px 0px 1px ${theme.palette.white.A200}`,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--text': theme.palette.white.A400,
        '--icon': theme.palette.white.A400,
        boxShadow: `inset 0px 0px 0px 1px ${theme.palette.white.A150}`
      }
    },
    [`&.${buttonClasses.colorBlack}`]: {
      '--background': 'transparent',
      '--text': theme.palette.black[500],
      '--hovered': theme.palette.black.A50,
      '--focused': theme.palette.black.A200,
      '--pressed': theme.palette.black.A150,
      boxShadow: `inset 0px 0px 0px 1px ${theme.palette.black.A200}`,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--text': theme.palette.black.A400,
        '--icon': theme.palette.black.A400,
        boxShadow: `inset 0px 0px 0px 1px ${theme.palette.black.A150}`
      }
    },

    [`&.${buttonBaseClasses.disabled}`]: {
      '--text': theme.palette.monoA.A400,
      '--icon': theme.palette.monoA.A400,
      boxShadow: `inset 0px 0px 0px 1px ${theme.palette.monoA.A150}`
    }
  },

  [`&.${buttonClasses.variantText}`]: {
    '--background': 'transparent',

    [`&.${buttonClasses.colorPrimary}`]: {
      '--text': theme.palette.primary[300],
      '--hovered': theme.palette.primary.A50,
      '--focused': theme.palette.primary.A200,
      '--pressed': theme.palette.primary.A150
    },
    [`&.${buttonClasses.colorSecondary}`]: {
      '--text': theme.palette.secondary[400],
      '--hovered': theme.palette.secondary.A50,
      '--focused': theme.palette.secondary.A200,
      '--pressed': theme.palette.secondary.A150
    },
    [`&.${buttonClasses.colorError}`]: {
      '--text': theme.palette.error[300],
      '--hovered': theme.palette.error.A50,
      '--focused': theme.palette.error.A200,
      '--pressed': theme.palette.error.A150
    },
    [`&.${buttonClasses.colorSuccess}`]: {
      '--text': theme.palette.success[300],
      '--hovered': theme.palette.success.A50,
      '--focused': theme.palette.success.A200,
      '--pressed': theme.palette.success.A150
    },
    [`&.${buttonClasses.colorTertiary}`]: {
      '--text': theme.palette.monoA.A700,
      '--hovered': theme.palette.monoA.A50,
      '--focused': theme.palette.monoA.A200,
      '--pressed': theme.palette.monoA.A150
    },
    [`&.${buttonClasses.colorMonoA}`]: {
      '--text': theme.palette.monoA[500],
      '--hovered': theme.palette.monoA.A50,
      '--focused': theme.palette.monoA.A200,
      '--pressed': theme.palette.monoA.A150
    },
    [`&.${buttonClasses.colorMonoB}`]: {
      '--text': theme.palette.monoB[500],
      '--hovered': theme.palette.monoB.A50,
      '--focused': theme.palette.monoB.A200,
      '--pressed': theme.palette.monoB.A150,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--text': theme.palette.monoB.A400,
        '--icon': theme.palette.monoB.A400
      }
    },
    [`&.${buttonClasses.colorWhite}`]: {
      '--text': theme.palette.white[500],
      '--hovered': theme.palette.white.A50,
      '--focused': theme.palette.white.A200,
      '--pressed': theme.palette.white.A150,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--text': theme.palette.white.A400,
        '--icon': theme.palette.white.A400
      }
    },
    [`&.${buttonClasses.colorBlack}`]: {
      '--text': theme.palette.black[500],
      '--hovered': theme.palette.black.A50,
      '--focused': theme.palette.black.A200,
      '--pressed': theme.palette.black.A150,

      [`&.${buttonBaseClasses.disabled}`]: {
        '--text': theme.palette.black.A400,
        '--icon': theme.palette.black.A400
      }
    },

    [`&.${buttonBaseClasses.disabled}`]: {
      '--text': theme.palette.monoA.A400,
      '--icon': theme.palette.monoA.A400
    }
  },

  [`&.${buttonClasses.size16} .${buttonBaseClasses.wrapper}`]: {
    ...theme.typography.mini100,
    fontWeight: 400,
    height: 16,
    padding: '0 6px',
    textTransform: 'none',

    [`& .${buttonClasses.startIcon}`]: {
      marginLeft: -2,
      marginRight: 2
    },
    [`& .${buttonClasses.endIcon}`]: {
      marginLeft: 2,
      marginRight: -2
    },
    [`& > .${svgIconClasses.root}`]: {
      margin: '0 -4px'
    }
  },
  [`&.${buttonClasses.size20} .${buttonBaseClasses.wrapper}`]: {
    ...theme.typography.caption,
    fontWeight: 400,
    height: 20,
    padding: '0 6px',
    textTransform: 'none',

    [`& .${buttonClasses.startIcon}`]: {
      marginLeft: -2,
      marginRight: 2
    },
    [`& .${buttonClasses.endIcon}`]: {
      marginLeft: 2,
      marginRight: -2
    },
    [`& > .${svgIconClasses.root}`]: {
      margin: '0 -4px'
    }
  },
  [`&.${buttonClasses.size24} .${buttonBaseClasses.wrapper}`]: {
    ...theme.typography.body100,
    fontWeight: 400,
    height: 24,
    padding: '0 6px',
    textTransform: 'none',

    [`& .${buttonClasses.startIcon}`]: {
      marginLeft: -2,
      marginRight: 2
    },
    [`& .${buttonClasses.endIcon}`]: {
      marginLeft: 2,
      marginRight: -2
    },
    [`& > .${svgIconClasses.root}`]: {
      margin: '0 -4px'
    }
  },
  [`&.${buttonClasses.size32}`]: {
    [`& .${buttonBaseClasses.wrapper}`]: {
      ...theme.typography.body100,
      height: 32,
      padding: '0 12px',
      textTransform: 'none',

      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: -4,
        marginRight: 4
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginLeft: 4,
        marginRight: -4
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -8px'
      }
    },
    [`&.${buttonClasses.variantText} .${buttonBaseClasses.wrapper}`]: {
      padding: '0 8px',
      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: -4
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginRight: -4
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: -4
      }
    }
  },
  [`&.${buttonClasses.size40}`]: {
    [`& .${buttonBaseClasses.wrapper}`]: {
      height: 40,
      padding: '0 16px',
      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: -4,
        marginRight: 8
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginLeft: 8,
        marginRight: -4
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -8px'
      }
    },
    [`&.${buttonClasses.variantText} .${buttonBaseClasses.wrapper}`]: {
      padding: '0 8px',
      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: 0
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginRight: 0
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: 0
      }
    }
  },
  [`&.${buttonClasses.size48}`]: {
    [`& .${buttonBaseClasses.wrapper}`]: {
      height: 48,
      padding: '0 16px',
      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: -4,
        marginRight: 8
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginLeft: 8,
        marginRight: -4
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -4px'
      }
    },
    [`&.${buttonClasses.variantText} .${buttonBaseClasses.wrapper}`]: {
      padding: '0 8px',
      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: 0
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginRight: 0
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 4px'
      }
    }
  },
  [`&.${buttonClasses.size56}`]: {
    [`& .${buttonBaseClasses.wrapper}`]: {
      height: 56,
      padding: '0 20px',
      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: -4,
        marginRight: 8
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginLeft: 8,
        marginRight: -4
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 -4px'
      }
    },
    [`&.${buttonClasses.variantText} .${buttonBaseClasses.wrapper}`]: {
      padding: '0 12px',
      [`& .${buttonClasses.startIcon}`]: {
        marginLeft: 0
      },
      [`& .${buttonClasses.endIcon}`]: {
        marginRight: 0
      },
      [`& > .${svgIconClasses.root}`]: {
        margin: '0 4px'
      }
    }
  }
}));

const ButtonStartIcon = styled('span', {
  name: 'ESButton',
  slot: 'StartIcon',
  overridesResolver: (_props, styles) => [styles.icon, styles.startIcon]
})(() => ({
  display: 'inherit',
  color: 'var(--icon)'
}));

const ButtonEndIcon = styled('span', {
  name: 'ESButton',
  slot: 'EndIcon',
  overridesResolver: (_props, styles) => [styles.icon, styles.endIcon]
})(() => ({
  display: 'inherit',
  color: 'var(--icon)'
}));

/**
 * The Button allows users to take actions, and make choices, with a single tap.
 */
export const Button = forwardRef(function Button(inProps, ref) {
  const {
    component,
    children,
    classes: inClasses,
    className,
    sx,
    fullWidth,
    color = 'tertiary',
    size = '40',
    variant = 'text',
    startIcon,
    endIcon,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESButton'
  });

  const ownerState = { classes: inClasses, fullWidth, color, size, variant };
  const classes = useUtilityClasses(ownerState);

  return (
    <ButtonRoot ref={ref as any} as={component} className={clsx(className, classes.root)} sx={sx} {...props}>
      {startIcon && <ButtonStartIcon className={classes.startIcon}>{startIcon}</ButtonStartIcon>}
      {children}
      {endIcon && <ButtonEndIcon className={classes.endIcon}>{startIcon}</ButtonEndIcon>}
    </ButtonRoot>
  );
}) as ExtendButtonBase<ButtonTypeMap>;
