import { FC, useRef, useState } from 'react';

import { GalleryActionsProps } from './GalleryActions.types';

import clsx from 'clsx';
import { getGalleryActionsUtilityClass } from './GalleryActions.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';

import { IconCloseLarge, IconDotsVerticalLarge, IconFullscreen, IconImageMultipleOutline } from '../../../icons';
import { useGalleryContext } from '../Gallery.context';
import { useGalleryThumbnailsContext } from '../GalleryThumbnails';

type GalleryActionsOwnerState = {
  classes?: GalleryActionsProps['classes'];
};

const useUtilityClasses = (ownerState: GalleryActionsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    button: ['button'],
    buttonThumbnails: ['buttonThumbnails']
  };

  return composeClasses(slots, getGalleryActionsUtilityClass, classes);
};

const GalleryActionsRoot = styled('div', {
  name: 'ESGalleryActions',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  display: 'flex',
  padding: 8,
  gap: 8,
  marginLeft: 'auto',
  [theme.breakpoints.up('tabletXS')]: {
    padding: 16
  }
}));

const GalleryActionsButton = styled(Button, {
  name: 'ESGalleryActions',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})(({ theme }) => ({
  '&.MuiButton-root.MuiButton-root': {
    '&, &:hover, &:active': {
      backgroundColor: 'transparent',
      color: theme.palette.white.A800,
      [theme.breakpoints.up('tabletXS')]: {
        backgroundColor: theme.palette.white.A200,
        color: theme.palette.white[500]
      }
    },
    '& .MuiTouchRipple-root': {
      color: theme.palette.white.A150
    },
    '&:hover': {
      '& .MuiTouchRipple-root': {
        backgroundColor: theme.palette.white.A50
      }
    },
    '&:focus-visible': {
      '& .MuiTouchRipple-root': {
        color: theme.palette.white.A200
      }
    }
  },
  '&.MuiButtonGroup-grouped:not(:last-of-type)': {
    borderRightColor: theme.palette.white.A100
  }
}));

const GalleryActionsButtonThumbnails = styled(GalleryActionsButton, {
  name: 'ESGalleryActions',
  slot: 'ButtonThumbnails',
  overridesResolver: (props, styles) => styles.buttonThumbnails
})(() => ({
  '@media (min-height: 450px)': {
    display: 'none'
  }
}));

export const GalleryActions: FC<GalleryActionsProps> = (inProps) => {
  const { className, primary, secondary, closeLabel, fullscreenLabel, moreLabel, ...props } = useThemeProps({
    props: inProps,
    name: 'ESGalleryActions'
  });

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('tabletXS'));

  const { rootRef, item, toggleFullscreen, onClose } = useGalleryContext();
  const { setVisible } = useGalleryThumbnailsContext();

  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  const onMenuClose = () => {
    setAnchor(null);
  };

  const onThumbnailsClick = () => {
    setVisible((isVisible) => !isVisible);
  };

  const onFullscreenClick = () => {
    toggleFullscreen();
  };

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GalleryActionsRoot className={clsx(classes.root, className)} ref={rootRef}>
      <GalleryActionsButtonThumbnails
        className={clsx(classes.button, classes.buttonThumbnails)}
        variant="contained"
        color="monoA"
        size="40"
        onClick={onThumbnailsClick}
      >
        <IconImageMultipleOutline />
      </GalleryActionsButtonThumbnails>
      <ButtonGroup variant="contained" color="inherit" disableElevation>
        {!!primary &&
          isTablet &&
          primary.map((action, index) => (
            <GalleryActionsButton
              key={index}
              className={classes.button}
              size="40"
              onClick={action.onClick ? action.onClick(item) : undefined}
              aria-label={action.text}
            >
              {action.icon}
            </GalleryActionsButton>
          ))}
        {isTablet && (
          <GalleryActionsButton
            className={classes.button}
            size="40"
            onClick={onFullscreenClick}
            arial-label={fullscreenLabel}
          >
            <IconFullscreen />
          </GalleryActionsButton>
        )}
        {(!isTablet || !!secondary?.length) && (
          <GalleryActionsButton className={classes.button} size="40" onClick={onMenuClick} aria-label={moreLabel}>
            <IconDotsVerticalLarge />
          </GalleryActionsButton>
        )}
      </ButtonGroup>
      {isTablet && (
        <GalleryActionsButton className={classes.button} size="40" onClick={onClose} aria-label={closeLabel}>
          <IconCloseLarge />
        </GalleryActionsButton>
      )}
      <Menu
        id="gallery-actions-menu"
        anchorEl={anchor}
        container={rootRef.current}
        keepMounted
        open={Boolean(anchor)}
        onClose={onMenuClose}
        onClick={onMenuClose}
      >
        {!!primary &&
          !isTablet &&
          primary.map((action, index) => (
            <MenuItem key={index} onClick={action.onClick ? action.onClick(item) : undefined}>
              {!!action.icon && <ListItemIcon>{action.icon}</ListItemIcon>}
              <ListItemText primary={action.text} />
            </MenuItem>
          ))}
        {!!secondary &&
          secondary.map((action, index) => (
            <MenuItem key={index} onClick={action.onClick ? action.onClick(item) : undefined}>
              {!!action.icon && <ListItemIcon>{action.icon}</ListItemIcon>}
              <ListItemText primary={action.text} />
            </MenuItem>
          ))}
        {!isTablet && (
          <MenuItem onClick={onFullscreenClick}>
            <ListItemIcon>
              <IconFullscreen />
            </ListItemIcon>
            <ListItemText primary={fullscreenLabel} />
          </MenuItem>
        )}
      </Menu>
    </GalleryActionsRoot>
  );
};
