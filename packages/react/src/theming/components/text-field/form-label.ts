import { Component } from '../component';

export const createFormLabel: Component<'MuiFormLabel'> = (theme, typography) => {
  return {
    styleOverrides: {
      root: {
        ...typography.subtitle1,
        lineHeight: '23px',
        '&, &.Mui-focused, &.Mui-error': {
          color: theme.vars.palette.monoA.A700
        },
        '&.Mui-disabled': {
          '&, & .MuiFormLabel-asterisk': {
            color: theme.vars.palette.monoA.A500
          }
        }
      },
      asterisk: {
        position: 'relative',
        top: 3,
        '&, &.Mui-error': {
          color: theme.vars.palette.error[300]
        }
      }
    }
  };
};
