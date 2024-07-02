import generateUtilityClass from '@mui/utils/generateUtilityClass';
import generateUtilityClasses from '@mui/utils/generateUtilityClasses';

export interface ButtonGroupClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `variant="contained"`. */
  contained: string;
  /** Styles applied to the root element if `variant="outlined"`. */
  outlined: string;
  /** State class applied to the child elements if `disabled={true}`. */
  disabled: string;
  /** Styles applied to the first button in the button group. */
  firstButton: string;
  /** Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: string;
  /** Styles applied to the children. */
  grouped: string;
  /** Styles applied to the root element if `color="primary"` */
  colorPrimary: string;
  /** Styles applied to the root element if `color="secondary"` */
  colorSecondary: string;
  /** Styles applied to the root element if `color="tertiary"` */
  colorTertiary: string;
  /** Styles applied to the root element if `color="success"` */
  colorSuccess: string;
  /** Styles applied to the root element if `color="error"` */
  colorError: string;
  /** Styles applied to the root element if `color="monoA"` */
  colorMonoA: string;
  /** Styles applied to the root element if `color="monoB"` */
  colorMonoB: string;
  /** Styles applied to the root element if `color="black"` */
  colorBlack: string;
  /** Styles applied to the root element if `color="white"` */
  colorWhite: string;
  /** Styles applied to the divider element.` */
  buttonGroupDivider: string;
  /** Styles applied to the children if `variant="outlined"`. */
  groupedOutlined: string;
  /** Styles applied to the children if `variant="outlined"` and `color="primary"`. */
  groupedOutlinedPrimary: string;
  /** Styles applied to the children if `variant="outlined"` and `color="secondary"`. */
  groupedOutlinedSecondary: string;
  /** Styles applied to the children if `variant="contained"`. */
  groupedContained: string;
  /** Styles applied to the children if `variant="contained"` and `color="primary"`. */
  groupedContainedPrimary: string;
  /** Styles applied to the children if `variant="contained"` and `color="secondary"`. */
  groupedContainedSecondary: string;
  /** Styles applied to the last button in the button group. */
  lastButton: string;
  /** Styles applied to buttons in the middle of the button group. */
  middleButton: string;
  /** Styles applied to the root element if `size="20"` */
  size200: string;
  /** Styles applied to the root element if `size="24"` */
  size300: string;
  /** Styles applied to the root element if `size="32"` */
  size400: string;
  /** Styles applied to the root element if `size="40"` */
  size500: string;
  /** Styles applied to the root element if `size="48"` */
  size600: string;
  /** Styles applied to the root element if `size="56"` */
  size700: string;
}

export type ButtonGroupClassKey = keyof ButtonGroupClasses;

export function getButtonGroupUtilityClass(slot: string): string {
  return generateUtilityClass('ESButtonGroup', slot);
}

const buttonGroupClasses: ButtonGroupClasses = generateUtilityClasses('ESButtonGroup', [
  'root',
  'contained',
  'outlined',
  'disabled',
  'firstButton',
  'fullWidth',
  'buttonGroupDivider',
  'colorPrimary',
  'colorSecondary',
  'colorTertiary',
  'colorSuccess',
  'colorError',
  'colorInfo',
  'colorWarning',
  'colorMonoA',
  'colorMonoB',
  'colorBlack',
  'colorWhite',
  'grouped',
  'groupedOutlined',
  'groupedOutlinedPrimary',
  'groupedOutlinedSecondary',
  'groupedContained',
  'groupedContainedPrimary',
  'groupedContainedSecondary',
  'lastButton',
  'middleButton',
  'size200',
  'size300',
  'size400',
  'size500',
  'size600',
  'size700',
]);

export default buttonGroupClasses;
