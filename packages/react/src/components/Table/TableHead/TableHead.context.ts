import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface TableHeadContextValue {
  ref: HTMLDivElement | null;
  setRef: Dispatch<SetStateAction<HTMLDivElement | null>>;
  tableRef: HTMLDivElement | null;
}

export const TableHeadContext = createContext<TableHeadContextValue | null>(null);

export const useTableHeadContext = () => {
  const value = useContext(TableHeadContext);

  if (value === null) {
    throw new Error('No provider for TableHeadContext.');
  }

  return value;
};
