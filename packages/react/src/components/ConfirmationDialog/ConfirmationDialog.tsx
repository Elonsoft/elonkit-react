import { forwardRef, useState } from 'react';

import { ConfirmationDialogProps } from './ConfirmationDialog.types';

import clsx from 'clsx';
import { getConfirmationDialogUtilityClass } from './ConfirmationDialog.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { buttonBaseClasses } from '@mui/material';
// eslint-disable-next-line no-restricted-imports
import IconButton from '@mui/material/IconButton';

import { IconAlertW500, IconInformation2W500 } from '../../icons';
import { Button } from '../Button';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '../Dialog';
import { LoadingButton } from '../LoadingButton';
import { svgIconClasses } from '../SvgIcon';

type ConfirmationDialogOwnerState = {
  classes?: ConfirmationDialogProps['classes'];
};

const useUtilityClasses = (ownerState: ConfirmationDialogOwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    icon: ['icon'],
  };

  return composeClasses(slots, getConfirmationDialogUtilityClass, classes);
};

const ConfirmationDialogRoot = styled(Dialog, {
  name: 'ESConfirmationDialog',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})(() => ({
  '& .ESDialog-paper': {
    position: 'relative',
    borderRadius: '16px',
    height: '100%',
  },
}));

const ConfirmationDialogTitle = styled(DialogTitle, {
  name: 'ESConfirmationDialog',
  slot: 'Title',
  overridesResolver: (props, styles) => styles.title,
})<{ ownerState: { severity: 'error' | 'primary' } }>(({ theme, ownerState }) => ({
  padding: '52px 8px 12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '12px',

  [theme.breakpoints.up('tabletXS')]: {
    gap: '8px',
    padding: '22px 24px',
    flexDirection: 'row',
  },
  [`& .${svgIconClasses.root}`]: {
    color: `${theme.vars.palette[ownerState.severity][300]}`,

    [theme.breakpoints.down('tabletXS')]: {
      width: '56px !important',
      height: '56px !important',
    },
  },
}));

const ConfirmationDialogIcon = styled('div', {
  name: 'ESConfirmationDialog',
  slot: 'Icon',
  overridesResolver: (props, styles) => styles.icon,
})(() => ({
  paddingTop: '8px',
  marginRight: '8px',
}));

const ConfirmationDialogContent = styled(DialogContent, {
  name: 'ESConfirmationDialog',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content,
})(({ theme }) => ({
  padding: '0 16px',
  color: theme.vars.palette.monoA.A800,
  textAlign: 'center',

  [theme.breakpoints.up('tabletXS')]: {
    padding: '0 24px',
    textAlign: 'left',
  },
}));

const ConfirmationDialogActions = styled(DialogActions, {
  name: 'ESConfirmationDialog',
  slot: 'Actions',
  overridesResolver: (props, styles) => styles.actions,
})(({ theme }) => ({
  padding: '16px',

  [theme.breakpoints.up('tabletXS')]: {
    padding: '24px',
  },

  [`.${buttonBaseClasses.root}`]: {
    width: '100%',

    [theme.breakpoints.up('tabletXS')]: {
      width: 'auto',
      padding: '0 16px',
    },
  },
}));

const ConfirmationDialogClose = styled(IconButton)(() => ({
  position: 'absolute',
  right: '8px',
  top: '8px',
}));

const defaultIconMapping = {
  error: <IconAlertW500 />,
  primary: <IconInformation2W500 />,
};

/**
 * ConfirmationDialog asks user to approve requested operation.
 */

export const ConfirmationDialog = forwardRef<HTMLDivElement | null, ConfirmationDialogProps>(
  function Dialog(inProps, ref) {
    const {
      children,
      disabled,
      icon,
      iconClose,
      labelCancel,
      labelConfirm,
      className,
      severity = 'primary',
      action,
      close,
      open,
      title,
      iconMapping = defaultIconMapping,
      ...props
    } = useThemeProps({
      props: inProps,
      name: 'ESConfirmationDialog',
    });

    const [isSending, setSending] = useState(false);
    const ownerState = {
      ...props,
      severity,
    };

    const onConfirm = () => {
      setSending(true);

      action()
        .then((data) => {
          close(data);
        })
        .catch((error) => {
          setSending(false);
          return Promise.reject(error);
        });
    };

    const onClose = () => {
      if (!isSending) {
        close();
      }
    };

    const classes = useUtilityClasses(ownerState);

    return (
      <ConfirmationDialogRoot
        ref={ref}
        className={clsx(classes.root, className)}
        open={open || false}
        onClose={onClose}
        {...props}
      >
        {iconClose && (
          <ConfirmationDialogClose aria-label="Закрыть" onClick={onClose}>
            {iconClose}
          </ConfirmationDialogClose>
        )}

        <ConfirmationDialogTitle ownerState={{ severity }}>
          {icon !== false && (
            <ConfirmationDialogIcon className={classes.icon}>{icon || iconMapping[severity]}</ConfirmationDialogIcon>
          )}
          {title}
        </ConfirmationDialogTitle>
        <ConfirmationDialogContent>{children}</ConfirmationDialogContent>
        <ConfirmationDialogActions>
          <Button color="tertiary" size="500" variant="outlined" onClick={onClose}>
            {labelCancel}
          </Button>
          {!!labelConfirm && (
            <LoadingButton
              color={severity}
              disabled={isSending || disabled}
              loading={isSending}
              size="500"
              variant="contained"
              onClick={onConfirm}
            >
              {labelConfirm}
            </LoadingButton>
          )}
        </ConfirmationDialogActions>
      </ConfirmationDialogRoot>
    );
  }
);
