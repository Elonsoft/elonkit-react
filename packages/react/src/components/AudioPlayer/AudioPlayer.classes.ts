import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AudioPlayerClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AudioPlayerClassKey = keyof AudioPlayerClasses;

export function getAudioPlayerUtilityClass(slot: string): string {
  return generateUtilityClass('ESAudioPlayer', slot);
}

export const audioPlayerClasses: AudioPlayerClasses = generateUtilityClasses('ESAudioPlayer', ['root']);
