import { FC } from 'react';

import { FileInfoContentProps } from './FileInfoContent.types';

import clsx from 'clsx';
import { getFileInfoContentUtilityClass } from './FileInfoContent.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type FileInfoContentOwnerState = {
  classes?: FileInfoContentProps['classes'];
};

const useUtilityClasses = (ownerState: FileInfoContentOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getFileInfoContentUtilityClass, classes);
};

const FileInfoContentRoot = styled('div', {
  name: 'ESFileInfoName',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  marginLeft: '12px'
}));

export const FileInfoContent: FC<FileInfoContentProps> = (inProps) => {
  const { children, className, ...props } = useThemeProps({ props: inProps, name: 'ESFileInfoContent' });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return <FileInfoContentRoot className={clsx(classes.root, className)}>{children}</FileInfoContentRoot>;
};
