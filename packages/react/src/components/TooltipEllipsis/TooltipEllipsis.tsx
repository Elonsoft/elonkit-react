import { useRef, useState } from 'react';

import { TooltipEllipsisProps } from './TooltipEllipsis.types';

import Tooltip from '@mui/material/Tooltip';

import { useResizeObserver } from '../../hooks';

export const TooltipEllipsis = ({ children, ...props }: TooltipEllipsisProps) => {
  const [overflow, setOverflow] = useState(false);

  const ref = useRef<HTMLElement | null>(null);
  const childrenRef = useRef<HTMLElement | null>(null);

  useResizeObserver(ref, () => {
    const isOverflow =
      (childrenRef.current && childrenRef.current.scrollWidth > childrenRef.current.offsetWidth) ||
      (ref.current && ref.current.scrollWidth > ref.current.offsetWidth) ||
      (childrenRef.current && childrenRef.current.scrollHeight > childrenRef.current.offsetHeight) ||
      (ref.current && ref.current.scrollHeight > ref.current.offsetHeight);

    setOverflow(!!isOverflow);
  });

  return (
    <Tooltip
      {...props}
      disableFocusListener={!overflow}
      disableHoverListener={!overflow}
      disableTouchListener={!overflow}
    >
      {children({ ref, childrenRef })}
    </Tooltip>
  );
};
