import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type TextFieldGroupClasses = {
  /** Styles applied to the root element. */
  root: string;
};

export type TextFieldGroupClassKey = keyof TextFieldGroupClasses;

export function getTextFieldGroupUtilityClass(slot: string): string {
  return generateUtilityClass('ESTextFieldGroup', slot);
}

export const textFieldGroupClasses: TextFieldGroupClasses = generateUtilityClasses('ESTextFieldGroup', ['root']);
