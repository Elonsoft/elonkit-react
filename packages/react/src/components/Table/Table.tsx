import { forwardRef, memo, useMemo, useRef } from 'react';

import { TableProps } from './Table.types';

import clsx from 'clsx';
import { getTableUtilityClass } from './Table.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { useForkRef } from '@mui/material/utils';

import { TableContext } from './Table.context';
import { TableBodyContext } from './TableBody';
import { TableCellContext } from './TableCell';
import { TableHeadContext } from './TableHead';
import { TableScrollbarContext } from './TableScrollbar';
import { useTableScrollSync } from './useTableScrollSync';
import { useTableStickyOffset } from './useTableStickyOffset';

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
  backgroundColor: theme.vars.palette.surface[100],
  boxShadow: theme.vars.palette.shadow.down[100],
  borderRadius: '6px'
}));

const TABLE_CELL_CONTEXT_VALUE = { variant: 'body' as const };

/** Tables display information in a way that's easy to scan, so that users can look for patterns and insights. */
export const Table = memo(
  forwardRef<HTMLDivElement, TableProps>((inProps, inRef) => {
    const { children, className, columns, sx, ...props } = useThemeProps({
      props: inProps,
      name: 'ESTable'
    });

    const ref = useRef<HTMLDivElement | null>(null);
    const rootRef = useForkRef(ref, inRef);

    const value = useMemo(() => {
      return { columns };
    }, [columns]);

    const { bodyContextValue, headContextValue, scrollbarContextValue } = useTableScrollSync();
    useTableStickyOffset(ref);

    const ownerState = { ...props };
    const classes = useUtilityClasses(ownerState);

    return (
      <TableContext.Provider value={value}>
        <TableCellContext.Provider value={TABLE_CELL_CONTEXT_VALUE}>
          <TableBodyContext.Provider value={bodyContextValue}>
            <TableHeadContext.Provider value={headContextValue}>
              <TableScrollbarContext.Provider value={scrollbarContextValue}>
                <TableRoot ref={rootRef} className={clsx(classes.root, className)} role="table" sx={sx}>
                  {children}
                </TableRoot>
              </TableScrollbarContext.Provider>
            </TableHeadContext.Provider>
          </TableBodyContext.Provider>
        </TableCellContext.Provider>
      </TableContext.Provider>
    );
  })
);

Table.displayName = 'Table';
