import { Theme } from '@mui/material/styles';
import { Components } from '@mui/material/styles/components';
import { TypographyOptions } from '@mui/material/styles/createTypography';

import { createButton } from './button';
export { createButton } from './button';

import { createCheckbox } from './checkbox';
export { createCheckbox } from './checkbox';

import { createIconButton } from './icon-button';
export { createIconButton } from './icon-button';

import { createSlider } from './slider';
export { createSlider } from './slider';

import { createTab, createTabs } from './tabs';
export { createTabs, createTab } from './tabs';

import {
  createFormControl,
  createFormHelperText,
  createFormLabel,
  createInputAdornment,
  createOutlinedInput,
  createSelect,
  createTextField
} from './text-field';
export {
  createFormControl,
  createFormHelperText,
  createFormLabel,
  createInputAdornment,
  createOutlinedInput,
  createSelect,
  createTextField
} from './text-field';

import { createTooltip } from './tooltip';
export { createTooltip } from './tooltip';

export const createComponents = (theme: Theme, typography: TypographyOptions) => {
  const MuiButton = createButton(theme, typography);
  const MuiCheckbox = createCheckbox(theme, typography);
  const MuiFormControl = createFormControl(theme, typography);
  const MuiFormHelperText = createFormHelperText(theme, typography);
  const MuiFormLabel = createFormLabel(theme, typography);
  const MuiIconButton = createIconButton(theme, typography);
  const MuiInputAdornment = createInputAdornment(theme, typography);
  const MuiOutlinedInput = createOutlinedInput(theme, typography);
  const MuiSelect = createSelect(theme, typography);
  const MuiSlider = createSlider(theme, typography);
  const MuiTabs = createTabs(theme, typography);
  const MuiTab = createTab(theme, typography);
  const MuiTextField = createTextField(theme, typography);
  const MuiTooltip = createTooltip(theme, typography);

  const components: Components = {
    MuiButton,
    MuiCheckbox,
    MuiFormControl,
    MuiFormHelperText,
    MuiFormLabel,
    MuiIconButton,
    MuiInputAdornment,
    MuiOutlinedInput,
    MuiSelect,
    MuiSlider,
    MuiTextField,
    MuiTooltip,
    MuiTabs,
    MuiTab
  };
  return components;
};
