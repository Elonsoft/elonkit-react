import { PaletteColor, Theme } from '@mui/material/styles';

const getScrollbarWidth = () => {
  let scrollbarWidth = 0;

  if (typeof document === 'undefined') {
    scrollbarWidth = 0;
  } else {
    const div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.position = 'absolute';
    div.style.top = '-9999px';
    div.style.overflow = 'scroll';

    document.body.appendChild(div);
    scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }
  return scrollbarWidth || 0;
};

export const createScrollbars = (theme: Theme) => {
  const scrollbarWidth = getScrollbarWidth();

  const getScrollbar = (width: number, borderWidth: number, color: PaletteColor) => {
    const iconMenuUp = `<svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 0L6 4H0L3 0Z" fill="${color.A700}"/></svg>`;
    const iconMenuDown = `<svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L3 4L6 0H0Z" fill="${color.A700}"/></svg>`;
    const iconMenuLeft = `<svg width="4" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0L0 3L4 6V3V2V0Z" fill="${color.A700}"/></svg>`;
    const iconMenuRight = `<svg width="4" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3L0 6V0L4 3Z" fill="${color.A700}"/></svg>`;

    return {
      overflow: 'auto',
      ...(scrollbarWidth > 0 && {
        '&::-webkit-scrollbar': {
          width: `${width}px`,
          height: `${width}px`,
          backgroundColor: color.A50
        },
        '&::-webkit-scrollbar-corner': {
          backgroundColor: color.A100
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: `${2 + borderWidth}px`,
          backgroundColor: 'transparent',
          border: `${borderWidth}px solid transparent`,
          backgroundClip: 'padding-box',
          boxShadow: `inset 0 0 0 10px ${color.A300}`,

          '&:hover': {
            boxShadow: `inset 0 0 0 10px ${color.A400}`
          },
          '&:active': {
            boxShadow: `inset 0 0 0 10px ${color.A500}`
          }
        },
        '&::-webkit-scrollbar-button': {
          width: `${width}px`,
          height: `${width}px`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',

          '&:hover': {
            backgroundColor: color.A50
          },
          '&:active': {
            backgroundColor: color.A150
          },

          '&:vertical:increment': {
            backgroundImage: `url("data:image/svg+xml;base64,${btoa(iconMenuDown)}")`
          },
          '&:vertical:decrement': {
            backgroundImage: `url("data:image/svg+xml;base64,${btoa(iconMenuUp)}")`
          },
          '&:horizontal:increment': {
            backgroundImage: `url("data:image/svg+xml;base64,${btoa(iconMenuRight)}")`
          },
          '&:horizontal:decrement': {
            backgroundImage: `url("data:image/svg+xml;base64,${btoa(iconMenuLeft)}")`
          }
        }
      })
    };
  };

  const getOverlayScrollbar = (color: PaletteColor) => {
    return {
      '@supports not selector(::-webkit-scrollbar)': {
        scrollbarWidth: 'thin'
      },

      overflow: 'auto',
      color: 'transparent',

      ...(scrollbarWidth > 0 && {
        '&:hover::-webkit-scrollbar-thumb': {
          boxShadow: `inset 0 0 0 10px ${color.A200}`
        },
        '&::-webkit-scrollbar': {
          width: '14px',
          height: '14px'
        },
        '&::-webkit-scrollbar-corner': {
          backgroundColor: 'transparent'
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '100px',
          backgroundColor: 'transparent',
          border: '4px solid transparent',
          backgroundClip: 'padding-box',

          '&:hover': {
            boxShadow: `inset 0 0 0 10px ${color.A400}`
          },
          '&:active': {
            boxShadow: `inset 0 0 0 10px ${color.A500}`
          }
        }
      })
    };
  };

  const normal = getScrollbar(16, 2, theme.palette.monoA);
  const thin = getScrollbar(10, 1, theme.palette.monoA);
  const overlay = getOverlayScrollbar(theme.palette.monoA);

  return {
    normal,
    normalMonoA: normal,
    normalMonoB: getScrollbar(16, 2, theme.palette.monoB),
    normalWhite: getScrollbar(16, 2, theme.palette.white),
    normalBlack: getScrollbar(16, 2, theme.palette.black),
    thin,
    thinMonoA: thin,
    thinMonoB: getScrollbar(10, 1, theme.palette.monoB),
    thinWhite: getScrollbar(10, 1, theme.palette.white),
    thinBlack: getScrollbar(10, 1, theme.palette.black),
    overlay,
    overlayMonoA: overlay,
    overlayMonoB: getOverlayScrollbar(theme.palette.monoB),
    overlayWhite: getOverlayScrollbar(theme.palette.white),
    overlayBlack: getOverlayScrollbar(theme.palette.black)
  };
};
