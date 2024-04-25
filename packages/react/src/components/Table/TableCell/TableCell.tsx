import React, { memo, useEffect, useRef, useState } from 'react';

import { TableCellProps } from './TableCell.types';

import clsx from 'clsx';
import { getTableCellUtilityClass, tableCellClasses } from './TableCell.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Divider, dividerClasses } from '@mui/material';

import { useTableCellContext } from './TableCell.context';

import { useLatest } from '../../../hooks/useLatest';
import { tableFootClasses } from '../TableFoot';

type TableCellOwnerState = {
  classes?: TableCellProps['classes'];
  dividerHeight?: number;
  dividerPosition?: { top: number; left: number };
  isDividerHidden?: boolean;
  variant: NonNullable<TableCellProps['variant']>;
  padding: NonNullable<TableCellProps['padding']>;
  align?: TableCellProps['align'];
  pin?: TableCellProps['pin'];
  colSpan?: number;
  overlap?: boolean;
  isResizing?: boolean;
};

const getClosestPinnedCell = (el: HTMLElement) => {
  let nextSibling = el.nextSibling;

  while (nextSibling !== null) {
    if (nextSibling.nodeType === 1) {
      const nextElement = nextSibling as HTMLElement;

      if (nextElement.classList.contains('ESTableCell-pinRight')) {
        return nextElement;
      }

      nextSibling = nextSibling.nextSibling;
    }
  }

  return null;
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
    resize: ['resize', isResizing && 'resizeResizing'],
    resizeDivider: ['resizeDivider']
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
    color: theme.palette.monoA.A600,
    backgroundColor: theme.palette.surface[100],
    position: 'relative',
    userSelect: 'none',
    height: '49px'
  }),
  ...(ownerState.variant === 'head' &&
    !ownerState.isResizing && {
      zIndex: 1
    }),

  ...(ownerState.variant === 'body' && {
    ...theme.typography.body100,
    color: theme.palette.monoA.A900,
    backgroundColor: theme.palette.surface[100],
    height: '57px'
  }),

  ...(ownerState.pin && {
    position: 'sticky',
    boxShadow: `${ownerState.pin === 'left' ? '2px' : '-2px'} 0 0 0 ${theme.palette.monoA.A100}`,
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
    backgroundColor: theme.palette.monoA.A200
  },

  [`.${tableCellClasses.resize}:hover::after`]: {
    width: '3px',
    backgroundColor: theme.palette.monoA.A400
  },

  [`.${tableCellClasses.resize}:focus-visible::after`]: {
    width: '3px',
    backgroundColor: theme.palette.info.A600
  },

  ...(ownerState.isResizing && {
    [`.${tableCellClasses.resize}.${tableCellClasses.resize}::after`]: {
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
  transition: `${theme.transitions.duration.short}ms, border-bottom 0ms`,
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

const TableCellResizeDivider = styled(Divider, {
  name: 'ESTableCell',
  slot: 'ResizeDivider',
  overridesResolver: (props, styles) => [styles.resizeDivider]
})<{ ownerState: TableCellOwnerState }>(({ theme, ownerState }) => ({
  [`&.${dividerClasses.vertical}.${dividerClasses.flexItem}`]: {
    position: 'fixed',
    borderStyle: 'dashed',
    zIndex: 2,
    borderColor: theme.palette.monoA.A300,
    height: (ownerState.dividerHeight ? ownerState.dividerHeight : 0) - 37,
    top: ownerState.dividerPosition?.top,
    left: ownerState.dividerPosition?.left,
    opacity: ownerState.isDividerHidden ? 0 : 1
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

  const [dividerHeight, setDividerHeight] = useState<number>(0);
  const [dividerPosition, setDividerPosition] = useState<{ top: number; left: number }>();
  const [resizeDividerOffsetLeft, setResizeDividerOffsetLeft] = useState<number | null>(null);
  const [isDividerHidden, setDividerHidden] = useState(false);

  const onResizeLatest = useLatest(onResize);
  const onResizeCommitLatest = useLatest(onResizeCommit);

  const onMouseMoveLatest = useLatest((event: MouseEvent) => {
    if (onResizeLatest.current && ref.current) {
      if (screenX.current !== null) {
        const width = Math.max(
          minWidth || 0,
          ref.current.getBoundingClientRect().width + (event.screenX - screenX.current)
        );
        onResizeLatest.current(width, ref.current, setResizeDividerOffsetLeft);
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
      onResizeLatest.current(width, ref.current, setResizeDividerOffsetLeft);
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

  useEffect(() => {
    const resizeButtonOffsetTop = 37;
    const resizeButtonOffsetLeft = 2;

    const tableFoot = document.querySelector(`.${tableFootClasses.root}`);
    const tableCellRect = ref.current?.getBoundingClientRect();

    if (tableCellRect && !resizeDividerOffsetLeft) {
      setResizeDividerOffsetLeft(tableCellRect.width);
    }

    if (tableCellRect && resizeDividerOffsetLeft !== tableCellRect.width) {
      setResizeDividerOffsetLeft(tableCellRect.width);
    }

    if (tableCellRect && tableFoot) {
      setDividerHeight(tableFoot.getBoundingClientRect().top - tableCellRect.top);
    } else if (tableCellRect && context.tableRef) {
      setDividerHeight(context.tableRef.getBoundingClientRect().bottom - tableCellRect.top);
    }

    if (tableCellRect && resizeDividerOffsetLeft && ref.current && context.tableRef) {
      const closestPinnedCell = getClosestPinnedCell(ref.current);

      const isDividerIntersectsPinnedCell =
        closestPinnedCell &&
        tableCellRect.left + resizeDividerOffsetLeft - resizeButtonOffsetLeft >=
          closestPinnedCell.getBoundingClientRect().left;

      const isDividerIntersectsTable =
        !closestPinnedCell &&
        tableCellRect.left + resizeDividerOffsetLeft - resizeButtonOffsetLeft >=
          context.tableRef.getBoundingClientRect().width;

      if (isDividerIntersectsPinnedCell || isDividerIntersectsTable) {
        setDividerHidden(true);
      } else {
        setDividerHidden(false);
      }

      setDividerPosition({
        top: tableCellRect.top + resizeButtonOffsetTop,
        left: tableCellRect.left + resizeDividerOffsetLeft - resizeButtonOffsetLeft
      });
    }
  }, [isResizing, resizeDividerOffsetLeft]);

  const ownerState = {
    variant,
    padding,
    align,
    pin,
    isResizing,
    dividerHeight,
    dividerPosition,
    isDividerHidden,
    ...props
  };
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
          <>
            {isResizing && (
              <>
                <TableCellResizeDivider
                  flexItem
                  className={classes.resizeDivider}
                  orientation="vertical"
                  ownerState={ownerState}
                  style={{
                    top: ref.current?.getBoundingClientRect().top,
                    height: 12
                  }}
                />
                <TableCellResizeDivider
                  flexItem
                  className={classes.resizeDivider}
                  orientation="vertical"
                  ownerState={ownerState}
                />
              </>
            )}
            <TableCellResize
              aria-label={labelResize}
              className={classes.resize}
              ownerState={ownerState}
              onKeyDown={onKeyDown}
              onKeyUp={onKeyUp}
              onMouseDown={onMouseDown}
            />
          </>
        )}
      </TableCellContainer>
    </TableCellRoot>
  );
});
