import { useRef, useState } from 'react';

import { useIntersectionObserver } from '../useIntersectionObserver';

/**
 * The hook that allows to detect sticky element stuck state.
 * @returns The `stuck` state and the `sentinel` element which should be placed above or below the sticky element.
 */
export const useStuckSentinel = () => {
  const [stuck, setStuck] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver(
    ref,
    (entries) => {
      setStuck(entries[0].intersectionRatio < 1);
    },
    { threshold: [0] }
  );

  const sentinel = <div ref={ref} data-test="stuckSentinel" />;

  return { stuck, sentinel };
};
