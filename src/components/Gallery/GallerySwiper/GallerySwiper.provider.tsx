import { FC, useMemo, useState } from 'react';

import { GallerySwiperContext } from './GallerySwiper.context';

import { SwiperImperativeActions } from '../../Swiper';

export const GallerySwiperProvider: FC = ({ children }) => {
  const [actions, setActions] = useState<SwiperImperativeActions | null>(null);

  const value = useMemo(() => {
    return { actions, setActions };
  }, [actions, setActions]);

  return <GallerySwiperContext.Provider value={value}>{children}</GallerySwiperContext.Provider>;
};
