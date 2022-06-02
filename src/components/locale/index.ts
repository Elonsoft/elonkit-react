import { AlertCloseProps } from '../Alert';
import { AudioPlayerProps } from '../AudioPlayer';
import { DialogArrowProps, DialogCloseProps } from '../Dialog';
import { FileInfoNameProps } from '../FileInfo';
import { FormatSizeProps } from '../FormatSize';
import { GalleryActionsProps, GalleryDescriptionProps, GalleryMetaProps } from '../Gallery';
import { PaginationPagesProps, PaginationRangeProps } from '../Pagination';
import { SwiperButtonProps } from '../Swiper';
import { TableActionsProps } from '../TableActions';

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
      defaultProps: Pick<GalleryActionsProps, 'closeLabel' | 'fullscreenLabel' | 'moreLabel'>;
    };
    ESGalleryDescription: {
      defaultProps: Pick<GalleryDescriptionProps, 'collapseLabel' | 'expandLabel'>;
    };
    ESGalleryMeta: {
      defaultProps: Pick<GalleryMetaProps, 'showingLabel' | 'ofLabel'>;
    };
    ESPaginationPages: {
      defaultProps: Pick<PaginationPagesProps, 'labelPrevPage' | 'labelNextPage' | 'labelPage'>;
    };
    ESPaginationRange: {
      defaultProps: Pick<PaginationRangeProps, 'labelItemsPerPage' | 'labelOf'>;
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
        closeLabel: 'Close',
        fullscreenLabel: 'Fullscreen mode',
        moreLabel: 'More'
      }
    },
    ESGalleryDescription: {
      defaultProps: {
        collapseLabel: 'Collapse description',
        expandLabel: 'Expand description'
      }
    },
    ESGalleryMeta: {
      defaultProps: {
        showingLabel: 'Showing',
        ofLabel: 'of'
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
        closeLabel: 'Закрыть',
        fullscreenLabel: 'Полноэкранный режим',
        moreLabel: 'Ещё'
      }
    },
    ESGalleryDescription: {
      defaultProps: {
        collapseLabel: 'Свернуть описание',
        expandLabel: 'Развернуть описание'
      }
    },
    ESGalleryMeta: {
      defaultProps: {
        showingLabel: 'Просмотр',
        ofLabel: 'из'
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
    }
  }
};
