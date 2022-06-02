/* eslint-disable @typescript-eslint/no-empty-interface, @typescript-eslint/no-unused-vars */

import {
  BreakpointOverrides,
  Palette,
  PaletteColor,
  PaletteColorOptions,
  Theme,
  TypographyVariants,
  TypographyVariantsOptions
} from '@mui/material/styles';
import { Components } from '@mui/material/styles/components';
import { CommonColors } from '@mui/material/styles/createPalette';
import { ComponentNameToClassKey, ComponentsOverrides } from '@mui/material/styles/overrides';
import { ComponentsProps, ComponentsPropsList } from '@mui/material/styles/props';
import { Color, ComponentsVariants } from '@mui/material';
import { ButtonPropsSizeOverrides } from '@mui/material/Button';
import { FormControlPropsSizeOverrides } from '@mui/material/FormControl';
import { IconButtonPropsSizeOverrides } from '@mui/material/IconButton';
import { InputBasePropsSizeOverrides } from '@mui/material/InputBase';
import { TextFieldPropsSizeOverrides } from '@mui/material/TextField';
import { TypographyPropsVariantOverrides } from '@mui/material/Typography';

import {
  AlertActionsClassKey,
  AlertActionsProps,
  AlertClassKey,
  AlertCloseClassKey,
  AlertCloseProps,
  AlertProps,
  AlertTitleClassKey,
  AlertTitleProps
} from './components/Alert';
import { AudioPlayerClassKey, AudioPlayerProps } from './components/AudioPlayer';
import {
  DialogActionsClassKey,
  DialogActionsProps,
  DialogArrowClassKey,
  DialogArrowProps,
  DialogClassKey,
  DialogCloseClassKey,
  DialogCloseProps,
  DialogContentClassKey,
  DialogContentProps,
  DialogProps,
  DialogTitleClassKey,
  DialogTitleProps
} from './components/Dialog';
import { DropzoneClassKey, DropzoneProps } from './components/Dropzone';
import { EmptyStateClassKey, EmptyStateProps } from './components/EmptyState';
import {
  FileIconBadgeClassKey,
  FileIconBadgeProps,
  FileIconClassKey,
  FileIconProps,
  FileIconTextClassKey,
  FileIconTextProps
} from './components/FileIcon';
import {
  FileInfoClassKey,
  FileInfoContentClassKey,
  FileInfoContentProps,
  FileInfoMetaClassKey,
  FileInfoMetaProps,
  FileInfoMetaSeparatorClassKey,
  FileInfoMetaSeparatorProps,
  FileInfoNameClassKey,
  FileInfoNameProps,
  FileInfoProps
} from './components/FileInfo';
import { FlagClassKey } from './components/Flags';
import { FormatDateProps } from './components/FormatDate';
import { FormatSizeProps } from './components/FormatSize';
import {
  GalleryActionsClassKey,
  GalleryActionsProps,
  GalleryClassKey,
  GalleryDescriptionClassKey,
  GalleryDescriptionProps,
  GalleryMetaClassKey,
  GalleryMetaProps,
  GalleryPanelClassKey,
  GalleryPanelProps,
  GalleryProps,
  GallerySwiperClassKey,
  GallerySwiperImageClassKey,
  GallerySwiperImageProps,
  GallerySwiperProps,
  GalleryThumbnailsClassKey,
  GalleryThumbnailsImageClassKey,
  GalleryThumbnailsImageProps,
  GalleryThumbnailsItemClassKey,
  GalleryThumbnailsItemProps,
  GalleryThumbnailsProps
} from './components/Gallery';
import { KbdClassKey, KbdProps } from './components/Kbd';
import { LinkClassKey, LinkProps } from './components/Link';
import { MenuItemClassKey, MenuItemProps } from './components/MenuItem';
import {
  PaginationClassKey,
  PaginationPagesClassKey,
  PaginationPagesProps,
  PaginationProps,
  PaginationRangeClassKey,
  PaginationRangeProps
} from './components/Pagination';
import {
  SpinnerDashRingClassKey,
  SpinnerDashRingProps,
  SpinnerFadingBarsClassKey,
  SpinnerFadingBarsProps,
  SpinnerFadingDotsClassKey,
  SpinnerFadingDotsProps,
  SpinnerFadingDoubleRingClassKey,
  SpinnerFadingDoubleRingProps,
  SpinnerFadingRingClassKey,
  SpinnerFadingRingProps,
  SpinnerRingClassKey,
  SpinnerRingProps
} from './components/Spinner';
import {
  SwiperButtonClassKey,
  SwiperButtonProps,
  SwiperClassKey,
  SwiperPaginationClassKey,
  SwiperPaginationProps,
  SwiperProps
} from './components/Swiper';
import { SwitchClassKey, SwitchProps } from './components/Switch';
import { TableActionsClassKey, TableActionsProps } from './components/TableActions';

export interface ISurfacePalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  on: string;
}

export interface IShadowPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface IOverlayPalette {
  modal: string;
  filter: string;
  gallery: string;
}

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    ESAlert: AlertProps;
    ESAlertActions: AlertActionsProps;
    ESAlertClose: AlertCloseProps;
    ESAlertTitle: AlertTitleProps;
    ESAudioPlayer: AudioPlayerProps;
    ESDialog: DialogProps;
    ESDialogActions: DialogActionsProps;
    ESDialogArrow: DialogArrowProps;
    ESDialogClose: DialogCloseProps;
    ESDialogContent: DialogContentProps;
    ESDialogTitle: DialogTitleProps;
    ESDropzone: DropzoneProps;
    ESEmptyState: EmptyStateProps;
    ESFileIcon: FileIconProps;
    ESFileIconBadge: FileIconBadgeProps;
    ESFileIconText: FileIconTextProps;
    ESFileInfo: FileInfoProps;
    ESFileInfoContent: FileInfoContentProps;
    ESFileInfoMeta: FileInfoMetaProps;
    ESFileInfoMetaSeparator: FileInfoMetaSeparatorProps;
    ESFileInfoName: FileInfoNameProps;
    ESFormatDate: FormatDateProps;
    ESFormatSize: FormatSizeProps;
    ESGallery: GalleryProps;
    ESGalleryActions: GalleryActionsProps;
    ESGalleryDescription: GalleryDescriptionProps;
    ESGalleryMeta: GalleryMetaProps;
    ESGalleryPanel: GalleryPanelProps;
    ESGallerySwiper: GallerySwiperProps;
    ESGallerySwiperImage: GallerySwiperImageProps;
    ESGalleryThumbnails: GalleryThumbnailsProps;
    ESGalleryThumbnailsImage: GalleryThumbnailsImageProps;
    ESGalleryThumbnailsItem: GalleryThumbnailsItemProps;
    ESKbd: KbdProps;
    ESLink: LinkProps;
    ESMenuItem: MenuItemProps;
    ESPagination: PaginationProps;
    ESPaginationPages: PaginationPagesProps;
    ESPaginationRange: PaginationRangeProps;
    ESSpinnerDashRing: SpinnerDashRingProps;
    ESSpinnerFadingBars: SpinnerFadingBarsProps;
    ESSpinnerFadingDots: SpinnerFadingDotsProps;
    ESSpinnerFadingDoubleRing: SpinnerFadingDoubleRingProps;
    ESSpinnerFadingRing: SpinnerFadingRingProps;
    ESSpinnerRing: SpinnerRingProps;
    ESSwiper: SwiperProps;
    ESSwitch: SwitchProps;
    ESSwiperButton: SwiperButtonProps;
    ESSwiperPagination: SwiperPaginationProps;
    ESTableActions: TableActionsProps;
  }
}

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    ESAlert: AlertClassKey;
    ESAlertActions: AlertActionsClassKey;
    ESAlertClose: AlertCloseClassKey;
    ESAlertTitle: AlertTitleClassKey;
    ESAudioPlayer: AudioPlayerClassKey;
    ESDialog: DialogClassKey;
    ESDialogActions: DialogActionsClassKey;
    ESDialogArrow: DialogArrowClassKey;
    ESDialogClose: DialogCloseClassKey;
    ESDialogContent: DialogContentClassKey;
    ESDialogTitle: DialogTitleClassKey;
    ESDropzone: DropzoneClassKey;
    ESEmptyState: EmptyStateClassKey;
    ESFileIcon: FileIconClassKey;
    ESFileIconBadge: FileIconBadgeClassKey;
    ESFileIconText: FileIconTextClassKey;
    ESFileInfo: FileInfoClassKey;
    ESFileInfoContent: FileInfoContentClassKey;
    ESFileInfoMeta: FileInfoMetaClassKey;
    ESFileInfoMetaSeparator: FileInfoMetaSeparatorClassKey;
    ESFileInfoName: FileInfoNameClassKey;
    ESFlag: FlagClassKey;
    ESGallery: GalleryClassKey;
    ESGalleryActions: GalleryActionsClassKey;
    ESGalleryDescription: GalleryDescriptionClassKey;
    ESGalleryMeta: GalleryMetaClassKey;
    ESGalleryPanel: GalleryPanelClassKey;
    ESGallerySwiper: GallerySwiperClassKey;
    ESGallerySwiperImage: GallerySwiperImageClassKey;
    ESGalleryThumbnails: GalleryThumbnailsClassKey;
    ESGalleryThumbnailsImage: GalleryThumbnailsImageClassKey;
    ESGalleryThumbnailsItem: GalleryThumbnailsItemClassKey;
    ESKbd: KbdClassKey;
    ESLink: LinkClassKey;
    ESMenuItem: MenuItemClassKey;
    ESPagination: PaginationClassKey;
    ESPaginationPages: PaginationPagesClassKey;
    ESPaginationRange: PaginationRangeClassKey;
    ESSpinnerDashRing: SpinnerDashRingClassKey;
    ESSpinnerFadingBars: SpinnerFadingBarsClassKey;
    ESSpinnerFadingDots: SpinnerFadingDotsClassKey;
    ESSpinnerFadingDoubleRing: SpinnerFadingDoubleRingClassKey;
    ESSpinnerFadingRing: SpinnerFadingRingClassKey;
    ESSpinnerRing: SpinnerRingClassKey;
    ESSwiper: SwiperClassKey;
    ESSwitch: SwitchClassKey;
    ESSwiperButton: SwiperButtonClassKey;
    ESSwiperPagination: SwiperPaginationClassKey;
    ESTableActions: TableActionsClassKey;
  }
}

declare module '@mui/material/styles/components' {
  interface Components {
    ESAlert?: {
      defaultProps?: ComponentsProps['ESAlert'];
      styleOverrides?: ComponentsOverrides['ESAlert'];
    };
    ESAlertClose?: {
      defaultProps?: ComponentsProps['ESAlertClose'];
      styleOverrides?: ComponentsOverrides['ESAlertClose'];
    };
    ESAlertActions?: {
      defaultProps?: ComponentsProps['ESAlertActions'];
      styleOverrides?: ComponentsOverrides['ESAlertActions'];
    };
    ESAlertTitle?: {
      defaultProps?: ComponentsProps['ESAlertTitle'];
      styleOverrides?: ComponentsOverrides['ESAlertTitle'];
    };
    ESAudioPlayer?: {
      defaultProps?: ComponentsProps['ESAudioPlayer'];
      styleOverrides?: ComponentsOverrides['ESAudioPlayer'];
    };
    ESDialog?: {
      defaultProps?: ComponentsProps['ESDialog'];
      styleOverrides?: ComponentsOverrides['ESDialog'];
    };
    ESDialogActions?: {
      defaultProps?: ComponentsProps['ESDialogActions'];
      styleOverrides?: ComponentsOverrides['ESDialogActions'];
    };
    ESDialogArrow?: {
      defaultProps?: ComponentsProps['ESDialogArrow'];
      styleOverrides?: ComponentsOverrides['ESDialogArrow'];
    };
    ESDialogClose?: {
      defaultProps?: ComponentsProps['ESDialogClose'];
      styleOverrides?: ComponentsOverrides['ESDialogClose'];
    };
    ESDialogContent?: {
      defaultProps?: ComponentsProps['ESDialogContent'];
      styleOverrides?: ComponentsOverrides['ESDialogContent'];
    };
    ESDialogTitle?: {
      defaultProps?: ComponentsProps['ESDialogTitle'];
      styleOverrides?: ComponentsOverrides['ESDialogTitle'];
    };
    ESEmptyState?: {
      defaultProps?: ComponentsProps['ESEmptyState'];
      styleOverrides?: ComponentsOverrides['ESEmptyState'];
    };
    ESGallery?: {
      defaultProps?: ComponentsProps['ESGallery'];
      styleOverrides?: ComponentsOverrides['ESGallery'];
    };
    ESGalleryActions?: {
      defaultProps?: ComponentsProps['ESGalleryActions'];
      styleOverrides?: ComponentsOverrides['ESGalleryActions'];
    };
    ESGalleryDescription?: {
      defaultProps?: ComponentsProps['ESGalleryDescription'];
      styleOverrides?: ComponentsOverrides['ESGalleryDescription'];
    };
    ESGalleryMeta?: {
      defaultProps?: ComponentsProps['ESGalleryMeta'];
      styleOverrides?: ComponentsOverrides['ESGalleryMeta'];
    };
    ESGalleryPanel?: {
      defaultProps?: ComponentsProps['ESGalleryPanel'];
      styleOverrides?: ComponentsOverrides['ESGalleryPanel'];
    };
    ESGallerySwiper?: {
      defaultProps?: ComponentsProps['ESGallerySwiper'];
      styleOverrides?: ComponentsOverrides['ESGallerySwiper'];
    };
    ESGallerySwiperImage?: {
      defaultProps?: ComponentsProps['ESGallerySwiperImage'];
      styleOverrides?: ComponentsOverrides['ESGallerySwiperImage'];
    };
    ESGalleryThumbnails?: {
      defaultProps?: ComponentsProps['ESGalleryThumbnails'];
      styleOverrides?: ComponentsOverrides['ESGalleryThumbnails'];
    };
    ESGalleryThumbnailsImage?: {
      defaultProps?: ComponentsProps['ESGalleryThumbnailsImage'];
      styleOverrides?: ComponentsOverrides['ESGalleryThumbnailsImage'];
    };
    ESGalleryThumbnailsItem?: {
      defaultProps?: ComponentsProps['ESGalleryThumbnailsItem'];
      styleOverrides?: ComponentsOverrides['ESGalleryThumbnailsItem'];
    };
    ESSwiper?: {
      defaultProps?: ComponentsProps['ESSwiper'];
      styleOverrides?: ComponentsOverrides['ESSwiper'];
    };
    ESSwitch?: {
      defaultProps?: ComponentsProps['ESSwitch'];
      styleOverrides?: ComponentsOverrides['ESSwitch'];
    };
    ESSwiperButton?: {
      defaultProps?: ComponentsProps['ESSwiperButton'];
      styleOverrides?: ComponentsOverrides['ESSwiperButton'];
    };
    ESSwiperPagination?: {
      defaultProps?: ComponentsProps['ESSwiperPagination'];
      styleOverrides?: ComponentsOverrides['ESSwiperPagination'];
    };
    ESTableActions?: {
      defaultProps?: ComponentsProps['ESTableActions'];
      styleOverrides?: ComponentsOverrides['ESTableActions'];
    };
    ESDropzone?: {
      defaultProps?: ComponentsProps['ESDropzone'];
      styleOverrides?: ComponentsOverrides['ESDropzone'];
    };
    ESFileIcon?: {
      defaultProps?: ComponentsProps['ESFileIcon'];
      styleOverrides?: ComponentsOverrides['ESFileIcon'];
    };
    ESFileIconBadge?: {
      defaultProps?: ComponentsProps['ESFileIconBadge'];
      styleOverrides?: ComponentsOverrides['ESFileIconBadge'];
    };
    ESFileIconText?: {
      defaultProps?: ComponentsProps['ESFileIconText'];
      styleOverrides?: ComponentsOverrides['ESFileIconText'];
    };
    ESFileInfo?: {
      defaultProps?: ComponentsProps['ESFileInfo'];
      styleOverrides?: ComponentsOverrides['ESFileInfo'];
    };
    ESFileInfoContent?: {
      defaultProps?: ComponentsProps['ESFileInfoContent'];
      styleOverrides?: ComponentsOverrides['ESFileInfoContent'];
    };
    ESFileInfoMeta?: {
      defaultProps?: ComponentsProps['ESFileInfoMeta'];
      styleOverrides?: ComponentsOverrides['ESFileInfoMeta'];
    };
    ESFileInfoMetaSeparator?: {
      defaultProps?: ComponentsProps['ESFileInfoMetaSeparator'];
      styleOverrides?: ComponentsOverrides['ESFileInfoMetaSeparator'];
    };
    ESFileInfoName?: {
      defaultProps?: ComponentsProps['ESFileInfoName'];
      styleOverrides?: ComponentsOverrides['ESFileInfoName'];
    };
    ESFlag?: {
      styleOverrides?: ComponentsOverrides['ESFlag'];
    };
    ESFormatDate?: {
      defaultProps?: ComponentsProps['ESFormatDate'];
    };
    ESFormatSize?: {
      defaultProps?: ComponentsProps['ESFormatSize'];
    };
    ESKbd?: {
      defaultProps?: ComponentsProps['ESKbd'];
    };
    ESLink?: {
      defaultProps?: ComponentsProps['ESLink'];
      styleOverrides?: ComponentsOverrides['ESLink'];
    };
    ESMenuItem?: {
      defaultProps?: ComponentsProps['ESMenuItem'];
      styleOverrides?: ComponentsOverrides['ESMenuItem'];
    };
    ESPagination?: {
      defaultProps?: ComponentsProps['ESPagination'];
      styleOverrides?: ComponentsOverrides['ESPagination'];
    };
    ESPaginationPages?: {
      defaultProps?: ComponentsProps['ESPaginationPages'];
      styleOverrides?: ComponentsOverrides['ESPaginationPages'];
    };
    ESPaginationRange?: {
      defaultProps?: ComponentsProps['ESPaginationRange'];
      styleOverrides?: ComponentsOverrides['ESPaginationRange'];
    };
    ESSpinnerDashRing?: {
      defaultProps?: ComponentsProps['ESSpinnerDashRing'];
      styleOverrides?: ComponentsOverrides['ESSpinnerDashRing'];
    };
    ESSpinnerFadingBars?: {
      defaultProps?: ComponentsProps['ESSpinnerFadingBars'];
      styleOverrides?: ComponentsOverrides['ESSpinnerFadingBars'];
    };
    ESSpinnerFadingDots?: {
      defaultProps?: ComponentsProps['ESSpinnerFadingDots'];
      styleOverrides?: ComponentsOverrides['ESSpinnerFadingDots'];
    };
    ESSpinnerFadingDoubleRing?: {
      defaultProps?: ComponentsProps['ESSpinnerFadingDoubleRing'];
      styleOverrides?: ComponentsOverrides['ESSpinnerFadingDoubleRing'];
    };
    ESSpinnerFadingRing?: {
      defaultProps?: ComponentsProps['ESSpinnerFadingRing'];
      styleOverrides?: ComponentsOverrides['ESSpinnerFadingRing'];
    };
    ESSpinnerRing?: {
      defaultProps?: ComponentsProps['ESSpinnerRing'];
      styleOverrides?: ComponentsOverrides['ESSpinnerRing'];
    };
  }
}

declare module '@mui/material' {
  interface Color {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A25: string;
    A50: string;
    A75: string;
    A100: string;
    A150: string;
    A200: string;
    A300: string;
    A400: string;
    A500: string;
    A600: string;
    A700: string;
    A800: string;
    A900: string;
  }
}

declare module '@mui/material/styles' {
  interface PaletteColor {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A25: string;
    A50: string;
    A75: string;
    A100: string;
    A150: string;
    A200: string;
    A300: string;
    A400: string;
    A500: string;
    A600: string;
    A700: string;
    A800: string;
    A900: string;
  }

  interface Palette {
    monoA: PaletteColor;
    monoB: PaletteColor;
    white: PaletteColor;
    black: PaletteColor;
    red: PaletteColor;
    brown: PaletteColor;
    orange: PaletteColor;
    yellow: PaletteColor;
    green: PaletteColor;
    marine: PaletteColor;
    sky: PaletteColor;
    blue: PaletteColor;
    violet: PaletteColor;
    purple: PaletteColor;
    pink: PaletteColor;
    teal: PaletteColor;
    grey: Color;
    greyscale: PaletteColor;
    surface: ISurfacePalette;
    shadow: {
      down: IShadowPalette;
      up: IShadowPalette;
      left: IShadowPalette;
      right: IShadowPalette;
    };
    overlay: IOverlayPalette;
  }

  interface PaletteOptions {
    monoA?: PaletteColorOptions;
    monoB?: PaletteColorOptions;
    white?: PaletteColorOptions;
    black?: PaletteColorOptions;
    red?: PaletteColorOptions;
    brown?: PaletteColorOptions;
    orange?: PaletteColorOptions;
    yellow?: PaletteColorOptions;
    green?: PaletteColorOptions;
    marine?: PaletteColorOptions;
    sky?: PaletteColorOptions;
    blue?: PaletteColorOptions;
    violet?: PaletteColorOptions;
    purple?: PaletteColorOptions;
    pink?: PaletteColorOptions;
    teal?: PaletteColorOptions;
    grey?: Partial<Color>;
    greyscale?: PaletteColorOptions;
    surface?: Partial<ISurfacePalette>;
    shadow?: Partial<{
      down: IShadowPalette;
      up: IShadowPalette;
      left: IShadowPalette;
      right: IShadowPalette;
    }>;
    overlay?: IOverlayPalette;
  }

  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    tabletXS: true;
    desktopXS: true;
  }

  interface TypographyVariants {
    body400: React.CSSProperties;
    body400Medium: React.CSSProperties;
    body400Bold: React.CSSProperties;
    body300: React.CSSProperties;
    body300Medium: React.CSSProperties;
    body300Bold: React.CSSProperties;
    body200: React.CSSProperties;
    body200Medium: React.CSSProperties;
    body200Bold: React.CSSProperties;
    body100: React.CSSProperties;
    body100Medium: React.CSSProperties;
    body100Bold: React.CSSProperties;
    captionMedium: React.CSSProperties;
    captionBold: React.CSSProperties;
    mini1: React.CSSProperties;
    mini2: React.CSSProperties;
    micro: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body400?: React.CSSProperties;
    body400Medium?: React.CSSProperties;
    body400Bold?: React.CSSProperties;
    body300?: React.CSSProperties;
    body300Medium?: React.CSSProperties;
    body300Bold?: React.CSSProperties;
    body200?: React.CSSProperties;
    body200Medium?: React.CSSProperties;
    body200Bold?: React.CSSProperties;
    body100?: React.CSSProperties;
    body100Medium?: React.CSSProperties;
    body100Bold?: React.CSSProperties;
    captionMedium?: React.CSSProperties;
    captionBold?: React.CSSProperties;
    mini1?: React.CSSProperties;
    mini2?: React.CSSProperties;
    micro?: React.CSSProperties;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    background: string;
    background2: string;
    link: string;
    linkVisited: string;
    switch: string;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    '24': true;
    '32': true;
    '40': true;
    '48': true;
    '56': true;
    small: false;
    medium: false;
    large: false;
  }

  interface ButtonPropsColorOverrides {
    monoA: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsSizeOverrides {
    '24': true;
    '32': true;
    '40': true;
    '48': true;
    '56': true;
    small: false;
    medium: false;
    large: false;
  }

  interface IconButtonPropsColorOverrides {
    monoA: true;
    default: false;
  }
}

declare module '@mui/material/FormControl' {
  interface FormControlPropsSizeOverrides {
    '56': true;
    '48': true;
    '40': true;
    '32': true;
    small: false;
  }
}

declare module '@mui/material/InputBase' {
  interface InputBasePropsSizeOverrides {
    '56': true;
    '48': true;
    '40': true;
    '32': true;
    small: false;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    '56': true;
    '48': true;
    '40': true;
    '32': true;
    small: false;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body400: true;
    body400Medium: true;
    body400Bold: true;
    body300: true;
    body300Medium: true;
    body300Bold: true;
    body200: true;
    body200Medium: true;
    body200Bold: true;
    body100: true;
    body100Medium: true;
    body100Bold: true;
    captionMedium: true;
    captionBold: true;
    mini200: true;
    mini100: true;
    mini100Bold: true;
    micro: true;
    body1: false;
    body2: false;
  }
}
