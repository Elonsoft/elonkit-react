import { Component } from '../component';

export const createSnackbar: Component<'MuiSnackbar'> = (theme, typography) => {
  return {
    defaultProps: {
      autoHideDuration: 2000
    },
    styleOverrides: {
      root: {
        width: '440px',
        '& .MuiSnackbarContent-root': {
          backgroundColor: theme.palette.monoA.A800,
          padding: '8px 12px 8px 16px',
          height: '56px',
          borderRadius: '6px'
        },
        '& .MuiSnackbarContent-message': {
          display: 'flex',
          alignItems: 'center',

          '& .MuiSvgIcon-root': {
            transform: 'translateY(2px)',
            marginRight: '8px',
            color: theme.palette.success[500]
          }
        },

        '& .MuiSnackbarContent-action': {
          '& .MuiButton-root, .MuiIconButton-root': {
            ...typography.body100,
            color: theme.palette.monoB.A900,
            backgroundColor: theme.palette.monoB.A100,
            borderRadius: '4px',
            height: '32px',
            textTransform: 'none',

            '&:hover': {
              color: theme.palette.monoB.A900,
              backgroundColor: theme.palette.monoB.A100
            },

            '&:first-of-type': {
              width: '92px',
              padding: '6px 12px'
            },

            '&:last-of-type': {
              margin: '0 8px',
              padding: '4px',
              width: '32px'
            }
          }
        }
      }
    }
  };
};
