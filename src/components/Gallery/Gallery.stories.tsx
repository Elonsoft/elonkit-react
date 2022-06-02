import { useCallback, useState } from 'react';

import { Story } from '@storybook/react';

import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

import {
  Gallery,
  GalleryActions,
  GalleryDescription,
  GalleryMeta,
  GalleryMetaSeparator,
  GalleryMetaText,
  GalleryPanel,
  GallerySwiper,
  GallerySwiperImage,
  GalleryThumbnails,
  GalleryThumbnailsImage
} from '.';

import { IconShareOutline, IconTrayArrowDown } from '../../icons';
import { FormatDate } from '../FormatDate';
import { FormatSize } from '../FormatSize';

interface Item {
  id: number;
  src: string;
  title: string;
  description: string;
  date: string;
  size: string;
}
const ITEMS: Item[] = [];

const DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum blandit tellus in dapibus. Donec fringilla tortor ac imperdiet rhoncus. Suspendisse in commodo nunc. Curabitur eget neque et neque viverra facilisis. Nunc malesuada justo dignissim consectetur posuere. Nulla eu nunc neque. Nulla nec malesuada nunc. Aenean aliquet nunc lectus, sit amet consequat dui mattis scelerisque. Aenean vehicula est ut velit dictum sodales. Maecenas rutrum aliquam nunc eget venenatis. Aenean at augue justo. Donec mollis a urna at pellentesque. Aenean quis lectus et enim eleifend dictum non non ex. Suspendisse malesuada eu nisl eget sagittis. Nulla at interdum lorem, sed commodo justo. Sed vitae ex elementum, rhoncus ex a, dignissim metus. Morbi consequat rutrum lorem, ut convallis sem porttitor ac. Morbi augue dolor, suscipit sed fringilla at, lobortis at purus. Duis diam est, luctus sed finibus eget, iaculis ut risus. Morbi eu suscipit ipsum. In pellentesque quam et tempor suscipit. Duis hendrerit ipsum blandit lectus dapibus, et condimentum nisi blandit. Fusce auctor risus sit amet erat dignissim, ut condimentum neque suscipit. Mauris varius iaculis nunc. Vestibulum posuere hendrerit consectetur. Phasellus feugiat gravida tortor, nec pulvinar nisi semper vel. Duis in dictum turpis, ut posuere ipsum. Mauris egestas dui mauris. Suspendisse efficitur in leo ac imperdiet. Nulla id massa non leo fringilla tempus. Phasellus mollis tempor rutrum. Maecenas sagittis sem purus, a rhoncus justo porttitor eu. Nam maximus tincidunt elit, sed porttitor velit tristique vel. Pellentesque pulvinar pharetra ex eget porta. Nam ut sapien a leo malesuada egestas a ut mauris. Sed ut ornare dolor. Sed euismod luctus nisl. Morbi et lacus et felis fermentum convallis. Duis quis finibus purus. Nunc fermentum, augue in laoreet laoreet, metus neque blandit nisl, ut malesuada nulla tellus eget nisl. Sed pulvinar neque ac ligula lobortis mattis. Pellentesque porttitor tincidunt lectus sed scelerisque. Nulla sit amet ante sagittis, feugiat neque a, fermentum mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum blandit tellus in dapibus. Vestibulum elementum blandit tellus in dapibus. Donec fringilla tortor ac imperdiet rhoncus. Suspendisse in commodo nunc. Curabitur eget neque et neque viverra facilisis. Nunc malesuada justo dignissim consectetur posuere.';

for (let i = 0; i < 20; i++) {
  ITEMS.push({
    id: i,
    src: `swiper/${(i % 5) + 1}.jpg`,
    title: `swiper-${i + 1}.jpg`,
    description:
      i === 0 ? DESCRIPTION : i % 2 === 0 ? '' : `Lorem ipsum dolor sit amet, consectetur adipiscing elit ${i}.`,
    date: `2021-01-20T03:00:00.000Z`,
    size: `${1000 + 2 ** i}`
  });
}

const useI18N = (locale: 'en' | 'ru') => {
  const translations = {
    open: locale === 'ru' ? 'Открыть' : 'Open',
    download: locale === 'ru' ? 'Скачать' : 'Download',
    share: locale === 'ru' ? 'Поделиться' : 'Share'
  };

  return {
    t: (key: keyof typeof translations) => translations[key]
  };
};

export const Demo: Story = (args, context) => {
  const locale = context.globals.locale as 'en' | 'ru';
  const { t } = useI18N(locale);

  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = useCallback(() => {
    setOpen(false);
  }, [isOpen, setOpen]);

  return (
    <>
      <Button variant="contained" onClick={onOpen}>
        {t('open')}
      </Button>
      <Gallery {...args} items={ITEMS} open={isOpen} onClose={onClose}>
        <GalleryPanel position="top" direction="row">
          <GalleryMeta>
            {(item: Item) => (
              <>
                <GalleryMetaText primary>{item.title}</GalleryMetaText>
                <GalleryMetaText mobile>
                  <FormatDate format="fullDateTime24h">{item.date}</FormatDate>
                  <GalleryMetaSeparator />
                  <FormatSize>{item.size}</FormatSize>
                </GalleryMetaText>
              </>
            )}
          </GalleryMeta>
          <GalleryActions
            primary={[
              {
                icon: <IconTrayArrowDown />,
                text: t('download')
              }
            ]}
            secondary={[
              {
                icon: <IconShareOutline />,
                text: t('share')
              }
            ]}
          />
        </GalleryPanel>
        <GallerySwiper>{(item: Item) => <GallerySwiperImage key={item.id} src={item.src} />}</GallerySwiper>
        <GalleryPanel position="bottom" direction="column">
          <GalleryDescription>{(item: Item) => item.description}</GalleryDescription>
          <GalleryThumbnails>
            {(item: Item) => <GalleryThumbnailsImage key={item.id} src={item.src} />}
          </GalleryThumbnails>
        </GalleryPanel>
      </Gallery>
    </>
  );
};
