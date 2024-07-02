import { useCallback, useRef } from 'react';

import { useLatest } from '../useLatest';
/**
 * TThe hook that creates a throttled function.
 * @param callback The callback to call.
 * @param delay The number of milliseconds to delay.
 * @returns The throttled callback.
 */

export const useCallbackThrottle = <T extends any[]>(callback: (...args: T) => void, delay: number) => {
  const lastRun = useRef(Date.now());

  const callbackRef = useLatest((...args: T) => {
    callback(...args);
  });

  const throttledCallback = useCallback(
    (...args: T) => {
      if (Date.now() - lastRun.current >= delay) {
        lastRun.current = Date.now();
        callbackRef.current(...args);
      } else {
        const timerId = setTimeout(
          () => {
            lastRun.current = Date.now();
            callbackRef.current(...args);
          },
          delay - Date.now() + lastRun.current
        );

        return () => clearTimeout(timerId);
      }
    },
    [delay]
  );

  return throttledCallback;
};
