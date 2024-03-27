import { ThemeOptions } from './ThemeProvider.types';

import {
  alpha as generateAlpha,
  experimental_extendTheme as extendMUITheme,
  Palette,
  PaletteOptions
} from '@mui/material/styles';
import { enUS } from '@mui/material/locale';

import { en } from '../../components/locale';
import { breakpoints as defaultBreakpoints } from '../breakpoints';
import { createComponents as createDefaultComponents } from '../components';
import { buttonMixin, listItemMixin } from '../mixins';
import { palettes as defaultPalettes } from '../palettes';
import { createScrollbars as createDefaultScrollbars } from '../scrollbars';
import { createTypography as createDefaultTypography } from '../typography';

const defaultPalette = {
  mode: 'light' as const,
  ...defaultPalettes.common,
  ...defaultPalettes.light
};

const createPalette = ({
  alpha = defaultPalettes.common.alpha,
  ...palette
}: PaletteOptions = defaultPalette): Palette => {
  for (const p in palette) {
    if ((palette as any)[p] && (palette as any)[p].alpha) {
      const paletteWithAlpha: Record<string, string> = {};

      for (const a in alpha) {
        paletteWithAlpha[a] = generateAlpha((palette as any)[p][(palette as any)[p].alpha], (alpha as any)[a]);
      }

      (palette as any)[p] = { ...paletteWithAlpha, ...(palette as any)[p] };
    }
  }

  // FIXME: Remove after introduction of our own buttons.
  (palette as any).tertiary = { main: '#fff' };

  return palette as Palette;
};

/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @param args Deep merge the arguments with the about to be returned theme.
 * @returns A complete, ready-to-use theme object.
 */
export const createTheme = (
  {
    paletteLight,
    paletteDark,
    components: createComponents,
    scrollbars: createScrollbars,
    typography: createTypography,
    breakpoints = defaultBreakpoints
  }: ThemeOptions,
  ...args: any
) => {
  const mixins = { button: buttonMixin, listItem: listItemMixin };

  const theme = extendMUITheme({
    cssVarPrefix: 'any',
    colorSchemes: {
      light: {
        palette: createPalette(paletteLight)
      },
      dark: {
        palette: createPalette(paletteDark)
      }
    },
    breakpoints: {
      values: {
        ...breakpoints
      }
    },
    mixins
  });

  const scrollbars = { ...createDefaultScrollbars(theme), ...(createScrollbars ? createScrollbars(theme) : {}) };
  const typography = { ...createDefaultTypography(theme), ...(createTypography ? createTypography(theme) : {}) };
  const components = {
    ...createDefaultComponents(theme, typography),
    ...(createComponents ? createComponents(theme, typography) : {})
  };

  return extendMUITheme(
    {
      cssVarPrefix: 'any',
      colorSchemes: {
        light: {
          palette: createPalette(paletteLight)
        },
        dark: {
          palette: createPalette(paletteDark)
        }
      },
      breakpoints: {
        values: {
          ...theme.breakpoints.values
        }
      },
      components,
      scrollbars,
      mixins,
      typography: {
        fontFamily: "'Roboto', sans-serif",
        ...typography
      }
    },
    enUS,
    en,
    ...(args as any)
  );
};
