import { RibbonBadgeProps, RibbonBadgeTypeMap } from './RibbonBadge.types';

import clsx from 'clsx';
import { getRibbonBadgeUtilityClass, ribbonBadgeClasses } from './RibbonBadge.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { keyframes, useThemeProps } from '@mui/material/styles';
import { ButtonBase, capitalize, styled, touchRippleClasses } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

type RibbonBadgeOwnerState = {
  classes?: RibbonBadgeProps['classes'];
  color: NonNullable<RibbonBadgeProps['color']>;
  orientation: NonNullable<RibbonBadgeProps['orientation']>;
  clickable?: RibbonBadgeProps['clickable'];
};

const useUtilityClasses = (ownerState: RibbonBadgeOwnerState) => {
  const { classes, color, orientation, clickable } = ownerState;

  const slots = {
    root: ['root', clickable && 'clickable', `color${capitalize(color)}`, `orientation${capitalize(orientation)}`]
  };

  return composeClasses(slots, getRibbonBadgeUtilityClass, classes);
};

const BadgeRoot = styled(ButtonBase, {
  name: 'ESBadge',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color, orientation, clickable }
    } = props;

    return [
      styles.root,
      clickable && styles.clickable,
      styles[`colors${capitalize(color)}`],
      styles[`orientation${capitalize(orientation)}`]
    ];
  }
})(({ theme }) => ({
  ...theme.typography.caption,
  cursor: 'default',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 6px',
  boxSizing: 'border-box',
  position: 'relative',
  width: 'fit-content',

  '&:after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    bottom: '-5.5px',
    borderStyle: `solid`,
    borderWidth: '3px 4.5px',
    width: '8px',
    height: '5px'
  },

  [`&.${ribbonBadgeClasses.clickable}`]: {
    cursor: 'pointer'
  },

  [`&.${ribbonBadgeClasses.root}`]: {
    [`& .${touchRippleClasses.root}`]: {
      transitionDuration: `${theme.transitions.duration.short}ms`
    }
  },

  [`& .${touchRippleClasses.rippleVisible}`]: {
    animationName: `${enterKeyframe} !important`,
    opacity: '1 !important'
  },

  [`&.${ribbonBadgeClasses.colorSuccess}`]: {
    ...theme.mixins.button({
      background: theme.palette.success[300],
      color: theme.palette.monoB[500],
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    }),
    '&:after': {
      borderColor: theme.palette.success[400]
    }
  },

  [`&.${ribbonBadgeClasses.colorMonoB500}`]: {
    ...theme.mixins.button({
      background: theme.palette.monoB[500],
      color: theme.palette.monoA.A800,
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    }),
    '&:after': {
      borderColor: theme.palette.monoB.A800
    }
  },
  [`&.${ribbonBadgeClasses.colorPrimary}`]: {
    ...theme.mixins.button({
      background: theme.palette.primary[300],
      color: theme.palette.monoB[500],
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    }),
    '&:after': {
      borderColor: theme.palette.primary[400]
    }
  },
  [`&.${ribbonBadgeClasses.colorSecondary}`]: {
    ...theme.mixins.button({
      background: theme.palette.secondary[300],
      color: theme.palette.monoA.A800,
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    }),
    '&:after': {
      borderColor: theme.palette.secondary[400]
    }
  },
  [`&.${ribbonBadgeClasses.colorWarning}`]: {
    ...theme.mixins.button({
      background: theme.palette.warning[300],
      color: theme.palette.monoB[500],
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    }),
    '&:after': {
      borderColor: theme.palette.warning[400]
    }
  },
  [`&.${ribbonBadgeClasses.colorError}`]: {
    ...theme.mixins.button({
      background: theme.palette.error[300],
      color: theme.palette.monoB[500],
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    }),
    '&:after': {
      borderColor: theme.palette.error[400]
    }
  },
  [`&.${ribbonBadgeClasses.colorInfo}`]: {
    ...theme.mixins.button({
      background: theme.palette.info[300],
      color: theme.palette.monoB[500],
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    }),
    '&:after': {
      borderColor: theme.palette.info[400]
    }
  },

  [`&.${ribbonBadgeClasses.orientationLeft}`]: {
    borderRadius: '4px 4px 4px 0px',

    '&:after': {
      left: 0,
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent'
    }
  },

  [`&.${ribbonBadgeClasses.orientationRight}`]: {
    borderRadius: '4px 4px 0px 4px',

    '&:after': {
      right: 0,
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent'
    }
  }
}));

export const RibbonBadge: OverridableComponent<RibbonBadgeTypeMap> = (inProps: RibbonBadgeProps) => {
  const {
    className,
    classes: inClasses,
    color = 'success',
    orientation = 'left',
    clickable,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESRibbonBadge'
  });

  const component = clickable ? ButtonBase : 'div';

  const ownerState = {
    classes: inClasses,
    color,
    orientation,
    clickable
  };

  const classes = useUtilityClasses(ownerState);

  return <BadgeRoot as={component} className={clsx(classes.root, className)} {...props} />;
};
