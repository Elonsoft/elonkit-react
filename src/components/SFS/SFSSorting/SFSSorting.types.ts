import { SxProps, Theme } from '@mui/material';

export interface SFSSortingProps {
  /** Override or extend the styles applied to the component. */
  classes?: Partial<any>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Class applied to the root element. */
  className?: string;
  /** The sorting options. */
  options: { value: string; label: string }[];
  /** The value of the sorting component. */
  value?: { value: string; direction: IDirection }[];
  /** The value of the sorting component. */
  onChange: (value?: { value: string; direction: IDirection }[]) => void;
}

export interface ISortingValue {
  value: string;
  direction: IDirection;
}

export type SortingValues = ISortingValue[];

export type IDirection = null | 'asc' | 'desc';
