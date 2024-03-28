import { memo, useRef, useState } from 'react';

import { TableFootProps } from './TableFoot.types';

import clsx from 'clsx';
import { getTableFootUtilityClass } from './TableFoot.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useIntersectionObserver } from '../../../hooks';

type TableFootOwnerState = {
  classes?: TableFootProps['classes'];
  sticky?: number;
  isStuck?: boolean;
};

const useUtilityClasses = (ownerState: TableFootOwnerState) => {
  const { classes, sticky, isStuck } = ownerState;

  const slots = {
    root: ['root', sticky !== undefined && 'sticky', sticky !== undefined && isStuck && 'stuck']
  };

  return composeClasses(slots, getTableFootUtilityClass, classes);
};

const TableFootRoot = styled('div', {
  name: 'ESTableFoot',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { sticky, isStuck }
    } = props;
    return [styles.root, sticky !== undefined && styles.sticky, sticky !== undefined && isStuck && styles.stuck];
  }
})<{ ownerState: TableFootOwnerState }>(({ theme, ownerState }) => ({
  backgroundColor: theme.vars.palette.surface[100],
  borderTop: `1px solid ${theme.vars.palette.monoA.A100}`,
  position: 'relative',
  zIndex: 2,
  borderBottomLeftRadius: ownerState.isStuck ? 0 : '6px',
  borderBottomRightRadius: ownerState.isStuck ? 0 : '6px',

  ...(ownerState.sticky !== undefined && {
    position: 'sticky',
    bottom: ownerState.sticky || 0
  })
}));

export const TableFoot = memo(function TableFoot(inProps: TableFootProps) {
  const { children, className, sticky, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTableFoot'
  });

  const [isStuck, setStuck] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver(
    ref,
    (entries) => {
      setStuck(entries[0].intersectionRatio < 1);
    },
    { threshold: [1], rootMargin: `0px 0px -${(sticky || 0) + 1}px` }
  );

  const ownerState = { sticky, isStuck: sticky !== undefined && isStuck, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableFootRoot ref={ref} className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
      {children}
    </TableFootRoot>
  );
});
