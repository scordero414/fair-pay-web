import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IConfirmationDialogProps {
  open: boolean;
  title: string;
  description: string;
  cancelMessage: string;
  acceptMessage: string;
  handleCancel: () => void;
  handleAccept: () => void;
}

export const ConfirmationDialog = ({
  open,
  title,
  description,
  cancelMessage,
  acceptMessage,
  handleCancel,
  handleAccept,
}: IConfirmationDialogProps) => {
  return (
    <Dialog open={open} onClose={handleCancel}>
      <DialogTitle color='primary'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>{cancelMessage}</Button>
        <Button onClick={handleAccept} autoFocus>
          {acceptMessage}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
