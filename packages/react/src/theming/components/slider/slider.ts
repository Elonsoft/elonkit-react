import { Component } from '../component';

export const createSlider: Component<'MuiSlider'> = (theme, typography) => {
  return {
    defaultProps: {
      color: 'secondary'
    },
    styleOverrides: {
      root: {
        borderRadius: '8px',
        '& .MuiSlider-rail': {
          transform: 'translateX(-3px) translateY(-50%)',
          width: 'calc(100% + 6px)'
        },
        '& .MuiSlider-track': {
          transform: 'translateX(-3px) translateY(-50%)',
          paddingRight: '3px'
        },
        '&.MuiSlider-vertical': {
          '& .MuiSlider-rail': {
            transform: 'translateY(-3px) translateX(-50%)',
            height: 'calc(100% + 6px)',
            width: 'inherit'
          },
          '& .MuiSlider-track': {
            transform: 'translateY(3px) translateX(-50%)',
            paddingRight: 0,
            paddingTop: '3px'
          }
        },
        '&.MuiSlider-colorPrimary': {
          color: theme.vars.palette.primary[300],
          '& .MuiSlider-thumb': {
            '&:hover': {
              boxShadow: `0 0 0 8px ${theme.vars.palette.primary.A150}`
            },
            '&.Mui-focusVisible': {
              boxShadow: `0 0 0 8px ${theme.vars.palette.primary.A400}`
            },
            '&.Mui-active': {
              boxShadow: `0 0 0 6px ${theme.vars.palette.primary.A300}`
            }
          }
        },
        '&.MuiSlider-colorSecondary': {
          color: theme.vars.palette.secondary[300],
          '& .MuiSlider-thumb': {
            '&:hover': {
              boxShadow: `0 0 0 8px ${theme.vars.palette.secondary.A150}`
            },
            '&.Mui-focusVisible': {
              boxShadow: `0 0 0 7px ${theme.vars.palette.secondary.A400}`
            },
            '&.Mui-active': {
              boxShadow: `0 0 0 6px ${theme.vars.palette.secondary.A300}`
            }
          }
        },
        '&.Mui-disabled': {
          color: theme.vars.palette.monoA.A200,
          '& .MuiSlider-rail': {
            backgroundColor: theme.vars.palette.monoA.A200
          },
          '& .MuiSlider-track': {
            display: 'none'
          },
          '& .MuiSlider-thumb': {
            width: '10px',
            height: '10px',
            backdropFilter: 'blur(100px)',
            boxShadow: `0 0 0 2px ${theme.vars.palette.monoB[500]}`
          }
        }
      },
      thumb: {
        height: '12px',
        transitionDuration: `${theme.transitions.duration.shortest}ms`,
        transitionProperty: 'box-shadow, left, bottom, width, height, opacity',
        transitionTimingFunction: 'linear',
        width: '12px',
        '&::before': {
          boxShadow: 'none'
        },
        '&:hover': {
          width: '12px',
          height: '12px'
        },
        '&.Mui-focusVisible': {
          width: '14px',
          height: '14px',

          '& .MuiSlider-valueLabel': {
            top: '-8px'
          }
        },
        '&.Mui-active': {
          width: '16px',
          height: '16px',

          '& .MuiSlider-valueLabel': {
            top: '-7px'
          }
        }
      },
      rail: {
        backgroundColor: theme.vars.palette.monoA.A400,
        opacity: 1
      },
      track: {
        border: 0,
        transitionTimingFunction: 'linear'
      },
      mark: {
        backgroundColor: theme.vars.palette.monoA.A400,
        opacity: 1
      },
      markActive: {
        backgroundColor: theme.vars.palette.monoA.A400
      },
      valueLabel: {
        ...typography.caption,
        backgroundColor: theme.vars.palette.monoA.A600,
        borderRadius: '4px',
        color: theme.vars.palette.monoB[500],
        fontWeight: 400,
        minWidth: '22px',
        padding: '4px',
        top: '-9px',
        transitionDuration: `${theme.transitions.duration.shortest}ms`,
        transitionProperty: 'transform, top',
        transitionTimingFunction: 'linear',

        '&:before': {
          background: 'none',
          borderColor: `${theme.vars.palette.monoA.A600} transparent transparent transparent`,
          borderStyle: 'solid',
          borderWidth: '5px 5px 0 5px',
          height: 0,
          transform: 'translate(-50%, 100%)',
          width: 0
        }
      }
    }
  };
};
