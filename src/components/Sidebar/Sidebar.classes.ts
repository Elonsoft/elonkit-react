import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type SidebarClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the content. */
  content: string;
  /** Styles applied to the handler. */
  handler: string;
  /** Styles applied to the handler line. */
  handlerLine: string;
};

export type SidebarClassKey = keyof SidebarClasses;

export function getSidebarUtilityClass(slot: string): string {
  return generateUtilityClass('ESSidebar', slot);
}

export const sidebarClasses: SidebarClasses = generateUtilityClasses('ESSidebar', [
  'root',
  'content',
  'handler',
  'handlerLine'
]);
