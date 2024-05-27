import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type InlineTextFieldClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type InlineTextFieldClassKey = keyof InlineTextFieldClasses;

export function getInlineTextFieldUtilityClass(slot: string): string {
  return generateUtilityClass('ESInlineTextField', slot);
}

export const inlineTextFieldClasses: InlineTextFieldClasses = generateUtilityClasses('ESInlineTextField', ['root']);
