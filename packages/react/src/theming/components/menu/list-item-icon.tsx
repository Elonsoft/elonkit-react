import { Component } from '../component';

export const createListItemIcon: Component<'MuiListItemIcon'> = (theme) => {
  return {
    styleOverrides: {
      root: {
        color: theme.vars.palette.monoA.A500,

        '&.MuiListItemIcon-root.MuiListItemIcon-root': {
          minWidth: 'auto'
        },

        '&:first-of-type': {
          marginRight: '16px'
        },
        '&:last-of-type': {
          marginLeft: '16px'
        }
      }
    }
  };
};
