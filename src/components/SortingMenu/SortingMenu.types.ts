import { ReactNode } from 'react';

import { SortingMenuClasses } from './SortingMenu.classes';

import { PopoverProps } from '@mui/material';

export type SortingMenuDirection = 'asc' | 'desc';

export type SortingMenuValue = {
  value: string;
  direction: SortingMenuDirection;
};

export interface SortingMenuOptionMap {
  value: string;
  label: string;
  direction: SortingMenuDirection;
  i: number;
}

export type SortingMenuProps = {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SortingMenuClasses>;

  /** The sorting options. */
  options?: {
    value: string;
    label: string;
  }[];

  PopoverProps: PopoverProps;

  /** Text for the ascending label. */
  labelAsc?: string;
  /** Text for the descending label. */
  labelDesc?: string;
  /** Text for the reset button. */
  labelResetButton?: string;
  /** Text for the sorting menu button label when multisort is enabled. */
  labelSortOrder?: string;
  /** Text for the menu title. */
  labelSortTooltip?: string;
  /** Text for the switch label. */
  labelMultisortTitle?: string;
  /** Text for the left mouse button. */
  labelMultisortLMB?: string;
  /** Text for the switch label. */
  labelMultisortMobileOn?: string;
  /** Text for the switch label. */
  labelMultisortMobileOff?: string;

  /** Icon for the ascending item direction. */
  iconItemAsc?: ReactNode;
  /** Icon for the descending item direction. */
  iconItemDesc?: ReactNode;
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
