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

export const createMenuItem: Component<'MuiMenuItem'> = (theme, typography) => {
  return {
    styleOverrides: {
      root: {
        ...typography.subtitle1,

        padding: '4px 16px',
        minHeight: '40px',
        transitionDuration: `${theme.transitions.duration.short}ms`,

        '& .MuiIconButton-root': {
          marginRight: '-8px'
        },

        '&.MuiMenuItem-root': {
          '&.MuiButtonBase-root': {
            '& .MuiTouchRipple-root': {
              transitionDuration: `${theme.transitions.duration.short}ms`
            }
          },
          '& .MuiTouchRipple-rippleVisible': {
            animationName: `${enterKeyframe} !important`,
            opacity: '1 !important'
          },

          ...theme.mixins.listItem({
            background: 'transparent',
            color: theme.vars.palette.monoA.A900,
            hover: theme.vars.palette.monoA.A50,
            focus: theme.vars.palette.monoA.A75,
            active: theme.vars.palette.monoA.A150
          }),

          '&.Mui-selected': {
            ...theme.mixins.listItem({
              background: theme.vars.palette.secondary.A100,
              color: theme.vars.palette.monoA.A900,
              hover: theme.vars.palette.monoA.A50,
              focus: theme.vars.palette.monoA.A75,
              active: theme.vars.palette.monoA.A150
            })
          }
        }
      }
    }
  };
};
