import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

import { ReactZoomPanPinchWrapperProps } from './ZoomPanPinchWrapper.types';

import { getContent, ZoomPanPinchContext } from '../ZoomPanPinch.context';
import { ZoomPanPinch } from '../ZoomPanPinchCore/instance.core';
import { ReactZoomPanPinchContentRef } from '../ZoomPanPinchCore/models';
import { getControls } from '../ZoomPanPinchCore/utils';

export const ZoomPanPinchWrapper = forwardRef(function ReactZoomPanPinchWrapper(inProps, ref) {
  const instance = useRef(new ZoomPanPinch(inProps)).current;

  const content = getContent(inProps.children, getControls(instance));

  useImperativeHandle(ref, () => getControls(instance), [instance]);

  useEffect(() => {
    instance.update(inProps);
  }, [instance, inProps]);

  return <ZoomPanPinchContext.Provider value={instance}>{content}</ZoomPanPinchContext.Provider>;
}) as (inProps: ReactZoomPanPinchWrapperProps & { ref?: React.Ref<ReactZoomPanPinchContentRef> }) => JSX.Element;
