import { SwiperPaginationProps } from '../SwiperPagination/SwiperPagination.types';

export interface SwiperPaginationItemProps {
  classes?: SwiperPaginationProps['classes'];

  index: number;
  active: number;
  from: number;
  to: number;
  siblingFrom: number;
  siblingTo: number;
  name: string;
  transition: {
    transitionDuration?: string;
  };
  onSlideChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
