import { Args, ReactFramework, Story, StoryContext } from '@storybook/react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Dialog } from './Dialog';
import { DialogActions } from './DialogActions';
import { DialogArrow } from './DialogArrow';
import { DialogClose } from './DialogClose';
import { DialogContent } from './DialogContent';
import { DialogTitle } from './DialogTitle';

import { useDialogStack } from '../DialogStack';

const getOpenButtonText = (args: Args, context: StoryContext<ReactFramework>) => {
  return context.globals.locale === 'en' ? 'Open dialog window' : 'Открыть диалоговое окно';
};

const getHeadingText = (args: Args, context: StoryContext<ReactFramework>) => {
  return context.globals.locale === 'en' ? 'Heading' : 'Заголовок';
};

const getCancelButtonText = (args: Args, context: StoryContext<ReactFramework>) => {
  return context.globals.locale === 'en' ? 'Cancel' : 'Отмена';
};

const getCreateButtonText = (args: Args, context: StoryContext<ReactFramework>) => {
  return context.globals.locale === 'en' ? 'Create' : 'Создать';
};

export const Demo: Story = (args, context) => {
  const dialogStack = useDialogStack();

  const onOpen = () => {
    dialogStack
      .open(({ close }) => (
        <Dialog
          onClose={() => close()}
          fullWidth
          maxWidth="700px"
          align="center"
          before={<DialogClose onClick={() => close()} />}
        >
          <DialogArrow direction="prev" />
          <DialogArrow direction="next" />
          <DialogTitle sticky={args.DialogTitleSticky}>{getHeadingText(args, context)}</DialogTitle>
          <DialogContent>
            <Typography variant="body200">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
              fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
              fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
              fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
              fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
              fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
              fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
              fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </Typography>
          </DialogContent>
          <DialogActions sticky={args.DialogActionsSticky}>
            <Button variant="outlined" color="tertiary" size="40" onClick={() => close()}>
              {getCancelButtonText(args, context)}
            </Button>
            <Button variant="contained" color="primary" size="40" onClick={() => close(true)}>
              {getCreateButtonText(args, context)}
            </Button>
          </DialogActions>
        </Dialog>
      ))
      .afterClosed.then((data) => {
        console.log(data);
      });
  };

  return (
    <Button variant="contained" onClick={onOpen}>
      {getOpenButtonText(args, context)}
    </Button>
  );
};

export const Alignment: Story = (args, context) => {
  const dialogStack = useDialogStack();

  const onOpen = () => {
    dialogStack
      .open(({ close }) => (
        <Dialog onClose={() => close()} fullWidth maxWidth="700px" align="flex-start">
          <DialogTitle>{getHeadingText(args, context)}</DialogTitle>
          <DialogContent>
            <Typography variant="body200">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
              fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="tertiary" size="40" onClick={() => close()}>
              {getCancelButtonText(args, context)}
            </Button>
            <Button variant="contained" color="primary" size="40" onClick={() => close(true)}>
              {getCreateButtonText(args, context)}
            </Button>
          </DialogActions>
        </Dialog>
      ))
      .afterClosed.then((data) => {
        console.log(data);
      });
  };

  return (
    <Button variant="contained" onClick={onOpen}>
      {getOpenButtonText(args, context)}
    </Button>
  );
};

export const Stack: Story = (args, context) => {
  const dialogStack = useDialogStack();

  const onOpen = (i: number) => () => {
    dialogStack.open(({ close }) => (
      <Dialog onClose={() => close()} fullWidth maxWidth="700px">
        <DialogTitle>
          {getHeadingText(args, context)} {i}
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
          <Button variant="outlined" color="tertiary" size="40" onClick={() => close()}>
            {getCancelButtonText(args, context)}
          </Button>
          <Button variant="contained" color="primary" size="40" onClick={onOpen(i + 1)}>
            {getOpenButtonText(args, context)}
          </Button>
        </DialogActions>
      </Dialog>
    ));
  };

  return (
    <Button variant="contained" onClick={onOpen(1)}>
      {getOpenButtonText(args, context)}
    </Button>
  );
};
