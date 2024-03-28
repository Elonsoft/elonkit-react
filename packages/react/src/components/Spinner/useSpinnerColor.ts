import { SpinnerColor } from './Spinner.types';

import { useTheme } from '@mui/material/styles';

export const useSpinnerColor = (color: SpinnerColor) => {
  const theme = useTheme();

  switch (color) {
    case 'inherit':
      return 'currentColor';
    case 'monoA':
      return theme.vars.palette[color][500];
    case 'primary':
    case 'secondary':
      return theme.vars.palette[color][300];
  }
};
