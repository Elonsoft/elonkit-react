import { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Box from '@mui/material/Box';

import { AudioPlayer } from './AudioPlayer';
import { AudioPlayerProvider } from './AudioPlayerProvider';

const meta: Meta<typeof AudioPlayer> = {
  tags: ['autodocs'],
  component: AudioPlayer,
  parameters: {
    references: ['AudioPlayer', 'AudioPlayerProvider']
  },
  argTypes: {
    rates: {
      table: {
        disable: true
      }
    },
    audioRef: {
      table: {
        disable: true
      }
    },
    TooltipProps: {
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
type Story = StoryObj<typeof AudioPlayer>;

export const Demo: Story = {
  render: (args) => {
    return (
      <Box paddingTop="16px">
        <AudioPlayerProvider>
          <AudioPlayer {...args} />
        </AudioPlayerProvider>
      </Box>
    );
  }
};

/** We can use `audioRef` in order to interact directly with audio element and call it's imperative actions. For example,
stopping one audio track when another is played. */
export const ImperativeActions: Story = {
  render: function Render() {
    const firstAudioRef = useRef<HTMLAudioElement | null>(null);
    const secondAudioRef = useRef<HTMLAudioElement | null>(null);

    const onFirstPlay = () => {
      if (secondAudioRef.current) {
        secondAudioRef.current.pause();
      }
    };

    const onFirstEnded = () => {
      if (secondAudioRef.current) {
        // eslint-disable-next-line storybook/context-in-play-function
        secondAudioRef.current.play();
      }
    };

    const onSecondPlay = () => {
      if (firstAudioRef.current) {
        firstAudioRef.current.pause();
      }
    };

    return (
      <Box paddingTop="16px">
        <AudioPlayerProvider>
          <AudioPlayer
            audioRef={firstAudioRef}
            src="https://www.fesliyanstudios.com/musicfiles/2019-06-12_-_Homework_-_David_Fesliyan.mp3"
            onEnded={onFirstEnded}
            onPlay={onFirstPlay}
          />
          <br />
          <AudioPlayer
            audioRef={secondAudioRef}
            src="https://www.fesliyanstudios.com/musicfiles/2020-11-16_-_Down_Days_-_www.FesliyanStudios.com_David_Renda/2020-11-16_-_Down_Days_-_www.FesliyanStudios.com_David_Renda.mp3"
            onPlay={onSecondPlay}
          />
        </AudioPlayerProvider>
      </Box>
    );
  }
};
