import { useState } from 'react';

import { PaginationRangeProps } from './PaginationRange.types';

import clsx from 'clsx';
import { getPaginationRangeUtilityClass } from './PaginationRange.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import { IconTriangleArrowDown } from '../../../icons';
import { usePaginationContext } from '../Pagination.context';

type PaginationRangeOwnerState = {
  classes?: PaginationRangeProps['classes'];
};

const useUtilityClasses = (ownerState: PaginationRangeOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    label: ['label'],
    button: ['button'],
    value: ['value']
  };

  return composeClasses(slots, getPaginationRangeUtilityClass, classes);
};

const PaginationRangeRoot = styled('div', {
  name: 'ESPaginationRange',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  alignItems: 'center'
}));

const PaginationRangeLabel = styled(Typography, {
  name: 'ESPaginationRange',
  slot: 'Label',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  display: 'inline-block',
  color: theme.palette.monoA.A600
}));

const PaginationRangeButton = styled(Button, {
  name: 'ESPaginationRange',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  '&.MuiButton-root': {
    '&.MuiButton-text': {
      color: theme.palette.monoA.A900,
      padding: '0 6px 0 4px'
    },
    '& .MuiButton-endIcon': {
      color: theme.palette.monoA.A500,
      marginLeft: '2px'
    }
  }
}));

const PaginationRangeValue = styled(Typography, {
  name: 'ESPaginationRange',
  slot: 'Value',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  marginLeft: '16px',
  color: theme.palette.monoA.A600
}));

const OPTIONS = [10, 25, 100];

export const PaginationRange = (inProps: PaginationRangeProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const {
    className,
    sx,
    options = OPTIONS,
    labelItemsPerPage,
    labelOf,
    iconItemsPerPage = <IconTriangleArrowDown />,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESPaginationRange'
  });

  const onClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(null);

    onItemsPerPageChange(options[index]);
    onPageChange(1);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const { count, itemsPerPage, page, onItemsPerPageChange, onPageChange } = usePaginationContext();

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <PaginationRangeRoot className={clsx(classes.root, className)} sx={sx}>
      <PaginationRangeLabel variant="caption">{labelItemsPerPage}</PaginationRangeLabel>

      <PaginationRangeButton
        className={clsx(classes.button, className)}
        color="monoA"
        size="32"
        aria-expanded={open ? 'true' : undefined}
        endIcon={iconItemsPerPage}
        onClick={onClickListItem}
      >
        <Typography variant="caption">{itemsPerPage}</Typography>
      </PaginationRangeButton>

      <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
        {options.map((option, index) => (
          <MenuItem key={option} selected={index === itemsPerPage} onClick={(event) => onMenuItemClick(event, index)}>
            <Typography variant="caption">{option}</Typography>
          </MenuItem>
        ))}
      </Menu>

      <PaginationRangeValue className={clsx(classes.value, className)} variant="caption">
        {(page - 1) * itemsPerPage + (count ? 1 : 0)}???{Math.min(page * itemsPerPage, count)} {labelOf} {count}
      </PaginationRangeValue>
    </PaginationRangeRoot>
  );
};
