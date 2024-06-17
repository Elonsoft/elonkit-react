import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type StepClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if component disabled. */
  disabled: string;
  /** Styles applied to the size element. */
  size: string;
  /** Styles applied to the completed element. */
  completed: string;
  /** State class applied to the root element if `error={true}`. */
  error: string;
  /** Styles applied to the activeStep element. */
  activeStep: string;
  /** Styles applied to the root element if position='bottom'. */
  positionBottom: string;
  /** Styles applied to the root element if position='default'. */
  positionDefault: string;
  /** Styles applied to the orientation element. */
  vertical: string;
};

export type StepClassKey = keyof StepClasses;

export function getStepUtilityClass(slot: string): string {
  return generateUtilityClass('ESStep', slot);
}

export const stepClasses: StepClasses = generateUtilityClasses('ESStep', [
  'root',
  'disabled',
  'size',
  'completed',
  'positionBottom',
  'positionDefault',
  'vertical',
  'error',
  'activeStep',
]);
