import { AuthLinkProps, AuthLinkTypeMap } from './AuthLink.types';

import clsx from 'clsx';
import { getAuthLinkUtilityClass } from './AuthLink.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { Link } from '../../Link';

type AuthLinkOwnerState = {
  classes?: AuthLinkProps['classes'];
};

const useUtilityClasses = (ownerState: AuthLinkOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getAuthLinkUtilityClass, classes);
};

const AuthLinkRoot = styled(Link, {
  name: 'ESAuthLink',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  marginTop: '16px',
})) as typeof Link;

export const AuthLink: OverridableComponent<AuthLinkTypeMap> = (inProps: AuthLinkProps) => {
  const {
    children,
    className,
    classes: inClasses,
    sx,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAuthLink',
  });

  const ownerState = { classes: inClasses };
  const classes = useUtilityClasses(ownerState);

  return (
    <AuthLinkRoot
      className={clsx(classes.root, className)}
      color="monoA.A600"
      sx={sx}
      underline="hover"
      variant="body100"
      {...props}
    >
      {children}
    </AuthLinkRoot>
  );
};
