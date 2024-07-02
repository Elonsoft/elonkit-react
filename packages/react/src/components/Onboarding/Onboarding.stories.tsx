import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Box } from '@mui/material';

import { OnboardingPopper } from './OnboardingPopper';
import { Onboarding, OnboardingProps } from '.';

const meta: Meta<typeof Onboarding> = {
  tags: ['autodocs'],
  component: Onboarding,
  parameters: {
    references: ['Onboarding', 'OnboardingPopper']
  },
  argTypes: {
    padding: {
      control: { type: 'number' }
    }
  },
  args: {
    padding: 3
  }
};

export default meta;
type Story = StoryObj<typeof Onboarding>;

interface IStep {
  popper: (props: OnboardingProps) => JSX.Element;
  element: () => HTMLElement | null;
}

export const Demo: Story = {
  render: function Render(args) {
    const [currentStep, setCurrentStep] = useState<number | null>(0);

    const steps: IStep[] = [
      {
        popper: ({ ...props }) => <OnboardingPopper subtitle="subtitle" title="title1" {...props} />,
        element: () => document.getElementById('1')
      },
      {
        popper: ({ ...props }) => <OnboardingPopper title="title2" {...props} />,
        element: () => document.querySelector('[data-onboarding="3"]')
      },
      {
        popper: ({ ...props }) => <OnboardingPopper title="title3" {...props} />,
        element: () => document.querySelector('[data-onboarding="4"]')
      },
      {
        popper: ({ ...props }) => <OnboardingPopper title="Testing no data..." {...props} />,
        element: () => document.querySelector('[data-onboarding="12"]')
      },
      {
        popper: ({ ...props }) => <OnboardingPopper title="title5" {...props} />,
        element: () => document.getElementById('test')
      }
    ];
    return (
      <>
        <Onboarding padding={args.padding} step={currentStep} steps={steps} onStepChange={setCurrentStep} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '150px' }}>
          <Box data-onboarding="1" id="1" sx={{ backgroundColor: '#F2E344', width: '150px', height: '50px' }}>
            data-onboarding 1
          </Box>
          <Box>
            <Box>
              <Box>
                <Box data-onboarding="2" sx={{ backgroundColor: '#2338fe', width: '160px', height: '50px' }}>
                  data-onboarding 2 (nested)
                </Box>
              </Box>
            </Box>
          </Box>
          <Box data-onboarding="3" sx={{ backgroundColor: '#fff', width: '150px', height: '80px' }}>
            data-onboarding 3
          </Box>
          <Box data-onboarding="4" sx={{ backgroundColor: '#FE2344', width: '140px', height: '50px' }}>
            data-onboarding 4
          </Box>
          <Box id="test" sx={{ backgroundColor: '#48c6ea', width: '150px', height: '50px' }}>
            data-onboarding ID
          </Box>
        </Box>
      </>
    );
  }
};
