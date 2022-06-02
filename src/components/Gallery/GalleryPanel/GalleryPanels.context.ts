import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface GalleryPanelsContextValue {
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  rectTop: DOMRect | null;
  setRectTop: Dispatch<SetStateAction<DOMRect | null>>;
  rectBottom: DOMRect | null;
  setRectBottom: Dispatch<SetStateAction<DOMRect | null>>;
}

export const GalleryPanelsContext = createContext<GalleryPanelsContextValue | null>(null);

export const useGalleryPanelsContext = () => {
  const value = useContext(GalleryPanelsContext);

  if (value === null) {
    throw new Error('Not provider for GalleryPanelsContext.');
  }

  return value;
};
