import { Breakpoint } from '@mui/material/styles';

export type GridContainerMixinProps = {
  /** The number of columns. */
  columns?: number | string;
  /** The gap between rows and columns. */
  gap?: number;
  /** The gap between columns. */
  columnGap?: number;
  /** The gap between rows. */
  rowGap?: number;
  /** How grid items are aligned along their inline axis. */
  justifyItems?: 'stretch' | 'center' | 'start' | 'end';
  /** How grid items are positioned along a container's cross axis.*/
  alignItems?: 'stretch' | 'center' | 'start' | 'end';
};

/**
 * The mixin that applies grid container.
 */
export const gridContainerMixin = (breakpoints: Record<Breakpoint, number>) => (inProps: GridContainerMixinProps) => {
  const { columns = 12, gap, columnGap, rowGap, justifyItems, alignItems } = inProps;

  return {
    display: 'grid',
    gridTemplateColumns: typeof columns === 'string' ? columns : `repeat(${columns}, 1fr)`,

    ...(gap && {
      gap: `${gap}px`
    }),
    ...(columnGap && {
      columnGap: `${columnGap}px`
    }),
    ...(rowGap && {
      rowGap: `${rowGap}px`
    }),
    ...(justifyItems && {
      justifyItems: justifyItems
    }),
    ...(alignItems && {
      alignItems: alignItems
    })
  };
};
