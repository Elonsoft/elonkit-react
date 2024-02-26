import { ReactNode } from 'react';

import { SFSSortingClasses } from './SFSSorting.classes';

import { SxProps, Theme } from '@mui/material';

import { SortingMenuValue } from '../../SortingMenu';

export type SFSSortingProps = {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SFSSortingClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;

  /** The sorting options. */
  options: { value: string; label: string }[];

  /** Text for the menu open button. */
  labelButton?: string;

  /** Icon for the menu button. */
  iconSort?: ReactNode;
  /** Icon for the ascending badge. */
  iconAsc?: ReactNode;
  /** Icon for the descending badge. */
  iconDesc?: ReactNode;
} & (
  | {
      /** If `true`, multiple options can be selected. */
      multiple: true;
      /** The selected options with directions. */
      value: SortingMenuValue[];
      /** Callback fired when user changes sorting. */
      onChange: (value: SortingMenuValue[]) => void;
    }
  | {
      /** If `true`, multiple options can be selected. */
      multiple?: false;
      /** The selected option with direction. */
      value: SortingMenuValue | null;
      /** Callback fired when user changes sorting. */
      onChange: (value: SortingMenuValue | null) => void;
    }
);
