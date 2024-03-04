import { PageHGroupHeadingProps } from './PageHGroupHeading.types';

import clsx from 'clsx';
import { getPageHGroupHeadingUtilityClass } from './PageHGroupHeading.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { TooltipEllipsis, TooltipEllipsisProps } from '../../../components/TooltipEllipsis';

type PageHGroupHeadingOwnerState = {
  classes?: PageHGroupHeadingProps['classes'];
  maxLines: PageHGroupHeadingProps['maxLines'];
};

const useUtilityClasses = (ownerState: PageHGroupHeadingOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    tooltip: ['tooltip']
  };

  return composeClasses(slots, getPageHGroupHeadingUtilityClass, classes);
};

const PageHGroupHeadingRoot = styled('div', {
  name: 'ESPageHGroupHeading',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px'
}));

const PageHGroupHeadingTitle = styled('h1', {
  name: 'ESPageHGroupHeading',
  slot: 'Title',
  overridesResolver: (props, styles) => styles.title
})<{ ownerState: PageHGroupHeadingOwnerState }>(({ theme, ownerState }) => ({
  ...theme.typography.h2,
  alignSelf: 'center',
  padding: 0,
  maxHeight: '100%',
  margin: 0,
  color: theme.palette.monoA.A900,
  wordBreak: 'break-word',
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: ownerState.maxLines,
  WebkitBoxOrient: 'vertical'
}));

const PageHGroupHeadingTooltip = styled(
  ({ className, ...props }: TooltipEllipsisProps) => <TooltipEllipsis {...props} classes={{ popper: className }} />,
  {
    name: 'ESBreadcrumbs',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => styles.tooltip
  }
)(() => ({}));

export const PageHGroupHeading = (inProps: PageHGroupHeadingProps) => {
  const {
    className,
    children,
    sx,
    maxLines = 1,
    endAdornment,
    TooltipProps,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESPageHGroupHeading'
  });

  const ownerState = { ...props, maxLines };
  const classes = useUtilityClasses(ownerState);

  return (
    <PageHGroupHeadingRoot>
      <PageHGroupHeadingTooltip
        arrow
        disableInteractive
        className={classes.tooltip}
        placement="top"
        title={children || false}
        {...TooltipProps}
      >
        {({ ref }) => (
          <PageHGroupHeadingTitle
            ref={ref as React.RefObject<HTMLHeadingElement>}
            className={clsx(classes.root, className)}
            ownerState={ownerState}
            sx={sx}
          >
            {children}
          </PageHGroupHeadingTitle>
        )}
      </PageHGroupHeadingTooltip>
      {endAdornment}
    </PageHGroupHeadingRoot>
  );
};
