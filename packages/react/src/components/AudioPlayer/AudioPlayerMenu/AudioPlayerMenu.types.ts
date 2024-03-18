import { ReactNode } from 'react';

import { AudioPlayerBaseProps } from '../AudioPlayer.types';

import { AudioPlayerClasses } from '../AudioPlayer.classes';

import { SxProps, Theme } from '@mui/material';

export interface AudioPlayerMenuProps extends Pick<AudioPlayerBaseProps, 'onDownloadClick' | 'TooltipProps'> {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<AudioPlayerClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;
  /** Playback rate for the audio.*/
  rate: number;
  /**
   * Possible playback rates for the audio.
   * @default [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]
   */
  rates?: number[];

  /** Menu open state */
  isMenuOpen: boolean;
  /** Menu open state setter */
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;

  /** Icon for the download button. */
  iconDownload?: React.ReactNode;
  /** Icon for the options button. */
  iconOptions?: React.ReactNode;
  /** Icon for the menu back button. */
  iconBack?: React.ReactNode;
  /** Icon for the rate button. */
  iconRate?: React.ReactNode;
  /** Icon for the arrow in rate button. */
  iconRateOpen?: React.ReactNode;
  /** Icon for the checked rate item. */
  iconRateCheck?: React.ReactNode;

  /** Text for the menu back button label. */
  labelBack?: string;
  /** Text for the rate button label. */
  labelRate?: string;
  /** Text for the normal rate (1x) button label. */
  labelRateNormal?: string;
  /** Text for the download button label. */
  labelDownload?: string;
  /** Text for the options button aria-label. */
  labelOptions?: string;

  /** Callback fired when user change rate input. */
  onRateInputChange: (value: number) => () => void;
}
