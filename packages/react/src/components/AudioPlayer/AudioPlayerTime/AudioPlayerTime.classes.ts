import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AudioPlayerTimeClasses = {
  /** Styles applied to the root element. */
  root: string;
};
export type AudioPlayerTimeClassKey = keyof AudioPlayerTimeClasses;

export function getAudioPlayerTimeUtilityClass(slot: string): string {
  return generateUtilityClass('ESAudioPlayerTime', slot);
}

export const audioPlayerTimeClasses: AudioPlayerTimeClasses = generateUtilityClasses('ESAudioPlayerTime', ['root']);
