import { memo, useState } from 'react';

import { PaginationPagesProps } from './PaginationPages.types';

import clsx from 'clsx';
import { getPaginationPagesUtilityClass } from './PaginationPages.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import { outlinedInputClasses } from '@mui/material';
import ButtonBase, { buttonBaseClasses, touchRippleClasses } from '@mui/material/ButtonBase';
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';
import Pagination, { paginationClasses } from '@mui/material/Pagination';
import PaginationItem, { paginationItemClasses } from '@mui/material/PaginationItem';
import TextField from '@mui/material/TextField';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

import { useDocumentEventListener } from '../../../hooks';
import {
  IconArrowLeft2W300,
  IconArrowRight2W300,
  IconChevronLeftW400,
  IconChevronRightW400,
  IconDotsHorizontalW100
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
  [`& .${paginationClasses.ul}`]: {
    flexWrap: 'nowrap'
  }
}));

const PaginationPagesButton = styled(IconButton, {
  name: 'ESPaginationPages',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})(({ theme }) => ({
  [`&.${iconButtonClasses.root}`]: {
    '&, &:not(:disabled):hover, &:not(:disabled):active': {
      color: theme.vars.palette.monoA.A500
    }
  },
  [`&.${iconButtonClasses.disabled}`]: {
    color: theme.vars.palette.monoA.A300
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
  color: theme.vars.palette.monoA.A500
}));

const PaginationPagesPaginationItem = styled(PaginationItem, {
  name: 'ESPaginationPages',
  slot: 'PaginationItem',
  overridesResolver: (props, styles) => styles.paginationItem
})(({ theme }) => ({
  [`&.${buttonBaseClasses.root}`]: {
    ...theme.typography.caption,

    margin: 0,
    padding: '0 4px',

    [`&.${paginationItemClasses.root}`]: {
      [`& .${touchRippleClasses.root}`]: {
        transitionDuration: `${theme.transitions.duration.short}ms`
      }
    },

    [`& .${touchRippleClasses.rippleVisible}`]: {
      animationName: `${enterKeyframe} !important`,
      opacity: '1 !important'
    },

    ...theme.mixins.button({
      background: 'transparent',
      color: theme.vars.palette.monoA.A600,
      hover: theme.vars.palette.monoA.A50,
      focus: theme.vars.palette.monoA.A200,
      active: theme.vars.palette.monoA.A150
    }),

    [`&.${paginationItemClasses.selected}`]: {
      fontWeight: 700,

      ...theme.mixins.button({
        background: theme.vars.palette.secondary.A100,
        color: theme.vars.palette.monoA.A800,
        hover: theme.vars.palette.secondary.A100,
        focus: theme.vars.palette.secondary.A200,
        active: theme.vars.palette.secondary.A150
      })
    }
  }
})) as typeof ButtonBase;

const PaginationPagesTextField = styled(TextField, {
  name: 'ESPaginationPages',
  slot: 'TextField',
  overridesResolver: (props, styles) => styles.textField
})(({ theme }) => ({
  [`& .${outlinedInputClasses.root}`]: {
    marginLeft: '16px',
    width: '64px',
    [`& .${outlinedInputClasses.input}`]: {
      ...theme.typography.caption,

      color: theme.vars.palette.monoA.A600,
      padding: '7px 8px',
      '&::placeholder': {
        color: theme.vars.palette.monoA.A600
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
  [`& .${tooltipClasses.tooltip}`]: {
    ...theme.typography.caption,

    alignItems: 'center',
    display: 'grid',
    gap: 4,
    gridAutoFlow: 'column'
  }
}));

const REGEX = /^[0-9]*$/;

export const PaginationPages = memo(function PaginationPages(inProps: PaginationPagesProps) {
  const {
    className,
    sx,
    boundaryCount,
    siblingCount,
    labelPrevPage,
    labelNextPage,
    labelPage,
    iconPrevPage = <IconChevronLeftW400 />,
    iconNextPage = <IconChevronRightW400 />,
    iconEllipsis = <IconDotsHorizontalW100 />,
    iconTooltipPrevPage = <IconArrowLeft2W300 />,
    iconTooltipNextPage = <IconArrowRight2W300 />,
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
        boundaryCount={boundaryCount}
        className={clsx(classes.pagination)}
        count={Math.ceil(count / itemsPerPage)}
        page={page}
        renderItem={(item) => {
          switch (item.type) {
            case 'previous':
            case 'next':
              return (
                <PaginationPagesButton
                  aria-label={`${item.type === 'next' ? labelNextPage : labelPrevPage}`}
                  className={classes.button}
                  disabled={item.disabled}
                  size="32"
                  onClick={item.onClick}
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
                  arrow
                  className={classes.tooltip}
                  placement="top"
                  title={
                    <>
                      {iconTooltipPrevPage} Ctrl {iconTooltipNextPage}
                    </>
                  }
                >
                  <PaginationPagesPaginationItem className={clsx(classes.paginationItem)} component="div" {...item} />
                </PaginationPagesTooltip>
              );
          }
        }}
        siblingCount={siblingCount}
        onChange={onPaginationPageChange}
      />
      <PaginationPagesTextField
        className={clsx(classes.textField)}
        placeholder={`${page} ${labelPage}`}
        size="32"
        type="text"
        value={state}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </PaginationPagesRoot>
  );
});
