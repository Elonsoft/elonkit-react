import { memo, useState } from 'react';

import { TableHeadProps } from './TableHead.types';

import clsx from 'clsx';
import { getTableHeadUtilityClass } from './TableHead.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useTableHeadContext } from './TableHead.context';

import { useIntersectionObserver } from '../../../hooks';
import { TableCellContext, TableCellContextValue } from '../TableCell';

type TableHeadOwnerState = {
  classes?: TableHeadProps['classes'];
  sticky?: number;
  isStuck?: boolean;
};

const useUtilityClasses = (ownerState: TableHeadOwnerState) => {
  const { classes, sticky, isStuck } = ownerState;

  const slots = {
    root: ['root', sticky !== undefined && 'sticky', sticky !== undefined && isStuck && 'stuck'],
    container: ['container']
  };

  return composeClasses(slots, getTableHeadUtilityClass, classes);
};

const TableHeadRoot = styled('div', {
  name: 'ESTableHead',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { sticky, isStuck }
    } = props;
    return [styles.root, sticky !== undefined && styles.sticky, sticky !== undefined && isStuck && styles.stuck];
  }
})<{ ownerState: TableHeadOwnerState }>(({ ownerState }) => ({
  overflow: 'auto',
  position: 'relative',
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  zIndex: 2,
  borderTopLeftRadius: ownerState.isStuck ? 0 : '6px',
  borderTopRightRadius: ownerState.isStuck ? 0 : '6px',
  scrollbarWidth: 'none',

  '&::-webkit-scrollbar': {
    display: 'none'
  },

  ...(ownerState.sticky !== undefined && {
    position: 'sticky',
    top: ownerState.sticky || 0
  })
}));

const TableHeadContainer = styled('div', {
  name: 'ESTableBody',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})(() => ({
  minWidth: '100%',
  width: 'fit-content'
}));

const TABLE_CELL_CONTEXT_VALUE = { variant: 'head' as const, tableRef: null };

export const TableHead = memo(function TableHead(inProps: TableHeadProps) {
  const { children, className, sticky, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTableHead'
  });

  const [isStuck, setStuck] = useState(false);

  const { ref, setRef, tableRef } = useTableHeadContext();

  useIntersectionObserver(
    { current: ref },
    (entries) => {
      setStuck(entries[0].intersectionRatio < 1);
    },
    { threshold: [1], rootMargin: `-${(sticky || 0) + 1}px 0px 0px` }
  );

  if (tableRef) {
    (TABLE_CELL_CONTEXT_VALUE as TableCellContextValue).tableRef = tableRef;
  }

  const ownerState = { sticky, isStuck: sticky !== undefined && isStuck, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableCellContext.Provider value={TABLE_CELL_CONTEXT_VALUE}>
      <TableHeadRoot
        ref={setRef}
        className={clsx(classes.root, className)}
        ownerState={ownerState}
        role="rowgroup"
        sx={sx}
      >
        <TableHeadContainer className={classes.container}>{children}</TableHeadContainer>
      </TableHeadRoot>
    </TableCellContext.Provider>
  );
});
