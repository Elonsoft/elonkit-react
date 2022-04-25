import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export type AutocompleteContextValue<T> = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  options: T[];
  getOptionValue: (option: T) => number | string;
  getOptionLabel: (option: T) => number | string;
} & (
  | {
      value: T | null;
      onChange?: (value: T) => void;
      multiple?: false;
    }
  | {
      value: T[];
      onChange?: (value: T[]) => void;
      multiple: true;
    }
);

export const AutocompleteContext = createContext<AutocompleteContextValue<unknown> | null>(null);

export const useAutocompleteContext = <T>() => {
  const value = useContext(AutocompleteContext) as AutocompleteContextValue<T> | null;

  if (value === null) {
    throw new Error('No provider for AutocompleteContext.');
  }

  return value;
};
