import { IconContainerProps } from '../Rating.types';

import { RatingItemClasses } from './RatingItem.classes';

import { SxProps, Theme } from '@mui/material/styles';

export interface RatingItemProps {
  className?: string;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<RatingItemClasses>;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /**
   * The default value. Use when the component is not controlled.
   * @default null
   */
  defaultValue?: number;
  /** The icon to display.*/
  icon?: React.ReactNode;
  /**
   * The icon to display when empty.
   * @default
   * //<StarBorder fontSize="inherit" />
   */
  emptyIcon?: React.ReactNode;
  /** Callback fired when the state is changed. */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Callback fired when  clicked. */
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  /** Callback fired when blurred. */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback fired when focused. */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** If `true`, the component is disabled. */
  disabled?: boolean;
  /** It prevents the user from changing the value of the field */
  readOnly?: boolean;
  /** Show is item active or not */
  isActive: boolean;
  /** Show hover value */
  hover: number;
  /** Show focus value */
  focus: number;
  /** Props applied to the `RatingLabel` element. */
  labelProps?: object;
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
  getLabelText: (value: number) => string;
  highlightSelectedOnly?: boolean;
  /**
   * The component containing the icon.
   * @default function IconContainer(props) {
   *   const { value, ...other } = props;
   *   return <span {...other} />;
   * }
   */
  IconContainerComponent?: React.ElementType<IconContainerProps>;
  /*Show item value */
  itemValue: number;
  /*Element name */
  name?: string;
  /*Show rating value */
  ratingValue: number;
  /*Show rounded rating value */
  ratingValueRounded?: number | null;
  /** Show is item empty or not */
  iconEmpty?: boolean;
  /** Show is item filled or not */
  iconFilled?: boolean;
  /** Show is item hover or not */
  iconHover?: boolean;
  /** Show is item focus or not */
  iconFocus?: boolean;
  /** Show is con active or not */
  iconActive?: boolean;
  /* If `true`, element is hidden.*/
  visuallyHidden?: boolean;
  /** Show is  empty value focused or not */
  emptyValueFocused?: boolean;
}
