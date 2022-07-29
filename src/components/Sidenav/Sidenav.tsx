import React, { useMemo } from 'react';

import { SidenavProps } from './Sidenav.types';

import clsx from 'clsx';
import { getSidenavUtilityClass } from './Sidenav.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { SidenavContext } from './Sidenav.context';

type SidenavOwnerState = {
  classes?: SidenavProps['classes'];
};

const useUtilityClasses = (ownerState: SidenavOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getSidenavUtilityClass, classes);
};

const SidenavRoot = styled('div', {
  name: 'ESSidenav',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  height: '100%'
}));

/**
 * The Sidenav component is a fixed-position toggleable slide out box.
 */
export const Sidenav = (inProps: SidenavProps) => {
  const { className, children, open, sx, id, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSidenav'
  });

  const value = useMemo(() => {
    return { open, id };
  }, [open, id]);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SidenavContext.Provider value={value}>
      <SidenavRoot className={clsx(classes.root, className)} sx={sx}>
        {React.Children.map(children, (child: any, idx: number) => {
          if (idx) {
            return <>{open && React.cloneElement(child, { id, open })}</>;
          }

          return React.cloneElement(child, { id });
        })}
      </SidenavRoot>
    </SidenavContext.Provider>
  );
};
