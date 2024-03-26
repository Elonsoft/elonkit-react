import { RatingClasses } from './Rating.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface IconContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number;
}

export interface RatingProps {
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<RatingClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /**
   * The default value. Use when the component is not controlled.
   * @default null
   */
  defaultValue?: number;
  /** The icon to display.*/
  icon?: React.ReactNode;
  /** The icon to display when empty.*/
  emptyIcon?: React.ReactNode;
  /** Callback fired when the state is changed. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: number | null) => void;
  /**
   * The size of the component.
   * @default 300
   */
  size?: 400 | 350 | 300 | 250 | 200 | 150 | 100 | 50;

  /** If `true`, the component is disabled. */
  disabled?: boolean;
  /** It prevents the user from changing the value of the field */
  readOnly?: boolean;
  /**
   * Maximum rating.
   * @default 5
   */
  max?: number;
  /**
   * The component containing the icon.
   * @default function IconContainer(props) {
   *   const { value, ...other } = props;
   *   return <span {...other} />;
   * }
   */
  IconContainerComponent?: React.ElementType<IconContainerProps>;
  /**
   * The label read when the rating input is empty.
   * @default 'Empty'
   */
  emptyLabelText?: React.ReactNode;
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the rating.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations].
   * @param {number} value The rating label's value to format.
   * @returns {string}
   * @default function defaultLabelText(value) {
   *   return `${value} Star${value !== 1 ? 's' : ''}`;
   * }
   */
  getLabelText?: (value: number) => string;
  /**
   * The rating value.
   */
  value?: number | null;
  /**
   * The minimum increment value change allowed.
   * @default 0.5
   */
  precision?: number;
  /*Element name */
  name?: string;
  /**
   * Callback function that is fired when the hover state changes.
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {number} value The new value.
   */
  onChangeActive?: (event: React.SyntheticEvent, value: number) => void;
  /**
   * @ignore
   */
  onMouseLeave: (event: React.MouseEvent) => void;
  /**
   * @ignore
   */
  onMouseMove: (event: React.MouseEvent) => void;
  /**
   * If `true`, only the selected icon will be highlighted.
   * @default false
   */
  highlightSelectedOnly?: boolean;
  /* If `true`, element is hidden.*/
  visuallyHidden?: boolean;
  /* Label text*/
  label?: string;
  /* Value for empty label*/
  labelEmptyValue?: string;
  /* If true apply icon active styles*/
  iconActive?: boolean;
  /* For decimal rating styles*/
  decimal?: string;
}
