import { ReactNode } from 'react';

import { GallerySwiperProps } from './GallerySwiper.types';

import clsx from 'clsx';
import { getGallerySwiperUtilityClass } from './GallerySwiper.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';

import { useGallerySwiperContext } from './GallerySwiper.context';

import { useForkRef } from '../../../hooks';
import { IconChevronLeftW400, IconChevronRightW400 } from '../../../icons';
import { Swiper, useSwiperContext } from '../../Swiper';
import { useGalleryContext } from '../Gallery.context';
import { useGalleryPanelsContext } from '../GalleryPanel';
import { GalleryTooltip } from '../GalleryTooltip';

import { useDrag } from '@use-gesture/react';

type GallerySwiperOwnerState = {
  classes?: GallerySwiperProps['classes'];
};

const useUtilityClasses = (ownerState: GallerySwiperOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    swiper: ['swiper']
  };

  return composeClasses(slots, getGallerySwiperUtilityClass, classes);
};

const GallerySwiperRoot = styled('div', {
  name: 'ESGallerySwiper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root];
  }
})(() => ({
  flexGrow: 1,
  width: '100%',
  minHeight: 0
}));

const GallerySwiperSwiper = styled(Swiper, {
  name: 'ESGallerySwiper',
  slot: 'Swiper',
  overridesResolver: (props, styles) => styles.swiper
})(() => ({
  height: '100%',
  '& .ESSwiper-wrapper': {
    height: '100%'
  },
  '& .ESSwiper-container': {
    gridAutoColumns: '100%',
    height: '100%'
  }
}));

const GallerySwiperButton = styled('div')<{ ownerState: { step: number } }>(({ theme, ownerState }) => ({
  position: 'absolute',
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  height: '100%',
  top: 0,
  WebkitTapHighlightColor: 'transparent',

  '@media (hover: none)': {
    display: 'none'
  },

  '&:hover': {
    '& .MuiTouchRipple-root': {
      backgroundColor: theme.vars.palette.white.A50
    }
  },

  ...(ownerState.step < 0 && {
    justifyContent: 'flex-start',
    left: 0,
    paddingLeft: 24,
    paddingRight: 8
  }),

  ...(ownerState.step > 0 && {
    justifyContent: 'flex-end',
    right: 0,
    paddingRight: 24,
    paddingLeft: 8
  }),

  [`& .${iconButtonClasses.root}.${iconButtonClasses.root}`]: {
    backdropFilter: 'blur(10px)',
    borderRadius: 4,
    padding: 8,

    ...theme.mixins.button({
      background: theme.vars.palette.black.A500,
      color: theme.vars.palette.white[500],
      hover: theme.vars.palette.white.A50,
      focus: theme.vars.palette.white.A200,
      active: theme.vars.palette.white.A150
    })
  }
}));

const GallerySwiperButtonPrev = ({ icon, label }: { icon: ReactNode; label?: string }) => {
  const onPointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
  };

  const { active, setActiveSlide } = useSwiperContext();

  const onClick = () => {
    setActiveSlide(active - 1, { smooth: false });
  };

  return (
    <GalleryTooltip
      arrow
      placement="right"
      sx={{ '&[data-popper-placement*="right"] .MuiTooltip-tooltip': { marginLeft: '6px !important' } }}
      title={label || ''}
    >
      <GallerySwiperButton ownerState={{ step: -1 }} onClick={onClick} onPointerDown={onPointerDown}>
        <IconButton aria-label={label}>{icon}</IconButton>
      </GallerySwiperButton>
    </GalleryTooltip>
  );
};

const GallerySwiperButtonNext = ({ icon, label }: { icon: ReactNode; label?: string }) => {
  const onPointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
  };

  const { active, setActiveSlide } = useSwiperContext();

  const onClick = () => {
    setActiveSlide(active + 1, { smooth: false });
  };

  return (
    <GalleryTooltip
      arrow
      placement="left"
      sx={{ '&[data-popper-placement*="left"] .MuiTooltip-tooltip': { marginRight: '6px !important' } }}
      title={label || ''}
    >
      <GallerySwiperButton ownerState={{ step: 1 }} onClick={onClick} onPointerDown={onPointerDown}>
        <IconButton aria-label={label}> {icon}</IconButton>
      </GallerySwiperButton>
    </GalleryTooltip>
  );
};

export const GallerySwiper = (inProps: GallerySwiperProps) => {
  const {
    children,
    className,
    sx,
    SwiperProps,
    labelNext,
    labelPrev,
    iconNext = <IconChevronRightW400 />,
    iconPrev = <IconChevronLeftW400 />,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESGallerySwiper'
  });

  const { items, setItem } = useGalleryContext();
  const { setVisible } = useGalleryPanelsContext();
  const { setActions } = useGallerySwiperContext();

  const bind = useDrag((event) => {
    if (event.tap) {
      setVisible((isVisible) => !isVisible);
    }
  });

  const onActiveSlideChange = (index: number) => {
    setItem(index);
  };

  const actionsRef = useForkRef(setActions, SwiperProps?.actions);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GallerySwiperRoot className={clsx(classes.root, className)} sx={sx} {...bind()}>
      <GallerySwiperSwiper
        snap
        buttonNext={<GallerySwiperButtonNext icon={iconNext} label={labelNext} />}
        buttonPrev={<GallerySwiperButtonPrev icon={iconPrev} label={labelPrev} />}
        className={classes.swiper}
        gap={16}
        onActiveSlideChange={onActiveSlideChange}
        {...SwiperProps}
        actions={actionsRef}
      >
        {items.map((i, index) => children(i, index))}
      </GallerySwiperSwiper>
    </GallerySwiperRoot>
  );
};
