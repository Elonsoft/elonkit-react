import { cloneElement, forwardRef, isValidElement, ReactElement } from 'react';

import { TabScrollButtonProps } from './TabScrollButton.types';

import clsx from 'clsx';
import { getTabScrollButtonUtilityClass, tabScrollButtonClasses } from './TabScrollButton.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { keyframes, styled, useTheme, useThemeProps } from '@mui/material/styles';
import ButtonBase, { touchRippleClasses } from '@mui/material/ButtonBase';

import { IconChevronLeftW400, IconChevronRightW400 } from '../../../icons';
import { Divider as ESDivider, dividerClasses } from '../../Divider';

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
}

const useUtilityClasses = (ownerState: TabScrollButtonOwnerState) => {
  const { classes, disabled } = ownerState;

  const slots = {
    root: ['root', disabled && 'disabled']
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
    background: theme.palette.monoB.main,
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

const Divider = styled(ESDivider)<{ ownerState: TabScrollButtonOwnerState }>(({ ownerState }) => ({
  [`&.${dividerClasses.vertical}.${dividerClasses.flexItem}`]: {
    position: 'relative',
    alignSelf: 'center',
    height: '75%',
    ...(ownerState.direction === 'left' ? { left: 11.7 } : { right: 11.7 })
  }
}));

const Gradient = styled('div')<{ ownerState: TabScrollButtonOwnerState }>(({ ownerState, theme }) => ({
  position: 'relative',
  width: 8,
  height: '100%',
  background: `linear-gradient(${ownerState.direction === 'left' ? 90 : 270}deg, ${theme.palette.monoB.main} 0%, rgba(255, 255, 255, 0) 100%)`,
  ...(ownerState.direction === 'left' ? { left: 11.6 } : { right: 11.6 })
}));

export const TabScrollButton = forwardRef<HTMLButtonElement, TabScrollButtonProps>(function TabScrollButton(
  inProps: TabScrollButtonProps,
  ref
) {
  const { className, direction, slots = {}, ...props } = useThemeProps({ props: inProps, name: 'ESTabScrollButton' });

  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';

  const ownerState = { isRtl, direction, ...props };

  const classes = useUtilityClasses(ownerState);

  const StartButtonIcon =
    slots.StartScrollButtonIcon && isValidElement(slots.StartScrollButtonIcon) ? (
      cloneElement(slots.StartScrollButtonIcon as ReactElement, {
        style: {
          position: 'relative',
          left: '5px'
        }
      })
    ) : (
      <IconChevronLeftW400 sx={{ position: 'relative', left: '5px', color: theme.palette.monoA.A600 }} />
    );

  const EndButtonIcon =
    slots.EndScrollButtonIcon && isValidElement(slots.EndScrollButtonIcon) ? (
      cloneElement(slots.EndScrollButtonIcon as ReactElement, {
        style: {
          position: 'relative',
          right: '5px'
        }
      })
    ) : (
      <IconChevronRightW400 sx={{ position: 'relative', right: '5px', color: theme.palette.monoA.A600 }} />
    );

  return (
    <TabScrollButtonRoot
      ref={ref}
      className={clsx(classes.root, className)}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      component="div"
      ownerState={ownerState}
      role={undefined}
      tabIndex={undefined}
      {...props}
    >
      {direction === 'left' ? (
        <>
          {StartButtonIcon}
          <Divider flexItem orientation="vertical" ownerState={ownerState} />
          <Gradient ownerState={ownerState} />
        </>
      ) : (
        <>
          <Gradient ownerState={ownerState} />
          <Divider flexItem orientation="vertical" ownerState={ownerState} />
          {EndButtonIcon}
        </>
      )}
    </TabScrollButtonRoot>
  );
});
