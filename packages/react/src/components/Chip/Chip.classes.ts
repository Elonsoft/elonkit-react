import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type ChipClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the label element. */
  label: string;
  /** Styles applied to the start icon element. */
  startIcon: string;
  /** Styles applied to the end icon element. */
  endIcon: string;
  /** Styles applied to the delete icon element. */
  deleteIcon: string;
  /** Styles applied to the root element if variant="filled". */
  variantFilled: string;
  /** Styles applied to the root element if variant="outlined". */
  variantOutlined: string;
  /** Styles applied to the root element if size="24". */
  size100: string;
  /** Styles applied to the root element if size="32". */
  size200: string;
  /** Styles applied to the root element if size="40". */
  size300: string;
  /** Styles applied to the root element if selected="true". */
  selected: string;
  /** Styles applied to the root element if selectedColor="default". */
  selectedColorDefault: string;
  /** Styles applied to the root element if selectedColor="colored". */
  selectedColorColored: string;
  /** Styles applied to the root element if clickable="true". */
  clickable: string;
  /** Styles applied to the root element if disabled="true". */
  disabled: string;
};

export type ChipClassKey = keyof ChipClasses;

export function getChipUtilityClass(slot: string): string {
  return generateUtilityClass('ESChip', slot);
}

export const chipClasses: ChipClasses = generateUtilityClasses('ESChip', [
  'root',
  'label',
  'startIcon',
  'endIcon',
  'deleteIcon',
  'variantFilled',
  'variantOutlined',
  'size100',
  'size200',
  'size300',
  'selected',
  'selectedColorDefault',
  'selectedColorColored',
  'clickable',
  'disabled',
]);
