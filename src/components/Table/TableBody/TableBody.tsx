import { TableBodyProps } from './TableBody.types';

import clsx from 'clsx';
import { getTableBodyUtilityClass } from './TableBody.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { TableCellContext } from '../TableCell';

type TableBodyOwnerState = {
  classes?: TableBodyProps['classes'];
};

const useUtilityClasses = (ownerState: TableBodyOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getTableBodyUtilityClass, classes);
};

const TableBodyRoot = styled('div', {
  name: 'ESTableBody',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  minWidth: '100%',
  width: 'fit-content'
}));

const TABLE_CELL_CONTEXT_VALUE = { variant: 'body' as const };

export const TableBody = (inProps: TableBodyProps) => {
  const { children, className, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTableBody'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableCellContext.Provider value={TABLE_CELL_CONTEXT_VALUE}>
      <TableBodyRoot className={clsx(classes.root, className)} role="rowgroup">
        {children}
      </TableBodyRoot>
    </TableCellContext.Provider>
  );
};
