import { ThemeProviderProps } from './ThemeProvider.types';

import { Experimental_CssVarsProvider as CssVarsProvider, useColorScheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import type {} from '@mui/material/themeCssVarsAugmentation';
//todo: fix mode
function ModeToggle({ isDarkMode }: { isDarkMode?: boolean }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mode, setMode } = useColorScheme();
  setMode(isDarkMode ? 'dark' : 'light');
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
