import { ChangeEvent, DragEvent, useRef } from 'react';

import { DropzoneOverlayFileError, DropzoneOverlayFileRejection, DropzoneOverlayProps } from './DropzoneOverlay.types';

import clsx from 'clsx';
import { getDropzoneOverlayUtilityClass } from './DropzoneOverlay.classes';

import { unstable_composeClasses as composeClasses } from '@mui/base';

import { styled, useThemeProps } from '@mui/material/styles';
import { Fade, Modal, Typography } from '@mui/material';

import { useDocumentEventListener, useDragOver } from '../../hooks';
import { validateFileType } from '../Dropzone/validateFileType';

type DropzoneOverlayOwnerState = {
  classes?: DropzoneOverlayProps['classes'];
  isDragOver: boolean;
  isDragOverDocument: boolean;
};

const useUtilityClasses = (ownerState: DropzoneOverlayOwnerState) => {
  const { classes, isDragOver, isDragOverDocument } = ownerState;

  const slots = {
    root: ['root'],
    contentWrapper: ['contentWrapper'],
    content: [
      'content',
      isDragOver && 'dropzoneOverlayDragOver',
      isDragOverDocument && 'dropzoneOverlayDragOverDocument',
    ],
    input: ['input'],
    icon: ['icon'],
    heading: ['heading'],
    headingText: ['headingText'],
    subheading: ['subheading'],
  };

  return composeClasses(slots, getDropzoneOverlayUtilityClass, classes);
};

const DropzoneOverlayRoot = styled(Modal, {
  name: 'ESDropzoneOverlay',
  slot: 'Root',
  overridesResolver: (_props, styles) => styles.root,
})(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const DropzoneOverlayContentWrapper = styled('div', {
  name: 'ESDropzoneOverlay',
  slot: 'Content',
  overridesResolver: (_props, styles) => styles.contentWrapper,
})(({ theme }) => ({
  width: 288,
  padding: 16,
  borderRadius: 8,
  boxShadow: theme.vars.palette.shadow.down[900],
  backgroundColor: theme.vars.palette.surface[600],
}));

const DropzoneOverlayContent = styled('div', {
  name: 'ESDropzoneOverlay',
  slot: 'Content',
  overridesResolver: (props, styles) => {
    const {
      ownerState: { isDragOver, isDragOverDocument },
    } = props;
    return [
      styles.content,
      isDragOver && styles.dropzoneOverlayDragOver,
      isDragOverDocument && styles.dropzoneOverlayDragOverDocument,
    ];
  },
})(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 24,
  outline: `1px dashed ${theme.vars.palette.monoA.A300}`,
  outlineOffset: -1,
  borderRadius: 6,
}));

const DropzoneOverlayHeading = styled('div', {
  name: 'ESDropzoneOverlay',
  slot: 'Heading',
  overridesResolver: (_props, styles) => styles.heading,
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  color: theme.vars.palette.primary[300],
}));

const DropzoneOverlayHeadingText = styled(Typography, {
  name: 'ESDropzoneOverlay',
  slot: 'HeadingText',
  overridesResolver: (_props, styles) => styles.headingText,
})(() => ({
  paddingBottom: 4,
  paddingTop: 4,
}));

const DropzoneOverlaySubheading = styled(Typography, {
  name: 'ESDropzoneOverlay',
  slot: 'Subheading',
  overridesResolver: (_props, styles) => styles.subheading,
})(() => ({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  marginTop: 4,
}));

const DropzoneOverlayIcon = styled('div', {
  name: 'ESDropzoneOverlay',
  slot: 'Icon',
  overridesResolver: (_props, styles) => styles.icon,
})(() => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
}));

const DropzoneOverlayInput = styled('input', {
  name: 'ESDropzoneOverlay',
  slot: 'Input',
  overridesResolver: (_props, styles) => styles.input,
})(() => ({
  display: 'none',
}));

/**
 * This component allows to select files by drag and drop on browser window.
 */
export const DropzoneOverlay = (inProps: DropzoneOverlayProps) => {
  const {
    className,
    sx,
    heading,
    subheading,
    icon,
    multiple,
    accept = '*',
    maxSize,
    ref,
    onChange,
    onReject,
    TransitionProps,
    ...props
  } = useThemeProps({
    props: inProps,
    name: 'ESDropzoneOverlay',
  });

  const { isDragOver, onDragEnter, onDragLeave, onDrop } = useDragOver();
  const { isDragOver: isDragOverDocument, ...callbacks } = useDragOver();

  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * @param file File to validate.
   * @returns True if file size is less than maxSize, false otherwise.
   */
  const validateFileSize = (file: File): boolean => (maxSize ? maxSize >= file.size : true);

  const onFileList = (event: ChangeEvent<unknown>, files: FileList) => {
    const acceptedFiles: File[] = [];
    const rejectedFiles: DropzoneOverlayFileRejection[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const typeMatch = validateFileType(file, accept);
      const sizeMatch = validateFileSize(file);

      if (typeMatch && sizeMatch) {
        acceptedFiles.push(file);
      } else {
        const errors: DropzoneOverlayFileError[] = [];

        if (!typeMatch) {
          errors.push('file-invalid-type');
        }

        if (!sizeMatch) {
          errors.push('file-too-large');
        }

        rejectedFiles.push({
          file,
          errors,
        });
      }
    }

    if (rejectedFiles.length) {
      onReject?.(event, rejectedFiles);
    } else if (!multiple && acceptedFiles.length > 1) {
      acceptedFiles.forEach((file) => {
        rejectedFiles.push({
          file,
          errors: ['too-many-files'],
        });
      });

      onReject?.(event, rejectedFiles);
    } else {
      onChange?.(event, acceptedFiles);
    }
  };

  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDropzoneOverlayDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    onDrop();

    if (event.dataTransfer) {
      onFileList(event, event.dataTransfer.files);
    }
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      onFileList(event, event.target.files);
    }
  };

  useDocumentEventListener('dragenter', callbacks.onDragEnter);
  useDocumentEventListener('dragleave', callbacks.onDragLeave);
  useDocumentEventListener('drop', callbacks.onDrop);

  const ownerState = { ...props, isDragOver, isDragOverDocument };
  const classes = useUtilityClasses(ownerState);

  return (
    <DropzoneOverlayRoot
      ref={ref}
      disableAutoFocus
      className={clsx(classes.root, className)}
      open={isDragOverDocument}
      slotProps={{ backdrop: { sx: (theme) => ({ backgroundColor: theme.vars.palette.overlay[700] }) } }}
      sx={sx}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDropzoneOverlayDrop}
    >
      <DropzoneOverlayContentWrapper className={classes.contentWrapper}>
        <Fade appear in={isDragOverDocument} {...TransitionProps}>
          <DropzoneOverlayContent className={clsx(classes.content)}>
            <DropzoneOverlayHeading className={classes.heading}>
              {!!icon && <DropzoneOverlayIcon className={classes.icon}>{icon}</DropzoneOverlayIcon>}

              {!!heading && (
                <DropzoneOverlayHeadingText className={classes.headingText} color="monoA.A900" variant="body200">
                  {heading}
                </DropzoneOverlayHeadingText>
              )}
            </DropzoneOverlayHeading>

            {!!subheading && (
              <DropzoneOverlaySubheading className={classes.subheading} color="monoA.A550" variant="caption">
                {subheading}
              </DropzoneOverlaySubheading>
            )}

            <DropzoneOverlayInput
              ref={inputRef}
              accept={accept}
              className={classes.input}
              multiple={multiple}
              type="file"
              onChange={onInputChange}
            />
          </DropzoneOverlayContent>
        </Fade>
      </DropzoneOverlayContentWrapper>
    </DropzoneOverlayRoot>
  );
};
