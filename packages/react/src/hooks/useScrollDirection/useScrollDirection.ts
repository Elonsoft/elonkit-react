import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

type ScrollDirection = {
  scrollDirection: 'up' | 'down' | null;
  elementRef: RefObject<HTMLDivElement>;
};

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
 * The hook that tracks scrolling direction of the window or selected element.
 * @param throttleTimeout A number that is used as timeout for internal throttle function.
 * @returns A string with value 'up', 'down', null if the page hasn't been scrolled
 * and ref to be set on element whose scrolling direction should be tracked.
 */
export const useScrollDirection = (throttleTimeout = 0): ScrollDirection => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

  const elementRef = useRef<HTMLDivElement>(null);

  let isTicking = false;
  let lastScroll = 0;

  const updateScrollDirection = useCallback(() => {
    const scroll = elementRef.current ? elementRef.current.scrollTop : window.scrollY;

    setScrollDirection(scroll > lastScroll ? 'down' : 'up');
    lastScroll = Math.max(0, scroll);

    isTicking = false;
  }, [elementRef.current]);

  useEffect(() => {
    lastScroll = elementRef.current ? elementRef.current.scrollTop : window.scrollY;

    const onScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(throttle(updateScrollDirection, throttleTimeout));

        isTicking = true;
      }
    };

    (elementRef.current ? elementRef.current : window).addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [updateScrollDirection, elementRef.current]);

  return { scrollDirection, elementRef };
};
