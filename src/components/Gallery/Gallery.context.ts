import { createContext, Dispatch, Ref, SetStateAction, useContext } from 'react';

export interface GalleryContextValue {
  rootRef: Ref<HTMLDivElement | null>;
  items: any[];
  item: number;
  setItem: Dispatch<SetStateAction<number>>;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  onClose?: () => void;
}

export const GalleryContext = createContext<GalleryContextValue | null>(null);

export const useGalleryContext = () => {
  const value = useContext(GalleryContext);

  if (value === null) {
    throw new Error('Not provider for GalleryContext.');
  }

  return value;
};
