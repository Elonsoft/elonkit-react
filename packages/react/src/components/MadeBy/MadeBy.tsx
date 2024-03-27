import { MadeByProps, MadeByTypeMap } from './MadeBy.types';

import clsx from 'clsx';
import { getMadeByUtilityClass, madeByClasses } from './MadeBy.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { useThemeProps } from '@mui/material/styles';
import { styled } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { IconElonsoft } from '../../icons';
import { svgIconClasses } from '../SvgIcon';

type MadeByOwnerState = {
  classes?: MadeByProps['classes'];
  clickable?: MadeByProps['clickable'];
};

const useUtilityClasses = (ownerState: MadeByOwnerState) => {
  const { classes, clickable } = ownerState;

  const slots = {
    root: ['root', clickable && 'clickable']
  };

  return composeClasses(slots, getMadeByUtilityClass, classes);
};

const MadeByRoot = styled('div', {
  name: 'ESBadge',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { clickable }
    } = props;

    return [styles.root, clickable && styles.clickable];
  }
})(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.vars.palette.monoA.A500,
  cursor: 'default',
  display: 'flex',
  gap: '2px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'fit-content',

  [`& .${svgIconClasses.root}`]: {
    color: theme.vars.palette.monoA.A300
  },

  [`&.${madeByClasses.clickable}`]: {
    cursor: 'pointer',

    [`&:hover .${svgIconClasses.root}, &:focus-visible .${svgIconClasses.root}`]: {
      color: theme.vars.palette.monoA.A400
    },
    [`&:active .${svgIconClasses.root}`]: {
      color: theme.vars.palette.monoA.A500
    }
  }
}));

/** The MadeBy component displays name of the developer. */

export const MadeBy: OverridableComponent<MadeByTypeMap> = (inProps: MadeByProps) => {
  const {
    className,
    classes: inClasses,
    clickable: inClickable,
    onClick,
    text,
    icon = <IconElonsoft height="19" width="96px" />,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESMadeBy'
  });

  const clickable = inClickable !== false && onClick ? true : inClickable;

  const ownerState = {
    classes: inClasses,
    clickable
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <MadeByRoot className={clsx(classes.root, className)} onClick={onClick} {...props}>
      {text}
      {icon}
    </MadeByRoot>
  );
};
