import { memo, useState } from 'react';

import { PaginationPagesProps } from './PaginationPages.types';

import clsx from 'clsx';
import { getPaginationPagesUtilityClass } from './PaginationPages.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material';
import TextField from '@mui/material/TextField';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

import { useDocumentEventListener, usePagination } from '../../../hooks';
import {
  IconArrowLeft2W300,
  IconArrowRight2W300,
  IconChevronLeftW400,
  IconChevronRightW400,
  IconDotsHorizontalW100,
} from '../../../icons';
import { Button, buttonClasses } from '../../Button';
import { ButtonBase, buttonBaseClasses, buttonBaseClasses as ESbuttonBaseClasses } from '../../ButtonBase';
import { usePaginationContext } from '../Pagination.context';

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
    tooltip: ['tooltip'],
  };

  return composeClasses(slots, getPaginationPagesUtilityClass, classes);
};

const PaginationPagesRoot = styled('div', {
  name: 'ESPaginationPages',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const PaginationPagesPagination = styled('ul', {
  name: 'ESPaginationPages',
  slot: 'Pagination',
  overridesResolver: (props, styles) => styles.pagination,
})(() => ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  listStyle: 'none',
}));

const PaginationPagesButton = styled(Button, {
  name: 'ESPaginationPages',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button,
})(({ theme }) => ({
  borderRadius: '50%',

  [`&.${buttonClasses.root}`]: {
    '&, &:not(:disabled):hover, &:not(:disabled):active': {
      '--icon': theme.vars.palette.monoA.A500,
    },

    [`&.${ESbuttonBaseClasses.disabled}`]: {
      '--icon': theme.vars.palette.monoA.A300,
    },
  },
}));

const PaginationPagesEllipsis = styled('div', {
  name: 'ESPaginationPages',
  slot: 'Ellipsis',
  overridesResolver: (props, styles) => styles.ellipsis,
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  color: theme.vars.palette.monoA.A500,
}));

const PaginationPagesPaginationItem = styled(ButtonBase, {
  name: 'ESPaginationPages',
  slot: 'PaginationItem',
  overridesResolver: (props, styles) => styles.paginationItem,
})<{ ownerState: { selected: boolean } }>(({ ownerState, theme }) => ({
  [`&.${buttonBaseClasses.root}`]: {
    ...theme.typography.caption,

    margin: 0,
    padding: '0 4px',
    width: '32px',
    height: '32px',
    borderRadius: '50%',

    '--background': 'transparent',
    '--text': theme.vars.palette.monoA.A600,
    '--hovered': theme.vars.palette.monoA.A50,
    '--focused': theme.vars.palette.monoA.A200,
    '--pressed': theme.vars.palette.monoA.A150,

    ...(ownerState.selected && {
      fontWeight: 700,

      '--background': theme.vars.palette.secondary.A100,
      '--text': theme.vars.palette.monoA.A800,
      '--hovered': theme.vars.palette.secondary.A100,
      '--focused': theme.vars.palette.monoA.A200,
      '--pressed': theme.vars.palette.monoA.A150,
    }),
  },
}));

const PaginationPagesTextField = styled(TextField, {
  name: 'ESPaginationPages',
  slot: 'TextField',
  overridesResolver: (props, styles) => styles.textField,
})(({ theme }) => ({
  [`& .${outlinedInputClasses.root}`]: {
    marginLeft: '16px',
    width: '64px',
    [`& .${outlinedInputClasses.input}`]: {
      ...theme.typography.caption,

      color: theme.vars.palette.monoA.A600,
      padding: '7px 8px',
      '&::placeholder': {
        color: theme.vars.palette.monoA.A600,
      },
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        appearance: 'none',
        margin: 0,
      },
      '&[type=number]': {
        appearance: 'textfield',
      },
    },
  },
}));

const PaginationPagesTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESPaginationPages',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => styles.tooltip,
  }
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    ...theme.typography.caption,

    alignItems: 'center',
    display: 'grid',
    gap: 4,
    gridAutoFlow: 'column',
  },
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
    name: 'ESPaginationPages',
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

  const { items } = usePagination({
    boundaryCount,
    page,
    count: Math.ceil(count / itemsPerPage),
    ...props,
    componentName: 'Pagination',
    siblingCount,
    onChange: onPaginationPageChange,
  });

  return (
    <PaginationPagesRoot className={clsx(classes.root, className)} sx={sx}>
      <PaginationPagesPagination className={classes.pagination}>
        {items.map((item) => {
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
                  <PaginationPagesPaginationItem
                    className={clsx(classes.paginationItem)}
                    data-selected={item.selected}
                    disabled={item.disabled}
                    ownerState={{ selected: item.selected }}
                    onClick={item.onClick}
                  >
                    {item.page}
                  </PaginationPagesPaginationItem>
                </PaginationPagesTooltip>
              );
          }
        })}
      </PaginationPagesPagination>
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
