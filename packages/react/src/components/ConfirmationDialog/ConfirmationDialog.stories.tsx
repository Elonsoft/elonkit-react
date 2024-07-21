import { ComponentProps } from 'react';

import { Meta, StoryContext, StoryObj } from '@storybook/react';

import { Typography } from '@mui/material';

import { ConfirmationDialog } from '.';

import { Button } from '../Button';
import { DialogClose } from '../Dialog';
import { useDialogStack } from '../DialogStack';

type Args = ComponentProps<typeof ConfirmationDialog>;

const getOpenButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Open dialog window' : 'Открыть диалоговое окно';
};

const getHeadingText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Are you confirm?' : 'Вы подтверждаете согласие?';
};

const getCancelButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Cancel' : 'Отмена';
};

const getConfirmButtonText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Confirm' : 'Подтвердить';
};

const meta: Meta<Args> = {
  tags: ['autodocs'],
  component: ConfirmationDialog,
  parameters: {
    references: ['ConfirmationDialog'],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    severity: 'primary',
    icon: true,
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
          <ConfirmationDialog
            fullWidth
            action={() => Promise.resolve(true)}
            align="center"
            before={<DialogClose onClick={() => close()} />}
            close={() => close()}
            icon={args.icon ? undefined : false}
            labelCancel={getCancelButtonText(context)}
            labelConfirm={getConfirmButtonText(context)}
            maxWidth="700px"
            severity={args.severity}
            title={getHeadingText(context)}
          >
            <Typography variant="body200">
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet
              fermentum.
            </Typography>
          </ConfirmationDialog>
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
