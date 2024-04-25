import { useEffect, useState } from 'react';

/**
 * The hook that observes the intersection of elements with an ancestor or viewport and determines the active one.
 * @param items An array of ids of elements to be observed.
 * @param options An options object allowing you to set options for the observation.
 * @param throttleTime The time in milliseconds used to throttle the observation.
 */
export const useScrollSpy = (items: string[], options?: IntersectionObserverInit, throttleTime = 0): string => {
  const [activeElementId, setActiveElementId] = useState('');

  useEffect(() => {
    const throttle = (callback: (entries: IntersectionObserverEntry[]) => void, wait: number) => {
      let throttled = false;

      return (entries: IntersectionObserverEntry[]) => {
        if (!throttled) {
          callback(entries);
          throttled = true;
          setTimeout(() => (throttled = false), wait);
        }
      };
    };

    const observer = new IntersectionObserver(
      throttle((entries: IntersectionObserverEntry[]) => {
        entries.forEach((e) => e.isIntersecting && setActiveElementId(e.target.id));
      }, throttleTime),
      options
    );

    items.forEach((id) => {
      if (!id) {
        return;
      }

      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items, options, throttleTime]);

  return activeElementId;
};
