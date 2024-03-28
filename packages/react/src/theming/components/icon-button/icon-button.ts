import { keyframes } from '@mui/system';

import { Component } from '../component';

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

export const createIconButton: Component<'MuiIconButton'> = (theme) => {
  return {
    defaultProps: {
      disableFocusRipple: true,
      size: '40',
      color: 'tertiary'
    },
    styleOverrides: {
      root: {
        padding: 0,
        '&:not(.MuiIconButton-colorInherit)': {
          '& .MuiTouchRipple-root': {
            transitionDuration: `${theme.transitions.duration.short}ms`
          },
          '& .MuiTouchRipple-rippleVisible': {
            animationName: `${enterKeyframe} !important`,
            opacity: '1 !important'
          }
        },
        '&.MuiIconButton-size16': {
          height: 16,
          width: 16
        },
        '&.MuiIconButton-size20': {
          height: 20,
          width: 20
        },
        '&.MuiIconButton-size24': {
          height: 24,
          width: 24
        },
        '&.MuiIconButton-size32': {
          height: 32,
          width: 32
        },
        '&.MuiIconButton-size40': {
          height: 40,
          width: 40
        },
        '&.MuiIconButton-size48': {
          height: 48,
          width: 48
        },
        '&.MuiIconButton-size56': {
          height: 56,
          width: 56
        },
        '&.MuiIconButton-colorPrimary': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.primary[300],
            hover: theme.vars.palette.primary.A50,
            focus: theme.vars.palette.primary.A200,
            active: theme.vars.palette.primary.A150
          })
        },
        '&.MuiIconButton-colorSecondary': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.secondary[400],
            hover: theme.vars.palette.secondary.A50,
            focus: theme.vars.palette.secondary.A200,
            active: theme.vars.palette.secondary.A150
          })
        },
        '&.MuiIconButton-colorTertiary': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.monoA.A700,
            hover: theme.vars.palette.monoA.A50,
            focus: theme.vars.palette.monoA.A200,
            active: theme.vars.palette.monoA.A150
          })
        },
        '&.MuiIconButton-colorError': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.error[300],
            hover: theme.vars.palette.error.A50,
            focus: theme.vars.palette.error.A200,
            active: theme.vars.palette.error.A150
          })
        },
        '&.MuiIconButton-colorMonoA': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.monoA[500],
            hover: theme.vars.palette.monoA.A50,
            focus: theme.vars.palette.monoA.A200,
            active: theme.vars.palette.monoA.A150
          })
        },
        '&.MuiIconButton-colorMonoB': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.monoB[500],
            hover: theme.vars.palette.monoB.A50,
            focus: theme.vars.palette.monoB.A200,
            active: theme.vars.palette.monoB.A150
          }),

          '&.Mui-disabled': {
            color: theme.vars.palette.monoB.A400
          }
        },
        '&.MuiIconButton-colorWhite': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.white[500],
            hover: theme.vars.palette.white.A50,
            focus: theme.vars.palette.white.A200,
            active: theme.vars.palette.white.A150
          }),

          '&.Mui-disabled': {
            color: theme.vars.palette.white.A400
          }
        },
        '&.MuiIconButton-colorBlack': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.black[500],
            hover: theme.vars.palette.black.A50,
            focus: theme.vars.palette.black.A200,
            active: theme.vars.palette.black.A150
          }),

          '&.Mui-disabled': {
            color: theme.vars.palette.black.A400
          }
        },
        '&.Mui-disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'auto',
          color: theme.vars.palette.monoA.A400
        }
      }
    }
  };
};
