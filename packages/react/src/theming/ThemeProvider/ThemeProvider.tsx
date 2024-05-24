import { ThemeProviderProps } from './ThemeProvider.types';

import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import type {} from '@mui/material/themeCssVarsAugmentation';

import { ROBOTO_REGULAR_CUSTOM } from '../typography/base64Fonts';

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <CssVarsProvider theme={theme}>
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
    </CssVarsProvider>
  );
};
