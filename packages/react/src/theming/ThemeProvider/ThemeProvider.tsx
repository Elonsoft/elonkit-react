import { ThemeProviderProps } from './ThemeProvider.types';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';

import { ROBOTO_REGULAR_CUSTOM } from '../typography/base64Fonts';

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            fontFamily: theme.typography.fontFamily,

            '@font-face': {
              fontFamily: 'Roboto-Custom',
              fontWeight: '400',
              fontStyle: 'normal',
              src: `url(${ROBOTO_REGULAR_CUSTOM})`
            }
          }
        }}
      />
      {children}
    </MuiThemeProvider>
  );
};
