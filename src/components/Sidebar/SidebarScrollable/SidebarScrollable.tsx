import { useRef, useState } from 'react';

import { SidebarScrollableProps } from './SidebarScrollable.types';

import clsx from 'clsx';
import { getSidebarScrollableUtilityClass } from './SidebarScrollable.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useResizeObserver } from '../../../hooks';

type SidebarScrollableOwnerState = {
  classes?: SidebarScrollableProps['classes'];
};

const useUtilityClasses = (ownerState: SidebarScrollableOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getSidebarScrollableUtilityClass, classes);
};

const SidebarScrollableRoot = styled('div', {
  name: 'ESSidebarScrollable',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  width: '100%',
  ...theme.scrollbars.overlay
}));

export const SidebarScrollable = (inProps: SidebarScrollableProps) => {
  const { className, sx, beforeScroll, afterScroll, children, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSidebarScrollable'
  });

  const [isScrollable, setScrollable] = useState(false);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  const ref = useRef<HTMLDivElement | null>(null);

  useResizeObserver(ref, () => {
    if (ref.current) {
      setScrollable(ref.current?.scrollHeight > ref.current?.clientHeight);
    }
  });

  return (
    <>
      {isScrollable && beforeScroll}

      <SidebarScrollableRoot ref={ref} className={clsx(classes.root, className)} sx={sx}>
        {children}
      </SidebarScrollableRoot>

      {isScrollable && afterScroll}
    </>
  );
};
