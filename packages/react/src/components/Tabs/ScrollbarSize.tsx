import { CSSProperties, useEffect, useRef } from 'react';

import { debounce, ownerWindow } from '@mui/material';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';

export const ScrollbarSize = ({
  onChange,
  style,
  ...props
}: {
  onChange: (height: number) => void;
  style?: CSSProperties;
  [key: string]: any;
}) => {
  const scrollbarHeight = useRef<number>(0);
  const nodeRef = useRef<HTMLDivElement>(null);

  const setMeasurements = () => {
    if (nodeRef.current) {
      scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
    }
  };

  useEnhancedEffect(() => {
    if (nodeRef.current && scrollbarHeight.current) {
      const handleResize = debounce(() => {
        const prevHeight = scrollbarHeight.current;
        setMeasurements();

        if (prevHeight !== scrollbarHeight.current) {
          onChange(scrollbarHeight.current);
        }
      });

      const containerWindow = ownerWindow(nodeRef.current);
      containerWindow.addEventListener('resize', handleResize);
      return () => {
        handleResize.clear();
        containerWindow.removeEventListener('resize', handleResize);
      };
    }
  }, [onChange]);

  useEffect(() => {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);

  return (
    <div
      ref={nodeRef}
      style={{
        width: 99,
        height: 99,
        position: 'absolute',
        top: -9999,
        overflow: 'scroll',
        ...style
      }}
      {...props}
    />
  );
};
