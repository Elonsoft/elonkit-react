import { FileIconBadgeProps } from './FileIconBadge.types';

import clsx from 'clsx';
import { getFileIconBadgeUtilityClass } from './FileIconBadge.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type FileIconBadgeOwnerState = {
  classes?: FileIconBadgeProps['classes'];
  size: 'md' | 'sm';
};

const useUtilityClasses = (ownerState: FileIconBadgeOwnerState) => {
  const { classes, size } = ownerState;

  const slots = {
    root: ['root', size]
  };

  return composeClasses(slots, getFileIconBadgeUtilityClass, classes);
};

const FileIconBadgeRoot = styled(Typography, {
  name: 'ESFileIconBadge',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { size }
    } = props;
    return [styles.root, styles[size]];
  }
})<{ ownerState: FileIconBadgeOwnerState }>(({ theme, ownerState }) => ({
  alignSelf: 'flex-start',
  borderRadius: '4px',
  display: 'block',
  color: theme.vars.palette.monoB[500],
  left: '-5px',
  position: 'relative',
  textAlign: 'center',

  ...(ownerState.size === 'md' && {
    minWidth: '32px',
    padding: '1px 2px',
    top: '-3px'
  }),

  ...(ownerState.size === 'sm' && {
    minWidth: '30px',
    padding: '0 2px',
    top: '-2px'
  })
}));

export const FileIconBadge = (inProps: FileIconBadgeProps) => {
  const {
    className,
    children,
    sx,
    color,
    size = 'md',
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESFileIconBadge'
  });

  const ownerState = { ...props, size };
  const classes = useUtilityClasses(ownerState);

  return (
    <FileIconBadgeRoot
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      style={{ backgroundColor: color }}
      sx={sx}
      variant="mini100"
    >
      {children}
    </FileIconBadgeRoot>
  );
};
