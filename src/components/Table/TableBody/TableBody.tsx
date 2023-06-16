import { useMemo } from 'react';

import { TableBodyProps } from './TableBody.types';

import clsx from 'clsx';
import { getTableBodyUtilityClass } from './TableBody.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useTableContext } from '../Table.context';
import { tableCellClasses, TableCellContext } from '../TableCell';
import { tableRowClasses } from '../TableRow';

type TableBodyOwnerState = {
  classes?: TableBodyProps['classes'];
  striped?: boolean;
};

const useUtilityClasses = (ownerState: TableBodyOwnerState) => {
  const { classes, striped } = ownerState;

  const slots = {
    root: ['root', striped && 'striped']
  };

  return composeClasses(slots, getTableBodyUtilityClass, classes);
};

const TableBodyRoot = styled('div', {
  name: 'ESTableBody',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [styles.root, ownerState.striped && styles.striped];
  }
})<{ ownerState: TableBodyOwnerState }>(({ theme, ownerState }) => ({
  minWidth: '100%',
  width: 'fit-content',

  ...(ownerState.striped && {
    [`& .${tableRowClasses.root}:nth-of-type(odd)`]: {
      [`&.${tableRowClasses.selected}`]: {
        '&:hover': {
          [`.${tableCellClasses.wrapper}`]: {
            backgroundColor: theme.palette.monoA.A50
          }
        },
        [`.${tableCellClasses.container}`]: {
          backgroundColor: theme.palette.secondary.A100
        }
      },
      [`.${tableCellClasses.content}`]: {
        backgroundColor: theme.palette.monoA.A25
      }
    }
  })
}));

const TABLE_CELL_CONTEXT_VALUE = { variant: 'body' as const };

export const TableBody = (inProps: TableBodyProps) => {
  const {
    children,
    className,
    sx,
    rowDividers = false,
    colDividers = false,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESTableBody'
  });

  const { striped } = useTableContext();

  const value = useMemo(() => {
    return { ...TABLE_CELL_CONTEXT_VALUE, rowDividers, colDividers };
  }, [rowDividers, colDividers]);

  const ownerState = { striped, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableCellContext.Provider value={value}>
      <TableBodyRoot ownerState={ownerState} className={clsx(classes.root, className)} sx={sx} role="rowgroup">
        {children}
      </TableBodyRoot>
    </TableCellContext.Provider>
  );
};
