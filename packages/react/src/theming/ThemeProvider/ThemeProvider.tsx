import { useEffect } from 'react';

import { ThemeProviderProps } from './ThemeProvider.types';

import { Experimental_CssVarsProvider as CssVarsProvider, useColorScheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import type {} from '@mui/material/themeCssVarsAugmentation';

// FIXME: fix mode
function ModeToggle({ isDarkMode }: { isDarkMode?: boolean }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    setMode(isDarkMode === true ? 'dark' : 'light');
  }, [isDarkMode]);

  return null;
}

export const ThemeProvider = ({ children, theme, isDarkMode }: ThemeProviderProps) => {
  return (
    <CssVarsProvider theme={theme}>
      <ModeToggle isDarkMode={isDarkMode} />
      <CssBaseline />
      <GlobalStyles styles={{ body: { fontFamily: theme.typography.fontFamily } }} />
      {children}
    </CssVarsProvider>
  );
};
