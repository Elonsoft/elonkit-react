import { ThemeProviderProps } from './ThemeProvider.types';

import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import type {} from '@mui/material/themeCssVarsAugmentation';

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  console.log(theme.vars, 'theme.vars');
  console.log(theme, 'theme');
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ body: { fontFamily: theme.typography.fontFamily } }} />
      {children}
    </CssVarsProvider>
  );
};
