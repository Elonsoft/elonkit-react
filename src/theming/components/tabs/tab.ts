import { Component } from '../component';

export const createTab: Component<'MuiTab'> = (theme) => {
  return {
    styleOverrides: {
      root: {
        '&.MuiTab-textColorPrimary': {
          '&:active': {
            backgroundColor: 'transparent',
            color: theme.palette.monoA.A900
          },
          '&:hover': {
            color: theme.palette.monoA.A700,
            backgroundColor: theme.palette.monoA.A50
          },

          '&:focus': {
            backgroundColor: theme.palette.monoA.A200,
            color: theme.palette.monoA.A900
          },
          '&.Mui-selected': {
            backgroundColor: theme.palette.monoA.A150,
            color: theme.palette.monoA.A900,

            '&.Mui-disabled': {
              color: theme.palette.monoA.A400,
              backgroundColor: 'transparent'
            }
          }
        },

        '&.Mui-disabled': {
          color: theme.palette.monoA.A400,
          backgroundColor: 'transparent'
        }
      }
    }
  };
};
