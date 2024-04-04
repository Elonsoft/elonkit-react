import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export interface TooltipClasses {
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: string;
  /** Styles applied to the root element if `color="secondary"`. */
  colorSecondary: string;
  /** Styles applied to the root element if `color="error"`. */
  colorError: string;
  /** Styles applied to the root element if `color="info"`. */
  colorInfo: string;
  /** Styles applied to the root element if `color="success"`. */
  colorSuccess: string;
  /** Styles applied to the root element if `color="warning"`. */
  colorWarning: string;
  /** Styles applied to the root element if `color="monoAA600"`. */
  colorMonoAA600: string;
  /** Styles applied to the root element if `color="monoB"`. */
  colorMonoB: string;
  /** Styles applied to the root element if `color="monoBA600"`. */
  colorMonoBA600: string;
  /** Styles applied to the root element if `color="whiteA600"`. */
  colorWhiteA600: string;
  /** Styles applied to the Popper component. */
  popper: string;
  /** Styles applied to the Popper component unless `disableInteractive={true}`. */
  popperInteractive: string;
  /** Styles applied to the Popper component if `arrow={true}`. */
  popperArrow: string;
  /** Styles applied to the Popper component unless the tooltip is open. */
  popperClose: string;
  /** Styles applied to the tooltip (label wrapper) element. */
  tooltip: string;
  /** Styles applied to the tooltip (label wrapper) element if `arrow={true}`. */
  tooltipArrow: string;
  /** Styles applied to the arrow element. */
  arrow: string;
  /** Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch. */
  touch: string;
  /** Styles applied to the tooltip (label wrapper) element if `placement` contains "left". */
  tooltipPlacementLeft: string;
  /** Styles applied to the tooltip (label wrapper) element if `placement` contains "right". */
  tooltipPlacementRight: string;
  /** Styles applied to the tooltip (label wrapper) element if `placement` contains "top". */
  tooltipPlacementTop: string;
  /** Styles applied to the tooltip (label wrapper) element if `placement` contains "bottom". */
  tooltipPlacementBottom: string;
}

export type TooltipClassKey = keyof TooltipClasses;

export function getTooltipUtilityClass(slot: string): string {
  return generateUtilityClass('ESTooltip', slot);
}

export const tooltipClasses: TooltipClasses = generateUtilityClasses('ESTooltip', [
  'colorPrimary',
  'colorSecondary',
  'colorError',
  'colorInfo',
  'colorSuccess',
  'colorWarning',
  'colorMonoAA600',
  'colorMonoB',
  'colorMonoBA600',
  'colorWhiteA600',
  'popper',
  'popperInteractive',
  'popperArrow',
  'popperClose',
  'tooltip',
  'tooltipArrow',
  'touch',
  'tooltipPlacementLeft',
  'tooltipPlacementRight',
  'tooltipPlacementTop',
  'tooltipPlacementBottom',
  'arrow'
]);
