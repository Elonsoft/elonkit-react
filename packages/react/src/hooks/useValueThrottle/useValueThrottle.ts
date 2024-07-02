import { useEffect, useRef, useState } from 'react';

/**
 * The hook that throttle invoking a given callback.
 * @param value The value to throttle
 * @param delay The number of milliseconds to delay.
 * @returns The debounced value.
 */

export const useValueThrottle = <T>(value: T, delay: number) => {
  const lastRun = useRef(Date.now());
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    if (Date.now() - lastRun.current >= delay) {
      lastRun.current = Date.now();
      setThrottledValue(value);
    } else {
      const timerId = setTimeout(() => {
        lastRun.current = Date.now();
        setThrottledValue(value);
      }, delay);

      return () => clearTimeout(timerId);
    }
  }, [value, delay]);

  return throttledValue;
};
