import { useCallback, useMemo, useRef, useState } from 'react';

import { SidebarProps } from './Sidebar.types';

import clsx from 'clsx';
import { getSidebarUtilityClass } from './Sidebar.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { SidebarContext } from './Sidebar.context';

import { useDocumentEventListener, useLatest } from '../../hooks';

type SidebarOwnerState = {
  color?: 'default' | 'primary';
  width?: number;
  open?: boolean;
  isMouseMove?: boolean;
  classes?: SidebarProps['classes'];
};

const useUtilityClasses = (ownerState: SidebarOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    content: ['content'],
    handler: ['handler'],
    handlerLine: ['handlerLine']
  };

  return composeClasses(slots, getSidebarUtilityClass, classes);
};

const SidebarRoot = styled('div', {
  name: 'ESSidebar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: SidebarOwnerState }>(({ ownerState }) => ({
  height: '100%',
  display: 'flex',

  ...(ownerState.isMouseMove && {
    cursor: 'col-resize'
  })
}));
const SidebarContent = styled('div', {
  name: 'ESSidebar',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: SidebarOwnerState }>(({ theme, ownerState }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '8px 0',
  width: '57px',
  backgroundColor: theme.palette.common.background,
  borderRight: `1px solid ${theme.palette.monoA.A150}`,

  ...(ownerState.color === 'primary' && {
    backgroundColor: theme.palette.primary[300]
  }),

  ...(ownerState.open && {
    minWidth: '200px'
  })
}));
const SidebarHandler = styled('div', {
  name: 'ESSidebar',
  slot: 'Handler',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  height: '100%',
  cursor: 'col-resize',
  width: '9px',
  marginLeft: '-4px',

  '&:hover .ESSidebar-handlerLine': {
    backgroundColor: theme.palette.info.A500,
    backdropFilter: 'blur(40px)',
    transitionDelay: `1.5s`
  }
}));
const SidebarHandlerLine = styled('div', {
  name: 'ESSidebar',
  slot: 'HandlerLine',
  overridesResolver: (props, styles) => styles.root
})<{ ownerState: SidebarOwnerState }>(({ theme, ownerState }) => ({
  height: '100%',
  width: '3px',
  transitionDelay: '0s',

  ...(ownerState.isMouseMove && {
    '&.ESSidebar-handlerLine': {
      backgroundColor: theme.palette.info.A600,
      backdropFilter: 'blur(40px)'
    }
  })
}));
/**
 * The Sidebar component is a fixed-position toggleable slide out box.
 */
export const Sidebar = (inProps: SidebarProps) => {
  const { className, children, sx, open, color, width, onWidthChange, ...props } = useThemeProps({
    props: inProps,
    name: 'ESSidebar'
  });

  const [isMouseMove, setMouseMove] = useState(false);

  const value = useMemo(() => {
    return { open, color };
  }, [open, color]);

  const ref = useRef<HTMLDivElement | null>(null);
  const onMouseMove = useRef<((e: MouseEvent) => void) | null>(null);

  const onMouseMoveLatest = useLatest((e: MouseEvent) => {
    if (onWidthChange) {
      onWidthChange(e.clientX);
    }
  });

  const onResizeCommit = (e: MouseEvent) => {
    if (ref.current) {
      ref.current.style.width = `${e.clientX}px`;
    }
  };

  const onMouseDown = useCallback(() => {
    onMouseMove.current = (e: MouseEvent) => {
      onResizeCommit(e);

      setMouseMove(true);
    };
    document.addEventListener('mousemove', onMouseMove.current);
  }, []);

  useDocumentEventListener('mouseup', (event) => {
    if (onMouseMove.current) {
      onMouseMoveLatest.current(event);

      setMouseMove(false);

      document.removeEventListener('mousemove', onMouseMove.current);
      onMouseMove.current = null;
    }
  });

  const ownerState = { color, open, isMouseMove, width, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <SidebarContext.Provider value={value}>
      <SidebarRoot className={clsx(classes.root, className)} sx={sx} ownerState={ownerState}>
        <SidebarContent
          className={clsx(classes.content)}
          ref={ref}
          ownerState={ownerState}
          style={{ width: !open ? undefined : `${width}px` }}
        >
          {children}
        </SidebarContent>

        {open && onWidthChange && (
          <SidebarHandler className={clsx(classes.handler)} onMouseDown={onMouseDown}>
            <SidebarHandlerLine ownerState={ownerState} className={clsx(classes.handlerLine)} />
          </SidebarHandler>
        )}
      </SidebarRoot>
    </SidebarContext.Provider>
  );
};
