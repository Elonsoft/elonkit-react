import { Meta, StoryObj } from '@storybook/react';

import { Slider } from '.';

const meta: Meta<typeof Slider> = {
  tags: ['autodocs'],
  component: Slider,
  parameters: {
    references: ['Slider'],
  },
  // argTypes: {
  //   value: {
  //     table: {
  //       disable: true,
  //     },
  //   },
  //   name: {
  //     table: {
  //       disable: true,
  //     },
  //   },
  //   id: {
  //     table: {
  //       disable: true,
  //     },
  //   },
  //   autoFocus: {
  //     table: {
  //       disable: true,
  //     },
  //   },
  //   checked: {
  //     control: { type: 'boolean' },
  //   },
  //   defaultChecked: {
  //     table: {
  //       disable: true,
  //     },
  //   },
  // },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Demo: Story = {
  render: (args) => {
    return <Slider {...args} />;
  },
};
