/* eslint-disable @typescript-eslint/no-empty-interface, @typescript-eslint/no-unused-vars */

import {
  BreakpointOverrides,
  Palette,
  PaletteColor,
  PaletteColorOptions,
  Theme,
  ThemeOptions,
  TypographyVariants,
  TypographyVariantsOptions
} from '@mui/material/styles';
import { Components } from '@mui/material/styles/components';
import { Mixins } from '@mui/material/styles/createMixins';
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
import { AvatarGroupClassKey, AvatarGroupProps } from './components/AvatarGroup';
import { BreadcrumbClassKey, BreadcrumbProps, BreadcrumbsClassKey, BreadcrumbsProps } from './components/Breadcrumbs';
import { ChipsClassKey, ChipsProps } from './components/Chips';
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
  SFSClassKey,
  SFSProps,
  SFSRowClassKey,
  SFSRowProps,
  SFSSearchClassKey,
  SFSSearchProps,
  SFSSortingClassKey,
  SFSSortingProps
} from './components/SFS';
import {
  SidebarClassKey,
  SidebarDividerClassKey,
  SidebarDividerProps,
  SidebarItemClassKey,
  SidebarItemProps,
  SidebarMenuClassKey,
  SidebarMenuProps,
  SidebarProps,
  SidebarScrollableClassKey,
  SidebarScrollableProps,
  SidebarSpacerClassKey,
  SidebarSpacerProps,
  SidebarToggleClassKey,
  SidebarToggleProps
} from './components/Sidebar';
import { SidenavClassKey, SidenavItemClassKey, SidenavItemProps, SidenavProps } from './components/Sidenav';
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
import {
  TableActionsClassKey,
  TableActionsProps,
  TableBodyClassKey,
  TableBodyProps,
  TableCellClassKey,
  TableCellProps,
  TableClassKey,
  TableFootClassKey,
  TableFootProps,
  TableHeadClassKey,
  TableHeadProps,
  TableProps,
  TableRowClassKey,
  TableRowProps,
  TableScrollableClassKey,
  TableScrollableProps,
  TableScrollbarClassKey,
  TableScrollbarProps,
  TableTextClassKey,
  TableTextProps
} from './components/Table';
import { buttonMixin, listItemMixin } from './theming/mixins';

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
  900: string;
  700: string;
  300: string;
  200: string;
  100: string;
}

interface IAlphaPalette {
  A25: number;
  A50: number;
  A75: number;
  A100: number;
  A150: number;
  A200: number;
  A300: number;
  A400: number;
  A500: number;
  A550: number;
  A600: number;
  A700: number;
  A800: number;
  A900: number;
}

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    ESAlert: AlertProps;
    ESAlertActions: AlertActionsProps;
    ESAlertClose: AlertCloseProps;
    ESAvatarGroup: AvatarGroupProps;
    ESAlertTitle: AlertTitleProps;
    ESAudioPlayer: AudioPlayerProps;
    ESBreadcrumbs: BreadcrumbsProps;
    ESBreadcrumb: BreadcrumbProps;
    ESChips: ChipsProps;
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
    ESKbd: KbdProps;
    ESLink: LinkProps;
    ESMenuItem: MenuItemProps;
    ESPagination: PaginationProps;
    ESPaginationPages: PaginationPagesProps;
    ESPaginationRange: PaginationRangeProps;
    ESSidebar: SidebarProps;
    ESSidebarSpacer: SidebarSpacerProps;
    ESSidebarToggle: SidebarToggleProps;
    ESSidebarItem: SidebarItemProps;
    ESSidebarDivider: SidebarDividerProps;
    ESSidebarMenu: SidebarMenuProps;
    ESSidebarScrollable: SidebarScrollableProps;
    ESSidenav: SidenavProps;
    ESSidenavItem: SidenavItemProps;
    ESSFS: SFSProps;
    ESSFSSearch: SFSSearchProps;
    ESSFSSorting: SFSSortingProps;
    ESSFSRow: SFSRowProps;
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
    ESTable: TableProps;
    ESTableActions: TableActionsProps;
    ESTableBody: TableBodyProps;
    ESTableCell: TableCellProps;
    ESTableFoot: TableFootProps;
    ESTableHead: TableHeadProps;
    ESTableRow: TableRowProps;
    ESTableScrollable: TableScrollableProps;
    ESTableScrollbar: TableScrollbarProps;
    ESTableText: TableTextProps;
  }
}

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    ESAlert: AlertClassKey;
    ESAlertActions: AlertActionsClassKey;
    ESAlertClose: AlertCloseClassKey;
    ESAvatarGroup: AvatarGroupClassKey;
    ESAlertTitle: AlertTitleClassKey;
    ESAudioPlayer: AudioPlayerClassKey;
    ESBreadcrumbs: BreadcrumbsClassKey;
    ESBreadcrumb: BreadcrumbClassKey;
    ESChips: ChipsClassKey;
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
    ESKbd: KbdClassKey;
    ESLink: LinkClassKey;
    ESMenuItem: MenuItemClassKey;
    ESPagination: PaginationClassKey;
    ESPaginationPages: PaginationPagesClassKey;
    ESPaginationRange: PaginationRangeClassKey;
    ESSidebar: SidebarClassKey;
    ESSidebarItem: SidebarItemClassKey;
    ESSidebarToggle: SidebarToggleClassKey;
    ESSidebarMenu: SidebarMenuClassKey;
    ESSidebarDivider: SidebarDividerClassKey;
    ESSidebarSpacer: SidebarSpacerClassKey;
    ESSidebarScrollable: SidebarScrollableClassKey;
    ESSidenav: SidenavClassKey;
    ESSidenavItem: SidenavItemClassKey;
    ESSFS: SFSClassKey;
    ESSFSSearch: SFSSearchClassKey;
    ESSFSSorting: SFSSortingClassKey;
    ESSFSRow: SFSRowClassKey;
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
    ESTable: TableClassKey;
    ESTableActions: TableActionsClassKey;
    ESTableBody: TableBodyClassKey;
    ESTableCell: TableCellClassKey;
    ESTableFoot: TableFootClassKey;
    ESTableHead: TableHeadClassKey;
    ESTableRow: TableRowClassKey;
    ESTableScrollable: TableScrollableClassKey;
    ESTableScrollbar: TableScrollbarClassKey;
    ESTableText: TableTextClassKey;
  }
}

declare module '@mui/material/styles/components' {
  interface Components {
    ESAlert?: {
      defaultProps?: ComponentsProps['ESAlert'];
      styleOverrides?: ComponentsOverrides['ESAlert'];
    };
    ESAvatarGroup?: {
      defaultProps?: ComponentsProps['ESAvatarGroup'];
      styleOverrides?: ComponentsOverrides['ESAvatarGroup'];
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
    ESBreadcrumbs?: {
      defaultProps?: ComponentsProps['ESBreadcrumbs'];
      styleOverrides?: ComponentsOverrides['ESBreadcrumbs'];
    };
    ESBreadcrumb?: {
      defaultProps?: ComponentsProps['ESBreadcrumb'];
      styleOverrides?: ComponentsOverrides['ESBreadcrumb'];
    };
    ESChips?: {
      defaultProps?: ComponentsProps['ESChips'];
      styleOverrides?: ComponentsOverrides['ESChips'];
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
    ESSFS?: {
      defaultProps?: ComponentsProps['ESSFS'];
      styleOverrides?: ComponentsOverrides['ESSFS'];
    };
    ESSFSSearch?: {
      defaultProps?: ComponentsProps['ESSFSSearch'];
      styleOverrides?: ComponentsOverrides['ESSFSSearch'];
    };
    ESSFSSorting?: {
      defaultProps?: ComponentsProps['ESSFSSorting'];
      styleOverrides?: ComponentsOverrides['ESSFSSorting'];
    };
    ESSFSRow?: {
      defaultProps?: ComponentsProps['ESSFSRow'];
      styleOverrides?: ComponentsOverrides['ESSFSRow'];
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
    ESTable?: {
      defaultProps?: ComponentsProps['ESTable'];
      styleOverrides?: ComponentsOverrides['ESTable'];
    };
    ESTableActions?: {
      defaultProps?: ComponentsProps['ESTableActions'];
      styleOverrides?: ComponentsOverrides['ESTableActions'];
    };
    ESTableBody?: {
      defaultProps?: ComponentsProps['ESTableBody'];
      styleOverrides?: ComponentsOverrides['ESTableBody'];
    };
    ESTableCell?: {
      defaultProps?: ComponentsProps['ESTableCell'];
      styleOverrides?: ComponentsOverrides['ESTableCell'];
    };
    ESTableFoot?: {
      defaultProps?: ComponentsProps['ESTableFoot'];
      styleOverrides?: ComponentsOverrides['ESTableFoot'];
    };
    ESTableHead?: {
      defaultProps?: ComponentsProps['ESTableHead'];
      styleOverrides?: ComponentsOverrides['ESTableHead'];
    };
    ESTableRow?: {
      defaultProps?: ComponentsProps['ESTableRow'];
      styleOverrides?: ComponentsOverrides['ESTableRow'];
    };
    ESTableScrollable?: {
      defaultProps?: ComponentsProps['ESTableScrollable'];
      styleOverrides?: ComponentsOverrides['ESTableScrollable'];
    };
    ESTableScrollbar?: {
      defaultProps?: ComponentsProps['ESTableScrollbar'];
      styleOverrides?: ComponentsOverrides['ESTableScrollbar'];
    };
    ESTableText?: {
      defaultProps?: ComponentsProps['ESTableText'];
      styleOverrides?: ComponentsOverrides['ESTableText'];
    };
    ESSidebar?: {
      defaultProps?: ComponentsProps['ESSidebar'];
      styleOverrides?: ComponentsOverrides['ESSidebar'];
    };
    ESSidebarMenu?: {
      defaultProps?: ComponentsProps['ESSidebarMenu'];
      styleOverrides?: ComponentsOverrides['ESSidebarMenu'];
    };
    ESSidebarItem?: {
      defaultProps?: ComponentsProps['ESSidebarItem'];
      styleOverrides?: ComponentsOverrides['ESSidebarItem'];
    };
    ESSidebarToggle?: {
      defaultProps?: ComponentsProps['ESSidebarToggle'];
      styleOverrides?: ComponentsOverrides['ESSidebarToggle'];
    };
    ESSidebarDivider?: {
      defaultProps?: ComponentsProps['ESSidebarDivider'];
      styleOverrides?: ComponentsOverrides['ESSidebarDivider'];
    };
    ESSidebarSpace?: {
      defaultProps?: ComponentsProps['ESSidebarSpacer'];
      styleOverrides?: ComponentsOverrides['ESSidebarSpacer'];
    };
    ESSidebarScrollable?: {
      defaultProps?: ComponentsProps['ESSidebarScrollable'];
      styleOverrides?: ComponentsOverrides['ESSidebarScrollable'];
    };
    ESSidenav?: {
      defaultProps?: ComponentsProps['ESSidenav'];
      styleOverrides?: ComponentsOverrides['ESSidenav'];
    };
    ESSidenavItem?: {
      defaultProps?: ComponentsProps['ESSidenavItem'];
      styleOverrides?: ComponentsOverrides['ESSidenavItem'];
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
    A550: string;
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
    A550: string;
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
    alpha: IAlphaPalette;
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
    alpha?: IAlphaPalette;
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
    mini200: React.CSSProperties;
    mini100: React.CSSProperties;
    mini100Bold: React.CSSProperties;
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
    mini200?: React.CSSProperties;
    mini100?: React.CSSProperties;
    mini100Bold?: React.CSSProperties;
    micro?: React.CSSProperties;
  }
}

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    scrollbars?: {
      normal?: React.CSSProperties;
      thin?: React.CSSProperties;
      overlay?: React.CSSProperties;
    };
  }

  interface Theme {
    scrollbars: {
      normal: React.CSSProperties;
      thin: React.CSSProperties;
      overlay: React.CSSProperties;
    };
  }
}

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    button: typeof buttonMixin;
    listItem: typeof listItemMixin;
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
    '16': true;
    '20': true;
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
    tertiary: true;
    success: true;
    monoA: true;
    monoB: true;
    white: true;
    black: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsSizeOverrides {
    '16': true;
    '20': true;
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
    tertiary: true;
    monoA: true;
    monoB: true;
    white: true;
    black: true;
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
