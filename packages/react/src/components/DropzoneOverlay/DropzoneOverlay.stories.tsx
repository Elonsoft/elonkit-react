import { Args, Meta, StoryContext, StoryObj } from '@storybook/react';

import { DropzoneOverlay } from '.';

import { FileIcon } from '../FileIcon';

const getHeading = (args: Args, context: StoryContext<unknown>) => {
  return args.heading || (context.globals.locale === 'en' ? 'Upload file' : 'Загрузить файл');
};

const getSubheading = (args: Args, context: StoryContext<unknown>) => {
  return (
    args.subheading ||
    (context.globals.locale === 'en'
      ? 'File max size 50 MB. Supported extensions are JPG, JPEG, PNG, HEIC, HEIF or WEBP'
      : 'Файл в формате JPG, JPEG, PNG, HEIC, HEIF или WEBP до 50 Мб')
  );
};

const getText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Drag file over the browser window' : 'Перетащите файл в окно браузера';
};

const meta: Meta<typeof DropzoneOverlay> = {
  tags: ['autodocs'],
  component: DropzoneOverlay,
  parameters: {
    references: ['DropzoneOverlay'],
  },
  argTypes: {
    heading: {
      table: {
        category: 'General',
      },
    },
    subheading: {
      table: {
        category: 'General',
      },
    },
    accept: {
      table: {
        category: 'General',
      },
    },
    maxSize: {
      table: {
        category: 'General',
      },
    },
    multiple: {
      table: {
        category: 'General',
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    TransitionProps: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    accept: '*',
  },
};

export default meta;
type Story = StoryObj<typeof DropzoneOverlay>;

export const Demo: Story = {
  render: (args, context) => {
    return (
      <>
        {getText(context)}
        <DropzoneOverlay
          {...args}
          heading={getHeading(args, context)}
          icon={<FileIcon height={44} width={33} />}
          subheading={getSubheading(args, context)}
        />
      </>
    );
  },
};
