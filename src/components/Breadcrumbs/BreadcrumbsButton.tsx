import { BreadcrumbsProps } from './Breadcrumbs.types';

import { getBreadcrumbsUtilityClass } from './Breadcrumbs.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

type BreadcrumbsOwnerState = {
  classes?: BreadcrumbsProps['classes'];
};

const useUtilityClasses = (ownerState: BreadcrumbsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    button: ['button']
  };

  return composeClasses(slots, getBreadcrumbsUtilityClass, classes);
};

const BreadcrumbsButtonRoot = styled(Button, {
  name: 'ESBreadcrumbs',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})(({ theme }) => ({
  '&.MuiButton-root': {
    ...theme.typography.caption,
    textTransform: 'none',
    borderRadius: '4px',
    padding: '0 4px',
    color: theme.palette.monoA.A900,
    '&:hover': {
      color: theme.palette.monoA.A900
    },
    '&.Mui-focusVisible': {
      backgroundColor: theme.palette.action.focus
    }
  }
}));

export const BreadcrumbsButton: typeof Button = ({ ...props }) => {
  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <BreadcrumbsButtonRoot className={classes.button} disableFocusRipple color="monoA" size="24" {...props}>
      {props.children}
    </BreadcrumbsButtonRoot>
  );
};
