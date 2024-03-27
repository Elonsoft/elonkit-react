import { forwardRef, memo } from 'react';

import { TableRowProps, TableRowTypeMap } from './TableRow.types';

import clsx from 'clsx';
import { getTableRowUtilityClass, tableRowClasses } from './TableRow.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { useTableContext } from '../Table.context';
import { tableCellClasses } from '../TableCell';

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

const TableRowRoot = styled('div', {
  name: 'ESTableRow',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [styles.root, ownerState.hover && styles.hover, ownerState.selected && styles.selected];
  }
})<{ ownerState: TableRowOwnerState }>(({ theme, ownerState }) => ({
  ...(ownerState.selected && {
    [`& .${tableCellClasses.container}`]: {
      backgroundColor: theme.vars.palette.secondary.A100
    }
  }),

  ...(ownerState.hover && {
    '&:hover': {
      [`& .${tableCellClasses.content}`]: {
        backgroundColor: theme.vars.palette.monoA.A50
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
      [`&, & + .${tableRowClasses.overlap}`]: {
        [`& .${tableCellClasses.content}.${tableCellClasses.content}`]: {
          backgroundColor: theme.vars.palette.monoA.A50
        }
      }
    },

    '&:active': {
      [`&, & + .${tableRowClasses.overlap}`]: {
        [`& .${tableCellClasses.content}.${tableCellClasses.content}`]: {
          backgroundColor: theme.vars.palette.monoA.A100
        }
      }
    }
  })
}));

export const TableRow = memo(
  forwardRef((inProps: TableRowProps, ref) => {
    const { children, className, sx, selected, hover, ...props } = useThemeProps({
      props: inProps,
      name: 'ESTableRow'
    });

    const { columns } = useTableContext();

    const ownerState = { selected, hover, ...props };
    const classes = useUtilityClasses(ownerState);

    return (
      <TableRowRoot className={clsx(classes.root, className)} ownerState={ownerState} sx={sx}>
        <TableRowContent
          ref={ref}
          className={classes.content}
          ownerState={ownerState}
          role="row"
          style={{ gridTemplateColumns: columns.join(' ') }}
          {...props}
        >
          {children}
        </TableRowContent>
      </TableRowRoot>
    );
  })
) as OverridableComponent<TableRowTypeMap>;

// eslint-disable-next-line
// @ts-ignore
TableRow.displayName = 'TableRow';
