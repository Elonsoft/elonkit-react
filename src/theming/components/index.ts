import { Theme } from '@mui/material/styles';
import { Components } from '@mui/material/styles/components';
import { TypographyOptions } from '@mui/material/styles/createTypography';

import { createButton } from './button';
export { createButton } from './button';

import { createCheckbox } from './checkbox';
export { createCheckbox } from './checkbox';

import { createIconButton } from './icon-button';
export { createIconButton } from './icon-button';

import { createRating } from './rating';
export { createRating } from './rating';

import { createSlider } from './slider';
export { createSlider } from './slider';

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

  const MuiIconButton = createIconButton(theme, typography);

  const MuiRating = createRating(theme, typography);

  const MuiSlider = createSlider(theme, typography);

  const MuiFormControl = createFormControl(theme, typography);
  const MuiFormHelperText = createFormHelperText(theme, typography);
  const MuiFormLabel = createFormLabel(theme, typography);
  const MuiInputAdornment = createInputAdornment(theme, typography);
  const MuiOutlinedInput = createOutlinedInput(theme, typography);
  const MuiSelect = createSelect(theme, typography);
  const MuiTextField = createTextField(theme, typography);
  const MuiTooltip = createTooltip(theme, typography);

  const components: Components = {
    MuiButton,
    MuiCheckbox,

    MuiIconButton,

    MuiRating,

    MuiSlider,

    MuiFormControl,
    MuiFormHelperText,
    MuiFormLabel,
    MuiInputAdornment,
    MuiOutlinedInput,
    MuiSelect,
    MuiTextField,

    MuiTooltip
  };
  return components;
};
