import { forwardRef } from 'react';

import { TabScrollButtonProps } from './TabScrollButton.types';

import clsx from 'clsx';
import { getTabScrollButtonUtilityClass, tabScrollButtonClasses } from './TabScrollButton.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { keyframes, styled, useTheme, useThemeProps } from '@mui/material/styles';
import ButtonBase, { touchRippleClasses } from '@mui/material/ButtonBase';

import { IconChevronLeftW400, IconChevronRightW400 } from '../../../icons';
import { Divider, dividerClasses } from '../../Divider';

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
  const { classes, orientation, disabled } = ownerState;

  const slots = {
    root: ['root', orientation, disabled && 'disabled']
  };

  return composeClasses(slots, getTabScrollButtonUtilityClass, classes);
};

const TabScrollButtonRoot = styled(ButtonBase, {
  name: 'ESTabScrollButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;

    return [styles.root, ownerState.orientation && styles[ownerState.orientation]];
  }
})<{ ownerState: TabScrollButtonOwnerState }>(({ ownerState, theme }) => ({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,

  ...theme.mixins.button({
    background: 'initial',
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
  },
  ...(ownerState.orientation === 'vertical' && {
    width: '100%',
    height: 40,
    '& svg': {
      transform: `rotate(${ownerState.isRtl ? -90 : 90}deg)`
    }
  })
}));

export const TabScrollButton = forwardRef<HTMLButtonElement, TabScrollButtonProps>(function TabScrollButton(
  inProps: TabScrollButtonProps,
  ref
) {
  const { className, direction, slots = {}, ...other } = useThemeProps({ props: inProps, name: 'ESTabScrollButton' });

  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';

  const ownerState = { isRtl, direction, ...other };

  const classes = useUtilityClasses(ownerState);

  const StartButtonIcon = slots.StartScrollButtonIcon ?? IconChevronLeftW400;
  const EndButtonIcon = slots.EndScrollButtonIcon ?? IconChevronRightW400;

  return (
    <>
      {direction === 'right' && !other.disabled && (
        <Divider
          flexItem
          orientation={other.orientation === 'vertical' ? 'horizontal' : 'vertical'}
          sx={{
            [`&.${dividerClasses.vertical}.${dividerClasses.flexItem}`]: {
              position: 'relative',
              left: 1,
              alignSelf: 'center',
              height: '36px'
            }
          }}
        />
      )}
      <TabScrollButtonRoot
        ref={ref}
        className={clsx(classes.root, className)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        component="div"
        ownerState={ownerState}
        role={undefined}
        tabIndex={undefined}
        {...other}
      >
        {direction === 'left' ? (
          <StartButtonIcon sx={{ color: theme.palette.monoA.A600 }} />
        ) : (
          <EndButtonIcon sx={{ color: theme.palette.monoA.A600 }} />
        )}
      </TabScrollButtonRoot>
      {direction === 'left' && !other.disabled && (
        <Divider
          flexItem
          orientation={other.orientation === 'vertical' ? 'horizontal' : 'vertical'}
          sx={{
            [`&.${dividerClasses.vertical}.${dividerClasses.flexItem}`]: {
              position: 'relative',
              right: 1,
              alignSelf: 'center',
              height: '36px'
            }
          }}
        />
      )}
    </>
  );
});
