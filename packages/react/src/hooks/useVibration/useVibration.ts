import { useCallback } from 'react';

/**
 * The hook that activates vibration on mobile device.
 */
export const useVibration = () =>
  useCallback((duration: VibratePattern) => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(duration);
    }
  }, []);
