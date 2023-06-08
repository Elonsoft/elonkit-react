import { DetailedHTMLProps, HTMLAttributes, ReactNode, SVGProps } from 'react';

import { SvgIconClasses } from './SvgIcon.classes';

import { SxProps, Theme } from '@mui/material/styles';

export type SvgIconProps = {
  children?: ReactNode;
  /** Override or extend the styles applied to the component. */
  classes?: Partial<SvgIconClasses>;
  /** Class applied to the root element. */
  className?: string;
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps<Theme>;

  /** The width and height of the icon. */
  size?: string;
  /** The width of the icon. */
  width?: string;
  /** The height of the icon. */
  height?: string;

  /** If true, allows to set the container size, without resizing the svg element itself. */
  container?: boolean;
  /** The width and height of the icon container. */
  containerSize?: string;
  /** The width of the icon container. */
  containerWidth?: string;
  /** The height of the icon container. */
  containerHeight?: string;

  /** Props applied to the container element. */
  ContainerProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
} & SVGProps<SVGSVGElement>;
