import { DatePickerFooterProps } from './DatePickerFooter.types';

import clsx from 'clsx';
import { getDatePickerFooterUtilityClass } from './DatePickerFooter.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import Button from '@mui/material/Button';

type DatePickerFooterOwnerState = {
  classes?: DatePickerFooterProps['classes'];
};

const useUtilityClasses = (ownerState: DatePickerFooterOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root']
  };

  return composeClasses(slots, getDatePickerFooterUtilityClass, classes);
};

const DatePickerFooterRoot = styled('div', {
  name: 'ESDatePickerFooter',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '24px',
  borderTop: `1px solid ${theme.palette.monoA.A100}`
}));

export const DatePickerFooter: React.FC<DatePickerFooterProps> = (inProps) => {
  const { className, sx, ...props } = useThemeProps({
    props: inProps,
    name: 'ESDatePickerFooter'
  });

  const ownerState = { ...props };
  const classes = useUtilityClasses(ownerState);

  return (
    <DatePickerFooterRoot className={clsx(className, classes.root)} sx={sx}>
      <Button color="primary" size="40" variant="contained">
        OK
      </Button>
    </DatePickerFooterRoot>
  );
};
