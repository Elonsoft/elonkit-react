import { MutableRefObject, ReactNode } from 'react';

import { SFSSortingDirection, SFSSortingOptionMap } from '../SFS/SFSSorting/SFSSorting.types';

import { SortingMenuClasses } from './SortingMenu.classes';

import { SFSSortingValue } from '../SFS';

export type SortingMenuProps = {
  /** An array of sorting values to display and interact with. */
  values?: SFSSortingValue[];
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SortingMenuClasses>;
  /** The anchor element to which the sorting menu will be positioned relative to. */
  menuAnchor?: HTMLElement | null;
  /** Callback function triggered when the sorting menu is closed. */
  onMenuClose?: () => void;
  /** Ref object to store a reference to the menu list element. */
  menuListRef?: MutableRefObject<HTMLUListElement | null>;
  /** A mapping of sorting values to their corresponding sorting options. */
  sortMap?: Record<string, SFSSortingOptionMap>;
  /** A mapping of sorting values to their index and direction. */
  valuesMap?: Record<
    string,
    {
      i: number;
      direction: SFSSortingDirection;
    }
  >;
  /** The sorting options. */
  options?: {
    value: string;
    label: string;
  }[];
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
  /** If true, allows multiple sorting values to be selected simultaneously. */
  multiple?: boolean;
  /** Callback function triggered when the selected sorting values change. */
  onChange?: (values: SFSSortingValue[] | SFSSortingValue | null) => void;
};
