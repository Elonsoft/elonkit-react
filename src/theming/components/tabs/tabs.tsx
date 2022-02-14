import TabScrollButton from '@mui/material/TabScrollButton';

import { ChevronLeftIcon, ChevronRightIcon } from '../../../ui/icons';
import { Component } from '../component';

export const createTabs: Component<'MuiTabs'> = (theme) => {
  return {
    defaultProps: {
      ScrollButtonComponent: (props) => {
        switch (props.direction) {
          case 'left':
            return (
              <TabScrollButton {...props}>
                <ChevronLeftIcon />
              </TabScrollButton>
            );
          case 'right':
            return (
              <TabScrollButton {...props}>
                <ChevronRightIcon />
              </TabScrollButton>
            );
          default:
            return null;
        }
      }
    },
    styleOverrides: {
      root: {
        position: 'relative',

        '&:after': {
          borderBottom: `1px solid ${theme.palette.monoA.A100}`,
          bottom: 0,
          left: 0,
          content: '""',
          display: 'block',
          position: 'absolute',
          width: '100%'
        },

        '& .MuiTabScrollButton-root': {
          padding: '14px 8px',

          '&:first-of-type, &:last-of-type': {
            '&:before': {
              bottom: '5px',
              left: 0,
              content: '""',
              display: 'block',
              position: 'absolute',
              width: '100%',
              height: '36px'
            }
          },

          '&:first-of-type': {
            '&:before': {
              borderRight: `1px solid ${theme.palette.monoA.A100}`
            }
          },

          '&:last-of-type': {
            '&:before': {
              borderLeft: `1px solid ${theme.palette.monoA.A100}`
            }
          },

          '&:hover': {
            backgroundColor: theme.palette.monoA.A50
          },

          '&:active': {
            backgroundColor: theme.palette.monoA.A150
          },

          '&:focus': {
            backgroundColor: theme.palette.monoA.A200
          },

          '&.Mui-disabled': {
            color: theme.palette.monoA.A400,
            backgroundColor: 'transparent',
            opacity: '1'
          }
        }
      }
    }
  };
};
