import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type StepperClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if component disabled. */
  disabled: string;
  /** Styles applied to the orientation element. */
  horizontal: string;
  /** Styles applied to the orientation element. */
  vertical: string;
  /** Styles applied to the size element. */
  size: string;
  size24: string;
};

export type StepperClassKey = keyof StepperClasses;

export function getStepperUtilityClass(slot: string): string {
  return generateUtilityClass('ESStepper', slot);
}

export const stepperClasses: StepperClasses = generateUtilityClasses('ESStepper', [
  'root',
  'disabled',
  'horizontal',
  'vertical',
  'size',
  'size24',
]);
