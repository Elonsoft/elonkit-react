import { useEffect, useImperativeHandle, useState } from 'react';

import { useAudioPlayerContext } from './AudioPlayer.context';

import { useLatest } from '../../hooks';

interface useAudioPlayerArgs {
  src: string;
  loop?: boolean;
  audioRef?: React.Ref<HTMLAudioElement>;
  hover: number;
  onVolumeChange?: (event: Event) => void;
  onAbort?: (event: Event) => void;
  onCanPlay?: (event: Event) => void;
  onCanPlayThrough?: (event: Event) => void;
  onDurationChange?: (event: Event) => void;
  onEmptied?: (event: Event) => void;
  onEnded?: (event: Event) => void;
  onError?: (event: Event) => void;
  onLoadedData?: (event: Event) => void;
  onLoadedMetadata?: (event: Event) => void;
  onLoadStart?: (event: Event) => void;
  onPause?: (event: Event) => void;
  onPlay?: (event: Event) => void;
  onPlaying?: (event: Event) => void;
  onProgress?: (event: Event) => void;
  onRateChange?: (event: Event) => void;
  onSeeked?: () => void;
  onSeeking?: () => void;
  onStalled?: (event: Event) => void;
  onSuspend?: (event: Event) => void;
  onTimeUpdate?: (event: Event) => void;
  onWaiting?: (event: Event) => void;
}

export const useAudioPlayer = ({
  src,
  loop,
  audioRef,
  hover,
  onAbort,
  onCanPlay,
  onCanPlayThrough,
  onDurationChange,
  onEmptied,
  onEnded,
  onError,
  onLoadedData,
  onLoadedMetadata,
  onLoadStart,
  onPause,
  onPlay,
  onPlaying,
  onProgress,
  onRateChange,
  onSeeked,
  onSeeking,
  onStalled,
  onSuspend,
  onTimeUpdate,
  onVolumeChange,
  onWaiting
}: useAudioPlayerArgs) => {
  const { volume, setVolume } = useAudioPlayerContext();
  const [audio] = useState(new Audio());
  const [isMuted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [isCurrentVisible, setCurrentVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [rate, setRate] = useState(1);
  const [isChanging, setChanging] = useState(false);
  const [currentChanging, setCurrentChanging] = useState(0);

  useImperativeHandle(audioRef, () => audio, [audio]);

  const onAbortLatest = useLatest((event: Event) => {
    if (onAbort) {
      onAbort(event);
    }
  });

  const onCanPlayLatest = useLatest((event: Event) => {
    if (onCanPlay) {
      onCanPlay(event);
    }
  });

  const onCanPlayThroughLatest = useLatest((event: Event) => {
    if (onCanPlayThrough) {
      onCanPlayThrough(event);
    }
  });

  const onDurationChangeLatest = useLatest((event: Event) => {
    const { duration } = event.target as HTMLAudioElement;
    setDuration(duration);
    if (onDurationChange) {
      onDurationChange(event);
    }
  });

  const onEmptiedLatest = useLatest((event: Event) => {
    if (onEmptied) {
      onEmptied(event);
    }
  });

  const onEndedLatest = useLatest((event: Event) => {
    audio.currentTime = 0;
    setPlaying(false);
    setCurrentVisible(false);
    if (onEnded) {
      onEnded(event);
    }
  });

  const onErrorLatest = useLatest((event: Event) => {
    if (onError) {
      onError(event);
    }
  });

  const onLoadedDataLatest = useLatest((event: Event) => {
    const { currentTime } = event.target as HTMLAudioElement;
    setCurrent(currentTime);
    if (onLoadedData) {
      onLoadedData(event);
    }
  });

  const onLoadedMetadataLatest = useLatest((event: Event) => {
    if (onLoadedMetadata) {
      onLoadedMetadata(event);
    }
  });

  const onLoadStartLatest = useLatest((event: Event) => {
    if (onLoadStart) {
      onLoadStart(event);
    }
  });

  const onPauseLatest = useLatest((event: Event) => {
    setPlaying(false);
    if (onPause) {
      onPause(event);
    }
  });

  const onPlayLatest = useLatest((event: Event) => {
    setPlaying(true);
    setCurrentVisible(true);
    if (onPlay) {
      onPlay(event);
    }
  });

  const onPlayingLatest = useLatest((event: Event) => {
    if (onPlaying) {
      onPlaying(event);
    }
  });

  const onProgressLatest = useLatest((event: Event) => {
    if (onProgress) {
      onProgress(event);
    }
  });

  const onRateChangeLatest = useLatest((event: Event) => {
    const { playbackRate } = event.target as HTMLAudioElement;
    setRate(playbackRate);
    if (onRateChange) {
      onRateChange(event);
    }
  });

  const onStalledLatest = useLatest((event: Event) => {
    if (onStalled) {
      onStalled(event);
    }
  });

  const onSuspendLatest = useLatest((event: Event) => {
    if (onSuspend) {
      onSuspend(event);
    }
  });

  const onTimeUpdateLatest = useLatest((event: Event) => {
    const { currentTime } = event.target as HTMLAudioElement;
    setCurrent(currentTime);
    if (onTimeUpdate) {
      onTimeUpdate(event);
    }
  });

  const onVolumeChangeLatest = useLatest((event: Event) => {
    const { volume, muted } = event.target as HTMLAudioElement;
    setVolume(Math.round(volume * 100));
    setMuted(muted);

    if (onVolumeChange) {
      onVolumeChange(event);
    }
  });

  const onWaitingLatest = useLatest((event: Event) => {
    if (onWaiting) {
      onWaiting(event);
    }
  });

  const onTogglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const onToggleMute = () => {
    if (audio.muted || volume === 0) {
      if (volume === 0) {
        audio.volume = 1;
      }
      audio.muted = false;
    } else {
      audio.muted = true;
    }
  };

  const onTimeChange = (event: Event, value: number | number[]) => {
    if (onSeeking && !isChanging) {
      onSeeking();
    }

    if (event.type === 'input') {
      setCurrentChanging(value as number);
    } else {
      setCurrentChanging(duration * hover);
    }
    setChanging(true);
  };

  const onTimeChangeCommitted = (event: React.SyntheticEvent | Event, value: number | number[]) => {
    if (onSeeked) {
      onSeeked();
    }
    audio.currentTime = event.type === 'change' ? (value as number) : currentChanging;
    setChanging(false);
    setCurrent(audio.currentTime);
    setCurrentVisible(true);
  };

  const onVolumeInputChange = (_: unknown, value: number | number[]) => {
    audio.muted = false;
    audio.volume = (value as number) / 100;
  };

  const onRateInputChange = (value: number) => () => {
    audio.playbackRate = value;
  };

  useEffect(() => {
    audio.volume = volume / 100;
  }, [audio]);

  useEffect(() => {
    const onAudioAbort = (event: Event) => {
      onAbortLatest.current(event);
    };
    const onAudioCanPlay = (event: Event) => {
      onCanPlayLatest.current(event);
    };
    const onAudioCanPlayThrough = (event: Event) => {
      onCanPlayThroughLatest.current(event);
    };
    const onAudioDurationChange = (event: Event) => {
      onDurationChangeLatest.current(event);
    };
    const onAudioEmptied = (event: Event) => {
      onEmptiedLatest.current(event);
    };
    const onAudioEnded = (event: Event) => {
      onEndedLatest.current(event);
    };
    const onAudioError = (event: Event) => {
      onErrorLatest.current(event);
    };
    const onAudioLoadedData = (event: Event) => {
      onLoadedDataLatest.current(event);
    };
    const onAudioLoadedMetadata = (event: Event) => {
      onLoadedMetadataLatest.current(event);
    };
    const onAudioLoadStart = (event: Event) => {
      onLoadStartLatest.current(event);
    };
    const onAudioPause = (event: Event) => {
      onPauseLatest.current(event);
    };
    const onAudioPlay = (event: Event) => {
      onPlayLatest.current(event);
    };
    const onAudioPlaying = (event: Event) => {
      onPlayingLatest.current(event);
    };
    const onAudioProgress = (event: Event) => {
      onProgressLatest.current(event);
    };
    const onAudioRateChange = (event: Event) => {
      onRateChangeLatest.current(event);
    };
    const onAudioStalled = (event: Event) => {
      onStalledLatest.current(event);
    };
    const onAudioSuspend = (event: Event) => {
      onSuspendLatest.current(event);
    };
    const onAudioTimeUpdate = (event: Event) => {
      onTimeUpdateLatest.current(event);
    };
    const onAudioVolumeChange = (event: Event) => {
      onVolumeChangeLatest.current(event);
    };
    const onAudioWaiting = (event: Event) => {
      onWaitingLatest.current(event);
    };

    audio.addEventListener('abort', onAudioAbort);
    audio.addEventListener('canplay', onAudioCanPlay);
    audio.addEventListener('canplaythrough', onAudioCanPlayThrough);
    audio.addEventListener('durationchange', onAudioDurationChange);
    audio.addEventListener('emptied', onAudioEmptied);
    audio.addEventListener('ended', onAudioEnded);
    audio.addEventListener('error', onAudioError);
    audio.addEventListener('loadeddata', onAudioLoadedData);
    audio.addEventListener('loadedmetadata', onAudioLoadedMetadata);
    audio.addEventListener('loadstart', onAudioLoadStart);
    audio.addEventListener('pause', onAudioPause);
    audio.addEventListener('play', onAudioPlay);
    audio.addEventListener('playing', onAudioPlaying);
    audio.addEventListener('progress', onAudioProgress);
    audio.addEventListener('ratechange', onAudioRateChange);
    audio.addEventListener('stalled', onAudioStalled);
    audio.addEventListener('suspend', onAudioSuspend);
    audio.addEventListener('timeupdate', onAudioTimeUpdate);
    audio.addEventListener('volumechange', onAudioVolumeChange);
    audio.addEventListener('waiting', onAudioWaiting);

    return () => {
      audio.removeEventListener('abort', onAudioAbort);
      audio.removeEventListener('canplay', onAudioCanPlay);
      audio.removeEventListener('canplaythrough', onAudioCanPlayThrough);
      audio.removeEventListener('durationchange', onAudioDurationChange);
      audio.removeEventListener('emptied', onAudioEmptied);
      audio.removeEventListener('ended', onAudioEnded);
      audio.removeEventListener('error', onAudioError);
      audio.removeEventListener('loadeddata', onAudioLoadedData);
      audio.removeEventListener('loadedmetadata', onAudioLoadedMetadata);
      audio.removeEventListener('loadstart', onAudioLoadStart);
      audio.removeEventListener('pause', onAudioPause);
      audio.removeEventListener('play', onAudioPlay);
      audio.removeEventListener('playing', onAudioPlaying);
      audio.removeEventListener('progress', onAudioProgress);
      audio.removeEventListener('ratechange', onAudioRateChange);
      audio.removeEventListener('stalled', onAudioStalled);
      audio.removeEventListener('suspend', onAudioSuspend);
      audio.removeEventListener('timeupdate', onAudioTimeUpdate);
      audio.removeEventListener('volumechange', onAudioVolumeChange);
      audio.removeEventListener('waiting', onAudioWaiting);
    };
  }, [audio]);

  useEffect(() => {
    audio.volume = volume / 100;
  }, [audio, volume]);

  useEffect(() => {
    audio.src = src;
  }, [audio, src]);

  useEffect(() => {
    audio.loop = !!loop;
  }, [audio, loop]);

  useEffect(() => {
    return () => {
      audio.pause();
    };
  }, [audio]);

  return {
    duration,
    isMuted,
    isCurrentVisible,
    isPlaying,
    isChanging,
    currentChanging,
    volume,
    current,
    rate,
    onTogglePlay,
    onToggleMute,
    onVolumeInputChange,
    onRateInputChange,
    onTimeChange,
    onTimeChangeCommitted
  };
};
