import { forwardRef, useMemo, useState } from 'react';

import { TableProps } from './Table.types';

import clsx from 'clsx';
import { getTableUtilityClass } from './Table.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { TableContext } from './Table.context';
import { TableCellContext } from './TableCell';
import { TableScrollbarContext } from './TableScrollbar';

type TableOwnerState = {
  classes?: TableProps['classes'];
};

const useUtilityClasses = (ownerState: TableOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getTableUtilityClass, classes);
};

const TableRoot = styled('div', {
  name: 'ESTable',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  backgroundColor: theme.palette.surface[100],
  boxShadow: theme.palette.shadow.down[100],
  borderRadius: '6px',
  overflow: 'hidden'
}));

const TABLE_CELL_CONTEXT_VALUE = { variant: 'body' as const };

export const Table = forwardRef<HTMLDivElement, TableProps>((inProps, ref) => {
  const { children, className, columns, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTable'
  });

  const value = useMemo(() => {
    return { columns };
  }, [columns]);

  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const [scrollbarRef, setScrollbarRef] = useState<HTMLDivElement | null>(null);

  const scrollbarValue = useMemo(() => {
    return { width: scrollbarWidth, setWidth: setScrollbarWidth, ref: scrollbarRef, setRef: setScrollbarRef };
  }, [scrollbarWidth, scrollbarRef]);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableContext.Provider value={value}>
      <TableCellContext.Provider value={TABLE_CELL_CONTEXT_VALUE}>
        <TableScrollbarContext.Provider value={scrollbarValue}>
          <TableRoot ref={ref} className={clsx(classes.root, className)} role="table">
            {children}
          </TableRoot>
        </TableScrollbarContext.Provider>
      </TableCellContext.Provider>
    </TableContext.Provider>
  );
});

Table.displayName = 'Table';
