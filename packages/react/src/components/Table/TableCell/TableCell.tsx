import React, { memo, useEffect, useRef, useState } from 'react';

import { TableCellProps } from './TableCell.types';

import clsx from 'clsx';
import { getTableCellUtilityClass, tableCellClasses } from './TableCell.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useTableCellContext } from './TableCell.context';

import { useLatest } from '../../../hooks/useLatest';

type TableCellOwnerState = {
  classes?: TableCellProps['classes'];
  variant: NonNullable<TableCellProps['variant']>;
  padding: NonNullable<TableCellProps['padding']>;
  align?: TableCellProps['align'];
  pin?: TableCellProps['pin'];
  colSpan?: number;
  overlap?: boolean;
  isResizing?: boolean;
};

const useUtilityClasses = (ownerState: TableCellOwnerState) => {
  const { classes, variant, padding, align, pin, overlap, isResizing } = ownerState;

  const slots = {
    root: [
      'root',
      variant,
      padding === 'none' && 'paddingNone',
      padding === 'normal' && 'paddingNormal',
      padding === 'checkbox' && 'paddingCheckbox',
      pin === 'left' && 'pinLeft',
      pin === 'right' && 'pinRight',
      overlap && 'overlap',
      isResizing && 'resizing'
    ],
    container: ['container'],
    content: [
      'content',
      align === 'flex-start' && 'contentAlignFlexStart',
      align === 'center' && 'contentAlignCenter',
      align === 'flex-end' && 'contentAlignFlexEnd'
    ],
    resize: ['resize', isResizing && 'resizeResizing']
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
      ownerState.padding === 'none' && styles.paddingNone,
      ownerState.padding === 'normal' && styles.paddingNormal,
      ownerState.padding === 'checkbox' && styles.paddingCheckbox,
      ownerState.overlap && styles.overlap,
      ownerState.isResizing && styles.resizing
    ];
  }
})<{ ownerState: TableCellOwnerState }>(({ theme, ownerState }) => ({
  position: 'relative',
  height: '100%',

  ...(ownerState.variant === 'head' && {
    ...theme.typography.caption,
    color: theme.vars.palette.monoA.A600,
    backgroundColor: theme.vars.palette.surface[100],
    position: 'relative',
    zIndex: 1,
    userSelect: 'none',
    height: '49px'
  }),

  ...(ownerState.variant === 'body' && {
    ...theme.typography.body100,
    color: theme.vars.palette.monoA.A900,
    backgroundColor: theme.vars.palette.surface[100],
    height: '57px'
  }),

  ...(ownerState.pin && {
    position: 'sticky',
    boxShadow: `${ownerState.pin === 'left' ? '2px' : '-2px'} 0 0 0 ${theme.vars.palette.monoA.A100}`,
    zIndex: ownerState.variant === 'body' ? 2 : 3
  }),

  [`&.${tableCellClasses.pinRight} + .${tableCellClasses.pinRight}`]: {
    boxShadow: 'none'
  },
  [`&.${tableCellClasses.pinLeft}:not(:nth-last-child(1 of .${tableCellClasses.pinLeft}))`]: {
    boxShadow: 'none'
  },
  [`&.${tableCellClasses.pinRight}:not(:nth-child(1 of .${tableCellClasses.pinRight}))`]: {
    boxShadow: 'none'
  },

  ...(ownerState.colSpan && {
    gridColumnEnd: `span ${ownerState.colSpan}`
  }),

  ...(ownerState.padding === 'normal' && {
    [`& .${tableCellClasses.content}`]: {
      padding: '0 16px'
    }
  }),
  ...(ownerState.padding === 'checkbox' && {
    [`& .${tableCellClasses.content}`]: {
      padding: '0 4px'
    },
    [`&:first-of-type .${tableCellClasses.content}`]: {
      paddingLeft: '16px'
    },
    [`&:last-of-type .${tableCellClasses.content}`]: {
      paddingRight: '16px'
    }
  }),

  [`&:hover .${tableCellClasses.resize}::after`]: {
    width: '1px',
    backgroundColor: theme.vars.palette.monoA.A200
  },

  [`.${tableCellClasses.resize}:hover::after`]: {
    width: '3px',
    backgroundColor: theme.vars.palette.monoA.A400
  },

  [`.${tableCellClasses.resize}:focus-visible::after`]: {
    width: '3px',
    backgroundColor: theme.vars.palette.info.A600
  },
  ...(ownerState.isResizing && {
    [`.${tableCellClasses.resize}.${tableCellClasses.resize}::after`]: {
      width: '3px',
      backgroundColor: theme.vars.palette.info.A600
    }
  })
}));

const TableCellContainer = styled('div', {
  name: 'ESTableCell',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})(({ theme }) => ({
  borderBottom: `1px solid ${theme.vars.palette.monoA.A100}`,
  transition: `${theme.transitions.duration.short}ms`,
  width: '100%',
  height: '100%',
  display: 'flex'
}));

const TableCellContent = styled('div', {
  name: 'ESTableCell',
  slot: 'Content',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.content,
      ownerState.align === 'flex-start' && styles.contentAlignFlexStart,
      ownerState.align === 'center' && styles.contentAlignCenter,
      ownerState.align === 'flex-end' && styles.contentAlignFlexEnd
    ];
  }
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
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [styles.resize, ownerState.isResizing && styles.resizeResizing];
  }
})<{ ownerState: TableCellOwnerState }>(({ ownerState }) => ({
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

export const TableCell = memo(function TableCell(inProps: TableCellProps) {
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
    labelResize,
    sx,
    pin,
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

  const onClick = (event: React.MouseEvent) => {
    if (props.overlap) {
      event.stopPropagation();
    }
  };

  useEffect(() => {
    if (isResizing) {
      const onMouseMove = (event: MouseEvent) => {
        onMouseMoveLatest.current(event);
      };

      const onMouseUp = () => {
        screenX.current = null;
        setResizing(false);

        if (onResizeCommitLatest.current && ref.current) {
          onResizeCommitLatest.current(ref.current.getBoundingClientRect().width, ref.current);
        }
      };

      const style = document.createElement('STYLE');
      style.textContent = `* { cursor: col-resize !important; } .${tableCellClasses.resize}::after { display: none; }`;

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      document.head.appendChild(style);

      return () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        document.head.removeChild(style);
      };
    }
  }, [isResizing]);

  const ownerState = { variant, padding, align, pin, isResizing, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableCellRoot
      ref={ref}
      className={clsx(classes.root, className)}
      data-minwidth={minWidth}
      id={id}
      ownerState={ownerState}
      role={variant === 'head' ? 'columnheader' : 'cell'}
      sx={sx}
      onClick={onClick}
    >
      <TableCellContainer className={classes.container}>
        <TableCellContent className={classes.content} ownerState={ownerState}>
          {children}
        </TableCellContent>
        {!!onResize && (
          <TableCellResize
            aria-label={labelResize}
            className={classes.resize}
            ownerState={ownerState}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onMouseDown={onMouseDown}
          />
        )}
      </TableCellContainer>
    </TableCellRoot>
  );
});
