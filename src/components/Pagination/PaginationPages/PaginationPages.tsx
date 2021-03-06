import { useState } from 'react';

import { PaginationPagesProps } from './PaginationPages.types';

import clsx from 'clsx';
import { getPaginationPagesUtilityClass } from './PaginationPages.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import TextField from '@mui/material/TextField';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

import { useDocumentEventListener } from '../../../hooks';
import {
  IconArrowLeftBold,
  IconArrowRightBold,
  IconChevronLeft,
  IconChevronRight,
  IconDotsHorizontalSmall
} from '../../../icons';
import { usePaginationContext } from '../Pagination.context';

const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

type PaginationPagesOwnerState = {
  classes?: PaginationPagesProps['classes'];
};

const useUtilityClasses = (ownerState: PaginationPagesOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    pagination: ['pagination'],
    paginationItem: ['paginationItem'],
    button: ['button'],
    ellipsis: ['ellipsis'],
    textField: ['textField'],
    tooltip: ['tooltip']
  };

  return composeClasses(slots, getPaginationPagesUtilityClass, classes);
};

const PaginationPagesRoot = styled('div', {
  name: 'ESPaginationPages',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  alignItems: 'center'
}));

const PaginationPagesPagination = styled(Pagination, {
  name: 'ESPaginationPages',
  slot: 'Pagination',
  overridesResolver: (props, styles) => styles.pagination
})(() => ({
  '& .MuiPagination-ul': {
    flexWrap: 'nowrap'
  }
}));

const PaginationPagesButton = styled(IconButton, {
  name: 'ESPaginationPages',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})(({ theme }) => ({
  '&, &:hover, &:active': {
    color: theme.palette.monoA.A500
  },
  '&.Mui-disabled': {
    color: theme.palette.monoA.A300
  }
}));

const PaginationPagesEllipsis = styled('div', {
  name: 'ESPaginationPages',
  slot: 'Ellipsis',
  overridesResolver: (props, styles) => styles.ellipsis
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  color: theme.palette.monoA.A500
}));

const PaginationPagesPaginationItem = styled(PaginationItem, {
  name: 'ESPaginationPages',
  slot: 'PaginationItem',
  overridesResolver: (props, styles) => styles.paginationItem
})(({ theme }) => ({
  '&.MuiButtonBase-root': {
    ...theme.typography.caption,

    margin: 0,
    padding: '0 4px',

    '& .MuiTouchRipple-root': {
      color: theme.palette.monoA.A150,
      transitionDuration: `${theme.transitions.duration.short}ms`
    },
    '& .MuiTouchRipple-rippleVisible': {
      animationName: `${enterKeyframe} !important`,
      opacity: '1 !important'
    },
    '&, &:hover, &:active': {
      backgroundColor: 'transparent',
      color: theme.palette.monoA.A600
    },
    '&:hover': {
      '& .MuiTouchRipple-root': {
        backgroundColor: theme.palette.monoA.A50
      }
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'transparent',

      '& .MuiTouchRipple-root': {
        backgroundColor: theme.palette.monoA.A200
      }
    },
    '&.Mui-selected': {
      fontWeight: 700,

      '&, &:hover, &:active': {
        color: theme.palette.secondary[300]
      },
      '& .MuiTouchRipple-root': {
        backgroundColor: theme.palette.secondary.A100,
        color: theme.palette.secondary.A150
      },
      '&:hover': {
        '& .MuiTouchRipple-root': {
          backgroundColor: theme.palette.secondary.A100
        }
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'transparent',

        '& .MuiTouchRipple-root': {
          backgroundColor: theme.palette.secondary.A200
        }
      }
    }
  }
}));

const PaginationPagesTextField = styled(TextField, {
  name: 'ESPaginationPages',
  slot: 'TextField',
  overridesResolver: (props, styles) => styles.textField
})(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    marginLeft: '16px',
    width: '64px',
    '& .MuiOutlinedInput-input': {
      ...theme.typography.caption,

      color: theme.palette.monoA.A600,
      padding: '7px 8px',
      '&::placeholder': {
        color: theme.palette.monoA.A600
      },
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        appearance: 'none',
        margin: 0
      },
      '&[type=number]': {
        appearance: 'textfield'
      }
    }
  }
}));

const PaginationPagesTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESPaginationPages',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => styles.tooltip
  }
)(({ theme }) => ({
  '& .MuiTooltip-tooltip': {
    ...theme.typography.caption,

    alignItems: 'center',
    display: 'grid',
    gap: 4,
    gridAutoFlow: 'column'
  }
}));

const REGEX = /^[0-9]*$/;

export const PaginationPages = (inProps: PaginationPagesProps) => {
  const {
    className,
    sx,
    boundaryCount,
    siblingCount,
    labelPrevPage,
    labelNextPage,
    labelPage,
    iconPrevPage = <IconChevronLeft />,
    iconNextPage = <IconChevronRight />,
    iconEllipsis = <IconDotsHorizontalSmall />,
    iconTooltipPrevPage = <IconArrowLeftBold />,
    iconTooltipNextPage = <IconArrowRightBold />,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESPaginationPages'
  });

  const { count, itemsPerPage, page, onPageChange } = usePaginationContext();

  const [state, setState] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (REGEX.test(event.target.value)) {
      setState(event.target.value);
    }
  };

  const onKeyPress = (event: React.KeyboardEvent) => {
    const inputValue = (event.target as HTMLInputElement).value;

    if (event.key === 'Enter' && inputValue) {
      onPageChange(Math.min(Math.ceil(count / itemsPerPage), Math.max(1, +state)));
      setState('');
    }
  };

  const onPaginationPageChange = (event: React.ChangeEvent<unknown>, page: number | null) => {
    if (page) {
      onPageChange(page);
    }
  };

  useDocumentEventListener('keydown', (event) => {
    if (event.ctrlKey) {
      if (event.key === 'ArrowLeft') {
        onPageChange(Math.max(1, page - 1));
      } else if (event.key === 'ArrowRight') {
        onPageChange(Math.min(Math.ceil(count / itemsPerPage), page + 1));
      }
    }
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <PaginationPagesRoot className={clsx(classes.root, className)} sx={sx}>
      <PaginationPagesPagination
        className={clsx(classes.pagination, className)}
        count={Math.ceil(count / itemsPerPage)}
        page={page}
        onChange={onPaginationPageChange}
        boundaryCount={boundaryCount}
        siblingCount={siblingCount}
        renderItem={(item) => {
          switch (item.type) {
            case 'previous':
            case 'next':
              return (
                <PaginationPagesButton
                  className={classes.button}
                  onClick={item.onClick}
                  disabled={item.disabled}
                  size="32"
                  aria-label={`${item.type === 'next' ? labelNextPage : labelPrevPage}`}
                >
                  {item.type === 'previous' ? iconPrevPage : iconNextPage}
                </PaginationPagesButton>
              );
            case 'start-ellipsis':
            case 'end-ellipsis':
              return <PaginationPagesEllipsis className={classes.ellipsis}>{iconEllipsis}</PaginationPagesEllipsis>;
            default:
              return (
                <PaginationPagesTooltip
                  className={classes.tooltip}
                  title={
                    <>
                      {iconTooltipPrevPage} Ctrl {iconTooltipNextPage}
                    </>
                  }
                  placement="top"
                  arrow
                >
                  <PaginationPagesPaginationItem className={clsx(classes.paginationItem, className)} {...item} />
                </PaginationPagesTooltip>
              );
          }
        }}
      />
      <PaginationPagesTextField
        className={clsx(classes.textField, className)}
        type="text"
        placeholder={`${page} ${labelPage}`}
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={state}
        size="32"
      />
    </PaginationPagesRoot>
  );
};
