import { MutableRefObject, useRef } from 'react';

const MOUSE_LOCS_TRACKED = 3;
const DELAY = 300;

/**
 * The hook that can differentiate between a user trying hover over a dropdown item vs trying to navigate into a submenu's contents. This hook is inspired by https://github.com/kamens/jQuery-menu-aim.
 * @param ref The ref of the element.
 * @param position The element position.
 * @param isActive Whether the other submenu row is already active.
 * @param callback The callback to call when a item is activated.
 * @returns The onMouseMove, onMouseOver and onMouseLeave handlers.
 */
export const useMenuAim = (
  ref: MutableRefObject<HTMLElement | null>,
  position: string,
  isActive: boolean,
  callback: (target: HTMLElement) => void
) => {
  const mouseLocs = useRef<Array<{ x: number; y: number }>>([]);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastDelayLoc = useRef<{ x: number; y: number } | null>(null);

  const activationDelay = () => {
    if (!ref.current) {
      return 0;
    }

    if (!isActive) {
      // If there is no other submenu row already active, then
      // go ahead and activate immediately.
      return 0;
    }

    const rect = ref.current.getBoundingClientRect();

    const upperLeft = {
      x: rect.left,
      y: rect.top
    };
    const upperRight = {
      x: rect.left + rect.width,
      y: rect.top
    };
    const lowerLeft = {
      x: rect.left + rect.width,
      y: rect.top
    };
    const lowerRight = {
      x: rect.left + rect.width,
      y: rect.top + rect.height
    };

    const loc = mouseLocs.current[mouseLocs.current.length - 1];
    let prevLoc = mouseLocs.current[0];

    if (!loc) {
      return 0;
    }

    if (!prevLoc) {
      prevLoc = loc;
    }

    if (prevLoc.x < rect.left || prevLoc.x > lowerRight.x || prevLoc.y < rect.top || prevLoc.y > lowerRight.y) {
      // If the previous mouse location was outside of the entire
      // menu's bounds, immediately activate.
      return 0;
    }

    if (lastDelayLoc.current && loc.x === lastDelayLoc.current.x && loc.y === lastDelayLoc.current.y) {
      // If the mouse hasn't moved since the last time we checked
      // for activation status, immediately activate.
      return 0;
    }

    const slope = (a: { x: number; y: number }, b: { x: number; y: number }) => {
      return (b.y - a.y) / (b.x - a.x);
    };

    let decreasingCorner = upperRight;
    let increasingCorner = lowerRight;

    if (position === 'left') {
      decreasingCorner = upperRight;
      increasingCorner = lowerRight;
    } else if (position === 'below') {
      decreasingCorner = lowerRight;
      increasingCorner = lowerLeft;
    } else if (position === 'above') {
      decreasingCorner = upperLeft;
      increasingCorner = upperRight;
    }

    const decreasingSlope = slope(loc, decreasingCorner),
      increasingSlope = slope(loc, increasingCorner),
      prevDecreasingSlope = slope(prevLoc, decreasingCorner),
      prevIncreasingSlope = slope(prevLoc, increasingCorner);

    if (decreasingSlope < prevDecreasingSlope && increasingSlope > prevIncreasingSlope) {
      // Mouse is moving from previous location towards the
      // currently activated submenu. Delay before activating a
      // new menu row, because user may be moving into submenu.
      lastDelayLoc.current = loc;
      return DELAY;
    }

    lastDelayLoc.current = null;
    return 0;
  };

  const possiblyActivate = (target: HTMLElement) => {
    const delay = activationDelay();

    if (delay) {
      timeout.current = setTimeout(() => {
        possiblyActivate(target);
      }, delay);
    } else {
      callback(target);
    }
  };

  const onMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    mouseLocs.current.push({ x: event.pageX, y: event.pageY });

    if (mouseLocs.current.length > MOUSE_LOCS_TRACKED) {
      mouseLocs.current.shift();
    }
  };

  const onMouseOver = (event: React.MouseEvent<HTMLElement>) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }

    possiblyActivate(event.target as HTMLElement);
  };

  const onMouseLeave = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }
  };

  return { onMouseMove, onMouseOver, onMouseLeave };
};
