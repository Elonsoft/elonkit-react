import { Component } from '../component';

export const createFormHelperText: Component<'MuiFormHelperText'> = (theme, typography) => {
  return {
    styleOverrides: {
      root: {
        ...typography.caption,
        color: theme.vars.palette.monoA.A700,
        marginTop: 8,
        marginLeft: 12,
        marginRight: 12,
        '&.Mui-error': {
          color: theme.vars.palette.error[300]
        }
      }
    }
  };
};
