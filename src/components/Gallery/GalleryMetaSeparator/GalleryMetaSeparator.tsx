import { GalleryMetaSeparatorProps } from './GalleryMetaSeparator.types';

import clsx from 'clsx';
import { getGalleryMetaSeparatorUtilityClass } from './GalleryMetaSeparator.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type GalleryMetaSeparatorOwnerState = {
  classes?: GalleryMetaSeparatorProps['classes'];
};

const useUtilityClasses = (ownerState: GalleryMetaSeparatorOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getGalleryMetaSeparatorUtilityClass, classes);
};

const GalleryMetaSeparatorRoot = styled('div', {
  name: 'ESGalleryMetaSeparator',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { isActive }
    } = props;
    return [styles.root, isActive && styles.active];
  }
})<{ ownerState: GalleryMetaSeparatorOwnerState }>(({ theme }) => ({
  margin: '0 8px',
  width: 3,
  height: 3,
  borderRadius: '50%',
  backgroundColor: theme.palette.white.A700,
  flexShrink: 0
}));

export const GalleryMetaSeparator = (inProps: GalleryMetaSeparatorProps) => {
  const { className, ...props } = useThemeProps({
    props: inProps,
    name: 'ESGalleryMetaSeparator'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return <GalleryMetaSeparatorRoot className={clsx(classes.root, className)} ownerState={ownerState} />;
};
