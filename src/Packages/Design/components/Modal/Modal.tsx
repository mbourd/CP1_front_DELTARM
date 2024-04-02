import React, { ForwardedRef, forwardRef } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './Modal.style';
import { IModal } from './types';

const Modal = forwardRef(
  (
    {
      children,
      className,
      open = false,
      closable = true,
      footer,
      header,
      width = 'md',
      height,
      minHeight,
      maxHeight,
      dividers = false,
      onClose,
      footerBorderTop = false,
    }: React.PropsWithChildren<IModal>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const IconClasses = useStyles();

    return (
      <Dialog
        ref={ref}
        onClose={onClose}
        open={open}
        className={'_Modal' + (className ? ' ' + className : '')}
        maxWidth={width}
        fullWidth={true}
        PaperProps={{
          elevation: 0,
          style: { height: height, maxHeight: maxHeight, minHeight: minHeight },
        }}
      >
        <DialogTitle className={'_ModalTitle'}>
          {header ? <div>{header}</div> : null}
          {closable ? (
            <IconButton
              className={'_ModalClose' + (className ? ' ' + className : '')}
              classes={IconClasses}
              onClick={onClose}
              size="large"
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
        <DialogContent dividers={dividers} className={'_ModalContent'}>
          {children}
        </DialogContent>
        {footer && (
          <DialogActions
            className={'_ModalFooter'}
            style={{ borderTop: footerBorderTop ? '1px solid grey' : 'none' }}
          >
            {footer}
          </DialogActions>
        )}
      </Dialog>
    );
  },
);

Modal.displayName = 'Modal';

export { Modal };
