import { SpinnerBaseProps } from '../Spinner.types';

import { SpinnerDashRingClasses } from './SpinnerDashRing.classes';

export interface SpinnerDashRingProps extends SpinnerBaseProps<SpinnerDashRingClasses> {
  /**
   * Easing function for spinner dashStroke animation.
   * @default 'ease-in-out'
   **/
  dashEase?: string;
}
