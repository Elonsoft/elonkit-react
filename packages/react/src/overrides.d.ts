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
import { AppBarClassKey, AppBarProps } from './components/AppBar';
import { AudioPlayerClassKey, AudioPlayerProps } from './components/AudioPlayer';
import { AutocompleteClassKey, AutocompleteProps } from './components/Autocomplete';
import { AutocompleteFieldClassKey, AutocompleteFieldProps } from './components/AutocompleteField';
import {
  AutocompleteMenuClassKey,
  AutocompleteMenuFooterClassKey,
  AutocompleteMenuFooterProps,
  AutocompleteMenuHeaderClassKey,
  AutocompleteMenuHeaderProps,
  AutocompleteMenuProps
} from './components/AutocompleteMenu';
import { AvatarGroupClassKey, AvatarGroupProps } from './components/AvatarGroup';
import { BottomSheetClassKey, BottomSheetProps } from './components/BottomSheet';
import { BreadcrumbClassKey, BreadcrumbProps, BreadcrumbsClassKey, BreadcrumbsProps } from './components/Breadcrumbs';
import {
  CalendarButtonClassKey,
  CalendarButtonProps,
  CalendarClassKey,
  CalendarHeadClassKey,
  CalendarHeadProps,
  CalendarProps
} from './components/Calendar';
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
import { DividerClassKey, DividerProps } from './components/Divider';
import { DropzoneClassKey, DropzoneProps } from './components/Dropzone';
import { EmptyStateClassKey, EmptyStateProps } from './components/EmptyState';
import { EmptyStateCompactClassKey, EmptyStateCompactProps } from './components/EmptyStateCompact';
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
  GalleryActionsButtonGroupClassKey,
  GalleryActionsButtonGroupProps,
  GalleryActionsClassKey,
  GalleryActionsProps,
  GalleryClassKey,
  GalleryDescriptionClassKey,
  GalleryDescriptionProps,
  GalleryMetaClassKey,
  GalleryMetaProps,
  GalleryMetaSeparatorClassKey,
  GalleryMetaSeparatorProps,
  GalleryMetaTextClassKey,
  GalleryMetaTextProps,
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
import { LoadingButtonClassKey, LoadingButtonProps } from './components/LoadingButton';
import { MadeByClassKey, MadeByProps } from './components/MadeBy';
import { MenuItemClassKey, MenuItemProps } from './components/MenuItem';
import {
  PageHGroupActionsClassKey,
  PageHGroupActionsProps,
  PageHGroupBreadcrumbsClassKey,
  PageHGroupBreadcrumbsProps,
  PageHGroupClassKey,
  PageHGroupHeadingClassKey,
  PageHGroupHeadingProps,
  PageHGroupMainClassKey,
  PageHGroupMainProps,
  PageHGroupProps,
  PageHGroupStatusClassKey,
  PageHGroupStatusProps
} from './components/PageHGroup';
import {
  PaginationClassKey,
  PaginationPagesClassKey,
  PaginationPagesProps,
  PaginationProps,
  PaginationRangeClassKey,
  PaginationRangeProps
} from './components/Pagination';
import { PasswordFieldClassKey, PasswordFieldProps } from './components/PasswordField';
import {
  SFSClassKey,
  SFSFiltersClassKey,
  SFSFiltersGroupClassKey,
  SFSFiltersGroupProps,
  SFSFiltersProps,
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
import { SvgIconClassKey, SvgIconProps } from './components/SvgIcon';
import {
  SwiperButtonClassKey,
  SwiperButtonProps,
  SwiperClassKey,
  SwiperPaginationClassKey,
  SwiperPaginationProps,
  SwiperProps
} from './components/Swiper';
import { SwitchClassKey, SwitchProps } from './components/Switch';
import { TabBarClassKey, TabBarItemClassKey, TabBarItemProps, TabBarProps } from './components/TabBar';
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
  TableScrollbarClassKey,
  TableScrollbarProps,
  TableTextClassKey,
  TableTextProps
} from './components/Table';
import { TextFieldGroupClassKey, TextFieldGroupProps } from './components/TextFieldGroup';
import { buttonMixin, listItemMixin } from './theming/mixins';

export interface ISurfacePalette {
  background: string;
  background2: string;
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
    ESAppBar: AppBarProps;
    ESAvatarGroup: AvatarGroupProps;
    ESAlertTitle: AlertTitleProps;
    ESAudioPlayer: AudioPlayerProps;
    ESAutocomplete: AutocompleteProps<any>;
    ESAutocompleteField: AutocompleteFieldProps<any>;
    ESAutocompleteMenu: AutocompleteMenuProps<any>;
    ESAutocompleteMenuFooter: AutocompleteMenuFooterProps;
    ESAutocompleteMenuHeader: AutocompleteMenuHeaderProps;
    ESBreadcrumbs: BreadcrumbsProps;
    ESBreadcrumb: BreadcrumbProps;
    ESBottomSheet: BottomSheetProps;
    ESCalendar: CalendarProps;
    ESCalendarButton: CalendarButtonProps;
    ESCalendarHead: CalendarHeadProps;
    ESDialog: DialogProps;
    ESDialogActions: DialogActionsProps;
    ESDialogArrow: DialogArrowProps;
    ESDialogClose: DialogCloseProps;
    ESDialogContent: DialogContentProps;
    ESDialogTitle: DialogTitleProps;
    ESDivider: DividerProps;
    ESDropzone: DropzoneProps;
    ESEmptyState: EmptyStateProps;
    ESEmptyStateCompact: EmptyStateCompactProps;
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
    ESGalleryActionsButtonGroup: GalleryActionsButtonGroupProps;
    ESGalleryDescription: GalleryDescriptionProps;
    ESGalleryMeta: GalleryMetaProps;
    ESGalleryMetaSeparator: GalleryMetaSeparatorProps;
    ESGalleryMetaText: GalleryMetaTextProps;
    ESGalleryPanel: GalleryPanelProps;
    ESGallerySwiper: GallerySwiperProps;
    ESGallerySwiperImage: GallerySwiperImageProps;
    ESGalleryThumbnails: GalleryThumbnailsProps;
    ESGalleryThumbnailsImage: GalleryThumbnailsImageProps;
    ESGalleryThumbnailsItem: GalleryThumbnailsItemProps;
    ESKbd: KbdProps;
    ESLink: LinkProps;
    ESLoadingButton: LoadingButtonProps;
    ESMenuItem: MenuItemProps;
    ESMadeBy: MadeByProps;
    ESPageHGroup: PageHGroupProps;
    ESPageHGroupActions: PageHGroupActionsProps;
    ESPageHGroupBreadcrumbs: PageHGroupBreadcrumbsProps;
    ESPageHGroupHeading: PageHGroupHeadingProps;
    ESPageHGroupMain: PageHGroupMainProps;
    ESPageHGroupStatus: PageHGroupStatusProps;
    ESPagination: PaginationProps;
    ESPaginationPages: PaginationPagesProps;
    ESPaginationRange: PaginationRangeProps;
    ESPasswordField: PasswordFieldProps;
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
    ESSFSFilters: SFSFiltersProps;
    ESSFSFiltersGroup: SFSFiltersGroupProps;
    ESSFSRow: SFSRowProps;
    ESSpinnerDashRing: SpinnerDashRingProps;
    ESSpinnerFadingBars: SpinnerFadingBarsProps;
    ESSpinnerFadingDots: SpinnerFadingDotsProps;
    ESSpinnerFadingDoubleRing: SpinnerFadingDoubleRingProps;
    ESSpinnerFadingRing: SpinnerFadingRingProps;
    ESSpinnerRing: SpinnerRingProps;
    ESSvgIcon: SvgIconProps;
    ESSwiper: SwiperProps;
    ESSwitch: SwitchProps;
    ESSwiperButton: SwiperButtonProps;
    ESSwiperPagination: SwiperPaginationProps;
    ESTabBar: TabBarProps;
    ESTabBarItem: TabBarItemProps;
    ESTable: TableProps;
    ESTableActions: TableActionsProps;
    ESTableBody: TableBodyProps;
    ESTableCell: TableCellProps;
    ESTableFoot: TableFootProps;
    ESTableHead: TableHeadProps;
    ESTableRow: TableRowProps;
    ESTableScrollbar: TableScrollbarProps;
    ESTableText: TableTextProps;
    ESTextFieldGroup: TextFieldGroupProps;
  }
}

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    ESAlert: AlertClassKey;
    ESAlertActions: AlertActionsClassKey;
    ESAlertClose: AlertCloseClassKey;
    ESAppBar: AppBarClassKey;
    ESAvatarGroup: AvatarGroupClassKey;
    ESAlertTitle: AlertTitleClassKey;
    ESAudioPlayer: AudioPlayerClassKey;
    ESAutocomplete: AutocompleteClassKey;
    ESAutocompleteField: AutocompleteFieldClassKey;
    ESAutocompleteMenu: AutocompleteMenuClassKey;
    ESAutocompleteMenuFooter: AutocompleteMenuFooterClassKey;
    ESAutocompleteMenuHeader: AutocompleteMenuHeaderClassKey;
    ESBreadcrumbs: BreadcrumbsClassKey;
    ESBreadcrumb: BreadcrumbClassKey;
    ESBottomSheet: BottomSheetClassKey;
    ESCalendar: CalendarClassKey;
    ESCalendarButton: CalendarButtonClassKey;
    ESCalendarHead: CalendarHeadClassKey;
    ESDialog: DialogClassKey;
    ESDialogActions: DialogActionsClassKey;
    ESDialogArrow: DialogArrowClassKey;
    ESDialogClose: DialogCloseClassKey;
    ESDialogContent: DialogContentClassKey;
    ESDialogTitle: DialogTitleClassKey;
    ESDivider: DividerClassKey;
    ESDropzone: DropzoneClassKey;
    ESEmptyState: EmptyStateClassKey;
    ESEmptyStateCompact: EmptyStateCompactClassKey;
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
    ESGalleryActionsButtonGroup: GalleryActionsButtonGroupClassKey;
    ESGalleryDescription: GalleryDescriptionClassKey;
    ESGalleryMeta: GalleryMetaClassKey;
    ESGalleryMetaSeparator: GalleryMetaSeparatorClassKey;
    ESGalleryMetaText: GalleryMetaTextClassKey;
    ESGalleryPanel: GalleryPanelClassKey;
    ESGallerySwiper: GallerySwiperClassKey;
    ESGallerySwiperImage: GallerySwiperImageClassKey;
    ESGalleryThumbnails: GalleryThumbnailsClassKey;
    ESGalleryThumbnailsImage: GalleryThumbnailsImageClassKey;
    ESGalleryThumbnailsItem: GalleryThumbnailsItemClassKey;
    ESKbd: KbdClassKey;
    ESLink: LinkClassKey;
    ESLoadingButton: LoadingButtonClassKey;
    ESMenuItem: MenuItemClassKey;
    ESMadeBy: MadeByClassKey;
    ESPageHGroup: PageHGroupClassKey;
    ESPageHGroupActions: PageHGroupActionsClassKey;
    ESPageHGroupBreadcrumbs: PageHGroupBreadcrumbsClassKey;
    ESPageHGroupHeading: PageHGroupHeadingClassKey;
    ESPageHGroupMain: PageHGroupMainClassKey;
    ESPageHGroupStatus: PageHGroupStatusClassKey;
    ESPagination: PaginationClassKey;
    ESPaginationPages: PaginationPagesClassKey;
    ESPaginationRange: PaginationRangeClassKey;
    ESPasswordField: PasswordFieldClassKey;
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
    ESSFSFilters: SFSFiltersClassKey;
    ESSFSFiltersGroup: SFSFiltersGroupClassKey;
    ESSFSRow: SFSRowClassKey;
    ESSpinnerDashRing: SpinnerDashRingClassKey;
    ESSpinnerFadingBars: SpinnerFadingBarsClassKey;
    ESSpinnerFadingDots: SpinnerFadingDotsClassKey;
    ESSpinnerFadingDoubleRing: SpinnerFadingDoubleRingClassKey;
    ESSpinnerFadingRing: SpinnerFadingRingClassKey;
    ESSpinnerRing: SpinnerRingClassKey;
    ESSvgIcon: SvgIconClassKey;
    ESSwiper: SwiperClassKey;
    ESSwitch: SwitchClassKey;
    ESSwiperButton: SwiperButtonClassKey;
    ESSwiperPagination: SwiperPaginationClassKey;
    ESTabBar: TabBarClassKey;
    ESTabBarItem: TabBarItemClassKey;
    ESTable: TableClassKey;
    ESTableActions: TableActionsClassKey;
    ESTableBody: TableBodyClassKey;
    ESTableCell: TableCellClassKey;
    ESTableFoot: TableFootClassKey;
    ESTableHead: TableHeadClassKey;
    ESTableRow: TableRowClassKey;
    ESTableScrollbar: TableScrollbarClassKey;
    ESTableText: TableTextClassKey;
    ESTextFieldGroup: TextFieldGroupClassKey;
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
    ESAppBar?: {
      defaultProps?: ComponentsProps['ESAppBar'];
      styleOverrides?: ComponentsOverrides['ESAppBar'];
    };
    ESAudioPlayer?: {
      defaultProps?: ComponentsProps['ESAudioPlayer'];
      styleOverrides?: ComponentsOverrides['ESAudioPlayer'];
    };
    ESAutocomplete?: {
      defaultProps?: ComponentsProps['ESAutocomplete'];
      styleOverrides?: ComponentsOverrides['ESAutocomplete'];
    };
    ESAutocompleteField?: {
      defaultProps?: ComponentsProps['ESAutocompleteField'];
      styleOverrides?: ComponentsOverrides['ESAutocompleteField'];
    };
    ESAutocompleteMenu?: {
      defaultProps?: ComponentsProps['ESAutocompleteMenu'];
      styleOverrides?: ComponentsOverrides['ESAutocompleteMenu'];
    };
    ESAutocompleteMenuFooter?: {
      defaultProps?: ComponentsProps['ESAutocompleteMenuFooter'];
      styleOverrides?: ComponentsOverrides['ESAutocompleteMenuFooter'];
    };
    ESAutocompleteMenuHeader?: {
      defaultProps?: ComponentsProps['ESAutocompleteMenuHeader'];
      styleOverrides?: ComponentsOverrides['ESAutocompleteMenuHeader'];
    };
    ESBreadcrumbs?: {
      defaultProps?: ComponentsProps['ESBreadcrumbs'];
      styleOverrides?: ComponentsOverrides['ESBreadcrumbs'];
    };
    ESBreadcrumb?: {
      defaultProps?: ComponentsProps['ESBreadcrumb'];
      styleOverrides?: ComponentsOverrides['ESBreadcrumb'];
    };
    ESBottomSheet?: {
      defaultProps?: ComponentsProps['ESBottomSheet'];
      styleOverrides?: ComponentsOverrides['ESBottomSheet'];
    };
    ESCalendar?: {
      defaultProps?: ComponentsProps['ESCalendar'];
      styleOverrides?: ComponentsOverrides['ESCalendar'];
    };
    ESCalendarButton?: {
      defaultProps?: ComponentsProps['ESCalendarButton'];
      styleOverrides?: ComponentsOverrides['ESCalendarButton'];
    };
    ESCalendarHead?: {
      defaultProps?: ComponentsProps['ESCalendarHead'];
      styleOverrides?: ComponentsOverrides['ESCalendarHead'];
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
    ESDivider?: {
      defaultProps?: ComponentsProps['ESDivider'];
      styleOverrides?: ComponentsOverrides['ESDivider'];
    };
    ESEmptyState?: {
      defaultProps?: ComponentsProps['ESEmptyState'];
      styleOverrides?: ComponentsOverrides['ESEmptyState'];
    };
    ESEmptyStateCompact?: {
      defaultProps?: ComponentsProps['ESEmptyStateCompact'];
      styleOverrides?: ComponentsOverrides['ESEmptyStateCompact'];
    };
    ESGallery?: {
      defaultProps?: ComponentsProps['ESGallery'];
      styleOverrides?: ComponentsOverrides['ESGallery'];
    };
    ESGalleryActions?: {
      defaultProps?: ComponentsProps['ESGalleryActions'];
      styleOverrides?: ComponentsOverrides['ESGalleryActions'];
    };
    ESGalleryActionsButtonGroup?: {
      defaultProps?: ComponentsProps['ESGalleryActionsButtonGroup'];
      styleOverrides?: ComponentsOverrides['ESGalleryActionsButtonGroup'];
    };
    ESGalleryDescription?: {
      defaultProps?: ComponentsProps['ESGalleryDescription'];
      styleOverrides?: ComponentsOverrides['ESGalleryDescription'];
    };
    ESGalleryMeta?: {
      defaultProps?: ComponentsProps['ESGalleryMeta'];
      styleOverrides?: ComponentsOverrides['ESGalleryMeta'];
    };
    ESGalleryMetaSeparator?: {
      defaultProps?: ComponentsProps['ESGalleryMetaSeparator'];
      styleOverrides?: ComponentsOverrides['ESGalleryMetaSeparator'];
    };
    ESGalleryMetaText?: {
      defaultProps?: ComponentsProps['ESGalleryMetaText'];
      styleOverrides?: ComponentsOverrides['ESGalleryMetaText'];
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
    ESLoadingButton?: {
      defaultProps?: ComponentsProps['ESLoadingButton'];
      styleOverrides?: ComponentsOverrides['ESLoadingButton'];
    };
    ESMenuItem?: {
      defaultProps?: ComponentsProps['ESMenuItem'];
      styleOverrides?: ComponentsOverrides['ESMenuItem'];
    };
    ESMadeBy?: {
      defaultProps?: ComponentsProps['ESMadeBy'];
      styleOverrides?: ComponentsOverrides['ESMadeBy'];
    };
    ESPageHGroup?: {
      defaultProps?: ComponentsProps['ESPageHGroup'];
      styleOverrides?: ComponentsOverrides['ESPageHGroup'];
    };
    ESPageHGroupActions?: {
      defaultProps?: ComponentsProps['ESPageHGroupActions'];
      styleOverrides?: ComponentsOverrides['ESPageHGroupActions'];
    };
    ESPageHGroupBreadcrumbs?: {
      defaultProps?: ComponentsProps['ESPageHGroupBreadcrumbs'];
      styleOverrides?: ComponentsOverrides['ESPageHGroupBreadcrumbs'];
    };
    ESPageHGroupHeading?: {
      defaultProps?: ComponentsProps['ESPageHGroupHeading'];
      styleOverrides?: ComponentsOverrides['ESPageHGroupHeading'];
    };
    ESPageHGroupMain?: {
      defaultProps?: ComponentsProps['ESPageHGroupMain'];
      styleOverrides?: ComponentsOverrides['ESPageHGroupMain'];
    };
    ESPageHGroupStatus?: {
      defaultProps?: ComponentsProps['ESPageHGroupStatus'];
      styleOverrides?: ComponentsOverrides['ESPageHGroupStatus'];
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
    ESPasswordField?: {
      defaultProps?: ComponentsProps['ESPasswordField'];
      styleOverrides?: ComponentsOverrides['ESPasswordField'];
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
    ESSFSFilters?: {
      defaultProps?: ComponentsProps['ESSFSFilters'];
      styleOverrides?: ComponentsOverrides['ESSFSFilters'];
    };
    ESSFSFiltersGroup?: {
      defaultProps?: ComponentsProps['ESSFSFiltersGroup'];
      styleOverrides?: ComponentsOverrides['ESSFSFiltersGroup'];
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
    ESSvgIcon?: {
      defaultProps?: ComponentsProps['ESSvgIcon'];
      styleOverrides?: ComponentsOverrides['ESSvgIcon'];
    };
    ESTabBar?: {
      defaultProps?: ComponentsProps['ESTabBar'];
      styleOverrides?: ComponentsOverrides['ESTabBar'];
    };
    ESTabBarItem?: {
      defaultProps?: ComponentsProps['ESTabBarItem'];
      styleOverrides?: ComponentsOverrides['ESTabBarItem'];
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
    ESTextFieldGroup?: {
      defaultProps?: ComponentsProps['ESTextFieldGroup'];
      styleOverrides?: ComponentsOverrides['ESTextFieldGroup'];
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
      /** @deprecated Use normalMonoA instead. */
      normal?: React.CSSProperties;
      normalMonoA?: React.CSSProperties;
      normalMonoB?: React.CSSProperties;
      normalWhite?: React.CSSProperties;
      normalBlack?: React.CSSProperties;
      /** @deprecated Use thinMonoA instead. */
      thin?: React.CSSProperties;
      thinMonoA?: React.CSSProperties;
      thinMonoB?: React.CSSProperties;
      thinWhite?: React.CSSProperties;
      thinBlack?: React.CSSProperties;
      /** @deprecated Use overlayMonoA instead. */
      overlay?: React.CSSProperties;
      overlayMonoA?: React.CSSProperties;
      overlayMonoB?: React.CSSProperties;
      overlayWhite?: React.CSSProperties;
      overlayBlack?: React.CSSProperties;
    };
  }

  interface Theme {
    scrollbars: {
      /** @deprecated Use normalMonoA instead. */
      normal: React.CSSProperties;
      normalMonoA: React.CSSProperties;
      normalMonoB: React.CSSProperties;
      normalWhite: React.CSSProperties;
      normalBlack: React.CSSProperties;
      /** @deprecated Use thinMonoA instead. */
      thin: React.CSSProperties;
      thinMonoA: React.CSSProperties;
      thinMonoB: React.CSSProperties;
      thinWhite: React.CSSProperties;
      thinBlack: React.CSSProperties;
      /** @deprecated Use overlayMonoA instead. */
      overlay: React.CSSProperties;
      overlayMonoA: React.CSSProperties;
      overlayMonoB: React.CSSProperties;
      overlayWhite: React.CSSProperties;
      overlayBlack: React.CSSProperties;
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
