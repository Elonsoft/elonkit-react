import { RibbonBadgeProps, RibbonBadgeTypeMap } from './RibbonBadge.types';

import clsx from 'clsx';
import { getRibbonBadgeUtilityClass, ribbonBadgeClasses } from './RibbonBadge.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { useThemeProps } from '@mui/material/styles';
import { capitalize, styled } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { ButtonBase } from '../ButtonBase';
import { touchRippleClasses } from '../TouchRipple';

type RibbonBadgeOwnerState = {
  classes?: RibbonBadgeProps['classes'];
  color: NonNullable<RibbonBadgeProps['color']>;
  orientation: NonNullable<RibbonBadgeProps['orientation']>;
  clickable?: RibbonBadgeProps['clickable'];
};

const useUtilityClasses = (ownerState: RibbonBadgeOwnerState) => {
  const { classes, color, orientation, clickable } = ownerState;

  const slots = {
    root: ['root', clickable && 'clickable', `color${capitalize(color)}`, `orientation${capitalize(orientation)}`],
  };

  return composeClasses(slots, getRibbonBadgeUtilityClass, classes);
};

const BadgeRoot = styled(ButtonBase, {
  name: 'ESBadge',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { color, orientation, clickable },
    } = props;

    return [
      styles.root,
      clickable && styles.clickable,
      styles[`colors${capitalize(color)}`],
      styles[`orientation${capitalize(orientation)}`],
    ];
  },
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
  overflow: 'visible',

  '&:after': {
    content: "''",
    display: 'block',
    position: 'absolute',
    bottom: '-5px',
    borderStyle: `solid`,
    borderWidth: '2.5px 4px',
    width: '8px',
    height: '5px',
  },

  [`&.${ribbonBadgeClasses.root}`]: {
    [`& .${touchRippleClasses.root}`]: {
      display: 'none',
    },
  },

  [`&.${ribbonBadgeClasses.clickable}`]: {
    cursor: 'pointer',
    [`&.${ribbonBadgeClasses.root}`]: {
      [`& .${touchRippleClasses.root}`]: {
        display: 'block',
      },
    },
  },

  [`&.${ribbonBadgeClasses.colorSuccess}`]: {
    '--background': theme.vars.palette.success[300],
    '--text': theme.vars.palette.monoB[500],
    '--hovered': theme.vars.palette.monoA.A50,
    '--pressed': theme.vars.palette.monoA.A150,
    '--focused': theme.vars.palette.monoA.A200,

    '&:after': {
      borderColor: theme.vars.palette.success[400],
    },
  },

  [`&.${ribbonBadgeClasses.colorMonoB500}`]: {
    '--background': theme.vars.palette.monoB[500],
    '--text': theme.vars.palette.monoA[500],
    '--hovered': theme.vars.palette.monoA.A50,
    '--focused': theme.vars.palette.monoA.A200,
    '--pressed': theme.vars.palette.monoA.A150,

    '&:after': {
      borderColor: theme.vars.palette.monoB.A800,
    },
  },
  [`&.${ribbonBadgeClasses.colorPrimary}`]: {
    '--background': theme.vars.palette.primary[300],
    '--text': theme.vars.palette.monoB[500],
    '--hovered': theme.vars.palette.monoA.A50,
    '--focused': theme.vars.palette.monoA.A200,
    '--pressed': theme.vars.palette.monoA.A150,

    '&:after': {
      borderColor: theme.vars.palette.primary[400],
    },
  },
  [`&.${ribbonBadgeClasses.colorSecondary}`]: {
    '--background': theme.vars.palette.secondary[300],
    '--text': theme.vars.palette.black[500],
    '--hovered': theme.vars.palette.monoA.A50,
    '--focused': theme.vars.palette.monoA.A200,
    '--pressed': theme.vars.palette.monoA.A150,

    '&:after': {
      borderColor: theme.vars.palette.secondary[400],
    },
  },
  [`&.${ribbonBadgeClasses.colorWarning}`]: {
    '--background': theme.vars.palette.warning[300],
    '--text': theme.vars.palette.monoB[500],
    '--hovered': theme.vars.palette.monoA.A50,
    '--focused': theme.vars.palette.monoA.A200,
    '--pressed': theme.vars.palette.monoA.A150,

    '&:after': {
      borderColor: theme.vars.palette.warning[400],
    },
  },
  [`&.${ribbonBadgeClasses.colorError}`]: {
    '--background': theme.vars.palette.error[300],
    '--text': theme.vars.palette.monoB[500],
    '--hovered': theme.vars.palette.monoA.A50,
    '--focused': theme.vars.palette.monoA.A200,
    '--pressed': theme.vars.palette.monoA.A150,

    '&:after': {
      borderColor: theme.vars.palette.error[400],
    },
  },
  [`&.${ribbonBadgeClasses.colorInfo}`]: {
    '--background': theme.vars.palette.info[300],
    '--text': theme.vars.palette.monoB[500],
    '--hovered': theme.vars.palette.monoA.A50,
    '--focused': theme.vars.palette.monoA.A200,
    '--pressed': theme.vars.palette.monoA.A150,

    '&:after': {
      borderColor: theme.vars.palette.info[400],
    },
  },

  '&:focus': {
    outline: `2px solid ${theme.vars.palette.monoA[500]}`,
    outlineOffset: '-2px',
  },

  '&:focus-visible': {
    outline: `2px solid ${theme.vars.palette.monoA[500]}`,
    outlineOffset: '-2px',

    '&:after': {
      borderColor: `${theme.vars.palette.monoA[500]}`,
    },
  },

  [`&.${ribbonBadgeClasses.orientationLeft}`]: {
    borderRadius: '4px 4px 4px 0px',

    [`&.${ribbonBadgeClasses.root}`]: {
      [`& .${touchRippleClasses.root}`]: {
        display: 'block',
        borderRadius: '4px 4px 4px 0px',
      },
    },

    '&:after': {
      left: 0,
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
    },
  },

  [`&.${ribbonBadgeClasses.orientationRight}`]: {
    borderRadius: '4px 4px 0px 4px',

    [`&.${ribbonBadgeClasses.root}`]: {
      [`& .${touchRippleClasses.root}`]: {
        display: 'block',
        borderRadius: '4px 4px 0px 4px',
      },
    },

    '&:after': {
      right: 0,
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
    },
  },
})) as typeof ButtonBase;

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
    name: 'ESRibbonBadge',
  });

  const component = clickable ? ButtonBase : 'div';

  const ownerState = {
    classes: inClasses,
    color,
    orientation,
    clickable,
  };

  const classes = useUtilityClasses(ownerState);

  return <BadgeRoot className={clsx(classes.root, className)} component={component} {...props} />;
};
