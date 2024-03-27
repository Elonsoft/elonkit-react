/* eslint-disable react/display-name */
import React from 'react';

import { useTheme } from '@mui/material/styles';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const FileIconIconVariant = React.forwardRef<SVGPathElement, SvgIconProps>((props, ref) => {
  const theme = useTheme();
  return (
    <SvgIcon
      height={props.height}
      style={{ width: `${props.width}px`, height: `${props.height}px`, fill: 'none', overflow: 'visible' }}
      viewBox="0 0 36 48"
      width={props.width}
      {...props}
    >
      <path
        d="M35.5 12V41.5C35.5 44.8137 32.8137 47.5 29.5 47.5H6.5C3.18629 47.5 0.5 44.8137 0.5 41.5V6.5C0.5 3.18629 3.18629 0.5 6.5 0.5H24"
        stroke={theme.vars.palette.monoA.A150}
        style={{ vectorEffect: 'non-scaling-stroke' }}
      />
      <path
        ref={ref}
        clipRule="evenodd"
        d="M24.5 0H24V8.45455C24 10.4126 25.5874 12 27.5455 12L36 12V11.5L24.5 0Z"
        fill={theme.vars.palette.monoA.A150}
        fillRule="evenodd"
      />
    </SvgIcon>
  );
});
