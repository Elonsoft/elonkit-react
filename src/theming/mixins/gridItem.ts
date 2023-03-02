import { Breakpoint } from '@mui/material/styles';

export type GridItemMixinProps = {
  /** The span of column count. */
  span?: number;
} & {
  [key in Breakpoint]?: number;
};

/**
 * The mixin that applies grid item.
 */
export const gridItemMixin = (breakpoints: Record<Breakpoint, number>) => (inProps: GridItemMixinProps) => {
  const properties: Record<string, Record<string, string>> = {};

  (Object.keys(breakpoints) as Breakpoint[]).forEach((key) => {
    if (inProps[key]) {
      properties[`@media (min-width: ${breakpoints[key]}px)`] = {
        gridColumn: `span ${inProps[key]}`
      };
    }
  });

  return {
    gridColumn: `span ${inProps.span}`,
    ...properties
  };
};
