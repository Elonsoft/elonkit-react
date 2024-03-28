import { useMemo } from 'react';

import { IThemeProps } from './Theme.types';

import DateFnsAdapter from '@date-io/date-fns';
import { enUS as dateEN, ru as dateRU } from 'date-fns/locale';

import { enUS, ruRU } from '@mui/material/locale';

import { DateAdapterProvider, en, ru } from '../../components';
import { DialogStackProvider } from '../../components/DialogStack';
import { createTheme, palettes, ThemeProvider } from '../../theming';

export const Theme = ({ children, isDarkMode, locale }: IThemeProps) => {
  const theme = useMemo(() => {
    return createTheme(
      {
        paletteDark: {
          ...palettes.common,
          ...palettes.dark
        },
        paletteLight: {
          ...palettes.common,
          ...palettes.light
        }
      },
      locale === 'ru' ? { ...ruRU, ...ru } : { ...enUS, ...en }
    );
  }, [locale]);

  return (
    <ThemeProvider isDarkMode={isDarkMode} theme={theme}>
      <DialogStackProvider>
        <DateAdapterProvider adapter={DateFnsAdapter} locale={locale === 'ru' ? dateRU : dateEN}>
          {children}
        </DateAdapterProvider>
      </DialogStackProvider>
    </ThemeProvider>
  );
};
