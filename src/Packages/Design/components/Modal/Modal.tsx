import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './Modal.style';
import { IModal } from './types';

export const Modal: React.FC<IModal> = ({
  children,
  className,
  open = true,
  footer,
  header = 'Header',
  width = 'md',
  height = '80%',
  dividers = false,
  onClose,
}) => {
  const IconClasses = useStyles();

  return (
    <Dialog
      onClose={onClose}
      open={open}
      className={'_Modal' + (className ? ' ' + className : '')}
      maxWidth={width}
      fullWidth={true}
      PaperProps={{
        elevation: 0,
        style: { height: height },
      }}
    >
      <DialogTitle disableTypography={true} className={'_ModalTitle'}>
        <div>{header}</div>
        <IconButton
          className={'_ModalClose' + (className ? ' ' + className : '')}
          classes={IconClasses}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers={dividers} className={'_ModalContent'}>
        {children}
      </DialogContent>
      {footer && <DialogActions className={'_ModalFooter'}>{footer}</DialogActions>}
    </Dialog>
  );
};
