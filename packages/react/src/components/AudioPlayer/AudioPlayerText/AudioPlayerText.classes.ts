import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AudioPlayerTextClasses = {
  /** Styles applied to the root element. */
  root: string;
  content: string;
  divider: string;
};
export type AudioPlayerTextClassKey = keyof AudioPlayerTextClasses;

export function getAudioPlayerTextUtilityClass(slot: string): string {
  return generateUtilityClass('ESAudioPlayerText', slot);
}

export const audioPlayerTextClasses: AudioPlayerTextClasses = generateUtilityClasses('ESAudioPlayerText', [
  'root',
  'content',
  'divider'
]);
