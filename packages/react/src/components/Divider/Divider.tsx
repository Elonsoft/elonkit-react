import { DividerProps } from './Divider.types';

import clsx from 'clsx';
import { dividerClasses, getDividerUtilityClass } from './Divider.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize } from '@mui/material/utils';

type DividerOwnerState = {
  classes?: DividerProps['classes'];
  color: NonNullable<DividerProps['color']>;
  width: NonNullable<DividerProps['width']>;
  orientation: NonNullable<DividerProps['orientation']>;
  textAlign: NonNullable<DividerProps['textAlign']>;
  flexItem: DividerProps['flexItem'];
  withChildren: boolean;
};

function getPath<P>(obj: any, path: string): P | null {
  return path.split('.').reduce((acc, item) => (acc && acc[item] ? acc[item] : null), obj);
}

const useUtilityClasses = (ownerState: DividerOwnerState) => {
  const { classes, orientation, textAlign, flexItem, withChildren } = ownerState;

  const slots = {
    root: [
      'root',
      orientation,
      `textAlign${capitalize(textAlign)}`,
      flexItem && 'flexItem',
      withChildren && 'withChildren'
    ],
    wrapper: ['wrapper']
  };

  return composeClasses(slots, getDividerUtilityClass, classes);
};

const DividerRoot = styled('div', {
  name: 'ESDivider',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { orientation, textAlign, flexItem, withChildren }
    } = props;

    return [
      styles.root,
      styles[orientation],
      styles[`textAlign${capitalize(textAlign)}`],
      flexItem && styles.flexItem,
      withChildren && styles.withChildren
    ];
  }
})<{ ownerState: DividerOwnerState }>(({ theme, ownerState }) => ({
  flexShrink: 0,
  color: getPath<string>(theme, `palette.${ownerState.color}`) || (ownerState.color as string),

  [`&:not(.${dividerClasses.withChildren})`]: {
    backgroundColor: 'currentColor',

    [`&.${dividerClasses.horizontal}`]: {
      height: `${ownerState.width}px`
    },
    [`&.${dividerClasses.vertical}`]: {
      height: '100%',
      width: `${ownerState.width}px`
    }
  },

  [`&.${dividerClasses.withChildren}`]: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'nowrap',
    gap: '12px',

    '&::before, &::after': {
      backgroundColor: 'currentColor',
      content: '""',
      display: 'block',
      flex: 1
    },

    [`&.${dividerClasses.horizontal}`]: {
      flexDirection: 'row',

      '&::before, &::after': {
        height: `${ownerState.width}px`
      }
    },

    [`&.${dividerClasses.vertical}`]: {
      flexDirection: 'column',
      height: '100%',

      '&::before, &::after': {
        width: `${ownerState.width}px`
      }
    },

    [`&.${dividerClasses.textAlignStart}::before`]: {
      content: 'unset'
    },
    [`&.${dividerClasses.textAlignEnd}::after`]: {
      content: 'unset'
    }
  },

  [`&.${dividerClasses.vertical}.${dividerClasses.flexItem}`]: {
    alignSelf: 'stretch',
    height: 'auto'
  }
}));

const DividerWrapper = styled('span', {
  name: 'ESDivider',
  slot: 'Wrapper',
  overridesResolver: (props, styles) => styles.wrapper
})(({ theme }) => ({
  ...theme.typography.caption,
  display: 'inline-block',
  color: theme.palette.monoA.A700
}));

/**
 * The Divider is a thin line that groups content in lists and layouts.
 */
export const Divider = (inProps: DividerProps) => {
  const {
    className,
    children,
    sx,
    color = 'monoA.A100',
    width = 1,
    orientation = 'horizontal',
    textAlign = 'center',
    flexItem,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESDivider'
  });

  const ownerState = { ...props, color, width, orientation, textAlign, flexItem, withChildren: !!children };
  const classes = useUtilityClasses(ownerState);

  return (
    <DividerRoot className={clsx(className, classes.root)} ownerState={ownerState} sx={sx}>
      {children ? <DividerWrapper className={classes.wrapper}>{children}</DividerWrapper> : null}
    </DividerRoot>
  );
};

/**
 * The following flag is used to ensure that this component isn't tabbable i.e.
 * does not get highlight/focus inside of MUI List.
 */
Divider.muiSkipListHighlight = true;
