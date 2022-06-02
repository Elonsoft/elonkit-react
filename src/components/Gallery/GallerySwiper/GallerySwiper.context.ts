import { createContext, Dispatch, SetStateAction, useContext } from 'react';

import { SwiperImperativeActions } from '../../Swiper';

export interface GallerySwiperContextValue {
  actions: SwiperImperativeActions | null;
  setActions: Dispatch<SetStateAction<SwiperImperativeActions | null>>;
}

export const GallerySwiperContext = createContext<GallerySwiperContextValue | null>(null);

export const useGallerySwiperContext = () => {
  const value = useContext(GallerySwiperContext);

  if (value === null) {
    throw new Error('Not provider for GallerySwiperContext.');
  }

  return value;
};
