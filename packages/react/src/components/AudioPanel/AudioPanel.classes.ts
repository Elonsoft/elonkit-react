import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AudioPanelClasses = {
  /** Styles applied to the root element. */
  root: string;
  divider: string;
  closeButton: string;
  control: string;
  controlWrapper: string;
  controlGroup: string;
  progressBarWrapper: string;
};
export type AudioPanelClassKey = keyof AudioPanelClasses;

export function getAudioPanelUtilityClass(slot: string): string {
  return generateUtilityClass('ESAudioPanel', slot);
}

export const audioPanelClasses: AudioPanelClasses = generateUtilityClasses('ESAudioPanel', [
  'root',
  'divider',
  'closeButton',
  'control',
  'controlWrapper',
  'controlGroup',
  'progressBarWrapper'
]);
