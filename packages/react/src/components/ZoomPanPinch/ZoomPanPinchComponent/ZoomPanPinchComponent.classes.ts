import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ZoomPanPinchComponentClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type ZoomPanPinchComponentClassKey = keyof ZoomPanPinchComponentClasses;

export function getZoomPanPinchComponentUtilityClass(slot: string): string {
  return generateUtilityClass('ESZoomPanPinchComponent', slot);
}

export const zoomPanPinchComponentClasses: ZoomPanPinchComponentClasses = generateUtilityClasses(
  'ESZoomPanPinchComponent',
  ['root']
);
