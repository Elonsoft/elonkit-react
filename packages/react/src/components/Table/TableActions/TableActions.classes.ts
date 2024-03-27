import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type TableActionsClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the text element. */
  text: string;
  /** Styles applied to the children container element. */
  children: string;
};
export type TableActionsClassKey = keyof TableActionsClasses;

export function getTableActionsUtilityClass(slot: string): string {
  return generateUtilityClass('ESTableActions', slot);
}

export const tableActionsClasses: TableActionsClasses = generateUtilityClasses('ESTableActions', [
  'root',
  'text',
  'children'
]);
