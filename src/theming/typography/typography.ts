import { Theme } from '@mui/material/styles';

export const createTypography = (theme: Theme) => {
  const pxToRem = theme.typography.pxToRem;
  const tabletXS = theme.breakpoints.up('tabletXS');
  const desktopXS = theme.breakpoints.up('desktopXS');

  const body400 = {
    fontSize: pxToRem(20),
    fontWeight: 400,
    letterSpacing: pxToRem(0.5),
    lineHeight: pxToRem(32),
    textDecorationThickness: pxToRem(2),
    textUnderlineOffset: pxToRem(2)
  };

  const body300 = {
    fontSize: pxToRem(18),
    fontWeight: 400,
    letterSpacing: pxToRem(0.1),
    lineHeight: pxToRem(28),
    textDecorationThickness: pxToRem(2),
    textUnderlineOffset: pxToRem(2)
  };

  const body200 = {
    fontSize: pxToRem(16),
    fontWeight: 400,
    letterSpacing: pxToRem(0.5),
    lineHeight: pxToRem(24),
    textDecorationThickness: pxToRem(1),
    textUnderlineOffset: pxToRem(2)
  };

  const body100 = {
    fontSize: pxToRem(14),
    fontWeight: 400,
    letterSpacing: pxToRem(0.25),
    lineHeight: pxToRem(20),
    textDecorationThickness: pxToRem(1),
    textUnderlineOffset: pxToRem(1)
  };

  const mini100 = {
    fontSize: pxToRem(9),
    fontWeight: 500,
    letterSpacing: pxToRem(0.6),
    lineHeight: pxToRem(14),
    textDecorationThickness: pxToRem(1),
    textUnderlineOffset: pxToRem(1)
  };

  const caption = {
    fontSize: pxToRem(12),
    fontWeight: 400,
    letterSpacing: pxToRem(0.4),
    lineHeight: pxToRem(16),
    textDecorationThickness: pxToRem(1),
    textUnderlineOffset: pxToRem(1)
  };

  return {
    h1: {
      fontSize: pxToRem(30),
      fontWeight: 500,
      letterSpacing: pxToRem(0.2),
      lineHeight: pxToRem(36),
      textDecorationThickness: pxToRem(3),
      textUnderlineOffset: pxToRem(2),

      [tabletXS]: {
        fontSize: pxToRem(34),
        lineHeight: pxToRem(40)
      },

      [desktopXS]: {
        fontSize: pxToRem(40),
        lineHeight: pxToRem(48),
        textUnderlineOffset: pxToRem(3)
      }
    },
    h2: {
      fontSize: pxToRem(26),
      fontWeight: 500,
      letterSpacing: pxToRem(0.1),
      lineHeight: pxToRem(32),
      textDecorationThickness: pxToRem(2),
      textUnderlineOffset: pxToRem(2),

      [tabletXS]: {
        fontSize: pxToRem(30),
        lineHeight: pxToRem(36),
        textDecorationThickness: pxToRem(3)
      },

      [desktopXS]: {
        fontSize: pxToRem(34),
        lineHeight: pxToRem(40),
        textUnderlineOffset: pxToRem(3)
      }
    },
    h3: {
      fontSize: pxToRem(24),
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: pxToRem(28),
      textDecorationThickness: pxToRem(2),
      textUnderlineOffset: pxToRem(2),

      [tabletXS]: {
        fontSize: pxToRem(26),
        lineHeight: pxToRem(32)
      },

      [desktopXS]: {
        fontSize: pxToRem(28),
        lineHeight: pxToRem(36),
        textUnderlineOffset: pxToRem(3)
      }
    },
    h4: {
      fontSize: pxToRem(22),
      fontWeight: 500,
      letterSpacing: pxToRem(0.15),
      lineHeight: pxToRem(28),
      textDecorationThickness: pxToRem(2),
      textUnderlineOffset: pxToRem(2),

      [tabletXS]: {
        fontSize: pxToRem(24),
        lineHeight: pxToRem(28)
      }
    },
    h5: {
      fontSize: pxToRem(20),
      fontWeight: 500,
      letterSpacing: pxToRem(0.2),
      lineHeight: pxToRem(24),
      textDecorationThickness: pxToRem(2),
      textUnderlineOffset: pxToRem(2)
    },
    h6: {
      fontSize: pxToRem(18),
      fontWeight: 500,
      letterSpacing: pxToRem(0.15),
      lineHeight: pxToRem(24),
      textDecorationThickness: pxToRem(2),
      textUnderlineOffset: pxToRem(2)
    },
    subtitle1: {
      fontSize: pxToRem(16),
      fontWeight: 400,
      letterSpacing: pxToRem(0.15),
      lineHeight: pxToRem(20),
      textDecorationThickness: pxToRem(1),
      textUnderlineOffset: pxToRem(1)
    },
    subtitle2: {
      fontSize: pxToRem(14),
      fontWeight: 500,
      letterSpacing: pxToRem(0.1),
      lineHeight: pxToRem(16),
      textDecorationThickness: pxToRem(1),
      textUnderlineOffset: pxToRem(1)
    },
    body400,
    body400Medium: {
      ...body400,
      fontWeight: 500
    },
    body400Bold: {
      ...body400,
      fontWeight: 700
    },
    body300,
    body300Medium: {
      ...body300,
      fontWeight: 500
    },
    body300Bold: {
      ...body300,
      fontWeight: 700
    },
    body200,
    body200Medium: {
      ...body200,
      fontWeight: 500
    },
    body200Bold: {
      ...body200,
      fontWeight: 700
    },
    body100,
    body100Medium: {
      ...body100,
      fontWeight: 500
    },
    body100Bold: {
      ...body100,
      fontWeight: 700,
      lineHeight: pxToRem(12)
    },
    mini200: {
      fontSize: pxToRem(11),
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: pxToRem(16),
      textDecorationThickness: pxToRem(1),
      textUnderlineOffset: pxToRem(1)
    },
    mini100,
    mini100Bold: {
      ...mini100,
      lineHeight: pxToRem(12)
    },
    micro: {
      fontSize: pxToRem(9),
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: pxToRem(12),
      textDecorationThickness: pxToRem(1),
      textUnderlineOffset: pxToRem(1)
    },
    button: {
      fontSize: pxToRem(14),
      fontWeight: 500,
      letterSpacing: pxToRem(0.5),
      textDecorationThickness: pxToRem(1),
      textUnderlineOffset: pxToRem(1)
    },
    caption,
    captionMedium: {
      ...caption,
      fontWeight: 500
    },
    captionBold: {
      ...caption,
      fontWeight: 700
    },
    overline: {
      fontSize: pxToRem(10),
      fontWeight: 500,
      letterSpacing: pxToRem(1.2),
      lineHeight: pxToRem(16),
      textDecorationThickness: pxToRem(1),
      textUnderlineOffset: pxToRem(1)
    },
    body1: undefined,
    body2: undefined
  };
};
