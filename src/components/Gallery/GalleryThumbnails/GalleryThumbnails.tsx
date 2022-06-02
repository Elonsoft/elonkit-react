import { FC, useEffect, useRef } from 'react';

import { GalleryThumbnailsProps } from './GalleryThumbnails.types';

import clsx from 'clsx';
import { getGalleryThumbnailsUtilityClass } from './GalleryThumbnails.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useGalleryThumbnailsContext } from './GalleryThumbnails.context';

import { IconChevronLeft, IconChevronRight } from '../../../icons';
import { Swiper, SwiperImperativeActions, useSwiperContext } from '../../Swiper';
import { useGalleryContext } from '../Gallery.context';
import { useGallerySwiperContext } from '../GallerySwiper';
import { GalleryThumbnailsItem } from '../GalleryThumbnailsItem';

type GalleryThumbnailsOwnerState = {
  classes?: GalleryThumbnailsProps['classes'];
};

const useUtilityClasses = (ownerState: GalleryThumbnailsOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    swiper: ['swiper']
  };

  return composeClasses(slots, getGalleryThumbnailsUtilityClass, classes);
};

const GalleryThumbnailsRoot = styled('div', {
  name: 'ESGalleryThumbnails',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  paddingBottom: 16,
  paddingTop: 8,
  display: 'none',

  '@media (min-height: 450px)': {
    display: 'block'
  }
}));

const GalleryThumbnailsSwiper = styled(Swiper, {
  name: 'ESGalleryThumbnails',
  slot: 'Swiper',
  overridesResolver: (props, styles) => styles.swiper
})(() => ({
  '& .ESSwiper-container': {
    '&::before, &::after': {
      content: '""',
      display: 'block',
      width: 8
    }
  },
  '& .ESSwiperButton-root': {
    zIndex: 1
  }
}));

const GalleryThumbnailsButton = styled('div')<{ ownerState: { step: number } }>(({ theme, ownerState }) => ({
  display: 'flex',
  alignItems: 'center',
  backdropFilter: 'blur(10px)',
  padding: 4,
  zIndex: 1,
  position: 'absolute',
  height: '100%',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',

  '&:hover': {
    '& .MuiTouchRipple-root': {
      backgroundColor: theme.palette.white.A600
    }
  },

  '& .MuiIconButton-root': {
    '&, &:hover, &:active': {
      backgroundColor: theme.palette.white.A600,
      color: theme.palette.black[500]
    }
  },

  ...(ownerState.step < 0 && {
    left: 0,
    paddingLeft: 8
  }),

  ...(ownerState.step > 0 && {
    right: 0,
    paddingRight: 8
  })
}));

const GalleryThumbnailsButtonPrev: FC = () => {
  const { active, setActiveSlide } = useSwiperContext();

  const onPointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
  };

  const onClick = () => {
    setActiveSlide(active - 1);
  };

  return (
    <GalleryThumbnailsButton onPointerDown={onPointerDown} onClick={onClick} ownerState={{ step: -1 }}>
      <IconButton size="32">
        <IconChevronLeft />
      </IconButton>
    </GalleryThumbnailsButton>
  );
};

const GalleryThumbnailsButtonNext: FC = () => {
  const { active, setActiveSlide } = useSwiperContext();

  const onPointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
  };

  const onClick = () => {
    setActiveSlide(active + 1);
  };

  return (
    <GalleryThumbnailsButton onPointerDown={onPointerDown} onClick={onClick} ownerState={{ step: 1 }}>
      <IconButton size="32">
        <IconChevronRight />
      </IconButton>
    </GalleryThumbnailsButton>
  );
};

export const GalleryThumbnails = (inProps: GalleryThumbnailsProps) => {
  const { children, className, SwiperProps, ...props } = useThemeProps({
    props: inProps,
    name: 'ESGalleryThumbnails'
  });

  const { items, item } = useGalleryContext();
  const { actions: swiperActions } = useGallerySwiperContext();
  const { isVisible, setVisible } = useGalleryThumbnailsContext();

  const actions = useRef<SwiperImperativeActions>(null);
  const isClicked = useRef(false);

  useEffect(() => {
    if (!isClicked.current) {
      actions.current?.setActiveSlide(item);
    }
    isClicked.current = false;
  }, [item]);

  const onClick = (i: number) => () => {
    if (i !== item) {
      isClicked.current = true;
      setVisible(false);
      swiperActions?.setActiveSlide(i, { smooth: false });
    }
  };

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <GalleryThumbnailsRoot className={clsx(classes.root, className)} style={{ display: isVisible ? 'block' : '' }}>
      <GalleryThumbnailsSwiper
        className={classes.swiper}
        draggable
        gap={8}
        actions={actions}
        buttonPrev={<GalleryThumbnailsButtonPrev />}
        buttonNext={<GalleryThumbnailsButtonNext />}
        {...SwiperProps}
      >
        {items.map((i, index) => (
          <GalleryThumbnailsItem key={i.id} isActive={index === item} onClick={onClick(index)}>
            {children(i, index)}
          </GalleryThumbnailsItem>
        ))}
      </GalleryThumbnailsSwiper>
    </GalleryThumbnailsRoot>
  );
};
