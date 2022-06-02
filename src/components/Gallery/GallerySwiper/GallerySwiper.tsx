import { FC } from 'react';
import { useDrag } from 'react-use-gesture';

import { GallerySwiperProps } from './GallerySwiper.types';

import clsx from 'clsx';
import { getGallerySwiperUtilityClass } from './GallerySwiper.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useGallerySwiperContext } from './GallerySwiper.context';

import { IconArrowLeft, IconArrowRight } from '../../../icons';
import { Swiper, useSwiperContext } from '../../Swiper';
import { useGalleryContext } from '../Gallery.context';
import { useGalleryPanelsContext } from '../GalleryPanel';

type GallerySwiperOwnerState = {
  classes?: GallerySwiperProps['classes'];
  isFullscreen: boolean;
};

const useUtilityClasses = (ownerState: GallerySwiperOwnerState) => {
  const { classes, isFullscreen } = ownerState;

  const slots = {
    root: ['root', isFullscreen && 'fullscreen'],
    swiper: ['swiper']
  };

  return composeClasses(slots, getGallerySwiperUtilityClass, classes);
};

const GallerySwiperRoot = styled('div', {
  name: 'ESGallerySwiper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { isFullscreen }
    } = props;
    return [styles.root, isFullscreen && props.rootFullscreen];
  }
})<{ ownerState: GallerySwiperOwnerState }>(({ ownerState }) => ({
  flexGrow: 1,
  padding: '8px 16px',
  width: '100%',
  minHeight: 0,
  ...(ownerState.isFullscreen && {
    padding: '16px'
  })
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

  '&:hover': {
    '& .MuiTouchRipple-root': {
      backgroundColor: theme.palette.white.A50
    }
  },

  ...(ownerState.step < 0 && {
    justifyContent: 'flex-start',
    left: -16,
    paddingLeft: 24,
    paddingRight: 8
  }),

  ...(ownerState.step > 0 && {
    justifyContent: 'flex-end',
    right: -16,
    paddingRight: 24,
    paddingLeft: 8
  }),

  '& .MuiIconButton-root.MuiIconButton-root': {
    backdropFilter: 'blur(10px)',
    borderRadius: 4,
    padding: 8,
    '&, &:hover, &:active': {
      backgroundColor: theme.palette.black.A600,
      color: theme.palette.white[500]
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
        color: theme.palette.monoA.A200
      }
    }
  }
}));

const GallerySwiperButtonPrev: FC = () => {
  const onPointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
  };

  const { active, setActiveSlide } = useSwiperContext();

  const onClick = () => {
    setActiveSlide(active - 1, { smooth: false });
  };

  return (
    <GallerySwiperButton onClick={onClick} onPointerDown={onPointerDown} ownerState={{ step: -1 }}>
      <IconButton>
        <IconArrowLeft />
      </IconButton>
    </GallerySwiperButton>
  );
};

const GallerySwiperButtonNext: FC = () => {
  const onPointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
  };

  const { active, setActiveSlide } = useSwiperContext();

  const onClick = () => {
    setActiveSlide(active + 1, { smooth: false });
  };

  return (
    <GallerySwiperButton onClick={onClick} onPointerDown={onPointerDown} ownerState={{ step: 1 }}>
      <IconButton>
        <IconArrowRight />
      </IconButton>
    </GallerySwiperButton>
  );
};

export const GallerySwiper = (inProps: GallerySwiperProps) => {
  const { children, className, SwiperProps, ...props } = useThemeProps({
    props: inProps,
    name: 'ESGallerySwiper'
  });

  const { items, setItem, isFullscreen } = useGalleryContext();
  const { setVisible } = useGalleryPanelsContext();
  const { setActions } = useGallerySwiperContext();

  const bind = useDrag((event) => {
    if (event.tap && event.event.pointerType !== 'mouse') {
      setVisible((isVisible) => !isVisible);
    }
  });

  const onActiveSlideChange = (index: number) => {
    setItem(index);
  };

  const ownerState = { isFullscreen, ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GallerySwiperRoot className={clsx(classes.root, className)} ownerState={ownerState} {...bind()}>
      <GallerySwiperSwiper
        className={classes.swiper}
        onActiveSlideChange={onActiveSlideChange}
        gap={16}
        draggable
        snap
        actions={setActions}
        buttonPrev={<GallerySwiperButtonPrev />}
        buttonNext={<GallerySwiperButtonNext />}
        {...SwiperProps}
      >
        {items.map((i, index) => children(i, index))}
      </GallerySwiperSwiper>
    </GallerySwiperRoot>
  );
};
