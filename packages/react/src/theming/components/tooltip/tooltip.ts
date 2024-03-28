import Fade from '@mui/material/Fade';

import { Component } from '../component';

export const createTooltip: Component<'MuiTooltip'> = (theme, typography) => {
  return {
    styleOverrides: {
      popper: {
        '&[data-popper-placement*="top"] .MuiTooltip-tooltip': {
          marginBottom: '14px !important'
        },
        '&[data-popper-placement*="bottom"] .MuiTooltip-tooltip': {
          marginTop: '14px !important'
        },
        '&[data-popper-placement*="right"] .MuiTooltip-tooltip': {
          marginLeft: '14px !important'
        },
        '&[data-popper-placement*="left"] .MuiTooltip-tooltip': {
          marginRight: '14px !important'
        }
      },
      tooltip: {
        ...typography.caption,
        color: theme.vars.palette.monoB[500],
        backgroundColor: theme.vars.palette.monoA.A600,
        backdropFilter: 'blur(40px)',
        padding: '4px 8px',

        '& .MuiTooltip-arrow': {
          color: theme.vars.palette.monoA.A600,
          backdropFilter: 'blur(40px)'
        }
      }
    },
    defaultProps: {
      arrow: true,
      TransitionComponent: Fade
    }
  };
};
