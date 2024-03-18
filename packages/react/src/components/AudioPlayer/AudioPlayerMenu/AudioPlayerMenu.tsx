import { useRef, useState } from 'react';

import { AudioPlayerMenuProps } from './AudioPlayerMenu.types';

import clsx from 'clsx';
import { getAudioPlayerMenuUtilityClass } from './AudioPlayerMenu.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import {
  Divider,
  dividerClasses,
  IconButton,
  iconButtonClasses,
  ListItemIcon,
  ListItemText,
  listItemTextClasses,
  MenuItem,
  menuItemClasses,
  MenuList,
  Tooltip,
  tooltipClasses,
  TooltipProps
} from '@mui/material';
import TrapFocus from '@mui/material/Unstable_TrapFocus';

import {
  IconArrowLeftW500,
  IconCheckW400,
  IconChevronRightW400,
  IconDotsVerticalW400,
  IconDownloadW400,
  IconSpeedometer
} from '../../../icons';

type AudioPlayerMenuOwnerState = {
  classes?: AudioPlayerMenuProps['classes'];
  stuck?: boolean;
};

const AudioPlayerMenuRoot = styled(
  ({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />,
  {
    name: 'ESAudioPlayerMenu',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  }
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: 0,
    backgroundColor: theme.palette.surface[400],
    boxShadow: theme.palette.shadow.down[600],
    backdropFilter: 'none',
    borderRadius: '6px',

    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.surface[400],
      backdropFilter: 'none'
    }
  },
  [`&[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]: {
    boxShadow: theme.palette.shadow.down[600]
  },
  [`&[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]: {
    boxShadow: theme.palette.shadow.up[600]
  }
}));

const AudioPlayerMenuList = styled(MenuList, {
  name: 'ESAudioPlayerMenu',
  slot: 'MenuList',
  overridesResolver: (props, styles) => styles.menuList
})(() => ({
  padding: '8px 0',
  width: 168,
  outline: 'none'
}));

const AudioPlayerMenuItem = styled(MenuItem, {
  name: 'ESAudioPlayerMenu',
  slot: 'MenuItem',
  overridesResolver: (props, styles) => styles.menuItem
})(() => ({
  [`&.${menuItemClasses.root}`]: {
    minHeight: 32,
    padding: '0 16px'
  }
}));

const AudioPlayerListItemIcon = styled(ListItemIcon, {
  name: 'ESAudioPlayerMenu',
  slot: 'ListItemIcon',
  overridesResolver: (props, styles) => styles.listItemIcon
})(({ theme }) => ({
  color: theme.palette.monoA.A500,

  '&, &:first-of-type': {
    marginRight: '12px'
  }
}));

const AudioPlayerListItemText = styled(ListItemText, {
  name: 'ESAudioPlayerMenu',
  slot: 'ListItemText',
  overridesResolver: (props, styles) => styles.listItemText
})(({ theme }) => ({
  margin: 0,
  [`& .${listItemTextClasses.primary}`]: {
    color: theme.palette.monoA.A900,
    fontWeight: 400,
    ...theme.typography.body100
  },
  [`& .${listItemTextClasses.secondary}`]: {
    color: theme.palette.monoA.A600,
    marginTop: 2,
    ...theme.typography.caption
  }
}));

const AudioPlayerListDivider = styled(Divider, {
  name: 'ESAudioPlayerMenu',
  slot: 'ListDivider',
  overridesResolver: (props, styles) => styles.listDivider
})(({ theme }) => ({
  [`&.${dividerClasses.root}`]: {
    borderColor: theme.palette.monoA.A100,
    margin: '8px 0'
  }
}));

const AudioPlayerRateCheck = styled('div', {
  name: 'ESAudioPlayerMenu',
  slot: 'RateCheck',
  overridesResolver: (props, styles) => styles.rateCheck
})(({ theme }) => ({
  display: 'flex',
  color: theme.palette.monoA.A500,
  marginRight: '-4px'
}));

const AudioPlayerMainMenuItem = styled(AudioPlayerMenuItem, {
  name: 'ESAudioPlayerMenu',
  slot: 'MainMenuItem',
  overridesResolver: (props, styles) => styles.mainMenuItem
})(() => ({
  [`&.${menuItemClasses.root}.${menuItemClasses.root}`]: {
    minHeight: 48
  }
}));

const AudioPlayerRateOpen = styled('div', {
  name: 'ESAudioPlayerMenu',
  slot: 'RateOpen',
  overridesResolver: (props, styles) => styles.rateOpen
})(({ theme }) => ({
  display: 'inline-flex',
  marginLeft: 12,
  color: theme.palette.monoA.A500
}));

const AudioPlayerIconButton = styled(IconButton, {
  name: 'ESAudioPlayerMenu',
  slot: 'IconButton',
  overridesResolver: (props, styles) => styles.iconButton
})(({ theme }) => ({
  [`&.${iconButtonClasses.root}`]: {
    color: theme.palette.monoA.A600
  }
}));

const onMouseDown = (event: React.MouseEvent) => {
  event.stopPropagation();
  event.preventDefault();
};

const DEFAULT_RATES = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

/**
 * The AudioPlayerMenu displays information and actions relating to the current screen.
 */
export const AudioPlayerMenu = (inProps: AudioPlayerMenuProps) => {
  const {
    className,
    rate,
    rates = DEFAULT_RATES,
    isMenuOpen,
    setMenuOpen,
    onRateInputChange,
    onDownloadClick,
    iconBack = <IconArrowLeftW500 container containerWidth="16px" />,
    iconDownload = <IconDownloadW400 />,
    iconOptions = <IconDotsVerticalW400 />,
    iconRate = <IconSpeedometer />,
    iconRateOpen = <IconChevronRightW400 />,
    iconRateCheck = <IconCheckW400 />,
    labelBack,
    labelRate,
    labelRateNormal,
    labelDownload,
    labelOptions,
    TooltipProps,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAudioPlayerMenu'
  });

  const useUtilityClasses = (ownerState: AudioPlayerMenuOwnerState) => {
    const { classes } = ownerState;

    const slots = {
      root: ['root'],
      iconButton: ['iconButton'],
      menuList: ['menuList'],
      menuItem: ['menuItem'],
      mainMenuItem: ['mainMenuItem'],
      listItemIcon: ['listItemIcon'],
      listItemText: ['listItemText'],
      listDivider: ['listDivider'],
      rateOpen: ['rateOpen'],
      rateCheck: ['rateCheck']
    };

    return composeClasses(slots, getAudioPlayerMenuUtilityClass, classes);
  };

  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const [isRateMenuOpen, setRateMenuOpen] = useState(false);

  const onMenuExited = () => {
    setRateMenuOpen(false);
  };

  const onRateMenuKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      setRateMenuOpen(true);
    }
    if (event.key === 'ArrowLeft') {
      setRateMenuOpen(false);
    }
  };

  const onRateMenuClick = () => {
    setRateMenuOpen(!isRateMenuOpen);
  };

  const onRateMenuClose = () => {
    setRateMenuOpen(false);
  };

  const onMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const onMenuClose = (e: Event | React.SyntheticEvent<Element, Event>) => {
    // Workaround for blur event right after menu button click.
    if (e.type !== 'blur' || e.target !== menuButtonRef.current) {
      setMenuOpen(false);
    }
  };

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AudioPlayerMenuRoot
      arrow
      disableHoverListener
      disableTouchListener
      TransitionProps={{ onExited: onMenuExited }}
      className={clsx(classes.root, className)}
      open={isMenuOpen}
      placement="top"
      title={
        isRateMenuOpen ? (
          <TrapFocus open={isMenuOpen}>
            <div style={{ outline: 'none' }} tabIndex={-1} onKeyDown={onRateMenuKeyDown} onMouseDown={onMouseDown}>
              <AudioPlayerMenuList className={classes.menuList}>
                <AudioPlayerMenuItem autoFocus className={classes.menuItem} onClick={onRateMenuClose}>
                  <AudioPlayerListItemIcon className={classes.listItemIcon}>{iconBack}</AudioPlayerListItemIcon>
                  <AudioPlayerListItemText className={classes.listItemText} primary={labelBack} />
                </AudioPlayerMenuItem>
                <AudioPlayerListDivider className={classes.listDivider} />
                {rates.map((r) => (
                  <AudioPlayerMenuItem
                    key={r}
                    className={classes.menuItem}
                    selected={r === rate}
                    onClick={onRateInputChange(r)}
                  >
                    <AudioPlayerListItemText className={classes.listItemText} primary={r === 1 ? labelRateNormal : r} />
                    {r === rate && (
                      <AudioPlayerRateCheck className={classes.rateCheck}>{iconRateCheck}</AudioPlayerRateCheck>
                    )}
                  </AudioPlayerMenuItem>
                ))}
              </AudioPlayerMenuList>
            </div>
          </TrapFocus>
        ) : (
          <TrapFocus open={isMenuOpen}>
            <AudioPlayerMenuList className={classes.menuList} tabIndex={-1} onMouseDown={onMouseDown}>
              <AudioPlayerMainMenuItem
                autoFocus
                className={classes.mainMenuItem}
                onClick={onRateMenuClick}
                onKeyDown={onRateMenuKeyDown}
              >
                <AudioPlayerListItemIcon className={classes.listItemIcon}>{iconRate}</AudioPlayerListItemIcon>
                <AudioPlayerListItemText
                  className={classes.listItemText}
                  primary={labelRate}
                  secondary={rate === 1 ? labelRateNormal : rate}
                />
                <AudioPlayerRateOpen className={classes.rateOpen}>{iconRateOpen}</AudioPlayerRateOpen>
              </AudioPlayerMainMenuItem>
              {!!onDownloadClick && (
                <AudioPlayerMainMenuItem className={classes.mainMenuItem} onClick={onDownloadClick}>
                  <AudioPlayerListItemIcon className={classes.listItemIcon}>{iconDownload}</AudioPlayerListItemIcon>
                  <AudioPlayerListItemText className={classes.listItemText} primary={labelDownload} />
                </AudioPlayerMainMenuItem>
              )}
            </AudioPlayerMenuList>
          </TrapFocus>
        )
      }
      onClose={onMenuClose}
      {...TooltipProps}
    >
      <AudioPlayerIconButton
        ref={menuButtonRef}
        aria-label={labelOptions}
        className={classes.iconButton}
        size="32"
        onClick={onMenuClick}
      >
        {iconOptions}
      </AudioPlayerIconButton>
    </AudioPlayerMenuRoot>
  );
};
