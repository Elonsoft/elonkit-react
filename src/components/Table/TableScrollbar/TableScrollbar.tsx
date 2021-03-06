import { TableScrollbarProps } from './TableScrollbar.types';

import clsx from 'clsx';
import { getTableScrollbarUtilityClass } from './TableScrollbar.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useTableScrollbarContext } from './TableScrollbar.context';

type TableOwnerState = {
  classes?: TableScrollbarProps['classes'];
};

const useUtilityClasses = (ownerState: TableOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getTableScrollbarUtilityClass, classes);
};

const TableScrollbarRoot = styled('div', {
  name: 'ESTableScrollbar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  ...theme.scrollbars.thin,
  overflowX: 'auto'
}));

export const TableScrollbar = (inProps: TableScrollbarProps) => {
  const { className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTableScrollbar'
  });

  const { width, setRef } = useTableScrollbarContext();

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableScrollbarRoot className={clsx(className, classes.root)} sx={sx} ref={setRef}>
      <div style={{ width: `${width}px`, height: '0.1px' }}></div>
    </TableScrollbarRoot>
  );
};
