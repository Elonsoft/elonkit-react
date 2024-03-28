import { keyframes } from '@mui/system';

import { Component } from '../component';

const enterKeyframe = keyframes`
  0% {
    opacity: 0.1;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const createButton: Component<'MuiButton'> = (theme, typography) => {
  return {
    defaultProps: {
      disableElevation: true,
      disableFocusRipple: true,
      size: '40'
    },
    styleOverrides: {
      root: {
        minWidth: 0,
        '&:not(.MuiButton-colorInherit)': {
          '& .MuiTouchRipple-root': {
            transitionDuration: `${theme.transitions.duration.short}ms`
          },
          '& .MuiTouchRipple-rippleVisible': {
            animationName: `${enterKeyframe} !important`,
            opacity: '1 !important'
          }
        },
        '&.Mui-disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'auto',
          '&.MuiButton-text, &.MuiButton-outlined, &.MuiButton-contained': {
            color: theme.vars.palette.monoA.A400
          },
          '&.MuiButton-outlined': {
            border: 0,
            boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A150}`
          },
          '&.MuiButton-contained': {
            backgroundColor: theme.vars.palette.monoA.A75
          }
        },
        '&.MuiButton-size16': {
          ...typography.mini100,
          fontWeight: 400,
          height: 16,
          padding: '0 6px',
          textTransform: 'none',
          '& .MuiButton-startIcon': {
            marginLeft: -2,
            marginRight: 2
          },
          '& .MuiButton-endIcon': {
            marginLeft: 2,
            marginRight: -2
          },
          '& > .MuiIcon-root, & > .MuiSvgIcon-root, & > .ESSvgIcon-root': {
            margin: '0 -4px'
          }
        },
        '&.MuiButton-size20': {
          ...typography.caption,
          fontWeight: 400,
          height: 20,
          padding: '0 6px',
          textTransform: 'none',
          '& .MuiButton-startIcon': {
            marginLeft: -2,
            marginRight: 2
          },
          '& .MuiButton-endIcon': {
            marginLeft: 2,
            marginRight: -2
          },
          '& > .MuiIcon-root, & > .MuiSvgIcon-root, & > .ESSvgIcon-root': {
            margin: '0 -4px'
          }
        },
        '&.MuiButton-size24': {
          ...typography.body100,
          fontWeight: 400,
          height: 24,
          padding: '0 6px',
          textTransform: 'none',
          '& .MuiButton-startIcon': {
            marginLeft: -2,
            marginRight: 2
          },
          '& .MuiButton-endIcon': {
            marginLeft: 2,
            marginRight: -2
          },
          '& > .MuiIcon-root, & > .MuiSvgIcon-root, & > .ESSvgIcon-root': {
            margin: '0 -4px'
          }
        },
        '&.MuiButton-size32': {
          ...typography.body100,
          height: 32,
          padding: '0 12px',
          '& .MuiButton-startIcon': {
            marginLeft: -4,
            marginRight: 4
          },
          '& .MuiButton-endIcon': {
            marginLeft: 4,
            marginRight: -4
          },
          '& > .MuiIcon-root, & > .MuiSvgIcon-root, & > .ESSvgIcon-root': {
            margin: '0 -8px'
          },
          '&.MuiButton-text': {
            padding: '0 8px',
            '& .MuiButton-startIcon': {
              marginLeft: -4
            },
            '& .MuiButton-endIcon': {
              marginRight: -4
            },
            '& > .MuiIcon-root, & > .MuiSvgIcon-root, & > .ESSvgIcon-root': {
              margin: -4
            }
          }
        },
        '&.MuiButton-size40': {
          height: 40,
          padding: '0 16px',
          '& .MuiButton-startIcon': {
            marginLeft: -4,
            marginRight: 8
          },
          '& .MuiButton-endIcon': {
            marginLeft: 8,
            marginRight: -4
          },
          '& > .MuiIcon-root, & > .MuiSvgIcon-root, & > .ESSvgIcon-root': {
            margin: '0 -8px'
          },
          '&.MuiButton-text': {
            padding: '0 8px',
            '& .MuiButton-startIcon': {
              marginLeft: 0
            },
            '& .MuiButton-endIcon': {
              marginRight: 0
            },
            '& > .MuiIcon-root, & > .MuiSvgIcon-root, & > .ESSvgIcon-root': {
              margin: 0
            }
          }
        },
        '&.MuiButton-size48': {
          height: 48,
          padding: '0 16px',
          '& .MuiButton-startIcon': {
            marginLeft: -4,
            marginRight: 8
          },
          '& .MuiButton-endIcon': {
            marginLeft: 8,
            marginRight: -4
          },
          '& > .MuiIcon-root, & > .MuiSvgIcon-root, & > .ESSvgIcon-root': {
            margin: '0 -4px'
          },
          '&.MuiButton-text': {
            padding: '0 8px',
            '& .MuiButton-startIcon': {
              marginLeft: 0
            },
            '& .MuiButton-endIcon': {
              marginRight: 0
            },
            '& > .MuiIcon-root, & > .MuiSvgIcon-root, & > .ESSvgIcon-root': {
              margin: '0 4px'
            }
          }
        },
        '&.MuiButton-size56': {
          height: 56,
          padding: '0 20px',
          '& .MuiButton-startIcon': {
            marginLeft: -4,
            marginRight: 8
          },
          '& .MuiButton-endIcon': {
            marginLeft: 8,
            marginRight: -4
          },
          '& > .MuiIcon-root, & > .MuiSvgIcon-root, & > .ESSvgIcon-root': {
            margin: '0 -4px'
          },
          '&.MuiButton-text': {
            padding: '0 12px',
            '& .MuiButton-startIcon': {
              marginLeft: 0
            },
            '& .MuiButton-endIcon': {
              marginRight: 0
            },
            '& > .MuiIcon-root, & > .MuiSvgIcon-root, & > .ESSvgIcon-root': {
              margin: '0 4px'
            }
          }
        }
      },
      text: {
        '&.MuiButton-textPrimary': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.primary[300],
            hover: theme.vars.palette.primary.A50,
            focus: theme.vars.palette.primary.A200,
            active: theme.vars.palette.primary.A150
          })
        },
        '&.MuiButton-textSecondary': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.secondary[400],
            hover: theme.vars.palette.secondary.A50,
            focus: theme.vars.palette.secondary.A200,
            active: theme.vars.palette.secondary.A150
          })
        },
        '&.MuiButton-textError': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.error[300],
            hover: theme.vars.palette.error.A50,
            focus: theme.vars.palette.error.A200,
            active: theme.vars.palette.error.A150
          })
        },
        '&.MuiButton-textSuccess': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.success[300],
            hover: theme.vars.palette.success.A50,
            focus: theme.vars.palette.success.A200,
            active: theme.vars.palette.success.A150
          })
        },
        '&.MuiButton-textTertiary': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.monoA.A700,
            hover: theme.vars.palette.monoA.A50,
            focus: theme.vars.palette.monoA.A200,
            active: theme.vars.palette.monoA.A150
          })
        },
        '&.MuiButton-textMonoA': {
          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.monoA[500],
            hover: theme.vars.palette.monoA.A50,
            focus: theme.vars.palette.monoA.A200,
            active: theme.vars.palette.monoA.A150
          })
        },
        '&.MuiButton-textMonoB': {
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
        '&.MuiButton-textWhite': {
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
        '&.MuiButton-textBlack': {
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
        }
      },
      outlined: {
        border: 0,

        '&, &:not(:disabled):hover, &:not(:disabled):active, &:focus': {
          boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoA.A200}`
        },

        '&.MuiButton-outlinedPrimary': {
          border: 0,

          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.primary[300],
            hover: theme.vars.palette.primary.A50,
            focus: theme.vars.palette.primary.A200,
            active: theme.vars.palette.primary.A150
          })
        },
        '&.MuiButton-outlinedSecondary': {
          border: 0,

          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.secondary[400],
            hover: theme.vars.palette.secondary.A50,
            focus: theme.vars.palette.secondary.A200,
            active: theme.vars.palette.secondary.A150
          })
        },
        '&.MuiButton-outlinedTertiary': {
          border: 0,

          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.monoA.A700,
            hover: theme.vars.palette.monoA.A50,
            focus: theme.vars.palette.monoA.A200,
            active: theme.vars.palette.monoA.A150
          })
        },
        '&.MuiButton-outlinedError': {
          border: 0,

          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.error[300],
            hover: theme.vars.palette.error.A50,
            focus: theme.vars.palette.error.A200,
            active: theme.vars.palette.error.A150
          })
        },
        '&.MuiButton-outlinedSuccess': {
          border: 0,

          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.success[300],
            hover: theme.vars.palette.success.A50,
            focus: theme.vars.palette.success.A200,
            active: theme.vars.palette.success.A150
          })
        },
        '&.MuiButton-outlinedMonoA': {
          border: 0,

          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.monoA[500],
            hover: theme.vars.palette.monoA.A50,
            focus: theme.vars.palette.monoA.A200,
            active: theme.vars.palette.monoA.A150
          })
        },
        '&.MuiButton-outlinedMonoB': {
          border: 0,

          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.monoB[500],
            hover: theme.vars.palette.monoB.A50,
            focus: theme.vars.palette.monoB.A200,
            active: theme.vars.palette.monoB.A150
          }),

          '&, &:not(:disabled):hover, &:not(:disabled):active, &:focus': {
            boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoB.A200}`
          },

          '&.Mui-disabled.MuiButton-outlined': {
            color: theme.vars.palette.monoB.A400,
            boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.monoB.A150}`
          }
        },
        '&.MuiButton-outlinedWhite': {
          border: 0,

          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.white[500],
            hover: theme.vars.palette.white.A50,
            focus: theme.vars.palette.white.A200,
            active: theme.vars.palette.white.A150
          }),

          '&, &:not(:disabled):hover, &:not(:disabled):active, &:focus': {
            boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.white.A200}`
          },

          '&.Mui-disabled.MuiButton-outlined': {
            color: theme.vars.palette.white.A400,
            boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.white.A150}`
          }
        },
        '&.MuiButton-outlinedBlack': {
          border: 0,

          ...theme.mixins.button({
            background: 'transparent',
            color: theme.vars.palette.black[500],
            hover: theme.vars.palette.black.A50,
            focus: theme.vars.palette.black.A200,
            active: theme.vars.palette.black.A150
          }),

          '&, &:not(:disabled):hover, &:not(:disabled):active, &:focus': {
            boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.black.A200}`
          },

          '&.Mui-disabled.MuiButton-outlined': {
            color: theme.vars.palette.black.A400,
            boxShadow: `inset 0px 0px 0px 1px ${theme.vars.palette.black.A150}`
          }
        }
      },
      contained: {
        '&.MuiButton-containedTertiary': {
          ...theme.mixins.button({
            background: theme.vars.palette.monoA.A100,
            color: theme.vars.palette.monoA.A800,
            hover: theme.vars.palette.monoA.A50,
            focus: theme.vars.palette.monoA.A200,
            active: theme.vars.palette.monoA.A150
          })
        },
        '&.MuiButton-containedPrimary': {
          ...theme.mixins.button({
            background: theme.vars.palette.primary[300],
            color: theme.vars.palette.monoB[500],
            hover: theme.vars.palette.monoB.A50,
            focus: theme.vars.palette.monoB.A200,
            active: theme.vars.palette.monoB.A150
          })
        },
        '&.MuiButton-containedSecondary': {
          ...theme.mixins.button({
            background: theme.vars.palette.secondary[300],
            color: theme.vars.palette.black[500],
            hover: theme.vars.palette.black.A50,
            focus: theme.vars.palette.black.A200,
            active: theme.vars.palette.black.A150
          })
        },
        '&.MuiButton-containedError': {
          ...theme.mixins.button({
            background: theme.vars.palette.error[300],
            color: theme.vars.palette.monoB[500],
            hover: theme.vars.palette.monoB.A50,
            focus: theme.vars.palette.monoB.A200,
            active: theme.vars.palette.monoB.A150
          })
        },
        '&.MuiButton-containedSuccess': {
          ...theme.mixins.button({
            background: theme.vars.palette.success[300],
            color: theme.vars.palette.monoB[500],
            hover: theme.vars.palette.monoB.A50,
            focus: theme.vars.palette.monoB.A200,
            active: theme.vars.palette.monoB.A150
          })
        },
        '&.MuiButton-containedMonoA': {
          ...theme.mixins.button({
            background: theme.vars.palette.monoA[500],
            color: theme.vars.palette.monoB[500],
            hover: theme.vars.palette.monoB.A50,
            focus: theme.vars.palette.monoB.A200,
            active: theme.vars.palette.monoB.A150
          })
        },
        '&.MuiButton-containedMonoB': {
          ...theme.mixins.button({
            background: theme.vars.palette.monoB[500],
            color: theme.vars.palette.monoA[500],
            hover: theme.vars.palette.monoA.A50,
            focus: theme.vars.palette.monoA.A200,
            active: theme.vars.palette.monoA.A150
          }),

          '&.Mui-disabled.MuiButton-contained': {
            backgroundColor: theme.vars.palette.monoB.A75,
            color: theme.vars.palette.monoA.A400
          }
        },
        '&.MuiButton-containedWhite': {
          ...theme.mixins.button({
            background: theme.vars.palette.white[500],
            color: theme.vars.palette.black[500],
            hover: theme.vars.palette.black.A50,
            focus: theme.vars.palette.black.A200,
            active: theme.vars.palette.black.A150
          }),

          '&.Mui-disabled.MuiButton-contained': {
            backgroundColor: theme.vars.palette.white.A75,
            color: theme.vars.palette.black.A400
          }
        },
        '&.MuiButton-containedBlack': {
          ...theme.mixins.button({
            background: theme.vars.palette.black[500],
            color: theme.vars.palette.white[500],
            hover: theme.vars.palette.white.A50,
            focus: theme.vars.palette.white.A200,
            active: theme.vars.palette.white.A150
          }),

          '&.Mui-disabled.MuiButton-contained': {
            backgroundColor: theme.vars.palette.black.A75,
            color: theme.vars.palette.black.A400
          }
        }
      }
    }
  };
};
