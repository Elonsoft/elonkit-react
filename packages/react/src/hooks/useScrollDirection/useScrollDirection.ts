import { useCallback, useEffect, useRef, useState } from 'react';

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
 * The hook that tracks scrolling direction of the window or passed container.
 * @param {Object} params The params object.
 * @param [params.throttleTimeout] A number that is used as a timeout for internal throttle function.
 * @param [params.container] The container whose scrolling direction should be tracked.
 * @returns A string 'up', 'down' or null if the page hasn't been scrolled.
 */
export const useScrollDirection = (params?: { throttleTimeout?: number; container?: HTMLElement }): ScrollDirection => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

  const isTicking = useRef(false);
  const lastScroll = useRef(0);

  const updateScrollDirection = useCallback(() => {
    const scroll = params?.container ? params.container.scrollTop : window.scrollY;

    setScrollDirection(scroll > lastScroll.current ? 'down' : 'up');
    lastScroll.current = Math.max(0, scroll);

    isTicking.current = false;
  }, [params]);

  useEffect(() => {
    lastScroll.current = params?.container ? params.container.scrollTop : window.scrollY;

    const onScroll = () => {
      if (!isTicking.current) {
        window.requestAnimationFrame(
          throttle(updateScrollDirection, params && params.throttleTimeout ? params.throttleTimeout : 0)
        );

        isTicking.current = true;
      }
    };

    (params && params.container ? params.container : window).addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [updateScrollDirection, params]);

  return scrollDirection;
};
