import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AudioPlayerVolumeClasses = {
  /** Styles applied to the root element. */
  root: string;
  slider: string;
  volumeButton: string;
};
export type AudioPlayerVolumeClassKey = keyof AudioPlayerVolumeClasses;

export function getAudioPlayerVolumeUtilityClass(slot: string): string {
  return generateUtilityClass('ESAudioPlayerVolume', slot);
}

export const audioPlayerVolumeClasses: AudioPlayerVolumeClasses = generateUtilityClasses('ESAudioPlayerVolume', [
  'root',
  'slider',
  'volumeButton'
]);
