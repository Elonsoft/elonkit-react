import { BadgeProps, BadgeTypeMap } from './Badge.types';

import clsx from 'clsx';
import { badgeClasses, getBadgeUtilityClass } from './Badge.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { useThemeProps } from '@mui/material/styles';
import { keyframes } from '@mui/system';
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

type BadgeOwnerState = {
  classes?: BadgeProps['classes'];
  color: NonNullable<BadgeProps['color']>;
  size: NonNullable<BadgeProps['size']>;
  clickable: BadgeProps['clickable'];
};

const useUtilityClasses = (ownerState: BadgeOwnerState) => {
  const { classes, color, size, clickable = false } = ownerState;

  const slots = {
    root: ['root', `color${capitalize(color)}`, `size${size}`, clickable && 'clickable']
  };

  return composeClasses(slots, getBadgeUtilityClass, classes);
};

const BadgeRoot = styled(ButtonBase, {
  name: 'ESBadge',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color, size, clickable }
    } = props;

    return [styles.root, styles[`colors${capitalize(color)}`], styles[`size${size}`], clickable && 'clickable'];
  }
})(({ theme }) => ({
  ...theme.typography.mini200,
  width: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Arial',
  cursor: 'default',
  pointerEvents: 'none',

  [`&.${badgeClasses.root}`]: {
    [`& .${touchRippleClasses.root}`]: {
      transitionDuration: `${theme.transitions.duration.short}ms`
    }
  },

  [`&.${badgeClasses.clickable}`]: {
    cursor: 'pointer',
    pointerEvents: 'auto'
  },

  [`& .${touchRippleClasses.rippleVisible}`]: {
    animationName: `${enterKeyframe} !important`,
    opacity: '1 !important'
  },

  [`&.${badgeClasses.colorMonoA}`]: {
    ...theme.mixins.button({
      background: theme.palette.monoA.A100,
      color: theme.palette.monoA.A600,
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    })
  },
  [`&.${badgeClasses.colorMonoB}`]: {
    ...theme.mixins.button({
      background: theme.palette.monoB.A300,
      color: theme.palette.monoB.A900,
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    })
  },
  [`&.${badgeClasses.colorMonoB500}`]: {
    ...theme.mixins.button({
      background: theme.palette.monoB[500],
      color: theme.palette.monoA.A700,
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    })
  },
  [`&.${badgeClasses.colorPrimary}`]: {
    ...theme.mixins.button({
      background: theme.palette.primary[300],
      color: theme.palette.monoB[500],
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    })
  },
  [`&.${badgeClasses.colorSecondary}`]: {
    ...theme.mixins.button({
      background: theme.palette.secondary[300],
      color: theme.palette.monoA.A800,
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    })
  },
  [`&.${badgeClasses.colorSuccess}`]: {
    ...theme.mixins.button({
      background: theme.palette.success[300],
      color: theme.palette.monoB[500],
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    })
  },
  [`&.${badgeClasses.colorWarning}`]: {
    ...theme.mixins.button({
      background: theme.palette.warning[300],
      color: theme.palette.monoB[500],
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    })
  },
  [`&.${badgeClasses.colorError}`]: {
    ...theme.mixins.button({
      background: theme.palette.error[300],
      color: theme.palette.monoB[500],
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    })
  },
  [`&.${badgeClasses.colorInfo}`]: {
    ...theme.mixins.button({
      background: theme.palette.info[300],
      color: theme.palette.monoB[500],
      hover: theme.palette.monoA.A50,
      focus: theme.palette.monoA.A200,
      active: theme.palette.monoA.A150
    })
  },

  [`&.${badgeClasses.size6}`]: {
    height: '6px',
    minWidth: '6px',
    padding: '3px',
    borderRadius: '3px',
    fontSize: 0
  },

  [`&.${badgeClasses.size8}`]: {
    height: '8px',
    minWidth: '8px',
    padding: '3px',
    borderRadius: '4px',
    fontSize: 0
  },

  [`&.${badgeClasses.size12}`]: {
    height: '12px',
    minWidth: '12px',
    padding: '3px',
    borderRadius: '6px',
    fontSize: 0
  },

  [`&.${badgeClasses.size14}`]: {
    height: '14px',
    minWidth: '14px',
    padding: '3px',
    borderRadius: '7px',
    ...theme.typography.mini100Bold
  },

  [`&.${badgeClasses.size16}`]: {
    height: '16px',
    minWidth: '16px',
    padding: '4px',
    borderRadius: '8px'
  },

  [`&.${badgeClasses.size20}`]: {
    height: '20px',
    minWidth: '20px',
    padding: '4px',
    borderRadius: '10px'
  },

  [`&.${badgeClasses.size24}`]: {
    height: '24px',
    minWidth: '24px',
    padding: '4px',
    borderRadius: '12px'
  }
}));

export const Badge: OverridableComponent<BadgeTypeMap> = (inProps: BadgeProps) => {
  const {
    className,
    classes: inClasses,
    color = 'monoA',
    size = '24',
    clickable = false,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESBadge'
  });

  const component = clickable ? ButtonBase : 'div';

  const ownerState = {
    classes: inClasses,
    color,
    size,
    clickable
  };

  const classes = useUtilityClasses(ownerState);

  return <BadgeRoot as={component} className={clsx(classes.root, className)} {...props} />;
};
