import { useRef, useState } from 'react';

import { DialogTitleProps } from './DialogTitle.types';

import clsx from 'clsx';
import { dialogTitleClasses, getDialogTitleUtilityClass } from './DialogTitle.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Typography } from '@mui/material';

import { useIntersectionObserver, useResizeObserver, useStuckSentinel } from '../../../hooks';

type DialogTitleOwnerState = {
  classes?: DialogTitleProps['classes'];
  sticky?: boolean;
  stuck?: boolean;
  size: 'large' | 'medium' | 'small';
};

const useUtilityClasses = (ownerState: DialogTitleOwnerState) => {
  const { classes, sticky, stuck, size } = ownerState;

  const slots = {
    root: ['root', sticky && 'sticky', sticky && stuck && 'stuck', size && size],
    content: ['content'],
    titleProminent: ['titleProminent'],
    adornment: ['adornment'],
    stuck: ['stuck'],
  };

  return composeClasses(slots, getDialogTitleUtilityClass, classes);
};

const DialogTitleRoot = styled('div', {
  name: 'ESDialogTitle',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { sticky, stuck },
    } = props;
    return [styles.root, sticky && styles.sticky, sticky && stuck && styles.stuck];
  },
})<{ ownerState: DialogTitleOwnerState }>(({ theme, ownerState }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  padding: 8,
  height: 'auto',
  color: theme.palette.monoA.A900,

  [`&.${dialogTitleClasses.medium}`]: {
    paddingBottom: 8,
  },

  [`&.${dialogTitleClasses.large}`]: {
    paddingBottom: 12,
  },

  [`&.${dialogTitleClasses.small}`]: {
    paddingBottom: 0,
  },

  ...(ownerState.sticky && {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.vars.palette.surface[600],
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    zIndex: 1,

    ...(ownerState.stuck && {
      borderRadius: 0,

      '&::after': {
        backgroundColor: theme.vars.palette.surface[600],
        borderBottom: `1px solid ${theme.vars.palette.monoA.A100}`,
        content: '""',
        display: 'block',
        height: 18,
        left: 0,
        position: 'absolute',
        right: 0,
        top: '100%',
      },

      [`& .${dialogTitleClasses.titleProminent}`]: { display: 'none' },
    }),
  }),
  [theme.breakpoints.up('tabletXS')]: {
    padding: 16,

    [`&.${dialogTitleClasses.medium}`]: {
      paddingBottom: 8,
    },

    [`&.${dialogTitleClasses.large}`]: {
      paddingBottom: 16,
    },

    [`&.${dialogTitleClasses.small}`]: {
      paddingBottom: 0,
    },
  },
}));

const DialogTitleContent = styled('div', {
  name: 'ESDialogTitle',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content,
})(({ theme }) => ({
  ...theme.typography.h6,
  padding: 8,

  [theme.breakpoints.up('tabletXS')]: {
    ...theme.typography.h4,
    padding: 6,
  },
}));

const DialogTitleAdornment = styled('div', {
  name: 'ESDialogTitle',
  slot: 'Adornment',
  overridesResolver: (props, styles) => styles.adornment,
})(() => ({
  display: 'flex',
  gap: '4px',

  '&:last-of-type': {
    marginLeft: 'auto',
  },
}));

const DialogTitleProminent = styled(Typography, {
  name: 'ESDialogTitle',
  slot: 'TitleProminent',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { sticky, stuck },
    } = props;
    return [styles.titleProminent, sticky && styles.sticky, sticky && stuck && styles.stuck];
  },
})(() => ({
  position: 'absolute',
  top: 8,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  alignItems: 'center',
  width: '100%',
  padding: '24px 8px 8px 8px',
  wordBreak: 'break-word',
})) as typeof Typography;

export const DialogTitle = (inProps: DialogTitleProps) => {
  const {
    className,
    sx,
    sticky,
    size = 'medium',
    startAdornment,
    endAdornment,
    prominent,
    children,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESDialogTitle',
  });

  const { stuck, sentinel } = useStuckSentinel();

  const ref = useRef<HTMLDivElement | null>(null);
  const prominentRef = useRef<HTMLDivElement | null>(null);

  const [height, setHeight] = useState(0);
  const [prominentHeight, setProminentHeight] = useState(0);

  const [isTitleVisible, setTitleVisible] = useState(false);

  const ownerState = { sticky, stuck, size, ...props };
  const classes = useUtilityClasses(ownerState);

  useResizeObserver(ref, (entries) => {
    setHeight(entries[0].target.clientHeight);
  });

  useResizeObserver(prominentRef, (entries) => {
    const target = entries[0].target;
    setProminentHeight(target.clientHeight - (parseFloat(window.getComputedStyle(target).paddingBottom) || 0));
  });

  useIntersectionObserver(
    prominentRef,
    (entries) => {
      setTitleVisible(entries[0].intersectionRatio < 1);
    },
    { threshold: [1], rootMargin: `${prominentHeight - height}px 0px 0px` }
  );

  return (
    <>
      {sentinel}
      <DialogTitleRoot
        ref={ref}
        className={clsx(classes.root, className)}
        ownerState={ownerState}
        style={{ height: prominent ? `${prominentHeight}px` : 'auto' }}
        sx={sx}
      >
        {startAdornment && <DialogTitleAdornment className={classes.adornment}>{startAdornment}</DialogTitleAdornment>}
        <DialogTitleContent className={classes.content}>
          {!prominent || isTitleVisible ? children : '\u00A0'}
        </DialogTitleContent>
        {!!prominent && (
          <DialogTitleProminent
            ref={prominentRef}
            aria-hidden
            className={classes.titleProminent}
            component="div"
            variant="h4"
          >
            {children}
          </DialogTitleProminent>
        )}
        {endAdornment && <DialogTitleAdornment className={classes.adornment}>{endAdornment}</DialogTitleAdornment>}
      </DialogTitleRoot>
    </>
  );
};
