import { useEffect, useState } from 'react';

import { SidebarToggleProps } from './SidebarToggle.types';

import clsx from 'clsx';
import { getSidebarToggleUtilityClass } from './SidebarToggle.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useTheme, useThemeProps } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

import { IconChevronLeftW300 } from '../../../icons';
import { Button, buttonClasses } from '../../Button';
import { svgIconClasses } from '../../SvgIcon';
import { useSidebarContext } from '../Sidebar.context';
import { SidebarDivider } from '../SidebarDivider';

type SidebarToggleOwnerState = {
  color?: 'default' | 'primary' | 'secondary';
  classes?: SidebarToggleProps['classes'];
  open?: boolean;
};

const useUtilityClasses = (ownerState: SidebarToggleOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    button: ['button'],
    tooltip: ['tooltip']
  };

  return composeClasses(slots, getSidebarToggleUtilityClass, classes);
};

const SidebarToggleRoot = styled('div', {
  name: 'ESSidebarToggle',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  position: 'relative',
  zIndex: '10'
}));

const SidebarToggleTooltip = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESSidebarToggle',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => styles.tooltip
  }
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    ...theme.typography.caption
  },
  [`&[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]: {
    marginLeft: '9px !important'
  }
}));

const SidebarToggleButton = styled(Button, {
  name: 'ESSidebarToggle',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})<{ ownerState: SidebarToggleOwnerState }>(({ theme, ownerState }) => ({
  transition: 'none',
  width: '20px',
  height: '20px',
  marginLeft: ownerState.open ? '7px' : 0,
  boxShadow: `inset 0 0 0 1px ${theme.vars.palette.monoA.A100}`,
  borderRadius: '20px',
  zIndex: '4',
  overflow: 'hidden',
  position: 'absolute',
  right: '-10px',
  top: '-9px',

  [`& .${svgIconClasses.root}`]: {
    transform: `rotate(${ownerState.open ? '' : '18'}0deg)`
  },

  [`&.${buttonClasses.root}.${buttonClasses.variantText}.${buttonClasses.colorMonoA}`]: {
    ...((ownerState.color === 'default' || ownerState.color === 'secondary') && {
      '--background': theme.vars.palette.surface.background2,
      '--icon': theme.vars.palette.monoA.A500,
      '--focused': theme.vars.palette.monoA.A150
    }),

    ...(ownerState.color === 'primary' && {
      '--background': theme.vars.palette.primary[300],
      '--icon': theme.vars.palette.monoB[500],
      '--hovered': theme.vars.palette.monoB.A50,
      '--focused': theme.vars.palette.monoA.A150,
      '--pressed': theme.vars.palette.monoA.A150
    })
  }
}));

export const SidebarToggle = (inProps: SidebarToggleProps) => {
  const {
    className,
    sx,
    open,
    icon = <IconChevronLeftW300 container containerSize="20px" />,
    labelOpen,
    labelHide,
    onClick,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSidebarToggle'
  });

  const theme = useTheme();

  const [isTooltipOpen, setTooltipOpen] = useState(false);

  const { color } = useSidebarContext();

  const ownerState = { color, open, ...props };
  const classes = useUtilityClasses(ownerState);

  useEffect(() => {
    setTooltipOpen(false);
  }, [open]);

  const onCloseTooltip = () => {
    setTooltipOpen(false);
  };

  const onClickToggle = () => {
    onCloseTooltip();
    onClick?.();
  };

  return (
    <SidebarToggleRoot className={clsx(classes.root, className)} sx={sx}>
      <SidebarDivider />

      <SidebarToggleTooltip
        arrow
        disableInteractive
        TransitionProps={{ timeout: { enter: theme.transitions.duration.enteringScreen, exit: 0 } }}
        className={clsx(classes.tooltip)}
        enterDelay={100}
        enterNextDelay={200}
        open={isTooltipOpen}
        placement="right"
        title={<>{open ? labelHide : labelOpen}</>}
        onClose={onCloseTooltip}
        onOpen={() => setTooltipOpen(true)}
      >
        <SidebarToggleButton
          aria-label={open ? labelHide : labelOpen}
          className={clsx(classes.button)}
          color="monoA"
          ownerState={ownerState}
          onClick={onClickToggle}
        >
          {icon}
        </SidebarToggleButton>
      </SidebarToggleTooltip>
    </SidebarToggleRoot>
  );
};
