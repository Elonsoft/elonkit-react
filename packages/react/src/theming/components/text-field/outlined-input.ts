import { Component } from '../component';

export const createOutlinedInput: Component<'MuiOutlinedInput'> = (theme, typography) => {
  return {
    styleOverrides: {
      root: {
        color: theme.palette.monoA.A900,
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderWidth: '2px',
          borderColor: theme.palette.monoA.A200,
          top: '-4.5px'
        },
        '&.Mui-disabled': {
          color: theme.palette.monoA.A500,
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px',
            borderColor: theme.palette.monoA.A200,
            top: '-5px'
          },
          '& .MuiInputAdornment-root .MuiIcon-root': {
            color: theme.palette.monoA.A400
          }
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary[300],
          top: '-4.5px'
        },
        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.error[300],
          borderWidth: '2px',
          top: '-4.5px'
        }
      },
      input: {
        ...typography.subtitle1,
        '&.Mui-disabled': {
          WebkitTextFillColor: 'currentColor'
        },
        '&::placeholder': {
          color: theme.palette.monoA.A400,
          opacity: 1
        }
      },
      notchedOutline: {
        borderColor: theme.palette.monoA.A200,
        padding: '0 6px'
      }
    }
  };
};
