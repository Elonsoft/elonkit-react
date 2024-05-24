import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@mui/material';

import { ZoomPanPinchComponent } from './ZoomPanPinchComponent';
import { ZoomPanPinchWrapper } from './ZoomPanPinchWrapper';

const meta: Meta<typeof ZoomPanPinchWrapper> = {
  tags: ['autodocs'],
  component: ZoomPanPinchWrapper,
  parameters: {
    references: ['ZoomPanPinchWrapper', 'ZoomPanPinchComponent']
  }
};

export default meta;
type Story = StoryObj<typeof ZoomPanPinchWrapper>;

export const Demo: Story = {
  render: () => {
    return (
      <ZoomPanPinchWrapper initialPositionX={0} initialPositionY={0} initialScale={1}>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <Button sx={{ marginRight: '10px' }} variant="contained" onClick={() => zoomIn()}>
              +
            </Button>
            <Button sx={{ marginRight: '10px' }} variant="contained" onClick={() => zoomOut()}>
              -
            </Button>
            <Button variant="contained" onClick={() => resetTransform()}>
              x
            </Button>

            <ZoomPanPinchComponent>
              <img alt="test" src="./avatar/5.png" />
            </ZoomPanPinchComponent>
          </>
        )}
      </ZoomPanPinchWrapper>
    );
  }
};
