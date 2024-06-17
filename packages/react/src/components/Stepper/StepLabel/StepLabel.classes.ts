import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type StepLabelClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type StepLabelClassKey = keyof StepLabelClasses;

export function getStepLabelUtilityClass(slot: string): string {
  return generateUtilityClass('ESStepLabel', slot);
}

export const stepLabelClasses: StepLabelClasses = generateUtilityClasses('ESStepLabel', ['root']);
