import React, { useEffect, useRef, useState } from 'react';

import { TableCellProps } from './TableCell.types';

import clsx from 'clsx';
import { getTableCellUtilityClass } from './TableCell.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useTableCellContext } from './TableCell.context';

import { useLatest } from '../../../hooks/useLatest';

type TableCellOwnerState = {
  classes?: TableCellProps['classes'];
  variant: NonNullable<TableCellProps['variant']>;
  padding: NonNullable<TableCellProps['padding']>;
  align?: TableCellProps['align'];
  colSpan?: number;
  overlap?: boolean;
  isResizing?: boolean;
};

const useUtilityClasses = (ownerState: TableCellOwnerState) => {
  const { classes, variant, padding, align, overlap } = ownerState;

  const slots = {
    root: [
      'root',
      variant,
      padding === 'none' && 'paddingNone',
      padding === 'normal' && 'paddingNormal',
      padding === 'checkbox' && 'paddingCheckbox',
      overlap && 'overlap'
    ],
    container: ['container'],
    content: [
      'content',
      align === 'flex-start' && 'contentAlignFlexStart',
      align === 'center' && 'contentAlignCenter',
      align === 'flex-end' && 'contentAlignFlexEnd'
    ],
    resize: ['resize']
  };

  return composeClasses(slots, getTableCellUtilityClass, classes);
};

const TableCellRoot = styled('div', {
  name: 'ESTableCell',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.root,
      styles[ownerState.variant],
      ownerState.padding === 'none' && 'paddingNone',
      ownerState.padding === 'normal' && 'paddingNormal',
      ownerState.padding === 'checkbox' && 'paddingCheckbox',
      ownerState.overlap && 'overlap'
    ];
  }
})<{ ownerState: TableCellOwnerState }>(({ theme, ownerState }) => ({
  position: 'relative',
  height: '100%',

  ...(ownerState.variant === 'head' && {
    ...theme.typography.caption,
    color: theme.palette.monoA.A600,
    backgroundColor: theme.palette.surface[100],
    position: 'relative',
    zIndex: 1,
    userSelect: 'none',
    height: '49px',

    ...(ownerState.overlap && {
      transform: 'translateY(-48px)'
    })
  }),

  ...(ownerState.variant === 'body' && {
    ...theme.typography.body100,
    color: theme.palette.monoA.A900,
    backgroundColor: theme.palette.surface[100],
    height: '57px',

    ...(ownerState.overlap && {
      transform: 'translateY(-57px)'
    })
  }),

  ...(ownerState.colSpan && {
    gridColumnEnd: `span ${ownerState.colSpan}`
  }),

  ...(ownerState.padding === 'normal' && {
    '& .ESTableCell-content': {
      padding: '0 16px'
    }
  }),
  ...(ownerState.padding === 'checkbox' && {
    '& .ESTableCell-content': {
      padding: '0 4px'
    },
    '&:first-of-type .ESTableCell-content': {
      paddingLeft: '16px'
    },
    '&:last-of-type .ESTableCell-content': {
      paddingRight: '16px'
    }
  }),

  '&:hover .ESTableCell-resize::after': {
    width: '1px',
    backgroundColor: theme.palette.monoA.A200
  },
  '.ESTableCell-resize:hover::after': {
    width: '3px',
    backgroundColor: theme.palette.monoA.A400
  },
  '.ESTableCell-resize:focus-visible::after': {
    width: '3px',
    backgroundColor: theme.palette.info.A600
  },
  ...(ownerState.isResizing && {
    '.ESTableCell-resize.ESTableCell-resize::after': {
      width: '3px',
      backgroundColor: theme.palette.info.A600
    }
  })
}));

const TableCellContainer = styled('div', {
  name: 'ESTableCell',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.monoA.A100}`,
  transition: `${theme.transitions.duration.short}ms`,
  width: '100%',
  height: '100%',
  display: 'flex'
}));

const TableCellContent = styled('div', {
  name: 'ESTableCell',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})<{ ownerState: TableCellOwnerState }>(({ theme, ownerState }) => ({
  transition: `${theme.transitions.duration.short}ms`,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: ownerState.align
}));

const TableCellResize = styled('button', {
  name: 'ESTableCell',
  slot: 'Resize',
  overridesResolver: (props, styles) => styles.content
})<{ ownerState: TableCellOwnerState }>(({ theme, ownerState }) => ({
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  width: '8px',
  cursor: 'col-resize',
  border: 0,
  padding: 0,
  margin: 0,
  background: 'none',
  outline: 'none',
  textDecoration: 'none',

  '&::after': {
    ...(ownerState.isResizing && {
      display: 'block !important'
    }),
    content: '""',
    position: 'absolute',
    right: 0,
    top: '12px',
    bottom: '12px',
    borderRadius: '3px'
  }
}));

const RESIZE_STEPS: Record<string, number | undefined> = {
  ArrowLeft: -16,
  ArrowRight: 16
};

export const TableCell = (inProps: TableCellProps) => {
  const context = useTableCellContext();

  const {
    children,
    className,
    variant = context.variant,
    padding = 'normal',
    align = 'flex-start',
    id,
    onResize,
    onResizeCommit,
    minWidth,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESTableCell'
  });

  const ref = useRef<HTMLDivElement | null>(null);
  const screenX = useRef<number | null>(null);

  const [isResizing, setResizing] = useState(false);

  const onResizeLatest = useLatest(onResize);
  const onResizeCommitLatest = useLatest(onResizeCommit);

  const onMouseMoveLatest = useLatest((event: MouseEvent) => {
    if (onResizeLatest.current && ref.current) {
      if (screenX.current !== null) {
        const width = Math.max(
          minWidth || 0,
          ref.current.getBoundingClientRect().width + (event.screenX - screenX.current)
        );
        onResizeLatest.current(width, ref.current);
      }
      screenX.current = event.screenX;
    }
  });

  const onMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    screenX.current = event.screenX;
    setResizing(true);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const step = RESIZE_STEPS[event.key];
    if (onResizeLatest.current && ref.current && step) {
      event.preventDefault();
      const width = Math.max(
        minWidth || 0,
        ref.current.getBoundingClientRect().width + (event.shiftKey ? step * 3 : step)
      );
      onResizeLatest.current(width, ref.current);
    }
  };

  const onKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if ((event.key === 'ArrowLeft' || event.key === 'ArrowRight') && onResizeCommitLatest.current && ref.current) {
      onResizeCommitLatest.current(ref.current.getBoundingClientRect().width, ref.current);
    }
  };

  useEffect(() => {
    if (isResizing) {
      const onMouseUp = () => {
        screenX.current = null;
        setResizing(false);

        if (onResizeCommitLatest.current && ref.current) {
          onResizeCommitLatest.current(ref.current.getBoundingClientRect().width, ref.current);
        }
      };

      document.addEventListener('mouseup', onMouseUp);
      return () => {
        document.removeEventListener('mouseup', onMouseUp);
      };
    }
  }, [isResizing]);

  useEffect(() => {
    if (isResizing) {
      const onMouseMove = (event: MouseEvent) => {
        onMouseMoveLatest.current(event);
      };

      const style = document.createElement('STYLE');
      style.textContent = '* { cursor: col-resize !important; } .ESTableCell-resize::after { display: none; }';

      document.addEventListener('mousemove', onMouseMove);
      document.head.appendChild(style);

      return () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.head.removeChild(style);
      };
    }
  }, [isResizing]);

  const ownerState = { variant, padding, align, isResizing, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableCellRoot
      ref={ref}
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      id={id}
      role={variant === 'head' ? 'columnheader' : 'cell'}
      data-minwidth={minWidth}
    >
      <TableCellContainer className={classes.container}>
        <TableCellContent className={classes.content} ownerState={ownerState}>
          {children}
        </TableCellContent>
        {!!onResize && (
          <TableCellResize
            className={classes.resize}
            ownerState={ownerState}
            onMouseDown={onMouseDown}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
          />
        )}
      </TableCellContainer>
    </TableCellRoot>
  );
};
