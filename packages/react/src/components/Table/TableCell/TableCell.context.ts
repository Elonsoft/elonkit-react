import { createContext, useContext } from 'react';

export interface TableCellContextValue {
  variant: 'head' | 'body';
  tableRef?: HTMLDivElement | null;
}

export const TableCellContext = createContext<TableCellContextValue | null>(null);

export const useTableCellContext = () => {
  const value = useContext(TableCellContext);

  if (value === null) {
    throw new Error('Not provider for TableCellContext.');
  }

  return value;
};
