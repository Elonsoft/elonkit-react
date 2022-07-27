import { Children, forwardRef, isValidElement, useMemo } from 'react';

import { TableRowProps, TableRowTypeMap } from './TableRow.types';

import clsx from 'clsx';
import { getTableRowUtilityClass } from './TableRow.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { useTableContext } from '../Table.context';

type TableRowOwnerState = {
  classes?: TableRowProps['classes'];
  hover?: boolean;
  selected?: boolean;
};

const useUtilityClasses = (ownerState: TableRowOwnerState) => {
  const { classes, hover, selected } = ownerState;

  const slots = {
    root: ['root', hover && 'hover', selected && 'selected'],
    content: ['content'],
    overlap: ['overlap']
  };

  return composeClasses(slots, getTableRowUtilityClass, classes);
};

const merge = (array: Array<JSX.Element | null>) => {
  let index = array.indexOf(null);
  while (index >= 0) {
    let endIndex = index + 1;
    while (array[endIndex] === null) {
      endIndex += 1;
    }
    const count = endIndex - index;
    const gridColumnEnd = count > 1 ? `span ${count}` : undefined;
    array.splice(index, count, <div key={`placeholder-${index}`} style={{ height: '0', gridColumnEnd }} />);
    index = array.indexOf(null);
  }
};

const TableRowRoot = styled('div', {
  name: 'ESTableRow',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [styles.root, ownerState.hover && styles.hover, ownerState.selected && styles.selected];
  }
})<{ ownerState: TableRowOwnerState }>(({ theme, ownerState }) => ({
  ...(ownerState.selected && {
    '& .ESTableCell-container': {
      backgroundColor: theme.palette.secondary.A100
    }
  }),

  ...(ownerState.hover && {
    '&:hover': {
      '& .ESTableCell-content': {
        backgroundColor: theme.palette.monoA.A50
      }
    }
  })
}));

const TableRowContent = styled(Box, {
  name: 'ESTableRow',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})<{ ownerState: TableRowOwnerState }>(({ theme, ownerState }) => ({
  display: 'grid',
  gridAutoRows: 'max-content',
  minWidth: '100%',
  border: 0,
  padding: 0,
  margin: 0,
  background: 'none',
  outline: 'none',
  textDecoration: 'none',

  ...(ownerState.hover && {
    cursor: 'pointer',

    '&:focus-visible': {
      '&, & + .ESTableRow-overlap': {
        '& .ESTableCell-content.ESTableCell-content': {
          backgroundColor: theme.palette.monoA.A50
        }
      }
    },

    '&:active': {
      '&, & + .ESTableRow-overlap': {
        '& .ESTableCell-content.ESTableCell-content': {
          backgroundColor: theme.palette.monoA.A100
        }
      }
    }
  })
}));

const TableRowOverlap = styled('div', {
  name: 'ESTableRow',
  slot: 'Overlap',
  overridesResolver: (props, styles) => styles.overlap
})(() => ({
  display: 'grid',
  gridAutoRows: 'max-content',
  minWidth: '100%',
  height: 0
}));

export const TableRow = forwardRef((inProps: TableRowProps, ref) => {
  const { children, className, sx, selected, hover, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTableRow'
  });

  const { columns } = useTableContext();

  const { content, overlap, overlapCount } = useMemo(() => {
    const content: Array<JSX.Element | null> = [];
    const overlap: Array<JSX.Element | null> = [];
    let overlapCount = 0;

    Children.forEach(children, (child) => {
      if (!isValidElement(child) || child.props.overlap) {
        content.push(null);
      } else {
        content.push(child);
      }
    });

    Children.forEach(children, (child) => {
      if (!isValidElement(child) || !child.props.overlap) {
        overlap.push(null);
      } else {
        overlap.push(child);
        overlapCount += 1;
      }
    });

    merge(content);
    merge(overlap);

    return { content, overlap, overlapCount };
  }, [children]);

  const ownerState = { selected, hover, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TableRowRoot ownerState={ownerState} className={clsx(classes.root, className)} sx={sx}>
      <TableRowContent
        ref={ref}
        ownerState={ownerState}
        className={classes.content}
        style={{ gridTemplateColumns: columns.join(' ') }}
        role="row"
        {...props}
      >
        {content}
      </TableRowContent>
      {!!overlapCount && (
        <TableRowOverlap className={classes.overlap} style={{ gridTemplateColumns: columns.join(' ') }} role="row">
          {overlap}
        </TableRowOverlap>
      )}
    </TableRowRoot>
  );
}) as OverridableComponent<TableRowTypeMap>;

// eslint-disable-next-line
// @ts-ignore
TableRow.displayName = 'TableRow';
