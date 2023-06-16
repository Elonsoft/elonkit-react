import { useMemo, useRef } from 'react';

import { TableHeadProps } from './TableHead.types';

import clsx from 'clsx';
import { getTableHeadUtilityClass } from './TableHead.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useSticky } from '../../../hooks';
import { tableCellClasses, TableCellContext } from '../TableCell';

type TableHeadOwnerState = {
  classes?: TableHeadProps['classes'];
  sticky?: number;
  rowDividers?: boolean;
  colDividers?: boolean;
};

const useUtilityClasses = (ownerState: TableHeadOwnerState) => {
  const { classes, sticky, rowDividers, colDividers } = ownerState;

  const slots = {
    root: ['root', sticky !== undefined && 'sticky', rowDividers && 'rowDividers', colDividers && 'colDividers']
  };

  return composeClasses(slots, getTableHeadUtilityClass, classes);
};

const TableHeadRoot = styled('div', {
  name: 'ESTableHead',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.root,
      ownerState.sticky !== undefined && 'sticky',
      ownerState.rowDividers && 'rowDividers',
      ownerState.colDividers && 'colDividers'
    ];
  }
})<{ ownerState: TableHeadOwnerState }>(({ ownerState, theme }) => ({
  minWidth: '100%',
  width: 'fit-content',
  position: 'relative',
  zIndex: 1,

  ...(!ownerState.rowDividers && {
    [`& .${tableCellClasses.container}`]: {
      borderBottom: '0'
    }
  }),
  ...(ownerState.colDividers && {
    '&:not(:first-of-type)': {
      [`& .${tableCellClasses.container}`]: {
        borderLeft: `1px solid ${theme.palette.monoA.A100}`
      }
    }
  })
}));

const TABLE_CELL_CONTEXT_VALUE = { variant: 'head' as const };

export const TableHead = (inProps: TableHeadProps) => {
  const {
    children,
    className,
    sticky,
    relativeTo,
    sx,
    rowDividers = true,
    colDividers = false,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESTableHead'
  });

  const ref = useRef<HTMLDivElement | null>(null);
  useSticky(ref, { top: sticky, relativeTo });

  const value = useMemo(() => {
    return { ...TABLE_CELL_CONTEXT_VALUE, rowDividers, colDividers };
  }, [rowDividers, colDividers]);

  const ownerState = { sticky, rowDividers, colDividers, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableCellContext.Provider value={value}>
      <TableHeadRoot
        ref={ref}
        className={clsx(classes.root, className)}
        sx={sx}
        ownerState={ownerState}
        role="rowgroup"
      >
        {children}
      </TableHeadRoot>
    </TableCellContext.Provider>
  );
};
