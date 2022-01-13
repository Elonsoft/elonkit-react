import { FileInfoNameProps } from '../FileInfo';
import { FormatSizeProps } from '../FormatSize';
import { PaginationPagesProps, PaginationRangeProps } from '../Pagination';
import { SnackbarProviderProps } from '../SnackbarProvider';
import { SwiperButtonProps } from '../Swiper';
import { TableActionsProps } from '../TableActions';

export interface Localization {
  components: {
    ESFileInfoName: {
      defaultProps: Pick<FileInfoNameProps, 'labelDelete'>;
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
    ESSnackbarProvider: {
      defaultProps: Pick<SnackbarProviderProps, 'labelCloseAll'>;
    };
    ESTableActions: {
      defaultProps: Pick<TableActionsProps, 'label'>;
    };
  };
}

export const en: Localization = {
  components: {
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
    ESSwiperButton: {
      defaultProps: {
        labelPrev: 'Previous slide',
        labelNext: 'Next slide'
      }
    },
    ESSnackbarProvider: {
      defaultProps: {
        labelCloseAll: 'Close all'
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
    ESSwiperButton: {
      defaultProps: {
        labelPrev: 'Предыдущий слайд',
        labelNext: 'Следующий слайд'
      }
    },
    ESSnackbarProvider: {
      defaultProps: {
        labelCloseAll: 'Закрыть все'
      }
    },
    ESTableActions: {
      defaultProps: {
        label: 'Выбрано'
      }
    }
  }
};
