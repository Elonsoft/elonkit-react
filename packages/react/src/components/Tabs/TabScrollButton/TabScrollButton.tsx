import { forwardRef, useEffect, useState } from 'react';

import { TabScrollButtonProps } from './TabScrollButton.types';

import clsx from 'clsx';
import { getTabScrollButtonUtilityClass, tabScrollButtonClasses } from './TabScrollButton.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { keyframes, styled, useTheme, useThemeProps } from '@mui/material/styles';
import { Divider, dividerClasses } from '@mui/material';
import ButtonBase, { touchRippleClasses } from '@mui/material/ButtonBase';

import { IconChevronLeftW400, IconChevronRightW400 } from '../../../icons';

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

interface TabScrollButtonOwnerState extends TabScrollButtonProps {
  isRtl?: boolean;
  backgroundColor?: string;
}

const useUtilityClasses = (ownerState: TabScrollButtonOwnerState) => {
  const { classes, disabled } = ownerState;

  const slots = {
    root: ['root', disabled && 'disabled'],
    icon: ['icon'],
    gradient: ['gradient'],
    divider: ['divider']
  };

  return composeClasses(slots, getTabScrollButtonUtilityClass, classes);
};

const TabScrollButtonRoot = styled(ButtonBase, {
  name: 'ESTabScrollButton',
  slot: 'Root',
  overridesResolver: (props, styles) => [styles.root]
})<{ ownerState: TabScrollButtonOwnerState }>(({ ownerState, theme }) => ({
  position: 'absolute',
  width: 40,
  height: '100%',
  flexShrink: 0,
  right: ownerState.direction === 'right' ? 0 : undefined,
  left: ownerState.direction === 'left' ? -1 : undefined,
  zIndex: 2,

  ...theme.mixins.button({
    background: ownerState.backgroundColor!,
    color: 'initial',
    hover: theme.palette.monoA.A50,
    active: theme.palette.monoA.A150,
    focus: theme.palette.monoA.A200
  }),

  [`& .${touchRippleClasses.rippleVisible}`]: {
    animationName: `${enterKeyframe} !important`,
    opacity: '1 !important'
  },
  [`&.${tabScrollButtonClasses.root}`]: {
    [`& .${touchRippleClasses.root}`]: {
      transitionDuration: `${theme.transitions.duration.standard}ms`
    }
  },

  [`&.${tabScrollButtonClasses.disabled}`]: {
    opacity: 0
  }
}));

const TabScrollButtonDivider = styled(Divider, {
  name: 'ESTabScrollButton',
  slot: 'Divider',
  overridesResolver: (props, styles) => [styles.divider]
})<{ ownerState: TabScrollButtonOwnerState }>(({ ownerState }) => ({
  [`&.${dividerClasses.vertical}.${dividerClasses.flexItem}`]: {
    position: 'relative',
    alignSelf: 'center',
    height: '75%',
    ...(ownerState.direction === 'left' ? { left: 11.7 } : { right: 11.7 })
  }
}));

const TabScrollButtonGradient = styled('div', {
  name: 'ESTabScrollButton',
  slot: 'Gradient',
  overridesResolver: (props, styles) => [styles.gradient]
})<{ ownerState: TabScrollButtonOwnerState }>(({ ownerState }) => ({
  position: 'relative',
  width: 8,
  height: '100%',
  background: `linear-gradient(${ownerState.direction === 'left' ? 90 : 270}deg, ${ownerState.backgroundColor} 0%, rgba(255, 255, 255, 0) 100%)`,
  ...(ownerState.direction === 'left' ? { left: 11.6 } : { right: 11.6 })
}));

const TabScrollButtonIcon = styled('span', {
  name: 'ESTabScrollButton',
  slot: 'Icon',
  overridesResolver: (props, styles) => [styles.icon]
})<{ ownerState: TabScrollButtonOwnerState }>(({ ownerState }) => ({
  display: 'inline-flex',
  position: 'relative',

  ...(ownerState.direction === 'left'
    ? {
        left: '5px'
      }
    : {
        right: '5px'
      })
}));

export const TabScrollButton = forwardRef<HTMLButtonElement, TabScrollButtonProps>(function TabScrollButton(
  inProps: TabScrollButtonProps,
  ref
) {
  const { className, direction, slots = {}, ...props } = useThemeProps({ props: inProps, name: 'ESTabScrollButton' });

  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';

  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    setBackgroundColor(window.getComputedStyle(document.body).backgroundColor);
  }, [theme.palette.mode]);

  const ownerState = { isRtl, direction, backgroundColor, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <TabScrollButtonRoot
      ref={ref}
      className={clsx(classes.root, className)}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      component="div"
      ownerState={ownerState}
      {...props}
    >
      {direction === 'left' ? (
        <>
          <TabScrollButtonIcon className={classes.icon} ownerState={ownerState}>
            {!slots.StartScrollButtonIcon ? (
              <IconChevronLeftW400 sx={{ color: theme.palette.monoA.A600 }} />
            ) : (
              slots.StartScrollButtonIcon
            )}
          </TabScrollButtonIcon>
          <TabScrollButtonDivider flexItem className={classes.divider} orientation="vertical" ownerState={ownerState} />
          <TabScrollButtonGradient className={classes.gradient} ownerState={ownerState} />
        </>
      ) : (
        <>
          <TabScrollButtonGradient className={classes.gradient} ownerState={ownerState} />
          <TabScrollButtonDivider flexItem className={classes.divider} orientation="vertical" ownerState={ownerState} />
          <TabScrollButtonIcon className={classes.icon} ownerState={ownerState}>
            {!slots.EndScrollButtonIcon ? (
              <IconChevronRightW400 sx={{ color: theme.palette.monoA.A600 }} />
            ) : (
              slots.EndScrollButtonIcon
            )}
          </TabScrollButtonIcon>
        </>
      )}
    </TabScrollButtonRoot>
  );
});
