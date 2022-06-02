import { FC, useMemo, useState } from 'react';

import { GalleryPanelsContext } from './GalleryPanels.context';

export const GalleryPanelsProvider: FC = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const [rectTop, setRectTop] = useState<DOMRect | null>(null);
  const [rectBottom, setRectBottom] = useState<DOMRect | null>(null);

  const value = useMemo(() => {
    return { isVisible, setVisible, rectTop, setRectTop, rectBottom, setRectBottom };
  }, [isVisible, setVisible, rectTop, setRectTop, rectBottom, setRectBottom]);

  return <GalleryPanelsContext.Provider value={value}>{children}</GalleryPanelsContext.Provider>;
};
