import { Meta, StoryContext, StoryObj } from '@storybook/react';

import { Typography, TypographyProps } from '.';

const getText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'ru'
    ? 'Съешь ещё этих мягких французских булок, да выпей же чаю'
    : 'The quick brown fox jumps over the lazy dog';
};

type Args = Pick<TypographyProps, 'children' | 'variant' | 'align' | 'noWrap'>;

const meta: Meta<Args> = {
  tags: ['autodocs'],
  title: 'Typography',
  parameters: {
    references: ['Typography']
  },
  argTypes: {
    children: {
      control: {
        type: 'text'
      }
    },

    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body400',
        'body400Medium',
        'body400Bold',
        'body300',
        'body300Medium',
        'body300Bold',
        'body200',
        'body200Medium',
        'body200Bold',
        'body100',
        'body100Medium',
        'body100Bold',
        'captionMedium',
        'captionBold',
        'mini200',
        'mini100',
        'mini100Bold',
        'micro',
        'caption',
        'button',
        'overline'
      ],
      control: { type: 'select' }
    },
    align: {
      options: ['inherit', 'left', 'center', 'right', 'justify'],
      control: { type: 'select' }
    },
    noWrap: {
      control: {
        type: 'boolean'
      }
    }
  }
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: ({ children, ...args }, context) => {
    return <Typography {...args}>{children || getText(context)}</Typography>;
  }
};

export const Responsive: Story = {
  render: ({ children, ...args }, context) => {
    return (
      <Typography {...args} variant={{ 0: 'h3', tabletXS: 'h2', desktopXS: 'caption' }}>
        {children || getText(context)}
      </Typography>
    );
  }
};
