import { ComponentProps } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react';

import Typography from '@mui/material/Typography';

import { Dialog } from './Dialog';
import { DialogActions } from './DialogActions';
import { DialogArrow } from './DialogArrow';
import { DialogClose } from './DialogClose';
import { DialogContent } from './DialogContent';
import { DialogTitle } from './DialogTitle';

import { IconArrowLeftW500, IconCheckW500 } from '../../icons';
import { Button } from '../Button';
import { useDialogStack } from '../DialogStack';

const getOpenButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Open dialog window' : 'Открыть диалоговое окно';
};

const getHeadingText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Heading' : 'Заголовок';
};

const getCancelButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Cancel' : 'Отмена';
};

const getCreateButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Create' : 'Создать';
};

type Args = ComponentProps<typeof Dialog> & {
  DialogTitleSticky?: boolean;
  DialogActionsSticky?: boolean;
  DialogTitleStartAdornment?: boolean;
  DialogTitleEndAdornment?: boolean;
  DialogTitleProminent?: boolean;
};

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: Dialog,
  parameters: {
    references: ['Dialog', 'DialogActions', 'DialogArrow', 'DialogClose', 'DialogTitle', 'DialogStackProvider'],
  },
  argTypes: {
    DialogTitleSticky: {
      name: 'sticky',
      description: 'Whether the actions should be sticky.',
      table: {
        category: 'DialogTitle',
      },
      defaultValue: true,
      control: {
        type: 'boolean',
      },
    },
    DialogActionsSticky: {
      name: 'sticky',
      description: 'Whether the title should be sticky.',
      table: {
        category: 'DialogActions',
      },
      defaultValue: true,
      control: {
        type: 'boolean',
      },
    },
    DialogTitleStartAdornment: {
      name: 'startAdornment',
      description: 'Element placed before the children.',
      table: {
        category: 'DialogTitle',
      },
      control: {
        type: 'boolean',
      },
    },
    DialogTitleEndAdornment: {
      name: 'endAdornment',
      description: 'Element placed after the children.',
      table: {
        category: 'DialogTitle',
      },
      control: {
        type: 'boolean',
      },
    },
    DialogTitleProminent: {
      name: 'prominent',
      description: 'If true, the children will be show below the root element.',
      table: {
        category: 'DialogTitle',
      },
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    DialogTitleSticky: true,
    DialogActionsSticky: true,
    DialogTitleStartAdornment: false,
    DialogTitleEndAdornment: false,
  },
};

export default meta;
type Story = StoryObj<Args>;

export const Demo: Story = {
  render: function Render(args, context) {
    const dialogStack = useDialogStack();

    const onOpen = () => {
      dialogStack
        .open(({ close }) => (
          <Dialog
            fullWidth
            align="center"
            before={<DialogClose onClick={() => close()} />}
            maxWidth="700px"
            onClose={() => close()}
          >
            <DialogArrow direction="prev" />
            <DialogArrow direction="next" />
            <DialogTitle
              endAdornment={
                args.DialogTitleEndAdornment ? (
                  <Button color="tertiary" size="40">
                    <IconCheckW500 />
                  </Button>
                ) : null
              }
              prominent={args.DialogTitleProminent}
              startAdornment={
                args.DialogTitleStartAdornment ? (
                  <Button color="tertiary" size="40">
                    <IconArrowLeftW500 />
                  </Button>
                ) : null
              }
              sticky={args.DialogTitleSticky}
            >
              {getHeadingText(context)}
            </DialogTitle>
            <DialogContent>
              <Typography variant="body200">
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
                mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
                mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
                mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
            </DialogContent>
            <DialogActions sticky={args.DialogActionsSticky}>
              <Button color="tertiary" size="40" variant="outlined" onClick={() => close()}>
                {getCancelButtonText(context)}
              </Button>
              <Button color="primary" size="40" variant="contained" onClick={() => close(true)}>
                {getCreateButtonText(context)}
              </Button>
            </DialogActions>
          </Dialog>
        ))
        .afterClosed.then((data) => {
          console.info(data);
        });
    };

    return (
      <Button color="primary" variant="contained" onClick={onOpen}>
        {getOpenButtonText(context)}
      </Button>
    );
  },
};

/** Dialogs can be aligned to the top of the screen. */
export const Alignment: Story = {
  render: function Render(args, context) {
    const dialogStack = useDialogStack();

    const onOpen = () => {
      dialogStack
        .open(({ close }) => (
          <Dialog fullWidth align="flex-start" maxWidth="700px" onClose={() => close()}>
            <DialogTitle
              endAdornment={
                args.DialogTitleEndAdornment ? (
                  <Button color="tertiary" size="40">
                    <IconCheckW500 />
                  </Button>
                ) : null
              }
              prominent={args.DialogTitleProminent}
              startAdornment={
                args.DialogTitleStartAdornment ? (
                  <Button color="tertiary" size="40">
                    <IconArrowLeftW500 />
                  </Button>
                ) : null
              }
              sticky={args.DialogTitleSticky}
            >
              {getHeadingText(context)}
            </DialogTitle>
            <DialogContent>
              <Typography variant="body200">
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.
              </Typography>
            </DialogContent>
            <DialogActions sticky={args.DialogActionsSticky}>
              <Button color="tertiary" size="40" variant="outlined" onClick={() => close()}>
                {getCancelButtonText(context)}
              </Button>
              <Button color="primary" size="40" variant="contained" onClick={() => close(true)}>
                {getCreateButtonText(context)}
              </Button>
            </DialogActions>
          </Dialog>
        ))
        .afterClosed.then((data) => {
          console.info(data);
        });
    };

    return (
      <Button color="primary" variant="contained" onClick={onOpen}>
        {getOpenButtonText(context)}
      </Button>
    );
  },
};

/** Dialogs can be opened in `fullScreen` mode. */
export const FullScreen: Story = {
  render: function Render(args, context) {
    const dialogStack = useDialogStack();

    const onOpen = () => {
      dialogStack
        .open(({ close }) => (
          <Dialog fullScreen align="flex-start" onClose={() => close()}>
            <DialogTitle
              endAdornment={
                args.DialogTitleEndAdornment ? (
                  <Button color="tertiary" size="40">
                    <IconCheckW500 />
                  </Button>
                ) : null
              }
              prominent={args.DialogTitleProminent}
              startAdornment={
                args.DialogTitleStartAdornment ? (
                  <Button color="tertiary" size="40">
                    <IconArrowLeftW500 />
                  </Button>
                ) : null
              }
              sticky={args.DialogTitleSticky}
            >
              {getHeadingText(context)}
            </DialogTitle>
            <DialogContent>
              <Typography variant="body200">
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
                mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
                mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur
                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras
                justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
                mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
            </DialogContent>
            <DialogActions sticky={args.DialogActionsSticky}>
              <Button color="tertiary" size="40" variant="outlined" onClick={() => close()}>
                {getCancelButtonText(context)}
              </Button>
              <Button color="primary" size="40" variant="contained" onClick={() => close(true)}>
                {getCreateButtonText(context)}
              </Button>
            </DialogActions>
          </Dialog>
        ))
        .afterClosed.then((data) => {
          console.info(data);
        });
    };

    return (
      <Button color="primary" variant="contained" onClick={onOpen}>
        {getOpenButtonText(context)}
      </Button>
    );
  },
};

/** Dialogs can be easily stacked on top of each other with the help of the `DialogStackProvider`. */
export const Stack: Story = {
  render: function Render(_args, context) {
    const dialogStack = useDialogStack();

    const onOpen = (i: number) => () => {
      dialogStack.open(({ close }) => (
        <Dialog fullWidth maxWidth="700px" onClose={() => close()}>
          <DialogTitle>
            {getHeadingText(context)} {i + 1}
          </DialogTitle>
          <DialogContent>
            <Typography variant="body200">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
              fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button color="tertiary" size="40" variant="outlined" onClick={() => close()}>
              {getCancelButtonText(context)}
            </Button>
            <Button color="primary" size="40" variant="contained" onClick={onOpen(i + 1)}>
              {getOpenButtonText(context)}
            </Button>
          </DialogActions>
        </Dialog>
      ));
    };

    return (
      <Button color="primary" variant="contained" onClick={onOpen(0)}>
        {getOpenButtonText(context)}
      </Button>
    );
  },
};
