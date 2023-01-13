import { createContext, useContext } from 'react';

export interface TableContextValue {
  columns: string[];
  striped: boolean;
}

export const TableContext = createContext<TableContextValue | null>(null);

export const useTableContext = () => {
  const value = useContext(TableContext);

  if (value === null) {
    throw new Error('No provider for TableContext.');
  }

  return value;
};
