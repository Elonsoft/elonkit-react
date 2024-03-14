import { ChangeEvent, MouseEvent, useCallback, useState } from 'react';

export const useShiftSelected = <P>(initialState: P[], change: (addOrRemove: boolean, items: P[]) => void) => {
  const [lastSelectedItem, setLastSelectedItem] = useState<P | null>(null);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, item: P) => {
      if ((event as unknown as MouseEvent).nativeEvent.shiftKey && lastSelectedItem !== item) {
        const currentIndex = initialState.findIndex((x) => x === item);
        const lastIndex = initialState.findIndex((x) => x === lastSelectedItem);
        const start = Math.min(currentIndex, lastIndex);
        const end = Math.max(currentIndex, lastIndex);
        const isChecked = event.target.checked;

        if (start > -1 && end > -1) {
          change(isChecked, initialState.slice(start, end + 1));
          setLastSelectedItem(item);
          return;
        }
      } else {
        setLastSelectedItem(item);
      }
      change(event.target.checked, [item]);
    },
    [change, initialState, lastSelectedItem, setLastSelectedItem]
  );

  return onChange;
};
