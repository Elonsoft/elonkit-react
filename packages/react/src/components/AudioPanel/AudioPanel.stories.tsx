import { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { AudioPanel } from './AudioPanel';

import { AudioPlayerProvider } from '../AudioPlayer';

const meta: Meta<typeof AudioPanel> = {
  tags: ['autodocs'],
  component: AudioPanel,
  parameters: {
    references: ['AudioPanel', 'AudioPlayerProvider']
  },
  argTypes: {
    audioRef: {
      table: {
        disable: true
      }
    },
    TooltipProps: {
      table: {
        disable: true
      }
    },
    AudioPlayerMenuProps: {
      table: {
        disable: true
      }
    },
    AudioPlayerPlayButtonProps: {
      table: {
        disable: true
      }
    },
    AudioPlayerProgressBarProps: {
      table: {
        disable: true
      }
    },
    AudioPlayerTimeProps: {
      table: {
        disable: true
      }
    },
    AudioPlayerVolumeProps: {
      table: {
        disable: true
      }
    }
  },
  args: {
    src: 'https://www.fesliyanstudios.com/musicfiles/2019-06-12_-_Homework_-_David_Fesliyan.mp3'
  }
};

export default meta;
type Story = StoryObj<typeof AudioPanel>;

export const Demo: Story = {
  render: (args) => {
    return (
      <Box paddingTop="160px">
        <AudioPlayerProvider>
          <AudioPanel {...args} />
        </AudioPlayerProvider>
      </Box>
    );
  }
};

/** We can use `audioRef` in order to interact directly with audio element and call it's imperative actions. For example,
stopping one audio track when another is played. */
export const ImperativeActions: Story = {
  render: () => {
    const firstAudioRef = useRef<HTMLAudioElement | null>(null);
    const secondAudioRef = useRef<HTMLAudioElement | null>(null);
    const thirdAudioRef = useRef<HTMLAudioElement | null>(null);

    const onFirstPlay = () => {
      if (secondAudioRef.current) {
        secondAudioRef.current.pause();
      }
      if (thirdAudioRef.current) {
        thirdAudioRef.current.pause();
      }
    };

    const onFirstEnded = () => {
      if (secondAudioRef.current) {
        // eslint-disable-next-line storybook/context-in-play-function
        secondAudioRef.current.play();
      }
    };

    const onSecondEnded = () => {
      if (thirdAudioRef.current) {
        // eslint-disable-next-line storybook/context-in-play-function
        thirdAudioRef.current.play();
      }
    };

    const onSecondPlay = () => {
      if (firstAudioRef.current) {
        firstAudioRef.current.pause();
      }
      if (thirdAudioRef.current) {
        thirdAudioRef.current.pause();
      }
    };

    const onThirdPlay = () => {
      if (firstAudioRef.current) {
        firstAudioRef.current.pause();
      }
      if (secondAudioRef.current) {
        secondAudioRef.current.pause();
      }
    };

    return (
      <Box paddingTop="16px">
        <AudioPlayerProvider>
          <AudioPanel
            audioRef={firstAudioRef}
            src="https://www.fesliyanstudios.com/musicfiles/2019-06-12_-_Homework_-_David_Fesliyan.mp3"
            onEnded={onFirstEnded}
            onPlay={onFirstPlay}
          />
          <br />
          <AudioPanel
            AudioPlayerPlayButtonProps={{ onNext: () => {}, onPrev: () => {} }}
            audioRef={secondAudioRef}
            src="https://www.fesliyanstudios.com/musicfiles/2020-11-16_-_Down_Days_-_www.FesliyanStudios.com_David_Renda/2020-11-16_-_Down_Days_-_www.FesliyanStudios.com_David_Renda.mp3"
            onClose={() => {}}
            onEnded={onSecondEnded}
            onPlay={onSecondPlay}
          />
          <br />
          <AudioPanel
            audioRef={thirdAudioRef}
            src="https://www.fesliyanstudios.com/musicfiles/2020-11-16_-_Down_Days_-_www.FesliyanStudios.com_David_Renda/2020-11-16_-_Down_Days_-_www.FesliyanStudios.com_David_Renda.mp3"
            onPlay={onThirdPlay}
          />
        </AudioPlayerProvider>
      </Box>
    );
  }
};
