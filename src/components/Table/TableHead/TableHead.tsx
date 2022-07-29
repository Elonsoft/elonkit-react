import { useRef } from 'react';

import { TableHeadProps } from './TableHead.types';

import clsx from 'clsx';
import { getTableHeadUtilityClass } from './TableHead.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useSticky } from '../../../hooks';
import { TableCellContext } from '../TableCell';

type TableHeadOwnerState = {
  classes?: TableHeadProps['classes'];
  sticky?: number;
};

const useUtilityClasses = (ownerState: TableHeadOwnerState) => {
  const { classes, sticky } = ownerState;

  const slots = {
    root: ['root', sticky !== undefined && 'sticky']
  };

  return composeClasses(slots, getTableHeadUtilityClass, classes);
};

const TableHeadRoot = styled('div', {
  name: 'ESTableHead',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [styles.root, ownerState.sticky !== undefined && 'sticky'];
  }
})<{ ownerState: TableHeadOwnerState }>(() => ({
  minWidth: '100%',
  width: 'fit-content',
  position: 'relative',
  zIndex: 1
}));

const TABLE_CELL_CONTEXT_VALUE = { variant: 'head' as const };

export const TableHead = (inProps: TableHeadProps) => {
  const { children, className, sticky, relativeTo, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTableHead'
  });

  const ref = useRef<HTMLDivElement | null>(null);
  useSticky(ref, { top: sticky, relativeTo });

  const ownerState = { sticky, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableCellContext.Provider value={TABLE_CELL_CONTEXT_VALUE}>
      <TableHeadRoot ref={ref} className={clsx(classes.root, className)} ownerState={ownerState} role="rowgroup">
        {children}
      </TableHeadRoot>
    </TableCellContext.Provider>
  );
};
