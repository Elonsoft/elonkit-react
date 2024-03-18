import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AudioPlayerProgressBarClasses = {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the time tooltip. */
  tooltip: string;
  /** Styles applied to the time slider. */
  slider: string;
};
export type AudioPlayerProgressBarClassKey = keyof AudioPlayerProgressBarClasses;

export function getAudioPlayerProgressBarUtilityClass(slot: string): string {
  return generateUtilityClass('ESAudioPlayerProgressBar', slot);
}

export const audioPlayerProgressBarClasses: AudioPlayerProgressBarClasses = generateUtilityClasses(
  'ESAudioPlayerProgressBar',
  ['root', 'tooltip', 'slider']
);
