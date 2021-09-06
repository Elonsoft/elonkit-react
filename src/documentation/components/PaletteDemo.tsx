import { Fragment } from 'react';

import { useTheme, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const PALETTES = [
  'primary',
  'secondary',
  'error',
  'success',
  'info',
  'warning',
  'monoA',
  'monoB',
  'grey',
  'surface',
  'common',
  'black',
  'white'
];

const COLOR_IGNORE = ['contrastText'];

const PaletteDemoRoot = styled('div')(() => ({
  display: 'grid',
  gap: 4,
  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))'
}));

const PaletteDemoPalette = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.monoA.A50,
  borderRadius: 2,
  display: 'block',
  gridColumnEnd: -1,
  gridColumnStart: 1,
  padding: '8px 16px',

  '&:not(:first-child)': {
    marginTop: 32
  }
}));

const PaletteDemoColorName = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.monoA.A50,
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
  display: 'block',
  padding: '8px 16px'
}));

const PaletteDemoColorBackground = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.palette.monoA.A50}`,
  borderBottomLeftRadius: 2,
  borderBottomRightRadius: 2,
  borderTop: 0,
  padding: 16
}));

export const PaletteDemo = () => {
  const theme = useTheme();

  return (
    <PaletteDemoRoot>
      {PALETTES.map((palette) => (
        <Fragment key={palette}>
          <PaletteDemoPalette variant="body100">
            <code>{palette}</code>
          </PaletteDemoPalette>
          {Object.keys((theme.palette as any)[palette])
            .filter((color) => !COLOR_IGNORE.includes(color))
            .map((color) => (
              <div key={color}>
                <PaletteDemoColorName variant="caption">
                  <code>{color}</code>
                </PaletteDemoColorName>
                <PaletteDemoColorBackground
                  style={{
                    backgroundColor: (theme.palette as any)[palette][color] as string
                  }}
                ></PaletteDemoColorBackground>
              </div>
            ))}
        </Fragment>
      ))}
    </PaletteDemoRoot>
  );
};