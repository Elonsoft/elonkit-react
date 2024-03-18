import { AudioPlayerTextProps } from './AudioPlayerText.types';

import clsx from 'clsx';
import { getAudioPlayerTextUtilityClass } from './AudioPlayerText.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Divider, dividerClasses, Typography } from '@mui/material';

type AudioPlayerTextOwnerState = {
  classes?: AudioPlayerTextProps['classes'];
  stuck?: boolean;
};

const useUtilityClasses = (ownerState: AudioPlayerTextOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    content: ['content'],
    divider: ['divider']
  };

  return composeClasses(slots, getAudioPlayerTextUtilityClass, classes);
};

const AudioPlayerTextRoot = styled('div', {
  name: 'ESAudioPlayerText',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '32px',
  padding: '0 8px'
});

const AudioPlayerTextContent = styled('div', {
  name: 'ESAudioPlayerText',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center'
});

const AudioPlayerListDivider = styled(Divider, {
  name: 'ESAudioPlayerText',
  slot: 'Divider',
  overridesResolver: (props, styles) => styles.divider
})(({ theme }) => ({
  [`&.${dividerClasses.root}`]: {
    borderColor: theme.palette.monoA.A100,
    marginRight: '8px'
  }
}));

/**
 * The AudioPlayerText displays information and actions relating to the current screen.
 */
export const AudioPlayerText = (inProps: AudioPlayerTextProps) => {
  const { className, text, caption, ...props } = useThemeProps({
    props: inProps,
    name: 'ESAudioPlayerText'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <AudioPlayerTextRoot className={clsx(classes.root, className)}>
      <AudioPlayerListDivider flexItem className={classes.divider} orientation="vertical" />
      <AudioPlayerTextContent className={classes.content}>
        <Typography color="monoA.A900" variant="caption">
          {text}
        </Typography>
        {caption && (
          <Typography color="monoA.A600" variant="caption">
            {caption}
          </Typography>
        )}
      </AudioPlayerTextContent>
    </AudioPlayerTextRoot>
  );
};
