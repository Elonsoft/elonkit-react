import { Component } from '../component';

export const createInputAdornment: Component<'MuiInputAdornment'> = (theme) => {
  return {
    styleOverrides: {
      root: {
        '& .MuiIcon-root': {
          color: theme.vars.palette.monoA.A600
        }
      }
    }
  };
};
