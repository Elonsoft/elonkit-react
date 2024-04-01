const easeInOutSin = (time: number) => {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
};

export const animate = (
  property: 'scrollTop' | 'scrollLeft',
  element: HTMLElement,
  to: number,
  options: { ease?: (time: number) => number; duration?: number }
) => {
  const { ease = easeInOutSin, duration = 300 } = options;
  let start: number | null = null;
  const from = element[property];
  let cancelled = false;

  const cancel = () => {
    cancelled = true;
  };

  const step = (timestamp: number) => {
    if (cancelled) {
      return;
    }

    if (start === null) {
      start = timestamp;
    }

    const time = Math.min(1, (timestamp - start) / duration);
    element[property] = ease(time) * (to - from) + from;

    if (time < 1) {
      requestAnimationFrame(step);
    }
  };

  if (from === to) {
    return cancel;
  }

  requestAnimationFrame(step);
  return cancel;
};
