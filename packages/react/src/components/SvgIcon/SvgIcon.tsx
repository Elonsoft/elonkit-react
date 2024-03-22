import { SvgIconProps } from './SvgIcon.types';

import clsx from 'clsx';
import { getSvgIconUtilityClass } from './SvgIcon.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';

type SvgIconOwnerState = {
  classes?: SvgIconProps['classes'];
  container?: SvgIconProps['container'];
};

const useUtilityClasses = (ownerState: SvgIconOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    svg: ['svg']
  };

  return composeClasses(slots, getSvgIconUtilityClass, classes);
};

const SvgIconRoot = styled('div', {
  name: 'ESSvgIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(() => ({
  userSelect: 'none',
  display: 'inline-flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden'
}));

const SvgIconSvg = styled('svg', {
  name: 'ESSvgIcon',
  slot: 'Svg',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [styles.svg, !ownerState.container && styles.root];
  }
})(() => ({
  userSelect: 'none',
  display: 'inline-flex',
  fill: 'none',
  flexShrink: 0
}));

/**
 * Wrapper component for the svg icons.
 */
export const SvgIcon = (inProps: SvgIconProps) => {
  const {
    children,
    className,
    classes: inClasses,
    sx,
    size,
    width,
    height,
    container,
    containerSize,
    containerWidth,
    containerHeight,
    title,
    ContainerProps,
    ...props
  } = useThemeProps({ props: inProps, name: 'ESSvgIcon' });

  const ownerState = { classes: inClasses, container };
  const classes = useUtilityClasses(ownerState);

  const svg = (
    <SvgIconSvg
      className={clsx(classes.svg, !container && [classes.root, className])}
      focusable="false"
      sx={container ? undefined : sx}
      {...props}
      style={{ width: width || size, height: height || size, ...props.style }}
    >
      {children}
      {title ? <title>{title}</title> : null}
    </SvgIconSvg>
  );

  if (container) {
    return (
      <SvgIconRoot
        className={clsx(classes.root, className)}
        sx={sx}
        {...ContainerProps}
        style={{
          width: containerWidth || containerSize || width || size,
          height: containerHeight || containerSize || height || size,
          ...ContainerProps?.style
        }}
      >
        {svg}
      </SvgIconRoot>
    );
  }

  return svg;
};
