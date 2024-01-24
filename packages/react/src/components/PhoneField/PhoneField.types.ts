import { ReactNode } from 'react';

import { TextFieldProps } from '@mui/material';

import { CountryCode } from 'libphonenumber-js';

export type PhoneFieldProps = {
  /** An array of accepted countries. */
  countries: CountryCode[];
  /** Country to select by default. */
  defaultCountry?: CountryCode;
  /** An array of countries to display at the top of the dropdown list. */
  preferredCountries?: CountryCode[];

  /** Used to determine the flag icon for a given country code. */
  getCountryFlag?: (code: CountryCode) => ReactNode;
  /** Used to determine the country display name for a given country code. */
  getCountryDisplayName?: (code: CountryCode) => ReactNode;

  /** Text for the menu button aria-label. */
  labelMenu?: string;

  /** Icon for the menu button when country is undefined. */
  iconMenu?: ReactNode;
  /** Icon for the menu button drop down arrow. */
  iconMenuArrow?: ReactNode;
} & TextFieldProps;
