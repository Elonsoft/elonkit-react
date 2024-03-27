import { Component } from '../component';

export const createList: Component<'MuiList'> = (theme) => {
  return {
    styleOverrides: {
      root: {
        '& .MuiDivider-root': {
          margin: '8px 0',
          borderColor: theme.vars.palette.monoA.A100
        }
      }
    }
  };
};
