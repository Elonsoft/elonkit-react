import { useState } from 'react';

import { InlineTextFieldProps } from './InlineTextField.types';

import clsx from 'clsx';
import { getInlineTextFieldUtilityClass } from './InlineTextField.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type InlineTextFieldOwnerState = {
  classes?: InlineTextFieldProps['classes'];
};

const useUtilityClasses = (ownerState: InlineTextFieldOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getInlineTextFieldUtilityClass, classes);
};

const InlineTextFieldRoot = styled(Typography, {
  name: 'ESInlineTextField',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  display: 'block',
  whiteSpace: 'pre-wrap',

  '& .MuiInput-root': {
    padding: 0,
    lineHeight: 'inherit',

    '&::before, &::after': {
      bottom: '-4px'
    },

    '& .MuiSelect-select': {
      minHeight: 'auto'
    }
  },
  '& .MuiInput-input': {
    padding: 0,
    height: 'auto',
    textTransform: 'inherit'
  }
})) as typeof Typography;

export const InlineTextField: React.FC<InlineTextFieldProps> = (inProps) => {
  const {
    children,
    value,
    variant = 'inherit',
    className,
    sx,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESInlineTextField'
  });

  const [isVisible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(!isVisible);
  };

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <div>
      <InlineTextFieldRoot className={clsx(classes.root, className)} sx={sx} component="div" variant={variant}>
        {isVisible ? children : value}
      </InlineTextFieldRoot>

      <button style={{ display: 'block', marginTop: '8px' }} type="button" onClick={onClick}>
        toggle
      </button>
    </div>
  );
};
