import { useEffect, useRef } from 'react';

import { TableScrollableProps } from './TableScrollable.types';

import clsx from 'clsx';
import { getTableScrollableUtilityClass } from './TableScrollable.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useResizeObserver, useScrollSync } from '../../../hooks';
import { useTableContext } from '../Table.context';
import { useTableScrollbarContext } from '../TableScrollbar';

type TableOwnerState = {
  classes?: TableScrollableProps['classes'];
};

const useUtilityClasses = (ownerState: TableOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getTableScrollableUtilityClass, classes);
};

const TableScrollableRoot = styled('div', {
  name: 'ESTableScrollable',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  position: 'relative',
  overflowX: 'auto',
  scrollbarWidth: 'none',

  '&::-webkit-scrollbar': {
    display: 'none'
  },

  '& > .ESTableBody-root > .ESTableRow-root:last-of-type ': {
    '& .ESTableCell-container': {
      borderBottom: 0
    }
  }
}));

export const TableScrollable = (inProps: TableScrollableProps) => {
  const { children, className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTableScrollable'
  });

  const { columns } = useTableContext();
  const { setWidth, ref: scrollbarRef } = useTableScrollbarContext();
  const ref = useRef<HTMLDivElement | null>(null);

  useResizeObserver(ref, () => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth);
    }
  });

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth);
    }
  }, [columns]);

  useScrollSync(ref, { current: scrollbarRef });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableScrollableRoot className={clsx(className, classes.root)} sx={sx} ref={ref}>
      {children}
    </TableScrollableRoot>
  );
};
