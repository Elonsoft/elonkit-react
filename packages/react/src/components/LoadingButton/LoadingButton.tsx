import { forwardRef } from 'react';

import { LoadingButtonOwnProps, LoadingButtonTypeMap } from './LoadingButton.types';

import { getLoadingButtonUtilityClass, loadingButtonClasses } from './LoadingButton.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Button, { buttonClasses, ButtonProps, ExtendButton } from '@mui/material/Button';
import { unstable_useId as useId } from '@mui/utils';

import { SpinnerFadingDots, spinnerFadingDotsClasses } from '../Spinner';

type LoadingButtonOwnerState = {
  classes?: LoadingButtonOwnProps['classes'];
  loading?: LoadingButtonOwnProps['loading'];
};

const useUtilityClasses = (ownerState: LoadingButtonOwnerState) => {
  const { loading, classes } = ownerState;

  const slots = {
    root: ['root', loading && 'loading'],
    loadingIndicator: ['loadingIndicator']
  };

  const composedClasses = composeClasses(slots, getLoadingButtonUtilityClass, classes);

  return {
    // forward the outlined, color, etc. classes to Button
    ...classes,
    ...composedClasses
  };
};

const rootShouldForwardProp = (prop: string) =>
  prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as' && prop !== 'classes';

const LoadingButtonRoot = styled(Button, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop as string) || prop === 'classes',
  name: 'ESLoadingButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { loading }
    } = props;
    return [styles.root, loading && styles.loading];
  }
})(() => ({
  [`&.${loadingButtonClasses.loading}.${buttonClasses.root}.${buttonClasses.disabled}`]: {
    color: 'transparent'
  }
}));

const LoadingButtonLoadingIndicator = styled('span', {
  name: 'ESLoadingButton',
  slot: 'LoadingIndicator',
  overridesResolver: (props, styles) => styles.loadingIndicator
})(({ theme }) => ({
  position: 'absolute',
  visibility: 'visible',
  display: 'flex',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',

  [`& .${spinnerFadingDotsClasses.root}`]: {
    color: theme.vars.palette.monoA.A500
  }
}));

export const getLoadingButtonSpinnerSize = (size: ButtonProps['size']) => {
  switch (size) {
    case '16':
      return 10;
    case '20':
      return 12;
    case '24':
    case '32':
      return 16;
    default:
      return 24;
  }
};

/** LoadingButton shows loading state and disables interactions. */
export const LoadingButton = forwardRef(function LoadingButton(inProps, ref) {
  const {
    children,
    classes: inClasses,
    id: inId,
    disabled = false,
    loading = false,
    loadingIndicator: loadingIndicatorProp,
    ...props
  } = useThemeProps({ props: inProps, name: 'ESLoadingButton' });

  const id = useId(inId);
  const loadingIndicator = loadingIndicatorProp ?? (
    <SpinnerFadingDots aria-labelledby={id} size={getLoadingButtonSpinnerSize(props.size)} />
  );

  const ownerState = {
    classes: inClasses,
    loading
  };

  const classes = useUtilityClasses(ownerState);

  const loadingButtonLoadingIndicator = loading ? (
    <LoadingButtonLoadingIndicator className={classes.loadingIndicator}>
      {loadingIndicator}
    </LoadingButtonLoadingIndicator>
  ) : null;

  return (
    <LoadingButtonRoot ref={ref} disabled={disabled || loading} id={id} {...props} classes={classes}>
      {children}
      {loadingButtonLoadingIndicator}
    </LoadingButtonRoot>
  );
}) as ExtendButton<LoadingButtonTypeMap>;
