import { useEffect, useRef, useState } from 'react';

import { FileIconProps } from './FileIcon.types';

import clsx from 'clsx';
import { getFileIconUtilityClass } from './FileIcon.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { FileIconIcon } from './icons';

type FileIconOwnerState = {
  classes?: FileIconProps['classes'];
};

const useUtilityClasses = (ownerState: FileIconOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    children: ['children'],
    icon: ['icon']
  };

  return composeClasses(slots, getFileIconUtilityClass, classes);
};

const FileIconRoot = styled('div', {
  name: 'ESFileIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A500,
  display: 'flex',
  fontWeight: 700,
  height: 'auto',
  justifyContent: 'center',
  position: 'relative'
}));

const FileIconChildren = styled('div', {
  name: 'ESFileIcon',
  slot: 'Children',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  inset: 0,
  justifyContent: 'center',
  position: 'absolute'
}));

/**
 * This component is for displaying file extensions.
 */
export const FileIcon = (inProps: FileIconProps) => {
  const {
    className,
    sx,
    icon = FileIconIcon,
    width = 36,
    height = 48,
    children,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESFileIcon'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  const iconRef = useRef<SVGPathElement>(null);
  const rootIconRef = useRef<HTMLDivElement>(null);
  const [paddingTop, setPaddingTop] = useState(0);
  const Icon = icon;

  useEffect(() => {
    if (iconRef.current && rootIconRef.current) {
      const iconHeight = iconRef.current.getBoundingClientRect().height;
      const iconTop = iconRef.current.getBoundingClientRect().top;
      const rootIconTop = rootIconRef.current.getBoundingClientRect().top;
      setPaddingTop(iconHeight + (iconTop - rootIconTop));
    }
  }, [iconRef.current, rootIconRef.current, width, height]);

  return (
    <FileIconRoot ref={rootIconRef} className={clsx(classes.root, className)} sx={sx}>
      <Icon ref={iconRef} className={classes.icon} height={height} width={width} />
      {!!children && (
        <FileIconChildren className={classes.children} style={{ paddingTop: `${Math.round(paddingTop)}px` }}>
          {children}
        </FileIconChildren>
      )}
    </FileIconRoot>
  );
};
