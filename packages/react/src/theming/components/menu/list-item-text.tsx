import { Component } from '../component';

export const createListItemText: Component<'MuiListItemText'> = (theme) => {
  return {
    defaultProps: {
      primaryTypographyProps: {
        variant: 'body100'
      }
    },
    styleOverrides: {
      root: {
        color: theme.vars.palette.monoA.A900
      },
      inset: {
        '&.MuiListItemText-inset': {
          paddingLeft: '40px'
        }
      }
    }
  };
};
