import { Component } from '../component';

export const createMenu: Component<'MuiMenu'> = (theme) => {
  return {
    styleOverrides: {
      root: {
        '& .MuiDivider-root': {
          borderColor: theme.vars.palette.monoA.A100
        }
      },
      paper: {
        '&.MuiMenu-paper': {
          backgroundImage: 'none',
          backgroundColor: theme.vars.palette.surface[400],
          boxShadow: theme.vars.palette.shadow.down[600]
        },
        '& .MuiListItemIcon-root': {
          color: theme.vars.palette.monoA.A500
        }
      }
    }
  };
};
