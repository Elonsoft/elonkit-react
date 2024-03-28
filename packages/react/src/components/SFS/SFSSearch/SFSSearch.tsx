import { memo } from 'react';

import { SFSSearchProps } from './SFSSearch.types';

import clsx from 'clsx';
import { getSFSSearchUtilityClass } from './SFSSearch.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { IconCloseW350, IconMagnify2W400 } from '../../../icons';

type SFSSearchOwnerState = {
  classes?: SFSSearchProps['classes'];
};

const useUtilityClasses = (ownerState: SFSSearchOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    input: ['input'],
    clear: ['clear']
  };

  return composeClasses(slots, getSFSSearchUtilityClass, classes);
};

const SFSSearchRoot = styled('div', {
  name: 'ESSFSSearch',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(() => ({
  display: 'flex',
  alignItems: 'center',
  flexGrow: 1
}));

const SFSSearchInput = styled(TextField, {
  name: 'ESSFSSearch',
  slot: 'Input',
  overridesResolver: (_, styles) => styles.input
})(({ theme }) => ({
  '& .MuiInputLabel-root': {
    opacity: 0
  },

  '& .MuiOutlinedInput-root': {
    '&.MuiInputBase-adornedEnd': {
      paddingRight: '3px'
    },

    '&.MuiInputBase-adornedStart': {
      paddingLeft: '2px',

      '&.Mui-focused': {
        '& .MuiInputAdornment-positionStart .ESSvgIcon-root': {
          color: theme.vars.palette.monoA.A600
        }
      }
    },

    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none'
    },

    '& .MuiOutlinedInput-input': {
      paddingLeft: '0',
      ...theme.typography.body100,
      lineHeight: '23px'
    }
  },

  '& .MuiInputAdornment-positionEnd': {
    marginLeft: 0,
    width: '32px',
    cursor: 'pointer',
    flexShrink: 0
  },

  '& .MuiInputAdornment-positionStart': {
    marginRight: 0,
    width: '32px',
    flexShrink: 0,
    justifyContent: 'center'
  },

  '& .MuiInputAdornment-positionStart .ESSvgIcon-root': {
    color: theme.vars.palette.monoA.A500
  },

  '&:hover .MuiInputAdornment-positionStart .ESSvgIcon-root': {
    color: theme.vars.palette.monoA.A600
  }
}));

const SFSSearchClear = styled(Button, {
  name: 'ESSFSSearch',
  slot: 'Clear',
  overridesResolver: (_, styles) => styles.clear
})(({ theme }) => ({
  '&.MuiButton-root': {
    padding: '0 4px',
    margin: '0 6px 0 2px',
    flexShrink: 0,

    '&:hover ': {
      '& .ESSvgIcon-root': {
        color: theme.vars.palette.monoA.A500
      },

      '& .MuiTouchRipple-root': {
        backgroundColor: 'inherit'
      }
    },

    '&:active .ESSvgIcon-root': {
      color: theme.vars.palette.monoA.A600
    }
  },

  '& .ESSvgIcon-root': {
    color: theme.vars.palette.monoA.A400
  },

  '&.Mui-focusVisible': {
    backgroundColor: theme.vars.palette.monoA.A200
  }
}));

export const SFSSearch = memo(function SFSSearch(inProps: SFSSearchProps) {
  const {
    className,
    sx,
    onClear,
    ariaLabel,
    labelClear,
    placeholder,
    iconClear = <IconCloseW350 />,
    iconSearch = <IconMagnify2W400 />,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSFSSearch'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SFSSearchRoot className={clsx(classes.root, className)} sx={sx}>
      <SFSSearchInput
        InputProps={{
          startAdornment: <InputAdornment position="start">{iconSearch}</InputAdornment>,
          endAdornment: onClear && (
            <InputAdornment position="end" onClick={onClear}>
              <SFSSearchClear
                disableFocusRipple
                disableRipple
                aria-label={labelClear}
                className={classes.clear}
                color="monoA"
                size="24"
              >
                {iconClear}
              </SFSSearchClear>
            </InputAdornment>
          )
        }}
        {...props}
        fullWidth
        aria-label={ariaLabel}
        className={classes.input}
        placeholder={placeholder}
        size="32"
      />
    </SFSSearchRoot>
  );
});
