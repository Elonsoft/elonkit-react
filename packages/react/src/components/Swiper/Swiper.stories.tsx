import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { styled } from '@mui/material/styles';
import IconButton, { iconButtonClasses } from '@mui/material/IconButton';

import { useSwiperContext } from './Swiper.context';
import { Swiper, SwiperPagination, SwiperPaginationProps } from '.';

import { IconChevronLeftW400, IconChevronRightW400 } from '../../icons';

const Image = (props: { src: string; width?: string }) => {
  return (
    <img
      height="160px"
      src={props.src}
      style={{ objectFit: 'cover', borderRadius: '8px' }}
      width={props.width || '160px'}
    />
  );
};

type Args = ComponentProps<typeof Swiper> & {
  SwiperPaginationPosition?: SwiperPaginationProps['position'];
  SwiperPaginationVariant?: SwiperPaginationProps['variant'];
  SwiperPaginationSiblingCount?: SwiperPaginationProps['siblingCount'];
  SwiperPaginationTransitionDuration?: SwiperPaginationProps['transitionDuration'];
};

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Swiper,
  parameters: {
    references: ['Swiper', 'SwiperButton', 'SwiperPagination']
  },
  argTypes: {
    direction: {
      table: {
        disable: true
      }
    },
    alignment: {
      table: {
        category: 'General'
      },
      options: ['center', 'start'],
      control: { type: 'select' }
    },
    snap: {
      table: {
        category: 'General'
      },
      defaultValue: true
    },
    draggable: {
      table: {
        category: 'General'
      },
      defaultValue: true
    },
    gap: {
      table: {
        category: 'General'
      }
    },
    loop: {
      table: {
        category: 'General'
      }
    },
    autoPlay: {
      table: {
        category: 'AutoPlay'
      }
    },
    autoPlayCount: {
      table: {
        category: 'AutoPlay'
      }
    },
    buttonPrev: {
      table: {
        disable: true
      }
    },
    buttonNext: {
      table: {
        disable: true
      }
    },
    pagination: {
      table: {
        disable: true
      }
    },
    SwiperPaginationPosition: {
      name: 'SwiperPagination.position',
      description: 'The position of the `SwiperPagination` component.',
      table: {
        category: 'Pagination',
        defaultValue: { summary: 'end' }
      },
      options: ['start', 'end'],
      control: { type: 'select' }
    },
    SwiperPaginationVariant: {
      name: 'SwiperPagination.variant',
      description: 'The variant of the `SwiperPagination` component.',
      table: {
        category: 'Pagination',
        defaultValue: { summary: 'small' }
      },
      options: ['small', 'long', 'big'],
      control: { type: 'select' }
    },
    SwiperPaginationSiblingCount: {
      name: 'SwiperPagination.siblingCount',
      description: 'Number of always visible items before and after active slide.',
      table: {
        category: 'Pagination'
      },
      control: { type: 'number' }
    },
    SwiperPaginationTransitionDuration: {
      name: 'SwiperPagination.transitionDuration',
      description: 'The length of time in ms a transition animation should take to complete.',
      table: {
        category: 'Pagination',
        defaultValue: { summary: 'theme.transitions.duration.shortest' }
      },
      control: { type: 'number' }
    },
    actions: {
      table: {
        disable: true
      }
    }
  },
  args: {}
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: ({
    SwiperPaginationPosition,
    SwiperPaginationVariant,
    SwiperPaginationSiblingCount,
    SwiperPaginationTransitionDuration,
    ...args
  }) => {
    return (
      <Swiper
        {...args}
        pagination={
          <SwiperPagination
            position={SwiperPaginationPosition}
            siblingCount={SwiperPaginationSiblingCount}
            transitionDuration={SwiperPaginationTransitionDuration}
            variant={SwiperPaginationVariant}
          />
        }
      >
        <Image src="./swiper/1.png" />
        <Image src="./swiper/2.png" width="320px" />
        <Image src="./swiper/3.png" />
        <Image src="./swiper/4.png" />
        <Image src="./swiper/1.png" />
        <Image src="./swiper/2.png" width="320px" />
        <Image src="./swiper/3.png" />
        <Image src="./swiper/4.png" />
        <Image src="./swiper/1.png" />
        <Image src="./swiper/2.png" />
        <Image src="./swiper/3.png" />
        <Image src="./swiper/4.png" />
      </Swiper>
    );
  }
};

/** We can create vertical swiper. */
export const Vertical: Story = {
  render: ({
    SwiperPaginationPosition,
    SwiperPaginationVariant,
    SwiperPaginationSiblingCount,
    SwiperPaginationTransitionDuration,
    ...args
  }) => {
    return (
      <div style={{ height: 'min(512px, calc(100vh - 2rem))' }}>
        <Swiper
          {...args}
          direction="vertical"
          pagination={
            <SwiperPagination
              position={SwiperPaginationPosition}
              siblingCount={SwiperPaginationSiblingCount}
              transitionDuration={SwiperPaginationTransitionDuration}
              variant={SwiperPaginationVariant}
            />
          }
        >
          <Image src="./swiper/1.png" />
          <Image src="./swiper/2.png" />
          <Image src="./swiper/3.png" />
          <Image src="./swiper/4.png" />
          <Image src="./swiper/1.png" />
          <Image src="./swiper/2.png" />
          <Image src="./swiper/3.png" />
          <Image src="./swiper/4.png" />
          <Image src="./swiper/1.png" />
          <Image src="./swiper/2.png" />
          <Image src="./swiper/3.png" />
          <Image src="./swiper/4.png" />
        </Swiper>
      </div>
    );
  }
};

const CustomizationButton = styled(IconButton)<{ prev?: boolean; next?: boolean }>(({ theme, prev, next }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',

  ...(prev && {
    left: 8
  }),
  ...(next && {
    right: 8
  }),

  [`&.${iconButtonClasses.root}.${iconButtonClasses.root}`]: {
    backdropFilter: 'blur(10px)',
    padding: 4,

    ...theme.mixins.button({
      background: theme.vars.palette.white.A600,
      color: theme.vars.palette.black[500],
      hover: theme.vars.palette.black.A50,
      focus: theme.vars.palette.black.A200,
      active: theme.vars.palette.black.A150
    })
  }
}));

const CustomizationButtonPrev = () => {
  const { active, setActiveSlide } = useSwiperContext();

  const onClick = () => {
    setActiveSlide(active - 1);
  };

  return (
    <CustomizationButton prev onClick={onClick}>
      <IconChevronLeftW400 />
    </CustomizationButton>
  );
};

const CustomizationButtonNext = () => {
  const { active, setActiveSlide } = useSwiperContext();

  const onClick = () => {
    setActiveSlide(active + 1);
  };

  return (
    <CustomizationButton next onClick={onClick}>
      <IconChevronRightW400 />
    </CustomizationButton>
  );
};

/** Swiper is highly customizable. We can adjust `gap` between slides, override styles for swiper, swiper buttons and
pagination, or provide our own components via `buttonPrev`, `buttonNext` and `pagination` props. */
export const Customization: Story = {
  render: (args) => {
    const Image = (props: { src: string }) => {
      return <img height="56px" src={props.src} width="56px" />;
    };

    return (
      <Swiper {...args} buttonNext={<CustomizationButtonNext />} buttonPrev={<CustomizationButtonPrev />} gap={8}>
        <Image src="./swiper/2-1.png" />
        <Image src="./swiper/2-2.png" />
        <Image src="./swiper/2-3.png" />
        <Image src="./swiper/2-4.png" />
        <Image src="./swiper/2-5.png" />
        <Image src="./swiper/2-6.png" />
        <Image src="./swiper/2-7.png" />
        <Image src="./swiper/2-8.png" />
        <Image src="./swiper/2-9.png" />
        <Image src="./swiper/2-1.png" />
        <Image src="./swiper/2-2.png" />
        <Image src="./swiper/2-3.png" />
        <Image src="./swiper/2-4.png" />
        <Image src="./swiper/2-5.png" />
        <Image src="./swiper/2-6.png" />
        <Image src="./swiper/2-7.png" />
        <Image src="./swiper/2-8.png" />
        <Image src="./swiper/2-9.png" />
        <Image src="./swiper/2-1.png" />
        <Image src="./swiper/2-2.png" />
        <Image src="./swiper/2-3.png" />
        <Image src="./swiper/2-4.png" />
        <Image src="./swiper/2-5.png" />
        <Image src="./swiper/2-6.png" />
        <Image src="./swiper/2-7.png" />
        <Image src="./swiper/2-8.png" />
        <Image src="./swiper/2-9.png" />
      </Swiper>
    );
  }
};
