import { Dispatch, MutableRefObject, SetStateAction } from 'react';

import { tableCellClasses } from './TableCell/TableCell.classes';
import { tableRowClasses } from './TableRow/TableRow.classes';

/**
 * The hook that manages resizing of the table columns.
 * @param ref A ref for the `Table` component.
 * @param rowRef A ref for the `TableRow` component without colspans.
 * @param columns The width of the columns.
 * @param setColumns The function for updating the width of the columns.
 * @returns The `onResize` and `onResizeCommit` functions taking column index and colSpan and returning callbacks for the corresponding `TableCell`.
 */
export const useTableResize = (
  ref: MutableRefObject<HTMLDivElement | null>,
  rowRef: MutableRefObject<HTMLDivElement | null>,
  columns: string[],
  setColumns: Dispatch<SetStateAction<string[]>>
) => {
  const onResize =
    (index: number, colSpan = 1) =>
    (width: number, element: HTMLElement, setResizeDividerOffsetLeft: Dispatch<SetStateAction<number | null>>) => {
      if (ref.current && rowRef.current) {
        const rows = ref.current.querySelectorAll(`.${tableRowClasses.content},.${tableRowClasses.overlap}`);

        const newColumns = columns.slice();

        const cells = Array.from(rowRef.current.querySelectorAll(`.${tableCellClasses.root}`));
        const currentWidth = element.getBoundingClientRect().width;

        setResizeDividerOffsetLeft(currentWidth);

        cells.forEach((cell, i) => {
          if (i < index) {
            newColumns[i] = `${cell.clientWidth}px`;
          } else if (i >= index && i < index + colSpan) {
            const cellWidth = cell.getBoundingClientRect().width;
            const cellMinWidth = +((cell as HTMLElement).dataset.minwidth || 0);
            newColumns[i] = `${Math.max(cellMinWidth, width * (cellWidth / currentWidth))}px`;
          }
        });

        rows.forEach((row) => {
          (row as HTMLElement).style.gridTemplateColumns = newColumns.join(' ');
        });
      }
    };

  const onResizeCommit =
    (index: number, colSpan = 1) =>
    () => {
      if (rowRef.current) {
        const newColumns = columns.slice();

        Array.from(rowRef.current.querySelectorAll(`.${tableCellClasses.root}`)).forEach((cell, i) => {
          if (i < index + colSpan) {
            newColumns[i] = `${cell.getBoundingClientRect().width}px`;
          }
        });

        setColumns(newColumns);
      }
    };

  return { onResize, onResizeCommit } as const;
};
