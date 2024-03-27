import { EmptyStateProps } from './EmptyState.types';

import clsx from 'clsx';
import { getEmptyStateUtilityClass } from './EmptyState.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type EmptyStateOwnerState = {
  classes?: EmptyStateProps['classes'];
  size?: EmptyStateProps['size'];
};

const useUtilityClasses = (ownerState: EmptyStateOwnerState) => {
  const { classes, size } = ownerState;

  const slots = {
    root: ['root', size],
    icon: ['icon'],
    text: ['text'],
    heading: ['heading'],
    subheading: ['subheading'],
    children: ['children']
  };

  return composeClasses(slots, getEmptyStateUtilityClass, classes);
};

const EmptyStateRoot = styled('div', {
  name: 'ESEmptyState',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { size }
    } = props;

    return [styles.root, styles[size]];
  }
})(() => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center'
}));

const EmptyStateIcon = styled('div', {
  name: 'ESEmptyState',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon
})<{ ownerState: EmptyStateOwnerState }>(({ theme, ownerState }) => ({
  display: 'flex',
  color: theme.vars.palette.monoA.A150,
  marginBottom: ownerState.size === 'medium' ? '12px' : '8px'
}));

const EmptyStateText = styled('div', {
  name: 'ESEmptyState',
  slot: 'Text',
  overridesResolver: (props, styles) => styles.text
})<{ ownerState: EmptyStateOwnerState }>(({ ownerState }) => ({
  '&:not(:last-child)': {
    marginBottom: ownerState.size === 'medium' ? '12px' : '8px'
  }
}));

const EmptyStateHeading = styled(Typography, {
  name: 'ESEmptyState',
  slot: 'Heading',
  overridesResolver: (props, styles) => styles.heading
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A900,
  display: 'block',
  '&:not(:last-child)': {
    marginBottom: '2px'
  }
}));

const EmptyStateSubheading = styled(Typography, {
  name: 'ESEmptyState',
  slot: 'Subheading',
  overridesResolver: (props, styles) => styles.subheading
})(({ theme }) => ({
  color: theme.vars.palette.monoA.A600,
  display: 'block'
}));

const EmptyStateChildren = styled('div', {
  name: 'ESEmptyState',
  slot: 'Children',
  overridesResolver: (props, styles) => styles.children
})(() => ({
  padding: '8px 0'
}));

/**
 * This component is a placeholder to use on pages without content.
 */
export const EmptyState = (inProps: EmptyStateProps) => {
  const {
    children,
    className,
    sx,
    size = 'medium',
    icon,
    heading,
    subheading,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESEmptyState'
  });

  const ownerState = { size, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <EmptyStateRoot className={clsx(classes.root, className)} sx={sx}>
      {!!icon && (
        <EmptyStateIcon className={classes.icon} data-testid="icon" ownerState={ownerState}>
          {icon}
        </EmptyStateIcon>
      )}
      <EmptyStateText className={classes.text} ownerState={ownerState}>
        {!!heading && (
          <EmptyStateHeading className={classes.heading} variant={size === 'medium' ? 'body200' : 'body100'}>
            {heading}
          </EmptyStateHeading>
        )}
        {!!subheading && (
          <EmptyStateSubheading className={classes.subheading} variant="caption">
            {subheading}
          </EmptyStateSubheading>
        )}
      </EmptyStateText>
      {!!children && <EmptyStateChildren className={classes.children}>{children}</EmptyStateChildren>}
    </EmptyStateRoot>
  );
};
