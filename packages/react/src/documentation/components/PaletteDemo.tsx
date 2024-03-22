import { Fragment } from 'react';

import { styled, useTheme } from '@mui/material/styles';
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
  'greyscale',
  'surface',
  'common',
  'overlay',
  'black',
  'white',
  'red',
  'brown',
  'orange',
  'yellow',
  'green',
  'marine',
  'sky',
  'blue',
  'violet',
  'purple',
  'pink',
  'teal',
  'grey'
];

const COLOR_IGNORE = ['main', 'light', 'dark', 'contrastText', 'alpha', 'white', 'black'];

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
                  sx={{
                    backgroundColor: (theme.palette as any)[palette][color] as string
                  }}
                />
              </div>
            ))}
        </Fragment>
      ))}
      <PaletteDemoPalette variant="body100">
        <code>shadow</code>
      </PaletteDemoPalette>
      {Object.keys(theme.palette.shadow).map((direction) =>
        Object.keys((theme.palette.shadow as any)[direction]).map((level) => (
          <div key={`${direction}-${level}`}>
            <PaletteDemoColorName
              sx={{
                boxShadow: (theme.palette.shadow as any)[direction][level],
                margin: '24px',
                borderRadius: '2px'
              }}
              variant="caption"
            >
              <code>
                {direction.toUpperCase()} {level}
              </code>
            </PaletteDemoColorName>
          </div>
        ))
      )}
    </PaletteDemoRoot>
  );
};
