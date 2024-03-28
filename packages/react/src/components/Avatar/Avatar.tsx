import { ReactNode, useEffect, useState } from 'react';

import { AvatarProps } from './Avatar.types';

import clsx from 'clsx';
import { avatarClasses, getAvatarUtilityClass } from './Avatar.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { capitalize, svgIconClasses } from '@mui/material';

type AvatarOwnerState = {
  classes?: AvatarProps['classes'];
  size: NonNullable<AvatarProps['size']>;
  variant: NonNullable<AvatarProps['variant']>;
};

const useUtilityClasses = (ownerState: AvatarOwnerState) => {
  const { classes, variant = 'square' } = ownerState;

  const slots = {
    root: ['root', `variant${capitalize(variant)}`],
    image: ['image']
  };

  return composeClasses(slots, getAvatarUtilityClass, classes);
};

function useLoaded(src: string): 'loaded' | 'error' | null {
  const [loaded, setLoaded] = useState<'loaded' | 'error' | null>(null);

  useEffect(() => {
    if (!src) {
      return undefined;
    }

    setLoaded(null);

    let active = true;
    const image = new Image();
    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded('loaded');
    };
    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded('error');
    };
    image.src = src;

    return () => {
      active = false;
    };
  }, [src]);

  return loaded;
}

const AvatarRoot = styled('div', {
  name: 'ESAvatar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { variant }
    } = props;

    return [styles.root, styles[`variant${capitalize(variant)}`]];
  }
})<{ ownerState: AvatarOwnerState }>(({ theme, ownerState: { size } }) => ({
  height: `${size}px`,
  width: `${size}px`,
  backgroundColor: theme.palette.monoA.A100,
  backgroundSize: '100%',
  textAlign: 'center',
  objectFit: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  color: theme.palette.monoA.A500,

  [`& .${svgIconClasses.root}`]: {
    color: theme.palette.monoA.A400
  },

  [`&.${avatarClasses.variantSquare}`]: {
    borderRadius: '8px'
  },

  [`&.${avatarClasses.variantCircle}`]: {
    borderRadius: '50%'
  }
}));

const AvatarImage = styled('img', {
  name: 'ESAvatar',
  slot: 'Image',
  overridesResolver: (props, styles) => {
    return [styles.image];
  }
})({
  width: '100%',
  height: '100%'
});

export const Avatar = (inProps: AvatarProps) => {
  const {
    className,
    children,
    variant = 'square',
    src,
    alt,
    size = 40,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESAvatar'
  });
  const ownerState = { ...props, variant, size };
  const classes = useUtilityClasses(ownerState);
  const hasImgLoaded = useLoaded(src || '') === 'loaded';
  const hasImgNotFailing = src ? hasImgLoaded : false;

  let child: ReactNode = null;

  if (hasImgNotFailing) {
    child = <AvatarImage className={clsx(className, classes.image)} src={src} />;
  } else if (!!children || children === 0) {
    child = children;
  } else if (src && alt) {
    child = alt;
  }

  return (
    <AvatarRoot className={clsx(className, classes.root)} ownerState={ownerState} {...props}>
      {child}
    </AvatarRoot>
  );
};
