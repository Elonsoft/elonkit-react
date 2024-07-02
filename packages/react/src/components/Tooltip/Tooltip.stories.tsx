import { ComponentProps } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react';

import { Box, Grid, Theme, useMediaQuery, useTheme } from '@mui/material';

import { Tooltip } from '.';

import { Button } from '../Button';

type Args = ComponentProps<typeof Tooltip>;

type TooltipArrowPlacement =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top';

const getTooltipText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Tooltip' : 'Подсказка';
};

const getButtonText = (context: StoryContext<unknown>, placement: TooltipArrowPlacement) => {
  switch (placement) {
    case 'top-start': {
      return context.globals.locale === 'en' ? 'Top-start' : 'Сверху-начало';
    }
    case 'top': {
      return context.globals.locale === 'en' ? 'Top' : 'Сверху';
    }
    case 'top-end': {
      return context.globals.locale === 'en' ? 'Top-end' : 'Сверху-конец';
    }
    case 'left-start': {
      return context.globals.locale === 'en' ? 'Left-start' : 'Слева-начало';
    }
    case 'left': {
      return context.globals.locale === 'en' ? 'Left' : 'Слева';
    }
    case 'left-end': {
      return context.globals.locale === 'en' ? 'Left-end' : 'Слева-конец';
    }
    case 'right-start': {
      return context.globals.locale === 'en' ? 'Right-start' : 'Справа-начало';
    }
    case 'right': {
      return context.globals.locale === 'en' ? 'Right' : 'Справа';
    }
    case 'right-end': {
      return context.globals.locale === 'en' ? 'Right-end' : 'Справа-конец';
    }
    case 'bottom-start': {
      return context.globals.locale === 'en' ? 'Bottom-start' : 'Снизу-начало';
    }
    case 'bottom': {
      return context.globals.locale === 'en' ? 'Bottom' : 'Снизу';
    }
    case 'bottom-end': {
      return context.globals.locale === 'en' ? 'Bottom-end' : 'Снизу-конец';
    }
  }
};

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Tooltip,
  parameters: {
    references: ['Tooltip'],
  },
  argTypes: {
    title: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    components: {
      table: {
        disable: true,
      },
    },
    componentsProps: {
      table: {
        disable: true,
      },
    },
    describeChild: {
      table: {
        disable: true,
      },
    },
    disableInteractive: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    open: {
      table: {
        disable: true,
      },
    },
    placement: {
      table: {
        disable: true,
      },
    },
    PopperComponent: {
      table: {
        disable: true,
      },
    },
    PopperProps: {
      table: {
        disable: true,
      },
    },
    slots: {
      table: {
        disable: true,
      },
    },
    slotProps: {
      table: {
        disable: true,
      },
    },
    TransitionComponent: {
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
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: function Render(args, context) {
    const theme = useTheme();
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('tabletXS'));

    const isLightColor = args.color === 'monoB' || args.color === 'monoBA600' || args.color === 'whiteA600';
    const backgroundColor = isLightColor ? theme.vars.palette.monoA.A400 : undefined;

    return (
      <Box
        sx={{
          width: '100%',
          padding: isMobile ? undefined : '120px',
          backgroundColor,
        }}
      >
        <Grid container justifyContent="center">
          <Grid item>
            <Tooltip placement="top-start" {...args} title={getTooltipText(context)}>
              <Button color="primary">{getButtonText(context, 'top-start')}</Button>
            </Tooltip>
            <Tooltip placement="top" {...args} title={getTooltipText(context)}>
              <Button color="primary">{getButtonText(context, 'top')}</Button>
            </Tooltip>
            <Tooltip placement="top-end" {...args} title={getTooltipText(context)}>
              <Button color="primary">{getButtonText(context, 'top-end')}</Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap">
          <Grid item>
            <Tooltip placement="left-start" {...args} title={getTooltipText(context)}>
              <Button color="primary">{getButtonText(context, 'left-start')}</Button>
            </Tooltip>
            <br />
            <Tooltip placement="left" {...args} title={getTooltipText(context)}>
              <Button color="primary">{getButtonText(context, 'left')}</Button>
            </Tooltip>
            <br />
            <Tooltip placement="left-end" {...args} title={getTooltipText(context)}>
              <Button color="primary">{getButtonText(context, 'left-end')}</Button>
            </Tooltip>
          </Grid>
          <Grid container item alignItems="flex-end" direction="column">
            <Grid item>
              <Tooltip placement="right-start" {...args} title={getTooltipText(context)}>
                <Button color="primary">{getButtonText(context, 'right-start')}</Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip placement="right" {...args} title={getTooltipText(context)}>
                <Button color="primary">{getButtonText(context, 'right')}</Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip placement="right-end" {...args} title={getTooltipText(context)}>
                <Button color="primary">{getButtonText(context, 'right-end')}</Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Tooltip placement="bottom-start" {...args} title={getTooltipText(context)}>
              <Button color="primary">{getButtonText(context, 'bottom-start')}</Button>
            </Tooltip>
            <Tooltip placement="bottom" {...args} title={getTooltipText(context)}>
              <Button color="primary">{getButtonText(context, 'bottom')}</Button>
            </Tooltip>
            <Tooltip placement="bottom-end" {...args} title={getTooltipText(context)}>
              <Button color="primary">{getButtonText(context, 'bottom-end')}</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    );
  },
};
