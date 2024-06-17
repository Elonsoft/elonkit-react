import { Meta, StoryContext, StoryObj } from '@storybook/react';

import { Step } from './Step/Step';
import { StepLabel } from './StepLabel';
import { Stepper } from '.';

const getText = (context: StoryContext<unknown>) => {
  return context.globals.locale === 'en' ? 'Button' : 'Кнопка';
};

const meta: Meta<typeof Stepper> = {
  tags: ['autodocs'],
  component: Stepper,
  parameters: {
    references: ['Stepper'],
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    size: {
      options: ['24', '32'],
      control: {
        type: 'select',
      },
    },
    activeStep: {
      control: { type: 'number' },
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    size: '32',
    orientation: 'horizontal',
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

type StepStatus = 'completed' | 'inProgress' | 'error';

export interface Step {
  id: number;
  title: string;
  status: StepStatus;
  content?: React.ReactNode;
}

export const Demo: Story = {
  render: (args, context) => {
    const text = getText(context);
    return (
      <Stepper {...args}>
        <Step completed>
          <StepLabel>{text}</StepLabel>
        </Step>
        <Step error>
          <StepLabel>{text}</StepLabel>
        </Step>
        <Step>
          <StepLabel>{text}</StepLabel>
        </Step>
        <Step disabled>
          <StepLabel>{text}</StepLabel>
        </Step>
      </Stepper>
    );
  },
};
