import { keyframes } from '@mui/system';

import { IconCheckbox, IconCheckboxIndeterminate } from '../../../icons';
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

export const createCheckbox: Component<'MuiCheckbox'> = (theme) => {
  return {
    defaultProps: {
      size: 'small',
      icon: <IconCheckbox />,
      checkedIcon: <IconCheckbox />,
      indeterminateIcon: <IconCheckboxIndeterminate />
    },
    styleOverrides: {
      root: {
        '& .ESSvgIcon-root': {
          fill: 'none',
          '&.ESSvgIcon-fontSizeSmall': {
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
        '&.Mui-checked': {
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
        '&.MuiCheckbox-root.Mui-disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'auto'
        },
        '&.MuiCheckbox-colorPrimary': {
          '&.MuiCheckbox-indeterminate, &.Mui-checked': {
            '&.Mui-disabled': {
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
        '&.MuiCheckbox-colorSecondary': {
          '&.MuiCheckbox-indeterminate, &.Mui-checked': {
            '&.Mui-disabled': {
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
        '&.MuiCheckbox-colorError': {
          '&.MuiCheckbox-indeterminate, &.Mui-checked': {
            '&.Mui-disabled': {
              '&, &:hover': {
                color: theme.palette.error.A500
              }
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
        '&.Mui-disabled': {
          '&, &:hover': {
            color: theme.palette.monoA.A400
          }
        }
      }
    }
  };
};
