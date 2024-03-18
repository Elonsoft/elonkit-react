import { AlertCloseProps } from '../Alert';
import { AudioPlayerMenuProps } from '../AudioPlayer/AudioPlayerMenu';
import { AudioPlayerPlayButtonProps } from '../AudioPlayer/AudioPlayerPlayButton';
import { AudioPlayerProgressBarProps } from '../AudioPlayer/AudioPlayerProgressBar';
import { AudioPlayerVolumeProps } from '../AudioPlayer/AudioPlayerVolume';
import { AutocompleteMenuProps } from '../AutocompleteMenu';
import { BreadcrumbsProps } from '../Breadcrumbs';
import { CalendarHeadProps } from '../Calendar';
import { DialogArrowProps, DialogCloseProps } from '../Dialog';
import { FileInfoNameProps } from '../FileInfo';
import { FormatSizeProps } from '../FormatSize';
import { GalleryActionsProps, GalleryDescriptionProps, GalleryMetaProps, GallerySwiperProps } from '../Gallery';
import { MadeByProps } from '../MadeBy';
import { PaginationPagesProps, PaginationRangeProps } from '../Pagination';
import { PasswordFieldProps } from '../PasswordField';
import { SFSFiltersProps, SFSSearchProps, SFSSortingProps } from '../SFS';
import { SidebarItemProps, SidebarToggleProps } from '../Sidebar';
import { SwiperButtonProps } from '../Swiper';
import { TableActionsProps, TableCellProps } from '../Table';

export interface Localization {
  components: {
    ESAlertClose: {
      defaultProps: Pick<AlertCloseProps, 'label'>;
    };
    ESAudioPlayerMenu: {
      defaultProps: Pick<
        AudioPlayerMenuProps,
        'labelBack' | 'labelDownload' | 'labelOptions' | 'labelRate' | 'labelRateNormal'
      >;
    };
    ESAudioPlayerVolume: {
      defaultProps: Pick<AudioPlayerVolumeProps, 'labelMute' | 'labelUnmute' | 'labelVolume'>;
    };
    ESAudioPlayerPlayButton: {
      defaultProps: Pick<AudioPlayerPlayButtonProps, 'labelPause' | 'labelPlay'>;
    };
    ESAudioPlayerProgressBar: {
      defaultProps: Pick<AudioPlayerProgressBarProps, 'labelCurrent'>;
    };
    ESAutocompleteMenu: {
      defaultProps: Pick<
        AutocompleteMenuProps<unknown>,
        'labelNoOptions' | 'labelNoMatches' | 'labelLoading' | 'labelSearch' | 'labelSearchClear'
      >;
    };
    ESBreadcrumbs: {
      defaultProps: Pick<BreadcrumbsProps, 'labelButtonMore'>;
    };
    ESCalendarHead: {
      defaultProps: Pick<CalendarHeadProps, 'getWeekDays'>;
    };
    ESDialogArrow: {
      defaultProps: Pick<DialogArrowProps, 'labelPrev' | 'labelNext'>;
    };
    ESDialogClose: {
      defaultProps: Pick<DialogCloseProps, 'label'>;
    };
    ESFileInfoName: {
      defaultProps: Pick<FileInfoNameProps, 'labelDelete'>;
    };
    ESGalleryActions: {
      defaultProps: Pick<GalleryActionsProps, 'labelClose' | 'labelThumbnails'>;
    };
    ESGalleryDescription: {
      defaultProps: Pick<GalleryDescriptionProps, 'labelCollapse' | 'labelExpand'>;
    };
    ESGalleryMeta: {
      defaultProps: Pick<GalleryMetaProps, 'labelClose'>;
    };
    ESGallerySwiper: {
      defaultProps: Pick<GallerySwiperProps, 'labelNext' | 'labelPrev'>;
    };
    ESPaginationPages: {
      defaultProps: Pick<PaginationPagesProps, 'labelPrevPage' | 'labelNextPage' | 'labelPage'>;
    };
    ESPaginationRange: {
      defaultProps: Pick<PaginationRangeProps, 'labelItemsPerPage' | 'labelOf'>;
    };
    ESPasswordField: {
      defaultProps: Pick<PasswordFieldProps, 'labelHidePassword' | 'labelShowPassword'>;
    };
    ESSidebarToggle: {
      defaultProps: Pick<SidebarToggleProps, 'labelOpen' | 'labelHide'>;
    };
    ESSidebarItem: {
      defaultProps: Pick<SidebarItemProps, 'labelOpen' | 'labelHide'>;
    };
    ESSFSSearch: {
      defaultProps: Pick<SFSSearchProps, 'ariaLabel' | 'placeholder' | 'labelClear'>;
    };
    ESSFSSorting: {
      defaultProps: Pick<
        SFSSortingProps,
        | 'labelAsc'
        | 'labelDesc'
        | 'labelResetButton'
        | 'labelButton'
        | 'labelSortOrder'
        | 'labelSortTooltip'
        | 'labelMultisortTitle'
        | 'labelMultisortLMB'
        | 'labelMultisortMobileOn'
        | 'labelMultisortMobileOff'
      >;
    };
    ESSFSFilters: {
      defaultProps: Pick<SFSFiltersProps, 'labelButton' | 'labelHeader' | 'labelClose' | 'labelReset'>;
    };
    ESFormatSize: {
      defaultProps: Pick<FormatSizeProps, 'metricUnits' | 'binaryUnits'>;
    };
    ESSwiperButton: {
      defaultProps: Pick<SwiperButtonProps, 'labelPrev' | 'labelNext'>;
    };
    ESTableActions: {
      defaultProps: Pick<TableActionsProps, 'label'>;
    };
    ESTableCell: {
      defaultProps: Pick<TableCellProps, 'labelResize'>;
    };
    ESMadeBy: {
      defaultProps: Pick<MadeByProps, 'text'>;
    };
  };
}

export const en: Localization = {
  components: {
    ESAlertClose: {
      defaultProps: {
        label: 'Close'
      }
    },
    ESAudioPlayerMenu: {
      defaultProps: {
        labelBack: 'Back',
        labelDownload: 'Download',
        labelOptions: 'Options',
        labelRate: 'Rate',
        labelRateNormal: 'Normal'
      }
    },
    ESAudioPlayerVolume: {
      defaultProps: {
        labelMute: 'Mute',
        labelUnmute: 'Unmute',
        labelVolume: 'Volume'
      }
    },
    ESAudioPlayerPlayButton: {
      defaultProps: {
        labelPause: 'Pause',
        labelPlay: 'Play'
      }
    },
    ESAudioPlayerProgressBar: {
      defaultProps: {
        labelCurrent: 'Current playback time'
      }
    },
    ESAutocompleteMenu: {
      defaultProps: {
        labelNoOptions: 'No options',
        labelNoMatches: 'No matches',
        labelLoading: 'Loading',
        labelSearch: 'Search',
        labelSearchClear: 'Reset'
      }
    },
    ESBreadcrumbs: {
      defaultProps: {
        labelButtonMore: 'More'
      }
    },
    ESCalendarHead: {
      defaultProps: {
        getWeekDays: () => ['S', 'M', 'T', 'W', 'T', 'F', 'S']
      }
    },
    ESDialogArrow: {
      defaultProps: {
        labelPrev: 'Previous',
        labelNext: 'Next'
      }
    },
    ESDialogClose: {
      defaultProps: {
        label: 'Close'
      }
    },
    ESFileInfoName: {
      defaultProps: {
        labelDelete: 'Delete'
      }
    },
    ESFormatSize: {
      defaultProps: {
        metricUnits: ['B', 'KB', 'MB', 'GB', 'TB'],
        binaryUnits: ['B', 'KiB', 'MiB', 'GiB', 'TiB']
      }
    },
    ESGalleryActions: {
      defaultProps: {
        labelClose: 'Close',
        labelThumbnails: 'Thumbnails'
      }
    },
    ESGalleryDescription: {
      defaultProps: {
        labelCollapse: 'Collapse description',
        labelExpand: 'Expand description'
      }
    },
    ESGalleryMeta: {
      defaultProps: {
        labelClose: 'Close'
      }
    },
    ESGallerySwiper: {
      defaultProps: {
        labelNext: 'Next photo',
        labelPrev: 'Previous photo'
      }
    },
    ESPaginationPages: {
      defaultProps: {
        labelPrevPage: 'Go to previous page',
        labelNextPage: 'Go to next page',
        labelPage: 'page'
      }
    },
    ESPaginationRange: {
      defaultProps: {
        labelItemsPerPage: 'Per:',
        labelOf: 'of'
      }
    },
    ESPasswordField: {
      defaultProps: {
        labelHidePassword: 'Hide password',
        labelShowPassword: 'Show password'
      }
    },
    ESSidebarToggle: {
      defaultProps: {
        labelOpen: 'Expand',
        labelHide: 'Collapse'
      }
    },
    ESSidebarItem: {
      defaultProps: {
        labelOpen: 'Show nested list',
        labelHide: 'Hide nested list'
      }
    },
    ESSFSSearch: {
      defaultProps: {
        ariaLabel: 'Search',
        placeholder: 'Search',
        labelClear: 'Clear'
      }
    },
    ESSFSSorting: {
      defaultProps: {
        labelAsc: 'Ascending',
        labelDesc: 'Descending',
        labelResetButton: 'Reset',
        labelButton: 'Sorting',
        labelSortOrder: 'The sort order',
        labelSortTooltip: 'Sort by properties',
        labelMultisortTitle: 'Multisort',
        labelMultisortLMB: 'LMB',
        labelMultisortMobileOn: 'Multisort enabled',
        labelMultisortMobileOff: 'Hold to multisort'
      }
    },
    ESSFSFilters: {
      defaultProps: {
        labelButton: 'Filters',
        labelHeader: 'Filters',
        labelClose: 'Close',
        labelReset: 'Reset all filters'
      }
    },
    ESSwiperButton: {
      defaultProps: {
        labelPrev: 'Previous slide',
        labelNext: 'Next slide'
      }
    },
    ESTableActions: {
      defaultProps: {
        label: 'Selected'
      }
    },
    ESTableCell: {
      defaultProps: {
        labelResize: 'Resize'
      }
    },
    ESMadeBy: {
      defaultProps: {
        text: 'Made by'
      }
    }
  }
};

export const ru: Localization = {
  components: {
    ESAlertClose: {
      defaultProps: {
        label: 'Закрыть'
      }
    },
    ESAudioPlayerMenu: {
      defaultProps: {
        labelBack: 'Назад',
        labelDownload: 'Скачать',
        labelOptions: 'Опции',
        labelRate: 'Скорость',
        labelRateNormal: 'Обычная'
      }
    },
    ESAudioPlayerVolume: {
      defaultProps: {
        labelMute: 'Выключить звук',
        labelUnmute: 'Включить звук',
        labelVolume: 'Громкость'
      }
    },
    ESAudioPlayerPlayButton: {
      defaultProps: {
        labelPause: 'Остановить воспроизведение',
        labelPlay: 'Начать воспроизведение'
      }
    },
    ESAudioPlayerProgressBar: {
      defaultProps: {
        labelCurrent: 'Текущее время воспроизведения'
      }
    },
    ESAutocompleteMenu: {
      defaultProps: {
        labelNoOptions: 'Ничего нет',
        labelNoMatches: 'Совпадений нет',
        labelLoading: 'Загрузка',
        labelSearch: 'Поиск по списку',
        labelSearchClear: 'Сбросить'
      }
    },
    ESBreadcrumbs: {
      defaultProps: {
        labelButtonMore: 'Ещё'
      }
    },
    ESCalendarHead: {
      defaultProps: {
        getWeekDays: () => ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
      }
    },
    ESDialogArrow: {
      defaultProps: {
        labelPrev: 'Назад',
        labelNext: 'Вперёд'
      }
    },
    ESDialogClose: {
      defaultProps: {
        label: 'Закрыть'
      }
    },
    ESFileInfoName: {
      defaultProps: {
        labelDelete: 'Удалить'
      }
    },
    ESFormatSize: {
      defaultProps: {
        metricUnits: ['Б', 'КБ', 'МБ', 'ГБ', 'ТБ'],
        binaryUnits: ['Б', 'КиБ', 'МиБ', 'ГиБ', 'ТиБ']
      }
    },
    ESGalleryActions: {
      defaultProps: {
        labelClose: 'Закрыть',
        labelThumbnails: 'Миниатюры'
      }
    },
    ESGalleryDescription: {
      defaultProps: {
        labelCollapse: 'Свернуть описание',
        labelExpand: 'Развернуть описание'
      }
    },
    ESGalleryMeta: {
      defaultProps: {
        labelClose: 'Закрыть'
      }
    },
    ESGallerySwiper: {
      defaultProps: {
        labelNext: 'Следующее фото',
        labelPrev: 'Предыдущее фото'
      }
    },
    ESPaginationPages: {
      defaultProps: {
        labelPrevPage: 'Предыдущая страница',
        labelNextPage: 'Следующая страница',
        labelPage: 'стр.'
      }
    },
    ESPaginationRange: {
      defaultProps: {
        labelItemsPerPage: 'По:',
        labelOf: 'из'
      }
    },
    ESPasswordField: {
      defaultProps: {
        labelHidePassword: 'Скрыть пароль',
        labelShowPassword: 'Показать пароль'
      }
    },
    ESSidebarToggle: {
      defaultProps: {
        labelOpen: 'Полный вид',
        labelHide: 'Компактный вид'
      }
    },
    ESSidebarItem: {
      defaultProps: {
        labelOpen: 'Показать вложенный список',
        labelHide: 'Скрыть вложенный список'
      }
    },
    ESSFSSearch: {
      defaultProps: {
        ariaLabel: 'Поиск',
        placeholder: 'Поиск',
        labelClear: 'Сбросить'
      }
    },
    ESSFSSorting: {
      defaultProps: {
        labelAsc: 'По возрастанию',
        labelDesc: 'По убыванию',
        labelResetButton: 'Сбросить',
        labelButton: 'Сортировка',
        labelSortOrder: 'Порядок сортировки',
        labelSortTooltip: 'Сортировка по свойствам',
        labelMultisortTitle: 'Мультисортировка',
        labelMultisortLMB: 'ЛКМ',
        labelMultisortMobileOn: 'Мультисортировка включена',
        labelMultisortMobileOff: 'Удерживайте для мультисортировки'
      }
    },
    ESSFSFilters: {
      defaultProps: {
        labelButton: 'Фильтры',
        labelHeader: 'Фильтры',
        labelClose: 'Закрыть',
        labelReset: 'Сбросить все фильтры'
      }
    },
    ESSwiperButton: {
      defaultProps: {
        labelPrev: 'Предыдущий слайд',
        labelNext: 'Следующий слайд'
      }
    },
    ESTableActions: {
      defaultProps: {
        label: 'Выбрано'
      }
    },
    ESTableCell: {
      defaultProps: {
        labelResize: 'Изменить ширину'
      }
    },
    ESMadeBy: {
      defaultProps: {
        text: 'Сделано в'
      }
    }
  }
};
