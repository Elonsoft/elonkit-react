import { ReactNode, useEffect, useRef } from 'react';

import GlobalStyles from '@mui/material/GlobalStyles';

export const OverlayVirtualKeyboard = ({ children }: { children?: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if ('virtualKeyboard' in navigator) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const virtualKeyboard = navigator.virtualKeyboard as any;
      virtualKeyboard.overlaysContent = true;

      return () => {
        virtualKeyboard.overlaysContent = false;
      };
    }

    const onResize = () => {
      if (ref.current) {
        ref.current.style.height = `${window.visualViewport?.height}px`;
      }
    };

    window.visualViewport?.addEventListener('resize', onResize);

    return () => {
      window.visualViewport?.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div ref={ref}>
      {children}
      <GlobalStyles
        styles={{
          '.MuiModal-root': {
            paddingBottom: 'env(keyboard-inset-height, 0px)',
          },
        }}
      />
    </div>
  );
};
