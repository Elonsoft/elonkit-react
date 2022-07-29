import { Dispatch, MutableRefObject, SetStateAction } from 'react';

export const useTableResize = (
  tableRef: MutableRefObject<HTMLDivElement | null>,
  rowRef: MutableRefObject<HTMLDivElement | null>,
  columns: string[],
  setColumns: Dispatch<SetStateAction<string[]>>
) => {
  const onResize =
    (index: number, colSpan = 1) =>
    (width: number, element: HTMLElement) => {
      if (tableRef.current && rowRef.current) {
        const rows = tableRef.current.querySelectorAll('.ESTableRow-content,.ESTableRow-overlap');
        const newColumns = columns.slice();

        const cells = Array.from(rowRef.current.querySelectorAll('.ESTableCell-root'));
        const currentWidth = element.getBoundingClientRect().width;

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
    (width: number) => {
      if (rowRef.current) {
        const newColumns = columns.slice();
        newColumns[index] = `${width}px`;
        Array.from(rowRef.current.querySelectorAll('.ESTableCell-root')).forEach((cell, i) => {
          if (i < index + colSpan) {
            newColumns[i] = `${cell.getBoundingClientRect().width}px`;
          }
        });
        setColumns(newColumns);
      }
    };

  return { onResize, onResizeCommit } as const;
};
