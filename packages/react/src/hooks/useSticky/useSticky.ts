import { MutableRefObject, useEffect, useLayoutEffect } from 'react';

import { useLatest } from '../useLatest';
import { useResizeObserver } from '../useResizeObserver';

/**
 * The hook that mimics position sticky via transform.
 * @param ref The ref of the elements.
 * @param options The options object.
 * @param options.top The top offset.
 * @param options.bottom The bottom offset.
 * @param options.relativeTo The scrolling ancestor for the sticky element.
 */
export const useSticky = (
  ref: MutableRefObject<HTMLElement | null>,
  options: { top?: number; bottom?: number; relativeTo?: HTMLElement | null }
) => {
  const update = () => {
    if (!ref.current) {
      return;
    }

    if (typeof options.top === 'number') {
      ref.current.style.transform = '';
      const elementTop = ref.current.getBoundingClientRect().top;
      const relativeTop = options.relativeTo ? options.relativeTo.getBoundingClientRect().top : 0;
      ref.current.style.transform = `translate3d(0px, ${Math.max(0, relativeTop - elementTop + options.top)}px, 0px)`;
    } else if (typeof options.bottom === 'number') {
      ref.current.style.transform = '';
      const elementBottom = ref.current.getBoundingClientRect().bottom;
      const relativeTop = options.relativeTo ? options.relativeTo.getBoundingClientRect().top : 0;
      const relativeHeight = options.relativeTo ? options.relativeTo.clientHeight : window.innerHeight;
      ref.current.style.transform = `translate3d(0px, ${-Math.max(
        0,
        elementBottom - relativeTop + options.bottom - relativeHeight
      )}px, 0px)`;
    } else {
      ref.current.style.transform = '';
    }
  };

  const latestUpdate = useLatest(update);

  useEffect(() => {
    const element = options.relativeTo || document;

    const onEvent = () => {
      return latestUpdate.current();
    };

    element.addEventListener('scroll', onEvent);

    return () => {
      element.removeEventListener('scroll', onEvent);
    };
  }, [options.relativeTo]);

  useLayoutEffect(() => {
    update();
  }, [options.top, options.bottom]);

  useResizeObserver(ref, update, { box: 'border-box' });
  useResizeObserver({ current: options.relativeTo || document.body }, update, { box: 'border-box' });
};
