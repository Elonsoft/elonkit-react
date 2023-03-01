import { IconStarEmptyRating, IconStarRating } from '../../../icons';
import { Component } from '../component';

export const createRating: Component<'MuiRating'> = (theme) => {
  return {
    defaultProps: {
      size: '24',
      precision: 0.5,
      value: 3,
      icon: <IconStarRating fontSize="inherit" />,
      emptyIcon: <IconStarEmptyRating fontSize="inherit" />
    },
    styleOverrides: {
      root: {
        '& .MuiRating-iconEmpty': {
          color: theme.palette.monoA.A300
        },
        '& .MuiRating-iconFilled': {
          color: theme.palette.yellow[300]
        },
        '& .MuiRating-iconHover': {
          color: theme.palette.yellow[300]
        },
        '&.MuiRating-size14': {
          fontSize: 14
        },
        '&.MuiRating-size16': {
          fontSize: 16
        },
        '&.MuiRating-size20': {
          fontSize: 20
        },
        '&.MuiRating-size24': {
          fontSize: 24
        },
        '&.MuiRating-size28': {
          fontSize: 28
        },
        '&.MuiRating-size32': {
          fontSize: 32
        },
        '&.MuiRating-size36': {
          fontSize: 36
        },
        '&.MuiRating-size40': {
          fontSize: 40
        }
      }
    }
  };
};
