import { useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down' | null;

const throttle = (callback: () => void, timeout: number) => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  const perform = () => {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      callback();

      clearTimeout(timer);
      timer = undefined;
    }, timeout);
  };

  return perform;
};

/**
 * The hook that detects if the page has been scrolled up or scrolled down.
 * @param throttleTimeout A number that is used as timeout for internal throttle function.
 * @returns A string with value 'up' or 'down' and null if the page hasn't been scrolled.
 */
export const useScrollDirection = (throttleTimeout = 0): ScrollDirection => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

  let isTicking = false;
  let lastScroll = 0;

  const updateScrollDirection = () => {
    const scroll = window.scrollY;

    setScrollDirection(scroll > lastScroll ? 'down' : 'up');
    lastScroll = Math.max(0, scroll);

    isTicking = false;
  };

  useEffect(() => {
    lastScroll = window.scrollY;

    const onScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(throttle(updateScrollDirection, throttleTimeout));

        isTicking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [updateScrollDirection]);

  return scrollDirection;
};
