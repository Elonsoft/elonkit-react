import { FC } from 'react';

import clsx from 'clsx';
import { styled, useThemeProps } from '@material-ui/core/styles';
import { unstable_composeClasses as composeClasses } from '@material-ui/unstyled';
import { getTableActionsUtilityClass } from './TableActions.classes';

import { TableActionsProps } from './TableActions.types';

import Typography from '@material-ui/core/Typography';

type TableActionsStyleProps = {
  classes?: TableActionsProps['classes'];
};

const useUtilityClasses = (styleProps: TableActionsStyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    text: ['text'],
    children: ['children']
  };

  return composeClasses(slots, getTableActionsUtilityClass, classes);
};

const TableActionsRoot = styled('div', {
  name: 'ESTableActions',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.secondary.A100,
  display: 'flex',
  padding: 8,
  paddingLeft: 24
}));

const TableActionsText = styled(Typography, {
  name: 'ESTableActions',
  slot: 'Text',
  overridesResolver: (props, styles) => styles.text
})(({ theme }) => ({
  color: theme.palette.monoA.A900,
  fontWeight: 500,
  marginRight: 'auto'
}));

const TableActionsChildren = styled('div', {
  name: 'ESTableActions',
  slot: 'Children',
  overridesResolver: (props, styles) => styles.children
})(({ theme }) => ({
  alignItems: 'center',
  alignSelf: 'stretch',
  display: 'grid',
  gap: 2,
  gridAutoFlow: 'column',

  '& .MuiIconButton-root': {
    color: theme.palette.monoA.A700
  },
  '& .MuiDivider-root': {
    backgroundColor: theme.palette.monoA.A200,
    margin: '0 6px'
  }
}));

export const TableActions: FC<TableActionsProps> = (inProps) => {
  const { className, label, count, children, ...props } = useThemeProps({
    props: inProps,
    name: 'ESTableActions'
  });

  const styleProps = { ...props };
  const classes = useUtilityClasses(styleProps);

  return (
    <TableActionsRoot className={clsx(classes.root, className)}>
      <TableActionsText className={classes.text} variant="body200">
        {label} {count}
      </TableActionsText>
      <TableActionsChildren className={classes.children}>{children}</TableActionsChildren>
    </TableActionsRoot>
  );
};
