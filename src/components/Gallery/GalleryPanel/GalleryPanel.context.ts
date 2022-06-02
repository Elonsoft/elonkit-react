import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface GalleryPanelContextValue {
  position: 'top' | 'bottom';
  background: string | null;
  setBackground: Dispatch<SetStateAction<string | null>>;
}

export const GalleryPanelContext = createContext<GalleryPanelContextValue | null>(null);

export const useGalleryPanelContext = () => {
  return useContext(GalleryPanelContext);
};
