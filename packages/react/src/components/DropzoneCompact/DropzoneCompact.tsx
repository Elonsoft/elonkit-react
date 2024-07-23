import { forwardRef } from 'react';

import { DropzoneCompactProps } from './DropzoneCompact.types';

import clsx from 'clsx';
import { dropzoneCompactClasses, getDropzoneCompactUtilityClass } from './DropzoneCompact.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { duration, styled, useThemeProps } from '@mui/material/styles';
import { Fade, Typography } from '@mui/material';

type DropzoneCompactOwnerState = {
  classes?: DropzoneCompactProps['classes'];
  isDragOver: DropzoneCompactProps['isDragOver'];
  isDragging: DropzoneCompactProps['isDragging'];
  visibleOnDrag: DropzoneCompactProps['visibleOnDrag'];
};

const useUtilityClasses = (ownerState: DropzoneCompactOwnerState) => {
  const { classes, isDragOver, isDragging, visibleOnDrag } = ownerState;

  const slots = {
    root: ['root', isDragOver && 'dragOver', isDragging && 'dragging', visibleOnDrag && 'visibleOnDrag'],
  };

  return composeClasses(slots, getDropzoneCompactUtilityClass, classes);
};

const transitionDuration = { enter: duration.enteringScreen, exit: duration.leavingScreen };

const DropzoneCompactRoot = styled(Typography, {
  name: 'ESDropzoneCompact',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { isDragOver, isDragging, visibleOnDrag },
    } = props;
    return [
      styles.root,
      isDragOver && styles.dragOver,
      isDragging && styles.isDragging,
      visibleOnDrag && styles.visibleOnDrag,
    ];
  },
})(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 12,
  outline: `1px dashed ${theme.vars.palette.monoA.A300}`,
  outlineOffset: -1,
  borderRadius: 4,
  backgroundColor: theme.vars.palette.monoA.A25,
  transitionDuration: `${theme.transitions.duration.short}ms`,
  transitionProperty: 'background-color',
  transitionTimingFunction: theme.transitions.easing.easeInOut,

  [`&.${dropzoneCompactClasses.dragOver}`]: {
    backgroundColor: theme.vars.palette.monoA.A50,
  },
}));

/**
 * This component allows to create droppable area when using dnd.
 */
export const DropzoneCompact = forwardRef(function DropzoneCompact(inProps: DropzoneCompactProps, ref) {
  const {
    className,
    isDragOver,
    isDragging,
    visibleOnDrag = false,
    TransitionProps,
    sx,
    children,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESDropzoneCompact',
  });

  const ownerState = { ...props, isDragOver, isDragging, visibleOnDrag };
  const classes = useUtilityClasses(ownerState);

  const content = (
    <DropzoneCompactRoot
      ref={ref as any}
      className={clsx(classes.root, className)}
      sx={sx}
      {...props}
      color="monoA.A550"
      variant="caption"
    >
      {children}
    </DropzoneCompactRoot>
  );

  return visibleOnDrag ? (
    <Fade in={isDragging} timeout={transitionDuration} {...TransitionProps}>
      <div>{content}</div>
    </Fade>
  ) : (
    content
  );
});
