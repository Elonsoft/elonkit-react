import React, { useContext } from 'react';

import { ZoomPanPinch } from './ZoomPanPinchCore/instance.core';
import { ReactZoomPanPinchContentRef, ReactZoomPanPinchProps } from './ZoomPanPinchCore/models';

export const ZoomPanPinchContext = React.createContext<ZoomPanPinch>(null as any);

export const getContent = (children: ReactZoomPanPinchProps['children'], ctx: ReactZoomPanPinchContentRef) => {
  if (typeof children === 'function') {
    return children(ctx);
  }

  return children;
};

export const useZoomPanPinchContext = () => {
  const value = useContext(ZoomPanPinchContext);

  if (value === null) {
    throw new Error('No provider for ZoomPanPinchContext.');
  }

  return value;
};
