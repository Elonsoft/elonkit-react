import { AlertCloseProps } from '../Alert';
import { AudioPlayerProps } from '../AudioPlayer';
import { BreadcrumbsProps } from '../Breadcrumbs';
import { ChipsProps } from '../Chips';
import { DialogArrowProps, DialogCloseProps } from '../Dialog';
import { FileInfoNameProps } from '../FileInfo';
import { FormatSizeProps } from '../FormatSize';
import { PaginationPagesProps, PaginationRangeProps } from '../Pagination';
import { SFSSearchProps, SFSSortingProps } from '../SFS';
import { SidebarItemProps, SidebarToggleProps } from '../Sidebar';
import { SwiperButtonProps } from '../Swiper';
import { TableActionsProps, TableCellProps } from '../Table';

export interface Localization {
  components: {
    ESAlertClose: {
      defaultProps: Pick<AlertCloseProps, 'label'>;
    };
    ESAudioPlayer: {
      defaultProps: Pick<
        AudioPlayerProps,
        | 'labelBack'
        | 'labelCurrent'
        | 'labelDownload'
        | 'labelMute'
        | 'labelOptions'
        | 'labelPause'
        | 'labelPlay'
        | 'labelRate'
        | 'labelRateNormal'
        | 'labelUnmute'
        | 'labelVolume'
      >;
    };
    ESBreadcrumbs: {
      defaultProps: Pick<BreadcrumbsProps, 'labelButtonMore'>;
    };
    ESChips: {
      defaultProps: Pick<ChipsProps, 'labelButtonMore' | 'labelTooltip'>;
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
    ESPaginationPages: {
      defaultProps: Pick<PaginationPagesProps, 'labelPrevPage' | 'labelNextPage' | 'labelPage'>;
    };
    ESPaginationRange: {
      defaultProps: Pick<PaginationRangeProps, 'labelItemsPerPage' | 'labelOf'>;
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
  };
}

export const en: Localization = {
  components: {
    ESAlertClose: {
      defaultProps: {
        label: 'Close'
      }
    },
    ESAudioPlayer: {
      defaultProps: {
        labelBack: 'Back',
        labelCurrent: 'Current playback time',
        labelDownload: 'Download',
        labelMute: 'Mute',
        labelOptions: 'Options',
        labelPause: 'Pause',
        labelPlay: 'Play',
        labelRate: 'Rate',
        labelRateNormal: 'Normal',
        labelUnmute: 'Unmute',
        labelVolume: 'Volume'
      }
    },
    ESBreadcrumbs: {
      defaultProps: {
        labelButtonMore: 'More'
      }
    },
    ESChips: {
      defaultProps: {
        labelButtonMore: 'Hide',
        labelTooltip: 'Show all'
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
    ESAudioPlayer: {
      defaultProps: {
        labelBack: 'Назад',
        labelCurrent: 'Текущее время воспроизведения',
        labelDownload: 'Скачать',
        labelMute: 'Выключить звук',
        labelOptions: 'Опции',
        labelPause: 'Остановить воспроизведение',
        labelPlay: 'Начать воспроизведение',
        labelRate: 'Скорость',
        labelRateNormal: 'Обычная',
        labelUnmute: 'Включить звук',
        labelVolume: 'Громкость'
      }
    },
    ESBreadcrumbs: {
      defaultProps: {
        labelButtonMore: 'Ещё'
      }
    },
    ESChips: {
      defaultProps: {
        labelButtonMore: 'Скрыть',
        labelTooltip: 'Показать все'
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
    }
  }
};
