import { GridProps } from './Grid.types';

import clsx from 'clsx';
import { getGridUtilityClass } from './Grid.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Box from '@mui/material/Box';

type GridOwnerState = Omit<GridProps, 'className' | 'sx'>;

const useUtilityClasses = (ownerState: GridOwnerState) => {
  const { classes, container, item } = ownerState;

  const slots = {
    root: ['root', container && 'container', item && 'item']
  };

  return composeClasses(slots, getGridUtilityClass, classes);
};

const GridRoot = styled(Box, {
  name: 'ESGridRoot',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { container, item }
    } = props;
    return [styles.root, container && styles.container, item && styles.item];
  }
})<{ ownerState: GridOwnerState }>(({ theme, ownerState }) => {
  const breakpoints: Record<string, number> = {};

  theme.breakpoints.keys.forEach((key) => {
    const value = ownerState[key];
    if (value) {
      breakpoints[key] = value;
    }
  });

  return {
    ...(ownerState.container &&
      theme.mixins.gridContainer({
        gap: ownerState.gap,
        columns: ownerState.columns,
        columnGap: ownerState.columnGap,
        rowGap: ownerState.rowGap,
        justifyItems: ownerState.justifyItems,
        alignItems: ownerState.alignItems
      })),
    ...(ownerState.item &&
      theme.mixins.gridItem({
        span: ownerState.span,
        ...breakpoints
      }))
  };
});

/**
 * The grid layout.
 */
export const Grid = (inProps: GridProps) => {
  const { className, children, sx, ...props } = useThemeProps({ props: inProps, name: 'Grid' });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GridRoot ownerState={ownerState} className={clsx(classes.root, className)} sx={sx}>
      {children}
    </GridRoot>
  );
};
