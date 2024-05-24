/* eslint-disable react/require-default-props */
import React, { useEffect, useRef } from 'react';

import { TransformComponentProps } from './ZoomPanPinchComponent.types';

import clsx from 'clsx';
import { getZoomPanPinchComponentUtilityClass } from './ZoomPanPinchComponent.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

import { useZoomPanPinchContext } from '../ZoomPanPinch.context';

type ZoomPanPinchComponentOwnerState = {
  classes?: TransformComponentProps['classes'];
};

const useUtilityClasses = (ownerState: ZoomPanPinchComponentOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getZoomPanPinchComponentUtilityClass, classes);
};

export const ZoomPanPinchComponentRoot = styled('div', {
  name: 'ESZoomPanPinchComponent',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({}) => ({
  position: 'relative',
  width: 'fit-content',
  height: 'fit-content',
  overflow: 'hidden',
  userSelect: 'none',
  margin: 0,
  padding: 0
}));

export const ZoomPanPinchComponentContent = styled('div', {
  name: 'ESZoomPanPinchComponent',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})(({}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: 'fit-content',
  height: 'fit-content',
  margin: 0,
  padding: 0,
  transformOrigin: '0% 0%',

  '& img': {
    pointerEvents: 'none'
  }
}));

export const ZoomPanPinchComponent = (inProps: TransformComponentProps) => {
  const {
    children,
    contentStyle,
    wrapperProps = {},
    contentProps = {},
    sx,
    className,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESTransformComponent'
  });

  const { init, cleanupWindowEvents } = useZoomPanPinchContext();

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    if (wrapper !== null && content !== null && init) {
      init?.(wrapper, content);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      cleanupWindowEvents?.();
    };
  }, []);

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <ZoomPanPinchComponentRoot ref={wrapperRef} className={clsx(classes.root, className)} sx={sx} {...wrapperProps}>
      <ZoomPanPinchComponentContent ref={contentRef} style={contentStyle} {...contentProps}>
        {children}
      </ZoomPanPinchComponentContent>
    </ZoomPanPinchComponentRoot>
  );
};
