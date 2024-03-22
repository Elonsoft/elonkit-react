import { memo, useState } from 'react';

import { SFSFiltersProps } from './SFSFilters.types';

import clsx from 'clsx';
import { getSFSFiltersUtilityClass, sfsFiltersClasses } from './SFSFilters.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { backdropClasses } from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { paperClasses } from '@mui/material/Paper';
import Typography, { typographyClasses } from '@mui/material/Typography';

import { IconCloseW600, IconFilter } from '../../../icons';
import { svgIconClasses } from '../../SvgIcon';
import { SFSButton } from '../SFSButton';

type SFSFiltersOwnerState = {
  classes?: SFSFiltersProps['classes'];
  isWithValue?: boolean;
};

const useUtilityClasses = (ownerState: SFSFiltersOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    button: ['button'],
    buttonBadge: ['buttonBadge'],
    drawer: ['drawer'],
    header: ['header'],
    footer: ['footer'],
    container: ['container'],
    closeButton: ['closeButton'],
    resetButton: ['resetButton']
  };

  return composeClasses(slots, getSFSFiltersUtilityClass, classes);
};

const SFSFiltersRoot = styled('div', {
  name: 'ESSFSFilters',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(() => ({
  position: 'relative'
}));

const SFSFiltersButton = styled(SFSButton, {
  name: 'ESSFSFilters',
  slot: 'Button',
  overridesResolver: (_, styles) => styles.button
})<{ ownerState: SFSFiltersOwnerState }>(({ theme, ownerState }) => ({
  gap: '4px',

  [`&:hover .${sfsFiltersClasses.buttonBadge}, &:focus-visible .${sfsFiltersClasses.buttonBadge}, & .${sfsFiltersClasses.buttonBadge}`]:
    {
      [`&.${typographyClasses.root}, & .${svgIconClasses.root}`]: {
        color: `${theme.palette.black.A800}`
      }
    },
  [theme.breakpoints.up('tabletXS')]: {
    [`& > .${svgIconClasses.root}`]: {
      display: ownerState.isWithValue && 'none'
    }
  },
  [theme.breakpoints.down('tabletXS')]: {
    gap: '2px',
    [`& > .${typographyClasses.root}:first-of-type`]: {
      display: 'none'
    }
  }
}));

const SFSFiltersButtonBadge = styled(Typography, {
  name: 'ESSFSFilters',
  slot: 'ButtonBadge',
  overridesResolver: (_, styles) => styles.buttonBadge
})(({ theme }) => ({
  width: '16px',
  height: '16px',
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.secondary[300]
})) as typeof Typography;

const SFSFiltersDrawer = styled(Drawer, {
  name: 'ESSFSFilters',
  slot: 'Drawer',
  overridesResolver: (_, styles) => styles.drawer
})(({ theme }) => ({
  [`& .${backdropClasses.root}`]: {
    backgroundColor: theme.palette.overlay[200]
  },
  [`& .${paperClasses.root}`]: {
    width: '100%',
    maxWidth: '337px',
    boxShadow: theme.palette.shadow.left[800],
    backgroundImage: 'none',
    backgroundColor: theme.palette.surface[200],
    borderLeft: `1px solid ${theme.palette.monoA.A100}`
  }
}));

const SFSFiltersHeader = styled(Typography, {
  name: 'ESSFSFilters',
  slot: 'Header',
  overridesResolver: (_, styles) => styles.header
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px',
  paddingLeft: '20px',
  borderBottom: `1px solid ${theme.palette.monoA.A100}`,
  color: theme.palette.monoA.A900
}));

const SFSFiltersFooter = styled('div', {
  name: 'ESSFSFilters',
  slot: 'Footer',
  overridesResolver: (_, styles) => styles.footer
})(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.monoA.A100}`,
  marginTop: 'auto',
  padding: '16px 20px'
}));

const SFSFiltersContainer = styled('div', {
  name: 'ESSFSFilters',
  slot: 'Container',
  overridesResolver: (_, styles) => styles.container
})(({ theme }) => ({
  ...theme.scrollbars.overlayMonoA
}));

const SFSFiltersCloseButton = styled(Button, {
  name: 'ESSFSFilters',
  slot: 'CloseButton',
  overridesResolver: (_, styles) => styles.closeButton
})(({ theme }) => ({
  [`.${svgIconClasses.root}`]: {
    color: theme.palette.monoA.A500
  }
}));

const SFSFiltersResetButton = styled(Button, {
  name: 'ESSFSFilters',
  slot: 'ResetButton',
  overridesResolver: (_, styles) => styles.resetButton
})({});

export const SFSFilters = memo(function SFSFilters(inProps: SFSFiltersProps) {
  const {
    children,
    button,

    className,
    sx,

    count,
    onReset,

    labelButton,
    labelHeader,
    labelClose,
    labelReset,

    iconFilters = <IconFilter />,
    iconClose = <IconCloseW600 />,

    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESSFSFilters'
  });

  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const onOpen = () => {
    setOpen(true);
  };

  const ownerState = { ...props, isWithValue: !!count };
  const classes = useUtilityClasses(ownerState);

  return (
    <SFSFiltersRoot className={clsx(className, classes.root)} color="tertiary" sx={sx} {...props}>
      {button ? (
        button({ open: isOpen, setOpen })
      ) : (
        <SFSFiltersButton className={classes.button} ownerState={ownerState} onClick={onOpen}>
          <Typography component="div" variant="body100">
            {labelButton}
          </Typography>
          {iconFilters}
          {!!count && (
            <SFSFiltersButtonBadge className={classes.buttonBadge} component="div" variant="mini200">
              {count}
            </SFSFiltersButtonBadge>
          )}
        </SFSFiltersButton>
      )}
      <SFSFiltersDrawer anchor="right" className={classes.drawer} open={isOpen} onClose={onClose}>
        <SFSFiltersHeader className={classes.header} variant="h5">
          {labelHeader}
          <SFSFiltersCloseButton
            aria-label={labelClose}
            className={classes.closeButton}
            color="tertiary"
            size="40"
            onClick={onClose}
          >
            {iconClose}
          </SFSFiltersCloseButton>
        </SFSFiltersHeader>

        <SFSFiltersContainer className={classes.container}>{children}</SFSFiltersContainer>

        {count ? (
          <SFSFiltersFooter className={classes.footer}>
            <SFSFiltersResetButton
              fullWidth
              className={classes.resetButton}
              color="error"
              size="48"
              variant="outlined"
              onClick={onReset}
            >
              {labelReset}
            </SFSFiltersResetButton>
          </SFSFiltersFooter>
        ) : null}
      </SFSFiltersDrawer>
    </SFSFiltersRoot>
  );
});
